"use strict";
/* =========================================================
   Le Cahier Magique — Questionner le monde, vivre ensemble,
   anglais, arts et musique (CE1)
   Programmes : cycle 2, BO n° 31 du 30 juillet 2020 (questionner
   le monde, langues vivantes, enseignements artistiques) et
   BO n° 24 du 13 juin 2024 (enseignement moral et civique).
   ========================================================= */

/* =========================================================
   FICHE — Le vivant
   ========================================================= */
function fabVivant(){
  var b = qListe([
    ["Lequel est un être vivant ?", "un arbre", ["un caillou", "une voiture", "un nuage"], "Un être vivant naît, grandit, se nourrit et meurt."],
    ["Lequel n'est pas un être vivant ?", "un caillou", ["un escargot", "une fleur", "un champignon"], "Il ne naît pas, ne grandit pas et ne se nourrit pas."],
    ["De quoi une plante a-t-elle besoin pour pousser ?", "d'eau et de lumière", ["de bruit", "de jouets", "de chocolat"], "Sans eau ou sans lumière, la plante dépérit."],
    ["Un animal qui mange seulement des plantes est...", "herbivore", ["carnivore", "omnivore"], "Comme la vache, qui mange de l'herbe."],
    ["Un animal qui mange d'autres animaux est...", "carnivore", ["herbivore", "omnivore"], "Comme le lion ou le loup."],
    ["Un animal qui mange de tout est...", "omnivore", ["herbivore", "carnivore"], "Comme l'ours, le cochon... et l'être humain."],
    ["Le lapin est...", "herbivore", ["carnivore", "omnivore"], "Il mange de l'herbe et des carottes."],
    ["Le lion est...", "carnivore", ["herbivore", "omnivore"], "Il chasse d'autres animaux."],
    ["Quel animal naît dans un œuf ?", "le poussin", ["le chaton", "le chiot", "le veau"], "Les oiseaux pondent des œufs."],
    ["Quel animal grandit dans le ventre de sa mère avant de naître ?", "le chaton", ["le poussin", "le têtard", "la tortue"], "Le chat est un mammifère : la maman allaite ses petits."],
    ["En grandissant, le têtard devient...", "une grenouille", ["un poisson", "un lézard"], "Ses pattes poussent et sa queue disparaît."],
    ["En grandissant, la chenille devient...", "un papillon", ["une abeille", "un ver de terre"], "Elle s'enferme d'abord dans une chrysalide."],
    ["Que devient une graine plantée dans la terre et arrosée ?", "une plante", ["un caillou", "un insecte"], "La graine germe : une racine et une tige apparaissent."],
    ["Les poissons respirent dans l'eau grâce à leurs...", "branchies", ["poumons", "nageoires"], "Les nageoires servent à nager, pas à respirer."],
    ["L'herbe est mangée par le lapin. Qui peut manger le lapin ?", "le renard", ["la vache", "l'escargot"], "C'est une chaîne alimentaire : chacun est mangé par le suivant."],
    ["Pour être en forme, un enfant de ton âge doit dormir environ...", "10 heures", ["5 heures", "3 heures"], "Le sommeil aide à grandir et à apprendre."],
    ["Le coude et le genou sont des...", "articulations", ["os", "muscles"], "C'est là que le bras et la jambe se plient."],
    ["Qu'est-ce qui tient ton corps debout ?", "le squelette", ["la peau", "les cheveux"], "Il est fait de tous tes os."],
    ["Avant de manger, il faut toujours...", "se laver les mains", ["courir très vite", "fermer les yeux"], "On enlève ainsi les microbes."],
    ["Un être vivant naît, grandit, se reproduit et...", "meurt", ["rouille", "fond"], "C'est le cycle de la vie."],
    ["Au printemps, l'arbre qui avait perdu ses feuilles...", "en fait de nouvelles", ["reste nu pour toujours", "devient un caillou"], "Les bourgeons s'ouvrent quand il fait plus doux."]
  ]);
  b.push(qNombre("Combien de fois par jour faut-il se brosser les dents, au minimum ?", 2, "Le matin et le soir, pendant deux minutes."));
  b.push(vf("Les plantes sont des êtres vivants.", true, "Elles naissent, grandissent, se nourrissent et meurent."));
  b.push(vf("Les champignons et les arbres ne sont pas vivants parce qu'ils ne bougent pas.", false, "Ils sont vivants : ils naissent, grandissent et se reproduisent."));
  return b;
}

/* =========================================================
   FICHE — La matière et les objets
   ========================================================= */
