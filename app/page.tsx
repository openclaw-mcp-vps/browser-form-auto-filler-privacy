export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Zero-Knowledge Form Filling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-fill forms without<br />
          <span className="text-[#58a6ff]">sharing personal data</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FormShield fills your forms instantly using locally encrypted profiles.
          No cloud sync. No data brokers. Your info stays on your device — always.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get FormShield — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Works on Chrome & Firefox.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔒', title: 'Local Encryption', desc: 'AES-256 encrypted profiles stored only on your device.' },
            { icon: '⚡', title: 'Instant Fill', desc: 'Detects form fields and fills them in one click.' },
            { icon: '🛡️', title: 'Zero Cloud', desc: 'No servers receive your personal data. Ever.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included. No tiers.</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited encrypted profiles',
              'Chrome & Firefox extension',
              'Smart form field detection',
              'Local dashboard for profile mgmt',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is my data really never sent to the cloud?',
              a: 'Yes. FormShield uses zero-knowledge encryption. Your profiles are encrypted locally and never transmitted to any server. We have no access to your data.',
            },
            {
              q: 'Which browsers are supported?',
              a: 'FormShield works on Chrome (and Chromium-based browsers like Edge, Brave) and Firefox. Safari support is on the roadmap.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You keep access until the end of your billing period. Your locally stored profiles remain on your device — we never delete your data.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} FormShield. All rights reserved.
      </footer>
    </main>
  )
}
