export const CATEGORIES = [
  { slug: "mehndi", name: "Mehndi", icon: "🌿" },
  { slug: "mayun", name: "Mayun", icon: "🌼" },
  { slug: "dholki", name: "Dholki", icon: "🥁" },
  { slug: "baraat", name: "Baraat", icon: "🐎" },
  { slug: "nikah", name: "Nikah", icon: "🌙" },
  { slug: "walima", name: "Walima", icon: "✨" },
  { slug: "engagement", name: "Engagement", icon: "💍" },
  { slug: "bundle", name: "Wedding Bundles", icon: "🎁" },
] as const;

export type Invitation = {
  id: string; title: string; category: (typeof CATEGORIES)[number]["slug"];
  video: string;       // /videos/xxx.mp4 (put file in public/videos)
  thumb?: string;      // /thumbs/xxx.jpg (put file in public/thumbs)
  description: string; price?: string;
};

// To add a design: copy one entry, change the id, drop files into /public.
export const INVITATIONS: Invitation[] = [
  { id: "KI-001", title: "Royal Mehndi Glow", category: "mehndi", video: "/videos/ki-001.mp4", thumb: "/thumbs/ki-001.jpeg", description: "Emerald and gold with paisley florals and fairy lights.", price: "PKR 999" },
  { id: "KI-002", title: "Golden Nikah Arch", category: "nikah", video: "/videos/ki-002.mp4", thumb: "/thumbs/ki-002.jpeg", description: "A mehrab arch opens to reveal your names in gold.", price: "PKR 999" },
  { id: "KI-003", title: "Walima Night", category: "walima", video: "/videos/ki-003.mp4", thumb: "/thumbs/ki-003.jpeg", description: "Slow shimmering light.", price: "PKR 999" },
  { id: "KI-004", title: "Engagement Joy", category: "dholki", video: "/videos/ki-004.mp4", thumb: "/thumbs/ki-004.jpeg", description: "Playful, colourful and full of happiness.", price: "PKR 999" },
  { id: "KI-005", title: "Baraat Majesty", category: "baraat", video: "/videos/ki-005.mp4", thumb: "/thumbs/ki-005.jpeg", description: "A regal entrance with royal motifs.", price: "PKR 999" },
  { id: "KI-006", title: "Full Wedding Bundle", category: "bundle", video: "/videos/ki-006.mp4", thumb: "/thumbs/ki-006.jpeg", description: "Matching cards for every event, one theme.", price: "PKR 3999" },
];
