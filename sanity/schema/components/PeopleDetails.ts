import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[08] Sekcja z zespołem';
const icon = () => '👥';

export default defineField({
  name: 'PeopleDetails',
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
          type: 'object',
          name: 'person',
          title: 'Osoba',
          fields: [
            defineField({
              name: 'img',
              type: 'image',
              title: 'Zdjęcie',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'name',
              type: 'string',
              title: 'Imię i nazwisko',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'markdown',
              title: 'Opis',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              description: 'description',
              media: 'img',
            },
            prepare: ({ name, description, media }) => ({
              title: name,
              subtitle: removeMarkdown(description),
              media,
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
