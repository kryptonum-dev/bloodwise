import { defineType } from "sanity";
import HeroFloatingImages from "../schema/components/HeroFloatingImages";
import EffectiveApproach from "../schema/components/EffectiveApproach";
import HeaderSection from "../schema/components/HeaderSection";
import ContactForm from "../schema/components/ContactForm";
import Process from "../schema/components/Process";
import QuoteCards from "../schema/components/QuoteCards";
import PeopleDetails from "../schema/components/PeopleDetails";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroFloatingImages,
    EffectiveApproach,
    HeaderSection,
    Process,
    QuoteCards,
    PeopleDetails,
    ContactForm,
  ],
});
