import Image from "next/image";
import Gallery from "@/components/Gallery";
import InquiryForm from "@/components/InquiryForm";
import { CATEGORIES } from "@/lib/invitations";
import { SITE, waLink } from "@/lib/config";

const lights = Array.from({ length: 22 }, (_, i) => ({ l: (i * 47) % 100, t: (i * 31) % 70, s: 3 + (i % 4), d: (i % 7) * 0.5 }));
const hello = "Hello! I'd like to know more about your digital wedding invitations.";
const Title = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="mb-10 text-center"><p className="font-display text-xs tracking-[.4em] text-emerald uppercase">{k}</p>
    <h2 className="gold-text mt-2 font-display text-3xl sm:text-4xl">{children}</h2><p className="mt-2 text-gold">❖ ☪ ❖</p></div>
);

export default function Home() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4 sm:px-10">
        <span className="gold-text font-display text-lg tracking-widest">KHUSHNUMA</span>
        <nav className="hidden gap-6 font-display text-[11px] tracking-widest uppercase sm:flex">
          <a href="#collection">Collection</a><a href="#events">Events</a><a href="#how">How it works</a><a href="#contact">Contact</a></nav>
      </header>

      <section className="pattern relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,#fff8e1,#FBF6EA_60%,#f3e6c4)] px-5 pb-16 pt-24 text-center">
        {lights.map((x, i) => <span key={i} className="light" style={{ left: `${x.l}%`, top: `${x.t}%`, width: x.s, height: x.s, animationDelay: `${x.d}s` }} />)}
        <Image src="/logo.jpg" alt="Khushnuma Invites logo" width={720} height={380} priority className="relative w-full max-w-xl rounded-3xl mix-blend-multiply" />
        <h1 className="relative mt-4 font-display text-2xl text-maroon sm:text-4xl">Make Your Special Moments Unforgettable</h1>
        <p className="relative mx-auto mt-4 max-w-xl text-xl">We create elegant, personalized digital wedding invitations, animated with love for every Pakistani celebration.</p>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#collection" className="btn btn-gold">Explore Invitations</a>
          <a href={waLink(hello)} target="_blank" rel="noopener" className="btn btn-line">Order on WhatsApp</a></div>
      </section>

      <section id="collection" className="mx-auto max-w-6xl px-5 py-20"><Title k="Featured">Invitation Collection</Title><Gallery /></section>

      <section id="events" className="bg-maroon px-5 py-20 text-ivory"><div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center font-display text-3xl text-goldlt">Explore by Event</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map((c) => (<a key={c.slug} href="#collection" className="rounded-2xl border border-goldlt/40 p-6 text-center transition hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl">{c.icon}</div><p className="mt-3 font-display text-xs tracking-widest uppercase">{c.name}</p></a>))}</div></div></section>

      <section id="how" className="mx-auto max-w-5xl px-5 py-20"><Title k="Simple & Quick">How It Works</Title>
        <div className="grid gap-6 sm:grid-cols-3">
          {[["Choose Your Design", "Browse our collection and select your favorite invitation."], ["Share Your Details", "Send your wedding information and customization requests via WhatsApp."], ["Receive Your Invitation", "We customize it and deliver your finished digital video invitation."]].map(([t, d], i) => (
            <div key={t} className="rounded-3xl border border-gold/40 bg-white/60 p-8 text-center"><div className="gold-text font-display text-5xl">{i + 1}</div>
              <h3 className="mt-3 font-display text-maroon">{t}</h3><p className="mt-2">{d}</p></div>))}</div></section>

      <section className="bg-emerald/95 px-5 py-20 text-ivory"><div className="mx-auto max-w-5xl"><h2 className="mb-10 text-center font-display text-3xl text-goldlt">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Unique and creative designs", "Personalized wedding invitations", "Premium animation and video quality", "Pakistani wedding-inspired themes", "Easy WhatsApp ordering", "Instant digital delivery"].map((w) => (
            <p key={w} className="rounded-2xl border border-goldlt/30 p-5">❖ {w}</p>))}</div></div></section>

      <section id="contact" className="px-5 py-20"><Title k="Let's Talk">Plan Your Invitation</Title><InquiryForm /></section>

      <footer className="bg-maroon px-5 py-12 text-center text-ivory">
        <p className="gold-text font-display text-2xl tracking-widest">{SITE.name}</p><p className="text-sm">{SITE.tagline}</p>
        <div className="my-5 flex flex-wrap justify-center gap-5 font-display text-xs tracking-widest uppercase">
          <a href={SITE.instagram}>Instagram</a><a href={SITE.facebook}>Facebook</a><a href={`mailto:${SITE.email}`}>Email</a><a href="#collection">Collection</a><a href="#how">How it works</a></div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></footer>

      <a href={waLink(hello)} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110">💬</a>
    </main>
  );
}
