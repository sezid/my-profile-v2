import { images } from '../../assets/information';
import { ImFacebook, ImLinkedin, ImGithub, ImInstagram } from "react-icons/im";

const Hero = ({ scrollToAboutMe, scrollToMyPortfolio }) => {
  


  return (
    <section
      id="home"
      className="flex flex-col mt-10 md:flex-row w-full min-h-screen items-center text-white px-6 md:px-20 py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black animate-gradient-bg relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black animate-gradient-bg"></div>

      {/* Left Side Content */}
      <div className="flex-1 flex flex-col gap-10 justify-center z-10 text-left order-2 md:order-1">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Hi, I'm Sajid<br />I Build Smart, Scalable Tech
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            From AI-driven automation to data-powered apps, I create intelligent solutions that streamline operations and drive real business results.
          </p>
        </div>

        {/* Animated CTA Links */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 group w-fit relative">
            <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer" onClick={scrollToAboutMe}>Learn More</h2>
            <div className="h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[160px]"></div>
            <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex text-2xl md:text-3xl ml-5 mb-2">→</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 group w-fit relative" onClick={scrollToMyPortfolio}>
            <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer">My Portfolio</h2>
            <div className="h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[180px]"></div>
            <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex text-2xl md:text-3xl ml-5 mb-2">→</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl mb-4">Let's Connect!</h2>
          <ul className="flex gap-5">
            {[ImFacebook, ImLinkedin, ImGithub, ImInstagram].map((Icon, index) => (
              <li key={index} className="transition-all duration-300 hover:scale-110 hover:bg-black rounded-full p-4">
                <Icon className="text-2xl md:text-3xl" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 z-10 order-1 md:order-2">
  <img
    src={images.hero}
    alt="Hero"
    className="w-full max-w-[500px] md:max-w-[600px] object-cover rounded-2xl shadow-lg mb-10 md:mb-0"
  />
</div>
    </section>
  );
};

export default Hero;
