import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";

const BusinessAnimation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="w-full h-full">
    <defs>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .floating {
            animation: float 3s ease-in-out infinite;
          }
          .pulsing {
            animation: pulse 2s ease-in-out infinite;
          }
          .satisfaction-star {
            animation: pulse 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </defs>

    {/* Meeting Table */}
    <path d="M200 500 L600 500 L650 600 L150 600 Z" fill="#2a4365" opacity="0.8"/>
    
    {/* Client Figure */}
    <g className="floating">
      <circle cx="300" cy="400" r="40" fill="#64ffda" opacity="0.8"/> {/* Head */}
      <path d="M300 440 L300 520" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Body */}
      <path d="M300 470 L260 490" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Left Arm */}
      <path d="M300 470 L340 490" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Right Arm */}
    </g>

    {/* HR/Consultant Figure */}
    <g className="floating" style={{ animationDelay: '-1.5s' }}>
      <circle cx="500" cy="400" r="40" fill="#64ffda" opacity="0.8"/> {/* Head */}
      <path d="M500 440 L500 520" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Body */}
      <path d="M500 470 L460 490" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Left Arm */}
      <path d="M500 470 L540 490" stroke="#64ffda" strokeWidth="4" opacity="0.8"/> {/* Right Arm */}
    </g>

    {/* Floating Technology Icons */}
    <g className="floating" style={{ animationDelay: '-1s' }}>
      {/* Cloud Icon */}
      <path d="M350 250 Q380 230 410 250 Q430 220 460 240 Q480 240 490 260 Q470 280 430 280 L360 280 Q340 270 350 250" 
        fill="#64ffda" opacity="0.6"/>
      
      {/* Data Icon */}
      <rect x="520" cy="250" width="40" height="60" rx="5" fill="#64ffda" opacity="0.6"/>
      <rect x="530" cy="260" width="20" height="5" fill="#1a1a2e"/>
      <rect x="530" cy="270" width="20" height="5" fill="#1a1a2e"/>
    </g>

    {/* Satisfaction Indicators */}
    <g>
      {/* Stars */}
      <path d="M250 300 L260 280 L270 300 L290 310 L270 320 L260 340 L250 320 L230 310 L250 300" 
        fill="#ffd700" className="satisfaction-star" opacity="0.8"/>
      <path d="M550 300 L560 280 L570 300 L590 310 L570 320 L560 340 L550 320 L530 310 L550 300" 
        fill="#ffd700" className="satisfaction-star" opacity="0.8" style={{ animationDelay: '-0.5s' }}/>
    </g>

    {/* Connection Lines */}
    <g className="pulsing">
      <path d="M350 400 Q400 380 450 400" stroke="#64ffda" strokeWidth="2" fill="none" opacity="0.4"/>
      <circle cx="400" cy="390" r="5" fill="#64ffda" opacity="0.8"/>
    </g>

    {/* Holographic Display */}
    <g className="floating" style={{ animationDelay: '-0.75s' }}>
      <path d="M380 330 L420 330 L440 360 L360 360 Z" fill="#64ffda" opacity="0.3"/>
      <line x1="380" y1="340" x2="420" y2="340" stroke="#64ffda" strokeWidth="2" opacity="0.5"/>
      <line x1="385" y1="350" x2="415" y2="350" stroke="#64ffda" strokeWidth="2" opacity="0.5"/>
    </g>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-screen`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount section */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-gray-500">Unlock New Heights with</span>{" "}
            <span className="text-white">NexGen</span>
          </p>
        </div>

        {/* Main heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Leading the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Future</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          of IT Solutions
        </h1>
        
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          NexGen IT Services
        </h1>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts leverages innovative methodologies to provide
          top-notch IT solutions tailored to meet your business needs, enhancing efficiency and growth.
        </p>
      </div>

      {/* Right side with animation */}
      <div className={`flex-1 flex ${styles.flexCenter} relative my-10 md:my-0`}>
        <div className="w-[100%] h-[120%] relative z-[5] md:ml-10">
          <BusinessAnimation />
        </div>

        {/* Gradient effects */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Mobile Get Started button */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;




