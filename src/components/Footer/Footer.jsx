import { ImFacebook, ImLinkedin, ImGithub, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-300 max-w-md leading-relaxed">
            I’m Sajid, a passionate software developer focused on AI, data science, and automation to build solutions that make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">About</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Projects</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Resume</li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-5 text-2xl text-gray-300">
            {/* Replace '#' with your actual social URLs */}
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition"><ImFacebook/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400 transition"><ImLinkedin/></a>
            <a href="#" aria-label="GitHub" className="hover:text-indigo-400 transition"><ImGithub/></a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition"><ImInstagram/></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sajid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
