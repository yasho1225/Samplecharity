function NavBar() {
  return (
    <nav className="bg-white shadow-lg py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-black font-poppins">SunLit Scholars</span>
          <p className="text-xs text-gray-600">Lighting Minds with Solar</p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="/" className="text-black hover:text-yellow-600 font-poppins transition">Home</a>
          <a href="/about" className="text-black hover:text-yellow-600 font-poppins transition">About Us</a>
          <a href="/contact" className="text-black hover:text-yellow-600 font-poppins transition">Contact</a>
          <a
            href="/donate"
            className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition shadow-md font-poppins"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}
