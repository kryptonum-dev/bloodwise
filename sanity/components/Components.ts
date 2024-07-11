import { defineType } from "sanity";
import HeaderSection from "../schema/components/HeaderSection";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeaderSection
  ],
});
