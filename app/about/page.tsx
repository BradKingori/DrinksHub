// app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About DrinksHub</h1>
      
      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At DrinksHub, we're passionate about bringing you the finest beverages from around the world.
            Our mission is to provide premium quality drinks that enhance every moment of your life.
          </p>
          <p className="text-gray-600 mb-4">
            From carefully sourced coffee beans to handcrafted cocktails, we ensure that every drink
            we serve meets our high standards of quality and taste.
          </p>
          <p className="text-gray-600">
            We believe that great drinks bring people together, and we're committed to making every
            sip a memorable experience.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <h4 className="font-semibold">Premium Quality</h4>
                <p className="text-gray-600">Only the finest ingredients in every drink</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🚀</span>
              <div>
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-gray-600">Quick and reliable service to your doorstep</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">💯</span>
              <div>
                <h4 className="font-semibold">Satisfaction Guaranteed</h4>
                <p className="text-gray-600">We're not happy unless you're happy</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🌱</span>
              <div>
                <h4 className="font-semibold">Sustainable Practices</h4>
                <p className="text-gray-600">Eco-friendly packaging and sourcing</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-blue-600">1000+</div>
          <div className="text-gray-600 mt-2">Happy Customers</div>
        </div>
        <div className="text-center bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-blue-600">50+</div>
          <div className="text-gray-600 mt-2">Drink Varieties</div>
        </div>
        <div className="text-center bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-blue-600">5+</div>
          <div className="text-gray-600 mt-2">Years Experience</div>
        </div>
        <div className="text-center bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-blue-600">24/7</div>
          <div className="text-gray-600 mt-2">Customer Support</div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'Founder & CEO', image: '👨‍💼' },
            { name: 'Jane Smith', role: 'Head Mixologist', image: '👩‍🍳' },
            { name: 'Mike Johnson', role: 'Operations Manager', image: '👨‍💼' }
          ].map(member => (
            <div key={member.name} className="text-center bg-white rounded-lg shadow-md p-6">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}