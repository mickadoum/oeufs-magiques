"use strict";
/* =========================================================
   Le Cahier Magique — fiches de français du CE1
   Programme : cycle 2, BO n° 41 du 31 octobre 2024.
   Grammaire (phrase, classes de mots, accords), conjugaison
   (présent, imparfait, futur, passé composé : être, avoir et
   verbes du premier groupe), orthographe et vocabulaire.
   ========================================================= */

/* Une liste de questions toutes prêtes : [question, bonne réponse, [fausses], aide, options]. */
function qListe(items, opts){
  return items.map(function(x){ return qc(x[0], x[1], x[2], x[3], x[4] || opts); });
}
function cap(t){ return t.charAt(0).toUpperCase() + t.slice(1); }
function complete(t){ return "Complète : " + mot(t); }

/* =========================================================
   FICHE — Le nom et le déterminant
   ========================================================= */
var NOMS_COMMUNS = [
  { n:"maison", g:"f" }, { n:"jardin", g:"m" }, { n:"table", g:"f" }, { n:"livre", g:"m" }, { n:"forêt", g:"f" },
  { n:"bateau", g:"m" }, { n:"fleur", g:"f" }, { n:"cartable", g:"m" }, { n:"lune", g:"f" }, { n:"ballon", g:"m" },
  { n:"souris", g:"f" }, { n:"crayon", g:"m" }, { n:"chaise", g:"f" }, { n:"gâteau", g:"m" }, { n:"voiture", g:"f" }
];
var VERBES_INF = ["chanter", "manger", "courir", "dormir", "sauter", "lire", "écrire", "jouer", "danser", "regarder", "nager", "dessiner"];
var ADJECTIFS = ["petit", "grand", "rouge", "joli", "gentil", "rapide", "froid", "heureux", "rond", "fragile", "calme", "bleu"];
var DETERMINANTS = ["le", "la", "les", "un", "une", "des", "mon", "ta", "ses", "cette", "ce"];
var NOMS_PROPRES = ["Paris", "Léa", "Marseille", "Astérix", "Lyon", "Tom", "Médor", "Inès"];
var NATURES = ["un nom", "un verbe", "un adjectif", "un déterminant"];

function fabNoms(){
  var b = [], n, ph;
  function nature(motChoisi, bonne, aide){
    b.push(qc("Quelle est la nature du mot " + mot(motChoisi) + " ?", bonne, NATURES, aide));
  }
  nature(un(NOMS_COMMUNS).n, "un nom", "Un nom désigne une personne, un animal ou une chose. On peut dire « un » ou « une » devant.");
  nature(un(VERBES_INF), "un verbe", "Un verbe dit ce que l'on fait. On peut dire « il faut » devant.");
  nature(un(ADJECTIFS), "un adjectif", "Un adjectif dit comment est quelqu'un ou quelque chose.");
  nature(un(DETERMINANTS), "un déterminant", "Le déterminant est le petit mot placé devant le nom.");

  ph = un([
    ["Le chien court vite.", "chien", ["Le", "court", "vite"]],
    ["Une fleur pousse ici.", "fleur", ["Une", "pousse", "ici"]],
    ["Mon cartable est lourd.", "cartable", ["Mon", "est", "lourd"]],
    ["La lune brille fort.", "lune", ["La", "brille", "fort"]]
  ]);
  b.push(qc("Dans la phrase « " + ph[0] + " », quel mot est un nom ?", ph[1], ph[2], "Le nom est souvent juste après le déterminant."));
  ph = un([
    ["Les oiseaux volent haut.", "Les", ["oiseaux", "volent", "haut"]],
    ["Cette maison est grande.", "Cette", ["maison", "est", "grande"]],
    ["Un lapin mange vite.", "Un", ["lapin", "mange", "vite"]],
    ["Ses amis arrivent demain.", "Ses", ["amis", "arrivent", "demain"]]
  ]);
  b.push(qc("Dans la phrase « " + ph[0] + " », quel mot est un déterminant ?", ph[1], ph[2], "Le déterminant est le petit mot juste devant le nom."));

  b.push(qc("Lequel est un nom propre ?", un(NOMS_PROPRES), piocher(NOMS_COMMUNS, 3).map(function(x){ return x.n; }),
    "Un nom propre désigne une personne ou un lieu précis. Il commence par une majuscule."));
  b.push(qc("Lequel est un nom commun ?", un(NOMS_COMMUNS).n, piocher(NOMS_PROPRES, 3), "Un nom commun n'a pas de majuscule. Il y a souvent un déterminant devant."));
  b.push(qc("Un nom propre commence toujours par...", "une majuscule", ["un point", "un déterminant", "une minuscule"], "Comme Paris, Léa ou Astérix."));

  n = un(NOMS_COMMUNS);
  b.push(qc(complete("… " + n.n), n.g === "f" ? "une" : "un", [n.g === "f" ? "un" : "une", "des"], "Dis-le à voix haute : lequel sonne juste ?", { gros: true }));
  n = un(NOMS_COMMUNS.filter(function(x){ return !/^[aeéêiouh]/.test(x.n); }));
  b.push(qc(complete("… " + n.n), n.g === "f" ? "la" : "le", [n.g === "f" ? "le" : "la", "les"], "« la » devant un nom féminin, « le » devant un nom masculin.", { gros: true }));
  n = un(NOMS_COMMUNS.filter(function(x){ return !/[sx]$/.test(x.n); }));
  b.push(qc(complete("… " + n.n + "s"), "les", [n.g === "f" ? "la" : "le", n.g === "f" ? "une" : "un"], "Le nom se termine par un s : il y en a plusieurs.", { gros: true }));

  n = un(NOMS_COMMUNS.filter(function(x){ return !/^[aeéêiouh]/.test(x.n); }));
  b.push(qc("Le nom " + mot((n.g === "f" ? "la " : "le ") + n.n) + " est...", n.g === "f" ? "féminin" : "masculin", [n.g === "f" ? "masculin" : "féminin"],
    "On dit « une » devant un nom féminin et « un » devant un nom masculin.", { gros: true }));
  n = un(NOMS_COMMUNS.filter(function(x){ return !/[sx]$/.test(x.n); }));
  b.push(qc(mot("des " + n.n + "s") + " est au...", "pluriel", ["singulier"], "Pluriel : il y en a plusieurs. Singulier : il y en a un seul.", { gros: true }));
  n = un(NOMS_COMMUNS);
  b.push(qc(mot((n.g === "f" ? "une " : "un ") + n.n) + " est au...", "singulier", ["pluriel"], "Singulier : il y en a un seul.", { gros: true }));

  b.push(vf("Le mot « bonheur » est un nom.", true, "Les noms désignent aussi des sentiments : le bonheur, la peur, la joie."));
  b.push(qc("Quel groupe est au pluriel ?", un(["mes amis", "les chats", "des livres", "ses jouets"]), ["mon ami", "le chat", "un livre"], "Cherche le déterminant qui montre qu'il y en a plusieurs."));
  return b;
}