function fabMatiere(){
  var b = qListe([
    ["L'eau qui coule du robinet est à l'état...", "liquide", ["solide", "gazeux"], "Un liquide coule et prend la forme du récipient."],
    ["Un glaçon, c'est de l'eau à l'état...", "solide", ["liquide", "gazeux"], "Un solide garde sa forme."],
    ["La vapeur d'eau, c'est de l'eau à l'état...", "gazeux", ["solide", "liquide"], "Un gaz s'échappe dans l'air."],
    ["Quand un glaçon fond, il devient...", "de l'eau liquide", ["de la vapeur", "de la neige"], "La chaleur fait fondre la glace."],
    ["Quand on met de l'eau au congélateur, elle devient...", "de la glace", ["de la vapeur", "de l'huile"], "Le froid change l'eau liquide en eau solide."],
    ["À quelle température l'eau commence-t-elle à geler ?", "0 degré", ["10 degrés", "100 degrés"], "En dessous de zéro, l'eau devient de la glace."],
    ["Pour mesurer la température, on utilise...", "un thermomètre", ["une balance", "une règle"], "Il indique des degrés."],
    ["Au soleil, l'eau d'une flaque disparaît peu à peu. On dit qu'elle...", "s'évapore", ["gèle", "fond"], "Elle se change en vapeur, que l'on ne voit pas."],
    ["La neige, c'est de l'eau...", "solide", ["liquide", "gazeuse"], "Comme la glace et la grêle."],
    ["Dans un circuit électrique, qu'est-ce qui donne l'énergie ?", "la pile", ["l'ampoule", "le fil"], "L'ampoule reçoit l'énergie, les fils la transportent."],
    ["Pour que l'ampoule s'allume, le circuit doit être...", "fermé", ["ouvert", "coupé"], "Le courant doit pouvoir faire tout le tour."],
    ["Qu'est-ce qui sert à ouvrir ou à fermer un circuit électrique ?", "l'interrupteur", ["la pile", "l'ampoule"], "Comme celui qui allume la lumière de ta chambre."],
    ["Quel matériau laisse passer l'électricité ?", "le métal", ["le plastique", "le bois", "le verre"], "C'est pour cela que les fils sont en métal, entourés de plastique."],
    ["Pour ne pas se mettre en danger, il ne faut jamais mettre ses doigts dans...", "une prise électrique", ["un gant", "une poche"], "L'électricité de la maison est très dangereuse."],
    ["À quoi sert un marteau ?", "à enfoncer un clou", ["à visser", "à couper du papier"], "Chaque outil a sa fonction."],
    ["Quel objet sert à couper du papier ?", "des ciseaux", ["une règle", "une gomme"], "Ils ont deux lames."],
    ["Un aimant attire...", "le fer", ["le bois", "le plastique", "le papier"], "Essaie avec un trombone."],
    ["Où jette-t-on une bouteille en verre vide ?", "dans le conteneur à verre", ["par terre", "dans l'évier"], "Le verre se recycle pour faire de nouvelles bouteilles."],
    ["Quel objet a besoin d'électricité pour fonctionner ?", "une lampe", ["un marteau", "un livre", "une cuillère"], "Elle se branche ou utilise des piles."],
    ["Lequel flotte sur l'eau ?", "un bouchon de liège", ["un caillou", "une clé"], "Le liège est très léger pour sa taille."],
    ["Le bois, le métal, le verre et le plastique sont des...", "matériaux", ["outils", "liquides"], "Les objets sont fabriqués avec des matériaux."]
  ]);
  b.push(vf("L'air est de la matière, même si on ne le voit pas.", true, "On le sent quand le vent souffle ou quand on gonfle un ballon."));
  b.push(vf("Quand un glaçon fond, l'eau disparaît.", false, "Elle ne disparaît pas : elle change d'état et devient liquide."));
  return b;
}

/* =========================================================
   FICHE — La Terre et les cartes
   ========================================================= */
