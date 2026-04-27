import logoImage from '../images/build/logo.png';

const Footer = () => (
  <footer id="contact" className="border-t-8 border-[#AD3048] bg-white pb-8 pt-12 md:pt-16">
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12">
      <div>
        <img src={logoImage} alt="Sanjivini" className="mb-6 h-14 sm:h-16" />
        <div className="flex gap-3 mt-4">
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
        </div>
      </div>

      <div>
        <h4 className="text-[#194656] font-serif font-bold mb-6 uppercase">Quick Links</h4>
        <ul className="text-gray-600 space-y-3 text-sm">
          <li>About Us</li><li>Facilities & Services</li><li>Our Chronicles</li><li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#194656] font-serif font-bold mb-6 uppercase">Services</h4>
        <ul className="text-gray-600 space-y-3 text-sm">
          <li>Specialties</li><li>Career</li><li>Contact Us</li><li>TPA's/ Empanelment</li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#194656] font-serif font-bold mb-6 uppercase">Book An Appointment</h4>
        <form className="space-y-3">
          <input className="w-full p-3 border border-gray-200 rounded bg-gray-50" placeholder="Name*" />
          <input className="w-full p-3 border border-gray-200 rounded bg-gray-50" placeholder="Phone Number*" />
          <button className="w-full bg-[#AD3048] text-white py-3 font-bold rounded uppercase hover:bg-[#194656] transition">Submit Now</button>
        </form>
      </div>
    </div>
    <p className="mt-12 px-4 text-center text-xs text-gray-400 md:mt-16">Copyright © 2026 Sanjivini Hospital. All Rights Reserved.</p>
  </footer>
);

export default Footer;
