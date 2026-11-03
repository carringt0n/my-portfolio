import { GithubIcon, LinkedinIcon, XIcon } from './icons'
import { navLinks, profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
            <LinkedinIcon size={18} />
          </a>
          <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-zinc-500 transition-colors hover:text-emerald-500 dark:text-zinc-400">
            <XIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
