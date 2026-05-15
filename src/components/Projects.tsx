import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Комплексная уборка территории",
    address: "ул. М.Горького, д.66",
    client: "ООО Развитие Бизнеса",
    category: "Благоустройство",
  },
  {
    id: 2,
    title: "Обслуживание территории аквапарка «ЛетоЛето»",
    address: "ул. Щербакова, 87 (аквапарк + гостиница)",
    client: "ООО ТК",
    category: "Благоустройство",
  },
  {
    id: 3,
    title: "Уборка прилегающей территории ТРЦ «Гудвин»",
    address: "ул. М.Горького, д.70",
    client: "ООО Развитие Бизнеса",
    category: "Благоустройство",
  },
  {
    id: 4,
    title: "Содержание автомобильных дорог «Лесопарк Затюменский»",
    address: "г. Тюмень",
    client: "АО ТОДЭП",
    category: "Дорожные работы",
  },
  {
    id: 5,
    title: "Уборка территории ТЦ «Галерея Вояж»",
    address: "ул. Герцена, д.94",
    client: "ООО Развитие Бизнеса",
    category: "Благоустройство",
  },
  {
    id: 6,
    title: "Механическая уборка снега со спецтехникой",
    address: "ул. Судоремонтная, 2 корп.1",
    client: "МАУ ДО СШ «ВОДНИК»",
    category: "Зимнее содержание",
  },
  {
    id: 7,
    title: "Устройство асфальтового покрытия и песчаного основания",
    address: "ул. Полевая, д.115Б",
    client: 'ООО "СЗ «ИНКО И К»"',
    category: "Асфальтирование",
  },
  {
    id: 8,
    title: "Демонтаж асфальтобетонного покрытия",
    address: "ул. Бориса Прудаева, д.4, стр.1",
    client: "ООО СЗ Клевер Строй",
    category: "Дорожные работы",
  },
]

const categoryColors: Record<string, string> = {
  "Благоустройство": "#27ae60",
  "Дорожные работы": "#0A2B4E",
  "Зимнее содержание": "#2980b9",
  "Асфальтирование": "#E67E22",
}

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Выполненные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Наши проекты</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Работаем с крупными коммерческими объектами, торговыми центрами и муниципальными заказчиками
          </p>
        </div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-500 ${
                visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-white hover:bg-secondary/30 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white whitespace-nowrap flex-shrink-0"
                    style={{ background: categoryColors[project.category] || "#0A2B4E" }}
                  >
                    {project.category}
                  </span>
                  <span className="text-base font-medium text-foreground truncate">{project.title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-secondary/20 border-t border-border grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Адрес объекта</p>
                    <p className="text-sm font-medium">{project.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Заказчик</p>
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
