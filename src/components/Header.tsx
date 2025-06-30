import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Icon name="Atom" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Physics3D</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="/editor"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Редактор
            </a>
            <a
              href="/examples"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Примеры
            </a>
            <a
              href="/docs"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Документация
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Github" size={18} />
            </Button>
            <a href="/editor">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Начать
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
