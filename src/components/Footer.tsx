import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-phyto-950 text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/06/logo-phytosidid-png-1.png?w=500&ssl=1"
              alt="Phyto Sidid"
              className="h-14 w-auto object-contain rounded-lg"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div>
              <span className="text-xl font-bold">Phyto Sidid</span>
              <p className="text-[10px] uppercase tracking-widest text-phyto-400">Intrants Agricoles</p>
            </div>
          </div>
          <p className="text-phyto-300 text-sm leading-relaxed">
            Votre partenaire de confiance pour des solutions agricoles innovantes et durables au Maroc depuis 1973.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-6">Nos Produits</h4>
          <ul className="space-y-3">
            {["Engrais & Fertilisants", "Protection des Cultures", "Semences Agricoles", "Agro-Équipement", "Biostimulants"].map((l) => (
              <li key={l}><a href="#produits" className="text-phyto-300 hover:text-phyto-400 text-sm transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-6">Entreprise</h4>
          <ul className="space-y-3">
            {[
              { label: "À Propos", href: "#apropos" },
              { label: "Nos Chiffres", href: "#chiffres" },
              { label: "Contact", href: "#contact" },
              { label: "Carrières", href: "#" },
              { label: "Blog", href: "#" },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="text-phyto-300 hover:text-phyto-400 text-sm transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-6">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-phyto-300 text-sm">
              <MapPin className="w-4 h-4 text-phyto-500 flex-shrink-0" />
              Akabar 139, Av. Hassan II, Ait Melloul
            </li>
            <li>
              <a href="tel:0528243764" className="flex items-center gap-3 text-phyto-300 hover:text-phyto-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-phyto-500 flex-shrink-0" /> 05 28 24 37 64
              </a>
            </li>
            <li>
              <a href="mailto:contact@phytosidid.com" className="flex items-center gap-3 text-phyto-300 hover:text-phyto-400 text-sm transition-colors">
                <Mail className="w-4 h-4 text-phyto-500 flex-shrink-0" /> contact@phytosidid.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-phyto-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-phyto-400 text-sm">© {new Date().getFullYear()} Phyto Sidid. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
