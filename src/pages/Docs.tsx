import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const docSections = [
  {
    title: "Начало работы",
    icon: "PlayCircle",
    items: [
      {
        title: "Быстрый старт",
        description: "Создайте свою первую симуляцию за 5 минут",
      },
      {
        title: "Интерфейс редактора",
        description: "Ознакомьтесь с основными элементами интерфейса",
      },
      {
        title: "Первые шаги",
        description: "Основные принципы создания 3D сцен",
      },
    ],
  },
  {
    title: "Основы физики",
    icon: "Atom",
    items: [
      {
        title: "Гравитация и силы",
        description: "Настройка базовых физических параметров",
      },
      {
        title: "Коллизии и отскоки",
        description: "Как объекты взаимодействуют друг с другом",
      },
      {
        title: "Материалы и свойства",
        description: "Настройка физических свойств объектов",
      },
    ],
  },
  {
    title: "Продвинутые темы",
    icon: "Cog",
    items: [
      {
        title: "Симуляция жидкостей",
        description: "Создание реалистичных флюидных эффектов",
      },
      {
        title: "Мягкие тела и ткани",
        description: "Работа с деформируемыми объектами",
      },
      {
        title: "Частицы и эффекты",
        description: "Создание специальных эффектов",
      },
    ],
  },
  {
    title: "API и интеграция",
    icon: "Code",
    items: [
      {
        title: "JavaScript API",
        description: "Программное управление симуляциями",
      },
      {
        title: "Экспорт и импорт",
        description: "Сохранение и загрузка проектов",
      },
      { title: "Интеграция с веб", description: "Встраивание в веб-сайты" },
    ],
  },
];

const quickLinks = [
  { title: "Быстрый старт", icon: "Zap", href: "#quick-start" },
  { title: "Примеры кода", icon: "Code2", href: "#examples" },
  { title: "FAQ", icon: "HelpCircle", href: "#faq" },
  { title: "Поддержка", icon: "MessageCircle", href: "#support" },
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Документация
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полное руководство по созданию удивительных 3D физических
              симуляций
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                    <Icon
                      name={link.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {link.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Documentation */}
            <div className="lg:col-span-2 space-y-8">
              {docSections.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name={section.icon as any}
                          size={20}
                          className="text-purple-600"
                        />
                      </div>
                      <CardTitle className="text-2xl">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="flex items-start gap-3 group cursor-pointer">
                            <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 group-hover:bg-purple-500 transition-colors"></div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <Icon
                              name="ChevronRight"
                              size={16}
                              className="text-gray-400 group-hover:text-purple-600 transition-colors"
                            />
                          </div>
                          {itemIndex < section.items.length - 1 && (
                            <Separator className="my-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Поиск</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Icon
                      name="Search"
                      size={16}
                      className="absolute left-3 top-3 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Поиск в документации..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Latest Updates */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Последние обновления
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 text-xs px-2 py-1"
                      >
                        Новое
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Поддержка жидкостей
                        </p>
                        <p className="text-xs text-gray-500">5 дней назад</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1"
                      >
                        Обновлено
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Оптимизация рендера
                        </p>
                        <p className="text-xs text-gray-500">1 неделю назад</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 text-xs px-2 py-1"
                      >
                        Гайд
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Новые примеры</p>
                        <p className="text-xs text-gray-500">2 недели назад</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Нужна помощь?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Обратиться в поддержку
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Github" size={16} className="mr-2" />
                    GitHub Issues
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Обучающие видео
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