/* =========================================================
   FICHE — Le verbe et son sujet
   ========================================================= */
var PHRASES_SV = [
  { p:"Le chat dort sur le canapé.", v:"dort", s:"Le chat", c:"sur le canapé", pr:"Il", inf:"dormir", mots:["chat", "canapé", "sur"] },
  { p:"Les enfants jouent dans la cour.", v:"jouent", s:"Les enfants", c:"dans la cour", pr:"Ils", inf:"jouer", mots:["enfants", "cour", "dans"] },
  { p:"Léa mange une pomme rouge.", v:"mange", s:"Léa", c:"une pomme rouge", pr:"Elle", inf:"manger", mots:["Léa", "pomme", "rouge"] },
  { p:"Mon frère regarde un film.", v:"regarde", s:"Mon frère", c:"un film", pr:"Il", inf:"regarder", mots:["frère", "film", "Mon"] },
  { p:"Les oiseaux chantent le matin.", v:"chantent", s:"Les oiseaux", c:"le matin", pr:"Ils", inf:"chanter", mots:["oiseaux", "matin", "Les"] },
  { p:"La boulangère vend du pain.", v:"vend", s:"La boulangère", c:"du pain", pr:"Elle", inf:"vendre", mots:["boulangère", "pain", "du"] },
  { p:"Les filles dessinent un château.", v:"dessinent", s:"Les filles", c:"un château", pr:"Elles", inf:"dessiner", mots:["filles", "château", "un"] },
  { p:"Papa prépare le repas.", v:"prépare", s:"Papa", c:"le repas", pr:"Il", inf:"préparer", mots:["Papa", "repas", "le"] }
];
function fabVerbes(){
  var b = [], ph = piocher(PHRASES_SV, 8), x;

  [0, 1].forEach(function(i){
    x = ph[i];
    b.push(qc("Dans la phrase « " + x.p + " », quel est le verbe ?", x.v, x.mots, "Le verbe dit ce que fait le sujet. Il change si on dit « hier » ou « demain »."));
  });
  [2, 3].forEach(function(i){
    x = ph[i];
    b.push(qc("Dans la phrase « " + x.p + " », quel est le sujet ?", x.s, [x.c, x.v], "Pose la question : « Qui est-ce qui " + x.v + " ? »"));
  });
  [4, 5].forEach(function(i){
    x = ph[i];
    b.push(qc("« " + x.p + " » Par quel pronom peut-on remplacer " + mot(x.s) + " ?", x.pr, ["Il", "Elle", "Ils", "Elles", "Nous"].filter(function(p){ return p !== x.pr; }).slice(0, 3),
      "Une seule personne ou plusieurs ? Masculin ou féminin ?", { gros: true }));
  });
  [6, 7].forEach(function(i){
    x = ph[i];
    b.push(qc("Dans « " + x.p + " », quel est l'infinitif du verbe " + mot(x.v) + " ?", x.inf,
      piocher(VERBES_INF.filter(function(v){ return v !== x.inf; }), 3), "L'infinitif est le nom du verbe, celui que l'on trouve dans le dictionnaire."));
  });

  b.push(qc("Lequel de ces mots est un verbe ?", un(VERBES_INF), [un(NOMS_COMMUNS).n, un(ADJECTIFS), un(DETERMINANTS)], "On peut dire « il faut » devant un verbe."));
  b.push(qc("Pour trouver le sujet, on pose la question...", "Qui est-ce qui ?", ["Où ?", "Quand ?", "Comment ?"], "« Qui est-ce qui dort ? » C'est le chat : voilà le sujet."));
  b.push(qc(mot("Léa et moi") + " peut être remplacé par...", "nous", ["vous", "elles", "ils"], "Quand je suis dans le groupe, on dit « nous ».", { gros: true }));
  b.push(qc(mot("Tom et toi") + " peut être remplacé par...", "vous", ["nous", "ils", "tu"], "Quand tu es dans le groupe, sans moi, on dit « vous ».", { gros: true }));
  b.push(qc(mot("Papa et Maman") + " peut être remplacé par...", "ils", ["elles", "il", "nous"], "Plusieurs personnes dont un homme : on dit « ils ».", { gros: true }));
  b.push(qc("Lequel de ces mots est un pronom personnel ?", un(["nous", "elle", "vous", "ils", "tu"]), ["le", "petit", "chat"], "Je, tu, il, elle, nous, vous, ils, elles remplacent le sujet."));
  b.push(vf("Dans une phrase, le verbe change quand on passe de « aujourd'hui » à « demain ».", true, "Aujourd'hui je chante, demain je chanterai : c'est le verbe qui change."));
  b.push(qc("L'infinitif de " + mot("nous dansons") + " est...", "danser", ["dansons", "danse", "dansé"], "Dis « il faut... » : il faut danser."));
  return b;
}

/* =========================================================
   FICHE — L'adjectif et les accords
   ========================================================= */
