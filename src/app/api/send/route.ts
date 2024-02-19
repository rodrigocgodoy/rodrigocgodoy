import { Resend } from 'resend'
import { NextRequest } from 'next/server'
import { z } from 'zod'

import { EmailTemplate } from '@/components/email-template'

// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend('re_DCNktZAH_3yampCRVvtbw1WQviHKgv4mL')

export async function POST(request: NextRequest) {
  try {
    const sendEmailBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
    })

    const body = await request.json()

    const { name, email, message } = sendEmailBodySchema.parse(body)

    console.log(name, email, message)

    const data = await resend.emails.send({
      from: `${name} <${email}>`,
      to: 'rodrigo.godoy@dellub.com',
      subject: `Contact from site`,
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      react: EmailTemplate({ name, email, message }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
