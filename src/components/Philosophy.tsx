import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const pillars = [
  {
    title: "20 лет на рынке",
    description:
      "С 2004 года мы строим и ремонтируем дороги в Тюменской области. За эти годы реализовали сотни объектов — от городских улиц до промышленных территорий.",
  },
  {
    title: "Собственный парк техники",
    description:
      "Наш автопарк включает современные грейдеры, катки, асфальтоукладчики и самосвалы. Мы не зависим от субподрядчиков и контролируем каждый этап работ.",
  },
  {
    title: "Комплексный подход",
    description:
      "Берёмся за весь цикл — от обустройства строительной площадки до укладки финального покрытия и нанесения разметки. Один подрядчик — полная ответственность.",
  },
  {
    title: "Надёжность и сроки",
    description:
      "Среди наших заказчиков — АО ТОДЭП, крупные торговые центры и муниципальные объекты Тюмени. Работаем точно по договору, соблюдаем сроки и гарантии.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О компании</p>
            <h2 className="text-6xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
              Строим дороги
              <br />
              <HighlightedText>с душой</HighlightedText>
            </h2>

            <div className="mt-8 p-6 rounded-xl" style={{ background: "#0A2B4E" }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: "#E67E22" }}>20+</p>
                  <p className="text-white/70 text-sm mt-1">лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: "#E67E22" }}>100+</p>
                  <p className="text-white/70 text-sm mt-1">объектов</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: "#E67E22" }}>6</p>
                  <p className="text-white/70 text-sm mt-1">видов услуг</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" style={{ color: "#E67E22" }}>Тюмень</p>
                  <p className="text-white/70 text-sm mt-1">и регион</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              ППФ «Дорстрой» — тюменская строительная организация, специализирующаяся на строительстве и ремонте дорог, благоустройстве территорий и аренде спецтехники.
            </p>

            {pillars.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-sm font-bold" style={{ color: "#E67E22" }}>0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
