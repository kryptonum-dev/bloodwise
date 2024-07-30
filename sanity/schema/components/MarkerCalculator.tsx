import { defineField } from 'sanity';

const title = '[04] Kalulator znaczników';
const icon = () => '📐';

const ScopeItemSchama = defineField({
  name: 'scopeItem',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      title: 'Wartość',
      validation: Rule => Rule.regex(/^<\d+(\.\d+|,\d+)?$|^\d+(\.\d+|,\d+)?-\d+(\.\d+|,\d+)?$|^>\d+(\.\d+|,\d+)?$/).error('Poprawny format to: <liczba, liczba-liczba, lub >liczba'),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'color',
      type: 'string',
      options: {
        list: [
          { title: 'Czerwony', value: 'red' },
          { title: 'Pomarańczowy', value: 'orange' },
          { title: 'Zielony', value: 'green' },
        ],
      },
      title: 'Kolor',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      value: 'value',
      color: 'color',
    },
    prepare: ({ title, value, color }) => ({
      title,
      subtitle: value,
      media: <span style={{ backgroundColor: color, width: 24, height: 24, display: 'inline-block' }} />,
    }),
  },
});

export default defineField({
  name: 'MarkerCalculator',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'results',
      type: 'array',
      title: 'Wyniki',
      of: [
        {
          type: 'object',
          title: 'Element wyniku',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Nazwa biomarkera',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'isGenderSpecific',
              type: 'boolean',
              title: 'Czy biomarker jest zależny od płci?',
              initialValue: false,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'scope',
              type: 'array',
              title: 'Zakres',
              of: [
                ScopeItemSchama,
              ],
              validation: Rule => Rule.custom((value, context) => {
                const parent = context?.parent as { isGenderSpecific: boolean };
                if (!parent.isGenderSpecific && !value) {
                  return 'Zakres jest wymagany';
                }
                return true;
              }),
              hidden: ({ parent }) => parent.isGenderSpecific,
            }),
            defineField({
              name: 'scopeGenederSpecific',
              type: 'object',
              title: 'Zakres w zależności od płci',
              fields: [
                defineField({
                  name: 'female',
                  type: 'array',
                  title: 'Kobieta',
                  of: [
                    ScopeItemSchama,
                  ],
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'male',
                  type: 'array',
                  title: 'Mężczyzna',
                  of: [
                    ScopeItemSchama,
                  ],
                  validation: Rule => Rule.required(),
                }),
              ],
              validation: Rule => Rule.custom((value, context) => {
                const parent = context?.parent as { isGenderSpecific: boolean };
                if (parent.isGenderSpecific && !value) {
                  return 'Zakres w zależności od płci jest wymagany';
                }
                return true;
              }),
              hidden: ({ parent }) => !parent.isGenderSpecific,
            }),
            defineField({
              name: 'lowCauses',
              type: 'object',
              title: 'Przyczyny niskiego wyniku',
              fields: [
                defineField({
                  name: 'title',
                  type: 'text',
                  rows: 3,
                  title: 'Tytuł',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  type: 'markdown',
                  title: 'Opis',
                  validation: Rule => Rule.required(),
                }),
              ],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'highCauses',
              type: 'object',
              title: 'Przyczyny niskiego wyniku',
              fields: [
                defineField({
                  name: 'title',
                  type: 'text',
                  rows: 3,
                  title: 'Tytuł',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  type: 'markdown',
                  title: 'Opis',
                  validation: Rule => Rule.required(),
                }),
              ],
              validation: Rule => Rule.required(),
            })
          ],
        },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mailingForm',
      type: 'object',
      title: 'Formularz do zapisu na listę mailingową',
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
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: title,
      icon,
    }),
  },
});
