/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface Window {
  dataLayer: Object[];
  getCookie: (name: string) => string;
}
