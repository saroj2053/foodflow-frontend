
import { Smartphone, Search, Clock, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Find Restaurants",
      description: "Enter your address to find nearby restaurants and browse their menus."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Place Your Order",
      description: "Select your favorite dishes and customize them to your liking."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Tracking",
      description: "Track your order in real-time from preparation to delivery."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Quick Delivery",
      description: "Receive your food fresh and hot at your doorstep within 30 minutes."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How FoodFlow Works</h1>
          <p className="text-xl text-gray-600">Getting your favorite food delivered is easier than ever</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-200 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-orange-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;