import { FadeIn } from '@/components/ui/fade-in'
import Image from 'next/image'

type PreviewAuction = {
  id: number
  title: string
  producer: string
  bid: string
  bids: number
  time: string
  genre: string
  bpm: string
  status: string
  image: string
}

const previewAuctions: PreviewAuction[] = [
  {
    id: 1,
    title: 'Midnight Static',
    producer: 'Avery Knox',
    bid: '$2,450',
    bids: 18,
    time: '02:14',
    genre: 'Trap',
    bpm: '140 BPM',
    status: 'Preview',
    image: '/midnight-static.png',
  },
  {
    id: 2,
    title: 'Velvet Circuit',
    producer: 'NOVA//77',
    bid: '$1,900',
    bids: 11,
    time: '04:51',
    genre: 'Dark R&B',
    bpm: '126 BPM',
    status: 'Preview',
    image: '/velvet-circuit.png',
  },
  {
    id: 3,
    title: 'Ghost Frequency',
    producer: 'Saint Vale',
    bid: '$3,100',
    bids: 23,
    time: '01:08',
    genre: 'Cinematic',
    bpm: '132 BPM',
    status: 'Preview',
    image: '/ghost-frequency.png',
  },
]

export default function LaunchPreview() {
  return (
    <section id="launch-preview" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <FadeIn className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.32em] text-[#76c7ff]">
            Launch preview
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Live auction experience for members only.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Visible bidding activity, beat metadata,
            and premium presentation.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {previewAuctions.map((auction, i) => (
            <FadeIn key={auction.id} delay={i * 0.1}>
              <article className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="relative h-56 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(83,202,255,0.35),transparent_20%),radial-gradient(circle_at_70%_40%,rgba(14,67,162,0.35),transparent_24%),linear-gradient(180deg,rgba(8,13,23,0.7),rgba(4,7,14,0.95))]">
                  <div className="absolute inset-0 opacity-25 grid-bg" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8dd3ff] backdrop-blur">
                    {auction.status}
                  </div>

                  <Image src={auction.image} alt={auction.title} width={1000} height={1000} className="w-full h-full object-cover absolute inset-0" />

                  
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {auction.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      by {auction.producer}
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                    {auction.genre}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-white/45">Current Bid</div>
                    <div className="mt-1 font-mono text-base text-white">
                      {auction.bid}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-white/45">Bids</div>
                    <div className="mt-1 font-mono text-base text-white">
                      {auction.bids}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-white/45">Time Left</div>
                    <div className="mt-1 font-mono text-base text-[#84d3ff]">
                      {auction.time}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                    {auction.bpm}
                  </div>

                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10">
                    Coming Soon
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
