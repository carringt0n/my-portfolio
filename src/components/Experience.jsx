import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            Experience
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Where I&apos;ve been
          </h2>
        </Reveal>

        <div className="relative mt-10 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-zinc-300 sm:ml-2 dark:before:bg-zinc-700">
          {experience.map((item) => (
            <Reveal key={item.role}>
              <div className="relative pl-10">
                <span className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                    {item.role}
                    {item.placeholder && (
                      <span className="ml-2 rounded-full bg-amber-500/10 px-2.5 py-1 align-middle text-xs font-semibold text-amber-700 dark:text-amber-400">
                        Placeholder
                      </span>
                    )}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {item.company}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