function fabEspace(){
  var b = qListe([
    ["La France se trouve sur le continent...", "européen", ["africain", "américain", "asiatique"], "La France est en Europe."],
    ["Quelle est la capitale de la France ?", "Paris", ["Lyon", "Marseille", "Bordeaux"], "C'est là que se trouve la tour Eiffel."],
    ["Lequel est un océan ?", "l'Atlantique", ["l'Europe", "la Seine", "les Alpes"], "L'Europe est un continent, la Seine un fleuve, les Alpes des montagnes."],
    ["Lequel est un continent ?", "l'Afrique", ["le Pacifique", "Paris", "la Loire"], "Un continent est une très grande étendue de terre."],
    ["La Terre est...", "une planète", ["une étoile", "un continent"], "C'est la planète sur laquelle nous vivons."],
    ["Le Soleil est...", "une étoile", ["une planète", "un continent"], "Il nous donne sa lumière et sa chaleur."],
    ["La Terre tourne autour...", "du Soleil", ["de la Lune", "de Paris"], "Elle met une année pour faire le tour."],
    ["Le matin, le Soleil se lève...", "à l'est", ["à l'ouest", "au nord", "au sud"], "Est : là où le Soleil apparaît."],
    ["Le soir, le Soleil se couche...", "à l'ouest", ["à l'est", "au nord", "au sud"], "Ouest : là où le Soleil disparaît."],
    ["Sur une carte, le nord est le plus souvent...", "en haut", ["en bas", "à gauche"], "Et le sud est en bas."],
    ["Les quatre points cardinaux sont le nord, le sud, l'est et...", "l'ouest", ["le haut", "la gauche"], "Nord, sud, est, ouest."],
    ["La boule qui représente la Terre s'appelle...", "un globe", ["un plan", "une boussole"], "Il est rond, comme la Terre."],
    ["Une carte qui montre toute la Terre à plat s'appelle...", "un planisphère", ["un globe", "un calendrier"], "On y voit tous les continents d'un seul coup d'œil."],
    ["Sur un plan, la liste qui explique les couleurs et les symboles s'appelle...", "la légende", ["le titre", "la marge"], "Elle aide à lire le plan."],
    ["Pour trouver le nord, on utilise...", "une boussole", ["un thermomètre", "une balance"], "Son aiguille montre toujours le nord."],
    ["Sur un globe, la couleur bleue représente...", "les mers et les océans", ["les forêts", "les montagnes"], "C'est pour cela qu'on appelle la Terre la planète bleue."],
    ["Un paysage avec de hauts sommets et de la neige, c'est...", "la montagne", ["la plage", "la plaine"], "On y trouve aussi des vallées."],
    ["Le bord de la mer s'appelle...", "le littoral", ["le désert", "la forêt"], "On y trouve des plages, des falaises et des ports."],
    ["Quel pays est un voisin de la France ?", un(["l'Espagne", "l'Italie", "la Belgique", "l'Allemagne"]), ["le Japon", "le Brésil", "l'Australie"], "Regarde une carte de l'Europe."],
    ["Quel fleuve traverse Paris ?", "la Seine", ["la Loire", "le Rhône", "la Garonne"], "Un fleuve se jette dans la mer."],
    ["Sur la Terre, qu'est-ce qui prend le plus de place ?", "les mers et les océans", ["les terres", "les villes"], "L'eau recouvre la plus grande partie de la planète."],
    ["En ville, on trouve surtout...", "des immeubles et des rues", ["des champs et des fermes", "des dunes de sable"], "À la campagne, on trouve des champs et des fermes."]
  ]);
  b.push(vf("La Terre tourne sur elle-même : c'est pour cela qu'il y a le jour et la nuit.", true, "Quand ton côté de la Terre est tourné vers le Soleil, il fait jour."));
  b.push(vf("La Terre est plate comme une assiette.", false, "La Terre est ronde, comme une boule."));
  return b;
}

/* =========================================================
   FICHE — Le temps qui passe
   ========================================================= */
var JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
var MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
function autresDe(liste, exclus, n){
  return piocher(liste.filter(function(x){ return exclus.indexOf(x) === -1; }), n);
}
function fabTempsPasse(){
  var j, m;
  var b = qListe([
    ["Quelle saison vient après l'hiver ?", "le printemps", ["l'été", "l'automne"], "Hiver, printemps, été, automne."],
    ["Quelle saison vient après l'été ?", "l'automne", ["l'hiver", "le printemps"], "Hiver, printemps, été, automne."],
    ["En quelle saison les feuilles des arbres tombent-elles ?", "en automne", ["au printemps", "en été"], "Elles jaunissent, rougissent, puis tombent."],
    ["Quel mois est en été ?", un(["juillet", "août"]), ["janvier", "novembre", "mars"], "L'été, ce sont les grandes vacances."],
    ["Quel est le premier mois de l'année ?", "janvier", ["décembre", "septembre", "mars"], "L'année commence le 1er janvier."],
    ["Quel est le dernier mois de l'année ?", "décembre", ["janvier", "novembre", "juin"], "L'année se termine le 31 décembre."],
    ["Une année dure environ...", "365 jours", ["100 jours", "30 jours"], "C'est le temps que met la Terre pour tourner autour du Soleil."],
    ["Après-demain, c'est...", "dans deux jours", ["hier", "dans une semaine"], "Demain, puis encore un jour."],
    ["Les parents de tes parents sont tes...", "grands-parents", ["cousins", "oncles"], "Ils sont de la génération d'avant celle de tes parents."],
    ["Autrefois, avant l'électricité, on s'éclairait avec...", "des bougies", ["des ampoules", "des écrans"], "Ou avec des lampes à huile."],
    ["Autrefois, à l'école, on écrivait avec...", "une plume et de l'encre", ["une tablette", "un feutre"], "Il fallait tremper la plume dans l'encrier."],
    ["Quel objet n'existait pas quand tes arrière-grands-parents étaient enfants ?", "le téléphone portable", ["le vélo", "le livre", "le train"], "C'est une invention récente."],
    ["Pour ranger des événements dans l'ordre du temps, on utilise...", "une frise chronologique", ["une balance", "un globe"], "C'est une ligne du temps."],
    ["Sur une frise chronologique, ce qui est le plus à gauche est...", "le plus ancien", ["le plus récent", "le plus important"], "On lit le temps de gauche à droite."],
    ["Quel moment vient en dernier dans la journée ?", "le soir", ["le matin", "le midi", "l'après-midi"], "Matin, midi, après-midi, soir, puis la nuit."],
    ["Noël est au mois de...", "décembre", ["janvier", "novembre", "février"], "Le 25 décembre."],
    ["En France, la rentrée des classes a lieu en...", "septembre", ["juillet", "janvier", "avril"], "Après les grandes vacances d'été."],
    ["Quel jour n'y a-t-il jamais école ?", "dimanche", ["lundi", "mardi", "jeudi"], "C'est le dernier jour de la semaine."],
    ["Un bébé, un enfant, un adulte, une personne âgée : c'est l'ordre...", "des âges de la vie", ["des saisons", "des mois"], "On grandit, puis on vieillit."]
  ]);
  j = alea(0, 6);
  b.push(qc("Si aujourd'hui nous sommes " + JOURS[j] + ", demain nous serons...", JOURS[(j + 1) % 7], autresDe(JOURS, [JOURS[(j + 1) % 7]], 3), "Récite les jours de la semaine dans l'ordre."));
  j = alea(0, 6);
  b.push(qc("Si aujourd'hui nous sommes " + JOURS[j] + ", hier nous étions...", JOURS[(j + 6) % 7], autresDe(JOURS, [JOURS[(j + 6) % 7]], 3), "Hier, c'est le jour d'avant."));
  m = alea(0, 11);
  b.push(qc("Quel mois vient juste après " + MOIS[m] + " ?", MOIS[(m + 1) % 12], autresDe(MOIS, [MOIS[(m + 1) % 12]], 3), "Récite les mois de l'année dans l'ordre."));
  m = alea(0, 11);
  b.push(qc("Quel mois vient juste avant " + MOIS[m] + " ?", MOIS[(m + 11) % 12], autresDe(MOIS, [MOIS[(m + 11) % 12]], 3), "Récite les mois de l'année dans l'ordre."));
  b.push(qNombre("Combien y a-t-il de saisons dans une année ?", 4, "Le printemps, l'été, l'automne et l'hiver."));
  b.push(qNombre("Un siècle, c'est combien d'années ?", 100, "Dans « siècle », pense à « cent »."));
  return b;
}

