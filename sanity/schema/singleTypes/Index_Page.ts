import { defineField, defineType } from "sanity"

export default defineType({
  name: 'Index_Page',
  type: 'document',
  title: 'Strona główna',
  icon: () => '🏠',
  fields: [
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
      title: 'Strona główna',
    }),
  }
});
