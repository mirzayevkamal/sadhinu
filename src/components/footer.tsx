export function Footer() {
  return (
    <footer className="bg-gray-900 flex items-center justify-center text-gray-200 py-12">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="font-bold text-xl mb-4">About SADHINU</h3>
            <p className="text-gray-400">
              Sad Hulk Inu is a community-driven meme token combining the
              strength of Hulk with the cuteness of Shiba Inu.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Audit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Join Our Community</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://x.com/SADHINU">
                <img src="/x.png" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="https://t.me/sadhulkinu">
                <img src="/telegram.png" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Sad Hulk Inu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
