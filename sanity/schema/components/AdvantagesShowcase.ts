import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[02] Sekcja z zaletami';
const icon = () => '✅';

export default defineField({
  name: 'AdvantagesShowcase',
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
      title: 'Elementy',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          title: 'Element',
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
              name: 'img',
              type: 'image',
              title: 'Zdjęcie',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              paragraph: 'paragraph',
              img: 'img',
            },
            prepare: ({ heading, paragraph, img }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
              media: img,
            }),
          }
        })
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'list.0.img',
    },
    prepare: ({ heading, media }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media,
      icon,
    }),
  },
});
