import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <a 
        href="https://wa.me/73822270777" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-110 hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] transition-all duration-300 animate-pulse group"
        aria-label="Написать в WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">Сияние Севера</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            Записаться на консультацию
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.15),rgba(202,138,4,0.1))] animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Верните уверенность в своей улыбке
              </h1>
              <p className="text-xl text-muted-foreground">
                Современная имплантация зубов в Томске. Пожизненная гарантия на импланты премиум-класса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-yellow-500 to-amber-600 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:scale-105 transition-all duration-300 font-bold">
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300">+7 (3822) 270-777</Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-4xl font-bold text-primary">3500+</div>
                  <div className="text-sm text-muted-foreground">установленных имплантов</div>
                </div>
                <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">успешной приживаемости</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-yellow-500/30 to-amber-600/30 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/f66a2323-90b5-45e4-ac04-fd3c8fcfd7cf.jpg" 
                alt="Стоматологическая клиника"
                className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Современные технологии и опытные специалисты</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Award',
                title: 'Премиум импланты',
                description: 'Работаем с системами Nobel Biocare и Straumann — мировыми лидерами',
                gradient: 'from-amber-500 to-yellow-600'
              },
              {
                icon: 'Shield',
                title: 'Пожизненная гарантия',
                description: 'Уверенность в качестве на десятилетия вперёд',
                gradient: 'from-yellow-600 to-amber-700'
              },
              {
                icon: 'Clock',
                title: 'Установка за 1 визит',
                description: 'Экспресс-имплантация с немедленной нагрузкой',
                gradient: 'from-amber-700 to-yellow-500'
              },
              {
                icon: 'Heart',
                title: 'Без боли',
                description: 'Седация и современная анестезия для вашего комфорта',
                gradient: 'from-yellow-500 to-amber-500'
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-primary/20 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:-translate-y-2 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">Как проходит имплантация</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачный процесс от консультации до результата</p>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
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
                <div key={index} className="flex gap-8 items-start animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-full items-center justify-center text-background font-bold text-lg flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <Card className="flex-1 bg-card hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
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
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/51fc3802-59cb-42bc-a4be-44425dcd8696.jpg" 
                alt="Dental implant"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Цены на имплантацию</h2>
              <p className="text-lg text-muted-foreground">
                Прозрачное ценообразование без скрытых платежей. Оплата в рассрочку до 12 месяцев.
              </p>
              
              <div className="space-y-4">
                <Card className="border-2 border-primary/20 bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Имплант под ключ</h3>
                        <p className="text-muted-foreground">Straumann (Швейцария)</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">65 000 ₽</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Имплант + абатмент + коронка
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Все расходные материалы
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Пожизненная гарантия
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 via-amber-900/10 to-primary/5 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary to-amber-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-primary to-amber-600 text-background text-xs px-3 py-1 rounded-full mb-2 font-bold animate-pulse shadow-lg">
                          АКЦИЯ
                        </div>
                        <h3 className="text-xl font-bold">Экспресс-имплантация</h3>
                        <p className="text-muted-foreground">Nobel Biocare (США)</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground line-through">90 000 ₽</div>
                        <div className="text-3xl font-bold text-primary">75 000 ₽</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Всё включено + немедленная нагрузка
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Установка за 1 визит
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        Пожизненная гарантия
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-amber-600 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы наших пациентов</h2>
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
              <Card key={index} className="bg-card border-2 border-primary/20 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.age}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/f834bb08-65e9-42f1-b89a-c2d66c739710/files/41e338ea-145d-403f-8554-f29f1baa6e73.jpg" 
              alt="Счастливый пациент"
              className="mx-auto rounded-2xl shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary via-yellow-500 to-amber-600 rounded-3xl p-8 md:p-12 text-background relative overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)] animate-gradient-shift bg-[length:200%_200%]"></div>
            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="text-4xl font-bold">Запишитесь на бесплатную консультацию</h2>
              <p className="text-xl text-background/80">
                Получите персональный план лечения и узнайте точную стоимость
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/20 border-background/30 text-background placeholder:text-background/60 h-14 hover:bg-background/30 transition-all duration-300 focus:scale-105 font-medium"
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="bg-background/20 border-background/30 text-background placeholder:text-background/60 h-14 hover:bg-background/30 transition-all duration-300 focus:scale-105 font-medium"
                />
                <Textarea 
                  placeholder="Опишите вашу ситуацию (необязательно)" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 min-h-24 hover:bg-white/20 transition-all duration-300 focus:scale-105"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-background text-primary hover:bg-background/90 hover:scale-105 text-lg py-6 shadow-2xl transition-all duration-300 font-bold"
                >
                  Записаться на консультацию
                </Button>
              </form>
              
              <p className="text-sm text-background/70">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-background border-t border-primary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={28} className="text-primary" />
                <span className="text-2xl font-bold">Сияние Севера</span>
              </div>
              <p className="text-muted-foreground">
                Современная стоматология в Томске. Имплантация и эстетическая стоматология.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
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
              <h3 className="font-bold mb-4">Часы работы</h3>
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