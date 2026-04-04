export default function Header() {
    return (
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(0,170,255,0.18)]">
            <div className="grid grid-cols-3 gap-[3px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#5ebdff]"
                />
              ))}
            </div>
          </div>
  
          <div className="text-lg font-semibold tracking-wide text-white">
            BidBeatz
          </div>
  
          <div className="ml-3 hidden rounded-full border border-[#65bfff]/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[#81cbff] md:block">
            Launching Soon
          </div>
        </div>
  
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#whats-coming" className="transition hover:text-white">
            What’s Coming
          </a>
          <a href="#launch-preview" className="transition hover:text-white">
            Preview
          </a>
          <a href="#why-join" className="transition hover:text-white">
            Why Join
          </a>
        </nav>
  
        <button className="rounded-full bg-[#5ebdff] px-5 py-2.5 text-sm font-semibold text-[#03111d] transition hover:bg-[#7dcbff]">
          Join Waitlist
        </button>
      </header>
    )
  }