function fabAccords(){
  var b = [], x;

  piocher([
    ["un petit chat", "petit", ["un", "chat"]], ["une robe rouge", "rouge", ["une", "robe"]],
    ["des fleurs jaunes", "jaunes", ["des", "fleurs"]], ["mon gentil chien", "gentil", ["mon", "chien"]],
    ["la grande maison", "grande", ["la", "maison"]], ["un gâteau délicieux", "délicieux", ["un", "gâteau"]]
  ], 2).forEach(function(x){
    b.push(qc("Dans " + mot(x[0]) + ", quel mot est l'adjectif ?", x[1], x[2], "L'adjectif dit comment est le nom."));
  });

  x = un(["petit", "grand", "joli", "vert", "noir", "fort", "bleu", "court"]);
  b.push(qc("Le féminin de " + mot(x) + " est...", x + "e", [x + "s", x], "Au féminin, on ajoute souvent un e.", { gros: true }));
  x = un([["un", "chat"], ["un", "livre"], ["un", "ballon"], ["une", "fleur"], ["une", "table"], ["un", "crayon"]]);
  b.push(qc(mot(x[0] + " " + x[1]) + " → des...", x[1] + "s", [x[1], x[1] + "e"], "Au pluriel, on ajoute souvent un s.", { gros: true }));

  piocher([
    ["des fleurs …", "rouges", ["rouge"]], ["une … fille", "petite", ["petit", "petits"]],
    ["les … garçons", "grands", ["grand", "grande"]], ["une voiture …", "verte", ["vert", "verts"]],
    ["un … arbre", "grand", ["grande", "grands"]], ["mes chaussures …", "noires", ["noir", "noire"]],
    ["des chats …", "gris", ["grise", "grises"]], ["la … souris", "petite", ["petit", "petites"]]
  ], 4).forEach(function(x){
    b.push(qc(complete(x[0]), x[1], x[2], "L'adjectif s'accorde avec le nom : même genre, même nombre.", { gros: true }));
  });

  piocher([
    ["Je suis bleue. Qui suis-je ?", "la mer", ["l'océan"], "« bleue » se termine par un e : le nom est féminin."],
    ["Je suis petit. Qui suis-je ?", "le chaton", ["la souris"], "« petit » n'a pas de e : le nom est masculin."],
    ["Nous sommes verts. Qui sommes-nous ?", "les arbres", ["la feuille", "l'arbre"], "« verts » se termine par un s : il y en a plusieurs."],
    ["Je suis contente. Qui suis-je ?", "Léa", ["Tom"], "« contente » se termine par un e : c'est une fille."]
  ], 2).forEach(function(x){ b.push(qc(x[0], x[1], x[2], x[3], { gros: true })); });

  b.push(qc(complete("… chats noirs"), "les", ["le", "la"], "Chats et noirs ont un s : c'est le pluriel.", { gros: true }));
  b.push(qc(complete("… jolie fleur"), "une", ["un", "des"], "« jolie » se termine par e : c'est le féminin singulier.", { gros: true }));
  b.push(qc(mot("les petites souris") + " est au...", "féminin pluriel", ["masculin pluriel", "féminin singulier", "masculin singulier"], "« petites » : le e montre le féminin, le s montre le pluriel."));
  b.push(qc("Le pluriel se marque le plus souvent par la lettre...", "s", ["e", "t", "a"], "Un chat, des chats.", { gros: true }));
  b.push(qc("Le féminin d'un adjectif se marque le plus souvent par la lettre...", "e", ["s", "t", "x"], "Petit, petite.", { gros: true }));
  b.push(vf("Dans « des enfants sages », l'adjectif « sages » prend un s parce que « enfants » est au pluriel.", true, "Le déterminant, le nom et l'adjectif s'accordent ensemble : c'est la chaîne d'accords."));
  return b;
}

/* =========================================================
   FICHE — La phrase
   ========================================================= */
function fabPhrases(){
  var b = [], x, n;

  b.push(qc("Une phrase commence toujours par...", "une majuscule", ["un point", "une virgule", "un verbe"], "La majuscule montre le début de la phrase."));
  b.push(qc("Une phrase se termine toujours par...", "un point", ["une majuscule", "une virgule", "un nom"], "Le point, le point d'interrogation ou le point d'exclamation."));

  x = un([
    ["Le chien court dans le jardin.", ["Chien le jardin dans court.", "le chien court dans le jardin"]],
    ["Ma sœur lit un livre.", ["Lit un livre ma sœur", "ma sœur lit un livre"]],
    ["Nous allons à la piscine.", ["Piscine à la allons nous.", "nous allons à la piscine"]]
  ]);
  b.push(qc("Quelle phrase est correcte ?", x[0], x[1], "Une phrase a du sens, une majuscule au début et un point à la fin."));

  piocher([
    ["Il pleut ce matin.", "déclarative"], ["Où vas-tu ?", "interrogative"], ["Range ta chambre.", "impérative"],
    ["Est-ce que tu viens ?", "interrogative"], ["Ferme la porte, s'il te plaît.", "impérative"], ["Le chat dort sur le lit.", "déclarative"],
    ["Quel âge as-tu ?", "interrogative"], ["Mange ta soupe.", "impérative"]
  ], 3).forEach(function(x){
    b.push(qc("« " + x[0] + " » Cette phrase est...", x[1], ["déclarative", "interrogative", "impérative"],
      "Déclarative : elle raconte. Interrogative : elle pose une question. Impérative : elle donne un ordre ou un conseil."));
  });

  piocher([
    ["Comment t'appelles-tu …", "?", "C'est une question."], ["Quel beau dessin …", "!", "On montre sa surprise ou sa joie."],
    ["Je vais à l'école …", ".", "La phrase raconte simplement quelque chose."], ["Est-ce que tu as faim …", "?", "C'est une question."],
    ["Bravo, tu as gagné …", "!", "On montre sa joie."]
  ], 2).forEach(function(x){
    b.push(qc(complete(x[0]), x[1], [".", "?", "!"], x[2], { consigne: "Touche le bon signe de ponctuation.", gros: true }));
  });

  b.push(qc("Quelle phrase est à la forme négative ?", un(["Je ne veux pas de soupe.", "Il ne pleut pas.", "Nous ne jouons jamais ici."]),
    ["Je veux de la soupe.", "Il pleut beaucoup."], "À la forme négative, le verbe est entouré de « ne » et « pas »."));
  x = un([
    ["Il mange.", "Il ne mange pas.", ["Il mange pas.", "Il ne mange."]],
    ["Tu chantes.", "Tu ne chantes pas.", ["Tu chantes pas.", "Tu ne chantes."]],
    ["Léa dort.", "Léa ne dort pas.", ["Léa dort pas.", "Léa pas dort."]]
  ]);
  b.push(qc("Mets à la forme négative : « " + x[0] + " »", x[1], x[2], "Il faut deux petits mots autour du verbe : « ne » avant, « pas » après."));

  b.push(qc("Une phrase qui pose une question est...", "interrogative", ["déclarative", "impérative"], "Elle se termine par un point d'interrogation."));
  b.push(qc("Une phrase qui donne un ordre ou un conseil est...", "impérative", ["déclarative", "interrogative"], "Par exemple : « Range ta chambre. »"));
  b.push(qc("Une phrase exclamative se termine par...", "!", [".", "?"], "Le point d'exclamation montre la joie, la surprise ou la colère.", { gros: true }));

  n = alea(2, 4);
  b.push(qNombre("Combien y a-t-il de phrases ? « " + ["Le chat dort.", "Il rêve.", "Il ronronne.", "Puis il se réveille."].slice(0, n).join(" ") + " »", n,
    "Compte les points : chaque point termine une phrase."));
  x = un([["Le petit chat boit du lait.", "Le petit chat", ["boit", "du lait"]], ["Mes deux cousins arrivent demain.", "Mes deux cousins", ["arrivent", "demain"]]]);
  b.push(qc("Dans « " + x[0] + " », quel est le groupe sujet ?", x[1], x[2], "Le groupe sujet dit de qui on parle."));
  return b;
}

