import { FadeIn } from '@/components/ui/fade-in'

type ComingItem = {
  title: string
  text: string
}

const items: ComingItem[] = [
  {
    title: 'Curated producer submissions',
    text: 'A selective entry process designed to keep the platform premium from day one.',
  },
  {
    title: 'Live auction rooms',
    text: 'Timed beat auctions where buyers compete for exclusive sound ownership in real time.',
  },
  {
    title: 'Protected audio delivery',
    text: 'Public previews stay tagged while clean WAV files and stems remain private until purchase.',
  },
]

export default function WhatIsComing() {
  return (
      <section id="whats-coming" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <div className="text-sm uppercase tracking-[0.32em] text-[#76c7ff]">
          What's coming
        </div>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
          Enjoy a premium beat auction platform built for serious buyers and selected producers.
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/60">
                BidBeatz is not launching as another crowded beat marketplace. It is
          being built as a curated destination where selected producers and
          serious buyers meet through live auction drops.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <article className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur">
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-8 text-white/60">
                {item.text}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
