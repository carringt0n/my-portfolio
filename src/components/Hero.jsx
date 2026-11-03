import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from './icons'
import { profile } from '../data'
import profilePhoto from '../assets/profile.jpg'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
        <Reveal className="flex-1">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            Hello, I&apos;m
          </p>
          <h1 className="font-display mt-4 text-5xl leading-tight font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <h2 className="font-display mt-2 text-2xl font-semibold text-zinc-700 sm:text-3xl dark:text-zinc-200">
            {profile.role}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I build modern web and mobile experiences that people enjoy using —
            from full-stack e-commerce to cross-platform apps. I care about clean
            code, thoughtful design, and shipping things that actually work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              View My Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              Contact Me
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin size={16} /> {profile.location}
            </span>
            <span className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
              <LinkedinIcon size={20} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
              <XIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
              <Mail size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal className="mx-auto shrink-0 lg:mx-0">
          <div className="group overflow-hidden rounded-3xl shadow-xl">
            <img
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              className="h-64 w-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 sm:h-80 sm:w-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
