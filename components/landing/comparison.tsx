type Item = {
    title: string
    subtitle: string
  }
  
  const currentPath: Item[] = [
    { title: 'Crowded marketplaces', subtitle: 'Your music competes with endless listings' },
    { title: 'Low perceived value', subtitle: 'Beats are often treated like commodities' },
    { title: 'Little urgency', subtitle: 'Buyers browse without strong intent to act' },
    { title: 'Hard to stand out', subtitle: 'Quality gets buried in volume' },
  ]
  
  const bidbeatzPath: Item[] = [
    { title: 'Curated submissions', subtitle: 'Only selected producers and beats move forward' },
    { title: 'Auction presentation', subtitle: 'Your music is positioned in a premium live format' },
    { title: 'Protected previews', subtitle: 'Watermarked listening preserves exclusivity' },
    { title: 'Scarcity-driven model', subtitle: 'Fewer listings, stronger attention' },
  ]
  
  const producerOutcome: Item[] = [
    { title: 'Higher perceived value', subtitle: 'Your beats feel rarer and more premium' },
    { title: 'More serious buyers', subtitle: 'Built for people ready to compete' },
    { title: 'Better positioning', subtitle: 'Your music is showcased, not buried' },
    { title: 'A stronger selling environment', subtitle: 'The format helps create demand and urgency' },
  ]
  
  function FlowArrow({ mobile = false }: { mobile?: boolean }) {
    if (mobile) {
      return (
        <div className="flex flex-col items-center justify-center py-3 lg:hidden">
          <div className="h-8 w-px bg-gradient-to-b from-[#5ebdff]/0 via-[#5ebdff]/80 to-[#34d399]/70" />
          <div className="mt-1 h-0 w-0 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#46c7ff]" />
        </div>
      )
    }
  
    return (
      <div className="relative hidden h-full min-h-[340px] w-24 items-center justify-center lg:flex">
        <div className="absolute h-px w-16 bg-gradient-to-r from-[#5ebdff]/70 to-[#34d399]/70" />
        <div className="absolute right-3 h-0 w-0 border-b-[7px] border-l-[10px] border-t-[7px] border-b-transparent border-t-transparent border-l-[#46c7ff]" />
        <div className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#5ebdff]/10 blur-xl" />
      </div>
    )
  }
  
  function Column({
    label,
    items,
    tone = 'default',
  }: {
    label: string
    items: Item[]
    tone?: 'default' | 'accent' | 'success'
  }) {
    const wrapperTone =
      tone === 'accent'
        ? 'border-[#5ebdff]/20 bg-[linear-gradient(180deg,rgba(94,189,255,0.10),rgba(255,255,255,0.03))]'
        : tone === 'success'
        ? 'border-[#34d399]/20 bg-[linear-gradient(180deg,rgba(52,211,153,0.08),rgba(255,255,255,0.03))]'
        : 'border-white/10 bg-black/30'
  
    const badgeTone =
      tone === 'accent'
        ? 'text-[#7fd4ff] bg-[#5ebdff]/10 border-[#5ebdff]/20'
        : tone === 'success'
        ? 'text-[#6ee7b7] bg-[#34d399]/10 border-[#34d399]/20'
        : 'text-white/45 bg-white/[0.03] border-white/10'
  
    return (
      <div className={`rounded-[2rem] border p-6 backdrop-blur ${wrapperTone}`}>
        <div className={`mb-6 w-fit rounded-full border px-3 py-1 text-xs uppercase tracking-[0.28em] ${badgeTone}`}>
          {label}
        </div>
  
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="font-medium text-white">{item.title}</div>
              <div className="text-sm text-white/50">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default function ProducerComparison() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.32em] text-[#76c7ff]">
            For producers
          </div>
  
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            A better path for producers.
          </h2>
  
          <p className="mt-5 text-lg leading-8 text-white/60">
            BidBeatz is designed to move your music out of crowded listings and into a curated auction environment built around scarcity, presentation, and buyer intent.
          </p>
        </div>
  
        <div className="mt-16">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <Column label="What producers deal with now" items={currentPath} />
            <FlowArrow />
            <FlowArrow mobile />
            <Column label="What BidBeatz changes" items={bidbeatzPath} tone="accent" />
            <FlowArrow />
            <FlowArrow mobile />
            <Column label="What that unlocks" items={producerOutcome} tone="success" />
          </div>
        </div>
      </section>
    )
  }