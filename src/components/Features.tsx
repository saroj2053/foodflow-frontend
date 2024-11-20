import { ShoppingBag, MapPin, Clock, Utensils, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Wide Coverage Area",
      description:
        "Delivering to all major places and neighborhoods in our district",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-orange-600" />,
      title: "Easy To Order",
      description: "Ordering food is easy and seamless with our app",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Fast Delivery",
      description: "Get your food delivered within 30 minutes of ordering",
    },
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Quality Restaurants",
      description: "Partner with the best restaurants to ensure quality meals",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Secure Payment",
      description: "We ensure secure payment for all orders",
    },
    
  ];

  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We make food ordering and delivery simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
