import { defineType } from "sanity";
import HeroFloatingImages from "../schema/components/HeroFloatingImages";
import AdvantagesShowcase from "../schema/components/AdvantagesShowcase";
import EffectiveApproach from "../schema/components/EffectiveApproach";
import MarkerCalculator from "../schema/components/MarkerCalculator";
import HeaderSection from "../schema/components/HeaderSection";
import ContactForm from "../schema/components/ContactForm";
import Process from "../schema/components/Process";
import QuoteCards from "../schema/components/QuoteCards";
import PeopleDetails from "../schema/components/PeopleDetails";
import MailingForm from "../schema/components/MailingForm";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroFloatingImages,
    AdvantagesShowcase,
    EffectiveApproach,
    MarkerCalculator,
    HeaderSection,
    Process,
    QuoteCards,
    PeopleDetails,
    ContactForm,
    MailingForm,
  ],
});