/* =========================================================
   Conjugaison : outils
   ========================================================= */
var PRONOMS = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
var PERSONNE = [0, 1, 2, 2, 3, 4, 5, 5];
var VERBES_1 = ["chanter", "jouer", "danser", "parler", "sauter", "regarder", "marcher", "dessiner"];
var T_PRESENT = ["e", "es", "e", "ons", "ez", "ent"];
var T_FUTUR = ["ai", "as", "a", "ons", "ez", "ont"];
var T_IMPARFAIT = ["ais", "ais", "ait", "ions", "iez", "aient"];
var ETRE = { present:["suis", "es", "est", "sommes", "êtes", "sont"], futur:["serai", "seras", "sera", "serons", "serez", "seront"], imparfait:["étais", "étais", "était", "étions", "étiez", "étaient"] };
var AVOIR = { present:["ai", "as", "a", "avons", "avez", "ont"], futur:["aurai", "auras", "aura", "aurons", "aurez", "auront"], imparfait:["avais", "avais", "avait", "avions", "aviez", "avaient"] };
function rad(inf){ return inf.slice(0, -2); }

/* =========================================================
   FICHE — Le présent
   ========================================================= */
function fabPresent(){
  var b = [], i, v, p, bonne, formes;

  piocher([0, 1, 2, 4, 5, 6, 7], 4).forEach(function(i){
    v = un(VERBES_1); p = PERSONNE[i]; bonne = rad(v) + T_PRESENT[p];
    formes = [0, 1, 3, 4, 5].map(function(k){ return rad(v) + T_PRESENT[k]; }).filter(function(f){ return f !== bonne; });
    b.push(qc(complete(cap(PRONOMS[i]) + " … (" + v + ")"), bonne, piocher(formes, 3),
      "Au présent, les verbes en -er se terminent par : e, es, e, ons, ez, ent.", { gros: true }));
  });

  var suitesEtre = ["content", "en retard", "à l'école", "dans la cour", "très gentils", "au parc"];
  piocher([1, 2, 3, 4, 5, 6], 2).forEach(function(i){
    p = PERSONNE[i];
    b.push(qc(complete(cap(PRONOMS[i]) + " … " + suitesEtre[p] + ". (être)"), ETRE.present[p],
      piocher(ETRE.present.filter(function(f){ return f !== ETRE.present[p]; }), 2).concat([AVOIR.present[p]]),
      "Être au présent : je suis, tu es, il est, nous sommes, vous êtes, ils sont.", { gros: true }));
  });
  var suitesAvoir = ["un vélo", "un chien", "sept ans", "faim", "une belle maison", "des billes"];
  piocher([1, 2, 3, 4, 5, 6, 7], 2).forEach(function(i){
    p = PERSONNE[i];
    b.push(qc(complete(cap(PRONOMS[i]) + " … " + suitesAvoir[p] + ". (avoir)"), AVOIR.present[p],
      piocher(AVOIR.present.filter(function(f){ return f !== AVOIR.present[p]; }), 2).concat([ETRE.present[p]]),
      "Avoir au présent : j'ai, tu as, il a, nous avons, vous avez, ils ont.", { gros: true }));
  });

  piocher([
    ["nous", "-ons"], ["vous", "-ez"], ["ils", "-ent"], ["tu", "-es"]
  ], 2).forEach(function(x){
    b.push(qc("Au présent, avec " + mot(x[0]) + ", un verbe en -er se termine par...", x[1], ["-ons", "-ez", "-ent", "-es"],
      "Nous chantons, vous chantez, ils chantent, tu chantes.", { gros: true }));
  });
  v = un(VERBES_1);
  piocher([["nous", 3], ["vous", 4], ["tu", 1]], 1).forEach(function(x){
    b.push(qc("Quel pronom va avec " + mot(rad(v) + T_PRESENT[x[1]]) + " ?", x[0], ["nous", "vous", "tu", "ils"], "Regarde la fin du verbe.", { gros: true }));
  });
  piocher([["sommes", "nous"], ["êtes", "vous"], ["suis", "je"], ["avons", "nous"], ["avez", "vous"], ["as", "tu"]], 2).forEach(function(x){
    b.push(qc("Quel pronom va avec " + mot(x[0]) + " ?", x[1], ["je", "tu", "nous", "vous"], "Récite la conjugaison de être et de avoir.", { gros: true }));
  });

  v = un(VERBES_1);
  b.push(qc("L'infinitif de " + mot("vous " + rad(v) + "ez") + " est...", v, [rad(v) + "ez", rad(v) + "é", rad(v) + "e"], "L'infinitif des verbes du premier groupe se termine par -er."));
  b.push(qc("Les verbes en -er, comme chanter, sont du...", "premier groupe", ["deuxième groupe", "troisième groupe"], "Tous les verbes en -er, sauf aller."));
  b.push(vf("Dans « ils jouent », on entend les lettres -ent à la fin.", false, "La terminaison -ent du verbe ne se prononce pas : on dit « ils jou »."));
  v = un(VERBES_1);
  b.push(qc("Dans " + mot("nous " + rad(v) + "ons") + ", la terminaison est...", "-ons", ["-" + rad(v).slice(-2), "nous", "-s"], "Le radical est « " + rad(v) + " ». Ce qui change à la fin, c'est la terminaison.", { gros: true }));
  return b;
}

/* =========================================================
   FICHE — Passé, présent, futur
   ========================================================= */
