import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CreditCard, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональный автосервис в{" "}
            <span className="text-blue-400">Алматы</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Полный спектр услуг для вашего автомобиля. Качественный ремонт,
            диагностика, покраска и эвакуация 24/7
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Ремонт двигателя</h3>
              <p className="text-sm text-gray-300">от 25 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Диагностика</h3>
              <p className="text-sm text-gray-300">от 5 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Покраска</h3>
              <p className="text-sm text-gray-300">от 80 000₸</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Эвакуатор</h3>
              <p className="text-sm text-gray-300">от 8 000₸</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-5 w-5 mr-2" />
              Позвонить: 8 700 911 00 91
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-green-600 hover:bg-green-700 text-white border-green-600"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600"
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
