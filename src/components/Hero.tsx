import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CreditCard } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/77009110091", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+77009110091";
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/90"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональный автосервис в{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Алматы
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-fade-in delay-300">
            Полный спектр услуг для вашего автомобиля. Качественный ремонт,
            диагностика, покраска и эвакуация 24/7 ⚡
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in delay-500">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">🔧 Ремонт двигателя</h3>
              <p className="text-blue-300 font-semibold">от 25 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">🔍 Диагностика</h3>
              <p className="text-blue-300 font-semibold">от 5 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">🎨 Покраска</h3>
              <p className="text-blue-300 font-semibold">от 80 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">🚛 Эвакуатор</h3>
              <p className="text-blue-300 font-semibold">от 8 000₸</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Позвонить: 8 700 911 00 91
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Оплата картой
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
