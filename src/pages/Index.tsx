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
      text: "Обращался за помощью в возврате крупного долга. Ребята сработали быстро и эффективно — деньги вернули в полном объеме. Полная конфиденциальность."
    },
    {
      name: "Анонимный",
      text: "Заказывал силовую акцию. Все сделано четко, профессионально и без лишних вопросов. Никаких следов, полная анонимность гарантирована."
    },
    {
      name: "Дмитрий",
      text: "Нужно было решить проблему с недобросовестным партнером. Команда взялась за дело — результат превзошел ожидания. Рекомендую."
    },
    {
      name: "Аноним",
      text: "Работал с ними несколько раз. Всегда на высшем уровне — быстро, качественно, конфиденциально. Настоящие профессионалы своего дела."
    },
    {
      name: "Сергей М.",
      text: "Необходимо было провести серьезную работу. Спортики справились безупречно — никаких проблем, все чисто и анонимно."
    },
    {
      name: "Аноним",
      text: "Большой опыт чувствуется сразу. Знают как работать, никаких косяков. Цена адекватная, результат гарантирован."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-24">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-muted-foreground">100% Конфиденциальность</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
              <span className="text-primary">СПОРТИКИ</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              Организуем и выполним для вас любые заказы по силовым акциям, поможем решить сложные ситуации, вернём долг и многие другие услуги
            </p>
            
            <p className="text-sm text-primary mb-10 font-medium">
              Большой опыт работы • Доверьте работу профессионалам
            </p>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-all hover:scale-[1.02]"
            >
              <Icon name="Send" className="mr-2" size={18} />
              Связаться в Telegram
            </Button>
          </div>

          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-xl border-border mb-20 md:mb-24 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Важная информация</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Платформы типа Mega, Kraken и подобные запрещают проводить подобные сделки через гарантов. 
                    Мы работаем напрямую для обеспечения максимальной безопасности.
                  </p>
                  <p>
                    В Telegram мы принимаем только базовую информацию об объекте и описание требуемых действий. 
                    После оценки сразу высылаем стоимость услуги и реквизиты для оплаты.
                  </p>
                  <p>
                    Цена варьируется в зависимости от региона исполнения, социального статуса человека и сложности задачи.
                  </p>
                  <p className="text-primary font-medium">
                    Заказ поступает в работу после предварительной проработки — это необходимо для качественного выполнения.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-24 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-5 md:p-8 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all hover:scale-[1.02] group"
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-20 md:mb-24 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
                Ключевые преимущества
              </h2>
              <p className="text-muted-foreground text-base font-medium">
                Почему тысячи клиентов выбирают нас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={advantage.icon} className="text-primary" size={22} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20 md:mb-24 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
                Примеры услуг
              </h2>
              <p className="text-muted-foreground text-base font-medium">
                Ориентировочная стоимость наших услуг
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-8">
              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Возврат долга</h3>
                  <span className="text-sm text-primary font-semibold">от 50%</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Помощь в возврате задолженности от недобросовестных заёмщиков. 
                  Стоимость зависит от суммы долга и сложности ситуации.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Разбор ситуации</h3>
                  <span className="text-sm text-primary font-semibold">от 50k ₽</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Профессиональное решение конфликтных ситуаций с недобросовестными партнёрами или обидчиками.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Силовые воздействия</h3>
                  <span className="text-sm text-primary font-semibold">от 300k ₽</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Комплексное силовое решение сложных ситуаций. Профессиональный подход и гарантия результата.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Доносы</h3>
                  <span className="text-sm text-primary font-semibold">от 350k ₽</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Официальное информирование компетентных органов с полным пакетом документов и доказательств.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Информационный поиск</h3>
                  <span className="text-sm text-primary font-semibold">от 70k ₽</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Сбор и анализ информации об объекте. Подробная инфографика и детальный отчёт.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-foreground">Консультация</h3>
                  <span className="text-sm text-primary font-semibold">от 10k ₽</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Профессиональная консультация по вашей ситуации с рекомендациями по дальнейшим действиям.
                </p>
              </Card>
            </div>

            <Card className="p-5 bg-primary/5 backdrop-blur-xl border-primary/20">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Точная стоимость определяется после анализа вашей ситуации. 
                Цены указаны ориентировочно и могут варьироваться в зависимости от сложности задачи.
              </p>
            </Card>
          </div>

          <div className="mb-20 md:mb-24 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
                Отзывы клиентов
              </h2>
              <p className="text-muted-foreground text-base font-medium">
                Реальные результаты реальных людей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {reviews.map((review, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-xl border-border hover:border-primary/40 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={18} />
                    </div>
                    <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-xl border-primary/20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Send" className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight">
                Готовы начать?
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Свяжитесь с нами в Telegram. Отправьте информацию об объекте и требуемые действия — 
                мы оценим заказ и вышлем стоимость с реквизитами
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-all hover:scale-[1.02]"
              >
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Написать в Telegram
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
          background-size: 64px 64px;
        }
      `}</style>
    </div>
  );
};

export default Index;