function fabTempsVerbes(){
  var b = [], v, i, p, r;

  piocher([
    ["Hier, j'ai joué au ballon.", "au passé"], ["Demain, nous irons à la piscine.", "au futur"], ["En ce moment, je lis un livre.", "au présent"],
    ["L'année dernière, j'étais au CP.", "au passé"], ["Plus tard, je serai pompier.", "au futur"], ["Aujourd'hui, il fait beau.", "au présent"],
    ["Autrefois, il n'y avait pas de voitures.", "au passé"], ["La semaine prochaine, nous aurons un spectacle.", "au futur"]
  ], 3).forEach(function(x){
    b.push(qc("« " + x[0] + " » Cette phrase est...", x[1], ["au passé", "au présent", "au futur"], "Cherche le petit mot qui dit quand cela se passe.", { gros: true }));
  });
  b.push(qc("Quel mot indique le futur ?", un(["demain", "bientôt", "plus tard"]), ["hier", "autrefois", "maintenant"], "Le futur, c'est ce qui n'est pas encore arrivé."));
  b.push(qc("Quel mot indique le passé ?", un(["hier", "autrefois", "avant"]), ["demain", "bientôt", "maintenant"], "Le passé, c'est ce qui est déjà arrivé."));

  [1, 4].forEach(function(i){
    v = un(VERBES_1); p = PERSONNE[i]; r = rad(v);
    b.push(qc(complete("Demain, " + PRONOMS[i] + " … (" + v + ")"), v + T_FUTUR[p], [r + T_IMPARFAIT[p], r + T_PRESENT[p], AVOIR.present[p] + " " + r + "é"],
      "Au futur, on garde le verbe en entier et on ajoute : ai, as, a, ons, ez, ont."));
  });
  [2, 6].forEach(function(i){
    v = un(VERBES_1); p = PERSONNE[i]; r = rad(v);
    b.push(qc(complete("Avant, " + PRONOMS[i] + " … souvent. (" + v + ")"), r + T_IMPARFAIT[p], [v + T_FUTUR[p], r + T_PRESENT[p]],
      "À l'imparfait, les terminaisons sont : ais, ais, ait, ions, iez, aient."));
  });
  [3, 5].forEach(function(i){
    v = un(VERBES_1); p = PERSONNE[i]; r = rad(v);
    b.push(qc(complete("Hier, " + PRONOMS[i] + " … (" + v + ")"), AVOIR.present[p] + " " + r + "é", [v + T_FUTUR[p], r + T_PRESENT[p], AVOIR.present[p] + " " + v],
      "Au passé composé, il y a deux mots : avoir au présent, puis le verbe qui se termine par é."));
  });

  i = un([1, 2, 4, 5, 6]); p = PERSONNE[i];
  b.push(qc(complete("Demain, " + PRONOMS[i] + " … en vacances. (être)"), ETRE.futur[p], [ETRE.imparfait[p], ETRE.present[p], AVOIR.futur[p]],
    "Être au futur : je serai, tu seras, il sera, nous serons, vous serez, ils seront.", { gros: true }));
  i = un([1, 2, 4, 5, 6]); p = PERSONNE[i];
  b.push(qc(complete("Avant, " + PRONOMS[i] + " … au CP. (être)"), ETRE.imparfait[p], [ETRE.futur[p], ETRE.present[p], AVOIR.imparfait[p]],
    "Être à l'imparfait : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.", { gros: true }));
  i = un([1, 2, 4, 5, 6]); p = PERSONNE[i];
  b.push(qc(complete("Demain, " + PRONOMS[i] + " … un cadeau. (avoir)"), AVOIR.futur[p], [AVOIR.imparfait[p], AVOIR.present[p], ETRE.futur[p]],
    "Avoir au futur : j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront.", { gros: true }));
  i = un([1, 2, 4, 5, 6]); p = PERSONNE[i];
  b.push(qc(complete("Avant, " + PRONOMS[i] + " … un petit chat. (avoir)"), AVOIR.imparfait[p], [AVOIR.futur[p], AVOIR.present[p], ETRE.imparfait[p]],
    "Avoir à l'imparfait : j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient.", { gros: true }));

  b.push(qc(mot("J'ai mangé") + " est conjugué...", "au passé composé", ["au présent", "au futur", "à l'imparfait"], "Deux mots : « ai » et « mangé ». Cela s'est déjà passé."));
  b.push(qc("Au passé composé, le verbe conjugué s'écrit en...", "deux mots", ["un mot", "trois mots"], "Par exemple : « il a joué »."));
  b.push(qc("Ils plieront, tu as plié, vous pliez : quel est l'infinitif ?", "plier", ["pliez", "plié", "plieront"], "Cherche la partie qui ne change pas : « pli »."));
  return b;
}

/* =========================================================
   FICHE — Orthographe : les lettres qui changent de son
   ========================================================= */
