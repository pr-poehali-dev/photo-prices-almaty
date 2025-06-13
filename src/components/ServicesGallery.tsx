import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ServicesGallery = () => {
  const services = [
    {
      title: "Ремонт двигателя",
      price: "от 25 000₸",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070",
      description: "Капитальный ремонт, замена поршней, клапанов",
    },
    {
      title: "Покраска автомобиля",
      price: "от 80 000₸",
      image:
        "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?q=80&w=2069",
      description: "Полная и частичная покраска, антикор",
    },
    {
      title: "Кузовной ремонт",
      price: "от 15 000₸",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974",
      description: "Рихтовка, сварка, восстановление геометрии",
    },
    {
      title: "Замена масла",
      price: "от 3 500₸",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070",
      description: "Замена моторного масла и фильтров",
    },
    {
      title: "Шиномонтаж",
      price: "от 2 000₸",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
      description: "Балансировка, ремонт дисков, сезонная замена",
    },
    {
      title: "Компьютерная диагностика",
      price: "от 5 000₸",
      image:
        "https://images.unsplash.com/photo-1609740431444-5b4f5e7d87db?q=80&w=2070",
      description: "Полная диагностика всех систем автомобиля",
    },
  ];

  const handleCall = () => {
    window.location.href = "tel:+77009110091";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/77009110091", "_blank");
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Наши услуги с фотографиями
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Качественные работы с гарантией результата ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {service.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleCall}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex-1"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Заказать
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
