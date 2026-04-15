const GOOGLE_FORM_URL = 'https://forms.gle/9B7JfgMZbpfeMtr49'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        {/* TOP CTA */}
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(94,189,255,0.08),rgba(255,255,255,0.02))] p-8 text-center backdrop-blur">
          <div className="text-sm uppercase tracking-[0.3em] text-[#7bc7ff]">
            Final call
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Don&apos;t miss the first drop.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/60 leading-8">
            Join the waitlist to get early access to BidBeatz, including producer applications,
            launch previews, and the first curated auctions.
          </p>

          <div className="mx-auto mt-8 max-w-md">
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

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
              <div className="grid grid-cols-3 gap-[2px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1 w-1 rounded-full bg-[#5ebdff]"
                  />
                ))}
              </div>
            </div>

            <span className="text-sm font-medium text-white/80">
              BidBeatz
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} BidBeatz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
