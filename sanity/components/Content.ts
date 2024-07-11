import { defineType } from "sanity";
import HeaderSection from "../schema/components/HeaderSection";

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeaderSection
  ],
});
