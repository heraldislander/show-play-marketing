const APP_URL = 'https://app.showplay.co'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-heading text-[1.15rem] italic font-normal tracking-[-0.02em]"
          style={{
            background: 'linear-gradient(135deg, #f0ece4 0%, rgba(240,236,228,0.75) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ShowPlay
        </a>
        <a
          href={APP_URL}
          className="text-[13px] font-medium font-body tracking-wide rounded-full border border-gold/30 text-gold/70 hover:bg-gold/10 hover:text-gold px-5 py-2 transition-all duration-200"
        >
          Start free trial
        </a>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="pt-40 pb-32 md:pt-52 md:pb-40 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading font-normal tracking-tight leading-[1.08]" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
            Your open home.
            <br />
            <span className="italic text-gold">On the big screen.</span>
          </h1>
          <p className="mt-7 text-text-secondary text-[1.1rem] max-w-md mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
            AI-generated property presentations in 60 seconds. Professional, branded, ready to go.
          </p>
          <a
            href={APP_URL}
            className="mt-9 inline-flex items-center gap-2 bg-gradient-to-br from-gold to-gold-bright text-[#1a1408] font-semibold text-[15px] tracking-wide px-8 py-3.5 rounded-[14px] border-0 outline-none hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(212,175,112,0.3),0_2px_8px_rgba(0,0,0,0.3)] active:translate-y-0 transition-all duration-200"
          >
            Start free trial — no credit card required
          </a>
        </div>

        {/* Mockup */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
          <PresentationMockup />
        </div>
      </div>
    </section>
  )
}

/* ─── Presentation Mockup ─── */
function PresentationMockup() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute -inset-6 bg-gold/[0.04] rounded-3xl blur-3xl" />

      {/* Screen */}
      <div className="relative bg-bg-card rounded-2xl border border-white/[0.10] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
          <div className="flex-1 mx-3 h-5 bg-white/[0.04] rounded-md" />
        </div>

        {/* Slide content */}
        <div className="aspect-video relative flex flex-col justify-end">
          {/* Dark gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f14] via-[#12141e] to-[#161828]" />
          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-40" />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative z-10 p-6 md:p-8">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-gold/[0.12] text-gold text-[9px] uppercase tracking-[0.12em] font-medium mb-2.5">
              For Sale
            </div>
            <h3 className="font-heading text-lg md:text-xl font-normal leading-tight">
              35A Glenfern Road
            </h3>
            <p className="text-white/35 text-[13px] mt-0.5 font-light">Mellons Bay, Auckland</p>

            {/* Agent bar */}
            <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center text-gold text-[10px] font-semibold">
                  SM
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/60">Sarah Mitchell</p>
                  <p className="text-[9px] text-white/25 font-light">Bayleys Real Estate</p>
                </div>
              </div>
              {/* QR */}
              <div className="w-9 h-9 rounded-lg bg-white p-1 shadow-sm">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <rect x="0" y="0" width="12" height="12" fill="#111" />
                  <rect x="2" y="2" width="8" height="8" fill="#fff" />
                  <rect x="4" y="4" width="4" height="4" fill="#111" />
                  <rect x="20" y="0" width="12" height="12" fill="#111" />
                  <rect x="22" y="2" width="8" height="8" fill="#fff" />
                  <rect x="24" y="4" width="4" height="4" fill="#111" />
                  <rect x="0" y="20" width="12" height="12" fill="#111" />
                  <rect x="2" y="22" width="8" height="8" fill="#fff" />
                  <rect x="4" y="24" width="4" height="4" fill="#111" />
                  <rect x="14" y="0" width="4" height="4" fill="#111" />
                  <rect x="14" y="8" width="4" height="4" fill="#111" />
                  <rect x="14" y="14" width="4" height="4" fill="#111" />
                  <rect x="20" y="14" width="4" height="4" fill="#111" />
                  <rect x="26" y="20" width="6" height="4" fill="#111" />
                  <rect x="20" y="26" width="4" height="6" fill="#111" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex items-center justify-center gap-1.5 py-2.5 bg-black/20">
          <div className="w-4 h-1 rounded-full bg-gold" />
          <div className="w-1 h-1 rounded-full bg-white/15" />
          <div className="w-1 h-1 rounded-full bg-white/15" />
          <div className="w-1 h-1 rounded-full bg-white/15" />
          <div className="w-1 h-1 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  )
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Paste your listing URL',
      desc: 'From TradeMe, realestate.co.nz, or OneRoof.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-1.135a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364l1.757 1.757" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'AI builds your presentation',
      desc: 'Slides, photos, property details, your agent profile. Done in 60 seconds.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Display at your open home',
      desc: 'Cast to any TV or screen. Visitors scan the QR to register interest.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-heading text-[1.65rem] font-normal text-center tracking-tight mb-3">
          How it works
        </h2>
        <p className="text-text-secondary text-center text-[1rem] font-light tracking-wide mb-16">
          Three steps. One minute. A presentation that looks like it cost thousands.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="text-center rounded-[14px] border border-white/[0.08] bg-white/[0.04] hover:border-white/[0.15] hover:bg-white/[0.07] hover:-translate-y-px transition-all duration-250 py-8 px-6 min-h-[240px] flex flex-col items-center justify-start"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/[0.08] text-gold mb-5">
                {step.icon}
              </div>
              <div className="text-gold/40 text-[0.7rem] font-mono tracking-wide mb-2">{step.num}</div>
              <h3 className="font-heading text-[1.05rem] font-normal mb-2.5">{step.title}</h3>
              <p className="text-text-muted text-[0.82rem] font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Features ─── */
function Features() {
  const features = [
    {
      title: 'Full-screen presentations',
      desc: 'Stunning property slides built from your listing in seconds.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
        </svg>
      ),
    },
    {
      title: 'QR lead capture',
      desc: 'Visitors scan and register their interest on the spot. Leads sent straight to your inbox.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75H16.5v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75H16.5v-.75Z" />
        </svg>
      ),
    },
    {
      title: 'Your agent profile',
      desc: 'Name, photo, and contact details on every slide. Import from RateMyAgent or TradeMe.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      title: 'No setup required',
      desc: 'Works on any screen. No apps to install for your visitors. Just paste, generate, display.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-heading text-[1.65rem] font-normal text-center tracking-tight mb-16">
          Everything you need at your open home
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-bg-card border border-white/[0.10] p-7 md:p-8 hover:border-gold/20 transition-all duration-200 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/[0.08] flex items-center justify-center text-gold mb-5">
                {f.icon}
              </div>
              <h3 className="font-heading text-[0.95rem] font-normal mb-2">{f.title}</h3>
              <p className="text-text-muted text-[0.82rem] font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-heading text-[1.65rem] font-normal text-center tracking-tight mb-3">
          Simple pricing
        </h2>
        <p className="text-text-secondary text-center text-[1rem] font-light tracking-wide mb-16">
          Start for free. Upgrade when you're ready.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-[680px] mx-auto">
          {/* Free tier */}
          <div className="rounded-2xl bg-bg-card border border-white/[0.10] p-8 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <h3 className="font-heading text-[1.1rem] font-normal mb-1">Free Trial</h3>
            <p className="text-text-muted text-[0.82rem] font-light mb-7">Try it at your next open home.</p>
            <ul className="space-y-3 mb-8 flex-1">
              <PricingItem>2 open homes</PricingItem>
              <PricingItem>14 days</PricingItem>
              <PricingItem>No credit card</PricingItem>
            </ul>
            <a
              href={APP_URL}
              className="text-center text-[13px] font-medium font-body tracking-wide rounded-[14px] border border-gold/30 text-gold/70 hover:bg-gold/10 hover:text-gold px-6 py-2.5 transition-all duration-200"
            >
              Start free trial
            </a>
          </div>

          {/* Paid tier */}
          <div className="rounded-2xl bg-bg-card border border-gold/25 p-8 flex flex-col relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="absolute top-4 right-4">
              <span className="text-[9px] uppercase tracking-[0.1em] font-semibold text-[#1a1408] bg-gradient-to-br from-gold to-gold-bright px-3 py-1 rounded-full shadow-sm">
                Popular
              </span>
            </div>
            <h3 className="font-heading text-[1.1rem] font-normal mb-1">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-7">
              <span className="text-2xl font-semibold text-gold">$14.99</span>
              <span className="text-text-muted text-[0.78rem] font-light">/month NZD</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <PricingItem>Unlimited open homes</PricingItem>
              <PricingItem>QR lead capture</PricingItem>
              <PricingItem>Cancel anytime</PricingItem>
            </ul>
            <a
              href={APP_URL}
              className="text-center text-[15px] font-semibold font-body tracking-wide bg-gradient-to-br from-gold to-gold-bright text-[#1a1408] px-6 py-3 rounded-[14px] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(212,175,112,0.3),0_2px_8px_rgba(0,0,0,0.3)] active:translate-y-0 transition-all duration-200"
            >
              Start free trial
            </a>
          </div>
        </div>

        <p className="text-center text-text-muted text-[0.72rem] mt-8 tracking-wide">
          After your trial, you'll be presented with payment options inside the app.
        </p>
      </div>
    </section>
  )
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-[0.82rem] text-text-secondary font-light">
      <svg className="w-3.5 h-3.5 text-gold/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      {children}
    </li>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="/"
          className="font-heading italic text-[0.85rem] font-normal"
          style={{
            background: 'linear-gradient(135deg, rgba(240,236,228,0.4) 0%, rgba(240,236,228,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ShowPlay
        </a>
        <div className="flex items-center gap-6 text-[0.65rem] text-text-muted tracking-wide">
          <span>&copy; 2026 ShowPlay</span>
          <a href={APP_URL} className="hover:text-text-secondary transition-colors">
            app.showplay.co
          </a>
        </div>
      </div>
    </footer>
  )
}

export default App
