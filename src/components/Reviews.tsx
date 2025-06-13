import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей К.",
      rating: 5,
      date: "15 декабря 2024",
      service: "Ремонт двигателя",
      text: "Отличный сервис! Быстро диагностировали проблему и качественно отремонтировали двигатель. Мастера профессионалы своего дела. Рекомендую всем!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария С.",
      rating: 5,
      date: "10 декабря 2024",
      service: "Покраска",
      text: "Покрасили машину после ДТП - результат превзошел все ожидания! Как новенькая. Цена адекватная, сроки соблюдены. Спасибо большое!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c96e9d81?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Данияр Т.",
      rating: 5,
      date: "5 декабря 2024",
      service: "Эвакуатор",
      text: "Машина сломалась ночью на трассе. Приехали очень быстро, водитель вежливый и аккуратный. Цены честные, работают действительно 24/7!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Айгуль М.",
      rating: 5,
      date: "28 ноября 2024",
      service: "Диагностика",
      text: "Долго искала проблему в машине по разным СТО. Здесь за час нашли неисправность и сразу предложили варианты ремонта. Профессионально!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Руслан А.",
      rating: 5,
      date: "20 ноября 2024",
      service: "Кузовной ремонт",
      text: "После аварии машина была в плачевном состоянии. Ребята буквально воскресили авто! Работают быстро, качественно и с гарантией.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Ж.",
      rating: 5,
      date: "15 ноября 2024",
      service: "ТО",
      text: "Прохожу ТО только здесь уже 3 года. Всегда качественно, в срок и по разумной цене. Мастера честные, не навязывают лишние услуги.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 1000 довольных клиентов доверяют нам свои автомобили ⭐
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ⭐ Средняя оценка: 4.9/5
            </h3>
            <p className="text-gray-600">
              На основе 1000+ отзывов наших клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
