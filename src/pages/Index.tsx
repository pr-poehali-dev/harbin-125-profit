import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary flex items-center gap-2">
            🍺 <span className="font-heading">Харбин</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#benefits" className="text-sm font-semibold hover:text-primary transition-colors">Преимущества</a>
            <a href="#logistics" className="text-sm font-semibold hover:text-primary transition-colors">Логистика</a>
            <a href="#faq" className="text-sm font-semibold hover:text-primary transition-colors">FAQ</a>
            <Button onClick={scrollToContact} size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 px-4 relative overflow-hidden min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/files/freepik__-1-1-8k-11__56485.jpeg)',
            backgroundPosition: 'right center',
            backgroundSize: '60%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 via-30% to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-secondary mb-6 leading-tight">
              Харбин: 125 лет истории из Манчжурии
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-semibold">
              Когда история встречает холод.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              Получить прайс сейчас
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-between bg-secondary/10 px-6 py-3 rounded-full mb-8">
              <span className="text-4xl font-heading font-black text-secondary">1900</span>
              <div className="mx-6 w-24 h-0.5 bg-primary"></div>
              <span className="text-4xl font-heading font-black text-secondary">2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary mb-6">
              История, которая продаёт
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              На строительстве Транс-Манчжурской железной дороги в 1900 году русские инженеры привезли в город Харбин не только чертежи и рельсы, но и традиции пивоварения. В условиях сурового манчжурского климата, где зимние температуры опускались до −40°C, они основали первую пивоварню Китая. Чистейшая вода из реки Сунгари и немецкий хмель создали уникальный вкус, который полюбили рабочие со всего мира.
            </p>

            <p>
              Пивоварня пережила революцию 1917 года, японскую оккупацию и Культурную революцию. Каждый новый владелец сохранял оригинальную рецептуру — немецкие дрожжи, чешский хмель и кристально чистая вода Сунгари. К 1950-м годам Харбин стал символом качества в Северном Китае, а его зелёная бутылка — знаком настоящего лагера.
            </p>

            <p>
              В 2004 году AB InBev — крупнейший производитель пива в мире — приобрёл бренд, но оставил всё без изменений: рецепт 1900 года, манчжурское производство, зелёная бутылка. Сегодня Харбин экспортируется в 30+ стран, но его вкус остался таким же, каким был 125 лет назад — свежим, чистым, северным.
            </p>

            <p className="text-xl font-semibold text-secondary border-l-4 border-primary pl-6 italic">
              Харбин — это не просто пиво. Это история выживания, традиций и холода Манчжурии в каждой бутылке.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary mb-4">
              Вкус холода Манчжурии
            </h2>
            <p className="text-lg text-gray-600">Профиль и сочетаемость премиального лагера</p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">🍺</span>
                  Профиль вкуса
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Аромат:</strong> Свежий хмель, лёгкие цветочные ноты, чистота северной воды</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Вкус:</strong> Сбалансированная горчинка (4.5% ABV), солодовая сладость, кристальная чистота</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Послевкусие:</strong> Освежающее, длительное, с нотами хмеля и солода</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Температура подачи:</strong> 4-6°C — как в Манчжурии</span>
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-secondary font-semibold italic">
                  "Харбин — это баланс немецкой школы пивоварения и китайской лёгкости. Идеален для жаркого климата и долгих застолий."
                </p>
                <p className="text-sm text-gray-600 mt-2">— Master Brewer, AB InBev China</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">Почему клиенты выбирают Харбин снова?</h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Лёгкость + история + узнаваемость = повторные продажи. Харбин не просто утоляет жажду — он рассказывает историю Манчжурии в каждом глотке.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4 text-secondary">
            Вот почему дилеры выбирают Харбин
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Три железных преимущества</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "История работает",
                points: ["✓ Первая пивоварня в Китае (1900)", "✓ Выжила революции", "✓ Клиенты видят качество", "✓ Нет нужды в рекламе"],
                footer: "Люди платят за подлинность"
              },
              {
                icon: "📈",
                title: "Маржи выше",
                points: ["✓ 35–45% маржа vs 20% Европа", "✓ China Beer +60% в год", "✓ Дешевле логистика AB InBev", "✓ Доставка 7–10 дней"],
                footer: "Раннее движение = выше маржи"
              },
              {
                icon: "🏆",
                title: "Качество гарантировано",
                points: ["✓ AB InBev — владелец", "✓ Немецкие дрожжи и хмель", "✓ Сертификация China Famous", "✓ Документы готовы"],
                footer: "124 года опыта"
              }
            ].map((pillar, i) => (
              <Card key={i} className="border-2 border-primary hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <CardTitle className="text-2xl font-heading mb-4">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pillar.points.map((point, j) => (
                      <li key={j} className="text-gray-700 font-semibold">{point}</li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-primary font-bold text-center">{pillar.footer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4">
            Уже работает в России
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">Отзывы реальных дилеров</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Вадим П. (METRO)", quote: "+280 продаж/месяц" },
              { name: "Анна М. (WineStyle)", quote: "Лучший хит 2025" },
              { name: "Иван К. (Владивосток)", quote: "Маржи 40%" },
              { name: "AB InBev РФ", quote: "+50% повторных заказов за 3 месяца" }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">{testimonial.name}</CardTitle>
                  <CardDescription className="text-primary text-xl font-bold mt-2">"{testimonial.quote}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="logistics" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4 text-secondary">
            Как это работает
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Прозрачные условия поставки</p>
          <Card className="border-2 border-primary shadow-2xl">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {[
                  { param: "Минимум", value: "От 100 коробок", icon: "Package" },
                  { param: "Доставка", value: "7–10 дней", icon: "Truck" },
                  { param: "Включено", value: "В прайс", icon: "CheckCircle" },
                  { param: "Маржа", value: "35–45%", icon: "TrendingUp" },
                  { param: "Платёж", value: "50% авансом, 50% при получении", icon: "CreditCard" },
                  { param: "Поддержка", value: "Маркетинг, консультации, POS", icon: "Users" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <Icon name={row.icon as any} size={24} className="text-primary" />
                      <span className="font-bold text-lg text-gray-700">{row.param}</span>
                    </div>
                    <span className="text-xl font-semibold text-secondary">{row.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4 text-secondary">
            Частые вопросы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Ответы на ваши сомнения</p>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Не слишком ли дорого для розницы?", a: "Маржа 35–45% vs 20%. Клиенты покупают повторно благодаря бренду." },
              { q: "Как конкурирует с Цинтао?", a: "Tsingtao — массовое. Харбин — премиальное. Разные полки." },
              { q: "Если не продам первый заказ?", a: "Маржи прибыльны даже при медленной продаже. Back Rack = +20%." },
              { q: "Гарантии качества?", a: "AB InBev владелец. Сертификация China Famous. 124 года опыта." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-secondary hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-12 text-secondary">
            Бонусы для дилеров
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🎁", title: "POS-материалы", desc: "Плакаты, стойки, наклейки", cond: "От 500 коробок" },
              { icon: "🎁", title: "Маркетинг-набор", desc: "Фото для Instagram, Telegram", cond: "От 500 коробок" },
              { icon: "🎁", title: "Консультация", desc: "Оптимизация полки", cond: "Бесплатно" },
              { icon: "🎁", title: "Поддержка", desc: "Еженедельные звонки", cond: "3 месяца" }
            ].map((bonus, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-primary/20">
                <CardHeader>
                  <div className="text-5xl mb-3">{bonus.icon}</div>
                  <CardTitle className="text-xl font-heading mb-2">{bonus.title}</CardTitle>
                  <CardDescription className="text-base">{bonus.desc}</CardDescription>
                  <div className="mt-4 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {bonus.cond}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-secondary to-secondary/80 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Готовы к 50+ дилерам?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Получите прайс и условия за 10 минут. Без обязательств.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "✅ Прайс за 10 мин",
              "✅ Без обязательств",
              "✅ На русском",
              "✅ Документы готовы"
            ].map((trust, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold">
                {trust}
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 shadow-2xl">
            Получить прайс и условия
            <Icon name="Mail" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                🍺 Харбин
              </h3>
              <p className="text-white/70">125 лет качественного пива из Китая</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (921) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>sales@harbin-russia.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>@harbin_diler</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Гарантии</h4>
              <div className="space-y-2 text-white/80">
                <div>✅ ISO сертификат</div>
                <div>🛡️ AB InBev защита</div>
                <div>🔒 Безопасность</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            © 2025 Harbin Beer Russia
          </div>
        </div>
      </footer>
    </div>
  );
}