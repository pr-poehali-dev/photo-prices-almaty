import { Card, CardContent } from "@/components/ui/card";

const ServicesGallery = () => {
  const services = [
    {
      title: "Ремонт двигателя",
      price: "от 25 000₸",
      image: "/placeholder.svg",
      description: "Капитальный ремонт, замена поршней, клапанов",
    },
    {
      title: "Покраска автомобиля",
      price: "от 80 000₸",
      image: "/placeholder.svg",
      description: "Полная и частичная покраска, антикор",
    },
    {
      title: "Кузовной ремонт",
      price: "от 15 000₸",
      image: "/placeholder.svg",
      description: "Рихтовка, сварка, восстановление геометрии",
    },
    {
      title: "Замена масла",
      price: "от 3 500₸",
      image: "/placeholder.svg",
      description: "Замена моторного масла и фильтров",
    },
    {
      title: "Шиномонтаж",
      price: "от 2 000₸",
      image: "/placeholder.svg",
      description: "Балансировка, ремонт дисков, сезонная замена",
    },
    {
      title: "Компьютерная диагностика",
      price: "от 5 000₸",
      image: "/placeholder.svg",
      description: "Полная диагностика всех систем автомобиля",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Наши услуги с фотографиями
          </h2>
          <p className="text-xl text-gray-600">
            Качественные работы с гарантией результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
