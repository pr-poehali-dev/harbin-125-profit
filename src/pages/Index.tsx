import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import ContactForm from '@/components/ContactForm';

const ProductCarousel = ({ images, productName }: { images: string[], productName: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img 
                src={src} 
                alt={`${productName} ${index + 1}`}
                className="h-56 w-auto object-contain mx-auto transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
      >
        <Icon name="ChevronLeft" size={20} className="text-secondary" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
      >
        <Icon name="ChevronRight" size={20} className="text-secondary" />
      </button>
    </div>
  );
};

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [showUnderage, setShowUnderage] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    console.log('isAdult state:', isAdult);
  }, [isAdult]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAgeConfirm = (isOver18: boolean) => {
    if (isOver18) {
      setIsAdult(true);
      sessionStorage.setItem('ageConfirmed', 'true');
    } else {
      setShowUnderage(true);
    }
  };

  return (
    <>
      {isAdult === null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
            <h2 className="text-3xl font-heading font-black text-secondary mb-4">
              Вам есть 18 лет?
            </h2>
            <p className="text-gray-600 mb-8">
              Данный сайт содержит информацию об алкогольной продукции
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => handleAgeConfirm(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12"
              >
                Да
              </Button>
              <Button 
                onClick={() => handleAgeConfirm(false)}
                size="lg"
                variant="outline"
                className="px-12"
              >
                Нет
              </Button>
            </div>
          </div>
        </div>
      )}

      {showUnderage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
            <Icon name="ShieldAlert" size={64} className="mx-auto mb-4 text-destructive" />
            <h2 className="text-2xl font-heading font-black text-secondary mb-4">
              Доступ ограничен
            </h2>
            <p className="text-gray-600 mb-6">
              Приходите, когда станете совершеннолетним!
            </p>
          </div>
        </div>
      )}

    <div className={`min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white ${isAdult === null ? 'blur-xl' : ''}`}>

      <header className={`fixed top-0 w-full backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/60' : 'bg-white/95'
      }`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/freepik__-__50598.jpeg" 
              alt="Харбин" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <div className="flex md:hidden">
            <Button onClick={scrollToContact} size="sm" className="bg-primary hover:bg-primary/90 text-white text-xs px-3">
              Связаться
            </Button>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#product-lineup" className="text-sm font-semibold hover:text-primary transition-colors">Продукция</a>
            <a href="#benefits" className="text-sm font-semibold hover:text-primary transition-colors">Преимущества</a>
            <a href="#advantages" className="text-sm font-semibold hover:text-primary transition-colors">Почему мы?</a>
            <Button onClick={scrollToContact} size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden min-h-[450px] sm:min-h-[500px] md:min-h-[800px] flex items-center">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/files/freepik__-__50600.jpeg)',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            filter: 'contrast(1.1) saturate(1.1)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/90 via-30% sm:via-white/80 sm:via-20% to-transparent to-70% sm:to-60%"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-black text-secondary mb-3 sm:mb-4 md:mb-6 leading-tight">
              Харбин: 125 лет истории из Китая
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 font-semibold">
              Когда история встречает холод.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">
              Получить прайс сейчас
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center justify-between bg-secondary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-secondary">1900</span>
              <div className="mx-3 sm:mx-4 md:mx-6 w-16 sm:w-20 md:w-24 h-0.5 bg-primary"></div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-secondary">2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-secondary mb-4 sm:mb-6 px-4">
              История, которая продаёт
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              На строительстве Транс-Манчжурской железной дороги в 1900 году русские инженеры привезли в город Харбин не только чертежи и рельсы, но и традиции пивоварения. В условиях сурового манчжурского климата, где зимние температуры опускались до −40°C, они основали первую пивоварню Китая. Чистейшая вода из реки Сунгари и немецкий хмель создали уникальный вкус, который полюбили рабочие со всего мира.
            </p>

            <p>
              Пивоварня пережила революцию 1917 года, японскую оккупацию и Культурную революцию. Каждый новый владелец сохранял оригинальную рецептуру — немецкие дрожжи, чешский хмель и кристально чистая вода Сунгари. К 1950-м годам Харбин стал символом качества в Северном Китае, а его зелёная бутылка — знаком настоящего лагера.
            </p>

            <p>
              В 2004 году AB InBev — крупнейший производитель пива в мире — приобрёл бренд, но оставил всё без изменений: рецепт 1900 года, манчжурское производство, зелёная бутылка. Сегодня Харбин экспортируется в 30+ стран, но его вкус остался таким же, каким был 125 лет назад — свежим, чистым, северным.
            </p>

            <p className="text-lg sm:text-xl font-semibold text-secondary border-l-4 border-primary pl-4 sm:pl-6 italic">
              Харбин — это не просто пиво. Это история выживания, традиций и холода Манчжурии в каждой бутылке.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-secondary mb-3 sm:mb-4 px-4">
              Вкус холода Манчжурии
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">Профиль и сочетаемость премиального лагера</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-secondary mb-3 sm:mb-4">
                  Профиль вкуса
                </h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Аромат:</strong> Свежий хмель, лёгкие цветочные ноты, чистота северной воды</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Вкус:</strong> Сбалансированная горчинка (с крепостью от 3,3% до 5,5%), солодовая сладость, кристальная чистота</span>
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

              <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
                <p className="text-sm sm:text-base text-secondary font-semibold italic">
                  "Харбин — это баланс немецкой школы пивоварения и китайской лёгкости. Идеален для жаркого климата и долгих застолий."
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">— Master Brewer, AB InBev China</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 sm:mb-3 px-2">Почему клиенты выбирают Харбин снова?</h3>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
              Лёгкость + история + узнаваемость = повторные продажи. Харбин не просто утоляет жажду — он рассказывает историю Манчжурии в каждом глотке.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <img 
            src="https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/4a921aa1-3e68-40e8-bba7-2b2cdda439c1.jpeg" 
            alt="Harbin Super - Аромат, История, Вкус, Опыт, Финиш" 
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-contain"
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16">
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
                id: 'super',
                name: 'Harbin Super',
                abv: '3.6%',
                tagline: 'Ультралёгкое',
                rating: 4,
                description: 'Самое лёгкое пиво в линейке с минимальной калорийностью. Идеально для длительных посиделок без тяжести.',
                notes: ['Лёгкость', 'Зерновые', 'Минимальная горечь', 'Освежение'],
                bestFor: { icon: '🎉', text: 'Долгие встречи, спорт-бары' },
                colors: { cap: '#B8860B', body: '#1A237E', accent: '#FFD700' },
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
                id: 'wheat',
                name: 'Harbin Wheat',
                abv: '3.6%',
                tagline: 'Альтернатива',
                rating: 4,
                description: 'Гладкое и фруктовое пиво на основе пшеницы. Уникальный вкусовый профиль для летнего наслаждения.',
                notes: ['Пшеница', 'Банан', 'Цитрус', 'Сливочность'],
                bestFor: { icon: '🌾', text: 'Лето, релаксация' },
                colors: { cap: '#DAA520', body: '#8B6914', accent: '#F0E68C' },
                delay: '0.9s'
              },
              {
                id: 'maidao',
                name: 'Harbin Fresh',
                abv: '4.3%',
                tagline: 'Горная свежесть',
                rating: 5,
                description: 'Пиво премиум-класса с горным характером. Яркий дизайн отражает чистоту горных источников и традиционное качество.',
                notes: ['Горная вода', 'Ячмень', 'Свежесть', 'Сбалансированность'],
                bestFor: { icon: '⛰️', text: 'Природа, отдых с друзьями' },
                colors: { cap: '#2E7D32', body: '#1B5E20', accent: '#81C784' },
                delay: '1.1s'
              }
            ].map((product, i) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-3 border-2 border-gray-100 hover:border-primary/30 flex flex-col"
                style={{ animationDelay: product.delay }}
              >
                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wide">{product.tagline}</span>
                    <span className="text-xs sm:text-sm text-gray-600">• {product.abv}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-secondary mb-4 sm:mb-6 min-h-[3rem] sm:h-14 flex items-center justify-center">{product.name}</h3>
                </div>

                <div className="mb-4 sm:mb-6 relative h-48 sm:h-56 md:h-64 flex items-center justify-center flex-shrink-0 bg-white rounded-xl p-3 sm:p-4 overflow-hidden">
                  {product.id === 'premium' ? (
                    <ProductCarousel 
                      images={[
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/36a0ed88-045e-4898-bd39-2ee45e2342d1.png",
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/9c7a5ed7-3797-48b2-a28d-b55656dbc096.jpg",
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/bf115b9c-1fb7-461f-8249-3ce142ceb927.jpeg"
                      ]}
                      productName="Harbin Premium"
                    />
                  ) : product.id === 'ice' ? (
                    <ProductCarousel 
                      images={[
                        "https://cdn.poehali.dev/files/freepik__-__50591.jpeg",
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/29af132e-4635-410d-9ea9-4db22b18621b.png"
                      ]}
                      productName="Harbin Ice"
                    />
                  ) : product.id === 'wheat' ? (
                    <ProductCarousel 
                      images={[
                        "https://cdn.poehali.dev/files/freepik__-__50593.jpeg",
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/f0d942dd-79d5-4912-b3cb-c6106f2f7f83.jpeg"
                      ]}
                      productName="Harbin Wheat"
                    />
                  ) : product.id === '1900' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/freepik__-__50594.jpeg" 
                      alt="Harbin 1900 bottle"
                      className="h-56 w-auto object-contain transition-transform duration-300"
                    />
                  ) : product.id === 'super' ? (
                    <ProductCarousel 
                      images={[
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/aa239956-9dd9-4f9d-bb6d-92e430cb5c2c.jpeg",
                        "https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/601c3321-dcdf-4d7b-ac56-da163f3756f1.jpeg"
                      ]}
                      productName="Harbin Super"
                    />
                  ) : product.id === 'maidao' ? (
                    <img 
                      src="https://cdn.poehali.dev/projects/b4eb96e9-d078-4786-b72b-a3f882f96883/bucket/8eeac3b5-1d2d-463e-ae1c-5b94ad2cf982.jpeg" 
                      alt="Harbin Fresh can"
                      className="h-56 w-auto object-contain transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative w-20 h-40 transition-transform duration-300">
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

                <div className="flex-grow">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{product.description}</p>

                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-bold text-secondary mb-2 sm:mb-3">Профиль вкуса</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {product.notes.map((note, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 sm:px-3 py-1 rounded-full border border-primary/20 text-gray-700">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 p-2 sm:p-3 bg-primary/5 rounded-lg">
                    <span className="text-xl sm:text-2xl">{product.bestFor.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{product.bestFor.text}</span>
                  </div>
                </div>

                <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg mt-auto text-sm sm:text-base py-2 sm:py-3">
                  Узнать больше
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4 px-2">Готов открыть своё Harbin?</h3>
            <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Присоединяйся к команде профессионалов
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-secondary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl w-full sm:w-auto"
            >
              Связаться
              <Icon name="Mail" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-12 sm:py-14 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-center mb-3 sm:mb-4 text-secondary px-4">
            Вот почему дилеры выбирают Харбин
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg px-4">Два железных преимущества</p>
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
                points: ["✓ AB InBev — владелец", "✓ Немецкие дрожжи и хмель", "✓ Сертификация China Famous", "✓ Продукция защищена системой маркировки Честный знак"],
                footer: "125 лет опыта"
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { name: "Нам доверяют", quote: "Более 15 лет импортируем пиво из Китая.", icon: "Award" },
              { name: "Доставка", quote: "Отправка по всей России", icon: "Truck" },
              { name: "Цены", quote: "Лучшая цена на импортное пиво", icon: "DollarSign" }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-primary/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Icon name={testimonial.icon as any} size={56} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading text-center drop-shadow-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-white text-lg font-semibold mt-3 text-center leading-relaxed">{testimonial.quote}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-primary/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-4">
                <Icon name="TrendingUp" size={56} className="text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading text-center mb-4 drop-shadow-lg">Объем поставок</CardTitle>
              <CardDescription className="text-white text-lg font-semibold text-center leading-relaxed whitespace-pre-line">
                В 2025 году мы продали 27,6 млн бутылок «Харбина». Этой цепочкой можно дважды соединить Москву и Владивосток. Этого объема хватило бы, чтобы каждый болельщик на «Лужниках» выпил по 340 банок. Мы обеспечили годовую норму пива для населения целого города-миллионника.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-secondary to-secondary/80 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-4 sm:mb-6 px-4">
            Стань партнёром в своем регионе
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 px-4">
            Получите прайс и условия за 10 минут. Без обязательств.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-4">
            {[
              "✅ Прайс за 10 мин",
              "✅ Без обязательств",
              "✅ На русском",
              "✅ Документы готовы"
            ].map((trust, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base">
                {trust}
              </div>
            ))}
          </div>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-2xl w-full sm:w-auto"
            onClick={() => setShowContactForm(true)}
          >
            Получить прайс и условия
            <Icon name="Mail" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/freepik__-__50598.jpeg" 
                alt="Харбин" 
                className="h-20 w-auto mb-4"
              />
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
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">690080, г. Владивосток, ул. Фадеева 49 лит 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">18+</span>
            </div>
            <p className="text-sm">Минздрав предупреждает: чрезмерное употребление алкоголя вредит вашему здоровью.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}