import { defineField, defineType } from "sanity"
import { removeMarkdown } from "../../utils/remove-markdown";

const title = 'Polityka prywatności';

export default defineType({
  name: 'PrivacyPolicy_Page',
  type: 'document',
  title: title,
  icon: () => '📄',
  fields: [
    defineField({
      name: 'Hero',
      type: 'object',
      title: 'Sekcja Hero',
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
      ],
    }),
    defineField({
      name: 'Content',
      type: 'array',
      title: 'Zawartość',
      of: [
        defineField({
          name: 'item',
          title: 'Element',
          type: 'object',
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
          ],
          preview: {
            select: {
              heading: 'heading',
              paragraph: 'paragraph'
            },
            prepare: ({ heading, paragraph }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
            })
          }
        })
      ],
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    prepare: () => ({
      title: title,
    }),
  }
});
