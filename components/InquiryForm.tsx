"use client";
import { CATEGORIES, INVITATIONS } from "@/lib/invitations";
import { waLink } from "@/lib/config";

export default function InquiryForm() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = `Hello Khushnuma Invites!\n\nName: ${f.name}\nWhatsApp: ${f.phone}\nDesign: ${f.design || "Not selected"}\nEvent: ${f.event}\n\n${f.message || ""}`;
    window.open(waLink(msg), "_blank");
  };
  const field = "w-full rounded-xl border border-gold/50 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-gold";
  return (
    <form onSubmit={submit} className="mx-auto grid max-w-xl gap-4 rounded-3xl border border-gold/40 bg-white/60 p-6 sm:p-8">
      <input name="name" required placeholder="Full name" className={field} />
      <input name="phone" required type="tel" placeholder="Your WhatsApp number" className={field} />
      <select name="design" className={field}><option value="">Select a design (optional)</option>
        {INVITATIONS.map((i) => <option key={i.id}>{i.title} ({i.id})</option>)}</select>
      <select name="event" className={field}>{CATEGORIES.map((c) => <option key={c.slug}>{c.name}</option>)}</select>
      <textarea name="message" rows={3} placeholder="Anything else? (names, date, colours)" className={field} />
      <button className="btn btn-gold">Send on WhatsApp</button>
    </form>
  );
}
