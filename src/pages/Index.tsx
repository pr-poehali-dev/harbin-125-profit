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
            <span className="font-heading">Харбин</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#benefits" className="text-sm font-semibold hover:text-primary transition-colors">Преимущества</a>
            <a href="#advantages" className="text-sm font-semibold hover:text-primary transition-colors">Почему мы?</a>
            <Button onClick={scrollToContact} size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 px-4 relative overflow-hidden min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/files/freepik__-__99100.jpeg)',
            backgroundSize: '100%',
            backgroundPosition: '60% center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-transparent"></div>
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
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <img 
            src="https://cdn.poehali.dev/files/freepik__imagine-prompt-luxury-3d-product-visualization-har__56486.jpeg" 
            alt="Харбин: Аромат, История, Вкус, Финиш, Опыт" 
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section id="product-lineup" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-secondary mb-4">
              Семейство Harbin
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Каждое пиво Harbin создано для разных моментов, настроений и вкусов.
            </p>
            <p className="text-lg font-semibold text-primary">Выбери своё Harbin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              {
                id: 'premium',
                name: 'Harbin Premium',
                abv: '5%',
                tagline: 'Флагман',
                rating: 5,
                description: 'Многослойный вкус с цветочными нотками и глубокой палитрой. Классическое пиво премиум-класса для ценителей.',
                notes: ['Солод', 'Цветы', 'Медь', 'Лёгкая карамель'],
                bestFor: { icon: '🍽️', text: 'Гастрономия, деловой ужин' },
                colors: { cap: '#FFB800', body: '#2C5F8D', accent: '#FFD700' },
                delay: '0.1s'
              },
              {
                id: 'ice',
                name: 'Harbin Ice',
                abv: '3.6%',
                tagline: 'Освежение',
                rating: 4,
                description: 'Лёгкое и хрустящее пиво с чистым завершением. Идеально для жарких дней и повседневного наслаждения.',
                notes: ['Чистота', 'Свежесть', 'Лёгкие зерновые', 'Сухой финиш'],
                bestFor: { icon: '☀️', text: 'Жаркие дни, повседневно' },
                colors: { cap: '#00BFFF', body: '#1E3A5F', accent: '#87CEEB' },
                delay: '0.3s'
              },
              {
                id: 'wheat',
                name: 'Harbin Wheat',
                abv: '3.6%',
                tagline: 'Альтернатива',
                rating: 4,
                description: 'Гладкое и фруктовое пиво на основе пшеницы. Уникальный вкусовый профиль для летнего наслаждения.',
                notes: ['Пшеница', 'Банан', 'Цитрус', 'Сливочность'],
                bestFor: { icon: '🌾', text: 'Лето, релаксация' },
                colors: { cap: '#DAA520', body: '#8B6914', accent: '#F0E68C' },
                delay: '0.5s'
              },
              {
                id: '1900',
                name: 'Harbin 1900',
                abv: '5.2%',
                tagline: 'Наследие',
                rating: 5,
                description: 'Коллекционное пиво по оригинальному рецепту 1900 года. Глубокий вкус с историей, созданный для истинных ценителей.',
                notes: ['Карамель', 'Поджаренный солод', 'Орех', 'Винтаж'],
                bestFor: { icon: '🏛️', text: 'Особые случаи, коллекционеры' },
                colors: { cap: '#8B4513', body: '#3E2723', accent: '#D4A574' },
                delay: '0.7s'
              },
              {
                id: 'super',
                name: 'Harbin Super',
                abv: '3.6%',
                tagline: 'Ультралёгкое',
                rating: 4,
                description: 'Самое лёгкое пиво в линейке с минимальной калорийностью. Идеально для длительных посиделок без тяжести.',
                notes: ['Лёгкость', 'Зерновые', 'Минимальная горечь', 'Освежение'],
                bestFor: { icon: '🎉', text: 'Долгие встречи, спорт-бары' },
                colors: { cap: '#B8860B', body: '#1A237E', accent: '#FFD700' },
                delay: '0.9s'
              }
            ].map((product, i) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-primary/30"
                style={{ animationDelay: product.delay }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
                    <span className="text-sm font-bold text-primary uppercase tracking-wide">{product.tagline}</span>
                    <span className="text-sm text-gray-600">• {product.abv}</span>
                  </div>
                  <h3 className="text-3xl font-heading font-black text-secondary mb-6">{product.name}</h3>
                </div>

                <div className="mb-6 relative h-64 flex items-center justify-center">
                  {product.id === 'premium' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50590.jpeg" 
                      alt="Harbin Premium bottle"
                      className="h-56 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.id === 'ice' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50591.jpeg" 
                      alt="Harbin Ice bottle"
                      className="h-56 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.id === 'wheat' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50593.jpeg" 
                      alt="Harbin Wheat bottle"
                      className="h-56 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.id === '1900' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50594.jpeg" 
                      alt="Harbin 1900 bottle"
                      className="h-56 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.id === 'super' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50595.jpeg" 
                      alt="Harbin Super bottle"
                      className="h-56 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative w-20 h-40 group-hover:scale-110 transition-transform duration-300">
                      <div 
                        className="absolute inset-0 rounded-lg shadow-xl"
                        style={{ backgroundColor: product.colors.body }}
                      ></div>
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full -mt-2"
                        style={{ backgroundColor: product.colors.cap }}
                      ></div>
                      <div 
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-20 rounded opacity-80"
                        style={{ backgroundColor: product.colors.accent }}
                      ></div>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-bold text-secondary mb-3">Профиль вкуса</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note, idx) => (
                      <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full border border-primary/20 text-gray-700">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 p-3 bg-primary/5 rounded-lg">
                  <span className="text-2xl">{product.bestFor.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{product.bestFor.text}</span>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                  Узнать больше
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-heading font-bold mb-4">Готов открыть своё Harbin?</h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Найди ближайший магазин или закажи онлайн с доставкой прямо в твой дом.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-6 shadow-xl"
            >
              Найти в магазинах
              <Icon name="MapPin" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4 text-secondary">
            Вот почему дилеры выбирают Харбин
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Два железных преимущества</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "📚",
                title: "История работает",
                points: ["✓ Первая пивоварня в Китае (1900)", "✓ Выжила революции", "✓ Клиенты видят качество", "✓ Нет нужды в рекламе"],
                footer: "Люди платят за подлинность"
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

      <section id="advantages" className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-4">
            Преимущества работы с нами
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">Почему выбирают ООО "ВостокЭко"</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Нам доверяют", quote: "Более 15 лет импортируем пиво из Китая.", icon: "Award" },
              { name: "Объем поставок", quote: "за 2025 год - более 2 млн литров пива", icon: "TrendingUp" },
              { name: "Доставка", quote: "Отправка по всей России", icon: "Truck" },
              { name: "Цены", quote: "Лучшая цена на импортное пиво", icon: "DollarSign" }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-primary/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Icon name={testimonial.icon as any} size={56} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-center">{testimonial.name}</CardTitle>
                  <CardDescription className="text-white text-lg font-semibold mt-3 text-center leading-relaxed">{testimonial.quote}</CardDescription>
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
                  <span>+7 (999) 0-586-630</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>dvbalt-keg@mail.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <span>@Natalia_ms</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>690080, г. Владивосток, ул. Фадеева 49 лит 1</span>
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