/* =========================================================
   FICHE — Vivre ensemble
   ========================================================= */
function fabEnsemble(){
  var b = qListe([
    ["Quelles sont les couleurs du drapeau français ?", "bleu, blanc, rouge", ["vert, blanc, rouge", "bleu, jaune, rouge"], "Trois bandes verticales, dans cet ordre."],
    ["Comment s'appelle l'hymne national de la France ?", "La Marseillaise", ["Frère Jacques", "Au clair de la lune"], "On la chante lors des cérémonies et des grands matchs."],
    ["Quelle est la devise de la République française ?", "Liberté, Égalité, Fraternité", ["Travail, Courage, Force", "Soleil, Mer, Montagne"], "Elle est écrite sur les mairies et les écoles."],
    ["Quel jour est la fête nationale en France ?", "le 14 juillet", ["le 1er janvier", "le 25 décembre"], "Ce jour-là, il y a des défilés et des feux d'artifice."],
    ["Comment s'appelle la femme qui représente la République française ?", "Marianne", ["Madeleine", "Margot"], "Son buste se trouve dans les mairies."],
    ["Quel numéro appelle-t-on pour joindre les pompiers ?", "18", ["81", "10"], "Le 18, c'est les pompiers.", { gros: true }],
    ["Quel numéro appelle-t-on pour joindre le SAMU, les secours médicaux ?", "15", ["51", "11"], "Le 15, c'est le SAMU.", { gros: true }],
    ["Quel numéro d'urgence fonctionne partout en Europe ?", "112", ["211", "121"], "Le 112 marche dans tous les pays d'Europe.", { gros: true }],
    ["Avant de traverser la rue, je...", "regarde à gauche et à droite", ["cours sans regarder", "ferme les yeux"], "Et je traverse sur le passage piéton."],
    ["En voiture, il faut toujours...", "attacher sa ceinture", ["se mettre debout", "ouvrir la portière"], "La ceinture protège en cas de choc."],
    ["Un camarade se fait embêter tous les jours. Que fais-tu ?", "j'en parle à un adulte", ["je ris avec les autres", "je ne dis rien"], "Parler, ce n'est pas rapporter : c'est protéger."],
    ["Quand quelqu'un parle en classe, je...", "l'écoute sans lui couper la parole", ["parle plus fort que lui", "me bouche les oreilles"], "Chacun a le droit d'être écouté."],
    ["Les filles et les garçons ont...", "les mêmes droits", ["des droits différents", "des jeux obligatoires"], "C'est l'égalité."],
    ["À l'école, la laïcité veut dire que...", "chacun est libre de croire ou de ne pas croire", ["tout le monde doit croire la même chose", "on n'a pas le droit de réfléchir"], "L'école respecte toutes les croyances et n'en impose aucune."],
    ["Dans la classe, pour choisir entre deux idées, on peut...", "voter", ["se disputer", "crier le plus fort"], "Chaque élève donne son avis."],
    ["Après un vote, on choisit l'idée qui a...", "le plus de voix", ["le moins de voix", "le nom le plus long"], "C'est la règle de la majorité."],
    ["Les règles de la classe servent à...", "bien vivre ensemble", ["embêter les élèves", "décorer les murs"], "Elles protègent chacun."],
    ["Je vois un papier par terre dans la cour. Que fais-je ?", "je le mets à la poubelle", ["je le laisse", "je le cache sous un caillou"], "Chacun prend soin des lieux communs."],
    ["J'ai bousculé quelqu'un sans le faire exprès. Que fais-je ?", "je m'excuse", ["je pars en courant", "je me moque de lui"], "S'excuser montre que l'on respecte l'autre."],
    ["Tous les enfants ont le droit...", "d'aller à l'école", ["de conduire une voiture", "de ne jamais dormir"], "C'est un des droits de l'enfant."],
    ["Se mettre à la place de l'autre pour comprendre ce qu'il ressent, c'est...", "l'empathie", ["la moquerie", "la colère"], "Cela aide à bien s'entendre."],
    ["Qui dirige la commune, la ville ou le village ?", "le ou la maire", ["le directeur de l'école", "le facteur"], "Il ou elle travaille à la mairie."]
  ]);
  b.push(vf("Le football est un sport réservé aux garçons.", false, "Tous les sports et tous les métiers sont pour les filles comme pour les garçons."));
  b.push(vf("Quand on voit quelqu'un de blessé, il faut prévenir un adulte ou appeler les secours.", true, "Porter secours, c'est d'abord alerter."));
  return b;
}

