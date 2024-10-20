import contactStyles from "./Contact.module.css";
import email from "./email.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import banano from "./banano.svg";
import line from "./line.svg";

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <h1>
        <span
          className={contactStyles.title}
          style={{ backgroundImage: `url(${line})` }}
        >
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
          <a
            href="https://www.linkedin.com/in/alexb-r/"
            target="_blank"
            rel="noreferrer"
            className={contactStyles.infoItem}
          >
            <img src={linkedin} alt="linkedin" className={contactStyles.icon} />
            <p className={contactStyles.link}>Alexander Biraben-Renard</p>
          </a>
          <a className={contactStyles.infoItem} href="mailto:mail@alexbr.dev">
            <img src={email} alt="email" className={contactStyles.icon} />
            <p>mail@alexbr.dev</p>
          </a>
          {/* @ts-ignore */}
          {typeof web3 !== "undefined" &&
            // @ts-ignore
            (window.banano ? (
              <span
                className={contactStyles.infoItem}
                onClick={() =>
                  // @ts-ignore
                  window.banano.request_payment(
                    "ban_1a1exbrdd1oqe7r1j6ebx887n8dopqpqbcdsdd5w38rst9zepz4641ejzr4y",
                    1
                  )
                }
              >
                <img src={banano} alt="banano" className={contactStyles.icon} />
                <p>ban_1a1exbr…</p>
              </span>
            ) : (
              <a
                className={contactStyles.infoItem}
                href="https://creeper.banano.cc/account/ban_1a1exbrdd1oqe7r1j6ebx887n8dopqpqbcdsdd5w38rst9zepz4641ejzr4y"
                target="_blank"
                rel="noreferrer"
              >
                <img src={banano} alt="banano" className={contactStyles.icon} />
                <p>ban_1a1exbr…</p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
