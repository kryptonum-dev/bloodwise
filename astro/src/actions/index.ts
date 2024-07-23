import { defineAction, z } from "astro:actions";
import { sendContactEmail } from "./sendContactForm";
import { addToMailingList } from "./addToMailingList";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, { message: 'Imię jest wymagane' }),
      email: z.string().email({ message: 'Adres e-mail jest wymagany' }),
      message: z.string().min(1, { message: 'Wiadomość jest wymagana' }),
      legal: z.preprocess(value => value === 'on', z.boolean()).refine(value => value, { message: "Zgoda jest wymagana", }),
    }),
    handler: async ({ name, email, message }) => {
      return await sendContactEmail({ name, email, message });
    },
  }),
  mailing: defineAction({
    accept: "form",
    input: z.object({
      group_id: z.string().min(1, { message: 'ID Grupy jest wymagane' }),
      name: z.string().min(1, { message: 'Imię jest wymagane' }),
      email: z.string().email({ message: 'Adres e-mail jest wymagany' }),
      legal: z.preprocess(value => value === 'on', z.boolean()).refine(value => value, { message: "Zgoda jest wymagana", }),
    }),
    handler: async ({ group_id, name, email }) => {
      return await addToMailingList({ group_id, name, email });
    },
  }),
};