var REGLE_S = "Entre deux voyelles, un seul s se prononce « z ». Pour entendre « s », il en faut deux.";
var REGLE_C = "Devant a, o, u, la lettre c se prononce « k ». Avec une cédille, elle se prononce « s ».";
var REGLE_G = "Devant e et i, la lettre g se prononce « j ». Pour garder le son « g », on écrit gu.";
var REGLE_M = "Devant m, b et p, on écrit m à la place de n.";
var ORTHO = [
  ["une chai…e", "s", ["ss", "z"], REGLE_S], ["un poi…on dans l'eau", "ss", ["s", "z"], REGLE_S], ["une ro…e", "s", ["ss", "c"], REGLE_S],
  ["une ta…e de lait", "ss", ["s", "z"], REGLE_S], ["une mai…on", "s", ["ss", "z"], REGLE_S], ["la cla…e", "ss", ["s", "c"], REGLE_S],
  ["un gar…on", "ç", ["c", "ss"], REGLE_C], ["une le…on", "ç", ["c", "s"], REGLE_C], ["un …itron", "c", ["ç", "k"], "Devant e et i, la lettre c se prononce déjà « s » : pas besoin de cédille."],
  ["un …adeau", "c", ["ç", "s"], REGLE_C], ["une balan…oire", "ç", ["c", "ss"], REGLE_C],
  ["une …itare", "gu", ["g", "j"], REGLE_G], ["un pi…on", "ge", ["g", "gu"], "Devant a, o, u, pour entendre « j », on écrit ge."], ["une ba…e au doigt", "gu", ["g", "j"], REGLE_G],
  ["un …âteau", "g", ["gu", "j"], "Devant a, o, u, la lettre g se prononce « g »."], ["une …irafe", "g", ["gu", "j"], "Devant e et i, la lettre g se prononce « j »."],
  ["une cha…bre", "m", ["n"], REGLE_M], ["un ta…bour", "m", ["n"], REGLE_M], ["une la…pe", "m", ["n"], REGLE_M], ["un po…pier", "m", ["n"], REGLE_M],
  ["co…pter", "m", ["n"], REGLE_M], ["une ta…te", "n", ["m"], "Devant un t, on garde le n."], ["le mo…de", "n", ["m"], "Devant un d, on garde le n."],
  ["une …cole", "é", ["è", "ê"], "L'accent aigu monte : é."], ["mon fr…re", "è", ["é", "ê"], "L'accent grave descend : è."], ["la for…t", "ê", ["é", "è"], "L'accent circonflexe ressemble à un petit chapeau : ê."],
  ["un …léphant", "é", ["è", "ê"], "L'accent aigu monte : é."], ["la f…te", "ê", ["é", "è"], "L'accent circonflexe ressemble à un petit chapeau : ê."], ["ma m…re", "è", ["é", "ê"], "L'accent grave descend : è."],
  ["un cha… (une chatte)", "t", ["s", "d"], "Pense au féminin : chatte. On entend la lettre muette."], ["gran… (grande)", "d", ["t", "s"], "Pense au féminin : grande."],
  ["peti… (petite)", "t", ["d", "s"], "Pense au féminin : petite."], ["blan… (blanche)", "c", ["t", "d"], "Pense au féminin : blanche."]
];
var HOMOPHONES = [
  ["Il … un vélo.", "a", ["à"], "On peut dire « avait » : c'est le verbe avoir, sans accent."], ["Je vais … l'école.", "à", ["a"], "On ne peut pas dire « avait » : il faut l'accent."],
  ["Le chat … noir.", "est", ["et"], "On peut dire « était » : c'est le verbe être."], ["Un chat … un chien.", "et", ["est"], "On peut dire « et puis »."],
  ["Les enfants … faim.", "ont", ["on"], "On peut dire « avaient » : c'est le verbe avoir."], ["… joue au ballon.", "On", ["Ont"], "On peut dire « il » à la place."],
  ["Ils … contents.", "sont", ["son"], "On peut dire « étaient » : c'est le verbe être."], ["Tom prend … cartable.", "son", ["sont"], "On peut dire « mon » à la place."],
  ["Elle … sept ans.", "a", ["à"], "On peut dire « avait » : c'est le verbe avoir."], ["Mon frère … grand.", "est", ["et"], "On peut dire « était »."]
];
function fabOrthographe(){
  var b = [];
  piocher(ORTHO, 12).forEach(function(x){
    b.push(qc(complete(x[0]), x[1], x[2], x[3], { consigne: "Touche ce qui manque.", gros: true }));
  });
  piocher(HOMOPHONES, 6).forEach(function(x){
    b.push(qc(complete(x[0]), x[1], x[2], x[3], { consigne: "Touche le bon mot.", gros: true }));
  });
  return b;
}

/* =========================================================
   FICHE — Le vocabulaire
   ========================================================= */
function fabVocabulaire(){
  var b = [], t, tri;

  t = piocher(["arbre", "ballon", "chien", "dragon", "école", "fleur", "girafe", "hibou", "jardin", "lapin", "maison", "nuage", "oiseau", "poule", "renard", "soleil", "tortue", "vache", "zèbre"], 3);
  tri = t.slice().sort(function(x, y){ return x.localeCompare(y, "fr"); });
  b.push(qc("Quel mot vient en premier dans le dictionnaire ?", tri[0], t, "Regarde la première lettre de chaque mot et récite l'alphabet."));
  t = un([["balle", "biche", "bonbon"], ["chat", "cirque", "copain"], ["maman", "midi", "mouton"], ["pain", "pied", "pomme"]]);
  b.push(qc("Quel mot vient en premier dans le dictionnaire ?", t[0], t, "La première lettre est la même : regarde la deuxième."));

  piocher([
    ["content", "joyeux", ["triste", "fâché"]], ["beau", "joli", ["laid", "vieux"]], ["un habit", "un vêtement", ["un meuble", "un outil"]],
    ["terminer", "finir", ["commencer", "ouvrir"]], ["une voiture", "une automobile", ["un vélo", "une route"]],
    ["drôle", "amusant", ["triste", "sérieux"]], ["énorme", "immense", ["minuscule", "léger"]], ["peureux", "craintif", ["courageux", "bavard"]]
  ], 2).forEach(function(x){
    b.push(qc("Quel mot veut dire à peu près la même chose que " + mot(x[0]) + " ?", x[1], x[2], "Deux mots de sens proche s'appellent des synonymes."));
  });
  piocher([
    ["grand", "petit", ["gros", "haut"]], ["chaud", "froid", ["tiède", "brûlant"]], ["monter", "descendre", ["grimper", "sauter"]],
    ["ouvrir", "fermer", ["pousser", "entrer"]], ["le jour", "la nuit", ["le matin", "le soleil"]], ["rapide", "lent", ["vite", "pressé"]],
    ["plein", "vide", ["rempli", "lourd"]], ["gentil", "méchant", ["aimable", "poli"]]
  ], 2).forEach(function(x){
    b.push(qc("Quel est le contraire de " + mot(x[0]) + " ?", x[1], x[2], "Le contraire, c'est le mot qui dit l'inverse."));
  });
  piocher([
    ["visible", "invisible", ["dévisible", "malvisible"]], ["ranger", "déranger", ["inranger", "malranger"]], ["possible", "impossible", ["dépossible", "malpossible"]],
    ["monter", "démonter", ["inmonter", "malmonter"]], ["heureux", "malheureux", ["inheureux", "déheureux"]], ["coiffer", "décoiffer", ["incoiffer", "malcoiffer"]]
  ], 2).forEach(function(x){
    b.push(qc("Quel est le contraire de " + mot(x[0]) + " ?", x[1], x[2], "On ajoute un petit morceau au début du mot : in-, im-, dé- ou mal-."));
  });
  piocher([
    ["dent", ["dentiste", "dentifrice"], "danser"], ["terre", ["terrain", "enterrer"], "terrible"], ["lait", ["laitier", "laitage"], "laid"],
    ["chant", ["chanter", "chanteur"], "champ"], ["jardin", ["jardinier", "jardinage"], "jambe"], ["fleur", ["fleuriste", "fleurir"], "fleuve"]
  ], 2).forEach(function(x){
    b.push(qc("Quel mot n'est pas de la famille de " + mot(x[0]) + " ?", x[2], x[1], "Les mots d'une même famille se ressemblent et parlent de la même chose."));
  });
  piocher([
    ["pomme, poire, banane", "des fruits", ["des légumes", "des fleurs"]], ["chien, chat, lapin", "des animaux", ["des jouets", "des fruits"]],
    ["marteau, scie, tournevis", "des outils", ["des meubles", "des jouets"]], ["rouge, bleu, vert", "des couleurs", ["des formes", "des nombres"]],
    ["table, chaise, armoire", "des meubles", ["des outils", "des vêtements"]], ["carotte, poireau, radis", "des légumes", ["des fruits", "des arbres"]]
  ], 2).forEach(function(x){
    b.push(qc(cap(x[0]) + " : ce sont...", x[1], x[2], "Cherche le mot qui les réunit tous."));
  });
  piocher([
    ["Celui qui chante est un...", "chanteur", ["chantier", "chanson"]], ["Celle qui coiffe est une...", "coiffeuse", ["coiffure", "coiffe"]],
    ["Celui qui s'occupe du jardin est un...", "jardinier", ["jardinage", "jardinet"]], ["Celui qui fait le pain est un...", "boulanger", ["boulangerie", "boulette"]]
  ], 1).forEach(function(x){ b.push(qc(x[0], x[1], x[2], "La fin du mot change : -eur, -euse, -ier ou -er pour les métiers.")); });
  piocher([
    ["« Avoir un chat dans la gorge » veut dire...", "avoir la voix enrouée", ["avoir avalé un chat", "aimer les chats"]],
    ["« Tomber dans les pommes » veut dire...", "s'évanouir", ["tomber d'un pommier", "manger des pommes"]],
    ["« Avoir une faim de loup » veut dire...", "avoir très faim", ["avoir peur du loup", "manger un loup"]],
    ["« Prendre ses jambes à son cou » veut dire...", "s'enfuir très vite", ["faire de la gymnastique", "se faire mal"]],
    ["« Il pleut des cordes » veut dire...", "il pleut très fort", ["des cordes tombent du ciel", "il ne pleut plus"]]
  ], 2).forEach(function(x){ b.push(qc(x[0], x[1], x[2], "C'est une expression : il ne faut pas la comprendre mot à mot.")); });

  b.push(qc("Quel mot est familier ?", un(["une bagnole", "un bouquin"]), ["une voiture", "un livre", "une automobile"], "Un mot familier s'emploie entre copains, pas dans un texte pour la maîtresse ou le maître."));
  b.push(qc("Un parapluie protège de...", "la pluie", ["le soleil", "le vent"], "« para » veut dire « qui protège de ». Comme le parasol pour le soleil."));
  b.push(qc("« Multicolore » veut dire...", "de plusieurs couleurs", ["sans couleur", "d'une seule couleur"], "« multi » veut dire « beaucoup »."));
  b.push(qc("Dans un dictionnaire, les mots sont rangés...", "dans l'ordre alphabétique", ["du plus court au plus long", "par couleur"], "A, B, C, D... comme l'alphabet."));
  return b;
}

