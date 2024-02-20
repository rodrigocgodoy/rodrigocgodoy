import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeProjectFields {
  title: EntryFieldTypes.Symbol
  resume: EntryFieldTypes.Symbol
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  ogImage: EntryFieldTypes.Symbol
  content: EntryFieldTypes.RichText
  startDate: EntryFieldTypes.Date
  hasEndDate: EntryFieldTypes.Boolean
  endDate?: EntryFieldTypes.Date
  slug: EntryFieldTypes.Symbol
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  'project'
>
export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProjectSkeleton, Modifiers, Locales>
