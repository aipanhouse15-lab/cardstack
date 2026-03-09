"use client";
import { useState } from "react";
import { BLOG_POSTS } from "@/data/content";
import { SectionHeader } from "./ui";

export default function BlogClient() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(BLOG_POSTS.map(p => p.category))];
  const list = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat);

  return (
    <section className="pt-24 pb-20 px-6 max-w-screen-lg mx-auto">
      <SectionHeader badge="📝 Blog" title="Credit card tips & strategies" subtitle="Practical, no-fluff guides for every Indian cardholder." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {BLOG_POSTS.filter(p => p.featured).map(p => (
          <div key={p.id} className="rounded-2xl p-7 cursor-pointer transition-all hover:-translate-y-1" style={{ background: `${p.color}08`, border: `1px solid ${p.color}18` }}>
            <div className="inline-block text-[11px] font-semibold rounded-md px-2.5 py-0.5 mb-3.5" style={{ color: p.color, background: `${p.color}12` }}>⭐ FEATURED · {p.category}</div>
            <h3 className="text-xl font-bold leading-snug mb-2.5" style={{ color: "var(--text)" }}>{p.title}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{p.excerpt}</p>
            <div className="text-xs" style={{ color: "var(--text-faint)" }}>{p.date} · {p.readTime}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)} className="rounded-lg px-4 py-1.5 text-sm font-medium cursor-pointer transition-all" style={{
            background: cat === c ? "var(--accent)" : "var(--bg-card)",
            color: cat === c ? "#fff" : "var(--text-muted)",
            border: `1px solid ${cat === c ? "var(--accent)" : "var(--border)"}`,
            boxShadow: cat === c ? "none" : "var(--shadow)",
          }}>{c}</button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {list.map(p => (
          <div key={p.id} className="flex items-start gap-3.5 p-5 rounded-xl cursor-pointer transition-all flex-wrap" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="w-1 h-11 rounded-full shrink-0 mt-0.5" style={{ background: p.color }} />
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[11px] font-semibold rounded px-2 py-0.5" style={{ color: p.color, background: `${p.color}10` }}>{p.category}</span>
                <span className="text-xs" style={{ color: "var(--text-faint)" }}>{p.date} · {p.readTime}</span>
              </div>
              <h3 className="text-base font-bold leading-snug mb-1" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.excerpt}</p>
            </div>
            <div className="text-sm font-semibold whitespace-nowrap self-center" style={{ color: "var(--accent-text)" }}>Read →</div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl text-center" style={{ background: "var(--bg-muted)" }}>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>Full blog articles coming soon. Follow us for updates!</p>
      </div>
    </section>
  );
}
