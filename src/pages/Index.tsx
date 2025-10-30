import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { value: "2000+", label: "Услуг оказано" },
    { value: "500+", label: "Человек в команде" },
    { value: "100+", label: "Сервисов запущено" },
    { value: "10+", label: "Лет опыта" }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Анонимность",
      description: "Полная конфиденциальность во всех наших операциях"
    },
    {
      icon: "Target",
      title: "Отчетность",
      description: "Прозрачная отчетность на каждом этапе работы"
    },
    {
      icon: "TrendingUp",
      title: "Цена",
      description: "Лучшее соотношение цены и качества на рынке"
    },
    {
      icon: "Search",
      title: "Информационно",
      description: "Полный анализ с инфографикой и детальными данными"
    },
    {
      icon: "Award",
      title: "Профессионалы",
      description: "В наших рядах только опытные специалисты высокого класса"
    },
    {
      icon: "Zap",
      title: "Опыт",
      description: "Огромный опыт выполнения самых сложных задач"
    }
  ];

  const reviews = [
    {
      name: "Алексей",
      text: "Заказывал у команды спортиков помощь с разработкой сайта для бизнеса. Результат превзошел все ожидания — сделали быстро, качественно и без лишних вопросов."
    },
    {
      name: "Анонимный",
      text: "Обращался к ребятам несколько раз — каждый раз работа выполнялась на высшем уровне. Профессионализм, скорость и полная анонимность."
    },
    {
      name: "Дмитрий",
      text: "Профессиональный подход к делу, четкое выполнение задач. Все пожелания были учтены, а результат получился отличным."
    },
    {
      name: "Аноним",
      text: "Работали с командой над сложным проектом. Впечатлен уровнем работы — все четко, быстро и с гарантией результата."
    },
    {
      name: "Сергей М.",
      text: "Идеальное соотношение цены и качества. Спортики знают свое дело — рекомендую всем, кто ищет надежных исполнителей."
    },
    {
      name: "Аноним",
      text: "Большой опыт работы виден сразу. Все было сделано на высоком профессиональном уровне, никаких проблем в процессе не возникло."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Icon name="Zap" className="text-primary" size={20} />
              <span className="text-sm font-medium">Организация и выполнение услуг любой сложности</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight animate-fade-in">
              Профессиональная команда
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl animate-fade-in">
              Новейший большой опыт работы в сфере SДOS, инструктирование/обучение и администрирование серверов сертифицированными специалистами с высоким уровнем квалификации
            </p>
            
            <p className="text-lg text-secondary mb-8 animate-fade-in">
              Довожем работу профессионально!
            </p>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Связаться в Telegram
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Ключевые преимущества
              </h2>
              <p className="text-muted-foreground text-lg">
                Почему тысячи клиентов выбирают нас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 backdrop-blur-sm group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={advantage.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Отзывы
              </h2>
              <p className="text-muted-foreground text-lg">
                Цифры говорят сами за себя
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" className="text-white" size={20} />
                    </div>
                    <div className="font-bold">{review.name}</div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-6">
                <Icon name="Send" className="text-white" size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Свяжитесь в Telegram
              </h2>
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                в Telegram
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
