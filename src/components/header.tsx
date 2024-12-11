'use client'
import { MenuIcon } from 'lucide-react'
import { Button } from './button'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

export function Header() {
  return (
    <header className="sticky px-4 top-0 z-50 w-full flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <img
              src="/logo-trans.png"
              alt="SADHINU Logo"
              className="h-[57px] w-[57px] md:h-10 md:w-10"
            />
            <span className="text-[30px] font-bold md:text-xl text-orange-500">SADHINU</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors text-[#000] text-[18px] text-[#000] font-bold uppercase">About</a>
            <a href="#tokenomics" className="transition-colors text-[#000] text-[18px] text-[#000] font-bold uppercase">Tokenomics</a>
            <a href="#roadmap" className="transition-colors text-[#000] text-[18px] text-[#000] font-bold uppercase">Roadmap</a>
            <a href="https://t.me/sadhulkinu" className="transition-colors text-[#000] text-[18px] text-[#000] font-bold uppercase">Community</a>
          </nav>
          <div className="flex items-center space-x-2">
            <Button onClick={() => window.open("https://dexscreener.com/solana/6v6z1efd6zw3wre9fzyoa3huepucj57ft9xmsd3fmoon", "_blank")} className="hidden md:flex text-[20px] bg-orange-500 hover:bg-green-600 font-bold uppercase" variant={"outline"}>Buy SADHINU</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className='bg-[#fff]' side="right">
                <nav className="flex flex-col space-y-4">
                  <a href="#about" className="text-[30px] text-[#3C3D37] uppercase font-bold  font-medium">About</a>
                  <a href="#tokenomics" className="text-[30px] text-[#3C3D37] uppercase font-bold font-medium">Tokenomics</a>
                  <a href="#roadmap" className="text-[30px] text-[#3C3D37] uppercase font-bold font-medium">Roadmap</a>
                  <a href="https://t.me/sadhulkinu" className="text-[30px] pb-6 text-[#3C3D37] uppercase font-bold font-medium">Community</a>
                  <Button onClick={() => window.open("https://dexscreener.com/solana/6v6z1efd6zw3wre9fzyoa3huepucj57ft9xmsd3fmoon", "_blank")} className="w-full hover:bg-green-600 mt-6 text-[20px] bg-green-500 font-bold uppercase" variant={"outline"}>Buy SADHINU</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

