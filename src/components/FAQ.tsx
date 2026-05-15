import { useState } from "react"

const vacancies = [
  {
    title: "Водитель самосвала",
    description: "Перевозка строительных материалов, грунта и щебня. Требуется опыт работы на самосвале от 2 лет, категория С/Е.",
  },
  {
    title: "Дорожный мастер",
    description: "Контроль качества дорожно-строительных работ, организация работы бригады. Профильное образование обязательно.",
  },
  {
    title: "Диспетчер транспортного отдела",
    description: "Организация и координация транспортных перевозок, работа с путевыми листами, взаимодействие с водителями.",
  },
  {
    title: "Инженер ПТО",
    description: "Подготовка технической документации, контроль выполнения объёмов работ, взаимодействие с заказчиками.",
  },
  {
    title: "Машинист укладчика асфальтобетона",
    description: "Управление асфальтоукладчиком, соблюдение технологии укладки. Требуется удостоверение машиниста.",
  },
]

export function FAQ() {
  const [appliedIndex, setAppliedIndex] = useState<number | null>(null)

  const handleApply = (index: number, title: string) => {
    setAppliedIndex(index)
    setTimeout(() => setAppliedIndex(null), 3000)
  }

  return (
    <section id="vacancies" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Работа у нас</p>
          <h2 className="text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Вакансии
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы ищем профессионалов дорожно-строительной отрасли. Отдел кадров: <a href="tel:+73452688060" className="font-medium hover:underline" style={{ color: "#0A2B4E" }}>+7(3452) 688-060</a>
          </p>
        </div>

        <div className="space-y-4">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{vacancy.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{vacancy.description}</p>
              </div>

              <button
                onClick={() => handleApply(index, vacancy.title)}
                className="flex-shrink-0 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-lg"
                style={
                  appliedIndex === index
                    ? { background: "#27ae60", color: "white" }
                    : { background: "#E67E22", color: "white" }
                }
                onMouseEnter={(e) => {
                  if (appliedIndex !== index) {
                    e.currentTarget.style.background = "#d35400"
                  }
                }}
                onMouseLeave={(e) => {
                  if (appliedIndex !== index) {
                    e.currentTarget.style.background = "#E67E22"
                  }
                }}
              >
                {appliedIndex === index ? "✓ Заявка отправлена" : "Откликнуться"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
