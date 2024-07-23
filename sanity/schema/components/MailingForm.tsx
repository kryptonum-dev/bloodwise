import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = '[10] Zapis do listy mailingowej';
const icon = () => '📩';

export default defineField({
  name: 'MailingForm',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'group_id',
      type: 'string',
      title: 'Group ID',
      description: (
        <>
          Group ID z MailerLite, do której zostanie dodany użytkownik po wypełnieniu formularza.{' '}
          <a
            href="https://www.mailerlite.com/pl/help/where-to-find-the-mailerlite-api-key-groupid-and-documentation#new/group-id"
            target="_blank"
            rel="noreferrer"
          >
            Więcej informacji o Group ID.
          </a>
        </>
      ),
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
      img: 'img',
    },
    prepare: ({ heading, img }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media: img,
      icon,
    }),
  },
});
