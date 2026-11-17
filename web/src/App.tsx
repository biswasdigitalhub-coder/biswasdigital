import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Phone, MessageCircle, Star, Search, Menu, X, CheckCircle2, ArrowRight, Clock, Calculator, ChevronDown, ArrowUp } from 'lucide-react'
import HeroVisual from './HeroVisual'
import { BIZ, wa, services, categories, checklists } from './data'

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } }
const img = (k: string) => `/3d/${k}.png`

function useOpenStatus() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const check = () => {
      const d = new Date(), h = d.getHours() + d.getMinutes() / 60
      setOpen(d.getDay() === 0 ? h >= 9 && h < 14 : h >= 8 && h < 21.5)
    }
    check(); const t = setInterval(check, 60000); return () => clearInterval(t)
  }, [])
  return open
}

const nav = [['Services', '#services'], ['How it works', '#how'], ['Documents', '#checklist'], ['Estimate', '#estimate'], ['About', '#about'], ['FAQ', '#faq'], ['Contact', '#contact']]

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-amber-400 via-brand-500 to-fuchsia-500" />
}

function Header() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const open = useOpenStatus()
  useEffect(() => { const f = () => setScrolled(window.scrollY > 20); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-950 text-[11px] text-slate-300 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${open ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className={`relative inline-flex h-2 w-2 rounded-full ${open ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            </span>
            {open ? 'Open now — walk in or WhatsApp' : 'Closed now — WhatsApp your documents'}
          </span>
          <a href={`tel:${BIZ.phone}`} className="hidden items-center gap-1.5 hover:text-white sm:flex"><Phone className="h-3 w-3" /> {BIZ.phone}</a>
        </div>
      </div>
      <div className={`border-b transition-all ${scrolled ? 'border-slate-200 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl' : 'border-transparent bg-white'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3">
            <img src="/logo.jpg" alt="Biswas Digital Hub logo" className="h-10 w-10 rounded-xl object-cover ring-2 ring-brand-100 sm:h-11 sm:w-11" />
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-tight text-brand-900 sm:text-base">BISWAS</div>
              <div className="text-[10px] font-semibold tracking-[.22em] text-brand-600 sm:text-[11px]">DIGITAL HUB</div>
            </div>
          </a>
          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-brand-50 hover:text-brand-700">{l}</a>)}
          </nav>
          <a href={wa('Hello Biswas Digital Hub, I need help with a service.')} className="hidden rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex">Request Service</a>
          <button className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 xl:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menu && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden border-t border-slate-100 px-4 xl:hidden">
            <div className="grid grid-cols-2 gap-2 py-4">
              {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 active:bg-brand-50">{l}</a>)}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}


function Hero() {
  const [q, setQ] = useState('')
  const go = () => { document.getElementById('services')?.scrollIntoView(); window.dispatchEvent(new CustomEvent('svc-search', { detail: q })) }
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 text-white">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-amber-500/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-24 pt-10 sm:pb-28 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-20">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold backdrop-blur sm:text-xs">
            <img src={img('star')} alt="" className="h-4 w-4" /> 4.8 rated on Google · {BIZ.location}
          </span>
          <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your One Stop{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-200 to-rose-300 bg-clip-text text-transparent">Digital Service</span>{' '}
            Centre <img src={img('rocket')} alt="" className="inline h-9 w-9 align-middle sm:h-12 sm:w-12" />
          </h1>
          <p className="mt-2 text-base font-semibold text-amber-200 sm:text-lg" lang="bn">সব ডিজিটাল কাজ, এক জায়গায় ✨</p>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-slate-300 sm:text-lg lg:mx-0">
            Aadhaar, PAN, Voter ID, online forms, scholarships, job applications, train & flight tickets, printing and more — done right the first time.
          </p>
          <div className="mx-auto mt-7 flex max-w-xl items-center gap-2 rounded-2xl bg-white p-1.5 shadow-2xl shadow-black/30 sm:p-2 lg:mx-0">
            <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400" />
            <input value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === 'Enter' && go()}
              placeholder="Search: PAN, scholarship, Xerox…" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base" />
            <button onClick={go} className="rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 px-4 py-2.5 text-sm font-bold sm:px-6">Find</button>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href={wa('Hello, I want to request a service.')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <a href={`tel:${BIZ.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold backdrop-blur transition hover:bg-white/20">
              <Phone className="h-5 w-5" /> {BIZ.phone}
            </a>
          </div>
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6 lg:mx-0">
            {[['19+', 'Services', 'sparkles'], ['100%', 'Draft check', 'check'], ['5 min', 'Passport photo', 'camera']].map(([a, b, i]) => (
              <div key={b} className="flex flex-col items-center gap-1 lg:items-start">
                <img src={img(i)} alt="" className="h-7 w-7" />
                <div className="text-xl font-extrabold text-amber-300 sm:text-2xl">{a}</div><div className="text-[11px] text-slate-400 sm:text-xs">{b}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroVisual />
      </div>
      <svg className="absolute bottom-0 left-0 w-full text-slate-50" viewBox="0 0 1440 80" preserveAspectRatio="none"><path fill="currentColor" d="M0 80V40C240 0 480 0 720 30s480 50 720 10v40z" /></svg>
    </section>
  )
}

function Marquee() {
  const row = [...services, ...services]
  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white" />
      <div className="marquee flex w-max gap-3">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
            <img src={s.img} alt="" className="h-6 w-6" />{s.title}
          </span>
        ))}
      </div>
    </div>
  )
}

function Trust() {
  const items = [['lock', 'Trusted Services', 'Your documents stay safe'], ['zap', 'Quick & Reliable', 'Most work done while you wait'], ['bag', 'Affordable', 'Transparent, fair pricing'], ['support', 'Customer Support', 'Help on call & WhatsApp']]
  return (
    <section className="mx-auto max-w-7xl px-4 pt-14">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {items.map(([i, t, d], n) => (
          <motion.div key={t} {...fade} transition={{ delay: n * 0.08 }} whileHover={{ y: -6 }}
            className="flex flex-col items-center gap-3 rounded-3xl border border-slate-100 bg-white p-4 text-center shadow-lg shadow-slate-200/50 sm:flex-row sm:p-6 sm:text-left">
            <img src={img(i)} alt="" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
            <div><div className="text-sm font-bold text-brand-900 sm:text-base">{t}</div><div className="text-xs text-slate-500 sm:text-sm">{d}</div></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Heading({ tag, title, sub, icon }: { tag: string; title: string; sub: string; icon: string }) {
  return (
    <motion.div {...fade} className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
        <img src={img(icon)} alt="" className="h-4 w-4" />{tag}
      </span>
      <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-3 text-sm text-slate-500 sm:text-base">{sub}</p>
    </motion.div>
  )
}

function Services() {
  const [cat, setCat] = useState<string>('All')
  const [q, setQ] = useState('')
  useEffect(() => {
    const h = (e: Event) => { setQ((e as CustomEvent<string>).detail); setCat('All') }
    window.addEventListener('svc-search', h); return () => window.removeEventListener('svc-search', h)
  }, [])
  const list = useMemo(() => services.filter(s =>
    (cat === 'All' || s.cat === cat) && (s.title + s.desc + s.bn).toLowerCase().includes(q.toLowerCase())), [cat, q])
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:py-24">
      <Heading icon="sparkles" tag="Our Services" title="Everything Digital, Under One Roof" sub="From government ID cards to printing and travel bookings — fast, accurate and affordable." />
      <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition ${cat === c ? 'bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white shadow-lg shadow-brand-600/30' : 'border border-slate-200 bg-white text-slate-600 hover:border-brand-500'}`}>{c}</button>
        ))}
      </div>
      {q && <p className="mt-4 text-center text-sm text-slate-500">Results for “{q}” · <button className="font-semibold text-brand-600" onClick={() => setQ('')}>Clear</button></p>}
      <motion.div layout className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((s, i) => (
          <motion.div layout key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.03, 0.3) }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/15 sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative flex items-start justify-between gap-2">
              <img src={s.img} alt="" className="h-12 w-12 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-16 sm:w-16" />
              <span className="rounded-lg bg-white/80 px-2 py-1 text-[10px] font-bold text-brand-700 ring-1 ring-brand-100 sm:text-xs">{s.price}</span>
            </div>
            <h3 className="relative mt-4 text-sm font-bold leading-snug text-brand-900 sm:text-lg">{s.title}</h3>
            <p className="relative text-xs font-medium text-brand-600 sm:text-sm" lang="bn">{s.bn}</p>
            <p className="relative mt-2 hidden flex-1 text-sm text-slate-500 sm:block">{s.desc}</p>
            <a href={wa(`Hello, I need help with: ${s.title}`)} className="relative mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition-all hover:gap-2.5 sm:mt-5 sm:text-sm">Book now <ArrowRight className="h-4 w-4" /></a>
          </motion.div>
        ))}
        {!list.length && <p className="col-span-full text-center text-slate-500">No match found — just WhatsApp us, we probably do it! 😊</p>}
      </motion.div>
      <p className="mt-8 text-center text-xs text-slate-400">Prices are starting rates. Government portal fees are extra where applicable.</p>
    </section>
  )
}

