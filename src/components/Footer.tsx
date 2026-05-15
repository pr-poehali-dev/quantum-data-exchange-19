export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold" style={{ color: "#0A2B4E" }}>
                ППФ <span style={{ color: "#E67E22" }}>«Дорстрой»</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Строительство и ремонт дорог, благоустройство территорий в Тюмени и Тюменской области. Работаем с 2004 года.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Услуги</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Проекты</a></li>
              <li><a href="#vacancies" className="hover:text-foreground transition-colors">Вакансии</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:roadstr72@yandex.ru" className="hover:text-foreground transition-colors">
                  roadstr72@yandex.ru
                </a>
              </li>
              <li>
                <a href="tel:+73452688060" className="hover:text-foreground transition-colors">
                  +7(3452) 688-060
                </a>
              </li>
              <li>
                <a href="tel:+79829262309" className="hover:text-foreground transition-colors">
                  +7(982) 926-23-09
                </a>
              </li>
              <li className="text-xs">г. Тюмень, ул. Барнаульская, 60</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© ППФ «Дорстрой», 2026. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Работы</a>
            <a href="#vacancies" className="hover:text-foreground transition-colors">Вакансии</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
