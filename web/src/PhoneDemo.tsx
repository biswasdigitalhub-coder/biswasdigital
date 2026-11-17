import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCheck, FileText, Phone, Video, ArrowLeft } from 'lucide-react'

type Msg = { me?: boolean; text?: string; file?: string; time: string }
const script: Msg[] = [
  { me: true, text: 'Hi! I want to apply for a new PAN card 🙏', time: '10:02' },
  { me: true, file: 'aadhaar_card.pdf', time: '10:02' },
  { text: 'Got it 👍 Please also send a photo & signature.', time: '10:03' },
  { me: true, file: 'photo_signature.jpg', time: '10:04' },
  { text: 'Draft ready ✅ Please check your details.', file: 'PAN_draft_preview.pdf', time: '10:18' },
  { me: true, text: 'All correct, please submit!', time: '10:19' },
  { text: 'Submitted 🎉 Acknowledgement sent. Thank you!', time: '10:21' },
]

function Bubble({ m }: { m: Msg }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug shadow-sm ${m.me ? 'ml-auto rounded-tr-sm bg-[#d9fdd3] text-slate-800' : 'rounded-tl-sm bg-white text-slate-800'}`}>
      {m.file && (
        <div className="mb-1 flex items-center gap-2 rounded-lg bg-black/5 p-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-red-500 text-white"><FileText className="h-4 w-4" /></span>
          <span className="truncate text-[11.5px] font-semibold">{m.file}</span>
        </div>
      )}
      {m.text}
      <span className="ml-2 inline-flex items-center gap-0.5 align-bottom text-[10px] text-slate-400">
        {m.time}{m.me && <CheckCheck className="h-3.5 w-3.5 text-sky-500" />}
      </span>
    </motion.div>
  )
}

export default function PhoneDemo() {
  const [n, setN] = useState(3)
  const [typing, setTyping] = useState(false)
  useEffect(() => {
    if (n >= script.length) { const t = setTimeout(() => setN(3), 4500); return () => clearTimeout(t) }
    const next = script[n]
    setTyping(!next.me)
    const t = setTimeout(() => { setTyping(false); setN(n + 1) }, next.me ? 1400 : 2000)
    return () => clearTimeout(t)
  }, [n])
  const shown = script.slice(0, n).slice(-5)
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]" style={{ transformStyle: 'preserve-3d' }}>
      <span className="absolute -left-[13px] top-28 h-10 w-1 rounded-l bg-slate-700" />
      <span className="absolute -left-[13px] top-40 h-14 w-1 rounded-l bg-slate-700" />
      <span className="absolute -right-[13px] top-36 h-16 w-1 rounded-r bg-slate-700" />
      <div className="relative rounded-[2.8rem] border-[11px] border-slate-950 bg-slate-950 shadow-[0_50px_100px_-20px_rgba(2,6,23,.85),inset_0_0_0_2px_rgba(148,163,184,.25)] ring-[3px] ring-slate-600/60">
        <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.2rem] bg-[linear-gradient(115deg,rgba(255,255,255,.28)_0%,rgba(255,255,255,.06)_28%,transparent_45%)]" />
        <div className="relative overflow-hidden rounded-[2rem] bg-[#efeae2]">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
          <div className="flex items-center gap-2 bg-[#075e54] px-3 pb-2.5 pt-9 text-white">
            <ArrowLeft className="h-4 w-4" />
            <img src="/logo.jpg" alt="" className="h-8 w-8 rounded-full bg-white object-cover" />
            <div className="flex-1 leading-tight"><div className="text-[13px] font-semibold">Biswas Digital Hub</div><div className="text-[10px] text-emerald-100">{typing ? 'typing…' : 'online'}</div></div>
            <Video className="h-4 w-4" /><Phone className="h-4 w-4" />
          </div>
          <div className="flex h-[380px] flex-col justify-end gap-2 p-3 sm:h-[420px]"
            style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,.05) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
            <AnimatePresence initial={false}>
              {shown.map((m, i) => <Bubble key={`${n - shown.length + i}`} m={m} />)}
            </AnimatePresence>
            {typing && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex w-14 gap-1 rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 shadow-sm">
                {[0, 1, 2].map(i => <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-400" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }} />)}
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-2 bg-[#f0f0f0] px-3 py-2">
            <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[11px] text-slate-400">Message</div>
            <div className="h-8 w-8 rounded-full bg-[#00a884]" />
          </div>
        </div>
      </div>
    </div>
  )
}
