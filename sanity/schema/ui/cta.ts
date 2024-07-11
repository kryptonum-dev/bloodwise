import { defineField, defineType } from "sanity"

export default defineType({
  name: 'cta',
  type: 'object',
  title: 'Wezwanie do działania',
  icon: () => '🗣️',
  fields: [
    defineField({
      name: 'theme',
      type: 'string',
      title: 'Motyw',
      options: {
        list: [
          {
            title: 'Główne',
            value: 'primary',
          },
          {
            title: 'Dodatkowe',
            value: 'secondary',
          }
        ],
      },
      initialValue: 'primary',
      validation: Rule => Rule.required(),
      fieldset: 'column',
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: Rule => Rule.required(),
      fieldset: 'column',
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (wymagany protokół https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('#') && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Nieprawidłowy adres URL.';
          }
          return true;
        }).required(),
    }),
  ],
  fieldsets: [
    { name: 'column', options: { columns: 2 }, title: 'Wygląd' },
  ],
  preview: {
    select: {
      theme: 'theme',
      text: 'text',
      href: 'href',
    },
    prepare: ({ theme, text, href }) => ({
      title: `(${theme === 'primary' ? 'Główne' : 'Dodatkowe'}) ${text}`,
      subtitle: href,
    })
  },
});
