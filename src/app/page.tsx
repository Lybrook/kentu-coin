import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp, Smartphone, Lock, Globe } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Send and receive crypto instantly with minimal fees",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Military-grade encryption protects your assets",
    },
    {
      icon: TrendingUp,
      title: "Mining Support",
      description: "Manage your mining rigs and track earnings in real-time",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your wallet anytime, anywhere from any device",
    },
    {
      icon: Lock,
      title: "Private Keys",
      description: "You control your private keys, not us",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade crypto across borders with ease",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-[#D8BFD8]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#003153] flex items-center justify-center text-[#FFC72C] font-bold">
              KW
            </div>
            <span className="text-xl font-bold text-[#003153] hidden sm:inline" style={{ fontFamily: "var(--font-serif)" }}>
              Kenyan Wallet
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth">
              <Button variant="outline" className="border-[#003153] text-[#003153] hover:bg-slate-100">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-[#003153] hover:bg-[#001a2e] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#003153] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your Crypto Wallet for Kenya
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Secure, fast, and designed for Kenyan users. Manage your crypto assets, mine digital currencies, and track market trends all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth">
                <Button className="bg-[#003153] hover:bg-[#001a2e] text-white font-semibold py-6 h-auto text-lg w-full sm:w-auto">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-[#003153] text-[#003153] hover:bg-slate-100 font-semibold py-6 h-auto text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#003153]/10 to-[#FFC72C]/10 rounded-2xl p-8 border-2 border-[#003153]/20">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">Total Balance</span>
                    <span className="text-xs bg-blue-50 text-[#003153] px-3 py-1 rounded-full">Live</span>
                  </div>
                  <p className="text-3xl font-bold text-[#003153]" style={{ fontFamily: "var(--font-serif)" }}>
                    $12,450.50
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-600">BTC</p>
                        <p className="font-bold text-[#003153]">0.35</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">ETH</p>
                        <p className="font-bold text-[#003153]">2.45</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">KES</p>
                        <p className="font-bold text-[#003153]">612.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#003153] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why Choose Kenyan Wallet?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Built specifically for Kenyan crypto enthusiasts and miners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="border-2 border-[#003153]/20 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#003153]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003153] mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#003153] to-[#001a2e] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of Kenyan crypto users managing their assets securely
          </p>
          <Link href="/auth">
            <Button className="bg-[#FFC72C] hover:bg-yellow-500 text-[#003153] font-semibold py-6 h-auto text-lg px-8">
              Create Your Wallet Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D8BFD8]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#003153] mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#003153]">Features</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#003153] mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#003153]">About</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#003153] mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#003153]">Privacy</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Terms</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#003153] mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#003153]">Twitter</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Discord</Link></li>
                <li><Link href="#" className="hover:text-[#003153]">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Kenyan Wallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
