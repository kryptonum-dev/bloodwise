import { defineType } from "sanity";
import HeaderSection from "../schema/components/HeaderSection";
import ContactForm from "../schema/components/ContactForm";
import QuoteCards from "../schema/components/QuoteCards";
import HeroFloatingImages from "../schema/components/HeroFloatingImages";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroFloatingImages,
    HeaderSection,
    ContactForm,
    QuoteCards,
  ],
});
