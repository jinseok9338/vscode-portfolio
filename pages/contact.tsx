import React from "react";
import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

const ContactPage = ({ isUserKorean }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      const { message } = await res.json();
      alert(message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("failed");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>{`${
          isUserKorean ? "소셜 미디어" : "Reach Out Via Socials"
        }`}</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>{`${
          isUserKorean ? "이메일을 보내주세요" : "Or Send me an Email"
        }`}</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const userlanguages =
    typeof navigator === "undefined"
      ? req?.headers["accept-language"]?.split(",")
      : ["en"];

  const isUserKorean = userlanguages?.includes("ko-KR") ? true : false;
  return {
    props: { title: "Contact", isUserKorean },
  };
}

export default ContactPage;
