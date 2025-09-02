// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-[#f0f0f0] mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 text-[#ffffff]">MLBB Hero Guide</h3>
          <p className="text-[#b0bec5] mb-4">
            Your ultimate resource for Mobile Legends Bang Bang strategies
          </p>
          <div className="text-sm text-[#b0bec5]">
            <p>© 2024 MLBB Guide. All rights reserved.</p>
            <p className="mt-1">
              Mobile Legends: Bang Bang is a trademark of Moonton Games.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}