import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#0A2A66] text-white text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-10">

        {/* Left Side */}
        <div className="flex items-center gap-6">

          <span className="font-semibold text-yellow-400">
            Admission Open 2025-26
          </span>

          <div className="flex items-center gap-2">
            <FaPhoneAlt size={12} />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope size={12} />
            <span>info@edunova.edu.in</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <a href="#">Alumni</a>

          <a href="#">Careers</a>

          <a href="#">FAQs</a>

          <button className="bg-yellow-400 text-[#0A2A66] px-4 py-1 rounded font-semibold hover:bg-yellow-300 transition">
            Teacher Login
          </button>

          <FaFacebookF className="cursor-pointer hover:text-yellow-400" />

          <FaInstagram className="cursor-pointer hover:text-yellow-400" />

          <FaYoutube className="cursor-pointer hover:text-yellow-400" />

        </div>

      </div>
    </div>
  );
};

export default TopBar;