'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/fade-in'

const cards = [
  { title: 'Selected producers.', desc: 'Every submission is reviewed' },
  { title: 'Serious buyers.', desc: 'Artists and professionals ready to acquire' },
  { title: 'Beats with value.', desc: 'Exclusive ownership rights.' },
]

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden flex items-center">

      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark gradient overlay — heavy on left, fades right */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,7,11,0.97)_30%,rgba(5,7,11,0.70)_58%,rgba(5,7,11,0.20)_100%)]" />

      {/* Subtle blue glow top-left */}
      <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-[#0ea5ff]/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <div className="max-w-2xl">

          <FadeIn delay={0}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#5ebdff]">
              Invite-Only Submissions
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-[3.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-[5rem]">
              Submit Your Sound
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 text-2xl font-medium leading-snug text-[#5ebdff] md:text-3xl">
              Get reviewed for curated music auctions.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
              BidBeatz is a music auction platform built around value, ownership, and trust.
              Submissions are reviewed before music is invited to auction.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-9">
              <button className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
                Submit Your Sound
                <span aria-hidden>→</span>
              </button>
            </div>
          </FadeIn>

          {/* Feature cards */}
          <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {cards.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={0.55 + i * 0.1}>
                <div className="glass rounded-2xl px-5 py-4 backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-[#5ebdff]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
