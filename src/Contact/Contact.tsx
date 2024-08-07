import contactStyles from "./Contact.module.css"
import email from "./email.svg"
import github from "./github.svg"
import line from "./line.svg"

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <h1>
        <span className={contactStyles.title} style={{ backgroundImage: `url(${line})` }}>
          Contact Me
        </span>
      </h1>

      <div className={contactStyles.info}>
        <div className="hidden">
          <a
            href="https://github.com/alexanderbira"
            target="_blank"
            rel="noreferrer"
            className={contactStyles.infoItem}
          >
            <img src={github} alt="github" className={contactStyles.icon} />
            <p className={contactStyles.link}>@alexanderbira</p>
          </a>
          <a className={contactStyles.infoItem} href="mailto:mail@alexbr.dev">
            <img src={email} alt="email" className={contactStyles.icon} />
            <p>mail@alexbr.dev</p>
          </a>
        </div>
      </div>
    </div>
  )
}
