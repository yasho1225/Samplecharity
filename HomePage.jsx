function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black pt-20 font-poppins">
      {/* Hero Section */}
      <section
        className="py-28 bg-gradient-to-b from-white to-gray-50 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundOpacity: 0.2
        }}
      >
        <div className="container mx-auto px-6 text-center bg-white bg-opacity-80 py-10 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Lighting Minds with Solar
          </h1>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto">
            SunLit Scholars builds solar-powered study hubs in rural Africa, South Asia, and Latin America, providing lights, books, and internet to help students learn safely after dark.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/donate"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition shadow-lg"
            >
              Donate
            </a>
            <a
              href="/sponsor"
              className="bg-yellow-100 text-black border border-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-200 transition shadow-lg"
            >
              Sponsor a Hub
            </a>
          </div>
        </div>
      </section>
      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Solar-powered study hub at night"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
          />
          <p className="text-center text-sm mt-4 text-gray-600">
            A SunLit Scholars study hub lighting up education in rural areas.
          </p>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Students studying in a hub"
                className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition"
              />
              <p className="text-center text-sm mt-2 text-gray-600">Students thriving in our hubs</p>
            </div>
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Solar panel installation"
                className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition"
              />
              <p className="text-center text-sm mt-2 text-gray-600">Sustainable solar energy</p>
            </div>
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1542027927368-885b8c6a7593?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Rural community"
                className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition"
              />
              <p className="text-center text-sm mt-2 text-gray-600">Empowering rural communities</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white py-8 border-t-2 border-gray-300">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 mb-4">
            SunLit Scholars: Building solar-powered study hubs to empower students in rural communities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-black hover:text-yellow-600 font-poppins">Facebook</a>
            <a href="#" className="text-black hover:text-yellow-600 font-poppins">Twitter</a>
            <a href="#" className="text-black hover:text-yellow-600 font-poppins">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
