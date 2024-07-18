import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[06] Sekcja procesu';
const icon = () => '📰';

export default defineField({
  name: 'Process',
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
      name: 'list',
      type: 'array',
      title: 'Lista kroków',
      of: [
        defineField({
          type: 'object',
          name: 'step',
          title: 'Krok',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Ikona',
              validation: Rule => Rule.required(),
            }),
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
          ],
          preview: {
            select: {
              heading: 'heading',
              paragraph: 'paragraph',
              media: 'icon',
            },
            prepare: ({ heading, paragraph, media }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
              media,
            }),
          },
        })
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({ heading, media }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media,
      icon,
    }),
  },
});
