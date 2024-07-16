import { defineAction, z } from "astro:actions";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, { message: 'Imię jest wymagane' }),
      email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
      message: z.string().min(3, { message: 'Wiadomość jest wymagana' }),
      legal: z.preprocess(value => value === 'on', z.boolean()).refine(value => value, { message: "You must agree to the terms and conditions", }),
    }),
    handler: async (data) => {
      const response = await fetch(`http://localhost:4321/api/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await response.json() as { success: boolean };
    },
  }),
};
