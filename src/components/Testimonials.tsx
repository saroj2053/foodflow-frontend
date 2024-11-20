
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Aakriti Sah",
      role: "Food Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "The best food delivery app I've ever used! The variety of restaurants and quick delivery times are impressive.",
      rating: 5
    },
    {
      name: "Ajay Kumar",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content: "Love how easy it is to track orders in real-time. The app is intuitive and the delivery is always on time.",
      rating: 5
    },
    {
      name: "Nilima Singh",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      content: "Great selection of restaurants and the customer service is exceptional. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of satisfied customers who love using FoodFlow
          </p>
          <div className="flex items-center justify-center mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 text-yellow-400 fill-current"
                strokeWidth={1}
              />
            ))}
            <span className="ml-3 text-lg font-semibold text-gray-900">
              4.9 out of 5
            </span>
            <span className="ml-2 text-gray-600">
              (2,845 reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-100" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-gray-600 mb-6">"{review.content}"</p>

              {/* Reviewer */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Customers", value: "2k+" },
            { label: "Restaurant Partners", value: "35+" },
            { label: "Cities Covered", value: "10+" },
            { label: "Monthly Orders", value: "5k+" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-orange-50 rounded-xl"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;