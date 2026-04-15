import { FadeIn } from '@/components/ui/fade-in'

const GOOGLE_FORM_URL = 'https://forms.gle/9B7JfgMZbpfeMtr49'

const reasonsToJoin: string[] = [
  'Early access to launch updates and first live drops',
  'Priority entry for producers who want founding access',
  'A front-row seat as BidBeatz opens curated auctions',
]

export default function WhyJoin() {
  return (
    <section id="why-join" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(94,189,255,0.08),rgba(255,255,255,0.02))] p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-[#7bc7ff]">
              Why join now
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              Get in before the first wave goes live.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-white/60">
              The waitlist is for people who want to be closest to the launch,
              whether that means early producer access, first notice on auction
              drops, or a better view into what BidBeatz is building.
            </p>
            <div className="mt-8 space-y-4">
              {reasonsToJoin.map((item, i) => (
                <FadeIn key={item} delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7dd0ff]" />
                    <div className="text-white/80">{item}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-[#7bc7ff]">
              Founding Access
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              Be first to hear when BidBeatz opens.
            </h2>
            <p className="mt-4 leading-8 text-white/60">
              Join the list and we will let you know when producer access opens,
              when launch previews drop, and when the first curated auctions are
              announced.
            </p>
            <div className="mt-8">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '56px',
                  borderRadius: '1rem',
                  backgroundColor: '#5ebdff',
                  color: '#04131f',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  opacity: 1,
                }}
              >
                Apply as a Founding Producer
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
