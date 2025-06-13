import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  CreditCard,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/77009110091", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+77009110091";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300">Мы работаем для вас 24/7 🚀</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Контактная информация
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Телефон для связи</p>
                  <p className="text-blue-400 text-xl font-bold">
                    8 700 911 00 91
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="bg-green-600 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Адрес</p>
                  <p className="text-gray-300 text-lg">
                    г. Алматы, ул. Автосервисная, 123
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="bg-orange-600 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Режим работы</p>
                  <p className="text-gray-300 text-lg">
                    Ежедневно 8:00 - 20:00
                  </p>
                  <p className="text-orange-400 font-semibold">
                    Эвакуатор 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-gray-300 text-lg">info@almatysto.kz</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                onClick={handleCall}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Позвонить
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>

              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CreditCard className="h-5 w-5 mr-2" />
                Оплата картой
              </Button>
            </div>
          </div>

          <div>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  🏆 Преимущества нашего СТО
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Гарантия на все виды работ</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Оригинальные запчасти</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Опытные мастера</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Современное оборудование</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">
                      Бесплатная диагностика при ремонте
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Эвакуатор 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg">Оплата наличными и картой</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            📍 Мы на карте
          </h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="bg-gray-300 h-64 rounded-xl flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                🗺️ Интерактивная карта (в разработке)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
