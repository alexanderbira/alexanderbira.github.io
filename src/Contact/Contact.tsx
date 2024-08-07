import contactStyles from "./Contact.module.css"
import line from "./line.svg"

import React from "react"
import { BsEnvelopeFill, BsGithub } from "react-icons/bs"

interface SocialLink {
  icon: React.ReactNode
  link: string
  description: string
}

const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    link: "https://github.com/alexanderbira",
    description: "@alexanderbira",
  },
  {
    icon: <BsEnvelopeFill />,
    link: "mailto:mail@alexbr.dev",
    description: "mail@alexbr.dev",
  },
]

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
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.link} target="_blank" rel="noreferrer" className={contactStyles.infoItem}>
              {socialLink.icon}
              <p>{socialLink.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
