import HeroGrid from "../components/HeroGrid.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative mb-12">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1fab89]/10 via-[#4fd1c7]/5 to-[#06d6a0]/10 rounded-3xl blur-2xl opacity-60"></div>

        {/* Content container */}
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-[#0a0f1c]/40 via-[#1a1f3a]/30 to-[#0a0f1c]/40 rounded-3xl border border-[#1fab89]/20 shadow-2xl overflow-hidden">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1fab89]/50 to-transparent"></div>

          {/* Main hero content */}
          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 flex items-center gap-4 flex-wrap">
              <span className="bg-gradient-to-r from-[#ffa500] via-[#ffd700] to-[#ffb347] bg-clip-text text-transparent drop-shadow-2xl">
                Thorfinn's
              </span>
              <img
                src="/mlbb-logo.png"
                alt="Mobile Legends Bang Bang"
                className="h-12 sm:h-16 lg:h-20 w-auto filter drop-shadow-2xl"
              />
              <span className="bg-gradient-to-r from-[#ffa500] via-[#ffd700] to-[#ffb347] bg-clip-text text-transparent drop-shadow-2xl">
                Guide
              </span>
            </h1>

            {/* Decorative line under title */}
            <div className="flex items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#1fab89]"></div>
                <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#1fab89] to-[#06d6a0]"></div>
                <div className="w-1 h-1 bg-[#4fd1c7] rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#06d6a0] to-transparent"></div>
              </div>
            </div>

            {/* Enhanced subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#b0bec5] leading-relaxed font-medium max-w-3xl">
              Master your favorite{" "}
              <span className="text-[#1fab89] font-bold">
                Mobile Legends Bang Bang
              </span>{" "}
              heroes with my comprehensive guides gathered from Experience and
              Skill
            </p>
          </div>

          {/* Bottom gradient border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06d6a0]/30 to-transparent"></div>
        </div>
      </div>

      {/* Your existing HeroGrid component */}
      <HeroGrid />
    </div>
  );
}
