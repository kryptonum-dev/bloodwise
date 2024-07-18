import { defineAction, z } from "astro:actions";
import { sendContactEmail } from "./sendContactForm";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, { message: 'Imię jest wymagane' }),
      email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
      message: z.string().min(1, { message: 'Wiadomość jest wymagana' }),
      legal: z.preprocess(value => value === 'on', z.boolean()).refine(value => value, { message: "You must agree to the terms and conditions", }),
    }),
    handler: async ({ name, email, message }) => {
      return await sendContactEmail({ name, email, message });
    },
  }),
};
