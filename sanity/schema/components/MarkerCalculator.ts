import { defineField } from 'sanity';

const title = '[04] Kalulator znaczników';
const icon = () => '📐';

export default defineField({
  name: 'MarkerCalculator',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'mailingForm',
      type: 'object',
      title: 'Formularz do zapisu na listę mailingową',
      fields: [
        defineField({
          name: 'heading',
          type: 'markdown',
          title: 'Nagłówek',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'markdown',
          title: 'Paragraf',
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: title,
      icon,
    }),
  },
});
