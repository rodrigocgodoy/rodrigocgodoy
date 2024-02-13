import { StaticImageData } from 'next/image'

import css from '../../public/image/css.svg'
import docker from '../../public/image/docker.svg'
import eslint from '../../public/image/eslint.svg'
import expo from '../../public/image/expo.svg'
import express from '../../public/image/express.svg'
import figma from '../../public/image/figma.svg'
import framer from '../../public/image/framer.svg'
import git from '../../public/image/git.svg'
import github from '../../public/image/github.svg'
import html from '../../public/image/html.svg'
import javascript from '../../public/image/javascript.svg'
import jest from '../../public/image/jest.svg'
import nestjs from '../../public/image/nestjs.svg'
import nextjs from '../../public/image/nextjs.svg'
import ngnix from '../../public/image/ngnix.svg'
import nodejs from '../../public/image/nodejs.svg'
import postgresql from '../../public/image/postgresql.svg'
import prisma from '../../public/image/prisma.svg'
import radixui from '../../public/image/radixui.svg'
import reactjs from '../../public/image/reactjs.svg'
import redux from '../../public/image/redux.svg'
import shadcn from '../../public/image/shadcn.svg'
import styledcomponents from '../../public/image/styledcomponents.svg'
import tailwindcss from '../../public/image/tailwindcss.svg'
import typescript from '../../public/image/typescript.svg'
import vitest from '../../public/image/vitest.svg'

type Stacks = Array<{
  name: string
  image: StaticImageData
}>

export const stacks: Stacks = [
  {
    name: 'ReactJS',
    image: reactjs,
  },
  {
    name: 'Next.js',
    image: nextjs,
  },
  {
    name: 'Expo',
    image: expo,
  },
  {
    name: 'Radix-ui',
    image: radixui,
  },
  {
    name: 'Shadcn',
    image: shadcn,
  },
  {
    name: 'Tailwindcss',
    image: tailwindcss,
  },
  {
    name: 'Styled-Components',
    image: styledcomponents,
  },
  {
    name: 'Typescript',
    image: typescript,
  },
  {
    name: 'Javascript',
    image: javascript,
  },
  {
    name: 'Node.js',
    image: nodejs,
  },
  {
    name: 'Docker',
    image: docker,
  },
  {
    name: 'Express',
    image: express,
  },
  {
    name: 'NestJS',
    image: nestjs,
  },
  {
    name: 'Eslint',
    image: eslint,
  },
  {
    name: 'Vitest',
    image: vitest,
  },
  {
    name: 'Prisma',
    image: prisma,
  },
  {
    name: 'Postgresql',
    image: postgresql,
  },
  {
    name: 'Ngnix',
    image: ngnix,
  },
  {
    name: 'Redux',
    image: redux,
  },
  {
    name: 'Jest',
    image: jest,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'Git',
    image: git,
  },
  {
    name: 'GitHub',
    image: github,
  },
  {
    name: 'Figma',
    image: figma,
  },
  {
    name: 'Framer',
    image: framer,
  },
]