/* ---------- Enregistrement des fiches de français ---------- */
ajouterFiche({ id:"noms", groupe:"grammaire", classe:"fra", sign:"N", titre:"Le nom et le déterminant", matiere:"Grammaire",
  detail:"Reconnaître les mots, masculin, féminin, pluriel", fab:fabNoms,
  lecon:[
    ["Un nom, c'est un mot qui désigne une personne, un animal, une chose, ou même un sentiment.",
      V(hl("maîtresse") + " " + hl("chat", "b"), hl("maison", "v") + " " + hl("joie", "o"), petit("ce sont des noms"))],
    ["Devant le nom, il y a presque toujours un petit mot : le déterminant.",
      V(hl("le", "o") + " chat", hl("une", "o") + " maison", hl("mes", "o") + " amis")],
    ["Le nom propre désigne une personne ou un lieu précis. Il commence toujours par une majuscule.",
      V(hl("L") + "éa &nbsp; " + hl("P") + "aris", hl("A") + "stérix", petit("une majuscule au début"))],
    ["Un nom est masculin ou féminin. Il est au singulier s'il y en a un seul, au pluriel s'il y en a plusieurs.",
      V("un chat &nbsp;·&nbsp; une souris", "un chat &nbsp;→&nbsp; des chat" + hl("s"))]
  ] });
ajouterFiche({ id:"verbes", groupe:"grammaire", classe:"fra", sign:"V", titre:"Le verbe et son sujet", matiere:"Grammaire",
  detail:"Trouver le verbe, le sujet, les pronoms", fab:fabVerbes,
  lecon:[
    ["Le verbe est le mot qui dit ce que l'on fait. C'est lui qui change quand le temps change.",
      V("Aujourd'hui, le chat " + hl("dort") + ".", "Demain, le chat " + hl("dormira") + ".")],
    ["Le nom du verbe s'appelle l'infinitif. Pour le trouver, on dit : il faut.",
      V("il chante", "il faut… " + hl("chanter", "b"))],
    ["Le sujet dit qui fait l'action. Pour le trouver, on pose la question : qui est-ce qui ?",
      V(hl("Le chat", "v") + " dort.", "Qui est-ce qui dort ?", "→ " + hl("le chat", "v"))],
    ["On peut remplacer le sujet par un pronom : je, tu, il, elle, nous, vous, ils, elles.",
      V(hl("Les enfants", "v") + " jouent.", hl("Ils", "o") + " jouent.")]
  ] });
ajouterFiche({ id:"accords", groupe:"grammaire", classe:"fra", sign:"A", titre:"L'adjectif et les accords", matiere:"Grammaire",
  detail:"Féminin en -e, pluriel en -s, la chaîne d'accords", fab:fabAccords,
  lecon:[
    ["L'adjectif est un mot qui dit comment est le nom : petit, rouge, gentil.",
      V("un " + hl("petit") + " chat", "une robe " + hl("rouge"))],
    ["Au féminin, l'adjectif prend souvent un e.",
      V("un " + hl("petit", "b") + " garçon", "une " + hl("petit", "b") + hl("e", "o") + " fille")],
    ["Au pluriel, le nom et l'adjectif prennent souvent un s.",
      V("un chat noir", "des chat" + hl("s", "o") + " noir" + hl("s", "o"))],
    ["Le déterminant, le nom et l'adjectif vont ensemble, comme les wagons d'un train. C'est la chaîne d'accords.",
      V(hl("les", "v") + " " + hl("petites", "v") + " " + hl("souris", "v"), petit("féminin pluriel partout"))]
  ] });
