import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

interface Social {
  name: string
  url: string
  icon: JSX.Element
}

const classIcon = 'size-6'

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <GitHubLogoIcon className={classIcon} />,
    url: 'https://github.com/rodrigocgodoy',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInLogoIcon className={classIcon} />,
    url: 'https://linkedin.com/in/rodrigocgodoy',
  },
  {
    name: 'Instagram',
    icon: <InstagramLogoIcon className={classIcon} />,
    url: 'https://instagram.com/rodrigocgodoy',
  },
  {
    name: 'X (Twitter)',
    icon: <TwitterLogoIcon className={classIcon} />,
    url: 'https://twitter.com/rodrigogodoy__',
  },
]
