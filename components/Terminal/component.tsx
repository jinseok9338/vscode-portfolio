import React, { useEffect, useRef, useState } from "react";
import * as BaseCommands from "./commands";
import Bash from "./bash";

import styles from "../../styles/Terminal.module.css";

const L_CHAR_CODE = 76;
const C_CHAR_CODE = 67;
const UP_CHAR_CODE = 38;
const DOWN_CHAR_CODE = 40;
const TAB_CHAR_CODE = 9;

const TerminalMenus = ["Problem", "output", "Debug Console", "Terminal"];

interface iTerminalProps {
  // todo
  history: string[];
}
const bash = new Bash();
const Terminal = ({
  history = [],
  structure = {},
  extensions = {},
  prefix = "hacker@default",
  onClose,
}: any) => {
  bash.commands = Object.assign({}, extensions, BaseCommands);
  const [state, setState] = useState({
    settings: { user: { username: prefix.split("@")[1] } },
    history: history,
    structure: structure,
    cwd: "",
  });
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  /*
   * Forward the input along to the Bash autocompleter. If it works,
   * update the input.
   */
  const attemptAutocomplete = () => {
    const input = ref.current.value;
    const suggestion = bash.autocomplete(input, state);
    if (suggestion) {
      ref.current.value = suggestion;
    }
  };

  /*
   * Handle keydown for special hot keys. The tab key
   * has to be handled on key down to prevent default.
   * @param {Event} evt - the DOM event
   */
  // Todo which is deprecated change it to code later...
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.which === TAB_CHAR_CODE) {
      // Tab must be on keydown to prevent default
      attemptAutocomplete();
      evt.preventDefault();
    }
  };

  /*
   * Handle keyup for special hot keys.
   * @param {Event} evt - the DOM event
   *
   * -- Supported hot keys --
   * ctrl + l : clear
   * ctrl + c : cancel current command
   * up - prev command from history
   * down - next command from history
   * tab - autocomplete
   */
  const handleKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.which === L_CHAR_CODE) {
      if (evt.ctrlKey) {
        setState(bash.execute("clear", state));
      }
    } else if (evt.which === C_CHAR_CODE) {
      if (evt.ctrlKey) {
        ref.current.value = "";
      }
    } else if (evt.which === UP_CHAR_CODE) {
      if (bash.hasPrevCommand()) {
        ref.current.value = bash.getPrevCommand();
      } else {
        ref.current.value = "";
      }
    } else if (evt.which === DOWN_CHAR_CODE) {
      if (bash.hasNextCommand()) {
        ref.current.value = bash.getNextCommand();
      } else {
        ref.current.value = "";
      }
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // Execute command
    const input = evt.target[0].value;

    const newState = bash.execute(input, state);
    setState(newState);
    ref.current.value = "";
  };

  const renderHistoryItem = () => {
    return (item, key) => {
      const Prefix = item.hasOwnProperty("cwd") ? (
        <span className={styles.prefix}>{`${prefix} ~${item.cwd} $`}</span>
      ) : undefined;
      return (
        <div data-test-id={`history-${key}`} key={key}>
          {Prefix}
          {item.value}
        </div>
      );
    };
  };

  return (
    <div className={styles.bash}>
      <div className={styles.bashHeader}>
        <ul className={styles.bashActionContainer}>
          {TerminalMenus.map((menu) => (
            <li className={styles.bashActionList}>
              <div>{menu}</div>
            </li>
          ))}
          <li className={styles.bashCloseButton} onClick={() => onClose(false)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className={styles.bashBody} onClick={() => ref.current.focus()}>
        {state.history.map(renderHistoryItem())}
        <form onSubmit={(evt) => handleSubmit(evt)} className={styles.bashForm}>
          <span
            className={styles.bashPrefix}
          >{`${prefix} ~${state.cwd} $`}</span>
          <input
            autoComplete="off"
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={() => ref.current.focus()}
            onKeyUp={(e) => handleKeyUp(e)}
            ref={ref}
            className={styles.bashInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
