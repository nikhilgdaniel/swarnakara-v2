'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, ArrowRight, Shield, Award, Banknote, Gem,
  CheckCircle, Users, TrendingUp, Star, MapPin, Clock, ChevronDown,
} from 'lucide-react'

// ─────────────────────────────────────────────
//  NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['Home', 'Services', 'How It Works', 'Rates', 'Contact']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8922A] to-[#a07820] flex items-center justify-center shadow-md shadow-[#C8922A]/20">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-[#1a1a2e]">SWARNA</span>
              <span className="text-[#C8922A]">KARA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <a
                key={l}
                href={'#' + l.toLowerCase().replace(/ /g, '-')}
                className="text-[#1a1a2e]/70 hover:text-[#C8922A] text-sm font-medium transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-7 py-2.5 rounded-xl text-sm shadow-md shadow-[#C8922A]/25 hover:shadow-lg hover:shadow-[#C8922A]/30 hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </a>
          </div>

          <button
            className="md:hidden text-[#1a1a2e] p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl md:hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l}
                  href={'#' + l.toLowerCase().replace(/ /g, '-')}
                  className="text-[#1a1a2e]/80 hover:text-[#C8922A] py-3 text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 text-center bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAF8] pt-20">

      {/* Warm background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] -translate-y-1/2 translate-x-1/3 bg-gradient-to-br from-[#FEF7E6] via-[#F5B942]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/2 -translate-x-1/3 bg-gradient-to-tr from-[#FEF7E6] via-[#C8922A]/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-16 text-center flex flex-col items-center justify-center flex-1">

        {/* Malayalam tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#C8922A] text-lg md:text-xl mb-5 malayalam"
        >
          സ്വർണ വിശ്വാസം... സ്വർണകാരാ
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-extrabold text-[2.6rem] sm:text-5xl md:text-6xl mb-6 leading-[1.15] text-[#1a1a2e] tracking-tight"
        >
          Your Gold.
          <br />
          <span className="text-[#C8922A]">Your Trust.</span>
          <br />
          Your SWARNAKARA.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#6B7280] text-base md:text-lg max-w-sm mx-auto mb-10 leading-relaxed"
        >
          Instant gold loans in Kollam with the lowest interest rates, transparent process, and 5000+ satisfied families.
        </motion.p>

        {/* CTAs — generous spacing, proper touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col gap-4 w-full max-w-xs mx-auto mb-14"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-8 py-4 rounded-2xl text-base shadow-xl shadow-[#C8922A]/20 flex items-center justify-center gap-2.5 hover:shadow-2xl hover:shadow-[#C8922A]/25 hover:-translate-y-0.5 transition-all"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-[#D1D5DB] rounded-2xl text-[#1a1a2e]/70 font-semibold text-base hover:border-[#C8922A] hover:text-[#C8922A] hover:shadow-lg hover:shadow-[#C8922A]/10 transition-all"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>
        </motion.div>

        {/* Scroll indicator — spaced below CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-[#9CA3AF]"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  TRUST BAR
// ─────────────────────────────────────────────
function TrustBar() {
  const stats = [
    { icon: Users,    value: '5000+',  label: 'Happy Families' },
    { icon: Shield,   value: '10+',   label: 'Years of Trust' },
    { icon: Award,    value: 'RBI',    label: 'Registered' },
    { icon: Banknote, value: '15 min', label: 'Quick Disbursal' },
  ]
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#FAFAF8] border border-gray-100 shadow-sm hover:shadow-md hover:shadow-[#C8922A]/8 transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FEF7E6] flex items-center justify-center mb-1">
                <s.icon className="w-6.5 h-6.5 text-[#C8922A]" />
              </div>
              <div className="font-extrabold text-2xl text-[#1a1a2e] leading-none">{s.value}</div>
              <div className="text-[#6B7280] text-xs leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  SERVICES
// ─────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Gem,
      title: 'Gold Loan',
      desc: 'Get up to 90% of your gold value. Interest rates starting at just 9% p.a. with zero foreclosure penalties.',
      tag: 'Up to 90% Value',
    },
    {
      icon: Banknote,
      title: 'Loan Against Ornament',
      desc: 'Flexible tenure from 1 month to 36 months. Keep your ornaments safe while getting the cash you need.',
      tag: 'Flexible Tenure',
    },
    {
      icon: TrendingUp,
      title: 'Quick Cash',
      desc: '15-minute approval and instant disbursal. Your gold works for you without the long wait.',
      tag: '15 Min Approval',
    },
  ]
  return (
    <section id="services" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Our Services</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">What We Offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-[#C8922A]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-5 right-5 bg-[#FEF7E6] text-[#C8922A] text-[11px] font-bold px-3 py-1 rounded-xl">
                {s.tag}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#FEF7E6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-[#C8922A]" />
              </div>

              <h3 className="font-bold text-xl text-[#1a1a2e] mb-2.5">{s.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-[#C8922A] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  GOLD RATE TICKER
// ─────────────────────────────────────────────
function GoldRateTicker() {
  const rates = [
    '22K Gold: ₹7,425/gm',
    '24K Gold: ₹8,150/gm',
    '18K Gold: ₹6,120/gm',
    'Gold Loan Rate: From 9% p.a.',
  ]
  const doubled = [...rates, ...rates, ...rates, ...rates]

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((r, i) => (
          <span key={i} className="mx-10 font-semibold text-sm text-white/90 tracking-wide">
            ◆ {r}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  HOW IT WORKS
// ─────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Visit Us',      desc: 'Come to our branch or call us — we make it easy.' },
    { num: '02', title: 'Gold Valuation', desc: 'Certified appraiser checks purity and weight.' },
    { num: '03', title: 'Loan Approval',  desc: 'Get instant approval with transparent terms.' },
    { num: '04', title: 'Cash Transfer',  desc: 'Receive money instantly to your account.' },
  ]
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{          once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Simple Process</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">How It Works</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-[#C8922A]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-[#FAFAF8] border border-gray-100 hover:shadow-lg hover:shadow-[#C8922A]/8 transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#C8922A] to-[#a07820] flex items-center justify-center font-extrabold text-lg text-white shadow-md shadow-[#C8922A]/20">
                  {s.num}
                </div>
                <h3 className="font-bold text-base text-[#1a1a2e] mb-1.5">{s.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  INTEREST RATES
// ─────────────────────────────────────────────
function InterestRates() {
  const rows = [
    { amount: 'Up to ₹1 Lakh',      rate: '9% p.a.',    note: 'Best for small needs',    best: true  },
    { amount: '₹1 Lakh – ₹5 Lakhs', rate: '11% p.a.',   note: 'Most popular tier',       best: false },
    { amount: '₹5 Lakhs – ₹10 L',  rate: '13% p.a.',   note: 'For larger amounts',      best: false },
    { amount: 'Above ₹10 Lakhs',     rate: 'Contact Us', note: 'Custom rates available',  best: false },
  ]
  return (
    <section id="rates" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Transparent Rates</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Interest Rates</h2>
        </motion.div>

        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className={`flex items-center justify-between px-6 py-5 rounded-2xl border transition-all gap-4 ${
                r.best
                  ? 'bg-white border-[#C8922A]/25 shadow-lg shadow-[#C8922A]/8'
                  : 'bg-white border-gray-100 hover:border-[#C8922A]/25 hover:shadow-md hover:shadow-[#C8922A]/8'
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <span className={`font-semibold text-sm ${r.best ? 'text-[#C8922A]' : 'text-[#1a1a2e]'}`}>
                  {r.amount}
                </span>
                {r.best && (
                  <span className="text-[10px] bg-[#C8922A] text-white font-bold px-2 py-0.5 rounded-full w-fit">Best Rate</span>
                )}
                <span className="text-[#9CA3AF] text-[11px]">{r.note}</span>
              </div>
              <span className={`font-extrabold text-lg shrink-0 ${r.best ? 'text-[#C8922A]' : 'text-[#1a1a2e]'}`}>
                {r.rate}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-[#9CA3AF] text-[11px] text-center mt-5">* Rates subject to change. Visit our branch for exact rates.</p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  WHY US
// ─────────────────────────────────────────────
function WhyUs() {
  const features = [
    { icon: Shield,     title: 'Secure',       desc: 'Your gold is fully insured and stored safely in our vault.' },
    { icon: CheckCircle, title: 'Transparent',   desc: 'No hidden charges, no surprise fees. What you see is what you get.' },
    { icon: Award,       title: 'Certified',     desc: 'Purity testing done by certified appraisers you can trust.' },
    { icon: Banknote,    title: 'Lowest Rates', desc: 'Interest rates starting at just 9% p.a. — truly the lowest.' },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Why Choose Us</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Why SWARNAKARA</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAFAF8] border border-gray-100 rounded-2xl p-7 text-center hover:shadow-xl hover:shadow-[#C8922A]/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FEF7E6] flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6.5 h-6.5 text-[#C8922A]" />
              </div>
              <h3 className="font-bold text-base text-[#1a1a2e] mb-1.5">{f.title}</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  TESTIMONIALS
// ─────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: 'Ravi Menon',   text: "Got my loan approved in just 20 minutes. Best gold loan experience I've ever had.", rating: 5, location: 'Kollam' },
    { name: 'Smt. Lakshmi', text: 'Very transparent process. The staff explained every charge clearly. Highly recommend!', rating: 5, location: 'Kollam' },
    { name: 'Jose Thomas',  text: 'My family has been banking with them for 8 years. Trustworthy, reliable, and fast.', rating: 5, location: 'Kollam' },
  ]
  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Testimonials</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">What Our Customers Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-[#C8922A]/8 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C8922A] text-[#C8922A]" />
                ))}
              </div>
              <p className="text-[#1a1a2e] mb-5 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF7E6] flex items-center justify-center text-[#C8922A] font-bold text-sm shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1a1a2e]">{r.name}</p>
                  <p className="text-[#9CA3AF] text-xs">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8922A] text-xs font-bold uppercase tracking-widest mb-2.5">Contact Us</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: MapPin, title: 'Address', lines: ['SWARNAKARA Gold Loans', 'Main Road, Kollam', 'Kerala 691001'] },
            { icon: Phone,  title: 'Phone',   lines: ['+91 98765 43210'] },
            { icon: Clock,  title: 'Hours',   lines: ['Mon – Sat: 9AM – 6PM', 'Sunday: Closed'] },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAFAF8] border border-gray-100 rounded-2xl p-7 flex items-start gap-4 hover:shadow-lg hover:shadow-[#C8922A]/8 transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FEF7E6] flex items-center justify-center shrink-0">
                <item.icon className="w-5.5 h-5.5 text-[#C8922A]" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#1a1a2e] mb-1.5">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-[#6B7280] text-sm">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 bg-[#1a1a2e] text-white/50 text-center">
      <p className="text-xs">© 2025 SWARNAKARA Gold Loans. All rights reserved.</p>
      <p className="text-[11px] mt-1.5 opacity-40">Kollam, Kerala · RBI Registered Gold Loan Company</p>
    </footer>
  )
}

// ─────────────────────────────────────────────
//  PAGE ROOT
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <GoldRateTicker />
      <HowItWorks />
      <InterestRates />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
