import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export const metadata = {
  title: "MLBB Hero Guide",
  description:
    "Complete Mobile Legends Bang Bang hero guides, builds, and strategies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        {/* Dynamic background with animated gradients */}
        <div className="fixed inset-0 -z-10">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0b132b] to-[#1a1f3a]"></div>

          {/* Animated floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#1fab89]/10 to-[#06d6a0]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#4fd1c7]/8 to-[#1fab89]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-[#ffd700]/5 to-[#06d6a0]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
              linear-gradient(rgba(31, 171, 137, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 171, 137, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1fab89]/30 to-transparent"></div>
        </div>

        <Navbar />

        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
