import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                СТО
              </div>
              <div>
                <h3 className="text-xl font-bold">Алматы СТО</h3>
                <p className="text-sm text-gray-400">
                  Автосервис премиум класса
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный автосервис с полным спектром услуг по ремонту и
              обслуживанию автомобилей
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Наши услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Ремонт двигателя</li>
              <li>Кузовной ремонт</li>
              <li>Покраска автомобилей</li>
              <li>Диагностика</li>
              <li>Шиномонтаж</li>
              <li>Эвакуатор 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>8 700 911 00 91</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp доступен</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>г. Алматы</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Пн-Вс: 8:00 - 20:00</p>
                  <p className="text-orange-400">Эвакуатор: 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                💳 Принимаем оплату картой
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Алматы СТО. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
