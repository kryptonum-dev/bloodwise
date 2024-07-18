import { defineField, defineType } from "sanity"

const title = 'Nie znaleziono strony';

export default defineType({
  name: 'NotFound_Page',
  type: 'document',
  title: title,
  icon: () => '❌',
  fields: [
    defineField({
      name: 'Hero',
      type: 'object',
      title: 'Sekcja Hero',
      options: { collapsible: true },
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
          title: 'Wezwanie do działania',
          of: [
            { type: 'cta' }
          ],
          validation: Rule => Rule.required().max(2),
        }),
      ],
    }),
    defineField({
      name: 'components',
      type: 'components',
      title: 'Komponenty podstrony',
      description: 'Komponenty podstrony to sekcje strony internetowej, które można dodawać, usuwać i zmieniać ich kolejność. Umożliwiają elastyczne zarządzanie treścią i układem strony.',
      options: { collapsible: true },
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
