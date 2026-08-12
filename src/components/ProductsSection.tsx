import { useState } from "react";
import { Package, Scissors, Bug, FlaskConical, Sprout, ChevronDown, List, MousePointerClick } from "lucide-react";
import acideNitriqueImg from "@/assets/acide-nitrique.png";
import acidePhosphoriqueImg from "@/assets/acide-phosphorique.png";
import acideSulfuriqueImg from "@/assets/acide-sulfurique.png";
import sulfateCuivreImg from "@/assets/sulfate-cuivre.png";
import sulfateFerImg from "@/assets/sulfate-fer.png";
import sulfateManganeseImg from "@/assets/sulfate-manganese.png";
import sulfateZincImg from "@/assets/sulfate-zinc.png";
import ammonitrateImg from "@/assets/ammonitrate.png";
import phosphateUreeImg from "@/assets/phosphate-uree.png";
import sulfateAmmoniaqueImg from "@/assets/sulfate-ammoniaque.png";
import ureeCristallineImg from "@/assets/uree-cristalline.png";
import chlorurePotassiumImg from "@/assets/chlorure-potassium.png";
import chlorureCalciumImg from "@/assets/chlorure-calcium.png";
import multiKPhastImg from "@/assets/multi-k-phast.png";
import nitrateCalciumImg from "@/assets/nitrate-calcium.png";
import nitrateMagnesieImg from "@/assets/nitrate-magnesie.png";
import nitratePotasseImg from "@/assets/nitrate-potasse.png";
import map12610Img from "@/assets/map-12-61-0.png";
import mpk005234Img from "@/assets/mpk-00-52-34.png";
import sulfateMagnesiumImg from "@/assets/sulfate-magnesium.png";
import sulfatePotasseImg from "@/assets/sulfate-potasse.png";
import maisFortImg from "@/assets/mais-fort.png";
import topLegumineusesImg from "@/assets/top-legumineuses.png";
import topOliver2Img from "@/assets/top-oliver-2.png";
import azoPhosImg from "@/assets/azo-phos.png";
import fasterNpk1Img from "@/assets/faster-npk-1.png";
import fasterNpk2Img from "@/assets/faster-npk-2.png";
import fasterNpk3Img from "@/assets/faster-npk-3.png";
import nitroFeedImg from "@/assets/nitro-feed.png";
import crissol101040Img from "@/assets/crissol-10-10-40.png";
import crissol134013Img from "@/assets/crissol-13-40-13.png";
import crissol202020Img from "@/assets/crissol-20-20-20.png";
import nergeticDzPlusAsset from "@/assets/nergetic-dz-plus.png.asset.json";
import plusmasterAsset from "@/assets/plusmaster.png.asset.json";
import oxymil50wpImg from "@/assets/oxymil-50wp.png";
import prioriTopImg from "@/assets/priori-top.png";
import revus250scImg from "@/assets/revus-250-sc.jpg";
import ridomilGoldRImg from "@/assets/ridomil-gold-r.png";
import score250ecImg from "@/assets/score-250-ec.png";
import topas100ecImg from "@/assets/topas-100-ec.png";
import cuChelateImg from "@/assets/cu-chelate.png";
import cuGlucoImg from "@/assets/cu-gluco.png";
import k2oPhosphiteImg from "@/assets/k2o-phosphite.png";
import solquelLKSiImg from "@/assets/solquel-l-k-si.png";
import prolianceQuattroImg from "@/assets/proliance-quattro.webp";
import touchdownSystem4Img from "@/assets/touchdown-system-4.jpg";
import actara25wgAsset from "@/assets/actara-25wg.png.asset.json";
import askariAsset from "@/assets/askari.png.asset.json";
import califEnergyAsset from "@/assets/calif-energy.png.asset.json";
import minectoProAsset from "@/assets/minecto-pro.png.asset.json";
import numarAsset from "@/assets/numar.png.asset.json";
import phytoilAsset from "@/assets/phytoil.png.asset.json";
import plesivaAlphaAsset from "@/assets/plesiva-alpha.png.asset.json";
import polysectAsset from "@/assets/polysect.png.asset.json";
import proclaim05sgAsset from "@/assets/proclaim-05sg.png.asset.json";
import vertimecAsset from "@/assets/vertimec.png.asset.json";
import warrior10csAsset from "@/assets/warrior-10cs.png.asset.json";
import solvinovaAsset from "@/assets/solvinova.png.asset.json";
import ceratitisCapitataAsset from "@/assets/ceratitis-capitata.png.asset.json";
import dasineuraOxycoccanaAsset from "@/assets/dasineura-oxycoccana.png.asset.json";
import drosophilaSuzukiiAsset from "@/assets/drosophila-suzukii.png.asset.json";
import tutaAbsolutaAsset from "@/assets/tuta-absoluta.png.asset.json";
import adhesifBlancAsset from "@/assets/adhesif-blanc.png.asset.json";
import adhesifBleuAsset from "@/assets/adhesif-bleu.png.asset.json";
import adhesifJauneAsset from "@/assets/adhesif-jaune.png.asset.json";
import adhesifNoirAsset from "@/assets/adhesif-noir.png.asset.json";
import adhesifRougeAsset from "@/assets/adhesif-rouge.png.asset.json";
import ceraFreeAsset from "@/assets/cera-free.png.asset.json";
import deltaTrapAsset from "@/assets/delta-trap.png.asset.json";
import drosophilaSuzukiiTrapAsset from "@/assets/drosophila-suzukii-trap.png.asset.json";
import algominAsset from "@/assets/algomin.png.asset.json";
import algomin100Asset from "@/assets/algomin-100.png.asset.json";
import aminUpAsset from "@/assets/amin-up.png.asset.json";
import aminonWspAsset from "@/assets/aminon-wsp.png.asset.json";
import betaminAsset from "@/assets/betamin.png.asset.json";
import betamin100Asset from "@/assets/betamin-100.png.asset.json";
import growAPlusAsset from "@/assets/grow-a-plus.png.asset.json";
import radifarmAsset from "@/assets/radifarm.png.asset.json";
import raisolAsset from "@/assets/raisol.png.asset.json";
import rootAPlusAsset from "@/assets/root-a-plus.png.asset.json";
import rootUpAsset from "@/assets/root-up.png.asset.json";
import borZnAsset from "@/assets/bor-zn.png.asset.json";
import boreUpAsset from "@/assets/bore-up.png.asset.json";
import caliboreAsset from "@/assets/calibore.png.asset.json";
import calcineAsset from "@/assets/calcine.png.asset.json";
import ecoBore18Asset from "@/assets/eco-bore-18.png.asset.json";
import folisolMnZnAsset from "@/assets/folisol-mn-zn.png.asset.json";
import growZnMnAsset from "@/assets/grow-znmn.png.asset.json";
import bormaxAsset from "@/assets/bormax.png.asset.json";
import maxMgAsset from "@/assets/max-mg.png.asset.json";
import molybdUpAsset from "@/assets/molybd-up.png.asset.json";
import molyboreAsset from "@/assets/molybore.png.asset.json";
import molycareAsset from "@/assets/molycare.png.asset.json";
import oxypotassAsset from "@/assets/oxypotass.png.asset.json";
import solquelZincAsset from "@/assets/solquel-zinc.png.asset.json";
import solquelLCalciumBoreAsset from "@/assets/solquel-l-calcium-bore.png.asset.json";
import solquelLPotassiumAsset from "@/assets/solquel-l-potassium.png.asset.json";
import ferroquelatoH48Asset from "@/assets/ferroquelato-h48.png.asset.json";
import ferroquelatoS40Asset from "@/assets/ferroquelato-s40.png.asset.json";
import sequestrene138FeAsset from "@/assets/sequestrene-138fe.png.asset.json";
import bimixAsset from "@/assets/bimix.png.asset.json";
import chelatomixAsset from "@/assets/chelatomix.png.asset.json";
import ecoMixAsset from "@/assets/eco-mix.png.asset.json";
import oligoFertMixAsset from "@/assets/oligo-fert-mix.png.asset.json";
import oligoFertPlusAsset from "@/assets/oligo-fert-plus.png.asset.json";
import oligoMixPlusZeroBoreAsset from "@/assets/oligo-mix-plus-zero-bore.png.asset.json";
import oligomixDeltaAsset from "@/assets/oligomix-delta.png.asset.json";
import oligomixplusAsset from "@/assets/oligomixplus.png.asset.json";
import solquelMixEdtaAsset from "@/assets/solquel-mix-edta.png.asset.json";
import eco5Asset from "@/assets/eco-5.png.asset.json";
import mouillaxAsset from "@/assets/mouillax.png.asset.json";
import tecPhAsset from "@/assets/tec-ph.png.asset.json";
import caChelateAsset from "@/assets/ca-chelate.png.asset.json";
import caChelateTexteAsset from "@/assets/ca-chelate-texte.png.asset.json";
import k2oChelateAsset from "@/assets/k2o-chelate.png.asset.json";
import k2oChelateV2Asset from "@/assets/k2o-chelate-v2.png.asset.json";
import solquelLPotassiumChelateAsset from "@/assets/solquel-l-potassium-chelate.png.asset.json";
import znMnChelateAsset from "@/assets/zn-mn-chelate.png.asset.json";
import znmnChelateAsset from "@/assets/znmn-chelate.png.asset.json";

type Product = {

  name: string;
  desc: string;
  category: "agro" | "equipement";
  subcategory?: string;
  engraisGroup?: string;
  protectionGroup?: string;
  complementGroup?: string;
  equipementGroup?: string;
  badge?: string;
  badgeColor?: string;
  icon: any;
  iconColor?: string;
  image?: string;
  composition?: { label: string; value: string }[];
  description?: string;
};

