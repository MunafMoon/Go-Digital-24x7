import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
export function BackToTop(){const[show,setShow]=useState(false);useEffect(()=>{const f=()=>setShow(scrollY>600);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);return show?<button onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#0B1020] text-white shadow-xl"><ArrowUp/></button>:null}
export function FloatingContact(){return <a href="https://wa.me/917984592484" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#00C896] to-[#00D4FF] text-white shadow-2xl"><MessageCircle/></a>}
export function CursorGlow(){const[p,setP]=useState({x:-100,y:-100});useEffect(()=>{const f=e=>setP({x:e.clientX,y:e.clientY});addEventListener('mousemove',f);return()=>removeEventListener('mousemove',f)},[]);return <div className="pointer-events-none fixed z-0 hidden h-72 w-72 rounded-full bg-[#6C3BFF]/10 blur-3xl lg:block" style={{left:p.x-144,top:p.y-144}}/>}

