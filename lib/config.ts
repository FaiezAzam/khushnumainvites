// Edit these values. WhatsApp number: country code + number, digits only.
export const SITE = {
  name: "Khushnuma Invites",
  tagline: "Digital Wedding Cards | Pakistan",
  whatsapp: "923076702658",
  instagram: "https://instagram.com/khushnuma_invites",
};
export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const orderMessage = (design: string) =>
  `Hello! I'm interested in ordering your digital wedding invitation.\n\nInvitation Design: ${design}\n\nPlease share the pricing and customization details.`;
