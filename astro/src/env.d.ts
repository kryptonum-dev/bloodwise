/// <reference types="astro/client" />

interface Window {
  dataLayer?: Object[];
  gtag: Gtag.Gtag = function () { window.dataLayer.push(arguments); };
}
