import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { removeHtmlTags } from '@/utils/remove-html-tags';

type Props = {
  name: string;
  email: string;
  message: string;
  legal: boolean;
}

export const POST: APIRoute = async ({ request }) => {
  const req = await request.json() as Props;

  const valudate = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
    legal: z.boolean().refine(val => val === true)
  }).safeParse(req);

  if (!valudate.success) return new Response(JSON.stringify({ success: false }), { status: 422 });

  const { name, email, message } = req;

  const body = [
    `<p>Imię: <b>${name}</b></p>`,
    `<p>Adres e-mail: <b>${email}</b></p>`,
    `<p>${message.trim()}</p>`,
    '<br />',
    '<br />',
    '<p><em>Wyrażono zgodnę na politykę prywatności</em></p>'
  ].join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${name} ze strony Bloodwise <onboarding@resend.dev>`,
      to: 'contact@bloodwise.com.pl',
      reply_to: `${name} <${email}>`,
      subject: `${name} przesyła wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    }),
  });

  if (res.ok) {
    return new Response(JSON.stringify({
      success: true,
      message: "Successfully sent",
    }))
  }
  return new Response(JSON.stringify({
    success: false,
    message: "Failed to send",
  }), { status: 400 })
}
