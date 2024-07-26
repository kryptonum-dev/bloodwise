
import { removeHtmlTags } from '@/utils/remove-html-tags';

type Props = {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: Props) {
  const body = [
    `<p>Imię: <b>${name}</b></p>`,
    `<p>Adres e-mail: <b>${email}</b></p>`,
    `<p>${message.trim()}</p>`,
    '<br />',
    '<br />',
    '<p><em>Wyrażono zgodę na politykę prywatności</em></p>'
  ].join('');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${name} ze strony Bloodwise <formularz@bloodwise.com.pl>`,
        to: 'contact@bloodwise.com.pl',
        bcc: 'bogumil@kryptonum.eu',
        reply_to: `${name} <${email}>`,
        subject: `${name} przesyła wiadomość przez formularz kontaktowy`,
        html: body,
        text: removeHtmlTags(body),
      }),
    });

    if (res.ok) {
      return { success: true, message: "Successfully sent" };
    } else {
      return { success: false, message: "Failed to send" };
    }
  } catch {
    return { success: false, message: "An error occurred while sending the email" };
  }
}
