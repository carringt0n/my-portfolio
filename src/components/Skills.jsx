import { useEffect, useRef, useState } from 'react'
import { skillGroups } from '../data'
import Reveal from './Reveal'

/** A single skill row: name, percentage, and a bar that fills on scroll into view. */
function SkillBar({ name, pct, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{name}</span>
        <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${pct}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Technical <span className="text-emerald-500">Skills</span>
              </h2>
              <span className="mt-3 block h-1 w-12 rounded-full bg-emerald-500" aria-hidden="true" />
              <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
                Technologies and tools I use to bring ideas to life.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-400/50">
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  {group.title}
                </h3>
                <div className="mt-6 space-y-5">
                  {group.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      pct={skill.pct}
                      delay={index * 120}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
