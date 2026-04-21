import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  FileText, 
  CheckCircle, 
  Mic, 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Factory, 
  Monitor, 
  MapPin,
  ArrowRight,
  Building2,
  ChevronRight,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  PlayCircle,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ccff00] rounded-xl flex items-center justify-center text-zinc-950 font-bold text-xl transform -rotate-3">
            K
          </div>
          <span className="font-bold text-2xl text-white tracking-tight font-display">Karo Pitch</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-zinc-400 hover:text-[#ccff00] font-medium transition-colors">About</a>
          <a href="#how-it-works" className="text-zinc-400 hover:text-[#ccff00] font-medium transition-colors">How it Works</a>
          <a href="#investors" className="text-zinc-400 hover:text-[#ccff00] font-medium transition-colors">Investors</a>
          <a href="#startups" className="text-zinc-400 hover:text-[#ccff00] font-medium transition-colors">Startups</a>
        </div>
        <div className="flex items-center">
          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:-translate-y-0.5">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Grid & Glows */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ccff00] rounded-full opacity-10 blur-[120px] mix-blend-screen"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-[120px] mix-blend-screen"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium text-sm mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#ccff00] animate-pulse"></span>
            <span>The Stage is Yours.</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-8 uppercase">
            Pitch Your <br/>Startup to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Top Investors.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light max-w-lg">
            Karo Pitch connects Bharat's most disruptive founders with leading investors through curated pitch events and a discovery platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)] flex items-center justify-center gap-2 group hover:-translate-y-1">
              Apply to Pitch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-1">
              Explore Startups
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00] to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
            <img 
              src="https://picsum.photos/seed/youth-startup/800/1000" 
              alt="Founders pitching to investors" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full grayscale-[20%] contrast-125"
              referrerPolicy="no-referrer"
            />
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 transform -rotate-2">
              <div className="w-12 h-12 bg-[#ccff00]/20 rounded-full flex items-center justify-center text-[#ccff00]">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Funding Raised</p>
                <p className="text-2xl font-bold text-white font-display">₹50Cr+</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 transform rotate-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://picsum.photos/seed/investor${i+10}/100/100`} alt="Investor" className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white font-display">50+ Investors</p>
                <p className="text-xs text-[#ccff00]">Active right now</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AboutKaroPitch = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">
          Bridging the Gap for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Bharat's Founders</span>
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
          Thousands of founders are building amazing businesses but lack access to investors. <strong className="text-white font-medium">Karo Pitch</strong> connects these founders with investors through curated pitch events and a discovery platform. We believe the next unicorn won't just come from a metro city, but from the heart of India.
        </p>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { icon: FileText, title: "Apply", desc: "Submit your pitch deck." },
    { icon: CheckCircle, title: "Shortlist", desc: "Get reviewed by experts." },
    { icon: Mic, title: "Pitch Live", desc: "Present to top investors." },
    { icon: TrendingUp, title: "Scale", desc: "Raise funds & grow." }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display uppercase tracking-tighter">How It Works</h2>
          <p className="text-xl text-zinc-400 max-w-2xl">Your journey from application to funding in four simple steps.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-800/50 hover:border-[#ccff00]/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 font-display group-hover:text-[#ccff00]/10 transition-colors">
                0{index + 1}
              </div>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-[#ccff00] transition-colors duration-300">
                <step.icon className="w-8 h-8 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10 font-display">{step.title}</h3>
              <p className="text-zinc-400 relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoCanApply = () => {
  const categories = [
    { icon: ShoppingBag, name: "D2C Brands", color: "from-pink-500 to-rose-500" },
    { icon: Users, name: "Consumer", color: "from-blue-500 to-cyan-500" },
    { icon: Factory, name: "MSMEs", color: "from-orange-500 to-amber-500" },
    { icon: Monitor, name: "SaaS", color: "from-purple-500 to-indigo-500" },
    { icon: Building2, name: "Manufacturing", color: "from-emerald-500 to-teal-500" },
    { icon: MapPin, name: "Bharat-focused", color: "from-[#ccff00] to-lime-500" },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display uppercase tracking-tighter">Who Can Apply?</h2>
            <p className="text-xl text-zinc-400">Real businesses solving real problems.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all flex flex-col items-start group cursor-pointer overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestorsSection = () => {
  // Creating a long array for continuous marquee effect
  const investors = Array.from({ length: 12 }).map((_, i) => i + 1);

  return (
    <section id="investors" className="py-32 bg-[#ccff00] text-zinc-950 overflow-hidden relative transform -skew-y-2 my-20">
      <div className="transform skew-y-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display uppercase tracking-tighter">Meet The Investors</h2>
          <p className="text-xl text-zinc-800 max-w-2xl mx-auto font-medium">Pitch directly to top VC funds, angel networks, and family offices actively deploying capital.</p>
        </div>
        
        {/* Marquee Container */}
        <div className="flex overflow-hidden relative w-full border-y border-zinc-950/10 py-10 bg-white/20 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap min-w-full">
            {investors.map((i) => (
              <div key={i} className="flex items-center gap-4 mx-8">
                <img 
                  src={`https://picsum.photos/seed/vc${i}/80/80`} 
                  alt={`Investor ${i}`} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-950 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-lg font-display uppercase">Capital Fund {i}</p>
                  <p className="text-sm font-medium opacity-70">Partner</p>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee whitespace-nowrap min-w-full" aria-hidden="true">
            {investors.map((i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4 mx-8">
                <img 
                  src={`https://picsum.photos/seed/vc${i}/80/80`} 
                  alt={`Investor ${i}`} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-950 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-lg font-display uppercase">Capital Fund {i}</p>
                  <p className="text-sm font-medium opacity-70">Partner</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedStartups = () => {
  const startups = [
    {
      name: "ChaiWala Tech",
      category: "F&B / D2C",
      desc: "Revolutionizing the local chai experience with automated brewing and a tech-enabled supply chain.",
      image: "https://picsum.photos/seed/chai/600/400"
    },
    {
      name: "Bharat Agri",
      category: "AgriTech",
      desc: "Empowering farmers with AI-driven crop advisory and direct-to-market selling platforms.",
      image: "https://picsum.photos/seed/agri/600/400"
    },
    {
      name: "Desi Threads",
      category: "D2C Apparel",
      desc: "Bringing authentic Indian handlooms to the global market with a modern twist and sustainable practices.",
      image: "https://picsum.photos/seed/apparel/600/400"
    }
  ];

  return (
    <section id="startups" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display uppercase tracking-tighter">Featured Startups</h2>
            <p className="text-xl text-zinc-400">Discover the disruptive businesses on our platform.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#ccff00] font-bold hover:text-white transition-colors uppercase tracking-wide">
            View All <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#ccff00]/50 transition-all duration-500 group"
            >
              <div className="h-64 overflow-hidden relative p-4">
                <div className="absolute inset-0 bg-zinc-800"></div>
                <img 
                  src={startup.image} 
                  alt={startup.name} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0 relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 bg-zinc-950/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#ccff00] z-20 border border-white/10 uppercase tracking-wider">
                  {startup.category}
                </div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{startup.name}</h3>
                <p className="text-zinc-400 mb-8 line-clamp-2">{startup.desc}</p>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-[#ccff00] text-white hover:text-zinc-950 font-bold transition-colors flex items-center justify-center gap-2 group/btn">
                  View Profile <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutKaroStartup = () => (
  <section className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 border border-white/5 relative overflow-hidden">
        {/* Background graphic */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        
        <div className="md:w-1/2 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-widest mb-8">
            Backed by KaroStartup
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
            India's Leading Startup Storytelling Platform
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed mb-10">
            KaroStartup has published thousands of startup stories, empowering India's founder ecosystem. With Karo Pitch, we are taking the next step to directly connect founders with the capital they need to disrupt markets.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-4xl font-bold text-[#ccff00] mb-2 font-display">5K+</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Stories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#ccff00] mb-2 font-display">100K</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Community</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#ccff00] mb-2 font-display">5 Yrs</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Impact</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative z-10 w-full">
          <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer border border-white/10">
            <img 
              src="https://picsum.photos/seed/karostartup-community/800/800" 
              alt="KaroStartup Community" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center group-hover:bg-zinc-950/20 transition-colors">
              <div className="w-20 h-20 bg-[#ccff00] rounded-full flex items-center justify-center text-zinc-950 shadow-[0_0_30px_rgba(204,255,0,0.4)] group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ccff00]/10"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 font-display uppercase tracking-tighter">
        Ready to <br/><span className="text-[#ccff00]">Pitch?</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
        Join the next cohort of Bharat's most promising startups. Apply now to get your business in front of top investors.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-[#ccff00] text-zinc-950 hover:bg-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(204,255,0,0.5)] uppercase tracking-wide">
          Apply Now
        </button>
        <button className="bg-white/5 text-white hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all hover:-translate-y-1 uppercase tracking-wide backdrop-blur-md">
          Partner With Us
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 text-zinc-500 py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#ccff00] rounded-xl flex items-center justify-center text-zinc-950 font-bold text-xl transform -rotate-3">
              K
            </div>
            <span className="font-bold text-2xl text-white tracking-tight font-display">Karo Pitch</span>
          </div>
          <p className="mb-8 max-w-sm text-lg">
            Empowering Bharat's founders by connecting them with leading investors.
          </p>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ccff00] hover:text-zinc-950 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider font-display">Platform</h4>
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-[#ccff00] transition-colors">About Us</a></li>
            <li><a href="#how-it-works" className="hover:text-[#ccff00] transition-colors">How it Works</a></li>
            <li><a href="#startups" className="hover:text-[#ccff00] transition-colors">Startups</a></li>
            <li><a href="#investors" className="hover:text-[#ccff00] transition-colors">Investors</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider font-display">Contact</h4>
          <ul className="space-y-4">
            <li><a href="mailto:business@karostartup.com" className="hover:text-[#ccff00] transition-colors">business@karostartup.com</a></li>
            <li><a href="tel:+919315194393" className="hover:text-[#ccff00] transition-colors">+91 9315194393</a></li>
            <li className="pt-4"><a href="https://karostartup.com" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-[#ccff00] transition-colors border-b border-white/20 pb-1">karostartup.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} KaroStartup. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-[#ccff00] selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <AboutKaroPitch />
        <HowItWorks />
        <WhoCanApply />
        <InvestorsSection />
        <FeaturedStartups />
        <AboutKaroStartup />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
