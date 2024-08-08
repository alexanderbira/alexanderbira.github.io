import { SocialLink } from "../lib/SocialLink.ts"
import { BsEnvelopeFill, BsGithub } from "react-icons/bs"

export const socialLinks: SocialLink[] = [
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
