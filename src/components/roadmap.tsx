import { Rocket, Zap, Globe } from "lucide-react";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-20 flex items-center justify-center bg-gradient-to-b from-green-100 to-orange-100"
    >
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Roadmap <span className="text-green-600">🗺️🚀</span>
        </h2>
        <div className="space-y-8">
          <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="flex-none">
              <Rocket className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2 text-gray-800">
                Phase 1: Launch 🚀
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Website Launch - You are here! 🎉</li>
                <li>Social Media Setup - Join the SADHINU army! 💪</li>
                <li>Community Building - Let us grow together! 🌱</li>
                <li>Token Launch - To the moon! 🌕</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="flex-none">
              <Zap className="w-10 h-10 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2 text-gray-800">
                Phase 2: Growth ⚡
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Marketing Campaign - Spread the word! 📣</li>
                <li>Exchange Listings - More ways to buy! 📈</li>
                <li>Partnership Development - Stronger together! 🤝</li>
                <li>Community Events - Lets party! 🎊</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="flex-none">
              <Globe className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2 text-gray-800">
                Phase 3: Expansion 🌍
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>NFT Collection - Own a piece of SADHINU! 🖼️</li>
                <li>Major Exchange Listings - Going big! 🏆</li>
                <li>Mobile App Development - SADHINU in your pocket! 📱</li>
                <li>Global Marketing - SADHINU worldwide! 🌎</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
