import { Entry, createClient } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'

import { TypeProjectSkeleton } from '@/contentful/types'

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

const prodClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
})

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  host: 'preview.contentful.com',
})

export function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient
  }

  return prodClient
}

export type ProjectEntry = Entry<TypeProjectSkeleton, undefined, string>

export interface Project {
  title: string
  resume: string
  startDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  endDate:
    | `${number}-${number}-${number}T${number}:${number}:${number}Z`
    | undefined
  hasEndDate: boolean
  slug: string
  content: RichTextDocument
  ogImage: string
  tags: string[]
}

export function parseContentfulProject(
  projectEntry?: ProjectEntry,
): Project | null {
  if (!projectEntry) {
    return null
  }

  return {
    title: projectEntry.fields.title,
    resume: projectEntry.fields.resume,
    startDate: projectEntry.fields.startDate,
    endDate: projectEntry.fields.endDate,
    hasEndDate: projectEntry.fields.hasEndDate,
    slug: projectEntry.fields.slug,
    content: projectEntry.fields.content,
    ogImage: projectEntry.fields.ogImage,
    tags: projectEntry.fields.tags,
  }
}
