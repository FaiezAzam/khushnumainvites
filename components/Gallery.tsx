"use client";
import { useRef, useState } from "react";
import { CATEGORIES, INVITATIONS, type Invitation } from "@/lib/invitations";
import { orderMessage, waLink } from "@/lib/config";

function Card({ inv, onView }: { inv: Invitation; onView: () => void }) {
  const v = useRef<HTMLVideoElement>(null);
  const cat = CATEGORIES.find((c) => c.slug === inv.category)!;
  return (
    <article className="group overflow-hidden rounded-3xl border border-gold/40 bg-white/70 shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/30"
      onMouseEnter={() => v.current?.play().catch(() => {})} onMouseLeave={() => v.current?.pause()}>
      <button onClick={onView} className="relative block aspect-[9/16] max-h-[26rem] w-full bg-gradient-to-b from-emerald to-maroon" aria-label={`View ${inv.title}`}>
        <video ref={v} src={inv.video} poster={inv.thumb} muted loop playsInline preload="none" className="h-full w-full object-cover" />
        <span className="absolute inset-0 grid place-items-center text-5xl text-goldlt/90 drop-shadow transition group-hover:opacity-0">▶</span>
      </button>
      <div className="space-y-3 p-5">
        <p className="font-display text-[10px] tracking-[.3em] text-gold uppercase">{cat.icon} {cat.name} · {inv.id}</p>
        <h3 className="font-display text-lg text-maroon">{inv.title}</h3>
        <p className="text-base leading-snug">{inv.description}</p>
        {inv.price && <p className="text-gold">{inv.price}</p>}
        <div className="flex gap-2">
          <button onClick={onView} className="btn btn-line flex-1 !px-3">View</button>
          <a href={waLink(orderMessage(`${inv.title} (${inv.id})`))} target="_blank" rel="noopener" className="btn btn-gold flex-1 !px-3">Order</a>
        </div>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState<Invitation | null>(null);
  const list = INVITATIONS.filter((i) => cat === "all" || i.category === cat);
  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {[{ slug: "all", name: "All" }, ...CATEGORIES].map((c) => (
          <button key={c.slug} onClick={() => setCat(c.slug)}
            className={`btn !py-2 ${cat === c.slug ? "btn-gold" : "btn-line"}`}>{c.name}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => <Card key={i.id} inv={i} onView={() => setOpen(i)} />)}
      </div>
      {list.length === 0 && <p className="text-center">New designs for this event are coming soon. Message us for a custom design.</p>}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setOpen(null)}>
          <div className="w-full max-w-sm rounded-3xl bg-ivory p-4" onClick={(e) => e.stopPropagation()}>
            <video src={open.video} poster={open.thumb} controls autoPlay playsInline loop className="max-h-[70vh] w-full rounded-2xl" />
            <h3 className="mt-3 font-display text-maroon">{open.title}</h3>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setOpen(null)} className="btn btn-line flex-1">Close</button>
              <a href={waLink(orderMessage(`${open.title} (${open.id})`))} target="_blank" rel="noopener" className="btn btn-gold flex-1">Order This Design</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
