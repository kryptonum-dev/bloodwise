import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[03] Sekcja logiem i wyróżnikami';
const icon = () => '📰';

export default defineField({
  name: 'EffectiveApproach',
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
      title: 'Wezwanie do działania',
      of: [
        { type: 'cta' }
      ],
      validation: Rule => Rule.required().max(2),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'Elementy',
      validation: Rule => Rule.required().max(5),
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
