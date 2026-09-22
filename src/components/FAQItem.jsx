import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
export default function FAQItem({q,a}){const[open,setOpen]=useState(false);return <div className="rounded-2xl bg-white p-5 shadow-lg"><button onClick={()=>setOpen(!open)} className="flex w-full items-center justify-between gap-4 text-left font-extrabold"><span>{q}</span><ChevronDown className={`transition ${open?'rotate-180':''}`}/></button><AnimatePresence>{open&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden pt-4 text-slate-600">{a}</motion.p>}</AnimatePresence></div>}


