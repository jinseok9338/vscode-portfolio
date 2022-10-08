interface BaseStylesType {
  ReactBash: any;
  header: any;
  redCircle: any;
  yellowCircle: any;
  greenCircle: any;
  body: any;
  form: any;
  input: any;
  prefix: any;
  actionContainer: any;
  actionList: any;
  actionTap: any;
  closeButton: any;
}

const BaseStyles = {} as BaseStylesType;

BaseStyles.ReactBash = {
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.9rem",
  fontWeight: "400",
  height: "200px",
  overflowY: "scroll",
  textAlign: "left",
  position: "fixed",
  width: "82%",
  bottom: "25px",
  marginLeft: "-2rem",
};

BaseStyles.header = {
  height: "35px",
  padding: "5px 10px 0 0",
  position: "sticky",
  top: "0",
};

const circle = {
  borderRadius: "50%",
  display: "inline-block",
  height: "15px",
  marginRight: "5px",
  width: "15px",
};

BaseStyles.redCircle = Object.assign({}, circle, {
  backgroundColor: "#bf616a",
});

BaseStyles.yellowCircle = Object.assign({}, circle, {
  backgroundColor: "#ebcb8b",
});

BaseStyles.greenCircle = Object.assign({}, circle, {
  backgroundColor: "#a3be8c",
});

BaseStyles.body = {
  flexGrow: 1,
  overflowY: "none",
  padding: "10px",
};

BaseStyles.form = {
  display: "flex",
};

BaseStyles.input = {
  background: "none",
  border: "none",
  color: "inherit",
  flexGrow: "1",
  fontFamily: "inherit",
  fontSize: "inherit",
  outline: "none !important",
  padding: 0,
};

BaseStyles.prefix = {
  marginRight: "5px",
};

BaseStyles.actionContainer = {
  display: "flex",
  margin: "0 auto",
  padding: "0",
  height: "100%",
  width: "100%",
  alignItems: "center",
  listStyleType: "disc",
};

BaseStyles.actionList = {
  textTransform: "uppercase",
  fontSize: "0.9rem",
  padding: "2px 10px",
  display: "flex",
  pointerEvent: "none",
  userSelect: "none" /* Standard syntax */,
};

BaseStyles.closeButton = {
  textTransform: "uppercase",
  fontSize: "16px",
  padding: "2px 10px",
  display: "flex",
  marginLeft: "auto",
  cursor: "pointer",
};

export default {
  light: Object.assign({}, BaseStyles, {
    body: Object.assign({}, BaseStyles.body, {
      backgroundColor: "#fff",
      color: "#5D5D5D",
    }),
    header: Object.assign({}, BaseStyles.header, {
      backgroundColor: "#fff",
    }),
    prefix: Object.assign({}, BaseStyles.prefix, {
      color: "#bd081c",
    }),
  }),
  dark: Object.assign({}, BaseStyles, {
    body: Object.assign({}, BaseStyles.body, {
      backgroundColor: "#011627;",
      color: "#d0d0d0",
    }),
    header: Object.assign({}, BaseStyles.header, {
      backgroundColor: "#011627;",
    }),
    prefix: Object.assign({}, BaseStyles.prefix, {
      color: "#5b65fb",
    }),
  }),
};
