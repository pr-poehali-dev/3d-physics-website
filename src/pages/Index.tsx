import Header from "@/components/Header";
import PhysicsDemo from "@/components/PhysicsDemo";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Создавайте 3D физику
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                в браузере
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Мощная платформа для создания реалистичных физических симуляций,
              частиц и жидкостей в реальном времени
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать создание
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                ✨ Реальное время
              </span>
              <span className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                🌎 WebGL поддержка
              </span>
              <span className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                🛠️ Но кода
              </span>
            </div>
          </div>
        </div>
      </section>

      <PhysicsDemo />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам разработчиков, создающих удивительные 3D
            сцены
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Открыть редактор
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
