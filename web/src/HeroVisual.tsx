import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Star } from 'lucide-react'
import PhoneDemo from './PhoneDemo'

const img = (k: string) => `/3d/${k}.png`

function Badge({ icon, title, sub, z, className, delay }: { icon: string; title: string; sub: string; z: number; className: string; delay: number }) {
  return (
    <div className={`absolute hidden sm:block ${className}`} style={{ transform: `translateZ(${z}px)`, transformStyle: 'preserve-3d' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { delay: 0.8 + delay }, y: { duration: 5, repeat: Infinity, delay, ease: 'easeInOut' } }}
        className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 py-2.5 pl-2.5 pr-5 shadow-[0_25px_50px_-12px_rgba(2,6,23,.6)] backdrop-blur-xl">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-amber-100"><img src={img(icon)} alt="" className="h-7 w-7" /></span>
        <div className="leading-tight"><div className="text-[13px] font-bold text-brand-900">{title}</div><div className="text-[11px] text-slate-500">{sub}</div></div>
      </motion.div>
    </div>
  )
}

export default function HeroVisual() {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rY = useSpring(useTransform(mx, [-1, 1], [-30, -8]), { stiffness: 80, damping: 18 })
  const rX = useSpring(useTransform(my, [-1, 1], [16, 4]), { stiffness: 80, damping: 18 })
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }
  const services = ['id', 'card', 'printer', 'train', 'grad', 'camera']
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={move} onPointerLeave={() => { mx.set(0); my.set(0) }}
      className="relative mx-auto flex w-full max-w-[560px] justify-center py-10 sm:py-14" style={{ perspective: 1400 }}>
      {/* glow + floor shadow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,#f59e0b,#a855f7,#7c3aed,#f59e0b)] opacity-30 blur-3xl" />
      <div className="absolute bottom-2 left-1/2 h-10 w-[60%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl" />

      <motion.div style={{ rotateY: rY, rotateX: rX, rotateZ: 3, transformStyle: 'preserve-3d' }} className="relative">
        {/* back layer: services panel */}
        <div className="absolute -left-44 -top-4 hidden w-56 rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:block"
          style={{ transform: 'translateZ(-110px)' }}>
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-amber-200">Services</div>
          <div className="grid grid-cols-3 gap-2.5">
            {services.map(s => <div key={s} className="grid aspect-square place-items-center rounded-2xl bg-white/15"><img src={img(s)} alt="" className="h-8 w-8" /></div>)}
          </div>
        </div>
        <div className="absolute -right-28 bottom-20 hidden h-36 w-44 rounded-3xl bg-gradient-to-br from-amber-400 to-fuchsia-600 p-4 text-white shadow-2xl sm:block"
          style={{ transform: 'translateZ(-70px)' }}>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-100">Today</div>
          <div className="mt-1 text-3xl font-extrabold">120+</div>
          <div className="text-xs text-amber-100">documents handled</div>
          <div className="mt-3 flex h-8 items-end gap-1">{[40, 65, 50, 80, 60, 95, 75].map((h, i) => <span key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />)}</div>
        </div>

        {/* phone */}
        <div style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}><PhoneDemo /></div>

        {/* front badges */}
        <Badge icon="check" title="PAN Applied" sub="Draft checked ✓" z={90} className="-left-28 top-16" delay={0} />
        <Badge icon="train" title="Ticket Booked" sub="Howrah → Delhi" z={130} className="-right-32 top-[38%]" delay={0.7} />
        <Badge icon="printer" title="24 pages printed" sub="Ready to collect" z={70} className="-left-32 bottom-28" delay={1.4} />
        <div className="absolute -bottom-6 -right-10 sm:-right-16" style={{ transform: 'translateZ(150px)' }}>
          <motion.div animate={{ rotate: [-4, 4, -4] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 px-4 py-3 text-center text-brand-950 shadow-[0_25px_50px_-12px_rgba(234,88,12,.6)] ring-1 ring-white/40">
            <div className="flex items-center justify-center gap-1 text-xl font-extrabold sm:text-2xl"><Star className="h-4 w-4 fill-brand-950 sm:h-5 sm:w-5" />4.8</div>
            <div className="text-[9px] font-bold uppercase tracking-wider sm:text-[10px]">Google rating</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
