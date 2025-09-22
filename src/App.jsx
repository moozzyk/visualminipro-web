import React from "react";
import { Cpu, HardDrive, Usb, ShieldCheck, MessageSquare, ExternalLink, CheckCircle2 } from "lucide-react";

const APP_NAME = "Visual Minipro";
const TAGLINE = "Easiest way to use your XGecu programmer on Mac — program EEPROMs, test logic ICs, and update firmware.";
const SUBHEAD = "A focused, Mac‑native UI for T866+/T48/T56 that just works.";

const APP_STORE_URL = "https://apps.apple.com/app/id6747261192";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-violet-50 text-[#0f172a]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-indigo-200/70 shadow-[0_1px_0_0_rgba(99,102,241,0.15)]">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-[#0f172a]">
            <div className="h-10 w-10 from-sky-200 to-indigo-200 grid place-items-center">
              <img src={`${import.meta.env.BASE_URL}images/icon_1024.png`} alt="Hero" />
            </div>
            <span>{APP_NAME}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[15px]">
            <a href="#features" className="hover:text-indigo-700">Features</a>
            <a href="#compat" className="hover:text-indigo-700">Compatibility</a>
            <a href="#screens" className="hover:text-indigo-700">Screens</a>
            <a href="#faq" className="hover:text-indigo-700">FAQ</a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2"
              onClick={() => { fbq('track', 'InitiateCheckout'); return true; }}
            >
              <img 
               src={`${import.meta.env.BASE_URL}images/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg`} 
               alt="Download on the Mac Map Store" />
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="border-b border-indigo-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img className="align-top inline h-14 w-14" src={`${import.meta.env.BASE_URL}images/icon_1024.png`} alt="Hero" />
            <h1 className="inline text-4xl md:text-5xl font-semibold tracking-tight text-[#0b1220]"> {APP_NAME}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[#0f172a]">{TAGLINE}</p>
            <p className="mt-2 text-[15px] text-[#334155]">{SUBHEAD}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2"
                onClick={() => { fbq('track', 'AddToCart'); return true; }}
              >
                <img 
                 src={`${import.meta.env.BASE_URL}images/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg`} 
                 alt="Download on the Mac Map Store"/>
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-[15px] text-indigo-700 hover:text-indigo-800">
                See features
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-[12px]">
              <li className="rounded-full border border-sky-200 bg-sky-50 text-sky-700 px-2 py-1">T866+</li>
              <li className="rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-2 py-1">T48</li>
              <li className="rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2 py-1">T56</li>
              <li className="rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1">Apple silicon</li>
            </ul>
          </div>

          <div className="rounded-lg border border-indigo-200 bg-white/70 p-2 shadow-sm">
	     <a href={`${import.meta.env.BASE_URL}images/VisualMiniProMacbookPro.png`}  target="_blank" rel="noreferrer no opener">
               <img 
                 src={`${import.meta.env.BASE_URL}images/VisualMiniProMacbookPro.png`} 
                 alt="Visual Minipro on Macbook Pro" />
             </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gradient-to-b from-white/60 via-sky-50 to-violet-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Why {APP_NAME}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature color="sky" icon={HardDrive} title="EEPROM programming" desc="Read, verify, and write EEPROMs with a clear, guided flow." />
            <Feature color="indigo" icon={Cpu} title="Logic IC tests" desc="Run tests for common TTL/CMOS chips with clear pass/fail feedback." />
            <Feature color="emerald" icon={Usb} title="XGecu support" desc="Works with T866+, T48, and T56 via USB on Mac OS." />
            <Feature color="violet" icon={ShieldCheck} title="Mac OS‑native" desc="Signed, sandbox‑friendly design that plays well with system permissions." />
            <Feature color="rose" icon={CheckCircle2} title="Transparent operations" desc="Deterministic progress, readable logs, and actionable errors." />
            <Feature color="amber" icon={MessageSquare} title="Simple by design" desc="Minimal UI that makes frequent tasks fast, not fancy." />
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section id="compat" className="bg-white border-y border-indigo-100">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-semibold">Compatibility</h3>
            <p className="mt-2 text-[15px] text-[#334155]">Optimized for modern Mac OS on Apple silicon Macs.</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-indigo-600"/> XGecu T866+, T48, T56</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-indigo-600"/> USB connection with status and troubleshooting tips</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-indigo-600"/> Firmware update flow built‑in</li>
            </ul>
          </div>
          <div className="rounded-md border border-indigo-200 bg-gradient-to-br from-sky-50 to-indigo-50 p-4">
            <h4 className="font-medium">Privacy</h4>
            <p className="mt-2 text-[14px] text-[#334155]">We do not sell your data. Visual Minipro uses only the permissions required to communicate with your programmer. Logs and settings stay on your Mac.</p>
          {/*
            <p className="mt-3 text-[13px] text-[#334155]">Add a full privacy policy at <code>/privacy</code> and link it in the footer.</p>
          */}
          </div>
        </div>
      </section>

      {/* Screens (placeholders) */}
      <section id="screens" className="bg-gradient-to-b from-white via-sky-50 to-violet-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h3 className="text-xl font-semibold">A quick look</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div key={1} className="rounded-md border border-indigo-200 bg-white p-3 shadow-sm">
 	      <div className="aspect-[16/10] rounded border border-indigo-200 bg-gradient-to-br from-sky-100 to-indigo-100">
                <a href={`${import.meta.env.BASE_URL}images/ChipProgramming.png`} target="_blank" rel="noreferrer no opener">
                  <img 
                   src={`${import.meta.env.BASE_URL}images/ChipProgramming.png`} 
                   alt="Chip and EEPROM programming" />
                </a>
              </div>
            </div>
            <div key={2} className="rounded-md border border-indigo-200 bg-white p-3 shadow-sm">
 	      <div className="aspect-[16/10] rounded border border-indigo-200 bg-gradient-to-br from-sky-100 to-indigo-100">
                <a href={`${import.meta.env.BASE_URL}images/LogicICTest.png`} target="_blank" rel="noreferrer no opener">
                  <img 
                   src={`${import.meta.env.BASE_URL}images/LogicICTest.png`} 
                   alt="Logic IC chip testing" />
                </a>
              </div>
            </div>
            <div key={3} className="rounded-md border border-indigo-200 bg-white p-3 shadow-sm">
 	      <div className="aspect-[16/10] rounded border border-indigo-200 bg-gradient-to-br from-sky-100 to-indigo-100">
                <a href={`${import.meta.env.BASE_URL}images/FirmwareUpdate.png`} target="_blank" rel="noreferrer no opener">
                  <img 
                   src={`${import.meta.env.BASE_URL}images/FirmwareUpdate.png`} 
                   alt="Updating programmer firmware" />
                </a>
              </div>
            </div>
            <div key={4} className="rounded-md border border-indigo-200 bg-white p-3 shadow-sm">
 	      <div className="aspect-[16/10] rounded border border-indigo-200 bg-gradient-to-br from-sky-100 to-indigo-100">
                <a href={`${import.meta.env.BASE_URL}images/AboutVisualMinipro.png`} target="_blank" rel="noreferrer no opener">
                  <img 
                   src={`${import.meta.env.BASE_URL}images/AboutVisualMinipro.png`} 
                   alt="About Visual Minipro" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-t border-indigo-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="mt-6 divide-y divide-indigo-100 border border-indigo-100 rounded-md bg-white">
            {[
              { q: "Which programmers are supported?", a: "XGecu T866+, T48, and T56." },
              { q: "What Mac OS versions are supported?", a: "Recent Mac OS versions on Apple silicon Macs." },
              { q: "Can it test logic chips?", a: "Yes — common TTL/CMOS families with clear pass/fail." },
              { q: "Is firmware updating supported?", a: "Yes, from within the app." },
              { q: "Where can I get help?", a: (<>Report problems in the <a href="https://github.com/moozzyk/MiniproUI/issues" target="_blank" rel="noreferrer noopener" className="text-indigo-700 hover:underline">Visual Minipro Github repo</a>.</>) },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                  <span className="font-medium">{q}</span>
                  <span className="text-indigo-600">›</span>
                </summary>
                <div className="px-4 pb-4 text-[15px] text-[#334155]">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-indigo-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-[14px] text-[#334155] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {APP_NAME}</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/moozzyk/MiniproUI/issues" target="_blank" rel="noreferrer noopener" className="hover:text-indigo-700">Support</a>
            <a href="#privacy" className="hover:text-indigo-700">Privacy</a>
            <a href={APP_STORE_URL} className="text-indigo-700 hover:text-indigo-800" target="_blank" rel="noreferrer noopener" onClick={() => { fbq('track', 'FindLocation'); return true; }}>Mac App Store</a>
          </div>
        </div>
      </footer>

      {/* Basic JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: APP_NAME,
            operatingSystem: 'Mac OS',
            applicationCategory: 'DeveloperApplication',
            description: TAGLINE,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            url: typeof window !== 'undefined' ? window.location.href : undefined,
          }),
        }}
      />
    </main>
  );
}

function Feature({ icon: Icon, title, desc, color = "indigo" }) {
  const accent = {
    sky: {
      ring: "ring-sky-200",
      icon: "from-sky-400 to-cyan-500",
      text: "text-sky-900",
    },
    indigo: {
      ring: "ring-indigo-200",
      icon: "from-indigo-500 to-blue-500",
      text: "text-indigo-900",
    },
    emerald: {
      ring: "ring-emerald-200",
      icon: "from-emerald-500 to-teal-500",
      text: "text-emerald-900",
    },
    violet: {
      ring: "ring-violet-200",
      icon: "from-violet-500 to-fuchsia-500",
      text: "text-violet-900",
    },
    rose: {
      ring: "ring-rose-200",
      icon: "from-rose-500 to-orange-500",
      text: "text-rose-900",
    },
    amber: {
      ring: "ring-amber-200",
      icon: "from-amber-500 to-orange-500",
      text: "text-amber-900",
    },
  }[color];

  return (
    <div className={`rounded-md border border-indigo-100 bg-white p-4 hover:shadow-sm transition-shadow ring-1 ring-transparent hover:${accent.ring}`}>
      <div className="flex items-center gap-2">
        <span className={`h-8 w-8 rounded-md bg-gradient-to-br ${accent.icon} text-white grid place-items-center`}>
          <Icon className="h-4 w-4"/>
        </span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="mt-2 text-[15px] text-[#334155] leading-relaxed">{desc}</p>
    </div>
  );
}

