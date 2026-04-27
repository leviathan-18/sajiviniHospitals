import logoImage from '../images/build/logo.png';

const Footer = () => (
  <footer id="contact" className="border-t-8 border-[#AD3048] bg-white pb-8 pt-12 md:pt-16">
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12">
      <div className="flex flex-col items-start">
        <img src={logoImage} alt="Sanjivini" className="mb-6 h-24 w-auto sm:h-28 lg:h-32" />
        <div className="mt-4 flex gap-3">
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
          <span className="w-8 h-8 bg-[#F37D79] rounded-full"></span>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-start">
        <h4 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-[#194656] sm:mb-6 sm:text-lg">Quick Links</h4>
        <ul className="m-0 ml-0 list-none space-y-2 pl-0 !pl-0 text-left text-sm leading-7 text-gray-600 sm:space-y-3 sm:leading-6">
          <li className="break-words">About Us</li>
          <li className="break-words">Facilities & Services</li>
          <li className="break-words">Our Chronicles</li>
          <li className="break-words">Privacy Policy</li>
        </ul>
      </div>

      <div className="flex w-full flex-col items-start justify-start">
        <h4 className="mb-3 font-serif text-base font-bold uppercase tracking-[0.08em] text-[#194656] sm:mb-6 sm:text-lg">Services</h4>
        <ul className="m-0 ml-0 list-none space-y-2 pl-0 !pl-0 text-left text-sm leading-7 text-gray-600 sm:space-y-3 sm:leading-6">
          <li className="break-words">Specialties</li>
          <li className="break-words">Career</li>
          <li className="break-words">Contact Us</li>
          <li className="break-words">TPA&apos;s / Empanelment</li>
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
