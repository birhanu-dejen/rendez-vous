// In a shared file, e.g., `lib/metadata.ts`
export const siteName = "Rendez-Vous";
export const siteUrl = "https://rendez-vous-seven.vercel.app";

export const defaultDescription =
  "Experience premium hotel services in Addis Ababa, Ethiopia with Rendez-Vous. Comfort, luxury, and authentic Ethiopian hospitality await you.";

export const metadataTemplate = (
  pageTitle: string,
  pageDescription?: string
) => ({
  title: {
    template: `%s / ${siteName} hotel`,
    default: `Welcome / ${siteName} hotel`,
  },
  description: pageDescription || defaultDescription,
  openGraph: {
    title: pageTitle ? `${pageTitle} | ${siteName}` : `Welcome / ${siteName}`,
    description: pageDescription || defaultDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/images/hero/hero.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - ${pageTitle || "Home"}`,
      },
    ],
    locale: "en_ET",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle ? `${pageTitle} | ${siteName}` : `Welcome / ${siteName}`,
    description: pageDescription || defaultDescription,
    images: [`${siteUrl}/images/hero/hero.jpg`],
    site: "@RendezVous", // update your Twitter handle
  },
});
