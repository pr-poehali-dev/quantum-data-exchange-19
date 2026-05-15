import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 text-primary-foreground" style={{ background: "#0A2B4E" }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-8" style={{ color: "#E67E22" }}>Контакты</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
            Свяжитесь с нами
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Напишите или позвоните — рассчитаем стоимость работ бесплатно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="mailto:roadstr72@yandex.ru"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 group"
              style={{ background: "#E67E22", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d35400")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E67E22")}
            >
              Написать на почту
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+73452688060"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white hover:bg-white/10 transition-colors duration-300"
            >
              +7(3452) 688-060
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#E67E22" }}>
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-semibold">Адрес</h4>
            <p className="text-white/60 text-sm leading-relaxed">г. Тюмень, ул. Барнаульская, 60</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#E67E22" }}>
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-semibold">Телефоны</h4>
            <div className="text-sm text-white/60 space-y-1">
              <p>Отдел кадров:</p>
              <a href="tel:+73452688060" className="text-white hover:text-orange-300 transition-colors block">+7(3452) 688-060</a>
              <p className="pt-2">Гл. бухгалтер:</p>
              <a href="tel:+79829262309" className="text-white hover:text-orange-300 transition-colors block">+7 (982) 926-23-09</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#E67E22" }}>
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-semibold">Email</h4>
            <a href="mailto:roadstr72@yandex.ru" className="text-white/60 hover:text-white transition-colors text-sm">
              roadstr72@yandex.ru
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#E67E22" }}>
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-semibold">Время работы</h4>
            <div className="text-sm text-white/60 space-y-1">
              <p>ПН–ПТ: 08:00–17:00</p>
              <p>Обед: 12:00–13:00</p>
              <p>СБ–ВС: выходной</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ height: "320px" }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?text=%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%2C+%D1%83%D0%BB.+%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%2C+60&z=16&l=map"
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen
            title="Карта ППФ Дорстрой"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