/* =========================================================
   FICHE — Hello! (anglais)
   ========================================================= */
var ANGLAIS = {
  couleurs: [["red", "rouge"], ["blue", "bleu"], ["green", "vert"], ["yellow", "jaune"], ["black", "noir"], ["white", "blanc"], ["pink", "rose"], ["orange", "orange"]],
  jours: [["Monday", "lundi"], ["Tuesday", "mardi"], ["Wednesday", "mercredi"], ["Thursday", "jeudi"], ["Friday", "vendredi"], ["Saturday", "samedi"], ["Sunday", "dimanche"]],
  animaux: [["a dog", "un chien"], ["a cat", "un chat"], ["a bird", "un oiseau"], ["a fish", "un poisson"], ["a horse", "un cheval"], ["a rabbit", "un lapin"], ["a cow", "une vache"], ["a pig", "un cochon"]],
  famille: [["mother", "mère"], ["father", "père"], ["brother", "frère"], ["sister", "sœur"]],
  ecole: [["a book", "un livre"], ["a pen", "un stylo"], ["a pencil", "un crayon"], ["a ruler", "une règle"], ["a school bag", "un cartable"]],
  corps: [["the head", "la tête"], ["the hand", "la main"], ["the foot", "le pied"], ["the nose", "le nez"], ["the mouth", "la bouche"], ["the eyes", "les yeux"]],
  nombres: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
};
function fabAnglais(){
  var b = [], n;
  /* versFr : true = de l'anglais vers le français */
  function vocab(paires, combien, versFr){
    piocher(paires, combien).forEach(function(p){
      var autres = piocher(paires.filter(function(x){ return x !== p; }), 3);
      if (versFr) b.push(qc("Que veut dire " + mot(p[0]) + " ?", p[1], autres.map(function(x){ return x[1]; }), "Dis le mot à voix haute : " + p[0] + "."));
      else b.push(qc("Comment dit-on " + mot(p[1]) + " en anglais ?", p[0], autres.map(function(x){ return x[0]; }), p[1] + " se dit « " + p[0] + " »."));
    });
  }
  vocab(ANGLAIS.couleurs, 2, true); vocab(ANGLAIS.couleurs, 1, false);
  vocab(ANGLAIS.jours, 2, true);
  vocab(ANGLAIS.animaux, 2, true); vocab(ANGLAIS.animaux, 1, false);
  vocab(ANGLAIS.famille, 1, true);
  vocab(ANGLAIS.ecole, 1, true);
  vocab(ANGLAIS.corps, 1, true);

  piocher([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3).forEach(function(i){
    b.push(qNombre("Quel nombre est " + mot(ANGLAIS.nombres[i]) + " ?", i + 1, "One, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve."));
  });
  n = alea(2, 9);
  b.push(qc("Comment dit-on " + mot(String(n)) + " en anglais ?", ANGLAIS.nombres[n - 1], [ANGLAIS.nombres[n], ANGLAIS.nombres[n - 2], ANGLAIS.nombres[(n + 3) % 12]], "Compte en anglais à partir de one."));

  b = b.concat(qListe([
    ["Que veut dire " + mot("Hello!") + " ?", "Bonjour !", ["Au revoir !", "Merci !", "Pardon !"], "On le dit pour saluer quelqu'un."],
    ["Que veut dire " + mot("Goodbye!") + " ?", "Au revoir !", ["Bonjour !", "Merci !", "Bravo !"], "On le dit en partant."],
    ["Que veut dire " + mot("Thank you!") + " ?", "Merci !", ["S'il te plaît", "Bonjour !", "Pardon !"], "On le dit quand on reçoit quelque chose."],
    ["Comment dit-on " + mot("s'il te plaît") + " en anglais ?", "please", ["thank you", "sorry", "hello"], "« Please » est le mot magique."],
    ["Que veut dire " + mot("Good night!") + " ?", "Bonne nuit !", ["Bonjour !", "Bon appétit !"], "On le dit avant d'aller dormir."],
    ["On te demande " + mot("What's your name?") + ". Que réponds-tu ?", "My name is Léa.", ["I'm fine, thank you.", "I'm seven."], "On te demande ton prénom."],
    ["On te demande " + mot("How are you?") + ". Que réponds-tu ?", "I'm fine, thank you.", ["My name is Tom.", "I'm seven."], "On te demande comment tu vas."],
    ["On te demande " + mot("How old are you?") + ". Que réponds-tu ?", "I'm seven.", ["I'm fine, thank you.", "My name is Tom."], "On te demande ton âge."],
    ["Que veut dire " + mot("yes") + " ?", "oui", ["non", "peut-être"], "Et « no » veut dire non.", { gros: true }],
    ["Dans quel pays parle-t-on anglais ?", "au Royaume-Uni", ["en Espagne", "en Italie"], "On y trouve Londres, sa capitale."]
  ]));
  return b;
}

/* =========================================================
   FICHE — Arts et musique
   ========================================================= */
function fabArts(){
  return qListe([
    ["Quelles sont les trois couleurs primaires en peinture ?", "rouge, jaune, bleu", ["vert, orange, violet", "noir, blanc, gris"], "Avec elles, on peut fabriquer les autres couleurs."],
    ["Si je mélange du bleu et du jaune, j'obtiens...", "du vert", ["de l'orange", "du violet"], "Bleu et jaune font vert."],
    ["Si je mélange du rouge et du jaune, j'obtiens...", "de l'orange", ["du vert", "du violet"], "Rouge et jaune font orange."],
    ["Si je mélange du bleu et du rouge, j'obtiens...", "du violet", ["du vert", "de l'orange"], "Bleu et rouge font violet."],
    ["Si je mélange du rouge et du blanc, j'obtiens...", "du rose", ["du gris", "du marron"], "Le blanc éclaircit les couleurs."],
    ["Si je mélange du noir et du blanc, j'obtiens...", "du gris", ["du rose", "du bleu"], "Plus il y a de noir, plus le gris est foncé."],
    ["Laquelle est une couleur chaude ?", "le rouge", ["le bleu", "le vert"], "Les couleurs chaudes font penser au feu et au soleil."],
    ["Laquelle est une couleur froide ?", "le bleu", ["le rouge", "l'orange"], "Les couleurs froides font penser à l'eau et à la glace."],
    ["Une peinture qui montre le visage d'une personne s'appelle...", "un portrait", ["un paysage", "une sculpture"], "Quand on se peint soi-même, c'est un autoportrait."],
    ["Une peinture qui montre la campagne, la mer ou la montagne s'appelle...", "un paysage", ["un portrait", "une sculpture"], "On y voit souvent le ciel et l'horizon."],
    ["Une œuvre en volume, autour de laquelle on peut tourner, s'appelle...", "une sculpture", ["une peinture", "une photographie"], "Elle peut être en pierre, en bois, en métal ou en terre."],
    ["L'artiste qui fait des tableaux avec de la peinture est...", "un ou une peintre", ["un sculpteur", "un musicien"], "Il ou elle utilise des pinceaux."],
    ["Le lieu où l'on va voir des œuvres d'art s'appelle...", "un musée", ["une gare", "une mairie"], "On y expose des tableaux, des sculptures, des objets anciens."],
    ["Qui a peint La Joconde ?", "Léonard de Vinci", ["Pablo Picasso", "Claude Monet"], "Ce tableau très célèbre est au musée du Louvre, à Paris."],
    ["Le violon est un instrument...", "à cordes", ["à vent", "à percussion"], "On frotte ses cordes avec un archet."],
    ["La flûte est un instrument...", "à vent", ["à cordes", "à percussion"], "On souffle dedans."],
    ["Le tambour est un instrument...", "à percussion", ["à cordes", "à vent"], "On le frappe avec les mains ou des baguettes."],
    ["La guitare est un instrument...", "à cordes", ["à vent", "à percussion"], "On pince ou on gratte ses cordes."],
    ["La trompette est un instrument...", "à vent", ["à cordes", "à percussion"], "On souffle dans l'embouchure."],
    ["Le chant d'un petit oiseau est un son...", "aigu", ["grave"], "Aigu : un son haut, fin. Grave : un son bas, profond.", { gros: true }],
    ["Le son d'un gros tambour est...", "grave", ["aigu"], "Aigu : un son haut, fin. Grave : un son bas, profond.", { gros: true }],
    ["Quand une musique va très vite, on dit que son tempo est...", "rapide", ["lent", "grave"], "Le tempo, c'est la vitesse de la musique."],
    ["La personne qui dirige un orchestre est...", "le chef ou la cheffe d'orchestre", ["le pianiste", "le spectateur"], "Avec sa baguette, il ou elle guide les musiciens."],
    ["Un groupe de personnes qui chantent ensemble s'appelle...", "une chorale", ["un orchestre", "un tableau"], "Dans un orchestre, on joue des instruments."],
    ["Une berceuse se chante...", "doucement", ["très fort", "en criant"], "Elle sert à endormir un bébé."]
  ]);
}

/* ---------- Enregistrement des fiches ---------- */
ajouterFiche({ id:"vivant", groupe:"monde", classe:"mon", sign:"✿", titre:"Le vivant", matiere:"Questionner le monde",
  detail:"Animaux, plantes, corps et santé", fab:fabVivant,
  lecon:[
    ["Un être vivant naît, grandit, se nourrit, se reproduit, puis meurt. Les animaux et les plantes sont vivants.",
      V(hl("naître", "v") + " → " + hl("grandir", "v"), hl("se nourrir", "v") + " → " + hl("se reproduire", "v"), petit("le cycle de la vie"))],
    ["Une plante a besoin d'eau et de lumière. La graine germe, la tige pousse, puis viennent les feuilles et les fleurs.",
      V("graine → tige → feuilles → fleur", hl("eau", "b") + " + " + hl("lumière", "o"))],
    ["Les animaux ne mangent pas tous la même chose. L'herbivore mange des plantes, le carnivore mange des animaux, l'omnivore mange de tout.",
      V(hl("herbivore", "v") + " : le lapin", hl("carnivore", "o") + " : le lion", hl("omnivore", "b") + " : l'ours")],
    ["Pour rester en bonne santé : bien manger, bouger, se laver et bien dormir.",
      V("manger varié · bouger", "se laver · " + hl("dormir 10 heures"))]
  ] });
ajouterFiche({ id:"matiere", groupe:"monde", classe:"mon", sign:"≋", titre:"La matière et les objets", matiere:"Questionner le monde",
  detail:"États de l'eau, électricité, matériaux", fab:fabMatiere,
  lecon:[
    ["L'eau existe sous trois états. Solide, c'est la glace. Liquide, c'est l'eau qui coule. Gazeux, c'est la vapeur.",
      V(hl("solide", "b") + " : la glace", hl("liquide", "v") + " : l'eau", hl("gazeux", "o") + " : la vapeur")],
    ["Avec la chaleur, la glace fond. Avec le froid, l'eau gèle. À zéro degré, l'eau devient de la glace.",
      V("glace → " + hl("fond", "o") + " → eau", "eau → " + hl("gèle", "b") + " → glace", petit("à 0 degré"))],
    ["Pour allumer une ampoule, il faut une pile, des fils et un circuit bien fermé.",
      V(hl("pile") + " → fil → " + hl("ampoule", "o") + " → fil → pile", petit("le circuit est fermé : la lumière s'allume"))],
    ["Attention ! L'électricité de la maison est dangereuse. On ne touche jamais une prise.",
      V(hl("Jamais les doigts", "r"), hl("dans une prise", "r"))]
  ] });
ajouterFiche({ id:"espace", groupe:"monde", classe:"mon", sign:"◍", titre:"La Terre et les cartes", matiere:"Questionner le monde",
  detail:"Continents, océans, points cardinaux, plans", fab:fabEspace,
  lecon:[
    ["La Terre est une planète ronde. Elle tourne autour du Soleil, qui est une étoile.",
      V(hl("la Terre", "b") + " : une planète", hl("le Soleil", "o") + " : une étoile")],
    ["Sur un globe, le bleu montre les mers et les océans. Les grandes terres sont les continents. La France est en Europe.",
      V(hl("océans", "b") + " et " + hl("continents", "v"), "la France → l'" + hl("Europe", "v"))],
    ["Pour se repérer, il y a quatre points cardinaux : le nord, le sud, l'est et l'ouest. Le Soleil se lève à l'est et se couche à l'ouest.",
      V(hl("nord"), hl("ouest", "b") + " &nbsp;✛&nbsp; " + hl("est", "o"), hl("sud"))],
    ["Un plan représente un lieu vu d'en haut. La légende explique ses couleurs et ses symboles.",
      V("le plan : vu d'en haut", "la " + hl("légende") + " : le code du plan")]
  ] });
ajouterFiche({ id:"tempspasse", groupe:"monde", classe:"mon", sign:"↻", titre:"Le temps qui passe", matiere:"Questionner le monde",
  detail:"Jours, mois, saisons, autrefois et aujourd'hui", fab:fabTempsPasse,
  lecon:[
    ["Une semaine a sept jours. Une année a douze mois et quatre saisons.",
      V(hl("7 jours") + " = 1 semaine", hl("12 mois", "b") + " = 1 année", hl("4 saisons", "v"))],
    ["Les saisons reviennent toujours dans le même ordre : le printemps, l'été, l'automne, l'hiver.",
      V(hl("printemps", "v") + " → " + hl("été", "o"), "→ " + hl("automne") + " → " + hl("hiver", "b"))],
    ["Tes parents étaient des enfants avant toi, et tes grands-parents avant eux. Ce sont les générations.",
      V("grands-parents", "→ parents", "→ " + hl("toi"))],
    ["Autrefois, la vie était différente : pas d'électricité partout, pas de téléphone portable. La frise chronologique range les événements du plus ancien au plus récent.",
      V(hl("autrefois", "b") + " ——→ " + hl("aujourd'hui", "o"), petit("la frise se lit de gauche à droite"))]
  ] });
ajouterFiche({ id:"ensemble", groupe:"ensemble", classe:"emc", sign:"♥", titre:"Vivre ensemble", matiere:"Enseignement moral et civique",
  detail:"Respect, règles, sécurité, symboles de la République", fab:fabEnsemble,
  lecon:[
    ["Pour bien vivre ensemble, on se respecte. On écoute les autres, on ne se moque pas, et on demande de l'aide à un adulte quand quelque chose ne va pas.",
      V(hl("écouter", "v") + " · " + hl("respecter", "v"), hl("aider") + " · " + hl("en parler", "b"))],
    ["Les filles et les garçons ont les mêmes droits. Tous les jeux, tous les sports et tous les métiers sont pour tout le monde.",
      V("filles = garçons", hl("les mêmes droits", "v"))],
    ["La France est une République. Son drapeau est bleu, blanc, rouge. Sa devise : Liberté, Égalité, Fraternité.",
      V('<span class="drapeau"><i></i><i></i><i></i></span>', hl("Liberté", "b") + " " + hl("Égalité") + " " + hl("Fraternité", "r"))],
    ["En cas d'urgence, on prévient un adulte ou on appelle les secours : le 15 pour le SAMU, le 18 pour les pompiers, le 112 partout en Europe.",
      V(hl("15", "b") + " SAMU", hl("18", "r") + " pompiers", hl("112", "v") + " en Europe")]
  ] });
ajouterFiche({ id:"anglais", groupe:"anglais", classe:"ang", sign:"Hi", titre:"Hello!", matiere:"Anglais",
  detail:"Saluer, couleurs, nombres, jours, animaux", fab:fabAnglais,
  lecon:[
    ["Pour dire bonjour en anglais, on dit :", V(hl("Hello!"), petit("Bonjour !"), hl("Goodbye!", "b"), petit("Au revoir !")), "Hello! Goodbye!"],
    ["Pour se présenter, on dit :", V("What's your name?", hl("My name is Léa.")), "What's your name? My name is Léa."],
    ["Voici les couleurs :", V(hl("red", "r") + " " + hl("blue", "b") + " " + hl("green", "v"), hl("yellow", "o") + " black white"), "Red. Blue. Green. Yellow. Black. White."],
    ["On compte jusqu'à dix :", V("one two three four five", "six seven eight nine ten"), "One, two, three, four, five, six, seven, eight, nine, ten."],
    ["Et les mots magiques :", V(hl("please") + " " + petit("s'il te plaît"), hl("thank you", "v") + " " + petit("merci")), "Please. Thank you."]
  ] });
ajouterFiche({ id:"arts", groupe:"arts", classe:"art", sign:"♪", titre:"Couleurs et sons", matiere:"Arts et musique",
  detail:"Couleurs, œuvres, instruments de musique", fab:fabArts,
  lecon:[
    ["En peinture, il y a trois couleurs primaires : le rouge, le jaune et le bleu.",
      V('<span class="pastilles"><i style="background:#E0352B"></i><i style="background:#F7C61B"></i><i style="background:#2A6FDB"></i></span>', "rouge · jaune · bleu")],
    ["En les mélangeant, on fabrique d'autres couleurs. Bleu et jaune font vert. Rouge et jaune font orange. Bleu et rouge font violet.",
      V('<span class="pastilles"><i style="background:#2A6FDB"></i>+<i style="background:#F7C61B"></i>=<i style="background:#2E9E4F"></i></span>',
        '<span class="pastilles"><i style="background:#E0352B"></i>+<i style="background:#F7C61B"></i>=<i style="background:#F08A1C"></i></span>',
        '<span class="pastilles"><i style="background:#2A6FDB"></i>+<i style="background:#E0352B"></i>=<i style="background:#7B3FB5"></i></span>')],
    ["Un portrait montre un visage. Un paysage montre la nature. Une sculpture est une œuvre en volume.",
      V(hl("portrait") + " : un visage", hl("paysage", "v") + " : la nature", hl("sculpture", "b") + " : en volume")],
    ["Les instruments de musique forment des familles : les cordes, les vents et les percussions.",
      V(hl("cordes") + " : violon, guitare", hl("vents", "b") + " : flûte, trompette", hl("percussions", "v") + " : tambour")]
  ] });
