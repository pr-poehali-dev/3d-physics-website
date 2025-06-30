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
import Icon from "@/components/ui/icon";

const examples = [
  {
    id: 1,
    title: "Падающие кубы",
    description:
      "Классическая симуляция гравитации с сотнями кубов, падающих и сталкивающихся друг с другом",
    category: "Гравитация",
    difficulty: "Новичок",
    image: "from-blue-500 to-purple-600",
    icon: "Box",
    objects: 50,
    physics: ["Гравитация", "Коллизии"],
  },
  {
    id: 2,
    title: "Маятник Ньютона",
    description:
      "Классическая демонстрация законов сохранения импульса с помощью подвешенных шаров",
    category: "Механика",
    difficulty: "Новичок",
    image: "from-emerald-500 to-teal-600",
    icon: "Circle",
    objects: 7,
    physics: ["Маятник", "Импульс"],
  },
  {
    id: 3,
    title: "Жидкость в сосуде",
    description:
      "Симуляция жидкости с реалистичными эффектами поверхностного натяжения и вязкости",
    category: "Жидкости",
    difficulty: "Продвинутый",
    image: "from-cyan-500 to-blue-600",
    icon: "Droplets",
    objects: 1000,
    physics: ["Флюиды", "Вязкость"],
  },
  {
    id: 4,
    title: "Мягкая ткань",
    description:
      "Имитация мягкой ткани с реалистичными деформациями, разрывами и колебаниями",
    category: "Мягкие тела",
    difficulty: "Продвинутый",
    image: "from-purple-500 to-pink-600",
    icon: "Waves",
    objects: 400,
    physics: ["Мягкость", "Деформация"],
  },
  {
    id: 5,
    title: "Система частиц",
    description: "Красивая система частиц с эффектом огня, дыма и свечения",
    category: "Частицы",
    difficulty: "Средний",
    image: "from-orange-500 to-red-600",
    icon: "Sparkles",
    objects: 5000,
    physics: ["Частицы", "Эмиссия"],
  },
  {
    id: 6,
    title: "Мост из блоков",
    description:
      "Комплексная конструкция моста, демонстрирующая сложные взаимодействия между объектами",
    category: "Конструкции",
    difficulty: "Эксперт",
    image: "from-gray-500 to-slate-700",
    icon: "Building",
    objects: 200,
    physics: ["Констрайнты", "Конструкция"],
  },
];

const categories = [
  "Все",
  "Гравитация",
  "Жидкости",
  "Мягкие тела",
  "Частицы",
  "Конструкции",
];
const difficulties = ["Все", "Новичок", "Средний", "Продвинутый", "Эксперт"];

export default function Examples() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Примеры симуляций
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Исследуйте готовые примеры физических симуляций и используйте их
              как основу для своих проектов
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex gap-2">
              <span className="text-sm font-medium text-gray-700 py-2">
                Категория:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Все" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "Все"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Examples Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example) => (
              <Card
                key={example.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm overflow-hidden"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${example.image} relative`}
                >
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Icon
                      name={example.icon as any}
                      size={48}
                      className="text-white/80"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      {example.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {example.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {example.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {example.objects} объектов
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {example.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.physics.map((physics) => (
                      <Badge
                        key={physics}
                        variant="secondary"
                        className="text-xs"
                      >
                        {physics}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Запустить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Copy" size={16} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Share" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Загрузить ещё
              <Icon name="ArrowDown" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
