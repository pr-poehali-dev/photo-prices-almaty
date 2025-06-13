import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              СТО
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Алматы СТО</h1>
              <p className="text-sm text-gray-600">Автосервис премиум класса</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Галерея
            </a>
            <a
              href="#prices"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Цены
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="h-4 w-4 mr-2" />8 700 911 00 91
            </Button>
            <Button size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
