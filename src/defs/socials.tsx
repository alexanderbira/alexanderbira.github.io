import { SocialLink } from "../lib/SocialLink.ts"
import { BsEnvelopeFill, BsGithub } from "react-icons/bs"

export const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    link: "https://github.com",
    description: "@myGithub",
  },
  {
    icon: <BsEnvelopeFill />,
    link: "mailto:mail@example.com",
    description: "mail@example.com",
  },
]
