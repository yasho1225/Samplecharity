import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SunLit Scholars</div>
          <div className="flex gap-6">
            <a href="/mission" className="text-gray-700 hover:text-blue-600 transition" aria-label="Learn about our mission">Our Mission</a>
            <a href="/impact" className="text-gray-700 hover:text-blue-600 transition" aria-label="See our impact">Impact</a>
            <a href="/get-involved" className="text-gray-700 hover:text-blue-600 transition" aria-label="Get involved with SunLit Scholars">Get Involved</a>
            <a
              href="/donate"
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
              aria-label="Donate to support solar-powered study hubs"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Solar+Hub+Image')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Light Up Learning with SunLit Scholars
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We build solar-powered study hubs in rural Africa, South Asia, and Latin America, providing lights, books, and internet for students to thrive after dark.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/donate"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition shadow-lg"
              aria-label="Donate to fund solar-powered study hubs"
            >
              Donate Now
            </a>
            <a
              href="/sponsor"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-500 transition shadow-lg"
              aria-label="Sponsor a solar-powered study hub"
            >
              Sponsor a Hub
            </a>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">50+</h3>
              <p className="text-gray-600">Solar-Powered Hubs Built</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">10,000+</h3>
              <p className="text-gray-600">Students Empowered</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">3</h3>
              <p className="text-gray-600">Continents Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Join Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Help us bring light to learning. Volunteer, fundraise, or spread the word to empower students in rural communities.
          </p>
          <a
            href="/volunteer"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            aria-label="Volunteer to support SunLit Scholars"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm mb-4">
            SunLit Scholars: Empowering education through solar-powered study hubs in rural communities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com/sunlitscholars" className="hover:text-yellow-500 transition" aria-label="Follow SunLit Scholars on Facebook">Facebook</a>
            <a href="https://x.com/sunlitscholars" className="hover:text-yellow-500 transition" aria-label="Follow SunLit Scholars on X">X</a>
            <a href="https://instagram.com/sunlitscholars" className="hover:text-yellow-500 transition" aria-label="Follow SunLit Scholars on Instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
