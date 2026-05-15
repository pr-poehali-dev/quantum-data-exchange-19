import { useState, useEffect, MouseEvent } from "react"
import { cn } from "../lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Проекты", href: "#projects" },
    { label: "Вакансии", href: "#vacancies" },
    { label: "Контакты", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        scrolled || mobileMenuOpen
          ? "backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0",
      )}
      style={scrolled || mobileMenuOpen ? { background: "#0A2B4E" } : {}}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
        <a href="/" className="flex items-center gap-2 group" onClick={scrollToTop}>
          <img
            src="https://cdn.poehali.dev/projects/efdd04af-3974-416b-8659-57d3122a3158/bucket/3ffaa924-6355-454b-8e56-1b2a68ef6878.jpg"
            alt="ППФ Дорстрой"
            className="h-10 w-auto object-contain"
            style={{ mixBlendMode: "screen", filter: "brightness(1.15) contrast(1.1) saturate(0.85)" }}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:transition-all after:duration-300 text-white"
                style={{ "--hover-color": "#E67E22" } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E67E22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+73452688060"
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300 text-white border border-white/30 hover:border-orange-400"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E67E22"
            e.currentTarget.style.borderColor = "#E67E22"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent"
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"
          }}
        >
          +7(3452) 688-060
        </a>

        <button
          className="md:hidden z-50 transition-colors duration-300 text-white"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors duration-300 text-white text-3xl font-light block"
                  style={{}}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E67E22")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+73452688060"
            className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 text-white border border-white/30 transition-all duration-300 mb-4"
            onClick={closeMobileMenu}
          >
            +7(3452) 688-060
          </a>
        </div>
      </div>
    </header>
  )
}