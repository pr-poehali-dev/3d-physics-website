import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

export default function Editor() {
  const [gravity, setGravity] = useState([9.8]);
  const [simulation, setSimulation] = useState("gravity");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-20 flex h-screen">
        {/* Left Sidebar - Controls */}
        <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Параметры симуляции
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Тип симуляции
                  </label>
                  <Select value={simulation} onValueChange={setSimulation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gravity">Гравитация</SelectItem>
                      <SelectItem value="particles">Частицы</SelectItem>
                      <SelectItem value="fluid">Жидкость</SelectItem>
                      <SelectItem value="cloth">Ткань</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Гравитация: {gravity[0]} m/s²
                  </label>
                  <Slider
                    value={gravity}
                    onValueChange={setGravity}
                    max={20}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Объекты</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon name="Square" size={16} />
                  Куб
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon name="Circle" size={16} />
                  Шар
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon name="Triangle" size={16} />
                  Призма
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon name="Cylinder" size={16} />
                  Цилиндр
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Материалы</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                  Металл
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <div className="w-4 h-4 bg-amber-600 rounded mr-2"></div>
                  Дерево
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  Резина
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main 3D Viewport */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
            <div className="text-center text-white/60">
              <Icon name="Box" size={64} className="mx-auto mb-4 opacity-40" />
              <h3 className="text-xl font-medium mb-2">3D Редактор</h3>
              <p className="text-sm">Начните создавать свою симуляцию</p>
            </div>
          </div>

          {/* Floating Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant={isPlaying ? "default" : "outline"}
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Icon name="RotateCcw" size={16} />
            </Button>
          </div>

          {/* Bottom Timeline */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 p-4">
            <div className="flex items-center gap-4 text-white/80">
              <span className="text-sm">Время: 0.00s</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full">
                <div className="w-0 h-full bg-purple-500 rounded-full"></div>
              </div>
              <span className="text-sm">Объекты: 0</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Свойства объекта</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500 text-center py-8">
                Выберите объект для редактирования
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Камера</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Home" size={16} className="mr-1" />
                  Дом
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Eye" size={16} className="mr-1" />
                  Вид
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-1 text-xs">
                <Button variant="outline" size="sm">
                  XY
                </Button>
                <Button variant="outline" size="sm">
                  XZ
                </Button>
                <Button variant="outline" size="sm">
                  YZ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
