import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full border-2 border-primary bg-white shadow-2xl">
            <CardContent className="p-8 space-y-6 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Закрыть"
              >
                <Icon name="X" size={24} />
              </button>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" size={40} className="text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  Специальное предложение!
                </h3>
                
                <p className="text-lg text-muted-foreground">
                  Запишитесь на бесплатную консультацию сегодня и получите <span className="font-bold text-primary">скидку 15%</span> на имплантацию
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="h-12"
                />
                <Button
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  Получить скидку 15%
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <a 
        href="https://wa.me/73822270777" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
        aria-label="Написать в WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 text-white" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Сияние</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            Записаться на консультацию
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Верните уверенность в своей улыбке
              </h1>
              <p className="text-xl text-muted-foreground">
                Современная имплантация зубов в Томске. Пожизненная гарантия на импланты премиум-класса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  +7 (3822) 270-777
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">3500+</div>
                  <div className="text-sm text-muted-foreground mt-1">имплантов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">приживаемость</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/a66c0a90-09bd-422a-9194-963a39ec7fb9.png" 
                alt="Интерьер клиники Сияние Севера"
                className="shadow-xl w-full py-1.5 px-0 mx-0.5 my-[101px] rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-primary via-gray-800 to-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-sm">
              ⚡ ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Акция на имплантацию заканчивается через:
            </h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm lg:text-base font-semibold uppercase">Дней</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm lg:text-base font-semibold uppercase">Часов</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm lg:text-base font-semibold uppercase">Минут</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2 animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm lg:text-base font-semibold uppercase">Секунд</div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xl text-white/90 mb-4">
                Скидка 15% на установку имплантов Nobel Biocare
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 font-bold">
                Успеть записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Современные технологии и опытные специалисты</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Award',
                title: 'Премиум импланты',
                description: 'Работаем с системами Nobel Biocare и Straumann — мировыми лидерами'
              },
              {
                icon: 'Shield',
                title: 'Пожизненная гарантия',
                description: 'Уверенность в качестве на десятилетия вперёд'
              },
              {
                icon: 'Clock',
                title: 'Установка за 1 визит',
                description: 'Экспресс-имплантация с немедленной нагрузкой'
              },
              {
                icon: 'Heart',
                title: 'Без боли',
                description: 'Седация и современная анестезия для вашего комфорта'
              }
            ].map((item, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Врачи клиники</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Команда профессионалов с многолетним опытом</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Саламов Абубакар Якубович',
                role: 'ГЛАВНЫЙ ВРАЧ',
                experience: '15+ лет опыта',
                specialization: 'Имплантология, хирургия'
              },
              {
                name: 'Реутов Евгений Александрович',
                role: 'ВРАЧ СТОМАТОЛОГ-ОРТОПЕД',
                experience: '12+ лет опыта',
                specialization: 'Протезирование, виниры'
              },
              {
                name: 'Магомедов Зураб Залимханович',
                role: 'ВРАЧ СТОМАТОЛОГ-ОРТОПЕД',
                experience: '10+ лет опыта',
                specialization: 'Коронки, мосты'
              },
              {
                name: 'Магомедалиев Гасан Алипович',
                role: 'ВРАЧ СТОМАТОЛОГ-ХИРУРГ',
                experience: '8+ лет опыта',
                specialization: 'Имплантация, удаление'
              }
            ].map((doctor, index) => (
              <Card key={index} className="border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon name="User" size={80} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-primary uppercase tracking-wide">
                      {doctor.role}
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                    <p className="text-sm text-muted-foreground italic">{doctor.specialization}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Записаться на приём
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Как проходит имплантация</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачный процесс от консультации до результата</p>
          
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Консультация и диагностика',
                description: 'Осмотр, 3D-томография, составление плана лечения. Бесплатно.',
                duration: '40 минут'
              },
              {
                step: '02',
                title: 'Установка импланта',
                description: 'Малоинвазивная процедура под анестезией. Используем хирургический шаблон для точности.',
                duration: '1-2 часа'
              },
              {
                step: '03',
                title: 'Приживление',
                description: 'Имплант интегрируется с костью. Вы носите временную коронку.',
                duration: '3-6 месяцев'
              },
              {
                step: '04',
                title: 'Установка коронки',
                description: 'Устанавливаем постоянную коронку из циркония. Результат на всю жизнь.',
                duration: '1 визит'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <span className="text-sm bg-secondary text-foreground px-3 py-1 rounded-full font-semibold">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/3e1f7a50-272c-4a08-bb11-51435213f179.png" 
                alt="Современный стоматологический кабинет клиники Сияние Севера"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Цены на имплантацию</h2>
              <p className="text-lg text-muted-foreground">
                Прозрачное ценообразование без скрытых платежей. Оплата в рассрочку до 12 месяцев.
              </p>
              
              <div className="space-y-4">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Имплант под ключ</h3>
                        <p className="text-muted-foreground">Dentium (Корея)</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">от 3500 в месяц</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Имплант + абатмент + коронка
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Все расходные материалы
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Пожизненная гарантия
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-2 font-bold">
                          АКЦИЯ
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Экспресс-имплантация</h3>
                        <p className="text-muted-foreground">Nobel Biocare (США)</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground line-through">90 000 ₽</div>
                        <div className="text-3xl font-bold text-primary">от 4444 в месяц</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Всё включено + немедленная нагрузка
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Установка за 1 визит
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        Пожизненная гарантия
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="w-full text-lg py-6">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Результаты наших работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реальные примеры успешной имплантации</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/5311ea37-052e-41c4-a69b-ffab89297a9e.jpg" 
                alt="Результат имплантации - до и после"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold">Полная реставрация улыбки</p>
                <p className="text-white/80 text-sm">6 имплантов Nobel Biocare</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/d8f50520-0d73-4c7e-ab95-168faeb6a52c.jpg" 
                alt="Идеальная улыбка после имплантации"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold">Естественный результат</p>
                <p className="text-white/80 text-sm">Имплант + циркониевая коронка</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/2b827fd7-b2be-4be4-b0ed-4c83c5514fff.jpg" 
                alt="Трансформация улыбки"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold">Экспресс-имплантация</p>
                <p className="text-white/80 text-sm">Установка за 1 день</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Отзывы наших пациентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реальные истории изменений</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Елена Смирнова',
                age: '42 года',
                text: 'Боялась имплантации много лет. В Сиянии Севера всё прошло совершенно безболезненно! Теперь улыбаюсь без стеснения.',
                rating: 5
              },
              {
                name: 'Дмитрий Козлов',
                age: '55 лет',
                text: 'Установил 4 импланта. Профессионализм на высшем уровне, результат превзошёл ожидания. Рекомендую!',
                rating: 5
              },
              {
                name: 'Анна Петрова',
                age: '38 лет',
                text: 'Экспресс-имплантация за один день — это реально! Спасибо команде за чуткое отношение и отличный результат.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.age}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">Запишитесь на бесплатную консультацию</h2>
            <p className="text-xl text-white/90">
              Получите персональный план лечения и узнайте точную стоимость
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <Input 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-white h-14"
              />
              <Input 
                type="tel" 
                placeholder="Телефон" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-white h-14"
              />
              <Textarea 
                placeholder="Опишите вашу ситуацию (необязательно)" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white min-h-24"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-white/90 text-lg py-6"
              >
                Записаться на консультацию
              </Button>
            </form>
            
            <p className="text-sm text-white/80">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">Сияние Севера</span>
              </div>
              <p className="text-muted-foreground">
                Современная стоматология в Томске. Имплантация и эстетическая стоматология.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-foreground">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Томск, Белинского 63</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (3822) 270-777</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>Dentalsever2025@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-foreground">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>Пн-Пт: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>Сб: 10:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>Вс: выходной</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Сияние Севера. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;