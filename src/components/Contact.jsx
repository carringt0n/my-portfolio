import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from './icons'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setError('')
    try {
      const response = await fetch('https://formspree.io/f/mnppbvye', {
        method: 'POST',
        body: new FormData(event.target),
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSent(true)
      } else {
        setError('Something went wrong sending your message. Please try again or email me directly.')
      }
    } catch {
      setError('Could not reach the message service. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            Contact
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Let&apos;s build something
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Have a project in mind, or just want to say hello? My inbox is open.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
              >
                <Mail size={18} className="text-emerald-500" /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
              >
                <GithubIcon size={18} className="text-emerald-500" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
              >
                <LinkedinIcon size={18} className="text-emerald-500" /> LinkedIn
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
              >
                <XIcon size={18} className="text-emerald-500" /> Twitter / X
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            {sent ? (
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={22} />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Message sent!</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Thanks for reaching out — I&apos;ll get back to you as soon as I can.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </div>
                {error && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-60"
                >
                  {sending ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