ajouterFiche({ id:"phrases", groupe:"grammaire", classe:"fra", sign:"¶", titre:"La phrase", matiere:"Grammaire",
  detail:"Majuscule, point, types et formes de phrases", fab:fabPhrases,
  lecon:[
    ["Une phrase est une suite de mots qui a du sens. Elle commence par une majuscule et se termine par un point.",
      V(hl("L") + "e chien court dans le jardin" + hl("."))],
    ["La phrase déclarative raconte quelque chose. La phrase interrogative pose une question.",
      V("Il pleut" + hl(".") + " " + petit("déclarative"), "Où vas-tu " + hl("?", "b") + " " + petit("interrogative"))],
    ["La phrase impérative donne un ordre ou un conseil.",
      V("Range ta chambre" + hl(".", "v"), petit("impérative"))],
    ["À la forme négative, le verbe est entouré de deux petits mots : ne et pas.",
      V("Il mange.", "Il " + hl("ne", "o") + " mange " + hl("pas", "o") + ".")]
  ] });
ajouterFiche({ id:"present", groupe:"conjugaison", classe:"fra", sign:"P", titre:"Le présent", matiere:"Conjugaison",
  detail:"Verbes en -er, être et avoir", fab:fabPresent,
  lecon:[
    ["Le présent sert à dire ce qui se passe maintenant. Dans un verbe, il y a le radical, qui ne change pas, et la terminaison, qui change.",
      V("chant" + hl("er"), hl("chant", "b") + " : le radical", "+ la " + hl("terminaison"))],
    ["Pour les verbes en E R, les terminaisons sont : e, es, e, ons, ez, ent.",
      V("je chant" + hl("e") + " &nbsp; tu chant" + hl("es"), "il chant" + hl("e") + " &nbsp; nous chant" + hl("ons"), "vous chant" + hl("ez") + " &nbsp; ils chant" + hl("ent"))],
    ["Le verbe être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
      V("je " + hl("suis", "b") + " &nbsp; tu " + hl("es", "b"), "il " + hl("est", "b") + " &nbsp; nous " + hl("sommes", "b"), "vous " + hl("êtes", "b") + " &nbsp; ils " + hl("sont", "b"))],
    ["Le verbe avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont.",
      V("j'" + hl("ai", "v") + " &nbsp; tu " + hl("as", "v"), "il " + hl("a", "v") + " &nbsp; nous " + hl("avons", "v"), "vous " + hl("avez", "v") + " &nbsp; ils " + hl("ont", "v"))]
  ] });
ajouterFiche({ id:"tempsverbes", groupe:"conjugaison", classe:"fra", sign:"⇄", titre:"Passé, présent, futur", matiere:"Conjugaison",
  detail:"Imparfait, futur et passé composé", fab:fabTempsVerbes,
  lecon:[
    ["Le passé, c'est avant. Le présent, c'est maintenant. Le futur, c'est après.",
      V(hl("hier", "b") + " → " + hl("aujourd'hui", "v") + " → " + hl("demain", "o"), "passé &nbsp; présent &nbsp; futur")],
    ["Au futur, on garde le verbe en entier et on ajoute : ai, as, a, ons, ez, ont.",
      V("Demain, je chanter" + hl("ai", "o"), "tu chanter" + hl("as", "o") + " &nbsp; il chanter" + hl("a", "o"))],
    ["À l'imparfait, pour raconter ce qui se passait avant, les terminaisons sont : ais, ais, ait, ions, iez, aient.",
      V("Avant, je chant" + hl("ais", "b"), "nous chant" + hl("ions", "b") + " &nbsp; ils chant" + hl("aient", "b"))],
    ["Au passé composé, il y a deux mots : le verbe avoir au présent, puis le verbe qui se termine par é.",
      V("Hier, j'" + hl("ai") + " chant" + hl("é"), "tu " + hl("as") + " chant" + hl("é"))]
  ] });
ajouterFiche({ id:"orthographe", groupe:"mots", classe:"fra", sign:"é", titre:"Les lettres malines", matiere:"Orthographe",
  detail:"s ou ss, c ou ç, g ou gu, m devant m b p, accents", fab:fabOrthographe,
  lecon:[
    ["Entre deux voyelles, un seul s chante comme un z. Pour entendre s, il en faut deux.",
      V("une ro" + hl("s") + "e → « z »", "un poi" + hl("ss", "b") + "on → « s »")],
    ["La lettre c se prononce k devant a, o et u. Avec une cédille, elle se prononce s.",
      V(hl("c") + "adeau → « k »", "gar" + hl("ç", "b") + "on → « s »")],
    ["La lettre g se prononce j devant e et i. Pour garder le son g, on ajoute un u.",
      V(hl("g") + "irafe → « j »", hl("gu", "b") + "itare → « g »")],
    ["Devant m, b et p, on écrit m à la place de n.",
      V("cha" + hl("m", "o") + "bre &nbsp; la" + hl("m", "o") + "pe", "po" + hl("m", "o") + "pier")],
    ["Pour trouver une lettre muette à la fin d'un mot, pense au féminin : petit, petite.",
      V("peti" + hl("t") + " → petite", "gran" + hl("d", "b") + " → grande")]
  ] });
ajouterFiche({ id:"vocabulaire", groupe:"mots", classe:"fra", sign:"Aa", titre:"Les mots", matiere:"Vocabulaire",
  detail:"Dictionnaire, synonymes, contraires, familles de mots", fab:fabVocabulaire,
  lecon:[
    ["Dans le dictionnaire, les mots sont rangés dans l'ordre alphabétique. On regarde la première lettre, puis la deuxième.",
      V(hl("a") + "rbre · " + hl("b") + "allon · " + hl("c") + "hien", "b" + hl("a", "b") + "lle · b" + hl("i", "b") + "che")],
    ["Deux mots qui veulent dire à peu près la même chose sont des synonymes. Deux mots qui disent l'inverse sont des contraires.",
      V("joli = " + hl("beau", "v"), "grand ≠ " + hl("petit", "o"))],
    ["On peut fabriquer un contraire en ajoutant un petit morceau au début du mot.",
      V(hl("in", "o") + "visible", hl("dé", "o") + "ranger &nbsp; " + hl("mal", "o") + "heureux")],
    ["Les mots d'une même famille se ressemblent et parlent de la même chose.",
      V(hl("dent"), hl("dent") + "iste &nbsp; " + hl("dent") + "ifrice")]
  ] });
