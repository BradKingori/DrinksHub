// app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">About BoozeHub</h1>
      
      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Our Heritage</h2>
          <p className="text-gray-300 mb-4">
            Since 2015, BoozeHub has been the premier destination for spirit enthusiasts and 
            connoisseurs. We pride ourselves on curating the finest selection of whiskeys, 
            vodkas, rums, gins, and other premium liquors from around the world.
          </p>
          <p className="text-gray-300 mb-4">
            Our passion for quality spirits drives us to source only the best products, 
            from iconic brands like Jack Daniel's to small-batch craft distilleries.
          </p>
          <p className="text-gray-300">
            We believe that great spirits bring people together, creating memorable moments 
            and celebrations. That's why we're committed to providing exceptional service 
            and an unparalleled selection.
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Why Choose BoozeHub?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <h4 className="font-semibold text-white">Curated Selection</h4>
                <p className="text-gray-400">Hand-picked spirits from renowned distilleries</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🔒</span>
              <div>
                <h4 className="font-semibold text-white">Age Verification</h4>
                <p className="text-gray-400">Strict compliance with legal drinking age</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🚚</span>
              <div>
                <h4 className="font-semibold text-white">Discreet Delivery</h4>
                <p className="text-gray-400">Careful packaging and prompt delivery</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">💯</span>
              <div>
                <h4 className="font-semibold text-white">Authenticity Guaranteed</h4>
                <p className="text-gray-400">100% genuine products from authorized distributors</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
          <div className="text-3xl font-bold text-amber-400">500+</div>
          <div className="text-gray-400 mt-2">Premium Brands</div>
        </div>
        <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
          <div className="text-3xl font-bold text-amber-400">10,000+</div>
          <div className="text-gray-400 mt-2">Happy Customers</div>
        </div>
        <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
          <div className="text-3xl font-bold text-amber-400">50+</div>
          <div className="text-gray-400 mt-2">Countries Sourced</div>
        </div>
        <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
          <div className="text-3xl font-bold text-amber-400">24/7</div>
          <div className="text-gray-400 mt-2">Customer Support</div>
        </div>
      </div>

      {/* Our Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
            <p className="text-gray-400">We operate with transparency and honesty in all our dealings</p>
          </div>
          <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
            <p className="text-gray-400">We strive for perfection in product quality and customer service</p>
          </div>
          <div className="text-center bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">Responsibility</h3>
            <p className="text-gray-400">We promote responsible drinking and comply with all regulations</p>
          </div>
        </div>
      </div>
      
      {/* Responsible Drinking Section */}
      <div className="mt-16 bg-amber-900 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Drink Responsibly</h2>
        <p className="text-amber-200">
          We encourage all our customers to enjoy our products responsibly. 
          Please do not drink and drive. Must be 21+ to purchase.
        </p>
      </div>
    </div>
  )
}