import { Code2, Rocket, Smartphone } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Web',
    text: 'From database to deployment — I build complete web apps, not just front pages.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    text: 'Cross-platform apps with React Native and Expo, sharing logic with the web.',
  },
  {
    icon: Rocket,
    title: 'Ship & Iterate',
    text: 'I learn by building and shipping, then improving based on what breaks.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            About
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            A developer who learns by shipping
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m {profile.name}, a {profile.role.toLowerCase()} based in {profile.location}.
              I got into development by building real things: a furniture e-commerce
              site with real sign-in, carts, and payments-adjacent flows, then a mobile
              version of the same store. Along the way I&apos;ve picked up the full
              picture — frontend, backend, auth, deployment, and debugging production
              issues when they show up.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Right now I&apos;m focused on React and modern frontend development,
              while keeping my backend and mobile skills sharp. I&apos;m looking for
              opportunities to build, learn, and contribute to products people use.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-zinc-900 dark:text-white">Location</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{profile.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900 dark:text-white">Focus</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">React, Web &amp; Mobile</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900 dark:text-white">Availability</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">Open to opportunities</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900 dark:text-white">Email</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{profile.email}</dd>
              </div>
            </dl>
          </Reveal>

          <div className="space-y-4 lg:col-span-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
