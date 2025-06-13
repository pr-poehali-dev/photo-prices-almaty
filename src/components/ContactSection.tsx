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
      className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300">Мы работаем для вас 24/7</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-semibold">Телефон для связи</p>
                  <p className="text-blue-400 text-lg">8 700 911 00 91</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-300">
                    г. Алматы, ул. Автосервисная, 123
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p className="text-gray-300">Ежедневно 8:00 - 20:00</p>
                  <p className="text-orange-400">Эвакуатор 24/7</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">info@almatysto.kz</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                Позвонить
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>

              <Button className="bg-orange-600 hover:bg-orange-700">
                <CreditCard className="h-5 w-5 mr-2" />
                Оплата картой
              </Button>
            </div>
          </div>

          <div>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Преимущества нашего СТО
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Гарантия на все виды работ</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Оригинальные запчасти</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Опытные мастера</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Современное оборудование</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Бесплатная диагностика при ремонте</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Эвакуатор 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Оплата наличными и картой</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
