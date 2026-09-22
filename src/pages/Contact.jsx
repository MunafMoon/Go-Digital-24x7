import { useEffect } from 'react';
import LeadForm from '../components/LeadForm.jsx';
export default function Contact(){useEffect(()=>{document.title='Contact | Go Digital 24x7'},[]);return <><section className="mesh pt-36 pb-20"><div className="container text-center"><p className="font-extrabold uppercase tracking-[.22em] text-[#6C3BFF]">Contact</p><h1 className="mx-auto mt-4 max-w-4xl text-5xl font-extrabold md:text-7xl">Book Your Free Strategy Call</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Tell us where growth feels stuck. Your request will be sent directly to the Go Digital 24x7 inbox.</p></div></section><section className="section"><div className="container"><LeadForm/></div></section></>}




