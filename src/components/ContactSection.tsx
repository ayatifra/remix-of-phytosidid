import { MessageCircle, MapPin, Phone, Mail, Clock, Send, User } from "lucide-react";

const contactItems = [
  { icon: MapPin, title: "Adresse", content: "Akabar 139, Av. Hassan II,\nAit Melloul 86152, Maroc" },
  { icon: Phone, title: "Téléphone", content: "05 28 24 37 64", href: "tel:0528243764" },
  { icon: Mail, title: "Email", content: "contact@phytosidid.com", href: "mailto:contact@phytosidid.com" },
  { icon: Clock, title: "Horaires", content: "Lun - Sam : 8h00 - 12h00\n& 14h00 - 18h00" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 lg:py-32 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-phyto-50 text-phyto-700 rounded-full text-sm font-semibold uppercase tracking-wider">
          <MessageCircle className="w-4 h-4" /> Contact
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Parlons de <span className="text-phyto-600 font-playfair italic">vos cultures</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Notre équipe dévouée se tient à votre disposition pour vous conseiller et vous accompagner à chaque étape.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Infos contact - carte verte */}
        <div className="bg-phyto-600 rounded-3xl p-8 lg:p-10 text-primary-foreground flex flex-col">
          <h3 className="text-2xl font-bold">Informations de contact</h3>
          <p className="mt-4 text-phyto-100">
            N'hésitez pas à nous contacter pour toute demande d'information ou de devis.
          </p>

          <div className="mt-8 space-y-6 flex-1">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-phyto-100 text-sm mt-1 hover:text-white transition-colors whitespace-pre-line"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-phyto-100 text-sm mt-1 whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire - carte blanche */}
        <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-border">
          <h3 className="text-2xl font-bold text-foreground">Envoyez-nous un message</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = encodeURIComponent(String(data.get("name") || ""));
              const subject = encodeURIComponent("Contact via site web");
              const body = encodeURIComponent(
                `Nom: ${data.get("name")}\nTéléphone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
              );
              window.location.href = `mailto:contact@phytosidid.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-phyto-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-phyto-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="vous@exemple.com"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-phyto-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Décrivez votre demande..."
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-phyto-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-phyto-600 text-white font-semibold rounded-xl hover:bg-phyto-700 transition-colors shadow-sm"
            >
              <Send className="w-5 h-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
