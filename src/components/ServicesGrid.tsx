import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Search,
  Droplets,
  CircleDot,
  Car,
  Palette,
  Battery,
  Shield,
  Truck,
  Settings,
} from "lucide-react";

const ServicesGrid = () => {
  const allServices = [
    {
      icon: Wrench,
      title: "Ремонт двигателя",
      price: "от 25 000₸",
      desc: "Капитальный ремонт, замена деталей",
    },
    {
      icon: Search,
      title: "Диагностика",
      price: "от 5 000₸",
      desc: "Компьютерная диагностика всех систем",
    },
    {
      icon: Droplets,
      title: "Замена масла",
      price: "от 3 500₸",
      desc: "Замена моторного масла и фильтров",
    },
    {
      icon: CircleDot,
      title: "Шиномонтаж",
      price: "от 2 000₸",
      desc: "Балансировка, ремонт дисков",
    },
    {
      icon: Car,
      title: "Кузовной ремонт",
      price: "от 15 000₸",
      desc: "Рихтовка, сварка, восстановление",
    },
    {
      icon: Palette,
      title: "Покраска",
      price: "от 80 000₸",
      desc: "Полная и частичная покраска",
    },
    {
      icon: Battery,
      title: "Электрика",
      price: "от 8 000₸",
      desc: "Ремонт электрооборудования",
    },
    {
      icon: Shield,
      title: "Антикор",
      price: "от 12 000₸",
      desc: "Защита от коррозии",
    },
    {
      icon: Truck,
      title: "Эвакуатор 24/7",
      price: "от 8 000₸",
      desc: "Круглосуточная эвакуация",
    },
    {
      icon: Settings,
      title: "ТО",
      price: "от 15 000₸",
      desc: "Техническое обслуживание",
    },
    {
      icon: Wrench,
      title: "Ремонт подвески",
      price: "от 20 000₸",
      desc: "Замена амортизаторов, пружин",
    },
    {
      icon: Settings,
      title: "Ремонт КПП",
      price: "от 35 000₸",
      desc: "Ремонт коробки передач",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Полный спектр автосервисных услуг
          </h2>
          <p className="text-xl text-gray-600">
            Профессиональное обслуживание любых марок автомобилей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-blue-600 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🚛 Услуги эвакуатора 24/7
            </h3>
            <p className="text-gray-600 mb-4">
              Круглосуточная эвакуация автомобилей по Алматы и области
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold">По городу</h4>
                <p className="text-blue-600 font-bold">от 8 000₸</p>
              </div>
              <div>
                <h4 className="font-semibold">За город (до 50км)</h4>
                <p className="text-blue-600 font-bold">от 15 000₸</p>
              </div>
              <div>
                <h4 className="font-semibold">Междугородний</h4>
                <p className="text-blue-600 font-bold">от 200₸/км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
