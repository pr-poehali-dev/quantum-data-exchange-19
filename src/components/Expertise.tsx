import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Благоустройство территории",
    description: "Комплексное благоустройство прилегающих территорий: уборка, озеленение, устройство площадок и дорожек.",
    icon: "Trees",
  },
  {
    title: "Укладка полотна",
    description: "Профессиональная укладка асфальтобетонного покрытия с соблюдением всех технологических требований и нормативов.",
    icon: "Layers",
  },
  {
    title: "Обустройство стройплощадки",
    description: "Подготовка и обустройство строительных площадок: ограждение, разравнивание, устройство временных дорог.",
    icon: "HardHat",
  },
  {
    title: "Знаки и разметки",
    description: "Нанесение дорожной разметки, установка дорожных знаков и элементов обустройства дороги по ГОСТ.",
    icon: "TriangleAlert",
  },
  {
    title: "Аренда спецтехники",
    description: "Аренда грейдеров, катков, асфальтоукладчиков и другой дорожно-строительной техники с экипажем.",
    icon: "Truck",
  },
  {
    title: "Перевозка материалов",
    description: "Транспортные услуги по перевозке строительных материалов, грунта, щебня и асфальтобетонной смеси.",
    icon: "Container",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, проверенные
            <br />
            практикой
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Выполняем полный цикл дорожно-строительных работ — от подготовки основания до финальной разметки и благоустройства.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`relative pl-8 border-l-2 transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderLeftColor: "#E67E22",
              }}
            >
              <div className="mb-4">
                <Icon name={service.icon} size={36} fallback="Wrench" style={{ color: "#0A2B4E" }} strokeWidth={1.25} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
