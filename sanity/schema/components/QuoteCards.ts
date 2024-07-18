import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[07] Sekcja z źródłami informacji';
const icon = () => '❝';

export default defineField({
  name: 'QuoteCards',
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
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          fields: [
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Logo',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'paragraph',
              type: 'markdown',
              title: 'Paragraf',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'url',
              title: 'Link (opcjonalne)',
            })
          ],
          preview: {
            select: {
              logo: 'logo',
              paragraph: 'paragraph',
              link: 'link',
            },
            prepare: ({ logo, paragraph, link }) => ({
              title: removeMarkdown(paragraph),
              subtitle: link,
              media: logo,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      icon,
    }),
  },
});
