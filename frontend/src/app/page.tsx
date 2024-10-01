'use client';

import { useState, useEffect } from 'react'
import { Menu, X, Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">Invilance</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#pakketten" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Pakketten</Link>
                <Link href="#over-ons" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Over ons</Link>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Inloggen</Link>
                <Link href="/signup" className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Aanmelden</Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="#pakketten" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pakketten</Link>
              <Link href="#over-ons" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Over ons</Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Inloggen</Link>
              <Link href="/signup" className="bg-green-500 text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">Aanmelden</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Invilance - De beste boekhoudapp voor zzp'ers</h1>
            <p className="text-xl mb-8">Beheer je facturen, uitgaven en inkomsten eenvoudig en snel met onze gebruiksvriendelijke software.</p>
            <div className="space-x-4">
              <Link href="/trial" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300">Start gratis proefperiode</Link>
              <Link href="#pakketten" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300">Bekijk onze pakketten</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom" style={{backgroundImage: "url('/placeholder.svg')"}}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Wat biedt Invilance?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Factuurbeheer", description: "Maak en verstuur facturen in een paar klikken.", icon: "📄" },
              { title: "Uitgavenbeheer", description: "Volg en categoriseer al je zakelijke uitgaven.", icon: "💰" },
              { title: "Automatische rapportages", description: "Krijg inzicht in je winst en verlies met duidelijke rapporten.", icon: "📊" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Wat onze klanten zeggen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Anna de Vries", role: "ZZP'er", quote: "Met Invilance houd ik moeiteloos mijn financiën op orde!" },
              { name: "Peter Jansen", role: "Kleine ondernemer", quote: "Simpel, snel en overzichtelijk. Precies wat ik nodig had voor mijn administratie." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pakketten" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Kies je pakket</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "€9,99", description: "Voor zzp'ers", features: ["Factureren", "Basis rapportages", "E-mail support"] },
              { name: "Pro", price: "€19,99", description: "Voor kleine bedrijven", features: ["Alles uit Starter", "Bankintegratie", "Geavanceerde rapportages", "Telefoon support"] },
              { name: "Enterprise", price: "Op aanvraag", description: "Voor grotere bedrijven", features: ["Alles uit Pro", "Op maat gemaakte oplossingen", "Dedicated accountmanager", "24/7 premium support"] }
            ].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/maand</span></p>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-center font-medium transition-colors duration-300">Aanmelden</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Invilance</h3>
              <p className="mb-4">Boekhouden, eenvoudig en efficiënt.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg></a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>Email: info@invilance.nl</p>
              <p>Tel: +31 (0)20 123 4567</p>
              <p>Adres: Hoofdstraat 1, 1234 AB Amsterdam</p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-gray-300">Privacybeleid</Link></li>
                <li><Link href="/terms" className="hover:text-gray-300">Algemene voorwaarden</Link></li>
                <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Invilance. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}