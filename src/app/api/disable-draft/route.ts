import { draftMode } from 'next/headers'
import { RedirectType, redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  draftMode().disable()

  redirect(searchParams.get('redirect') || '/', RedirectType.push)
}
