import { useEffect, useRef, useState } from "react";
import { Target, Eye, Users, TrendingUp, Leaf, ShieldCheck, Lightbulb, Heart, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 1000, suffix: "+", label: "Agriculteurs accompagnés" },
  { icon: TrendingUp, value: 50, suffix: "+", label: "Années d'expérience" },
  { icon: Leaf, value: 200, suffix: "+", label: "Produits disponibles" },
  { icon: ShieldCheck, value: 4, suffix: "", label: "Gammes de produits" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Recherche constante de nouvelles solutions agricoles" },
  { icon: Heart, title: "Proximité", desc: "Accompagnement personnalisé des agriculteurs" },
  { icon: ShieldCheck, title: "Qualité", desc: "Produits certifiés aux normes internationales" },
  { icon: Leaf, title: "Durabilité", desc: "Solutions respectueuses de l'environnement" },
];

const timeline = [
  { year: "1973", title: "Origines", desc: "Début d'une expérience solide et probante dans le domaine des intrants agricoles" },
  { year: "2000", title: "Fondation", desc: "Création de PHYTO SIDID à Ouled Teima-Taroudant, pionnier des intrants agricoles au Maroc" },
  { year: "Expansion", title: "Gamme Complète", desc: "Produits phytosanitaires, engrais, fertilisants, amendements, semences, matériel agricole et systèmes d'irrigation" },
  { year: "Aujourd'hui", title: "Expertise & Proximité", desc: "Une équipe dévouée, expertise en développement technique et commercial, au service des agriculteurs" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-4xl lg:text-5xl font-bold text-phyto-600">{count}{suffix}</div>;
}

const AboutSection = () => (
  <>
    {/* About */}
    <section id="apropos" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-phyto-50 text-phyto-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Target className="w-4 h-4" /> À Propos
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Plus de <span className="text-phyto-600 font-playfair italic">50 ans</span> d'expertise
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            PHYTO SIDID est une entreprise marocaine fondée en 2000 à Ouled Teima-Taroudant, bénéficiant d'une expérience solide remontant à 1973. Pionniers dans les intrants agricoles, nous proposons une gamme complète : produits phytosanitaires, engrais, fertilisants, amendements organiques, semences, matériel agricole, outillages et systèmes d'irrigation.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border">
            <div className="w-14 h-14 bg-phyto-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-phyto-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Notre équipe dévouée possède une expertise inédite en développement technique et commercial, et se tient à votre disposition pour vous conseiller et vous accompagner à chaque étape de vos cultures, en vous offrant des solutions de la meilleure qualité.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border">
            <div className="w-14 h-14 bg-phyto-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-phyto-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chez PHYTO SIDID, notre passion pour l'agriculture nous anime, et nous nous engageons durablement à vous offrir des solutions de la meilleure qualité pour répondre à vos besoins et exigences.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <div key={i} className="bg-phyto-600 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">{v.title}</h4>
              <p className="text-sm text-phyto-50">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-phyto-500 to-phyto-700 hidden md:block rounded-full" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <div key={i} className="relative flex items-center md:gap-8">
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className={`${i === timeline.length - 1 ? "bg-phyto-600 text-primary-foreground" : "bg-card border border-border"} p-6 rounded-2xl shadow-lg inline-block`}>
                    <span className={`font-bold text-2xl ${i === timeline.length - 1 ? "text-phyto-200" : "text-phyto-600"}`}>{t.year}</span>
                    <h4 className={`font-semibold mt-2 ${i === timeline.length - 1 ? "text-primary-foreground" : "text-foreground"}`}>{t.title}</h4>
                    <p className={`text-sm mt-2 ${i === timeline.length - 1 ? "text-phyto-100" : "text-muted-foreground"}`}>{t.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-phyto-700 rounded-full items-center justify-center absolute left-1/2 -translate-x-1/2 shadow-lg border-4 border-background z-10 animate-pulse-green">
                  <Star className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section id="chiffres" className="py-20 bg-phyto-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-phyto-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-8 h-8 text-phyto-400" />
              </div>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-phyto-300 text-sm mt-2 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutSection;
