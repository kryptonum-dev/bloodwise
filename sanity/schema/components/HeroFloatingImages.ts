import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[01] Sekcja HERO z unoszącymi się zdjęciami';
const icon = () => '☁️';

export default defineField({
  name: 'HeroFloatingImages',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required().max(2),
    }),
    defineField({
      name: 'images',
      type: 'object',
      title: 'Zdjęcia',
      fields: [
        defineField({
          name: 'background',
          type: 'image',
          title: 'Zdjęcie tła',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'foreground',
          type: 'image',
          title: 'Zdjęcie z przodu',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'charts',
          type: 'array',
          title: 'Zdjęcia wykresów',
          of: [
            { type: 'image' }
          ],
          validation: Rule => Rule.required(),
        }),
      ]
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'images.background',
    },
    prepare: ({ heading, media }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media,
      icon,
    }),
  },
});
