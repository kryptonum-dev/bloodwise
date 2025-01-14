import { defineField, defineType } from 'sanity';

const NavLinks = defineField({
  name: 'links',
  type: 'object',
  title: 'Linki nawigacyjne',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      validation: Rule =>
        Rule.custom(value => {
          if (value && (!value.startsWith('/') || value.startsWith('//'))) {
            return 'Link musi byc relatywny';
          }
          return true;
        }).required(),
    }),
    defineField({
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy ma wyświetlić się jako przycisk?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'href',
      isHighlighted: 'isHighlighted',
    },
    prepare: ({ title, subtitle, isHighlighted }) => ({
      title,
      subtitle,
      icon: () => isHighlighted ? '🔵' : undefined,
    }),
  }
});

export default defineType({
  name: 'global',
  type: 'document',
  title: 'Globalne',
  icon: () => '🌍',
  fields: [
    defineField({
      name: 'nav',
      type: 'object',
      title: 'Nawigacja',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'links',
          type: 'array',
          title: 'Linki',
          of: [NavLinks],
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      title: 'Stopka',
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'logo',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { accept: 'image/svg+xml' },
            }
          ],
          title: 'Logo',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'annotation',
          type: 'markdown',
          title: 'Adnotacja',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu (opcjonalnie)',
    }),
    defineField({
      name: 'socials',
      type: 'object',
      title: 'Social media',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'facebook',
          type: 'url',
          title: 'Facebook',
          validation: Rule => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
          validation: (Rule) => Rule.uri({ scheme: ['https'] }).error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'OpenGraphImage',
          type: 'image',
          title: 'Open Graph Image',
          description:
            'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px',
        }),
      ],
    }),
    defineField({
      name: 'OrganizationSchema',
      type: 'object',
      title: 'Uporządkowane dane organizacji',
      description: (
        <a
          href="https://developers.google.com/search/docs/appearance/structured-data/organization?hl=pl"
          target="_blank"
          rel="noreferrer"
        >
          Więcej informacji o Schema
        </a>
      ),
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Nazwa Twojej organizacji',
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
          title: 'Opis Twojej organizacji',
        }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Globalne ustawienia',
    })
  }
})

