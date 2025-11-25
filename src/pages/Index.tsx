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
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
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

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),rgba(14,165,233,0.1))] animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Верните уверенность в своей улыбке
              </h1>
              <p className="text-xl text-muted-foreground">
                Современная имплантация зубов в Томске. Пожизненная гарантия на импланты премиум-класса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (3822) 000-000
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">3500+</div>
                  <div className="text-sm text-muted-foreground">установленных имплантов</div>
                </div>
                <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-muted-foreground">успешной приживаемости</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
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
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                icon: 'Shield',
                title: 'Пожизненная гарантия',
                description: 'Уверенность в качестве на десятилетия вперёд',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Clock',
                title: 'Установка за 1 визит',
                description: 'Экспресс-имплантация с немедленной нагрузкой',
                gradient: 'from-cyan-500 to-pink-500'
              },
              {
                icon: 'Heart',
                title: 'Без боли',
                description: 'Седация и современная анестезия для вашего комфорта',
                gradient: 'from-pink-500 to-purple-500'
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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

      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">Как проходит имплантация</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачный процесс от консультации до результата</p>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
            
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
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10 shadow-lg hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <Card className="flex-1 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
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
                <Card className="border-2">
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

                <Card className="border-2 border-primary bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-1 rounded-full mb-2 font-bold animate-pulse shadow-lg">
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

              <Button size="lg" className="w-full text-lg py-6">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
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
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] animate-gradient-shift bg-[length:200%_200%]"></div>
            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="text-4xl font-bold">Запишитесь на бесплатную консультацию</h2>
              <p className="text-xl text-blue-100">
                Получите персональный план лечения и узнайте точную стоимость
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 h-14 hover:bg-white/20 transition-all duration-300 focus:scale-105"
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 h-14 hover:bg-white/20 transition-all duration-300 focus:scale-105"
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
                  className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 text-lg py-6 shadow-2xl transition-all duration-300 font-bold"
                >
                  Записаться на консультацию
                </Button>
              </form>
              
              <p className="text-sm text-blue-100">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-50 border-t">
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
                  <span>г. Томск, пр. Ленина, 123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (3822) 000-000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@siyaniesevera.ru</span>
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