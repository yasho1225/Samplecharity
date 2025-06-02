function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20 font-poppins">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Empowering Minds with SunLit Scholars
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-700">
            SunLit Scholars builds solar-powered study hubs in rural Africa, South Asia, and Latin America, providing lights, books, and internet to help students learn safely after dark.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/donate"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Donate
            </a>
            <a
              href="/sponsor"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Sponsor a Hub
            </a>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Through solar-powered study hubs, we’re transforming education in rural communities by providing safe, sustainable learning environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Student Success</h3>
              <p className="text-gray-600">Our hubs empower students to study after dark, improving academic outcomes and opportunities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Sustainable Energy</h3>
              <p className="text-gray-600">Solar power ensures eco-friendly, reliable access to education in off-grid areas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Growth</h3>
              <p className="text-gray-600">Our hubs foster community development by supporting lifelong learning.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm mb-4">
            SunLit Scholars: Building solar-powered study hubs to empower students in rural communities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-blue-400 font-poppins transition">Facebook</a>
            <a href="#" className="text-white hover:text-blue-400 font-poppins transition">Twitter</a>
            <a href="#" className="text-white hover:text-blue-400 font-poppins transition">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
