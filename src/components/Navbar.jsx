import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const links=['Home','Services','About','Portfolio','Case Studies','Pricing','Blog','Contact'];
const path=l=>l==='Home'?'/':'/'+l.toLowerCase().replaceAll(' ','-');
export default function Navbar(){const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);useEffect(()=>{const f=()=>setScrolled(scrollY>20);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);return <header className={`fixed left-0 right-0 top-0 z-50 transition ${scrolled?'py-3':'py-5'}`}><nav className={`container flex items-center justify-between rounded-full px-5 py-3 ${scrolled||open?'glass':'bg-white/30'}`}><NavLink to="/" className="flex items-center gap-2 font-extrabold"><span>Go <span className="gradient-text">Digital 24x7</span></span></NavLink><div className="hidden items-center gap-6 lg:flex">{links.map(l=><NavLink key={l} to={path(l)} className={({isActive})=>`text-sm font-bold ${isActive?'text-[#6C3BFF]':'text-slate-700 hover:text-[#6C3BFF]'}`}>{l}</NavLink>)}<a className="btn btn-primary" href="/contact">Get Free Strategy Call</a></div><button className="lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="container mt-2 grid gap-2 rounded-3xl bg-white p-4 shadow-2xl lg:hidden">{links.map(l=><NavLink onClick={()=>setOpen(false)} key={l} to={path(l)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-50">{l}</NavLink>)}<a className="btn btn-primary justify-center" href="/contact">Get Free Strategy Call</a></div>}</header>}



