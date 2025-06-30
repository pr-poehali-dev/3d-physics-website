import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const demoCards = [
  {
    title: "Гравитация и столкновения",
    description: "Симуляция падающих объектов и упругих соударений",
    icon: "CircleDot",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Частицы и жидкости",
    description: "Создание систем частиц и флюидных симуляций",
    icon: "Droplets",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Мягкие тела и ткани",
    description: "Физика деформаций, тканей и гибких объектов",
    icon: "Waves",
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function PhysicsDemo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Типы симуляций
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Создавайте реалистичные 3D сцены с различными физическими эффектами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demoCards.map((demo, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={demo.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl">{demo.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {demo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all"
                >
                  Открыть демо
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
