import { ArrowRight, PlayCircle, Leaf, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Agriculture marocaine" className="w-full h-full object-cover" />
        <div className="hero-gradient absolute inset-0" />
        <div className="pattern-overlay absolute inset-0" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 right-10 w-20 h-20 rounded-full bg-phyto-400/10 animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-14 h-14 rounded-full bg-phyto-300/10 animate-float hidden lg:block" style={{ animationDelay: "0.3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-phyto-200 text-sm font-medium">
                <span className="w-2 h-2 bg-phyto-400 rounded-full animate-pulse" />
                Depuis 1973 au Maroc
              </span>
            </div>

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight" style={{ animationDelay: "0.1s" }}>
              Cultivons
              <span className="font-playfair italic text-phyto-300"> l'avenir </span>
              <br />de l'agriculture
            </h1>

            <p className="animate-fade-in-up text-lg sm:text-xl text-phyto-100/90 max-w-xl leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Phyto Sidid, votre partenaire de confiance pour des solutions agricoles innovantes et durables. Des intrants de qualité pour une agriculture performante.
            </p>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#produits" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-phyto-500 hover:bg-phyto-600 text-primary-foreground font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Nos Produits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#apropos" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-primary-foreground font-semibold rounded-2xl hover:bg-primary-foreground/20 transition-all">
                <PlayCircle className="w-5 h-5" />
                Découvrir
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-in-up flex items-center gap-8 pt-4" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "50+", label: "Ans d'expérience" },
                { value: "1000+", label: "Agriculteurs" },
                { value: "4", label: "Catégories" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-12 bg-primary-foreground/20" />}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-xs text-phyto-200/70 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={heroImage} alt="Produits Phyto Sidid" className="w-full h-full object-cover" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-phyto-500 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-primary-foreground font-semibold text-sm">Agriculture Durable</div>
                    <div className="text-phyto-200 text-xs">Solutions écologiques</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-phyto-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-primary-foreground font-semibold text-sm">Qualité Certifiée</div>
                    <div className="text-phyto-200 text-xs">Normes internationales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#apropos" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
