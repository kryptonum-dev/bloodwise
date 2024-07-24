import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[04] Kalulator znaczników';
const icon = () => '📐';

export default defineField({
  name: 'MarkerCalculator',
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
