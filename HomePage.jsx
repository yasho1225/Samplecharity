function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40x40.png?text=SL" alt="SunLit Scholars Logo" className="mr-3" />
            <div>
              <h2 className="text-2xl font-lora font-bold text-gray-900">SunLit Scholars</h2>
              <p className="text-sm text-gold-600 font-open-sans">Empowering Education</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-gray-700 hover:text-gold-600 font-open-sans font-medium transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gold-600 font-open-sans font-medium transition">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-gold-600 font-open-sans font-medium transition">Contact</a>
            <a href="/donate" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-md font-open-sans">Donate</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.pixabay.com/video/2023/05/15/146138-847351372_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-lora font-bold mb-6 leading-tight animate-fade-in">
            Empowering Minds with SunLit Scholars
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-open-sans animate-fade-in-delay">
            SunLit Scholars builds solar-powered study hubs in rural Africa, South Asia, and Latin America, providing lights, books, and internet to help students learn safely after dark.
          </p>
          <div className="flex justify-center gap-6 animate-fade-in-delay-2">
            <a href="/donate" className="bg-blue-700 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-lg font-open-sans">Donate Now</a>
            <a href="/sponsor" className="bg-gold-600 text-white border border-gold-700 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gold-700 transition transform hover:scale-105 shadow-lg font-open-sans">Sponsor a Hub</a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-lora font-bold text-center mb-10 text-gray-900">Our Impact in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students Studying" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 font-lora">Student Success</h3>
              <p className="text-gray-600 font-open-sans">Empowering students with safe study spaces, boosting academic growth and opportunities.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1600585154526-990d71e64f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Solar Panels" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 font-lora">Sustainable Energy</h3>
              <p className="text-gray-600 font-open-sans">Harnessing solar power for eco-friendly, reliable education in off-grid regions.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1573164713719-9b489447d05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Rural Community" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 font-lora">Community Growth</h3>
              <p className="text-gray-600 font-open-sans">Fostering development through education and sustainable learning hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-gold-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-lora font-bold mb-6">Join the Movement</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-open-sans">Your support can light up a child’s future. Donate or sponsor a hub today!</p>
          <a href="/donate" className="bg-white text-blue-700 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg font-open-sans">Get Involved</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="text-white hover:text-gold-400 transition"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="text-white hover:text-gold-400 transition"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="text-white hover:text-gold-400 transition"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
          <p className="text-sm font-open-sans">© 2025 SunLit Scholars. All rights reserved. | <a href="/privacy" className="underline hover:text-gold-400">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
}
