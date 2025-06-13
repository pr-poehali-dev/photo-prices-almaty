import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
              СТО
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Алматы СТО
              </h1>
              <p className="text-sm text-gray-600">Автосервис премиум класса</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
              onClick={() => (window.location.href = "tel:+77009110091")}
            >
              <Phone className="h-4 w-4 mr-2 text-blue-600" />8 700 911 00 91
            </Button>
            <Button
              size="sm"
              className="md:hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