const products: Product[] = [
  // Protection
  { name: "Proliance Quattro", desc: "Herbicide non sélectif à base de Glyphosate -acide 360 g/l, efficace sur un grand nombre d'adventices annuelles et vivaces", category: "agro", subcategory: "protection", protectionGroup: "herbicides", badge: "Herbicide", badgeColor: "bg-red-500", icon: Scissors, image: prolianceQuattroImg, description: "Proliance Quattro est un herbicide non sélectif à base de Glyphosate -acide 360 g/l, efficace sur un grand nombre d'adventices annuelles et vivaces. Grâce à sa pénétration foliaire et sa systémie, Proliance Quattro est absorbé par les parties aériennes des plantes dont il perturbe la respiration, la photosynthèse et la croissance." },
  { name: "Touchdown System 4", desc: "Herbicide total systémique à action ascendante et descendante efficace sur les mauvaises herbes vivaces", category: "agro", subcategory: "protection", protectionGroup: "herbicides", badge: "Herbicide", badgeColor: "bg-red-500", icon: Scissors, image: touchdownSystem4Img, description: "Touchdown System 4 est un herbicide total systémique. Grâce à sa systémie ascendante et descendante, il est transporté dans toute la plante, y compris les racines et les rhizomes des mauvaises herbes vivaces. Par son action en profondeur, il est efficace sur les mauvaises herbes vivaces les plus importantes et les plus nuisibles, ainsi que contre les graminées et dicotylédones annuelles." },
  { name: "Actara® 25 WG", desc: "Insecticide hautement systémique à large spectre, agit par ingestion et par contact sur de nombreux insectes", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: actara25wgAsset.url, description: "Actara® 25 WG est un produit hautement systémique, il agit par ingestion et par contact sur les insectes cibles. Il est doté d'une activité systémique et d'une pénétration rapide dans la plante, soit par les feuilles ou par les racines. Il agit par interférence avec le récepteur nicotine acétyle choline du système nerveux des insectes.\n\nActara® 25 WG a un champ d'activité très large qui lui permet de combattre de nombreuses espèces d'insectes dans la plupart des cultures." },
  { name: "NUMAR 1,8 EC", desc: "Insecticide-Acaricide à base de 18 g/l d'Abamectine, agit par contact et ingestion", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide-Acaricide", badgeColor: "bg-red-500", icon: Bug, image: numarAsset.url, description: "NUMAR 1,8 EC est un produit liquide pour pulvérisation. Il contient de l'abamectine, une matière active produite par fermentation à partir d'un champignon actinomycète vivant dans le sol.\n\nDotée de propriétés acaricides et insecticides, l'abamectine agit par contact et par ingestion. Après son application, elle pénètre et se stocke à l'intérieur de la feuille qu'elle protège contre les formes mobiles d'acariens et les insectes piqueurs pour une longue durée d'action." },
  { name: "Phytoil", desc: "Insecticide-acaricide émulsionnable (EC), mélange complexe d'hydrocarbures à action physique", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide-Acaricide", badgeColor: "bg-red-500", icon: Bug, image: phytoilAsset.url, description: "Phytoil est un insecticide-acaricide émulsionnable (EC) et aussi un mélange complexe d'hydrocarbures obtenu par le traitement d'une fraction de pétrole par de l'hydrogène en présence d'un catalyseur. Il est constitué d'hydrocarbures ayant un nombre de carbone majoritairement compris entre C11 et C25." },
  { name: "Plesiva Alpha™", desc: "Insecticide innovant combinant Cyantraniliprole et Acibenzolar-S-méthyl, double action insecticide et activateur de défense", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: plesivaAlphaAsset.url, description: "Plesiva Alpha est un insecticide innovant combinant deux matières actives, le Cyantraniliprole et l'Acibenzolar-S-méthyl. Cette combinaison unique d'ingrédients actifs fournit une solution révolutionnaire assurant une production de qualité et un retour sur investissement élevé.\n\nLe Cyantraniliprole apporte un nouveau mode d'action pour lutter contre Tuta absoluta. En plus, il assure un excellent contrôle contre les piqueurs suceurs notamment les aleurodes et les thrips.\n\nEn plus de son action insecticide, Plesiva Alpha est un activateur de défense des plantes qui incite la plante à se protéger contre les maladies virales et bactériennes. L'Acibenzolar-S-méthyl est une substance qui initie des réactions de défenses contre divers agresseurs.\n\nEn stimulant les défenses naturelles, cette matière octroie un avantage préventif contre les divers agresseurs. L'Acibenzolar-S-méthyl est caractérisé par une double systémie ; acropétale pour les nouvelles feuilles et basipétale pour les anciennes feuilles et les racines." },
  { name: "POLYSECT", desc: "Insecticide-Acaricide formant un film homogène, action physique par asphyxie sans accoutumance", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide-Acaricide", badgeColor: "bg-red-500", icon: Bug, image: polysectAsset.url, description: "POLYSECT est un Insecticide-Acaricide, il forme un film homogène qui recouvre les insectes, provoquant leur mort par asphyxie. Ainsi, par ce mode d'action physique, les ravageurs ne peuvent pas développer d'accoutumance à ce produit.\n\nPOLYSECT, dans le respect des conditions d'emploi, n'a montré aucun risque inacceptable sur les prédateurs et les insectes utiles ; il s'inscrit parfaitement dans le cadre d'une lutte intégrée. Son indice de sulfonation élevé garantit un très faible risque de phytotoxicité. POLYSECT ne laisse aucun résidu soumis à la réglementation.\n\nMode d'emploi : Verser POLYSECT dans la cuve du pulvérisateur à moitié remplie d'eau. Compléter le remplissage de la cuve avec l'eau. Utiliser l'agitateur de la cuve pour homogénéiser le mélange. Réaliser un mouillage abondant de toutes les parties à traiter avec un appareil à forte pression (35-40 bars) jusqu'à atteindre le point de ruissellement. Ajuster le volume de la bouillie en fonction de la taille des arbres. Veillez à maintenir une bonne homogénéisation pendant tout le traitement." },
  { name: "Proclaim® 05 SG", desc: "Insecticide larvicide de la famille des avermectines, GABA agoniste très efficace contre les lépidoptères", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: proclaim05sgAsset.url, description: "Proclaim® 05 SG est un insecticide larvicide de la famille des avermectines. Il agit comme GABA agoniste en bloquant les signaux nerveux. Les larves s'arrêtent de s'alimenter et deviennent irréversiblement paralysées. La mortalité survient dans les 4 jours au maximum.\n\nProclaim® 05 SG a une forte activité par ingestion et agit légèrement par contact. Il est très efficace contre un large spectre de lépidoptères." },
  { name: "Vertimec®", desc: "Acaricide-insecticide à base d'abamectine, votre atout majeur pour la lutte contre les acariens", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Acaricide-Insecticide", badgeColor: "bg-red-500", icon: Bug, image: vertimecAsset.url, description: "Vertimec® est actif contre tous les stades où le ravageur se nourrit ; il prévient ou stoppe la formation de galeries par les larves des mouches mineuses. Une nette réduction de la fécondité et de la ponte a été observée chez les femelles entrées en contact avec le produit.\n\nL'abamectine agit en empêchant la transmission de l'influx nerveux des nerfs aux muscles. Les ravageurs sont rapidement paralysés, cessent de se nourrir et meurent après 3 à 4 jours.\n\nL'activité de Vertimec® augmente avec la température." },
  { name: "ASKARI 20 SL", desc: "Insecticide systémique à base de 200 g/l d'imidaclopride, spécial contre les insectes suceurs", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: askariAsset.url, description: "200 g/l d'imidaclopride sous forme de concentré soluble.\n\nASKARI 20 SL est un insecticide systémique spécial pour lutter contre les insectes suceurs, il agit sur le système nerveux central des insectes nuisibles, causant le blocage des récepteurs nicotinergiques post-synaptiques de l'acétylcholine.\n\nIl est facilement absorbé par la plante et distribué par voie acropétale, avec une bonne action systémique sur les racines. Grâce à sa puissante systémie, il est véhiculé rapidement par le courant de la sève de la plante, ce qui lui permet de lutter contre les insectes ravageurs ; ces derniers cessent de s'alimenter et de se reproduire et, éventuellement, meurent." },
  { name: "Calif Energy", desc: "Insecticide de contact à base de pyriproxyfène 100 g/l contre cochenilles et mouche blanche sur agrumes et maraîchage", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: califEnergyAsset.url, description: "Calif Energy est un insecticide de contact à base de pyriproxyfène 100 g/l pour les agrumes et le maraîchage contre les cochenilles et la mouche blanche.\n\nIl agit par contact pour empêcher l'éclosion des œufs et tue les jeunes stades larvaires.\n\nClassé dans le groupe 7C, il agit sur la régulation de la mue.\n\nIl cible principalement les aleurodes (mouches blanches), cochenilles (Diaspines, Lécanines) et certains lépidoptères." },
  { name: "Minecto® Pro", desc: "Insecticide/acaricide à large spectre pour la suppression des acariens et des insectes nuisibles", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide-Acaricide", badgeColor: "bg-red-500", icon: Bug, image: minectoProAsset.url, description: "Insecticide/acaricide à large spectre pour la suppression des acariens et des insectes nuisibles indiqués dans les céleris-raves, les pommes de terre, les légumes-tubercules et les légumes-cormes, les légumes-feuilles, les légumes-fruits et les cucurbitacées, les pommes, les poires et les légumes-pétioles." },
  { name: "Warrior® 10 CS", desc: "Insecticide polyvalent avec Technologie Zeon, action par contact et ingestion, effet de choc et persistance 2-3 semaines", category: "agro", subcategory: "protection", protectionGroup: "insecticides-acaricides", badge: "Insecticide", badgeColor: "bg-red-500", icon: Bug, image: warrior10csAsset.url, description: "Warrior® 10 CS avec Technologie Zeon est un insecticide polyvalent, il agit par contact et par ingestion, au niveau du système nerveux des insectes. Il est efficace sur les adultes et sur les larves de nombreuses espèces d'insectes ennemis des cultures. Son action est rapide.\n\nWarrior® 10 CS avec Technologie Zeon, utilisé en préventif comme en curatif, combine l'effet de choc et une large persistance d'action : 2 à 3 semaines pendant lesquelles le produit évite des réinfestations par les ravageurs (effet répulsif, anti-appétant et anti-ponte).\n\nWarrior® 10 CS avec Technologie Zeon a également un effet freinateur sur les acariens." },
  // Protection - Nématicides
  { name: "Solvinova®", desc: "Nématicide de contact pour le contrôle des nématodes phytophages, forme un film protecteur autour des racines", category: "agro", subcategory: "protection", protectionGroup: "nematicides", badge: "Nématicide", badgeColor: "bg-red-500", icon: Bug, image: solvinovaAsset.url, description: "Solvinova est un produit de contact. Il agit sur la population des nématodes qui se trouve dans le sol et il forme un film protecteur autour de la racine pour éviter la pénétration de la racine par les nématodes.\n\nSolvinova est efficace contre les principaux nématodes à galles (Meloidogyne spp), tels que M. incognita, M. javanica, M. arenaria et M. hapla.\n\nLe Solvinova agit principalement sur les larves J2 en bloquant la transmission de l'influx nerveux. Il a aussi une action secondaire sur les œufs, il accélère leur éclosion afin de les paralyser." },
  // Protection - Phéromones
  { name: "Ceratitis capitata", desc: "Mouche méditerranéenne des fruits, l'un des ravageurs les plus dangereux des vergers méditerranéens", category: "agro", subcategory: "protection", protectionGroup: "pheromones", badge: "Phéromone", badgeColor: "bg-red-500", icon: Bug, image: ceratitisCapitataAsset.url, description: "Mouche méditerranéenne des fruits.\n\nCeratitis capitata est l'un des ravageurs les plus dangereux des vergers des régions méditerranéennes. L'insecte peut causer des dégâts considérables si nous n'intervenons pas au bon moment.\n\nCultures cibles : Toutes cultures susceptibles d'être attaquées par la mouche des fruits : agrumes, pêches, nectarines, raisins, autres fruits à noyaux." },
  { name: "Dasineura oxycoccana", desc: "Cécidomyie du myrtille", category: "agro", subcategory: "protection", protectionGroup: "pheromones", badge: "Phéromone", badgeColor: "bg-red-500", icon: Bug, image: dasineuraOxycoccanaAsset.url, description: "Cécidomyie du myrtille." },
  { name: "Drosophila suzukii", desc: "Drosophile à ailes tachetées", category: "agro", subcategory: "protection", protectionGroup: "pheromones", badge: "Phéromone", badgeColor: "bg-red-500", icon: Bug, image: drosophilaSuzukiiAsset.url, description: "Drosophile à ailes tachetées." },
  { name: "Tuta absoluta", desc: "Mineuse de la tomate", category: "agro", subcategory: "protection", protectionGroup: "pheromones", badge: "Phéromone", badgeColor: "bg-red-500", icon: Bug, image: tutaAbsolutaAsset.url, description: "Mineuse de la tomate." },
  // Protection - Pièges agricoles
  { name: "Adhésif Blanc", desc: "Piège chromatique à rouleau blanc pour cécidomyies (Dasineura oxycoccana) et thrips sur cultures de bleuets", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège chromatique", badgeColor: "bg-red-500", icon: Bug, image: adhesifBlancAsset.url, description: "Piège Chromatique.\n\nLes pièges à rouleaux blancs sont conçus spécifiquement pour attirer les cécidomyies, Dasineura oxycoccana, ainsi que les thrips, car ces deux espèces sont des ravageurs importants dans les cultures de bleuets." },
  { name: "Adhésif Bleu", desc: "Piège chromatique bleu spécifique aux thrips sous serre et en plein champ", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège chromatique", badgeColor: "bg-red-500", icon: Bug, image: adhesifBleuAsset.url, description: "Piège Chromatique.\n\nL'adhésif bleu est un outil de piégeage chromatique conçu spécifiquement pour lutter contre les thrips dans les cultures sous serre et en plein champ. Grâce à sa couleur bleue attrayante pour ces insectes nuisibles, cet adhésif permet une surveillance efficace et une réduction des populations de thrips, minimisant ainsi les dommages aux cultures.\n\nAvantages :\n• Efficacité prouvée contre les thrips : attire et piège efficacement les thrips, réduisant leur impact sur les cultures.\n• Utilisation polyvalente : convient pour une utilisation sous serre et en plein champ, offrant une protection étendue.\n• Réduction de l'utilisation de pesticides : permet une gestion des ravageurs plus respectueuse de l'environnement en limitant le recours aux produits chimiques.\n\nCultures ciblées : tomates, poivrons, concombres, fraises, et autres cultures sensibles aux thrips.\nRavageurs ciblés : thrips (Frankliniella occidentalis, Thrips tabaci)." },
  { name: "Adhésif Jaune", desc: "Piège chromatique jaune polyvalent contre aleurodes, pucerons, mouches blanches et insectes volants", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège chromatique", badgeColor: "bg-red-500", icon: Bug, image: adhesifJauneAsset.url, description: "Piège Chromatique.\n\nL'adhésif jaune est l'un des pièges chromatiques les plus couramment utilisés pour lutter contre une large gamme d'insectes volants nuisibles. Son efficacité dans la capture d'aleurodes, de pucerons et de mouches blanches en fait un incontournable pour les producteurs en serre et en plein champ.\n\nAvantages :\n• Attraction large : attire et piège une grande variété d'insectes volants, offrant une protection polyvalente.\n• Réduction des ravageurs : limite la présence d'insectes nuisibles, ce qui améliore la qualité et le rendement des cultures.\n• Solution écologique : aide à réduire la nécessité de traitements chimiques, soutenant des pratiques agricoles durables.\n\nCultures ciblées : tomates, concombres, poivrons, arbres fruitiers, et autres cultures vulnérables aux insectes volants.\nRavageurs ciblés : aleurodes, pucerons, mouches blanches, et autres insectes volants." },
  { name: "Adhésif Noir", desc: "Piège chromatique noir ciblant spécifiquement Tuta absoluta", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège chromatique", badgeColor: "bg-red-500", icon: Bug, image: adhesifNoirAsset.url, description: "Piège Chromatique.\n\nL'adhésif noir est conçu pour cibler des ravageurs spécifiques tels que Tuta absoluta. Ce piège chromatique unique utilise la couleur noire pour attirer ces nuisibles, facilitant leur surveillance et leur contrôle.\n\nAvantages :\n• Facile à installer, il suffit de suspendre ou de fixer près de la culture ciblée.\n• Ne laisse aucun résidu sur les produits frais.\n\nRavageurs ciblés : Tuta absoluta." },
  { name: "Adhésif Rouge", desc: "Piège chromatique rouge pour Drosophila suzukii, sauteurs de feuilles et cécidomyies", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège chromatique", badgeColor: "bg-red-500", icon: Bug, image: adhesifRougeAsset.url, description: "Piège Chromatique.\n\nLes rouleaux rouges sont utilisés pour piéger et surveiller la drosophile à ailes tachetées (Drosophila suzukii), les sauteurs de feuilles et les cécidomyies, telles que Dasineura oxycoccana. Ces nuisibles sont attirés par la couleur rouge de l'adhésif et se collent à sa surface collante.\n\nL'efficacité du piège peut être améliorée en combinant les pièges à rouleau avec des leurres et attractifs phéromonaux, tels que le leurre sec pour drosophile à ailes tachetées et les phéromones pour cécidomyies. Détecter les invasions tôt et surveiller les populations avec précision sont des éléments cruciaux des programmes de gestion intégrée des nuisibles." },
  { name: "CERA FREE", desc: "Solution cératite contre la mouche méditerranéenne des fruits (Ceratitis capitata)", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège", badgeColor: "bg-red-500", icon: Bug, image: ceraFreeAsset.url, description: "Solution Ceratite.\n\nLa mouche méditerranéenne des fruits (Ceratitis capitata) est l'un des ravageurs les plus dangereux des vergers des régions méditerranéennes. L'insecte peut causer des dégâts considérables si nous n'intervenons pas au bon moment.\n\nCultures cibles : Toutes cultures susceptibles d'être attaquées par la mouche des fruits : agrumes, pêches, nectarines, raisins, autres fruits à noyaux." },
  { name: "DELTA TRAP", desc: "Piège delta pour la surveillance de la cécidomyie sur myrtilles et des lépidoptères de taille petite à moyenne", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège", badgeColor: "bg-red-500", icon: Bug, image: deltaTrapAsset.url, description: "Solutions pour le contrôle de la cécidomyie sur myrtilles.\n\nUn système de surveillance robuste pour les papillons de taille petite à moyenne.\n\nLa trappe Delta est un dispositif de piégeage idéal pour la surveillance des ravageurs de lépidoptères dans les zones de culture intérieures et extérieures souvent touchées par ce type de nuisible. La trappe est fabriquée en plastique ondulé durable, résistant aux UV et à la pluie, ce qui permet de l'utiliser pendant plusieurs saisons.\n\nLa trappe est rapide et facile à assembler et nécessite simplement l'ajout d'un appât à phéromones, qui, lorsqu'il est placé au centre de la trappe, attirera et piégera les nuisibles." },
  { name: "Drosophila Suzukii", desc: "Pièges SWD appâtés d'attractifs spécifiques pour le contrôle de Drosophila suzukii sur fruits rouges", category: "agro", subcategory: "protection", protectionGroup: "pieges-agricole", badge: "Piège", badgeColor: "bg-red-500", icon: Bug, image: drosophilaSuzukiiTrapAsset.url, description: "Solutions pour le contrôle de Drosophila suzukii sur fruits rouges.\n\nPièges SWD appâtés d'attractifs spécifiques :\n• Préservation de l'environnement\n• Durée d'utilisation plus longue\n• Libération continue et régulière\n\nDégâts :\n• Les femelles perforent l'épiderme du fruit à l'aide de leurs ovipositeurs et déposent des œufs.\n• Les larves se développent et se nourrissent à l'intérieur des fruits.\n• Les perforations de l'épiderme favorisent l'introduction et le développement d'agents pathogènes.\n• Les fruits endommagés perdent leur forme et leur qualité." },
  // Protection - Fongicides
  { name: "Oxymil 50 WP", desc: "Fongicide de contact multisite, inhibe la germination des spores et possède une action bactéricide", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: oxymil50wpImg, description: "Oxymil 50 WP est un produit de contact qui inhibe la germination des spores par une réaction multisite (au niveau des processus respiratoires, de la biosynthèse des protéines et de l'activité membranaire), et ne peut donc sélectionner des souches mutantes résistantes.\n\nAussi, il a une action bactéricide en bloquant leur multiplication." },
  { name: "Priori® Top", desc: "Fongicide combinant Azoxystrobine (strobilurines) et Difénoconazole (triazoles) pour une action complémentaire", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: prioriTopImg, description: "Priori Top est la combinaison de deux matières actives appartenant à des familles différentes et dont les actions sont complémentaires :\n\n• Azoxystrobine, de la famille des strobilurines\n• Difénoconazole, de la famille des triazoles" },
  { name: "Revus® 250 SC", desc: "Fongicide anti-mildiou à base de Mandipropamide pour pomme de terre, tomate et plantes aromatiques", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: revus250scImg, description: "Revus 250 SC est un nouveau fongicide anti-mildiou, sur la pomme de terre, la tomate et les plantes aromatiques, qui contient la matière active la Mandipropamide.\n\nRevus 250 SC est le premier fongicide de la nouvelle famille des mandelamides. Le Mandipropamid est très actif contre les Oomycètes. Une grande proportion du mandipropamid est adsorbée par les feuilles après application assurant une excellente protection contre la pluie.\n\nIl est actif contre la germination des spores et possède une très bonne activité translaminaire. Le Mandipropamid inhibe également la croissance du mycélium au cours de la période d'incubation." },
  { name: "Ridomil Gold R® WG", desc: "Fongicide systémique alliant Méfénoxam et Cuivre, contrôle préventif et curatif du mildiou de la vigne et de la pomme de terre", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: ridomilGoldRImg, description: "Notre nouveau fongicide Ridomil Gold R® WG offre un contrôle systémique, durable et inégalé du mildiou de la vigne et de la pomme de terre.\n\nGrâce à sa formulation unique alliant entre le Méfénoxam et le Cuivre, Ridomil Gold R® WG vous assure une excellente protection préventive et curative contre le Mildiou de la vigne et de la pomme de terre pour des rendements maximum." },
  { name: "Score® 250 EC", desc: "Fongicide systémique à base de Difénoconazole (250 g/l), large spectre contre alternariose, cercosporiose et tavelure", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: score250ecImg, description: "Composition : 250 g/l de Difénoconazole.\n\nFongicide systémique en lutte préventive et curative d'un large spectre de maladies foliaires : l'Alternariose de la pomme de terre, des tomates, de l'asperge et de la laitue, la cercosporiose de la betterave à sucre, la tavelure du pommier.\n\nScore est rapidement diffusé dans les parties aériennes des plantes par action translaminaire (il traverse les feuilles) et par systémie locale. Il bloque de façon significative le développement du mycélium dans les tissus végétaux et empêche l'apparition des symptômes." },
  { name: "Topas® 100 EC", desc: "Fongicide systémique absorbé rapidement, efficace en préventif et sur maladie déclarée sur feuilles et grappes", category: "agro", subcategory: "protection", protectionGroup: "fongicides", badge: "Fongicide", badgeColor: "bg-red-500", icon: FlaskConical, image: topas100ecImg, description: "Topas 100 EC est absorbé rapidement et diffusé par systémie dans tous les organes effectivement atteints par la pulvérisation.\n\nUtilisé en préventif, avant installation de la maladie sur feuille ou grappe, il a une efficacité remarquable, tout en ayant aussi une efficacité intéressante sur maladie déclarée." },
  { name: "Cu-Chelate", desc: "Engrais foliaire inducteur de résistance à base de cuivre totalement chélaté par EDTA", category: "agro", subcategory: "protection", protectionGroup: "induction-defenses", badge: "Induction des défenses", badgeColor: "bg-emerald-600", icon: FlaskConical, image: cuChelateImg, description: "CU-CHELATE est un cuivre complètement chélaté par EDTA sous forme liquide concentrée. Le cuivre chélaté est rapidement assimilable et la libération est lente et plus persistante. Il est stable sur une large gamme de pH (de 5 à 9).\n\nCU-CHELATE assure et garantit tous les effets recherchés du cuivre chélaté (Fusarium, mildiou, maladies bactériennes, carences, chlorophylle, métabolisme, fixation des protéines, etc.).\n\nCu-CHELATE est recommandé en agriculture biologique." },
  { name: "Cu-GLUCO", desc: "Correcteur de carence et inducteur de résistance à base de gluconate de cuivre, action fongicide et bactéricide naturelle", category: "agro", subcategory: "protection", protectionGroup: "induction-defenses", badge: "Induction des défenses", badgeColor: "bg-emerald-600", icon: FlaskConical, image: cuGlucoImg, description: "Cu-GLUCO est un produit liquide à base de Gluconate de Cuivre totalement soluble dans l'eau. Il a une action très « douce » sur le feuillage et une assimilation et translocation faciles à travers tous les organes de la plante. Une fois absorbé, le Cuivre dans Cu-GLUCO induit la synthèse de substances naturelles appelées phytoalexines (antibiotiques végétaux), ce qui déclenche chez la plante certains mécanismes d'autodéfense.\n\nCu-GLUCO possède une action fongicide et bactéricide naturelle avec un large spectre d'activité. Il permet de lutter contre l'oïdium en inhibant la formation du mycélium ; il réduit aussi les risques de pourriture en permettant l'épaississement et le durcissement de la pellicule des baies en favorisant la synthèse de la lignine responsable de l'élasticité et de la stabilité des tissus des fruits (en particulier sur vigne).\n\nEn prévenant et corrigeant les déficiences en cuivre, Cu-GLUCO contribue également à l'amélioration du rendement et de la qualité des productions (poids spécifique, teneur en protéines). Cu-GLUCO est facile d'utilisation, à emploi sécurisé et sans phytotoxicité. Appliqué convenablement, Cu-GLUCO donne aux cultures une très grande résistance face à certaines maladies comme : ŒIL DE PAON, MILDIOU, BACTÉRIOSE, POURRITURE BRUNE, GOMMOSE, CLOQUE…" },
  { name: "K2O-Phosphite", desc: "Engrais foliaire inducteur de résistance à base de phosphite de potassium", category: "agro", subcategory: "protection", protectionGroup: "induction-defenses", badge: "Induction des défenses", badgeColor: "bg-emerald-600", icon: FlaskConical, image: k2oPhosphiteImg, description: "K2O-PHOSPHITE est un engrais foliaire inducteur de résistance à base de phosphite de potassium. Il stimule les mécanismes naturels de défense de la plante et améliore la résistance aux maladies cryptogamiques tout en apportant du potassium et du phosphore assimilables." },
  { name: "Solquel L K-Si", desc: "Apport foliaire ou fertigation de potassium et silicium, sans azote, sulfate ni chlorure", category: "agro", subcategory: "protection", protectionGroup: "induction-defenses", badge: "Induction des défenses", badgeColor: "bg-emerald-600", icon: FlaskConical, image: solquelLKSiImg, description: "Solquel L-K-Si est formulé pour l'apport de potassium en complément de l'engrais normal qui ne contient pas d'azote, de sulfate ni de chlorure. Peut être appliqué par voie foliaire ou dissous dans l'eau d'irrigation.\n\nLe silicium est un microélément essentiel et sa carence affecte la salinité des cultures, importante pour le riz, la betterave sucrière ou les cultures tropicales. Le silicium est fondamental dans les premiers états phénologiques, principalement dans le développement structurel et cellulaire, et aide à la mobilisation et à la fixation des nutriments." },
  // Complement Nutritionnelle (produits à venir)
  // Engrais - Acides
  { name: "Acide phosphorique H₃PO₄", desc: "Source de phosphore concentrée pour fertigation et ajustement du pH. Stockage à température ambiante.", category: "agro", subcategory: "engrais", engraisGroup: "acides", badge: "Acides", badgeColor: "bg-phyto-600", icon: FlaskConical, image: acidePhosphoriqueImg, composition: [
    { label: "Phosphore (P₂O₅)", value: "54%" },
    { label: "SO₄", value: "2,80%" },
    { label: "CaO", value: "0,10%" },
    { label: "MgO", value: "0,80%" },
    { label: "Fe₂O₃", value: "0,28%" },
    { label: "Al₂O₃", value: "0,33%" },
    { label: "F⁻", value: "0,33%" },
    { label: "Cl⁻", value: "70 ppm" },
    { label: "Taux de solide", value: "0,5%" },
    { label: "Densité", value: "1,640" },
    { label: "Aspect", value: "Vert clair" },
    { label: "Stockage", value: "Température ambiante" },
  ] },
  { name: "Acide nitrique 63% HNO₃", desc: "Acide nitrique en solution aqueuse pour la fertigation et le nettoyage des systèmes d'irrigation", category: "agro", subcategory: "engrais", engraisGroup: "acides", badge: "Acides", badgeColor: "bg-phyto-600", icon: FlaskConical, image: acideNitriqueImg, composition: [
    { label: "Formule", value: "HNO₃ (solution aqueuse)" },
    { label: "CAS", value: "7697-37-2" },
    { label: "EINECS", value: "231-714-2" },
    { label: "Concentration", value: "62,0 – 64,0 % wt." },
    { label: "NOX (sous forme de NO₂)", value: "Max. 100 ppm" },
    { label: "Sulfates (SO₄)", value: "Max. 50 ppm" },
    { label: "Chlore (Cl)", value: "Max. 10 ppm" },
    { label: "Fer (Fe)", value: "Max. 5 ppm" },
    { label: "Densité (20°C)", value: "1,37 – 1,40 Kg/L" },
    { label: "Point de solidification", value: "App. -28 °C" },
    { label: "Aspect", value: "Solution claire, incolore à jaune clair" },
    { label: "Couleur (APHA)", value: "Max. 20" },
  ] },
  { name: "Acide sulfurique 98% H₂SO₄", desc: "Acide sulfurique concentré pour ajustement du pH et applications industrielles agricoles", category: "agro", subcategory: "engrais", engraisGroup: "acides", badge: "Acides", badgeColor: "bg-phyto-600", icon: FlaskConical, image: acideSulfuriqueImg, composition: [
    { label: "Formule chimique", value: "H₂SO₄" },
    { label: "Concentration", value: "98%" },
    { label: "Fer (Fe)", value: "< 20 ppm" },
    { label: "Mercure (Hg)", value: "< 0,45 ppm" },
    { label: "Turbidité (NTU)", value: "< 10" },
    { label: "Couleur", value: "50" },
    { label: "Densité", value: "1,840" },
    { label: "CAS", value: "7664-93-9" },
    { label: "EINECS", value: "231-639-5" },
  ] },
  // Engrais - Correcteurs
  { name: "Sulfate de cuivre CuSO₄·5H₂O", desc: "Correcteur de carence en cuivre, utilisable en fertilisation et en protection des cultures", category: "agro", subcategory: "engrais", engraisGroup: "correcteurs", badge: "Correcteurs", badgeColor: "bg-phyto-600", icon: FlaskConical, image: sulfateCuivreImg, composition: [
    { label: "CuSO₄·5H₂O", value: "Min. 98,00%" },
    { label: "Cuivre (Cu)", value: "Min. 25,00% (+/-1)" },
    { label: "Plomb (Pb)", value: "Max. 100 mg/kg" },
    { label: "Arsenic (As)", value: "Max. 5 mg/kg" },
    { label: "Cadmium (Cd)", value: "Max. 5 mg/kg" },
    { label: "Mercure (Hg)", value: "Max. 0,1 mg/kg" },
    { label: "Nickel (Ni)", value: "Max. 100 mg/kg" },
    { label: "SiO₂ (anti-agglomérants)", value: "Max. 2,0%" },
    { label: "pH", value: "4,0" },
    { label: "Aspect", value: "Cristaux bleus ou poudre cristalline" },
    { label: "Densité", value: "2,286 g/cm³" },
    { label: "Granulation", value: "0 – 0,6 mm" },
  ] },
  { name: "Sulfate de fer FeSO₄·7H₂O", desc: "Correcteur de carence en fer (heptahydraté), idéal contre la chlorose ferrique des cultures sensibles", category: "agro", subcategory: "engrais", engraisGroup: "correcteurs", badge: "Correcteurs", badgeColor: "bg-phyto-600", icon: FlaskConical, image: sulfateFerImg, composition: [
    { label: "Fer (Fe)", value: "Min. 19,7%" },
    { label: "Soufre (S)", value: "Min. 10,5%" },
    { label: "Arsenic (As)", value: "< 5 ppm" },
    { label: "Plomb (Pb)", value: "< 20 ppm" },
    { label: "Cadmium (Cd)", value: "< 10 ppm" },
    { label: "Humidité", value: "< 2,0%" },
    { label: "Taux d'insolubles", value: "< 1,0%" },
    { label: "Aspect", value: "Cristaux bleus légers ou verts" },
  ] },
  { name: "Sulfate de manganèse MnSO₄·H₂O", desc: "Correcteur de carence en manganèse (monohydraté), favorise la photosynthèse et le métabolisme des plantes", category: "agro", subcategory: "engrais", engraisGroup: "correcteurs", badge: "Correcteurs", badgeColor: "bg-phyto-600", icon: FlaskConical, image: sulfateManganeseImg, composition: [
    { label: "Pureté (MnSO₄·H₂O)", value: "98%" },
    { label: "Manganèse (Mn)", value: "Min. 31,8%" },
    { label: "Soufre (S)", value: "Min. 17,0%" },
    { label: "Fer (Fe)", value: "< 40 ppm" },
    { label: "Arsenic (As)", value: "< 5 ppm" },
    { label: "Plomb (Pb)", value: "< 10 ppm" },
    { label: "Cadmium (Cd)", value: "< 10 ppm" },
    { label: "Chrome (Cr)", value: "< 10 ppm" },
    { label: "Mercure (Hg)", value: "< 0,5 ppm" },
    { label: "Taux d'insolubles", value: "< 0,05%" },
    { label: "pH", value: "7" },
    { label: "Aspect", value: "Poudre blanche à rosâtre" },
    { label: "Granulométrie", value: "< 0,25 mm 95%" },
  ] },
  { name: "Sulfate de zinc ZnSO₄·7H₂O", desc: "Correcteur de carence en zinc (heptahydraté), essentiel à la croissance et au développement enzymatique des cultures", category: "agro", subcategory: "engrais", engraisGroup: "correcteurs", badge: "Correcteurs", badgeColor: "bg-phyto-600", icon: FlaskConical, image: sulfateZincImg, composition: [
    { label: "Pureté (ZnSO₄·7H₂O)", value: "> 94,5%" },
    { label: "Zinc (Zn)", value: "Min. 21,5%" },
    { label: "Soufre (S)", value: "> 10,5%" },
    { label: "Arsenic (As)", value: "2,0 ppm" },
    { label: "Plomb (Pb)", value: "4,5 ppm" },
    { label: "Cadmium (Cd)", value: "5,1 ppm" },
    { label: "Mercure (Hg)", value: "< 1,0 ppm" },
    { label: "Taux d'insolubles", value: "0,05%" },
    { label: "Densité", value: "1,97" },
    { label: "Aspect", value: "Cristaux incolores" },
  ] },
  // Engrais - Classiques
  { name: "Ammonitrate 33,5%", desc: "Engrais azoté granulé à action rapide et progressive, idéal pour toutes cultures", category: "agro", subcategory: "engrais", engraisGroup: "classiques", badge: "Classiques", badgeColor: "bg-amber-500", icon: FlaskConical, image: ammonitrateImg, composition: [
    { label: "Azote Total (N)", value: "33,50%" },
    { label: "Azote Nitrique (N)", value: "16,75%" },
    { label: "Azote Ammoniacal (N)", value: "16,75%" },
    { label: "Humidité", value: "0,5% max" },
    { label: "Densité", value: "0,9 Mt/m³" },
    { label: "Granulométrie", value: "95% entre 1 et 4 mm" },
  ] },
  { name: "Sulfate d'ammoniaque", desc: "Engrais azoté et soufré pour croissance des cultures, source rapide d'azote et de soufre", category: "agro", subcategory: "engrais", engraisGroup: "classiques", badge: "Classiques", badgeColor: "bg-amber-500", icon: FlaskConical, image: sulfateAmmoniaqueImg, composition: [
    { label: "Azote Total (N)", value: "21%" },
    { label: "Anhydride de Soufre (SO₃)", value: "60%" },
    { label: "Soufre (S)", value: "24%" },
    { label: "Humidité", value: "0,2% max" },
  ] },
  { name: "Phosphate d'urée 17-44-0", desc: "Engrais azoto-phosphaté soluble, idéal pour la fertigation et applications foliaires", category: "agro", subcategory: "engrais", engraisGroup: "classiques", badge: "Classiques", badgeColor: "bg-amber-500", icon: FlaskConical, image: phosphateUreeImg, composition: [
    { label: "Pureté", value: "98% min" },
    { label: "Azote Uréique (N)", value: "17% min" },
    { label: "Anhydride Phosphorique (P₂O₅)", value: "44% min (soluble dans l'eau)" },
    { label: "pH", value: "1,6 – 2,0" },
    { label: "Taux d'insolubles", value: "0,10% max" },
    { label: "Humidité", value: "0,2% max" },
    { label: "Aspect", value: "Cristaux blancs" },
  ] },
  { name: "Urée cristalline", desc: "Engrais azoté concentré à bas contenu en biuret, idéal pour la fertilisation foliaire et fertigation", category: "agro", subcategory: "engrais", engraisGroup: "classiques", badge: "Classiques", badgeColor: "bg-amber-500", icon: FlaskConical, image: ureeCristallineImg, composition: [
    { label: "Azote Total (N)", value: "46,0% p/p" },
    { label: "Azote Uréique (N)", value: "46,0% p/p" },
    { label: "Biuret", value: "< 0,25%" },
    { label: "Densité", value: "0,75 Kg/dm³" },
    { label: "Solubilité (20°C)", value: "1,035 g/L" },
    { label: "Bas contenu en biuret", value: "< 0,25%" },
  ] },
  // Engrais - Solubles
  { name: "Chlorure de potassium", desc: "Engrais potassique soluble hautement concentré, idéal pour la fertigation et les cultures exigeantes en potassium", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: chlorurePotassiumImg, composition: [
    { label: "Chlorure de Potassium (KCl)", value: "95,8%" },
    { label: "Oxyde de Potassium (K₂O)", value: "60% (soluble dans l'eau)" },
    { label: "Potassium (K)", value: "49,8% (soluble dans l'eau)" },
    { label: "Autres (NaCl, MgCl₂, K₂SO₄, MgSO₄, CaSO₄, etc.)", value: "4%" },
    { label: "Humidité", value: "0,2%" },
    { label: "Taux d'insolubles", value: "< 0,1%" },
  ] },
  { name: "Chlorure de calcium", desc: "Source de calcium soluble pour corriger les carences et améliorer la qualité des fruits et légumes", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: chlorureCalciumImg, composition: [
    { label: "Formule chimique", value: "CaCl₂" },
    { label: "Pureté", value: "77,00% min" },
    { label: "Chlorure alcalin Total en NaCl", value: "5,0% min" },
    { label: "Magnésium Total", value: "0,5% max" },
    { label: "Alcalinité en Ca(OH)₂", value: "0,2% max" },
    { label: "Sulfate", value: "0,05% max" },
    { label: "Fer", value: "0,006%" },
    { label: "Taux d'insolubles", value: "0,15% max" },
  ] },
  { name: "Multi-K™ pHast", desc: "Nitrate de potassium acide pHast — entièrement soluble pour fertigation en serre et plein champ", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: multiKPhastImg, description: "Multi-K™ pHast est une formule acide de nitrate de potassium. Entièrement soluble dans l'eau et facilement absorbé par la plante, elle est idéale pour la fertigation en serre et plein champ. Multi-K pHast est fortement recommandé pour une utilisation en sols alcalins ou lorsque l'eau d'irrigation contient des niveaux élevés de carbonates («eau dure»)." },
  { name: "Nitrate de calcium 15,5-0-0+26,3 CaO", desc: "Engrais azoto-calcique soluble en granulés blancs, idéal pour la fertigation et la prévention des carences en calcium", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: nitrateCalciumImg, composition: [
    { label: "Azote Total (N)", value: "15,5%" },
    { label: "Azote Nitrique (N-NO₃)", value: "14,4%" },
    { label: "Azote Ammoniacal (N-NH₄)", value: "1,1%" },
    { label: "Oxyde de Calcium (CaO)", value: "26,3% (soluble dans l'eau)" },
    { label: "Calcium (Ca)", value: "18,6% (soluble dans l'eau)" },
    { label: "Taux d'insolubles", value: "300 ppm" },
    { label: "Densité", value: "1,1 g/cm³" },
    { label: "Aspect", value: "Granulés blancs" },
  ] },
  { name: "Nitrate de magnésie", desc: "Engrais azoto-magnésien soluble en flocons blancs, idéal pour la fertigation et la correction des carences en magnésium", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: nitrateMagnesieImg, composition: [
    { label: "Azote Total (N)", value: "11%" },
    { label: "Azote Nitrique (N-NO₃)", value: "11%" },
    { label: "Oxyde de Magnésium (MgO)", value: "16% (soluble dans l'eau)" },
    { label: "Magnésium (Mg)", value: "9,6% (soluble dans l'eau)" },
    { label: "Taux d'insolubles", value: "300 ppm maximum" },
    { label: "Densité en vrac", value: "0,7 g/cm³" },
    { label: "Aspect", value: "Flocons blancs" },
  ] },
  { name: "Nitrate de potasse cristallisé 13-0-46", desc: "Engrais azoto-potassique soluble en poudre blanche, idéal pour la fertigation et les applications foliaires", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: nitratePotasseImg, composition: [
    { label: "Azote Total (N)", value: "13%" },
    { label: "Azote Nitrique (N-NO₃)", value: "13%" },
    { label: "Oxyde de Potassium (K₂O)", value: "46% (soluble dans l'eau)" },
    { label: "Potassium (K)", value: "38,1% (soluble dans l'eau)" },
    { label: "Taux d'insolubles", value: "300 ppm maximum" },
    { label: "Densité", value: "1,0 g/cm³" },
    { label: "Aspect", value: "Poudre blanche" },
  ] },
  { name: "Phosphate monoammonique MAP 12-61-0", desc: "Engrais azoto-phosphaté soluble en poudre blanche, idéal pour la fertigation et les démarrages de cultures", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: map12610Img, composition: [
    { label: "Azote Total (N)", value: "12%" },
    { label: "Azote Ammoniacal (N-NH₄)", value: "12%" },
    { label: "Anhydride Phosphorique (P₂O₅)", value: "61% (soluble dans l'eau)" },
    { label: "Phosphore (P)", value: "26,5% (soluble dans l'eau)" },
    { label: "pH (1% solution)", value: "4,4" },
    { label: "Taux d'insolubles", value: "1000 ppm maximum" },
    { label: "Densité", value: "1,0 g/cm³" },
    { label: "Aspect", value: "Poudre blanche" },
  ] },
  { name: "Phosphate monopotassique MPK 00-52-34", desc: "Engrais phospho-potassique soluble en poudre blanche, sans azote, idéal pour la floraison et la fructification", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: mpk005234Img, composition: [
    { label: "Anhydride Phosphorique (P₂O₅)", value: "52% (soluble dans l'eau)" },
    { label: "Phosphore (P)", value: "22,7% (soluble dans l'eau)" },
    { label: "Oxyde de Potassium (K₂O)", value: "34% (soluble dans l'eau)" },
    { label: "Potassium (K)", value: "28,7% (soluble dans l'eau)" },
    { label: "pH (1% solution)", value: "4,5" },
    { label: "Taux d'insolubles", value: "500 ppm maximum" },
    { label: "Densité", value: "1,0 g/cm³" },
    { label: "Aspect", value: "Poudre blanche" },
  ] },
  { name: "Sulfate de magnésium heptahydraté MgSO₄·7H₂O", desc: "Engrais magnésien et soufré soluble en cristaux granulés, idéal pour corriger les carences en magnésium et soufre", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: sulfateMagnesiumImg, composition: [
    { label: "Oxyde de Magnésium (MgO)", value: "16% (soluble dans l'eau)" },
    { label: "Magnésium (Mg)", value: "9,6% (soluble dans l'eau)" },
    { label: "Sulfate (SO₄)", value: "32%" },
    { label: "Soufre (S)", value: "12,8%" },
    { label: "pH (5% dans l'eau)", value: "7 – 7,5" },
    { label: "Taux d'insolubles dans l'eau", value: "0" },
    { label: "Taux de chlore", value: "0,012%" },
    { label: "Densité", value: "2,01 g/cm³" },
    { label: "Aspect", value: "Cristaux granulés incolores" },
  ] },
  { name: "Sulfate de potasse 0-0-50+46 SO₃", desc: "Engrais potassique et soufré soluble en poudre blanche, sans chlore, idéal pour cultures sensibles", category: "agro", subcategory: "engrais", engraisGroup: "solubles", badge: "Solubles", badgeColor: "bg-cyan-500", icon: FlaskConical, image: sulfatePotasseImg, composition: [
    { label: "Oxyde de Potassium (K₂O)", value: "50% (soluble dans l'eau)" },
    { label: "Potassium (K)", value: "41,5% (soluble dans l'eau)" },
    { label: "Anhydride Sulfurique (SO₃)", value: "46%" },
    { label: "Soufre (S)", value: "18,4%" },
    { label: "pH (1% solution)", value: "4,5" },
    { label: "Taux d'insolubles", value: "1000 ppm maximum" },
    { label: "Densité", value: "1,3 g/cm³" },
    { label: "Aspect", value: "Poudre blanche" },
  ] },
  // Engrais - Spéciaux
  { name: "Maïs Fort", desc: "Produit liquide riche en éléments nutritifs nécessaires à la culture du maïs, enrichi en matière organique et acides aminés", category: "agro", subcategory: "engrais", engraisGroup: "speciaux", badge: "Spéciaux", badgeColor: "bg-emerald-600", icon: FlaskConical, image: maisFortImg, description: "MAÏS FORT est un produit liquide riche en éléments nutritifs nécessaires à la culture du maïs. Il est formulé en éléments (Azote, Zinc, Cuivre et Magnésium) et enrichi en matière organique, solution qui permet d'avoir le feuillage optimal, recherché pour la production de matière verte. La présence d'Acides Aminés en combinaison avec le Zinc, le Cuivre et le Manganèse assure à la plante une croissance continue en stimulant sa résistance au stress climatique et en l'aidant à lutter préventivement contre certaines maladies." },
  { name: "TOP – Légumineuses", desc: "Engrais spécial légumineuses riche en matière organique, acides aminés et soufre pour une floraison rapide et un meilleur rendement", category: "agro", subcategory: "engrais", engraisGroup: "speciaux", badge: "Spéciaux", badgeColor: "bg-emerald-600", icon: FlaskConical, image: topLegumineusesImg, description: "TOP-Légumineuses est un engrais spécial pour les légumineuses, il contient une quantité importante de matière organique, ce qui couvre les déficiences de certains sols en cette substance. L'enrichissement de TOP-Légumineuses en acides aminés et en soufre assure à la plante une croissance continue en lui permettant de résister à certaines maladies et de lutter activement contre les différents stress (climat, opérations culturales, traitements pesticides…).\n\nConvenablement utilisé (périodes et fréquence), TOP-Légumineuses garantit :\n• une floraison rapide et importante\n• une amélioration du poids et de la taille des gousses\n• une croissance continue de la culture\n• une résistance optimale à certaines maladies\n• une amélioration du rendement\n• une bonne qualité des produits récoltés\n• une récolte plus précoce" },
  { name: "TOP-OLIVER 2", desc: "Engrais liquide NPK enrichi en Magnésium, Polysaccharides et Acides Aminés pour l'olivier, de la nouaison au début de maturité", category: "agro", subcategory: "engrais", engraisGroup: "speciaux", badge: "Spéciaux", badgeColor: "bg-emerald-600", icon: FlaskConical, image: topOliver2Img, description: "TOP-OLIVER 2 est un engrais liquide spécialement élaboré pour couvrir les besoins de l'olivier pendant la période comprise entre la nouaison et le début maturité.\n\nLa formulation de TOP-OLIVER 2 en Azote, Phosphore et Potassium prend en considération les exigences de la culture de l'olivier pendant cette période (besoin de grossissement et de maturation).\n\nTOP-OLIVER 2 contient également du Magnésium, des Polysaccharides et d'Acides Aminés ce qui augmente son efficacité nutritionnelle.\n\nL'utilisation de TOP-OLIVER 2 pendant cette période de croissance doit succéder à la période d'application de TOP-OLIVER 1." },
  // Engrais - NPK Solubles
  { name: "CRISSOL NPK 10-10-40 +OE", desc: "Engrais NPK soluble riche en potassium (40%) avec oligo-éléments chélatés EDTA, idéal en phase de fructification et maturation", category: "agro", subcategory: "engrais", engraisGroup: "npk-solubles", badge: "NPK Solubles", badgeColor: "bg-violet-600", icon: FlaskConical, image: crissol101040Img, composition: [
    { label: "Azote total (N) soluble dans l'eau", value: "10%" },
    { label: "Azote nitrique (N)", value: "4%" },
    { label: "Azote uréique (N)", value: "4%" },
    { label: "Azote ammoniacal (N)", value: "2%" },
    { label: "Pentoxyde de phosphore (P₂O₅) soluble", value: "10%" },
    { label: "Oxyde de potassium (K₂O) soluble", value: "40%" },
    { label: "Fer (Fe) chélaté EDTA", value: "0,020%" },
    { label: "Manganèse (Mn) chélaté EDTA", value: "0,010%" },
    { label: "Zinc (Zn) chélaté EDTA", value: "0,002%" },
    { label: "Cuivre (Cu) chélaté EDTA", value: "0,002%" },
    { label: "Bore (B) soluble dans l'eau", value: "0,010%" },
  ] },
  { name: "CRISSOL NPK 13-40-13 +OE", desc: "Engrais NPK soluble riche en phosphore (40%) avec oligo-éléments chélatés EDTA, idéal pour l'enracinement et la floraison", category: "agro", subcategory: "engrais", engraisGroup: "npk-solubles", badge: "NPK Solubles", badgeColor: "bg-violet-600", icon: FlaskConical, image: crissol134013Img, composition: [
    { label: "Azote total (N) soluble dans l'eau", value: "13%" },
    { label: "Pentoxyde de phosphore (P₂O₅) soluble", value: "40%" },
    { label: "Oxyde de potassium (K₂O) soluble", value: "13%" },
    { label: "Fer (Fe) chélaté EDTA", value: "0,020%" },
    { label: "Manganèse (Mn) chélaté EDTA", value: "0,010%" },
    { label: "Zinc (Zn) chélaté EDTA", value: "0,002%" },
    { label: "Cuivre (Cu) chélaté EDTA", value: "0,002%" },
    { label: "Bore (B) soluble dans l'eau", value: "0,010%" },
    { label: "Aspect", value: "Cristal solide" },
    { label: "Couleur", value: "Rouge" },
  ] },
  { name: "CRISSOL NPK 20-20-20 +OE", desc: "Engrais NPK soluble équilibré avec oligo-éléments chélatés EDTA, polyvalent pour toutes les phases de croissance", category: "agro", subcategory: "engrais", engraisGroup: "npk-solubles", badge: "NPK Solubles", badgeColor: "bg-violet-600", icon: FlaskConical, image: crissol202020Img, composition: [
    { label: "Azote total (N) soluble dans l'eau", value: "20%" },
    { label: "Azote uréique (N)", value: "14%" },
    { label: "Azote ammoniacal (N)", value: "4%" },
    { label: "Azote nitrique (N)", value: "2%" },
    { label: "Pentoxyde de phosphore (P₂O₅) soluble", value: "20%" },
    { label: "Oxyde de potassium (K₂O) soluble", value: "20%" },
    { label: "Fer (Fe) chélaté EDTA", value: "0,020%" },
    { label: "Manganèse (Mn) chélaté EDTA", value: "0,010%" },
    { label: "Zinc (Zn) chélaté EDTA", value: "0,002%" },
    { label: "Cuivre (Cu) chélaté EDTA", value: "0,002%" },
    { label: "Bore (B) soluble dans l'eau", value: "0,010%" },
  ] },
  // Engrais - NPK Liquides
  { name: "AZO-PHOS", desc: "Engrais NPK liquide à base de phosphore, azote, matière organique et oligo-éléments, idéal en fertigation pour le démarrage des cultures", category: "agro", subcategory: "engrais", engraisGroup: "npk-liquides", badge: "NPK Liquides", badgeColor: "bg-indigo-600", icon: FlaskConical, image: azoPhosImg, description: "Azo-PHOS est un engrais liquide à base de phosphore, azote, matière organique et oligo-éléments. La formulation de Azo-PHOS est très convenable en fertigation pour assurer un bon démarrage de toutes les cultures.\n\nPar sa composition, Azo-PHOS permet de :\n• Éviter la formation des précipités chimiques dans les systèmes d'irrigation localisée\n• Débloquer les éléments fertilisants dans le sol\n• Améliorer la mobilité et l'absorption des oligo-éléments\n\nPar sa richesse en matière organique, Azo-PHOS corrige les sols alcalins et calcaires en diminuant leur teneur en sels et en améliorant leur structure. Sa teneur élevée en phosphore très assimilable assure :\n• Un bon enracinement\n• Une bonne floraison\n• Une bonne croissance végétative\n• Une précocité des récoltes\n• Une rigidité des tissus\n\nLa présence du Fer, Magnésium et Bore dans Azo-PHOS renforce les autres apports d'oligo-éléments à la culture." },
  { name: "Faster NPK 1 (12-6-6)", desc: "Engrais foliaire NPK pour favoriser le développement racinaire, les jeunes pousses et améliorer la qualité des bourgeons et fruits", category: "agro", subcategory: "engrais", engraisGroup: "npk-liquides", badge: "NPK Liquides", badgeColor: "bg-indigo-600", icon: FlaskConical, image: fasterNpk1Img, description: "Faster NPK1 est un engrais foliaire formulé à base d'éléments majeurs (N.P.K). Faster NPK1 améliore la vitalité globale des plantes, assure la nutrition facile et rapidement assimilable en azote, phosphore et potassium, ce qui assure la résistance au stress.\n\nFaster NPK1 assure les performances optimales en :\n• Favorisant le développement des racines et jeunes pousses\n• Améliorant la qualité des bourgeons et des fruits\n\nFaster NPK1 peut être utilisé seul ou en mélange avec d'autres produits (fongicides, pesticides…). Le passage d'un Faster NPK à l'autre est recommandé en fonction des stades végétatifs et des besoins ponctuels de la culture. Il est également possible de combiner deux ou trois Faster NPK (Faster NPK1, Faster NPK2 et Faster NPK3) dans une même application." },
  { name: "Faster NPK 2 (5-3-12)", desc: "Engrais foliaire NPK riche en potassium pour améliorer la qualité des bourgeons, des fruits et la résistance au stress", category: "agro", subcategory: "engrais", engraisGroup: "npk-liquides", badge: "NPK Liquides", badgeColor: "bg-indigo-600", icon: FlaskConical, image: fasterNpk2Img, description: "Faster NPK2 est un engrais foliaire formulé à base d'éléments majeurs (N.P.K). Faster NPK2 améliore la vitalité globale des plantes, assure la nutrition facile et rapidement assimilable en azote, phosphore et potassium, ce qui assure la résistance au stress.\n\nFaster NPK2 assure les performances optimales en :\n• Favorisant le développement des racines et jeunes pousses\n• Améliorant la qualité des bourgeons et des fruits\n\nFaster NPK2 peut être utilisé seul ou en mélange avec d'autres produits (fongicides, pesticides…). Le passage d'un Faster NPK à l'autre est recommandé en fonction des stades végétatifs et des besoins ponctuels de la culture. Il est également possible de combiner deux ou trois Faster NPK (Faster NPK1, Faster NPK2 et Faster NPK3) dans une même application." },
  { name: "Faster NPK 3 (enrichi en calcium)", desc: "Engrais foliaire NPK enrichi en calcium pour favoriser le développement racinaire et améliorer la qualité des bourgeons et des fruits", category: "agro", subcategory: "engrais", engraisGroup: "npk-liquides", badge: "NPK Liquides", badgeColor: "bg-indigo-600", icon: FlaskConical, image: fasterNpk3Img, description: "Faster NPK3 est un engrais foliaire formulé à base d'éléments majeurs (N.P.K), enrichi en calcium. Faster NPK3 améliore la vitalité globale des plantes, assure la nutrition facile et rapidement assimilable en azote, phosphore et potassium, ce qui assure la résistance au stress.\n\nFaster NPK3 assure les performances optimales en :\n• Favorisant le développement des racines et jeunes pousses\n• Améliorant la qualité des bourgeons et des fruits\n\nFaster NPK3 peut être utilisé seul ou en mélange avec d'autres produits (fongicides, pesticides…). Le passage d'un Faster NPK à l'autre est recommandé en fonction des stades végétatifs et des besoins ponctuels de la culture. Il est également possible de combiner deux ou trois Faster NPK (Faster NPK1, Faster NPK2 et Faster NPK3) dans une même application." },
  { name: "NITRO-FEED", desc: "Engrais foliaire NPK concentré en azote, enrichi en zinc, manganèse, bore et acides aminés, activateur de débourrement notamment pour les agrumes", category: "agro", subcategory: "engrais", engraisGroup: "npk-liquides", badge: "NPK Liquides", badgeColor: "bg-indigo-600", icon: FlaskConical, image: nitroFeedImg, description: "NITRO-FEED est un produit concentré en azote et enrichi en zinc, manganèse, bore et acides aminés. Cette formulation spéciale constitue un vrai activateur de démarrage de débourrement pour plusieurs cultures et particulièrement les agrumes.\n\nNITRO-FEED assure :\n• Par sa richesse en azote, un développement optimal des jeunes pousses\n• Par sa richesse en zinc et manganèse, la prévention des carences en ces deux éléments\n• Par sa richesse en bore, l'assimilation des différents éléments nutritifs\n• Par sa richesse en extrait d'acides aminés, un rôle d'antistress et d'activateur de multiplication cellulaire" },
  // Engrais - Autres Produits
  { name: "Nergetic DZ+", desc: "Engrais azoté de Fertiberia Tech, technologies C-PRO et Zimactiv pour une libération rapide, puissante et durable des nutriments", category: "agro", subcategory: "engrais", engraisGroup: "autres", badge: "Autres Produits", badgeColor: "bg-rose-600", icon: FlaskConical, image: nergeticDzPlusAsset.url, description: "Nergetic DZ+ de Fertiberia Tech est l'engrais azoté le plus évolué et le plus puissant du marché. Fruit de la combinaison des innovations les plus avancées en matière d'efficacité fertilisante, Nergetic DZ+ contient des nutriments protégés par la technologie C-PRO et des nutriments activés par la technologie Zimactiv.\n\nCes technologies complètent sa composition chimique robuste, optimisant sa capacité à fournir tous ses nutriments rapidement, puissamment et durablement." },
  { name: "PLUSMASTER", desc: "AntiOX — Ligne de fertilisants intégrant la technologie AntiOX qui augmente la teneur en anti-oxydants des plantes et renforce leur résistance aux stress abiotiques", category: "agro", subcategory: "engrais", engraisGroup: "autres", badge: "Autres Produits", badgeColor: "bg-rose-600", icon: FlaskConical, image: plusmasterAsset.url, description: "ANTI OX.\n\nLa ligne exclusive de fertilisants PLUSMASTER a été fabriquée en intégrant la technologie AntiOX, un régulateur sélectif de la circulation de nutriments au niveau du xylème qui augmente la teneur en anti-oxydants des plantes, pour donner des cultures plus efficaces et une rentabilité plus élevée.\n\nLa technologie AntiOX se base sur un complexe activé de minéraux siliceux qui augmentent la teneur en anti-oxydants des plantes, qui aident à surmonter le stress oxydatif. Elle renforce le métabolisme végétal et les rend plus résistantes aux stress abiotiques, augmentant ainsi la productivité des cultures.\n\nAvec la technologie AntiOX, les racines augmentent leur capacité d'absorption d'eau, de nutriments et de silicium qui renforce le système vasculaire, permettant ainsi une circulation plus efficace de l'eau et des nutriments. De plus, avec AntiOX, la plante dispose d'une plus grande capacité de production d'enzymes et composés anti-oxydants, qui aident à combattre les déséquilibres qui affectent la production." },
  // Protection - Autres
  { name: "Ca Phos", desc: "Produit à base d'ions phosphite complexés avec le calcium, action préventive contre certaines maladies fongiques", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Ca Phos est un produit à base d'ions phosphite complexés avec le calcium. Les ions phosphites jouent un rôle préventif très important contre certaines maladies fongiques." },
  { name: "Cu Phos", desc: "Engrais foliaire correcteur de carence en cuivre enrichi en phosphore", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Cu Phos est un engrais foliaire correcteur de carence en cuivre enrichi en phosphore." },
  { name: "Eco Phos", desc: "Engrais foliaire correcteur de carence en potassium enrichi en phosphore", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Eco Phos est un engrais foliaire correcteur de carence en potassium enrichi en phosphore." },
  { name: "FORMOLE", desc: "Composé organique liquide, biocide désinfectant et conservateur pour matériel de récolte et bâtiments", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "FORMOLE est un composé organique sous forme liquide utilisé comme biocide désinfectant et conservateur. Il est employé pour désinfecter le matériel de récolte et les bâtiments, il permet d'enrayer la persistance et la diffusion des micro-organismes." },
  { name: "FUMA STOP", desc: "Savon potassique conçu contre la fumagine produite par la sécrétion du miellat des hémiptères (pucerons, mouches blanches…)", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Savon potassique.\n\nFUMA STOP est un produit à base de savon potassique conçu contre la fumagine produite par la sécrétion du miellat par la majorité des hémiptères : pucerons, mouches blanches, etc." },
  { name: "HYPO-CAL", desc: "Désinfectant puissant à base d'hypochlorite de calcium pour la désinfection et la purification de l'eau en agriculture", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Hypocal est une solution puissante à base d'hypochlorite de calcium, idéale pour la désinfection et la purification de l'eau. Utilisé largement en agriculture, ce produit assure une élimination efficace des agents pathogènes et maintient un environnement sain pour vos cultures.\n\nHypocal se distingue par sa forte concentration en chlore actif, garantissant une action rapide et durable. Protégez vos installations agricoles et améliorez la qualité de l'eau avec Hypocal, le choix des professionnels pour une désinfection optimale." },
  { name: "SULVIA", desc: "Solution NK (SO₃) 10-3 (60) : engrais liquide à base de soufre systémique, absorption racinaire et foliaire", category: "agro", subcategory: "protection", protectionGroup: "autres", badge: "Autres", badgeColor: "bg-rose-600", icon: FlaskConical, image: "/placeholder.svg", description: "Solution NK (SO₃) 10-3 (60).\n\nSULVIA est un engrais liquide à base de soufre systémique, permettant une absorption de ses composants actifs par voie racinaire et foliaire.\n\nSULVIA favorise la synthèse des acides aminés soufrés (L-cystéine, méthionine, cystine), du glutathion, des protéines, des phytokélines et des vitamines du groupe B. SULVIA stimule le métabolisme secondaire de la plante pour générer des terpènes, des alcaloïdes et des phénols qui activent la croissance végétative et renforcent la culture.\n\npH (20°C) : 8,5\nDensité (20°C) : 1,3" },
  // Complément Nutritionnelle - Biostimulants
  { name: "ALGOMIN", desc: "Biostimulant à base d'extraits d'algues, activateur de croissance riche en phytohormones, oligo-éléments et acides aminés", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: algominAsset.url, description: "La présence des activateurs de croissance sous forme de phytohormones comme les bétaïne, cytokinines, auxines et gibbérellines dans la composition des extraits d'algues fait de ALGOMIN le meilleur activateur de croissance. La richesse des extraits d'algues en nombreux oligo-éléments et acides aminés qui se trouvent concentrés dans ALGOMIN complexés et chelatés naturellement, sont facilement assimilables car les algues les fournissent sous forme organique, et jouent un rôle direct en cas de carence ou même micro-carences en oligo et/ou micro-éléments. Un apport régulier en ALGOMIN explique les résultats observés.\n\nALGOMIN est le meilleur biostimulant activateur de multiplication des tissus végétatifs, de coloration des fruits et aussi sur la capacité à améliorer la tolérance des plantes à la salinité, la chaleur et la sécheresse." },
  { name: "ALGOMIN 100", desc: "Fertilisant en poudre à base d'extraits d'algues marines (Ascophyllum nodosum), riche en protéines, acides aminés et régulateurs de croissance", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: algomin100Asset.url, description: "Fertilisant à base d'extraits d'algues marines.\n\nALGOMIN100 est un fertilisant en poudre à base d'extraits d'algues marines (Ascophyllum nodosum), essentiellement comme principale matière première, et riche en 18 types de protéines et acides aminés qui peuvent être directement absorbés par les plantes et les régulateurs de croissance (l'auxine, cytokinine, la gibbérelline, etc.), acide alginique, acide humique, les vitamines, les nucléotides, les facteurs de résistance au stress et les éléments essentiels pour la croissance des végétaux (azote, phosphore, potassium, calcium, magnésium, soufre, fer, manganèse, cuivre, zinc, molybdène, bore, etc.). Toutes ces substances bioactives sont en présence naturelle extraites d'algues, sans aucun ajout chimique.\n\nALGOMIN100 conserve une légère odeur d'origine de poisson et d'algues. ALGOMIN100 ne laisse aucun résidu.\n\nUn apport régulier en ALGOMIN100 explique les résultats observés. Il est le meilleur biostimulant activateur de multiplication des tissus végétatifs, de coloration des fruits et aussi sur la capacité à améliorer la tolérance des plantes à la salinité, la chaleur et la sécheresse." },
  { name: "AMIN-UP", desc: "Biostimulant à base d'acides aminés d'origine marine enrichi en oligo-éléments, activateur de croissance et antistress", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: aminUpAsset.url, description: "AMIN-UP est un biostimulant à base d'acides aminés issus d'hydrolyse des protéines naturelles d'origine marine, et enrichi en oligoéléments essentiels comme le bore (B), manganèse (Mn), fer (Fe), magnésium (Mg) et cuivre (Cu).\n\nAMIN-UP est formulé spécialement pour assurer le rôle d'activateur de croissance par l'activation de la multiplication cellulaire.\n\nIl joue le rôle d'antistress surtout pendant les périodes difficiles (froid, gelée, chaleur, repiquage…)." },
  { name: "Aminon WSP", desc: "Poudre soluble d'azote organique d'acides aminés, biostimulant nutritionnel stimulant croissance, floraison et fructification", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: aminonWspAsset.url, description: "Aminon WSP est un produit en poudre qui contient de l'azote organique provenant d'acides aminés, offrant d'excellentes propriétés nutritionnelles et un effet biostimulant. Il rétablit l'équilibre naturel de la plante, en stimulant la croissance végétative et la fonction chlorophyllienne, il protège également la plante des conditions défavorables afin d'atteindre la capacité productive maximale, en améliorant la croissance, la floraison et la fructification, en obtenant une augmentation du développement des fruits et une progression en maturité.\n\nAminon WSP améliore les effets phytosanitaires et les nutriments foliaires, conduisant à une augmentation de l'efficacité des traitements, active les mécanismes de défense contre les ravageurs, les maladies et les conditions météorologiques défavorables." },
  { name: "BETAMIN", desc: "Biostimulant à base de bétaïne-glycine pour renforcer la résistance et stimuler la croissance et la production des cultures", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: betaminAsset.url, description: "BETAMIN est un biostimulant formulé spécialement à base de bétaïne-glycine, pour renforcer la résistance et stimuler la croissance et la production des cultures.\n\nLa bétaïne glycine régule les échanges hydriques des cellules et améliore la résistance des plantes face aux situations stressantes (la sécheresse, les températures extrêmes et la salinité). Il augmente également la capacité de la plante à effectuer la photosynthèse, entraîne un apport efficace de nutriments et une augmentation de la production et de la qualité, et favorise une meilleure absorption du traitement.\n\nIl est recommandé en agriculture conventionnelle et biologique." },
  { name: "BETAMIN 100", desc: "Produit naturel de nouvelle génération concentré en complexe glycine-bétaïne (97%), réduit le stress thermique, hydrique ou salin", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: betamin100Asset.url, description: "BETAMIN 100 est un produit naturel de nouvelle génération concentré en complexe glycine-bétaïne (97%).\n\nLe principal avantage de la glycine-bétaïne est de réduire le stress des plantes en situations de stress thermique, hydrique ou salin et de permettre une réaction de récupération plus rapide lorsqu'elles sont confrontées à ces situations. La glycine-bétaïne aide surtout la plante à équilibrer l'hydratation cellulaire." },
  { name: "GROW-A++", desc: "Activateur de croissance concentré en acides aminés essentiels et bétaïne glycine, enrichi en molybdène", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: growAPlusAsset.url, description: "GROW-A++ est un activateur de croissance nouvelle génération concentré en acides aminés essentiels (L-lysine, acide glutamique, L-tryptophane et la bétaïne glycine) et enrichi en molybdène. GROW-A++ agit comme un précurseur/stimulateur d'activités physiologiques de tout système végétatif dans des conditions de stress (froid, gelée, chaleur, repiquage, etc.). GROW-A++ régule la croissance et la réponse des plantes en fonction des modifications de l'environnement. Le catabolisme de la lysine produit des polyamines impliquées dans la croissance et le développement des plantes.\n\nGROW-A++ améliore la synthèse de la chlorophylle et, conjointement avec d'autres acides aminés (proline, glutamate et méthionine), est essentiel pour la germination du pollen et l'élongation du tube pollinique." },
  { name: "RADIFARM", desc: "Biostimulant organo-minéral pour la phase de plantation, stimule la formation d'un système racinaire robuste et étendu", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: radifarmAsset.url, description: "RADIFARM est un biostimulant organo-minéral conçu pour des applications pendant la phase de plantation et/ou durant les premiers stades de développement des cultures. Son objectif principal est de stimuler la formation de systèmes racinaires robustes et étendus en prolongeant les racines existantes tout en favorisant la création de nouvelles racines adventives." },
  { name: "RAISOL", desc: "Biostimulant enracineur concentré à base d'acides aminés, polysaccharides et oligo-éléments essentiels", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: raisolAsset.url, description: "Biostimulant enracineur concentré.\n\nRAISOL est un biostimulant enracineur concentré, formulé essentiellement d'acides aminés et de polysaccharides obtenus par hydrolyse des protéines naturelles et d'un cocktail d'oligo-éléments essentiels. RAISOL assure une stimulation racinaire adéquate et ainsi un bon développement durant tous les stades de la plante." },
  { name: "ROOT-A++", desc: "Activateur de développement racinaire concentré en acides aminés essentiels, enrichi en potassium, soufre, magnésium et molybdène", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: rootAPlusAsset.url, description: "Activateur de développement racinaire.\n\nROOT-A++ est un activateur de développement racinaire nouvelle génération concentré en acides aminés essentiels (L-lysine, acide glutamique, L-tryptophane), matières organiques et enrichi en éléments essentiels (potassium, soufre, magnésium) et en microéléments (molybdène).\n\nROOT-A++ agit comme un précurseur/stimulateur d'activités de développements des tissus racinaires en particulier lors des conditions de chocs de stress ou de repiquage." },
  { name: "ROOT-UP", desc: "Biostimulant enracineur à base d'acides aminés et matières organiques, enrichi en azote, potassium, soufre et magnésium", category: "agro", subcategory: "complement", complementGroup: "biostimulants", badge: "Biostimulant", badgeColor: "bg-emerald-600", icon: Sprout, image: rootUpAsset.url, description: "ROOT-UP est un biostimulant enracineur à base d'acides aminés et matières organiques. Il est formulé et constitué d'éléments nécessaires au bon enracinement, essentiellement l'azote, potassium, soufre et magnésium.\n\nROOT-UP assure un meilleur développement des racines, lutte contre les chocs de stress et de repiquage, permet une reprise rapide de la végétation (cas de la vigne au stade débourrement), permet une floraison précoce et améliore le rendement grâce au développement racinaire et à la surface d'absorption." },
  // Correcteurs de carences
  { name: "Bor Zn", desc: "Engrais solide à base de bore et de zinc pour corriger les carences en ces microéléments", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: borZnAsset.url, description: "Bor Zn est un engrais solide à base de bore et de zinc spécialement conçu pour améliorer et/ou corriger les carences de ces microéléments dans la culture. Cet engrais peut être utilisé dans tous les types de cultures : horticole, fruitière, d'agrumes, tropicale, grimpante, ornementale, extensive." },
  { name: "BORE-UP", desc: "Engrais foliaire totalement soluble couvrant les besoins en bore aux stades critiques", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: boreUpAsset.url, description: "BORE-UP est un engrais foliaire totalement soluble dans l'eau. Il couvre les besoins de toutes les cultures sensibles aux carences en bore particulièrement à des stades critiques.\n\nLe bore est un métabolite essentiel à la physiologie des systèmes végétatifs surtout par la fertilité du pollen et donc l'efficacité de la floraison, prévient la pourriture du collet chez la betterave à sucre et améliore l'absorption des éléments (phosphore, potassium, magnésium etc.)." },
  { name: "Calcibore", desc: "Correcteur des carences en calcium et en bore, complexé avec des acides carboxyliques", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: caliboreAsset.url, description: "Calcibore est un correcteur des carences en calcium et en bore. Sa formulation spéciale complexée avec les acides carboxyliques assure d'une part une nette amélioration de reconnaissance et fixation du calcium et du bore et d'autre part une mobilité efficace dans la sève de la plante.\n\nCalcibore est recommandé pour corriger les carences en calcium, ce dernier joue un rôle important dans le métabolisme végétatif : augmente la résistance des tissus végétatifs contre toute agression extérieure (infections, parasites, stress, etc.), améliore la conservabilité post-récolte, prévient les nécroses chez la tomate et le poivron, réduit la chute des fleurs et fruits et favorise le mûrissement des fruits.\n\nLe bore est un élément fondamental qui intervient dans le métabolisme de la plante par le transport des glucides, la formation et la fertilité du pollen, favorise la nouaison, la synthèse des protéines et l'absorption du phosphore, potassium, magnésium, etc." },
  { name: "CALCINE", desc: "Engrais liquide concentré en calcium totalement soluble dans l'eau", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: calcineAsset.url, description: "CALCINE est un engrais liquide concentré en calcium totalement soluble dans l'eau.\n\nIl couvre les besoins de toutes les cultures sensibles aux carences en calcium particulièrement à des stades critiques. Le calcium joue un rôle important dans le métabolisme végétatif et permet de :\n- Augmenter la résistance des tissus végétatifs contre toute agression extérieure (infections, parasites, stress, etc.).\n- Améliorer la conservabilité post-récolte.\n- Prévenir les nécroses chez la tomate et le poivron.\n- Réduire la chute des fleurs et des fruits.\n- Favoriser le mûrissement des fruits." },
  { name: "ECO BORE 18", desc: "Formulation très concentrée en bore soluble pour la floraison et la nouaison des fruits", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: ecoBore18Asset.url, description: "Formulation très concentrée en élément Bore.\n\nEco BORE 18 est un produit riche en bore soluble conçu spécialement pour couvrir les besoins en bore et remédier aux carences en cet élément.\n\nLe bore est un élément indispensable pour la réussite de la floraison et la nouaison des fruits, notamment pour les cucurbitacées, l'olivier et les arbres fruitiers.\n\nEco BORE 18 est une formulation très concentrée en élément Bore, cette richesse permet de satisfaire au maximum les besoins des différentes cultures." },
  { name: "Folisol Mn-Zn", desc: "Engrais foliaire pour lutter contre les doubles carences en zinc et manganèse", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: folisolMnZnAsset.url, description: "Engrais foliaire.\n\nFolisol Mn-Zn est un engrais foliaire pour lutter contre les doubles carences en zinc et manganèse." },
  { name: "GROW-ZnMn", desc: "Engrais foliaire liquide complexe Zinc - Manganèse enrichi en matière organique", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: growZnMnAsset.url, description: "Complexe Zinc - Manganèse.\n\nGROW-ZnMn est un engrais foliaire liquide. Le complexe Zinc-Manganèse est une solution concentrée à diluer dans l'eau.\n\nGROW-ZnMn couvre les besoins en Zn et Mn de toutes les cultures sensibles aux carences en ces éléments particulièrement lors des stades critiques. Le complexe Zinc-Manganèse joue un rôle très important dans le métabolisme végétatif comme :\n- La synthèse de la chlorophylle.\n- La fixation d'azote.\n- La formation des hormones de croissance.\n- La catalyse des réactions de la photosynthèse.\n- Le grossissement des fruits.\n\nGROW-ZnMn est enrichi en matière organique." },
  { name: "BORMAX", desc: "Source en bore en poudre totalement soluble pour couvrir les besoins et prévenir la carence", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: bormaxAsset.url, description: "BORMAX est le produit idéal source en bore qui permet de couvrir les besoins et prévient la carence en cet élément. Le moment d'application du bore reste la condition nécessaire pour assurer l'efficacité du produit. BORMAX est présenté en poudre totalement soluble dans l'eau.\n\nLe bore intervient dans le métabolisme de la plante :\n- Le transport des glucides.\n- La formation et la fertilité du pollen.\n- Favorise la nouaison.\n- La synthèse des protéines.\n- L'absorption du phosphore, potassium, magnésium, …etc" },
  { name: "MAX-Mg", desc: "Correcteur de carence en magnésium complexé par les acides aminés", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: maxMgAsset.url, description: "MAX-Mg est un produit qui permet de prévenir et corriger les déficiences en Magnésium pour tous types de cultures particulièrement vigne, agrumes, tomate, …\n\nLa forme complexée du magnésium par les acides aminés évite son blocage et accélère par conséquent son assimilation.\n\nEn outre, l'application foliaire de MAX-Mg permet de contourner efficacement les blocages chimiques Potasse/Magnésie au niveau du sol." },
  { name: "MOLYBD-UP", desc: "Produit riche en Molybdène pour cucurbitacées et légumineuses en sols acides", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: molybdUpAsset.url, description: "MOLYBD-UP est un produit riche en Molybdène. Il permet de couvrir les besoins des cultures en cet élément notamment chez les cucurbitacées et les légumineuses surtout dans les sols à pH acides. Le Molybdène joue un rôle important dans le métabolisme des plantes à savoir :\n- La croissance et le développement des fleurs et des fruits.\n- La réduction de l'azote nitrique.\n- La fixation de l'azote atmosphérique par les bactéries symbiotiques (nodosités).\n- L'assimilation de l'azote par la plante.\n- L'intervention dans le métabolisme du phosphore." },
  { name: "MOLYBORE", desc: "Engrais foliaire liquide concentré apportant conjointement bore et molybdène", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: molyboreAsset.url, description: "MOLYBORE est un engrais foliaire liquide concentré, totalement soluble dans l'eau et apporte conjointement le bore et le molybdène.\n\nMOLYBORE couvre par sa teneur en bore les besoins de toutes les cultures sensibles aux carences en bore, améliore la résistance des cultures au gel et au stress hydrique. Il favorise une bonne alimentation en eau et une floraison homogène et régulière.\n\nMOLYBORE favorise par sa teneur en molybdène la croissance des nodosités chez les légumineuses, le développement des fleurs et des fruits chez les cucurbitacées, l'assimilation et la fixation de l'azote et le métabolisme du phosphore." },
  { name: "MOLYCARE", desc: "Molybdate d'ammonium & azote uréique pour prévenir et corriger la carence en molybdène", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: molycareAsset.url, description: "Molybdate d'ammonium & azote uréique.\n\nMOLYCARE est un engrais en poudre cristalline blanche soluble dans l'eau à base de molybdate d'ammonium et d'azote uréique, qui agit efficacement dans la prévention et la correction de la carence en molybdène.\n\nGrâce à sa forte richesse en Molybdène, MOLYCARE est spécialement conçu pour contribuer à la santé globale des plantes et à l'amélioration des rendements, prévient contre le nanisme, le jaunissement, la nécrose, les colorations des nodules des légumineuses, etc. Malgré la faible quantité assimilée, le molybdène est indispensable au même titre que les éléments principaux.\n\nMOLYCARE est utilisé dès l'apparition de la première fleur dans l'horticulture, les arbres fruitiers, les agrumes, les oliveraies, les vignobles et les plantes ornementales." },
  { name: "OXYPOTASS", desc: "Engrais foliaire liquide concentré en potassium sous forme oxyde, totalement soluble", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: oxypotassAsset.url, description: "OXYPOTASS est un engrais foliaire liquide concentré en potassium sous la forme oxyde totalement soluble dans l'eau. Il couvre les besoins de toutes les cultures sensibles aux carences en potassium particulièrement à des stades critiques. Le potassium joue un rôle important dans le métabolisme végétatif et permet de :\n- Augmenter et améliorer la synthèse des sucres (le goût sucré des fruits).\n- Améliorer la conservabilité et la consistance post-récolte des fruits.\n- Améliorer le calibre.\n- Réduire la chute des fleurs et des fruits.\n- Favoriser le mûrissement des fruits." },
  { name: "Solquel Zinc", desc: "Correcteur de carences en zinc sous forme de chélate d'EDTA", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: solquelZincAsset.url, description: "Solquel Zinc est un correcteur de carences en zinc sous forme de chélate d'EDTA.\n\nIl doit être appliqué dissous dans l'eau pour éviter les carences en cet élément chez toutes les espèces.\n\nIntervalle de stabilité de pH : 3 – 12." },
  { name: "Solquel-L Calcium-Bore", desc: "Correcteur de carences à base de calcium complexé et de bore pour application foliaire", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: solquelLCalciumBoreAsset.url, description: "Solquel-L Calcium-Bore est un correcteur de carences à base de calcium complexé et de bore, pour une application foliaire.\n\nIl peut être utilisé à la fois dans le contrôle préventif et dans la correction des états de carence dus à des déficiences ou des déséquilibres dans l'assimilation de ces éléments." },
  { name: "Solquel-L Potassium", desc: "Solution de potassium chélaté à l'EDTA pour prévenir les états de carence", category: "agro", subcategory: "complement", complementGroup: "correcteurs-carences", badge: "Correcteur de carences", badgeColor: "bg-purple-600", icon: Sprout, image: solquelLPotassiumAsset.url, description: "Solquel L-Potassium est une solution de potassium chélaté avec de l'EDTA, formulée pour prévenir les états de carence. La formulation liquide garantit l'absorption et l'assimilation correctes du potassium par la plante grâce à l'agent chélateur." },
  { name: "FerroQuelato H48", desc: "6.0 % Fer Chélaté par EDDHA, 4.8 % Ortho-Ortho — granulés sans poussière", category: "agro", subcategory: "complement", complementGroup: "correcteurs-chlorose", badge: "Correcteur de chlorose ferrique", badgeColor: "bg-purple-600", icon: Sprout, image: ferroquelatoH48Asset.url, description: "6.0 % Fer Chélaté par EDDHA — 4.8 % Ortho-Ortho.\n\nFerroQuelato H48 est un fer chélaté par EDDHA. Sa formulation garantit une stabilité maximale et une protection du fer, assurant une disponibilité complète pour les cultures.\n\nGrâce à la technologie de séchage, il est granuleux et facile à manipuler, et il est propre sans poussière. Le fer est un élément essentiel à la synthèse de la chlorophylle et au développement des plantes. La combinaison d'isomères ortho-ortho et ortho-para contenus dans FerroQuelato H48 offre l'équilibre optimal entre l'efficacité de l'impact (o-p) et la durabilité dans le temps (o-o)." },
  { name: "FerroQuelato S40", desc: "6.0 % Fer Chélaté par EDDHSA — granulés faciles à manipuler et sans poussière", category: "agro", subcategory: "complement", complementGroup: "correcteurs-chlorose", badge: "Correcteur de chlorose ferrique", badgeColor: "bg-purple-600", icon: Sprout, image: ferroquelatoS40Asset.url, description: "6.0 % Fer Chélaté par EDDHSA.\n\nFerroQuelato S40 est un fer chélaté par EDDHSA. Sa formulation garantit une stabilité maximale et une protection du fer, assurant une disponibilité complète pour les cultures.\n\nGrâce à la technologie de séchage, il est granuleux et facile à manipuler, et il est propre sans poussière.\n\nLe fer est un élément essentiel à la synthèse de la chlorophylle et au développement des plantes." },
  { name: "Sequestrene® 138Fe 100 SG", desc: "Chélate de fer EDDHA pour la correction et prévention des carences en fer", category: "agro", subcategory: "complement", complementGroup: "correcteurs-chlorose", badge: "Correcteur de chlorose ferrique", badgeColor: "bg-purple-600", icon: Sprout, image: sequestrene138FeAsset.url, description: "Sequestrene® 138Fe 100 SG permet une correction et prévention des carences en Fer visibles ou cachées sur toutes les cultures, ainsi qu'une amélioration de la qualité de production (calibre, couleur, etc.).\n\nSequestrene® 138Fe 100 SG peut être appliqué en sec ou en solution, il est entièrement soluble dans l'eau. Il peut être mélangé aux fertilisants et peut être appliqué avec l'eau d'irrigation. La solution à 0.1 % de Sequestrene® 138Fe 100 SG peut être utilisée pour le trempage des racines des plantes à la transplantation." },
  // Oligo-éléments
  { name: "BIMIX", desc: "Source idéale d'oligo-éléments complémentaires aux éléments majeurs (N-P-K), enrichie en acides aminés", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: bimixAsset.url, description: "BIMIX est la source idéale d'oligo-éléments complémentaires aux éléments majeurs (N-P-K), il est totalement soluble dans l'eau.\n\nLes carences en oligo-éléments influencent fatalement le développement végétatif, la qualité des fruits et le rendement de la culture.\n\nBIMIX contient les éléments essentiels aux fonctions physiologiques de tous les systèmes végétatifs (photosynthèse, réaction d'oxydo-réduction, fixation d'azote…), il est aussi enrichi en acides aminés." },
  { name: "CHELATOMIX", desc: "Oligo-éléments chélatés par l'EDTA, totalement solubles dans l'eau", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: chelatomixAsset.url, description: "CHELATOMIX est la source idéale d'oligo-éléments chélatés par l'EDTA. Ils constituent la meilleure source complémentaire aux éléments majeurs (N-P-K). CHELATOMIX est totalement soluble dans l'eau.\n\nLa forme chélatée des oligo-éléments prévient d'une manière efficace les carences en oligo-éléments ; ces carences, une fois apparentes, influencent fatalement le développement végétatif, la qualité des fruits et le rendement de la culture.\n\nCHELATOMIX contient les éléments complexés essentiels aux fonctions physiologiques de tous les systèmes végétatifs (photosynthèse, réaction d'oxydo-réduction, fixation d'azote…)." },
  { name: "Eco Mix", desc: "Oligo-éléments riches en acides aminés pour améliorer rendement et qualité des récoltes", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: ecoMixAsset.url, description: "Les oligo-éléments sont des éléments dont le végétal a besoin en faibles quantités ; ils participent à la vie des plantes en raison des réactions chimiques qu'ils engendrent pour une croissance normale.\n\nEco MIX, grâce à sa composition riche en acides aminés, permet une amélioration du rendement et de la qualité des récoltes illustrée par une croissance plus rapide de la culture, une augmentation du calibre des fruits et une récolte plus précoce. Ceci est la conséquence de la stimulation des fonctions physiologiques dans les moments les plus critiques de la culture : la levée, la floraison, la pollinisation, la nouaison, etc.\n\nL'utilisation régulière d'Eco MIX par fertigation et pulvérisation prévient les déséquilibres et les déficiences des micro-éléments et corrige les états de carence." },
  { name: "Oligo Fert MIX", desc: "Engrais solide à base de bore, cuivre, fer, manganèse, molybdène et zinc", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: oligoFertMixAsset.url, description: "Oligo Fert MIX est un engrais solide à base de bore, de cuivre, de fer, de manganèse, de molybdène et de zinc, spécialement conçu pour améliorer et/ou corriger les carences de ces microéléments dans la culture.\n\nCet engrais peut être utilisé dans tous les types de cultures : horticole, fruitière, d'agrumes, tropicale, grimpante, ornementale, extensive." },
  { name: "Oligo Fert Plus", desc: "Engrais solide à base de bore, cuivre, manganèse, molybdène et zinc", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: oligoFertPlusAsset.url, description: "Oligo Fert Plus est un engrais solide à base de bore, de cuivre, de manganèse, de molybdène et de zinc, spécialement conçu pour améliorer et/ou corriger les carences de ces microéléments dans la culture.\n\nCet engrais peut être utilisé dans tous les types de cultures : horticole, fruitière, d'agrumes, tropicale, grimpante, ornementale, extensive." },
  { name: "Oligo Mix Plus Zéro Bore", desc: "Source d'oligo-éléments sans bore, idéale pour l'irrigation à l'eau de dessalement", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: oligoMixPlusZeroBoreAsset.url, description: "Oligo Mix Plus Zéro Bore est la meilleure source d'oligo-éléments sans bore, en particulier pour les cultures utilisant l'eau de dessalement en irrigation.\n\nIl est la source idéale d'oligo-éléments complémentaires aux éléments majeurs (N-P-K) et il est totalement soluble dans l'eau.\n\nLes carences en oligo-éléments influencent fatalement le développement végétatif, la qualité des fruits et le rendement de la culture." },
  { name: "Oligomix Delta", desc: "Source idéale d'oligo-éléments complémentaires aux éléments majeurs, enrichie en acides aminés", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: oligomixDeltaAsset.url, description: "OLIGOMIX DELTA est la source idéale d'oligo-éléments complémentaires aux éléments majeurs (N-P-K), il est totalement soluble dans l'eau. Les carences en oligo-éléments influencent fatalement le développement végétatif, la qualité des fruits et le rendement de la culture.\n\nOLIGOMIX DELTA contient les éléments essentiels aux fonctions physiologiques de tous les systèmes végétatifs (photosynthèse, réaction d'oxydo-réduction, fixation d'azote…), il est aussi enrichi en acides aminés." },
  { name: "Oligomixplus", desc: "Complexe d'oligo-éléments totalement soluble, enrichi en acides aminés", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: oligomixplusAsset.url, description: "Complexe d'oligo-éléments.\n\nOLIGOMIXPLUS est la source idéale d'oligo-éléments complémentaires aux éléments majeurs (N-P-K), il est totalement soluble dans l'eau. Les carences en oligo-éléments influencent fatalement le développement végétatif, la qualité des fruits et le rendement de la culture.\n\nOLIGOMIXPLUS contient les éléments essentiels aux fonctions physiologiques de tous les systèmes végétatifs (photosynthèse, réaction d'oxydo-réduction, fixation d'azote…), il est aussi enrichi en acides aminés." },
  { name: "Solquel Mix-EDTA", desc: "Correcteur multi-essentiel chélaté par l'EDTA à haute teneur en fer", category: "agro", subcategory: "complement", complementGroup: "oligo-elements", badge: "Oligo-éléments", badgeColor: "bg-purple-600", icon: Sprout, image: solquelMixEdtaAsset.url, description: "Solquel Mix-EDTA est un correcteur multi-essentiel, dont les micro-éléments sont chélatés par l'EDTA et qui a une teneur élevée en fer.\n\nRecommandé pour tous les stades de la culture en prévention des carences.\n\nIntervalle de stabilité de pH : 1 – 6,5." },
  // Régulateurs de PH & Mouillants
  { name: "Eco-5", desc: "Acidifiant régulateur de pH aux 5 actions : acidifiant, indicateur, tensioactif, mouillant, engrais", category: "agro", subcategory: "complement", complementGroup: "regulateurs-ph", badge: "Régulateur de PH & Mouillant", badgeColor: "bg-purple-600", icon: Sprout, image: eco5Asset.url, description: "Acidifiant régulateur de pH.\n\nECO-5 est formulé spécialement pour assurer une réelle amélioration des traitements. Grâce à sa composition spéciale, ECO-5 assure 5 actions majeures à la fois :\n- Acidifiant.\n- Indicateur de virage de pH.\n- Tensioactif.\n- Émulsifiant (mouillant).\n- Engrais foliaire riche en azote et en phosphore." },
  { name: "Mouillax", desc: "Engrais foliaire mouillant émulsifiant pour une dispersion optimale sur les feuilles", category: "agro", subcategory: "complement", complementGroup: "regulateurs-ph", badge: "Régulateur de PH & Mouillant", badgeColor: "bg-purple-600", icon: Sprout, image: mouillaxAsset.url, description: "MOUILLAX est un engrais foliaire mouillant émulsifiant.\n\nMOUILLAX garantit une dispersion optimale sur les feuilles et assure ainsi l'efficacité de la solution fertilisante ou du traitement phytosanitaire." },
  { name: "Tec-pH", desc: "Acidifiant régulateur de pH pour ramener l'eau au pH optimal d'efficacité du traitement", category: "agro", subcategory: "complement", complementGroup: "regulateurs-ph", badge: "Régulateur de PH & Mouillant", badgeColor: "bg-purple-600", icon: Sprout, image: tecPhAsset.url, description: "Acidifiant régulateur de pH.\n\nTEC-pH est une solution composée d'un mélange d'acides dosés spécialement pour ramener le pH optimum d'efficacité du traitement.\n\nTout produit phytosanitaire est assimilé par les feuilles à un pH bien défini (généralement entre 5,5 et 6,5). Les eaux d'irrigation, et particulièrement les eaux des barrages, ont un pH supérieur à 7 : d'où l'importance d'utiliser un régulateur de pH." },
  // Structurants de sol
  { name: "FULV100", desc: "Acides fulviques concentrés pour restituer les réserves organiques du sol et stimuler le développement racinaire", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/63.png?fit=800%2C800&ssl=1", description: "FULV100 est une véritable innovation de composés organiques concentrés en acides fulviques très rapidement assimilables par tout système végétatif.\n\nFULV100 assure entre autres :\n- Restitution des réserves organiques du sol et amélioration de la disponibilité des éléments nutritifs.\n- Stimulation du développement racinaire.\n- Renforcement de l'activité de la flore microbienne et favorisation de l'activité biologique du sol." },
  { name: "HUMIKA100", desc: "Concentré d'acides humiques provenant à 100% de la léonardite pour couvrir les besoins en matières organiques", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/73.png?fit=800%2C800&ssl=1", description: "HUMIKA100 est un concentré de matière organique sous forme d'acides humiques provenant 100% de la léonardite.\n\nHUMIKA100 est la meilleure source d'acides humiques pour couvrir les besoins en matières organiques de toutes les cultures.\n\nHUMIKA100 permet de restituer au sol ses réserves organiques, ce qui assure l'amélioration des propriétés physico-chimiques et microbiologiques du sol." },
  { name: "NUTRI100", desc: "Produit couvrant les besoins en acides humiques et fulviques pour une assimilation rapide et durable", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/74.png?fit=800%2C800&ssl=1", description: "NUTRI100 est un produit conçu spécialement pour couvrir les besoins en acides humiques et acides fulviques. Il assure d'une part l'assimilation rapide de la fraction fulvique et assure d'autre part la restitution au sol de ses réserves en matières organiques par la teneur en acide humique." },
  { name: "ORGAFORT", desc: "Concentré à base de matière organique pour structurer le sol et renforcer son activité microbienne", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/72.png?fit=800%2C800&ssl=1", description: "ORGAFORT est un concentré à base de matière organique qui permet de restituer au sol ses réserves naturelles pour assurer un bon équilibre entre la matière organique et les constituants du sol.\n\nORGAFORT assure une meilleure structuration du sol et renforce son activité microbienne. Son pH acide favorise l'assimilation des éléments nutritifs par la plante, d'où une croissance optimale et un développement racinaire approprié." },
  { name: "SALSALT", desc: "Correcteur biologique des sols et des eaux ayant des problèmes de salinité", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2026/07/SALSALT.jpeg?fit=1277%2C1277&ssl=1", description: "SALSALT est un correcteur biologique des sols et des eaux ayant des problèmes de salinité. C'est une solution de calcium complexé par des acides sulfopolyhydroxylés.\n\nIl agit par échange de sodium et de calcium, améliorant la structure du sol et éliminant les sels de sodium." },
  { name: "ZERO-SALINE", desc: "Réducteur de salinité à base d'acides organiques et de calcium", category: "agro", subcategory: "complement", complementGroup: "structurants-sol", badge: "Structurant de sol", badgeColor: "bg-amber-700", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/carpocapse-cydia-pomonella.png-3-1.webp?fit=800%2C800&ssl=1", description: "La salinité du sol est synonyme d'accumulation des sels à la surface du sol et autour des racines, ce qui provoque des blocages d'absorption des nutriments par la plante.\n\nZERO-SALINE, produit à base d'acides organiques et de calcium, permet de réduire la salinité du sol. La présence dans ZERO-SALINE d'acides organiques à faible poids moléculaire qui assurent la mobilité du calcium permet un meilleur échange cationique sur le complexe absorbant du sol. ZERO-SALINE permet également d'éviter l'alcalinisation du sol et l'action dispersante de l'ion sodium." },
  // Engrais chélatés
  { name: "Ca-chelate", desc: "Correcteur de carence en calcium chélaté avec EDTA", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: caChelateAsset.url },
  { name: "Ca-chélate", desc: "Correcteur de carence en calcium chélaté avec EDTA", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: caChelateTexteAsset.url, description: "Ca-chélate Est un correcteur de carence en calcium chélaté avec l’acide éthylène -diamine -tétra -acétique (EDTA) il est présenté sous forme liquide concentré la fraction chélate reste stable dans une gamme de ph 6-14 ,d’où son efficacité le calcium est un nutriment essentiel pour les plantes il joue un rôle importante dans l’absorption des nutriments ,dans la croissance et le développement des plantes ,la croissance et la fermeté des fruits  Etc. c’est un constituant des parois cellulaires des tissus végétaux." },
  { name: "K2o chélate", desc: "Engrais foliaire correcteur de carence en potassium", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: k2oChelateAsset.url, description: "K2o chélate est un engrais foliaire correcteurs de carence en potassium .le potassium chélate favorise la synthèse du sucre et de l’amidon et le transfert des sucres au fruit et participe au grossissement et la maturation des fruits en activant certains enzymes de croissance et en augmentant l’assimilation du calcium et du magnésium .le potassium chélaté par EDTA permet une absorption facile et lente par la plante." },
  { name: "k2o-chelate", desc: "Engrais foliaire correcteur de carence en potassium", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: k2oChelateV2Asset.url },
  { name: "Sol quel-L Potassium", desc: "Solution de potassium chélaté avec EDTA", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: solquelLPotassiumChelateAsset.url, description: "Sol quel L-Potassium est une solution de potassium chélaté avec de l’EDTA, formulée pour prévenir les états de carence. La formulationliquide garantit l’absorption et l’assimilation correctes du potassium par la plante grâce à l’agent chélateur." },
  { name: "Zn mn chélate", desc: "Correcteur de carences concentré en zinc et manganèse chélatés", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: znMnChelateAsset.url, description: "Zn mn chélate est un correcteur des carences très concentré en zinc et en manganèse chélates avec l’acide éthylène -diamine -tétra-acétique (EDTA) sa formulation complexée assure une stabilité du produit sur une large plage de ph (6a 14) d’où son efficacité." },
  { name: "ZnMn-chelate", desc: "Correcteur de carences concentré en zinc et manganèse chélatés", category: "agro", subcategory: "complement", complementGroup: "engrais-chelates", badge: "Engrais chélaté", badgeColor: "bg-phyto-700", icon: FlaskConical, image: znmnChelateAsset.url },
  // Autres produits (complément nutritionnelle)
  // Équipement — Substrat
  { name: "Basissubstrate", desc: "Propagation substrate SM-A280", category: "equipement", equipementGroup: "substrat", badge: "Substrat", badgeColor: "bg-blue-600", icon: Sprout, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/62.png?fit=800%2C800&ssl=1" },
  { name: "Fe-PHOSPHITE", desc: "Ions phosphites complexés avec le fer, préventif contre les maladies fongiques et stimulateur de croissance", category: "agro", subcategory: "complement", complementGroup: "autres", badge: "Phosphite", badgeColor: "bg-phyto-700", icon: FlaskConical, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/50.png?fit=800%2C800&ssl=1", description: "Fe-Phosphite est un produit à base d'ions phosphites complexés avec le fer. Les ions phosphites jouent un rôle préventif très important dans la lutte contre certaines maladies fongiques tout en augmentant la résistance de la plante aux attaques des omycètes, responsables directes du mildiou. Ils lui permettent de bien surmonter les conditions hydriques, nutritionnelles et/ou climatiques favorables à la prolifération des Champignons pathogènes.\n\nPar sa présence dans Fe-Phosphite, le phosphore permet d'avoir une floraison optimale et un très bon développement des tiges et des racines d'où la vigueur de la plante. A son tour, le fer, élément indispensable à tout végétal, joue un rôle actif dans les réactions de photosynthèse qui sont derrière tout son métabolisme.\n\nFe-Phosphite a un effet stimulateur de la croissance végétative tout en permettant à la plante de récupérer rapidement après un stress nutritionnel et/ou pathologique." },
  { name: "Mg-PHOSPHITE", desc: "Engrais liquide à base d'ions phosphites complexés avec le magnésium", category: "agro", subcategory: "complement", complementGroup: "autres", badge: "Phosphite", badgeColor: "bg-phyto-700", icon: FlaskConical, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/51.png?fit=800%2C800&ssl=1", description: "Mg-Phosphite est un engrais liquide à base d'ions phosphites complexés avec le magnésium. Les ions phosphites jouent un rôle préventif important dans la lutte contre certaines maladies fongiques. Ils permettent à la plante de bien résister aux conditions hydriques, nutritionnelles et/ou climatiques favorables à la prolifération des champignons pathogènes.\n\nPar sa richesse en phosphore, Mg-Phosphite assure à la plante une floraison optimale et un meilleur développement des racines et des tiges.\n\nMg-Phosphite est également riche en magnésium, élément qui joue un rôle clé dans le métabolisme de la plante, à savoir :\n• La formation de la chlorophylle.\n• La constitution des parois cellulaires.\n• L'efficacité des enzymes dans les processus de métabolisme.\n• La synthèse, le transport et le stockage des glucides, protéines et matières grasses et en augmentant la concentration de certains éléments tels que l'acide citrique et la vitamine C.\n• La stabilité des membranes cellulaires, ce qui améliore la conservabilité post-récolte des fruits et légumes." },
  { name: "ZnMn-PHOSPHITE", desc: "Engrais liquide à base d'ions phosphites complexés avec zinc et manganèse", category: "agro", subcategory: "complement", complementGroup: "autres", badge: "Phosphite", badgeColor: "bg-phyto-700", icon: FlaskConical, image: "https://i0.wp.com/phytosidid.com/wp-content/uploads/2024/05/52.png?fit=800%2C800&ssl=1", description: "ZnMn-phosphite est un engrais liquide à base d'ions phosphites complexés avec Zinc et Manganèse. Les ions phosphites assurent à la plante un effet préventif en augmentant sa résistance aux attaques des Oomycètes qui sont responsables du Mildiou, ce qui la rend plus tolérante aux conditions hydriques, nutritionnelles et/ou environnementales difficiles.\n\nLe phosphore contenu dans ZnMn-phosphite donne à la plante vigueur, croissance et floraison optimale.\n\nLa richesse de ZnMn-phosphite en Zinc et Manganèse permet :\n• La synthèse de la chlorophylle.\n• La fixation de l'azote atmosphérique pour les légumineuses.\n• La transformation des nitrites vers des formes d'azote plus élaborées (acides aminés, protéines).\n• La formation des hormones de croissance (auxines).\n• La catalyse des réactions d'oxydoréduction (photosynthèse,…).\n• La précocité et le grossissement des fruits." },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);
  const hasComposition = product.composition && product.composition.length > 0;
  const hasDescription = !!product.description;
  const isExpandable = hasComposition || hasDescription;

  return (
    <div className={`bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isExpandable ? "sm:col-span-2" : ""}`}>
      {isExpandable ? (
        <>
          <div
            className="p-5 cursor-pointer hover:bg-phyto-50/30 transition-colors"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-phyto-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-phyto-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                    <span className={`px-2 py-0.5 ${product.badgeColor} text-primary-foreground text-[10px] font-bold rounded-md uppercase tracking-wider`}>
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                    <MousePointerClick className="w-3 h-3" /> Cliquez pour voir les détails
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-phyto-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>
          </div>
          {open && (
            <div className="border-t border-border p-6 animate-fade-in-up">
              <p className="text-muted-foreground text-sm mb-4 text-center">{product.desc}</p>
              {product.image && (
                <div className="flex justify-center my-6">
                  <div className="bg-phyto-50/50 rounded-xl p-6 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-auto max-w-[260px] object-contain" loading="lazy" />
                  </div>
                </div>
              )}
              {hasComposition ? (
                <>
                  <h4 className="text-xs font-bold text-phyto-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                    <List className="w-4 h-4" /> Composition
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-sm">
                    {product.composition!.map((c, i) => (
                      <div key={i} className="flex justify-between py-2.5 border-b border-border">
                        <span className="text-muted-foreground">{c.label}</span>
                        <span className="text-foreground font-semibold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto whitespace-pre-line">
                  {product.description}
                </p>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="p-6">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${product.iconColor || "bg-phyto-100 text-phyto-600"}`}>
            <product.icon className="w-5 h-5" />
          </div>
          {product.image && (
            <div className="bg-phyto-50/50 rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-auto max-h-48 object-contain" loading="lazy" />
            </div>
          )}
          {product.badge && (
            <span className={`${product.badgeColor} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-lg inline-block mb-3`}>
              {product.badge}
            </span>
          )}
          <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm mt-2">{product.desc}</p>
        </div>
      )}
    </div>
  );
};

const engraisGroups = [
  { key: "all", label: "Tout" },
  { key: "acides", label: "Acides" },
  { key: "correcteurs", label: "Correcteurs de Carences" },
  { key: "classiques", label: "Engrais Classiques" },
  { key: "solubles", label: "Engrais Solubles" },
  { key: "speciaux", label: "Engrais Spéciaux" },
  { key: "npk-liquides", label: "NPK Liquides" },
  { key: "npk-solubles", label: "NPK Solubles" },
  { key: "autres", label: "Autres Produits" },
];

const equipementGroups = [
  { key: "all", label: "Tout" },
  { key: "substrat", label: "Substrat" },
  { key: "outillages", label: "Outillages" },
  { key: "materiel-accessoires", label: "Matériel et Accessoires Agricoles" },
  { key: "irrigation", label: "Irrigation" },
  { key: "installation-serres", label: "Installation des Serres" },
  { key: "filets-ficelles", label: "Filets Agricoles et Ficelles Horticoles" },
];

const protectionGroups = [
  { key: "all", label: "Tout" },
  { key: "fongicides", label: "Fongicides" },
  { key: "herbicides", label: "Herbicides" },
  { key: "induction-defenses", label: "Induction des défenses" },
  { key: "insecticides-acaricides", label: "Insecticides-Acaricides" },
  { key: "nematicides", label: "Nématicides" },
  { key: "pheromones", label: "Phéromones" },
  { key: "pieges-agricole", label: "Pièges agricoles" },
  { key: "autres", label: "Autres" },
];

const complementGroups = [
  { key: "all", label: "Tout" },
  { key: "biostimulants", label: "Biostimulants" },
  { key: "correcteurs-carences", label: "Correcteurs de Carences" },
  { key: "correcteurs-chlorose", label: "Correcteurs de Chlorose Ferrique" },
  { key: "oligo-elements", label: "Oligo-éléments" },
  { key: "regulateurs-ph", label: "Régulateurs de PH & Mouillants" },
  { key: "structurants-sol", label: "Structurants de sol" },
  { key: "engrais-chelates", label: "Engrais chélatés" },
  { key: "autres", label: "Autres Produits" },
];

const ProductsSection = () => {
  const [category, setCategory] = useState<"all" | "agro" | "equipement">("all");
  const [subcategory, setSubcategory] = useState<string>("all");
  const [engraisSub, setEngraisSub] = useState<string>("all");
  const [protectionSub, setProtectionSub] = useState<string>("all");
  const [complementSub, setComplementSub] = useState<string>("all");
  const [equipementSub, setEquipementSub] = useState<string>("all");

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (category === "agro" && subcategory !== "all" && p.subcategory !== subcategory) return false;
    if (category === "agro" && subcategory === "engrais" && engraisSub !== "all" && p.engraisGroup !== engraisSub) return false;
    if (category === "agro" && subcategory === "protection" && protectionSub !== "all" && p.protectionGroup !== protectionSub) return false;
    if (category === "agro" && subcategory === "complement" && complementSub !== "all" && p.complementGroup !== complementSub) return false;
    if (category === "equipement" && equipementSub !== "all" && p.equipementGroup !== equipementSub) return false;
    return true;
  });

  return (
    <section id="produits" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-phyto-50 text-phyto-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Package className="w-4 h-4" /> Nos Produits
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Des solutions pour <span className="text-phyto-600 font-playfair italic">chaque besoin</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits agricoles conçus pour optimiser vos rendements tout en préservant l'environnement.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(["all", "agro", "equipement"] as const).map((c) => (
            <button
              key={c}
              onClick={() => { setCategory(c); setSubcategory("all"); setEngraisSub("all"); setProtectionSub("all"); setComplementSub("all"); setEquipementSub("all"); }}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                category === c
                  ? "bg-phyto-600 text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-phyto-50 hover:text-phyto-700"
              }`}
            >
              {c === "all" ? "Tous" : c === "agro" ? "Agro-Fourniture" : "Agro-Équipement"}
            </button>
          ))}
        </div>

        {/* Subcategory tabs */}
        {category === "agro" && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["all", "protection", "semences", "complement", "engrais"].map((s) => (
              <button
                key={s}
                onClick={() => { setSubcategory(s); setEngraisSub("all"); setProtectionSub("all"); setComplementSub("all"); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  subcategory === s
                    ? "bg-phyto-600 text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-phyto-50 hover:text-phyto-700"
                }`}
              >
                {s === "all" ? "Tout" : s === "protection" ? "Protection" : s === "semences" ? "Semences" : s === "complement" ? "Complément Nutritionnelle" : "Engrais"}
              </button>
            ))}
          </div>
        )}

        {/* Engrais sub-group tabs */}
        {category === "agro" && subcategory === "engrais" && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {engraisGroups.map((g) => (
              <button
                key={g.key}
                onClick={() => setEngraisSub(g.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  engraisSub === g.key
                    ? "bg-phyto-700 text-primary-foreground shadow-lg"
                    : "bg-phyto-50 text-phyto-700 hover:bg-phyto-100"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {/* Protection sub-group tabs */}
        {category === "agro" && subcategory === "protection" && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {protectionGroups.map((g) => (
              <button
                key={g.key}
                onClick={() => setProtectionSub(g.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  protectionSub === g.key
                    ? "bg-red-600 text-primary-foreground shadow-lg"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {/* Complement sub-group tabs */}
        {category === "agro" && subcategory === "complement" && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {complementGroups.map((g) => (
              <button
                key={g.key}
                onClick={() => setComplementSub(g.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  complementSub === g.key
                    ? "bg-phyto-700 text-primary-foreground shadow-lg"
                    : "bg-phyto-50 text-phyto-700 hover:bg-phyto-100"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {category === "equipement" && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {equipementGroups.map((g) => (
              <button
                key={g.key}
                onClick={() => setEquipementSub(g.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  equipementSub === g.key
                    ? "bg-blue-600 text-primary-foreground shadow-lg"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {subcategory === "semences" ? (
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Semences</h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Découvrez notre gamme de semences agricoles de haute qualité, conçue pour maximiser vos rendements et améliorer la santé de vos cultures. Sélectionnées pour leur résistance et leur adaptabilité, nos graines conviennent à une variété de conditions climatiques et de types de sol. Optez pour nos semences biologiques et hybrides pour des récoltes abondantes et durables. Boostez votre production avec notre sélection de semences performantes, votre allié essentiel pour une agriculture prospère.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16">
                <FlaskConical className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Produits à venir dans cette catégorie</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
