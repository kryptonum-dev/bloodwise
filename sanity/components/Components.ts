import { defineType } from "sanity";
import HeaderSection from "../schema/components/HeaderSection";
import ContactForm from "../schema/components/ContactForm";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeaderSection,
    ContactForm,
  ],
});
