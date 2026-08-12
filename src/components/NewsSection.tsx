import { useState } from "react";
import { Newspaper, ArrowRight, ChevronUp } from "lucide-react";

const articles = [
  {
    id: "siam-2024",
    title: "Phytosidid au Salon International de l’Agriculture au Maroc SIAM 2024",
    image:
      "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/06/GGGGGG-scaled.webp?resize=2048%2C1199&ssl=1",
    alt: "Stand Phytosidid au Salon International de l’Agriculture au Maroc SIAM 2024",
    paragraphs: [
      "Nous, chez Phytosidid, sommes fiers de partager notre récente participation au Salon International de l’Agriculture au Maroc. Cet événement majeur a été une opportunité unique pour nous de mettre en avant nos solutions novatrices dans le domaine de l’agriculture.",
      "Notre stand a été le lieu d’échanges dynamiques avec les acteurs clés du secteur, où nous avons présenté nos produits et nos technologies de pointe. De la protection des cultures à la gestion durable des ressources, nous avons démontré notre engagement envers l’innovation pour répondre aux besoins spécifiques des agriculteurs marocains.",
      "Au-delà de la présentation de nos produits, nous avons également mis l’accent sur la collaboration et le partenariat. Nous avons saisi cette occasion pour rencontrer des partenaires potentiels et explorer de nouvelles opportunités de coopération dans le but de soutenir le développement durable de l’agriculture au Maroc.",
      "La participation de Phytosidid au Salon International de l’Agriculture au Maroc en 2024 a été un succès retentissant, renforçant notre engagement envers l’industrie agricole marocaine et notre détermination à continuer d’innover pour son développement.",
    ],
  },
  {
    id: "morocco-berry",
    title: "Notre Participation à la Morocco Berry Conference : Une Opportunité Inestimable",
    image:
      "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/1699622211834.webp?w=1600&ssl=1",
    alt: "Phytosidid à la Morocco Berry Conference",
    paragraphs: [
      "Notre participation à la Morocco Berry Conference est une occasion unique de rencontrer les professionnels de la production, de la transformation et de l’exportation des baies. Cet événement est une plateforme essentielle pour échanger des idées et des expériences avec des experts du secteur.",
      "Lors de cette conférence, nous aurons l’occasion de présenter un ensemble de solutions innovantes de nouvelle génération. Ces solutions couvrent divers aspects tels que la fertilisation, les techniques de traitement biologique et intégré. Notre objectif est de partager nos dernières avancées et de démontrer comment elles peuvent améliorer la production de baies.",
      "Cet événement est également une excellente opportunité pour rencontrer nos agriculteurs et clients. La Morocco Berry Conference nous permet d’établir des liens solides et de renforcer notre collaboration avec ceux qui sont au cœur de notre activité. En discutant directement avec les agriculteurs, nous pouvons mieux comprendre leurs besoins et adapter nos solutions en conséquence.",
      "Pour notre équipe, la Morocco Berry Conference est une chance précieuse d’échanger des expériences avec les autres participants. Chaque rencontre est une occasion d’apprendre quelque chose de nouveau et de découvrir des approches différentes. Ces échanges sont essentiels pour notre développement continu et pour rester à la pointe de l’innovation dans notre domaine.",
      "En conclusion, la participation à la Morocco Berry Conference est une opportunité inestimable pour notre équipe. Elle nous permet de rencontrer des professionnels, de présenter nos solutions innovantes, de renforcer nos relations avec les agriculteurs et les clients, et d’échanger des expériences avec les participants. Cette conférence est une étape cruciale dans notre quête d’innovation et de croissance dans le secteur des baies.",
    ],
  },
];

const NewsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="actualites" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-phyto-50 text-phyto-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" /> Actualités
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto">
            Découvrez nos actualités et événements
          </h2>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {articles.map((article) => {
            const open = openId === article.id;
            return (
              <article
                key={article.id}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {article.title}
                  </h3>
                  {open && (
                    <div className="mt-6 space-y-4 animate-fade-in-up">
                      {article.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground text-sm sm:text-base leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setOpenId(open ? null : article.id)}
                    className="mt-6 inline-flex items-center gap-2 text-phyto-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {open ? (
                      <>
                        Réduire <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Lire la suite <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
