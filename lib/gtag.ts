/**
 * Helpers Google Ads — gtag natif, zéro librairie tierce.
 * Les conversions ne se déclenchent que si window.gtag est disponible
 * (ce qui implique que le consentement a été accordé via Consent Mode v2).
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: unknown[];
  }
}

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? "AW-XXXXXXXXX";

function fireConversion(conversionLabel: string | undefined): void {
  if (
    !conversionLabel ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  )
    return;

  window.gtag("event", "conversion", {
    send_to: `${GADS_ID}/${conversionLabel}`,
  });
}

/** Conversion principale — soumission formulaire pré-audit (réponse 200) */
export function fireSubmitConversion(): void {
  fireConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_SUBMIT);
}

/** Conversion secondaire — clic vers /offre */
export function fireOfferClickConversion(): void {
  fireConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_CLICK);
}