function How() {
  const steps = [['mobile', 'Send on WhatsApp', 'Share photos or PDFs of your documents — no need to stand in line.'], ['laptop', 'We Prepare It', 'Our operator fills your form and sends you a draft to check.'], ['check', 'You Approve', 'Confirm the details — only then do we submit.'], ['rocket', 'Done & Delivered', 'Get the receipt / printout on WhatsApp or collect at the shop.']]
  return (
    <section id="how" className="scroll-mt-28 bg-gradient-to-b from-white to-brand-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Heading icon="zap" tag="How It Works" title="Skip the Queue in 4 Easy Steps" sub="Most of our work can be started right from your phone." />
        <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-0.5 bg-gradient-to-r from-brand-100 via-brand-500 to-brand-100 lg:block" />
          {steps.map(([i, t, d], n) => (
            <motion.div key={t} {...fade} transition={{ delay: n * 0.12 }} className="relative rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg shadow-slate-200/50">
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} className="relative mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand-50 to-amber-100">
                <img src={img(i)} alt="" className="h-12 w-12" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white ring-4 ring-white">{n + 1}</span>
              </motion.div>
              <h3 className="mt-5 font-bold text-brand-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-500">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Checklist() {
  const keys = Object.keys(checklists)
  const icons: Record<string, string> = { 'PAN Card': 'card', 'Voter ID': 'vote', 'Scholarship (SVMCM)': 'grad', 'Govt Job Form': 'job', 'Train Ticket': 'train' }
  const [k, setK] = useState(keys[0])
  return (
    <section id="checklist" className="scroll-mt-28 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <Heading icon="clip" tag="Document Helper" title="What Should I Bring?" sub="Pick a service to see the documents you need. Avoid a second trip!" />
        <div className="mt-10 grid gap-5 md:grid-cols-[250px_1fr]">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-col md:px-0">
            {keys.map(x => (
              <button key={x} onClick={() => setK(x)} className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${k === x ? 'bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-brand-50'}`}>
                <img src={img(icons[x])} alt="" className="h-7 w-7" />{x}
              </button>
            ))}
          </div>
          <motion.div key={k} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-brand-50/50 p-6 sm:p-8">
            <div className="flex items-center gap-3"><img src={img(icons[k])} alt="" className="h-12 w-12" /><h3 className="text-xl font-bold text-brand-900">{k}</h3></div>
            <ul className="mt-6 space-y-3">
              {checklists[k].map((d, i) => (
                <motion.li key={d} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm sm:text-base"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />{d}</motion.li>
              ))}
            </ul>
            <a href={wa(`Hello, I want to apply for ${k}. I have these documents ready.`)} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-600 sm:inline-flex"><MessageCircle className="h-4 w-4" /> Send documents on WhatsApp</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const rates = [['B/W Xerox', 2, 'page'], ['B/W Print', 3, 'printer'], ['Color Print', 10, 'sparkles'], ['Scanning', 5, 'scan'], ['Lamination', 20, 'clip'], ['Passport Photo (set)', 40, 'camera']] as const

function Estimate() {
  const [qty, setQty] = useState<Record<string, number>>({})
  const total = rates.reduce((s, [n, r]) => s + (qty[n] || 0) * r, 0)
  const summary = rates.filter(([n]) => qty[n]).map(([n, r]) => `${n} × ${qty[n]} = ₹${qty[n] * r}`).join('\n')
  const set = (n: string, v: number) => setQty({ ...qty, [n]: Math.max(0, Math.min(999, v || 0)) })
  return (
    <section id="estimate" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:py-24">
      <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 p-5 text-white sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
        <div className="grid-bg absolute inset-0" />
        <motion.div {...fade} className="relative text-center lg:text-left">
          <motion.img src={img('abacus')} alt="" className="mx-auto h-20 w-20 lg:mx-0" animate={{ rotate: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <h2 className="mt-4 text-[1.75rem] font-extrabold sm:text-4xl">Instant Price Estimate</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">Know your bill before you come. Set quantities and send the order straight to our WhatsApp.</p>
          <img src="/services-banner.jpg" alt="Biswas Digital Hub services" className="mt-8 hidden w-80 -rotate-3 rounded-2xl shadow-2xl transition hover:rotate-0 lg:block" />
        </motion.div>
        <div className="relative rounded-3xl bg-white p-4 text-slate-800 shadow-2xl sm:p-6">
          {rates.map(([n, r, i]) => (
            <div key={n} className="flex items-center justify-between gap-2 border-b border-slate-100 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <img src={img(i)} alt="" className="h-8 w-8 shrink-0" />
                <div className="min-w-0"><div className="truncate text-sm font-semibold sm:text-base">{n}</div><div className="text-xs text-slate-500">₹{r} each</div></div>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <button aria-label={`Less ${n}`} className="h-8 w-8 rounded-lg bg-slate-100 font-bold active:scale-90" onClick={() => set(n, (qty[n] || 0) - 1)}>−</button>
                <input type="number" inputMode="numeric" min={0} value={qty[n] || 0} onChange={e => set(n, +e.target.value)} className="w-12 rounded-lg border border-slate-200 py-1 text-center text-sm" />
                <button aria-label={`More ${n}`} className="h-8 w-8 rounded-lg bg-brand-600 font-bold text-white active:scale-90" onClick={() => set(n, (qty[n] || 0) + 1)}>+</button>
              </div>
            </div>
          ))}
          <div className="mt-5 flex items-center justify-between">
            <span className="font-semibold text-slate-500">Estimated total</span>
            <motion.span key={total} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="text-3xl font-extrabold text-brand-700">₹{total}</motion.span>
          </div>
          <a href={wa(`Hello, I want to order:\n${summary}\nEstimated total: ₹${total}`)}
            className={`mt-5 flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition ${total ? 'bg-emerald-500 hover:bg-emerald-600' : 'pointer-events-none bg-slate-300'}`}>
            <MessageCircle className="h-5 w-5" /> Send order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <motion.div {...fade} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-500/20 to-amber-400/20 blur-2xl" />
          <img src="/logo.jpg" alt="Biswas Digital Hub" className="relative rounded-[2rem] shadow-2xl" />
          <motion.img src={img('desktop')} alt="" className="absolute -left-6 -top-6 w-20 drop-shadow-xl sm:w-24" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-4 shadow-xl sm:-right-6">
            <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
            <div className="mt-1 text-2xl font-extrabold text-brand-900">4.8 / 5</div>
            <div className="text-xs text-slate-500">Google rating</div>
          </motion.div>
        </motion.div>
        <motion.div {...fade} className="text-center lg:text-left">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">About Us</span>
          <h2 className="mt-3 text-[1.75rem] font-extrabold text-brand-900 sm:text-4xl">We Make Digital Easy 💙</h2>
          <p className="mt-5 text-slate-600">Biswas Digital Hub is a local internet cafe and digital service centre in {BIZ.location}. We help students, job seekers, families and small businesses with every online task — so nobody has to struggle with complicated portals alone.</p>
          <ul className="mx-auto mt-6 max-w-md space-y-3 text-left lg:mx-0">
            {['Every form is checked with you before final submit', 'Send documents on WhatsApp — skip the queue', 'Bengali & English support', 'Fair, transparent pricing'].map(t =>
              <li key={t} className="flex items-center gap-3"><img src={img('check')} alt="" className="h-6 w-6" />{t}</li>)}
          </ul>
          <a href={BIZ.review} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 px-5 py-3 font-bold text-brand-700 transition hover:bg-brand-600 hover:text-white">
            <img src={img('star')} alt="" className="h-5 w-5" /> Read & write Google reviews
          </a>
        </motion.div>
      </div>
    </section>
  )
}


const faqs = [
  ['Do I need to visit the shop?', 'No. For most online work, just send clear photos or PDFs of your documents on WhatsApp. We prepare everything and share a draft for you to check.'],
  ['Is my data safe?', 'Yes. Your documents are used only for your work and are never shared with anyone else.'],
  ['How long does a form take?', 'Most forms are ready within 15–45 minutes. Passport photos take about 5 minutes.'],
  ['Are government fees included in your price?', 'No. Our prices are service charges. Any official portal or government fee is extra and shown to you before payment.'],
  ['How can I pay?', 'Cash at the shop or UPI (GPay, PhonePe, Paytm).'],
]

function FAQ() {
  const [o, setO] = useState(0)
  return (
    <section id="faq" className="scroll-mt-28 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Heading icon="memo" tag="FAQ" title="Questions? We've Got Answers" sub="Everything you need to know before you start." />
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className={`overflow-hidden rounded-2xl border transition ${o === i ? 'border-brand-100 bg-brand-50/60 shadow-lg shadow-brand-600/5' : 'border-slate-200 bg-white'}`}>
              <button onClick={() => setO(o === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-900" aria-expanded={o === i}>
                {q}<ChevronDown className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${o === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div initial={false} animate={{ height: o === i ? 'auto' : 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-slate-600 sm:text-base">{a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 800); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <motion.button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={false} animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6 }}
      className={`fixed bottom-24 right-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-white shadow-xl lg:bottom-24 lg:right-7 ${show ? '' : 'pointer-events-none'}`}>
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  )
}

function Contact() {
  const cards = [['phone', 'Call Us', BIZ.phone, `tel:${BIZ.phone}`], ['mobile', 'WhatsApp', 'Send documents anytime', wa('Hello Biswas Digital Hub!')], ['pin', 'Location', BIZ.location, BIZ.maps]]
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:py-24">
      <Heading icon="pin" tag="Visit Us" title="Get In Touch" sub="Walk in, call, or WhatsApp — we're happy to help." />
      <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {cards.map(([i, t, d, h], n) => (
          <motion.a key={t} {...fade} transition={{ delay: n * 0.1 }} href={h} target={t === 'Location' ? '_blank' : undefined} rel="noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl sm:flex-col sm:p-8 sm:text-center">
            <img src={img(i)} alt="" className="h-14 w-14 transition group-hover:scale-110 sm:h-16 sm:w-16" />
            <div><div className="font-bold text-brand-900">{t}</div><div className="mt-0.5 text-sm text-slate-500">{d}</div></div>
          </motion.a>
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-2 rounded-3xl bg-brand-50 p-5 text-center text-sm sm:flex-row sm:gap-6 sm:text-base">
        <Clock className="h-5 w-5 text-brand-600" />
        <span><b>Mon – Sat:</b> 8:00 AM – 9:30 PM</span><span><b>Sunday:</b> 9:00 AM – 2:00 PM</span>
      </div>
      <motion.div {...fade} className="mt-5 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
        <iframe title="Biswas Digital Hub on Google Maps" loading="lazy" className="h-72 w-full sm:h-96" referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Biswas%20Digital%20Hub%2C%20Bhabanipur%20Char%2C%20West%20Bengal&output=embed" />
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 pb-24 pt-14 text-slate-400 lg:pb-12">
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3"><img src="/logo.jpg" alt="" className="h-12 w-12 rounded-xl" /><div><div className="text-lg font-bold text-white">{BIZ.name}</div><div className="text-xs">Your one stop solution for all digital needs</div></div></div>
          <p className="mt-4 font-serif text-xl italic text-amber-300">We Make Digital Easy!</p>
        </div>
        <div><div className="mb-3 font-semibold text-white">Quick Links</div>{nav.map(([l, h]) => <a key={h} href={h} className="block py-1 text-sm hover:text-white">{l}</a>)}</div>
        <div><div className="mb-3 font-semibold text-white">Contact</div>
          <a href={`tel:${BIZ.phone}`} className="block py-1 text-sm hover:text-white">📞 {BIZ.phone}</a>
          <a href={wa('Hello!')} className="block py-1 text-sm hover:text-white">💬 WhatsApp</a>
          <a href={BIZ.maps} className="block py-1 text-sm hover:text-white">📍 {BIZ.location}</a>
        </div>
      </div>
      <p className="relative mt-10 border-t border-white/10 pt-6 text-center text-xs">© {new Date().getFullYear()} {BIZ.name}. All rights reserved.</p>
    </footer>
  )
}

function MobileBar() {
  return (
    <>
      <a href={wa('Hello Biswas Digital Hub!')} aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition hover:scale-110 lg:grid">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" /><MessageCircle className="relative h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {[[Phone, 'Call', `tel:${BIZ.phone}`], [MessageCircle, 'WhatsApp', wa('Hello!')], [Calculator, 'Prices', '#estimate'], [Star, 'Review', BIZ.review]].map(([I, l, h]: any) => (
          <a key={l} href={h} className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold text-slate-600 active:bg-slate-100"><I className={`h-5 w-5 ${l === 'WhatsApp' ? 'text-emerald-500' : 'text-brand-600'}`} />{l}</a>
        ))}
      </div>
    </>
  )
}

export default function App() {
  return (<><ScrollBar /><Header /><main><Hero /><Marquee /><Trust /><Services /><How /><Checklist /><Estimate /><About /><FAQ /><Contact /></main><Footer /><MobileBar /><ToTop /></>)
}
