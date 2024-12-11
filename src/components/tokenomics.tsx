import { Percent, Wallet, BadgeDollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="py-20 px-4 flex items-center justify-center bg-gradient-to-b from-orange-100 to-green-100"
    >
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Tokenomics <span className="text-green-600">💪💰</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Percent className="w-8 h-8 text-green-600" />
              <CardTitle className="text-orange-400">0% Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                NO TAX for smooth trading experience 🚀
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Wallet className="w-8 h-8 text-green-600" />
              <CardTitle className="text-orange-400">999M Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                999 million SADHINU 💎
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <BadgeDollarSign className="w-8 h-8 text-green-600" />
              <CardTitle className="text-orange-400">LP Locked</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Liquidity locked for 6 months 🔒</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="w-8 h-8 text-green-600" />
              <CardTitle className="text-orange-400">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">100% community driven project 🌟</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
