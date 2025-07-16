import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Corporate</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#media" className="text-gray-600 hover:text-primary transition-colors">Медиа</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Связаться с нами</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Инновационные решения для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы создаем технологические решения, которые трансформируют бизнес-процессы и обеспечивают устойчивый рост компании в цифровую эпоху.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Начать проект
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/673d38b2-48ee-4c79-b99d-10c1ca59184c.jpg" 
                alt="Corporate Building" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нашей компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 10 лет мы помогаем компаниям достигать новых высот через внедрение передовых технологий и инновационных подходов.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">Экспертная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Профессионалы с многолетним опытом в области IT и бизнес-консалтинга.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используем самые современные технологии для создания уникальных решений.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гарантируем высокое качество и надежность всех наших решений.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Icon name="Code" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Разработка ПО</h3>
              <p className="text-gray-600">Создание веб-приложений и мобильных решений</p>
            </div>
            <div className="text-center p-6">
              <Icon name="BarChart3" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Аналитика</h3>
              <p className="text-gray-600">Бизнес-аналитика и анализ данных</p>
            </div>
            <div className="text-center p-6">
              <Icon name="Shield" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">Аудит и обеспечение информационной безопасности</p>
            </div>
            <div className="text-center p-6">
              <Icon name="Settings" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Интеграция</h3>
              <p className="text-gray-600">Интеграция систем и автоматизация процессов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions Section */}
      <section id="media" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Медиа-упоминания</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              О нас пишут ведущие отраслевые издания
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <Icon name="Building2" size={24} className="text-primary mr-3" />
                  <span className="font-semibold text-gray-900">TechNews</span>
                </div>
                <CardTitle className="text-lg">Лидеры цифровой трансформации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "Компания Corporate демонстрирует выдающиеся результаты в области инноваций..."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">15 января 2024</span>
                  <Button variant="outline" size="sm">Читать</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <Icon name="Newspaper" size={24} className="text-primary mr-3" />
                  <span className="font-semibold text-gray-900">Business Today</span>
                </div>
                <CardTitle className="text-lg">Топ-100 IT-компаний года</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "Инновационный подход к решению бизнес-задач ставит компанию в авангарде..."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">3 февраля 2024</span>
                  <Button variant="outline" size="sm">Читать</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <Icon name="Radio" size={24} className="text-primary mr-3" />
                  <span className="font-semibold text-gray-900">Digital Weekly</span>
                </div>
                <CardTitle className="text-lg">Будущее корпоративных решений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "Эксперты компании поделились видением развития отрасли на ближайшие годы..."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">20 марта 2024</span>
                  <Button variant="outline" size="sm">Смотреть</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Мы свяжемся с вами в течение одного рабочего дня
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" size={20} className="text-primary mr-3" />
                    <a href="tel:+74951234567" className="text-lg text-gray-600 hover:text-primary">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={20} className="text-primary mr-3" />
                    <a href="mailto:info@corporate.com" className="text-lg text-gray-600 hover:text-primary">
                      info@corporate.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="text-primary mr-3" />
                    <span className="text-lg text-gray-600">
                      г. Москва, ул. Примерная, д. 123, оф. 456
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Часы работы</h4>
                <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-600">Сб-Вс: Выходной</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Социальные сети</h4>
                <div className="flex space-x-4">
                  <Icon name="Linkedin" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
                  <Icon name="Twitter" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
                  <Icon name="Facebook" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy" className="text-sm">
                    Я согласен с политикой конфиденциальности
                  </Label>
                </div>
                <Button className="w-full" size="lg">
                  Отправить сообщение
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Спасибо! Мы свяжемся с вами в течение одного рабочего дня.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <span className="text-xl font-bold">Corporate</span>
              </div>
              <p className="text-gray-400">
                Инновационные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Разработка ПО</li>
                <li>Консалтинг</li>
                <li>Аналитика</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Наша команда</li>
                <li>Карьера</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@corporate.com</p>
                <p>г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Corporate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;