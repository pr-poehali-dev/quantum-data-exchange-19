import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const accumulatedScrollRef = useRef(0)
  const touchStartY = useRef<number>(0)
  const lastTouchY = useRef<number>(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress >= 1) {
          setAnimationComplete(true)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress < 1) {
          setAnimationComplete(false)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      lastTouchY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = e.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress >= 1) {
          setAnimationComplete(true)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress < 1) {
          setAnimationComplete(false)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }

      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое фото */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/efdd04af-3974-416b-8659-57d3122a3158/files/c20da800-0bed-4f64-8900-c456fe8c0257.jpg"
          alt="Дорожно-строительные работы"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Тёмный оверлей для читаемости текста */}
      <div
        className="absolute inset-0 z-1"
        style={{ background: "linear-gradient(to bottom, rgba(5,20,40,0.78) 0%, rgba(5,20,40,0.65) 60%, rgba(5,20,40,0.85) 100%)" }}
      />

      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0"
        style={{
          willChange: "transform",
          transform: "translateY(0px)",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="mb-72 md:mb-60 lg:mb-80">
          {/* Логотип */}
          <div className="flex justify-center mb-4">
            <img
              src="https://cdn.poehali.dev/projects/efdd04af-3974-416b-8659-57d3122a3158/bucket/3ffaa924-6355-454b-8e56-1b2a68ef6878.jpg"
              alt="ППФ Дорстрой"
              className="h-28 md:h-36 w-auto object-contain"
              style={{
                filter: "brightness(1.1) contrast(1.1) saturate(0.85)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          <p className="text-xs tracking-[0.4em] uppercase text-center mb-5 font-semibold" style={{ color: "#E67E22" }}>
            Строительство и ремонт дорог · г. Тюмень
          </p>

          <h1
            ref={titleRef}
            className="text-balance text-center text-white mb-5 tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Строим дороги,
            <br />
            <span style={{ color: "#E67E22" }}>которым доверяют</span>
          </h1>

          <p className="text-center text-white mb-4 max-w-xl mx-auto font-medium" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.6, textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
            Благоустройство территорий · Укладка полотна · Спецтехника
          </p>

          <p className="text-center font-bold mb-10" style={{ color: "#E67E22", fontSize: "0.82rem", letterSpacing: "0.2em" }}>
            БОЛЕЕ 20 ЛЕТ НА РЫНКЕ
          </p>

          <div className="flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              style={{ background: "#E67E22", color: "#fff", fontSize: "0.95rem" }}
            >
              Узнать цены
            </a>
          </div>
        </div>
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ArrowDown className="w-5 h-5 text-white/60" />
        </div>
      )}
    </section>
  )
}