import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
export function Reveal({ children, className='' }) { const ref=useRef(null); const show=useInView(ref,{once:true,margin:'-80px'}); return <motion.div ref={ref} className={className} initial={{opacity:0,y:28}} animate={show?{opacity:1,y:0}:{}} transition={{duration:.55}}>{children}</motion.div>; }
export function SectionTitle({eyebrow,title,subtitle,dark=false}) { return <Reveal className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-extrabold uppercase tracking-[.22em] text-[#6C3BFF]">{eyebrow}</p><h2 className={`text-3xl font-extrabold md:text-5xl ${dark?'text-white':'text-[#0B1020]'}`}>{title}</h2>{subtitle&&<p className={`mt-5 text-lg ${dark?'text-white/70':'text-slate-600'}`}>{subtitle}</p>}</Reveal>; }
export function GradientButton({children,to='#audit',ghost=false}) { return <a className={`btn ${ghost?'btn-ghost':'btn-primary'}`} href={to}>{children}</a>; }
export function AnimatedCounter({value,suffix=''}) { const ref=useRef(null); const view=useInView(ref,{once:true}); const [n,setN]=useState(0); useEffect(()=>{ if(!view)return; let s=0,id=setInterval(()=>{s+=1; setN(value*s/40); if(s>=40)clearInterval(id);},22); return()=>clearInterval(id);},[view,value]); return <span ref={ref}>{Number.isInteger(value)?Math.round(n):n.toFixed(1)}{suffix}</span>; }


