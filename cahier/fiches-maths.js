"use strict";
/* =========================================================
   Le Cahier Magique — fiches de mathématiques du CE1
   Programme : cycle 2, BO n° 41 du 31 octobre 2024.
   Nombres jusqu'à 1 000, fractions d'un tout, quatre opérations,
   grandeurs et mesures, espace et géométrie, données.
   ========================================================= */

/* ---------- Dessins de mathématiques ---------- */
function svgBlocs(c, d, u){
  var h = "", x = 2, i, k;
  for (i = 0; i < c; i++){
    h += '<rect x="' + x + '" y="6" width="34" height="34" rx="2" fill="var(--geo)" fill-opacity=".3" stroke="var(--edge)" stroke-width="2"/>';
    for (k = 1; k < 4; k++){
      h += '<path d="M' + (x + k * 8.5) + ' 6v34M' + x + ' ' + (6 + k * 8.5) + 'h34" stroke="var(--edge)" stroke-width=".6" opacity=".55"/>';
    }
    x += 39;
  }
  x += c ? 5 : 0;
  for (i = 0; i < d; i++){
    h += '<rect x="' + x + '" y="6" width="6" height="34" rx="1.5" fill="var(--mes)" fill-opacity=".35" stroke="var(--edge)" stroke-width="1.8"/>';
    x += 9.5;
  }
  x += d ? 6 : 0;
  for (i = 0; i < u; i++){
    h += '<rect x="' + (x + Math.floor(i / 3) * 10) + '" y="' + (10 + (i % 3) * 10.5) + '" width="7" height="7" rx="1.2" fill="var(--sun)" stroke="var(--edge)" stroke-width="1.6"/>';
  }
  x += u ? Math.ceil(u / 3) * 10 : 0;
  return '<svg class="large" viewBox="0 0 ' + Math.max(x + 2, 60).toFixed(0) + ' 46" style="max-width:' + Math.max(x * 1.9, 120).toFixed(0) + 'px" aria-hidden="true">' + h + '</svg>';
}
function svgFraction(num, den, couleur){
  var h = "", i, a0, a1, x0, y0, x1, y1;
  couleur = couleur || "var(--cal)";
  if (den === 1){
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" fill="' + couleur + '" fill-opacity=".55" stroke="var(--edge)" stroke-width="3"/></svg>';
  }
  for (i = 0; i < den; i++){
    a0 = (-90 + i * 360 / den) * Math.PI / 180; a1 = (-90 + (i + 1) * 360 / den) * Math.PI / 180;
    x0 = 50 + 42 * Math.cos(a0); y0 = 50 + 42 * Math.sin(a0);
    x1 = 50 + 42 * Math.cos(a1); y1 = 50 + 42 * Math.sin(a1);
    h += '<path d="M50 50L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'A42 42 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + 'Z" fill="'
      + (i < num ? couleur : "var(--paper)") + '" fill-opacity="' + (i < num ? ".6" : "1") + '" stroke="var(--edge)" stroke-width="2.5" stroke-linejoin="round"/>';
  }
  return '<svg viewBox="0 0 100 100" aria-hidden="true">' + h + '</svg>';
}
function svgBande(num, den, couleur){
  var h = "", i, w = 196 / den;
  couleur = couleur || "var(--mes)";
  for (i = 0; i < den; i++){
    h += '<rect x="' + (2 + i * w).toFixed(1) + '" y="4" width="' + w.toFixed(1) + '" height="30" fill="' + (i < num ? couleur : "var(--paper)")
      + '" fill-opacity="' + (i < num ? ".55" : "1") + '" stroke="var(--edge)" stroke-width="2.5"/>';
  }
  return '<svg class="large" viewBox="0 0 200 38" style="max-width:300px" aria-hidden="true">' + h + '</svg>';
}
/* Droite graduée : etiquettes = textes sous les traits ("" = rien, "?" = à trouver). */
function svgDroite(etiquettes){
  var n = etiquettes.length, h = "", i, x, pas = 260 / (n - 1);
  h += '<path d="M12 22H292" stroke="var(--edge)" stroke-width="3" stroke-linecap="round"/><path d="M286 16l8 6-8 6" fill="none" stroke="var(--edge)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
  for (i = 0; i < n; i++){
    x = 18 + i * pas;
    h += '<path d="M' + x.toFixed(1) + ' 13v18" stroke="var(--edge)" stroke-width="2.5" stroke-linecap="round"/>';
    if (etiquettes[i] === "?"){
      h += '<rect x="' + (x - 15).toFixed(1) + '" y="36" width="30" height="22" rx="6" fill="var(--sun-soft)" stroke="var(--coral)" stroke-width="2.5"/>'
        + '<text x="' + x.toFixed(1) + '" y="53" text-anchor="middle" font-size="16" font-family="Grandstander,sans-serif" font-weight="900" fill="var(--coral)">?</text>';
    } else if (etiquettes[i] !== ""){
      h += '<text x="' + x.toFixed(1) + '" y="53" text-anchor="middle" font-size="15" font-family="Grandstander,sans-serif" font-weight="800" fill="var(--ink)">' + etiquettes[i] + '</text>';
    }
  }
  return '<svg class="large" viewBox="0 0 300 62" style="max-width:460px" aria-hidden="true">' + h + '</svg>';
}
/* Pièces et billets : valeurs en centimes. */
function libArgent(v){ return v >= 100 ? (v / 100) + " €" : v + " c"; }
function svgMonnaie(valeurs){
  var h = "", x = 4, i, v, r;
  for (i = 0; i < valeurs.length; i++){
    v = valeurs[i];
    if (v >= 500){
      h += '<rect x="' + x + '" y="9" width="62" height="34" rx="5" fill="' + (v >= 2000 ? "var(--mes)" : (v >= 1000 ? "var(--cal)" : "var(--leaf)"))
        + '" fill-opacity=".3" stroke="var(--edge)" stroke-width="2.5"/>'
        + '<text x="' + (x + 31) + '" y="32" text-anchor="middle" font-size="16" font-family="Grandstander,sans-serif" font-weight="900" fill="var(--ink)">' + libArgent(v) + '</text>';
      x += 68;
    } else {
      r = v >= 100 ? 21 : (v >= 50 ? 19 : 16);
      h += '<circle cx="' + (x + r) + '" cy="26" r="' + r + '" fill="' + (v >= 100 ? "var(--sun)" : (v >= 10 ? "#E9C46A" : "#D8915A")) + '" stroke="var(--edge)" stroke-width="2.5"/>'
        + '<text x="' + (x + r) + '" y="31" text-anchor="middle" font-size="' + (v >= 100 ? 14 : 12) + '" font-family="Grandstander,sans-serif" font-weight="900" fill="#3A2600">' + libArgent(v) + '</text>';
      x += r * 2 + 6;
    }
  }
  return '<svg class="large" viewBox="0 0 ' + (x + 2) + ' 52" style="max-width:' + Math.round(x * 1.5) + 'px" aria-hidden="true">' + h + '</svg>';
}
var SOLIDES = {
  cube: { nom:"un cube", faces:6, sommets:8, aretes:12 },
  pave: { nom:"un pavé", faces:6, sommets:8, aretes:12 },
  pyramide: { nom:"une pyramide", faces:5, sommets:5, aretes:8 },
  boule: { nom:"une boule" },
  cylindre: { nom:"un cylindre" },
  cone: { nom:"un cône" }
};
function svgSolide(k, couleur){
  var c = couleur || "var(--geo)", s = ' stroke="var(--edge)" stroke-width="3" stroke-linejoin="round"', h = "";
  var f = ' fill="' + c + '" fill-opacity=".3"' + s, f2 = ' fill="' + c + '" fill-opacity=".5"' + s;
  if (k === "cube"){
    h = '<path d="M14 36h52v52H14z"' + f + '/><path d="M14 36l20-22h52l-20 22z"' + f2 + '/><path d="M66 36l20-22v52l-20 22z"' + f + '/>';
  } else if (k === "pave"){
    h = '<path d="M6 44h64v36H6z"' + f + '/><path d="M6 44l22-20h64l-22 20z"' + f2 + '/><path d="M70 44l22-20v36l-22 20z"' + f + '/>';
  } else if (k === "boule"){
    h = '<circle cx="50" cy="50" r="40"' + f + '/><ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="var(--edge)" stroke-width="2" stroke-dasharray="5 5"/>';
  } else if (k === "cylindre"){
    h = '<path d="M20 24v52a30 10 0 0 0 60 0V24"' + f + '/><ellipse cx="50" cy="24" rx="30" ry="10"' + f2 + '/>';
  } else if (k === "cone"){
    h = '<path d="M50 8L18 78a32 10 0 0 0 64 0z"' + f + '/><path d="M18 78a32 10 0 0 1 64 0" fill="none" stroke="var(--edge)" stroke-width="2" stroke-dasharray="5 5"/>';
  } else {
    h = '<path d="M50 8L10 76l46 14z"' + f + '/><path d="M50 8l6 82 36-22z"' + f2 + '/>';
  }
  return '<svg viewBox="0 0 100 100" aria-hidden="true">' + h + '</svg>';
}
var COULEURS_BARRES = ["var(--cal)", "var(--mes)", "var(--leaf)", "var(--geo)", "var(--sun)"];
function svgBarres(noms, vals){
  var max = Math.max.apply(null, vals), n = vals.length, h = "", i, y, larg = 180 / n, haut = 96 / max;
  for (i = 0; i <= max; i++){
    y = 112 - i * haut;
    h += '<path d="M34 ' + y.toFixed(1) + 'H218" stroke="var(--line)" stroke-width="1"/>'
      + '<text x="28" y="' + (y + 4).toFixed(1) + '" text-anchor="end" font-size="10" font-family="Grandstander,sans-serif" font-weight="800" fill="var(--ink)">' + i + '</text>';
  }
  for (i = 0; i < n; i++){
    h += '<rect x="' + (38 + i * larg + larg * .15).toFixed(1) + '" y="' + (112 - vals[i] * haut).toFixed(1) + '" width="' + (larg * .7).toFixed(1) + '" height="' + (vals[i] * haut).toFixed(1)
      + '" fill="' + COULEURS_BARRES[i % 5] + '" fill-opacity=".65" stroke="var(--edge)" stroke-width="2"/>'
      + '<text x="' + (38 + i * larg + larg / 2).toFixed(1) + '" y="127" text-anchor="middle" font-size="10.5" font-family="Andika,sans-serif" font-weight="700" fill="var(--ink)">' + noms[i] + '</text>';
  }
  h += '<path d="M34 12V112H218" fill="none" stroke="var(--edge)" stroke-width="2.5" stroke-linecap="round"/>';
  return '<svg class="large" viewBox="0 0 224 134" style="max-width:400px" aria-hidden="true">' + h + '</svg>';
}
var LETTRES_GRILLE = ["A", "B", "C", "D", "E"];
/* Quadrillage : objets = [{ c: colonne 0-4, l: ligne 0-3, s: symbole, coul }] */
function svgQuadrillage(objets){
  var h = "", i, j, o;
  for (i = 0; i < 5; i++){
    h += '<text x="' + (39 + i * 34) + '" y="15" text-anchor="middle" font-size="13" font-family="Grandstander,sans-serif" font-weight="900" fill="var(--mes)">' + LETTRES_GRILLE[i] + '</text>';
  }
  for (j = 0; j < 4; j++){
    h += '<text x="12" y="' + (42 + j * 34) + '" text-anchor="middle" font-size="13" font-family="Grandstander,sans-serif" font-weight="900" fill="var(--cal)">' + (j + 1) + '</text>';
    for (i = 0; i < 5; i++){
      h += '<rect x="' + (22 + i * 34) + '" y="' + (20 + j * 34) + '" width="34" height="34" fill="var(--paper)" stroke="var(--edge)" stroke-width="1.6"/>';
    }
  }
  for (i = 0; i < objets.length; i++){
    o = objets[i];
    h += '<text x="' + (39 + o.c * 34) + '" y="' + (45 + o.l * 34) + '" text-anchor="middle" font-size="24" fill="' + (o.coul || "var(--sun)") + '" stroke="var(--edge)" stroke-width=".8">' + o.s + '</text>';
  }
  return '<svg class="large" viewBox="0 0 196 160" style="max-width:300px" aria-hidden="true">' + h + '</svg>';
}
function svgAngle(deg){
  var a = -deg * Math.PI / 180, x = 20 + 66 * Math.cos(a), y = 82 + 66 * Math.sin(a), code = "";
  if (deg === 90) code = '<path d="M34 82V68H20" fill="none" stroke="var(--coral)" stroke-width="3"/>';
  return '<svg viewBox="0 0 100 100" aria-hidden="true">' + code
    + '<path d="M90 82H20L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" fill="none" stroke="var(--edge)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}
function svgPoints(alignes){
  var pts = alignes ? [[14, 78], [50, 50], [86, 22]] : [[14, 74], [48, 30], [86, 62]], h = "", i;
  for (i = 0; i < 3; i++){
    h += '<path d="M' + (pts[i][0] - 5) + ' ' + (pts[i][1] - 5) + 'l10 10M' + (pts[i][0] - 5) + ' ' + (pts[i][1] + 5) + 'l10 -10" stroke="var(--coral)" stroke-width="3" stroke-linecap="round"/>'
      + '<text x="' + (pts[i][0] + 2) + '" y="' + (pts[i][1] - 10) + '" font-size="14" font-family="Grandstander,sans-serif" font-weight="900" fill="var(--ink)">' + "ABC".charAt(i) + '</text>';
  }
  return '<svg viewBox="0 0 100 100" aria-hidden="true">' + h + '</svg>';
}
function svgRegle(cm){
  var h = "", i, x;
  h += '<path d="M20 14H' + (20 + cm * 20) + '" stroke="var(--coral)" stroke-width="5" stroke-linecap="round"/>';
  h += '<rect x="10" y="26" width="220" height="34" rx="4" fill="var(--sun-soft)" stroke="var(--edge)" stroke-width="2.5"/>';
  for (i = 0; i <= 10; i++){
    x = 20 + i * 20;
    h += '<path d="M' + x + ' 26v12" stroke="var(--edge)" stroke-width="2"/>'
      + '<text x="' + x + '" y="53" text-anchor="middle" font-size="11" font-family="Grandstander,sans-serif" font-weight="800" fill="var(--ink)">' + i + '</text>';
    if (i < 10) h += '<path d="M' + (x + 10) + ' 26v7" stroke="var(--edge)" stroke-width="1.2"/>';
  }
  return '<svg class="large" viewBox="0 0 240 64" style="max-width:420px" aria-hidden="true">' + h + '</svg>';
}
/* Opération posée en colonnes. */
function posee(a, b, signe){
  var la = String(a), lb = String(b), n = Math.max(la.length, lb.length), h = '<table class="posee"><tr><td></td>', i;
  function cases(t){
    var r = "", k;
    for (k = 0; k < n; k++) r += '<td>' + (k < n - t.length ? "" : t.charAt(k - (n - t.length))) + '</td>';
    return r;
  }
  h += cases(la) + '</tr><tr><td class="signe">' + signe + '</td>' + cases(lb) + '</tr><tr class="total"><td></td>';
  for (i = 0; i < n; i++) h += '<td>?</td>';
  return h + '</tr></table>';
}

/* =========================================================
   FICHE — Les nombres jusqu'à 1 000
   ========================================================= */
function fabNombres(){
  var b = [], c, d, u, n, m, k, faux;

  c = alea(1, 4); d = alea(1, 9); u = alea(1, 9);
  b.push(qNombre("Quel nombre est dessiné ?", c * 100 + d * 10 + u,
    "Une plaque vaut 100, une barre vaut 10, un petit cube vaut 1.", { fig: svgBlocs(c, d, u) }));

  c = alea(2, 9); d = alea(0, 9); u = alea(1, 9);
  b.push(qNombre(c + " centaines, " + d + " dizaines et " + u + " unités", c * 100 + d * 10 + u,
    "Écris le chiffre des centaines, puis celui des dizaines, puis celui des unités."));

  n = alea(123, 987);
  k = un([["centaines", Math.floor(n / 100)], ["dizaines", Math.floor(n / 10) % 10], ["unités", n % 10]]);
  b.push(qNombre("Dans " + n + ", quel est le chiffre des " + k[0] + " ?", k[1],
    "De gauche à droite : centaines, dizaines, unités."));

  c = alea(2, 9); d = alea(1, 9); u = alea(1, 9);
  b.push(qNombre((c * 100) + " + " + (d * 10) + " + " + u, c * 100 + d * 10 + u,
    "Les centaines, puis les dizaines, puis les unités : il suffit de les écrire à la suite.", { calc: true }));

  n = alea(101, 999);
  b.push(qNombre("Écris en chiffres : " + enLettres(n), n,
    "Lis le nombre à voix haute, morceau par morceau."));

  n = alea(60, 99);
  b.push(qNombre("Écris en chiffres : " + enLettres(n), n,
    "Soixante-dix, c'est 60 + 10. Quatre-vingt-dix, c'est 80 + 10."));

  n = alea(111, 989);
  faux = [n + 10, n - 10, n + 100 > 999 ? n - 100 : n + 100].map(enLettres);
  b.push(qc("Comment s'écrit " + n + " ?", enLettres(n), faux,
    "Lis d'abord les centaines, puis ce qui reste.", { consigne: "Touche la bonne écriture." }));

  n = alea(2, 9) * 100 + alea(1, 8) * 10 + alea(1, 5);
  b.push(qNombre(n + ", " + (n + 1) + ", ?, " + (n + 3), n + 2, "On compte de 1 en 1.", { consigne: "Écris le nombre qui manque." }));

  n = alea(1, 8) * 100 + alea(1, 6) * 10;
  b.push(qNombre(n + ", " + (n + 10) + ", " + (n + 20) + ", ?", n + 30, "On compte de 10 en 10 : seul le chiffre des dizaines avance.", { consigne: "Écris le nombre qui suit." }));

  n = alea(1, 6) * 100 + alea(1, 9) * 10 + alea(1, 9);
  b.push(qNombre(n + ", " + (n + 100) + ", " + (n + 200) + ", ?", n + 300, "On compte de 100 en 100 : seul le chiffre des centaines avance.", { consigne: "Écris le nombre qui suit." }));

  n = alea(12, 38); u = alea(1, 9);
  b.push(qNombre(n + " dizaines et " + u + " unités", n * 10 + u,
    "10 dizaines font 1 centaine. " + n + " dizaines, c'est " + (n * 10) + "."));

  n = alea(2, 9) * 100 + alea(1, 9) * 10;
  b.push(qNombre("Combien de dizaines y a-t-il en tout dans " + n + " ?", n / 10,
    "Dans 1 centaine, il y a 10 dizaines. Cache le chiffre des unités pour lire le nombre de dizaines."));

  m = alea(3, 9) * 100 + alea(2, 7) * 10;
  b.push(qNombre("Quel nombre se cache sous le point d'interrogation ?", m + 20,
    "La droite avance de 10 en 10.", { fig: svgDroite([m, m + 10, "?", m + 30, m + 40]) }));

  k = alea(4, 15);
  b.push(qNombre("Dans une course, Léo arrive " + k + "e. Combien d'enfants sont arrivés avant lui ?", k - 1,
    "Le " + k + "e a " + (k - 1) + " enfants devant lui."));

  b.push(qc("10 dizaines, c'est...", "1 centaine", ["1 dizaine", "10 unités", "1 millier"], "10 barres de dix font une plaque de cent."));
  b.push(qc("10 centaines, c'est...", "mille", ["cent", "dix", "cent-dix"], "Après 999 vient 1 000 : mille."));
  return b;
}

/* =========================================================
   FICHE — Comparer et ranger les nombres
   ========================================================= */
function fabComparer(){
  var b = [], a, c, d, t, n, tri;

  a = alea(120, 880); c = a + alea(1, 9) * 10;
  b.push(qc(a + " ... " + c, "&lt;", ["&gt;", "="], "La bouche du signe s'ouvre toujours vers le plus grand nombre.",
    { consigne: "Touche le bon signe.", gros: true, calc: true }));

  a = alea(310, 980); c = a - alea(2, 9) * 10 - alea(1, 9);
  b.push(qc(a + " ... " + c, "&gt;", ["&lt;", "="], "Compare d'abord les centaines. Si elles sont pareilles, compare les dizaines.",
    { consigne: "Touche le bon signe.", gros: true, calc: true }));

  a = alea(2, 9); c = alea(1, 9); d = alea(1, 9);
  b.push(qc((a * 100 + c * 10 + d) + " ... " + (a * 100) + " + " + (c * 10) + " + " + d, "=", ["&lt;", "&gt;"],
    "Calcule d'abord la somme de droite.", { consigne: "Touche le bon signe.", gros: true }));

  t = piocher([alea(100, 299), alea(300, 499), alea(500, 699), alea(700, 999)], 3);
  b.push(qc("Quel est le plus grand nombre ?", Math.max.apply(null, t), t, "Regarde d'abord le chiffre des centaines.",
    { consigne: "Touche le plus grand.", gros: true }));

  a = alea(2, 8) * 100; c = alea(1, 8); d = alea(1, 8);
  if (c === d) d = d + 1;
  t = [a + c * 10 + d, a + d * 10 + c, a + c * 10 + c];
  b.push(qc("Quel est le plus petit nombre ?", Math.min.apply(null, t), t, "Les centaines sont pareilles : compare les dizaines, puis les unités.",
    { consigne: "Touche le plus petit.", gros: true }));

  n = alea(101, 989);
  if (n % 10 === 0) n += 3;
  d = Math.floor(n / 10) * 10;
  b.push(qc("Entre quelles dizaines se trouve " + n + " ?", d + " et " + (d + 10), [(d - 10) + " et " + d, (d + 10) + " et " + (d + 20), (d - 20) + " et " + (d - 10)],
    "Cherche la dizaine juste avant et la dizaine juste après."));

  n = alea(110, 880);
  if (n % 100 === 0) n += 40;
  d = Math.floor(n / 100) * 100;
  b.push(qc("Entre quelles centaines se trouve " + n + " ?", d + " et " + (d + 100), [(d + 100) + " et " + (d + 200), (d - 100) + " et " + d],
    "Cherche la centaine juste avant et la centaine juste après."));

  n = alea(2, 9) * 100 - 1;
  b.push(qNombre("Quel nombre vient juste après " + n + " ?", n + 1, "Après 99, on passe à la centaine suivante.", { calc: false }));

  n = alea(2, 9) * 100 + un([0, 10, 20, 50]);
  b.push(qNombre("Quel nombre vient juste avant " + n + " ?", n - 1, "Enlève 1 : attention, on change de dizaine.", { calc: false }));

  tri = piocher([alea(110, 290), alea(300, 480), alea(500, 690), alea(700, 890)], 3).sort(function(x, y){ return x - y; });
  b.push(qc("Range du plus petit au plus grand.", tri.join(" &lt; "),
    [[tri[1], tri[0], tri[2]].join(" &lt; "), [tri[2], tri[1], tri[0]].join(" &lt; "), [tri[0], tri[2], tri[1]].join(" &lt; ")],
    "L'ordre croissant : on commence par le plus petit.", { consigne: "Touche le bon rangement." }));

  tri = [alea(2, 4), alea(5, 7), alea(8, 9)].map(function(x){ return x * 100 + alea(11, 88); });
  b.push(qc("Range du plus grand au plus petit.", [tri[2], tri[1], tri[0]].join(" &gt; "),
    [tri.join(" &gt; "), [tri[1], tri[2], tri[0]].join(" &gt; ")],
    "L'ordre décroissant : on commence par le plus grand.", { consigne: "Touche le bon rangement." }));

  a = alea(2, 8) * 100 + alea(1, 8) * 10;
  b.push(qc("Quel nombre est compris entre " + a + " et " + (a + 10) + " ?", a + alea(1, 9), [a - alea(1, 9), a + 10 + alea(1, 9), a + 100],
    "Il doit être plus grand que " + a + " et plus petit que " + (a + 10) + ".", { gros: true }));

  a = alea(3, 8) * 100 + alea(2, 7) * 10;
  b.push(qNombre("Quel nombre se cache sous le point d'interrogation ?", a + 3,
    "La droite avance de 1 en 1.", { fig: svgDroite([a, a + 1, a + 2, "?", a + 4, a + 5]) }));

  a = alea(1, 7) * 100;
  b.push(qNombre("Quel nombre se cache sous le point d'interrogation ?", a + 200,
    "La droite avance de 100 en 100.", { fig: svgDroite([a, a + 100, "?", a + 300]) }));

  b.push(qc("Dans 3 &lt; 8, le signe se lit...", "plus petit que", ["plus grand que", "égal à"], "3 est plus petit que 8 : la pointe est du côté du petit nombre."));
  return b;
}

/* =========================================================
   FICHE — Les fractions
   Fractions d'un tout, dénominateurs 2, 3, 4, 5, 6, 8 et 10.
   ========================================================= */
var NOMS_FRACTIONS = { 2:"demi", 3:"tiers", 4:"quart", 5:"cinquième", 6:"sixième", 8:"huitième", 10:"dixième" };
function nomFraction(n, d){
  var nom = NOMS_FRACTIONS[d];
  if (n > 1 && d !== 3) nom += "s";
  return (n === 1 ? "un" : UNITES[n]) + " " + nom;
}
function fabFractions(){
  var b = [], d, n, m, autres;

  d = un([2, 3, 4, 6, 8]);
  b.push(qc("Quelle fraction du disque est coloriée ?", frac(1, d), [frac(1, d + 1), frac(d, 1), frac(1, d === 2 ? 4 : d - 1)],
    "Compte les parts égales : il y en a " + d + ". Une seule est coloriée.", { fig: svgFraction(1, d), gros: true }));

  d = un([3, 4, 5, 6, 8]); n = alea(2, d - 1);
  b.push(qc("Quelle fraction de la bande est coloriée ?", frac(n, d), [frac(d, n), frac(n, d + 1), frac(d - n, d)].filter(function(x){ return x !== frac(n, d); }),
    "En bas, le nombre total de parts : " + d + ". En haut, les parts coloriées : " + n + ".", { fig: svgBande(n, d), gros: true }));

  d = un([2, 3, 4, 5, 8, 10]);
  b.push(qc("Comment se lit " + frac(1, d) + " ?", nomFraction(1, d),
    piocher([2, 3, 4, 5, 6, 8, 10].filter(function(x){ return x !== d; }), 3).map(function(x){ return nomFraction(1, x); }),
    "Sur 2 on dit demi, sur 3 tiers, sur 4 quart. Ensuite on ajoute « ième »."));

  d = un([4, 5, 8, 10]); n = alea(2, d - 1);
  b.push(qc("Comment s'écrit " + nomFraction(n, d) + " ?", frac(n, d), [frac(d, n), frac(n, d === 10 ? 8 : d + 1), frac(1, d)],
    "Le premier nombre que tu entends s'écrit en haut.", { gros: true }));

  b.push(qChoix("Touche le disque dont un quart est colorié.", [
    { h: svgFraction(1, 4), ok: true }, { h: svgFraction(1, 2), ok: false }, { h: svgFraction(1, 3), ok: false }
  ], "Un quart : le disque est partagé en 4 parts égales et une seule est coloriée.", { consigne: "Touche la bonne figure." }));

  b.push(qChoix("Touche le disque dont la moitié est coloriée.", [
    { h: svgFraction(2, 4, "var(--mes)"), ok: true }, { h: svgFraction(1, 4, "var(--mes)"), ok: false }, { h: svgFraction(3, 4, "var(--mes)"), ok: false }
  ], "La moitié, c'est un demi : autant de colorié que de blanc.", { consigne: "Touche la bonne figure." }));

  d = un([3, 5, 6, 8]); n = alea(1, d - 1);
  b.push(qNombre("Dans " + frac(n, d) + ", quel est le dénominateur ?", d,
    "Le dénominateur est en bas : il dit en combien de parts égales on a partagé."));
  d = un([4, 5, 6, 8, 10]); n = alea(2, d - 1);
  b.push(qNombre("Dans " + frac(n, d) + ", quel est le numérateur ?", n,
    "Le numérateur est en haut : il dit combien de parts on prend."));

  d = un([5, 6, 8, 10]); n = alea(1, d - 2); m = alea(n + 1, d - 1);
  b.push(qc("Quelle est la plus grande fraction ?", frac(m, d), [frac(n, d)],
    "Les parts ont la même taille. Celle qui en prend le plus est la plus grande.", { consigne: "Touche la plus grande.", gros: true }));

  autres = piocher([2, 3, 4, 5, 6, 8, 10], 2).sort(function(x, y){ return x - y; });
  b.push(qc("Quelle est la plus grande fraction ?", frac(1, autres[0]), [frac(1, autres[1])],
    "Plus on partage en beaucoup de parts, plus chaque part est petite.", { consigne: "Touche la plus grande.", gros: true }));

  d = un([5, 6, 8, 10]); n = alea(1, 2); m = alea(1, d - n - 1);
  b.push(qc(frac(n, d) + " + " + frac(m, d), frac(n + m, d), [frac(n + m, d * 2), frac(n + m + 1, d)],
    "Les parts ont la même taille : on ajoute seulement les numérateurs.", { gros: true }));

  d = un([3, 4, 5, 6, 8]); n = alea(2, d - 1); m = alea(1, n - 1);
  b.push(qc(frac(n, d) + " − " + frac(m, d), frac(n - m, d), [frac(n + m, d), frac(m, d), frac(n, d)],
    "On enlève des parts de la même taille : le dénominateur ne change pas.", { gros: true }));

  d = un([2, 3, 4, 5, 6, 8, 10]);
  b.push(qNombre(frac(d, d) + " = ?", 1, "Toutes les parts sont prises : c'est le tout, donc 1."));

  d = un([4, 5, 8, 10]); n = alea(1, d - 1);
  b.push(qc("Lucie colorie " + frac(n, d) + " d'une figure en bleu, et le reste en rouge. Quelle fraction est rouge ?",
    frac(d - n, d), [frac(n, d), frac(d - n, d === 10 ? 8 : d + 1), frac(d, d)],
    "Le tout fait " + d + " parts. " + d + " − " + n + " = " + (d - n) + " parts rouges.", { gros: true }));

  b.push(vf("Un quart d'heure, c'est une heure partagée en 4.", true, "Quart veut dire une part sur quatre parts égales."));
  b.push(qc("La moitié d'un gâteau, c'est...", frac(1, 2), [frac(2, 1), frac(1, 4)], "Moitié et un demi veulent dire la même chose.", { gros: true }));
  return b;
}

/* =========================================================
   FICHE — Additions et soustractions posées
   ========================================================= */
function fabPosees(){
  var b = [], a, c, i;
  function add(a, c, aide){ b.push(qNombre("Calcule cette addition.", a + c, aide, { fig: posee(a, c, "+") })); }
  function sous(a, c, aide){ b.push(qNombre("Calcule cette soustraction.", a - c, aide, { fig: posee(a, c, "−") })); }

  add(alea(2, 5) * 10 + alea(1, 4), alea(1, 4) * 10 + alea(1, 5), "Commence toujours par la colonne des unités, à droite.");
  a = alea(2, 5) * 10 + alea(5, 9); c = alea(1, 3) * 10 + alea(5, 9);
  add(a, c, "Les unités dépassent 9 : écris les unités et garde 1 dizaine en retenue.");
  a = alea(1, 5) * 100 + alea(1, 4) * 10 + alea(1, 4); c = alea(1, 3) * 100 + alea(1, 5) * 10 + alea(1, 5);
  add(a, c, "Unités, puis dizaines, puis centaines.");
  a = alea(1, 5) * 100 + alea(1, 4) * 10 + alea(5, 9); c = alea(1, 3) * 100 + alea(1, 4) * 10 + alea(5, 9);
  add(a, c, "Il y a une retenue dans la colonne des dizaines.");
  a = alea(1, 5) * 100 + alea(5, 9) * 10 + alea(1, 4); c = alea(1, 3) * 100 + alea(5, 9) * 10 + alea(1, 4);
  add(a, c, "Les dizaines dépassent 9 : garde 1 centaine en retenue.");
  a = alea(2, 6) * 100 + alea(1, 8) * 10 + alea(1, 8); c = alea(2, 8) * 10 + alea(2, 9);
  add(a, c, "Aligne bien : unités sous unités, dizaines sous dizaines.");

  sous(alea(5, 9) * 10 + alea(5, 9), alea(1, 4) * 10 + alea(1, 4), "Commence par les unités, puis fais les dizaines.");
  a = alea(4, 9) * 100 + alea(5, 9) * 10 + alea(5, 9); c = alea(1, 3) * 100 + alea(1, 4) * 10 + alea(1, 4);
  sous(a, c, "Unités, puis dizaines, puis centaines.");
  a = alea(4, 9) * 10 + alea(1, 4); c = alea(1, 3) * 10 + alea(5, 9);
  sous(a, c, "Tu ne peux pas enlever les unités : casse une dizaine en 10 unités.");
  a = alea(4, 9) * 100 + alea(3, 8) * 10 + alea(0, 3); c = alea(1, 3) * 100 + alea(1, 2) * 10 + alea(4, 9);
  sous(a, c, "Il manque des unités en haut : prends une dizaine et change-la en 10 unités.");

  for (i = 0; i < 2; i++){
    a = alea(3, 8) * 100 + alea(1, 8) * 10 + alea(1, 8);
    c = alea(1, 2) * 100;
    b.push(qNombre(a + (i ? " − " : " + ") + c, i ? a - c : a + c, "Seul le chiffre des centaines change.", { calc: true }));
  }
  b.push(qc("Dans une addition posée, on commence par la colonne...", "des unités", ["des dizaines", "des centaines"], "Toujours de la droite vers la gauche, pour pouvoir placer les retenues."));
  b.push(qc("Pour poser 245 + 37, où écrit-on le 7 ?", "sous le 5", ["sous le 4", "sous le 2"], "Les unités s'écrivent sous les unités."));
  return b;
}

/* =========================================================
   FICHE — Multiplier et partager
   ========================================================= */
function fabMultiplier(){
  var b = [], a, c, t;

  a = alea(2, 5); c = alea(3, 6);
  b.push(qc(Array(a + 1).join(c + " + ").slice(0, -3) + ", c'est aussi...", a + " × " + c, [a + " + " + c, c + " × " + c, (a + 1) + " × " + c],
    "On ajoute " + a + " fois le nombre " + c + ".", { gros: true }));

  t = un([2, 3, 4, 5, 10]); a = alea(2, 10);
  b.push(qNombre(t + " × " + a, t * a, "Récite la table de " + t + ".", { calc: true }));
  t = un([3, 4, 5]); a = alea(3, 9);
  b.push(qNombre(a + " × " + t, t * a, "On peut échanger les deux nombres : " + a + " × " + t + " = " + t + " × " + a + ".", { calc: true }));
  t = un([2, 3, 4, 5, 10]); a = alea(2, 9);
  b.push(qNombre(t + " × ? = " + (t * a), a, "Dans la table de " + t + ", cherche le résultat " + (t * a) + ".", { calc: true }));
  t = un([6, 7, 8, 9]); a = alea(2, 5);
  b.push(qNombre(t + " × " + a, t * a, "Pense à " + a + " × " + t + ", dans la table de " + a + ".", { calc: true }));

  a = un([20, 25, 30, 35, 40, 45, 50]);
  b.push(qNombre("Le double de " + a, a * 2, a + " + " + a + ".", { calc: true }));
  a = un([100, 150, 200, 250, 300, 500]);
  b.push(qNombre("Le double de " + a, a * 2, a + " + " + a + ".", { calc: true }));
  a = un([40, 50, 60, 70, 80, 90, 100]);
  b.push(qNombre("La moitié de " + a, a / 2, "Partage " + a + " en deux parts égales.", { calc: true }));
  a = un([200, 300, 400, 500, 600, 1000]);
  b.push(qNombre("La moitié de " + a, a / 2, "Partage les centaines en deux.", { calc: true }));
  a = alea(2, 4);
  b.push(qNombre(a + " × 25", a * 25, "25, 50, 75, 100 : comme les pièces de 25.", { calc: true }));

  a = alea(11, 98);
  b.push(qc("Le nombre " + a + " est...", a % 2 === 0 ? "pair" : "impair", [a % 2 === 0 ? "impair" : "pair"],
    "Regarde le chiffre des unités : 0, 2, 4, 6, 8 sont pairs.", { gros: true }));

  t = alea(2, 5); a = alea(2, 6);
  b.push(qNombre(un(["Emma", "Noé", "Inès", "Hugo"]) + " partage " + (t * a) + " bonbons entre " + t + " enfants. Combien chacun en reçoit-il ?", a,
    "Cherche dans la table de " + t + " : " + t + " × ? = " + (t * a) + "."));
  t = un([2, 5, 10]); a = alea(3, 8);
  b.push(qNombre("Combien de paquets de " + t + " peut-on faire avec " + (t * a) + " images ?", a,
    "Compte de " + t + " en " + t + " jusqu'à " + (t * a) + "."));
  t = alea(3, 6); a = alea(3, 9);
  b.push(qNombre(t + " boîtes de " + a + " crayons. Combien de crayons en tout ?", t * a,
    "Des boîtes toutes pareilles : " + t + " × " + a + "."));

  b.push(qc("Le signe × se lit...", "fois", ["plus", "moins", "égal"], "3 × 4 se lit « trois fois quatre »."));
  b.push(qNombre("0 × 7", 0, "Zéro fois quelque chose, cela fait toujours zéro.", { calc: true }));
  return b;
}

/* =========================================================
   FICHE — Les problèmes
   ========================================================= */
var PRENOMS = ["Léa", "Tom", "Inès", "Noé", "Jade", "Hugo", "Lina", "Sacha", "Zoé", "Malo"];
function fabProblemes(){
  var b = [], p = piocher(PRENOMS, 6), a, c, d;

  a = alea(24, 58); c = alea(13, 35);
  b.push(qNombre(p[0] + " a " + a + " images. " + p[1] + " lui en donne " + c + ". Combien d'images a " + p[0] + " maintenant ?", a + c,
    "On lui en donne : il y en a plus. C'est une addition."));
  a = alea(45, 90); c = alea(12, 38);
  b.push(qNombre("Dans le bus, il y a " + a + " personnes. " + c + " descendent. Combien en reste-t-il ?", a - c,
    "Des personnes s'en vont : c'est une soustraction."));
  a = alea(18, 40); c = alea(6, 15);
  b.push(qNombre(p[2] + " a " + a + " billes. " + p[3] + " en a " + c + " de plus. Combien de billes a " + p[3] + " ?", a + c,
    "« De plus » : " + p[3] + " en a davantage, on ajoute."));
  a = alea(30, 60); c = alea(8, 20);
  b.push(qNombre(p[4] + " a " + a + " ans. " + p[5] + " a " + c + " ans de moins. Quel âge a " + p[5] + " ?", a - c,
    "« De moins » : on enlève."));
  a = alea(25, 48); c = a + alea(12, 40);
  b.push(qNombre("Un livre a " + c + " pages. " + p[0] + " en a déjà lu " + a + ". Combien de pages reste-t-il à lire ?", c - a,
    "On cherche ce qui manque : " + c + " − " + a + "."));
  a = alea(3, 6); c = alea(4, 9);
  b.push(qNombre("Il y a " + a + " rangées de " + c + " chaises. Combien de chaises en tout ?", a * c,
    "Des rangées toutes pareilles : " + a + " × " + c + "."));
  a = alea(2, 5); c = alea(3, 7);
  b.push(qNombre(p[1] + " range " + (a * c) + " œufs dans des boîtes de " + a + ". Combien de boîtes faut-il ?", c,
    "Combien de fois " + a + " dans " + (a * c) + " ?"));
  a = alea(3, 9); c = alea(2, 5);
  b.push(qNombre("Une sucette coûte " + c + " €. Combien coûtent " + a + " sucettes ?", a * c,
    a + " fois le même prix : " + a + " × " + c + "."));
  a = alea(12, 25); c = alea(5, 11); d = alea(3, 9);
  b.push(qNombre(p[2] + " a " + a + " €. On lui donne " + c + " €, puis on dépense " + d + " €. Combien reste-t-il ?", a + c - d,
    "Deux étapes : d'abord " + a + " + " + c + ", puis enlève " + d + "."));
  a = alea(3, 8) * 10; c = alea(2, 6) * 10;
  b.push(qNombre("Le matin, " + p[3] + " marche " + a + " mètres. L'après-midi, " + c + " mètres. Combien de mètres en tout ?", a + c,
    "En tout : on réunit les deux distances."));
  a = alea(11, 19);
  b.push(qNombre("Une classe a " + (a * 2) + " élèves. La moitié sont des filles. Combien y a-t-il de filles ?", a,
    "La moitié : partage en deux parts égales."));
  a = alea(25, 45); c = 50;
  b.push(qNombre(p[4] + " paie avec un billet de 50 € un jeu qui coûte " + a + " €. Combien lui rend-on ?", c - a,
    "On rend la différence : 50 − " + a + "."));

  b.push(qc("« " + p[5] + " avait 30 billes et en perd 8. » Quelle opération faut-il faire ?", "30 − 8", ["30 + 8", "30 × 8"],
    "Perdre, c'est en avoir moins.", { gros: true }));
  b.push(qc("« 4 sachets de 6 bonbons. » Quelle opération faut-il faire ?", "4 × 6", ["4 + 6", "6 − 4"],
    "Des sachets tous pareils : une multiplication.", { gros: true }));
  b.push(qc("Dans un problème, que faut-il lire en premier pour savoir quoi chercher ?", "la question", ["le plus grand nombre", "le titre"],
    "La question dit ce que l'on cherche."));
  return b;
}

/* =========================================================
   FICHE — Longueurs et masses
   ========================================================= */
function fabLongueurs(){
  var b = [], a, c;

  a = alea(3, 9);
  b.push(qNombre("Combien de centimètres mesure le trait rouge ?", a, "Le trait commence à 0. Lis le nombre sous son autre bout.", { fig: svgRegle(a) }));

  b.push(qNombre("1 mètre = ? centimètres", 100, "Une grande règle de 1 mètre contient 100 centimètres."));
  b.push(qNombre("1 kilomètre = ? mètres", 1000, "Kilo veut dire mille."));
  b.push(qNombre("1 kilogramme = ? grammes", 1000, "Kilo veut dire mille."));
  a = alea(1, 4); c = alea(12, 85);
  b.push(qNombre(a + " m et " + c + " cm = ? cm", a * 100 + c, a + " m, c'est " + (a * 100) + " cm. Ajoute ensuite " + c + "."));
  a = alea(2, 8);
  b.push(qNombre(a + " m = ? cm", a * 100, "Chaque mètre vaut 100 cm."));
  a = alea(2, 7);
  b.push(qNombre(a + " kg = ? g", a * 1000, "Chaque kilogramme vaut 1 000 g."));

  b.push(qc("La longueur d'une trousse, c'est à peu près...", "20 cm", ["2 cm", "2 m"], "2 cm, c'est la largeur d'un doigt. 2 m, c'est la hauteur d'une porte.", { gros: true }));
  b.push(qc("La hauteur d'une porte, c'est à peu près...", "2 m", ["2 cm", "20 m", "2 km"], "Un adulte passe sous la porte sans se baisser.", { gros: true }));
  b.push(qc("La distance entre deux villes se mesure en...", "kilomètres", ["centimètres", "grammes", "mètres"], "C'est une très grande longueur."));
  b.push(qc("La masse d'un paquet de sucre, c'est...", "1 kg", ["1 g", "100 kg"], "1 g, c'est très léger, comme un trombone.", { gros: true }));
  b.push(qc("Pour peser une lettre, on utilise...", "le gramme", ["le kilogramme", "le mètre", "le litre"], "Une lettre est très légère."));
  b.push(qc("Pour mesurer une masse, on utilise...", "une balance", ["une règle", "une horloge", "un thermomètre"], "La règle mesure les longueurs, l'horloge le temps."));

  a = alea(2, 6); c = alea(2, 8) * 100;
  b.push(qc("Quel est le plus lourd ?", (a + 1) + " kg", [a + " kg et " + c + " g", (a * 1000) + " g"],
    "Change tout en grammes : 1 kg = 1 000 g.", { consigne: "Touche le plus lourd." }));
  a = alea(2, 8);
  b.push(qc("Quel est le plus long ?", a + " m", [(a * 10) + " cm", a + " cm"], a + " m, c'est " + (a * 100) + " cm.", { consigne: "Touche le plus long.", gros: true }));
  b.push(vf("Sur une balance à plateaux, le plateau le plus lourd descend.", true, "L'objet le plus lourd fait pencher la balance de son côté."));
  return b;
}

/* =========================================================
   FICHE — La monnaie
   ========================================================= */
function euros(c){
  var e = Math.floor(c / 100), r = c % 100;
  return e + "," + (r < 10 ? "0" : "") + r + " €";
}
function fabMonnaie(){
  var b = [], t, s, a, c, prix;

  t = piocher([200, 200, 100, 100, 100], alea(2, 4));
  s = t.reduce(function(x, y){ return x + y; }, 0);
  b.push(qNombre("Combien d'euros y a-t-il ?", s / 100, "Ajoute la valeur des pièces, pas leur nombre.", { fig: svgMonnaie(t) }));

  t = [un([1000, 2000]), 500, 200, 100];
  s = t.reduce(function(x, y){ return x + y; }, 0);
  b.push(qNombre("Combien d'euros y a-t-il ?", s / 100, "Commence par le billet le plus grand.", { fig: svgMonnaie(t) }));

  t = piocher([50, 20, 20, 10, 10, 5], alea(3, 4));
  s = t.reduce(function(x, y){ return x + y; }, 0);
  b.push(qNombre("Combien de centimes y a-t-il ?", s, "Ajoute d'abord les plus grosses pièces.", { fig: svgMonnaie(t) }));

  b.push(qNombre("1 euro = ? centimes", 100, "Il faut 100 pièces de 1 centime pour faire 1 euro."));
  a = alea(2, 9);
  b.push(qNombre(a + " € = ? centimes", a * 100, "Chaque euro vaut 100 centimes."));
  a = alea(2, 6); c = alea(11, 95);
  b.push(qc((a * 100 + c) + " centimes, c'est...", a + " € et " + c + " c", [c + " € et " + a + " c", (a + 1) + " € et " + c + " c"],
    (a * 100) + " centimes font " + a + " €."));

  a = alea(2, 8); c = alea(12, 95);
  b.push(qc(a + " € et " + c + " centimes s'écrit...", euros(a * 100 + c), [euros(c * 100 + a), (a + c) + " €", euros(a * 100 + c + 100)],
    "Avant la virgule les euros, après la virgule les centimes.", { gros: true }));
  a = alea(2, 8); c = alea(2, 9);
  b.push(qc(a + " € et " + c + " centimes s'écrit...", euros(a * 100 + c), [euros(a * 100 + c * 10), a + "," + c + " €"],
    "Il faut toujours deux chiffres après la virgule : " + c + " centimes s'écrit 0" + c + ".", { gros: true }));
  a = alea(2, 8);
  b.push(qc(a + " € et 50 centimes s'écrit...", euros(a * 100 + 50), [euros(a * 100 + 5), euros(5000 + a)], "50 centimes : deux chiffres après la virgule.", { gros: true }));

  prix = alea(3, 9);
  b.push(qNombre("Tu achètes un livre à " + prix + " € avec un billet de 10 €. Combien te rend-on ?", 10 - prix, "On rend ce qui manque pour aller de " + prix + " à 10."));
  prix = alea(11, 19);
  b.push(qNombre("Tu achètes un jeu à " + prix + " € avec un billet de 20 €. Combien te rend-on ?", 20 - prix, "20 − " + prix + "."));
  prix = alea(3, 8) * 10;
  b.push(qNombre("Un pain coûte " + prix + " centimes. Tu donnes 1 €. Combien de centimes te rend-on ?", 100 - prix, "1 € = 100 centimes. 100 − " + prix + "."));

  b.push(qc("Qu'est-ce qui vaut le plus ?", "3 pièces de 2 €", ["5 pièces de 1 €", "50 pièces de 10 centimes"],
    "Calcule chaque somme : ce n'est pas le nombre de pièces qui compte.", { consigne: "Touche la plus grande somme." }));
  b.push(qc("Qu'est-ce qui vaut le plus ?", "12 €", ["60 centimes", "99 centimes"], "Un seul euro vaut déjà plus que 99 centimes.", { consigne: "Touche la plus grande somme.", gros: true }));
  b.push(qNombre("Combien de pièces de 50 centimes faut-il pour faire 2 € ?", 4, "Deux pièces de 50 centimes font 1 €."));
  b.push(qNombre("Combien de billets de 10 € faut-il pour faire 100 € ?", 10, "10, 20, 30... jusqu'à 100."));
  return b;
}

/* =========================================================
   FICHE — Les solides
   ========================================================= */
function fabSolides(){
  var b = [], cles = ["cube", "pave", "pyramide", "boule", "cylindre", "cone"], k, autres;
  var coul = ["var(--geo)", "var(--mes)", "var(--cal)", "var(--leaf)"];

  piocher(cles, 3).forEach(function(k){
    autres = piocher(cles.filter(function(x){ return x !== k; }), 3).map(function(x){ return SOLIDES[x].nom; });
    b.push(qc("Comment s'appelle ce solide ?", SOLIDES[k].nom, autres, "Regarde ses faces : sont-elles plates ou arrondies ?", { fig: svgSolide(k, un(coul)) }));
  });
  piocher(cles, 2).forEach(function(k){
    autres = piocher(cles.filter(function(x){ return x !== k; }), 2);
    b.push(qChoix("Touche " + SOLIDES[k].nom.replace(/^une? /, function(m){ return m === "un " ? "le " : "la "; }) + ".", [
      { h: svgSolide(k, "var(--geo)"), ok: true }, { h: svgSolide(autres[0], "var(--mes)"), ok: false }, { h: svgSolide(autres[1], "var(--cal)"), ok: false }
    ], "Pense à un objet qui a cette forme.", { consigne: "Touche le bon solide." }));
  });

  b.push(qNombre("Combien de faces a un cube ?", 6, "Pense à un dé : il a 6 faces, de 1 à 6.", { fig: svgSolide("cube") }));
  b.push(qNombre("Combien de sommets a un cube ?", 8, "4 coins en haut et 4 coins en bas.", { fig: svgSolide("cube", "var(--mes)") }));
  b.push(qNombre("Combien d'arêtes a un cube ?", 12, "4 arêtes en haut, 4 en bas et 4 debout.", { fig: svgSolide("cube", "var(--cal)") }));
  b.push(qNombre("Combien de faces a un pavé ?", 6, "Comme une boîte à chaussures : dessus, dessous et 4 côtés.", { fig: svgSolide("pave") }));
  b.push(qc("Les faces d'un cube sont des...", "carrés", ["rectangles", "triangles", "disques"], "Toutes les faces du cube sont pareilles."));
  b.push(qc("Sur une pyramide, les faces qui montent vers la pointe sont des...", "triangles", ["carrés", "rectangles", "disques"], "Elles se rejoignent toutes au sommet.", { fig: svgSolide("pyramide", "var(--cal)") }));
  b.push(qc("Une boîte de conserve a la forme...", "d'un cylindre", ["d'un cube", "d'un cône", "d'une boule"], "Deux disques et un côté arrondi."));
  b.push(qc("Une balle de tennis a la forme...", "d'une boule", ["d'un cylindre", "d'un cube", "d'un pavé"], "Elle roule dans tous les sens."));
  b.push(qc("Une boîte à chaussures a la forme...", "d'un pavé", ["d'un cube", "d'une pyramide", "d'un cylindre"], "Ses faces sont des rectangles."));
  b.push(qc("Un cornet de glace a la forme...", "d'un cône", ["d'un cylindre", "d'une pyramide", "d'une boule"], "Une pointe en bas et un rond en haut."));
  b.push(qc("Quel solide peut rouler ?", "le cylindre", ["le cube", "le pavé", "la pyramide"], "Il faut une surface arrondie pour rouler."));
  b.push(qc("Le trait où deux faces se rejoignent s'appelle...", "une arête", ["un sommet", "une face", "un côté"], "Le sommet est un coin, la face est une surface plate."));
  return b;
}

/* =========================================================
   FICHE — Se repérer et tracer
   ========================================================= */
function fabReperer(){
  var b = [], c, l, c2, l2, pas;

  c = alea(0, 4); l = alea(0, 3);
  b.push(qc("Dans quelle case est l'étoile ?", LETTRES_GRILLE[c] + (l + 1),
    [LETTRES_GRILLE[(c + 1) % 5] + (l + 1), LETTRES_GRILLE[c] + ((l + 1) % 4 + 1), LETTRES_GRILLE[(c + 2) % 5] + ((l + 2) % 4 + 1)],
    "Lis d'abord la lettre de la colonne, puis le nombre de la ligne.", { fig: svgQuadrillage([{ c: c, l: l, s: "★" }]), gros: true }));

  c = alea(0, 2); l = alea(0, 3); pas = alea(1, 2);
  b.push(qc("Le rond avance de " + pas + " case" + (pas > 1 ? "s" : "") + " vers la droite. Où arrive-t-il ?", LETTRES_GRILLE[c + pas] + (l + 1),
    [LETTRES_GRILLE[c] + (l + 1), LETTRES_GRILLE[c + pas === 4 ? 0 : c + pas + 1] + (l + 1), LETTRES_GRILLE[c + pas] + ((l + 1) % 4 + 1)],
    "Vers la droite : la lettre change, le nombre reste le même.", { fig: svgQuadrillage([{ c: c, l: l, s: "●", coul: "var(--coral)" }]), gros: true }));

  c = alea(0, 4); l = alea(0, 1); pas = alea(1, 2);
  b.push(qc("Le rond descend de " + pas + " case" + (pas > 1 ? "s" : "") + ". Où arrive-t-il ?", LETTRES_GRILLE[c] + (l + pas + 1),
    [LETTRES_GRILLE[c] + (l + 1), LETTRES_GRILLE[(c + 1) % 5] + (l + pas + 1), LETTRES_GRILLE[c] + ((l + pas + 1) % 4 + 1)],
    "Vers le bas : le nombre grandit, la lettre reste la même.", { fig: svgQuadrillage([{ c: c, l: l, s: "●", coul: "var(--coral)" }]), gros: true }));

  c = alea(0, 1); l = alea(0, 3); c2 = alea(3, 4); l2 = (l + 2) % 4;
  b.push(qc("Quel dessin est le plus à gauche ?", "l'étoile", ["le cœur"], "La gauche, c'est du côté de la lettre A.",
    { fig: svgQuadrillage([{ c: c, l: l, s: "★" }, { c: c2, l: l2, s: "♥", coul: "var(--coral)" }]), gros: true }));

  b.push(qChoix("Touche l'angle droit.", [
    { h: svgAngle(90), ok: true }, { h: svgAngle(40), ok: false }, { h: svgAngle(130), ok: false }
  ], "L'angle droit est comme le coin d'une feuille. On le code avec un petit carré.", { consigne: "Touche le bon angle." }));
  b.push(qChoix("Touche l'angle aigu.", [
    { h: svgAngle(35), ok: true }, { h: svgAngle(90), ok: false }, { h: svgAngle(140), ok: false }
  ], "Un angle aigu est plus petit, plus pointu qu'un angle droit.", { consigne: "Touche le bon angle." }));
  b.push(qChoix("Touche l'angle obtus.", [
    { h: svgAngle(135), ok: true }, { h: svgAngle(90), ok: false }, { h: svgAngle(45), ok: false }
  ], "Un angle obtus est plus ouvert qu'un angle droit.", { consigne: "Touche le bon angle." }));

  b.push(qChoix("Où les points A, B et C sont-ils alignés ?", [
    { h: svgPoints(true), ok: true }, { h: svgPoints(false), ok: false }
  ], "Des points alignés sont sur une même ligne droite : on peut poser la règle dessus.", { consigne: "Touche le bon dessin." }));

  b.push(qc("Pour vérifier qu'un angle est droit, on utilise...", "l'équerre", ["le compas", "la gomme", "la balance"], "L'équerre a un coin en angle droit."));
  b.push(qc("Pour tracer un cercle, on utilise...", "le compas", ["l'équerre", "la règle", "le crayon seul"], "On pique la pointe au centre et on fait tourner la mine."));
  b.push(qc("Pour vérifier que des points sont alignés, on utilise...", "la règle", ["le compas", "la balance", "l'horloge"], "Si la règle touche tous les points, ils sont alignés."));
  b.push(qc("Un trait droit entre deux points s'appelle...", "un segment", ["un cercle", "un angle", "un sommet"], "Le segment a deux bouts, ce sont ses extrémités."));
  b.push(qc("Le point qui est juste à la moitié d'un segment s'appelle...", "le milieu", ["le centre", "le sommet", "le coin"], "Il partage le segment en deux parties de même longueur."));
  b.push(qc("Le point où l'on pique le compas pour tracer un cercle s'appelle...", "le centre", ["le milieu", "le sommet", "le côté"], "Tous les points du cercle sont à la même distance de lui."));
  b.push(qNombre("Combien d'angles droits a un carré ?", 4, "Chacun de ses 4 coins est un angle droit."));
  b.push(vf("Dans la consigne « avance de 2 cases puis tourne à droite », l'ordre des actions est important.", true, "Si on change l'ordre, on n'arrive pas au même endroit."));
  return b;
}

/* =========================================================
   FICHE — Tableaux et diagrammes
   ========================================================= */
function fabDonnees(){
  var b = [], jeux = [
    { quoi:"le fruit préféré des élèves", noms:["pomme", "fraise", "banane", "raisin"], unite:"élèves" },
    { quoi:"l'animal préféré des élèves", noms:["chat", "chien", "lapin", "cheval"], unite:"élèves" },
    { quoi:"le sport préféré des élèves", noms:["foot", "danse", "judo", "natation"], unite:"élèves" },
    { quoi:"les livres lus cette semaine", noms:["Lina", "Tom", "Jade", "Noé"], unite:"livres" }
  ];
  function serie(){
    var j = un(jeux), v = piocher([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
    return { j: j, v: v, fig: svgBarres(j.noms, v) };
  }
  var s, i, k, max, min;

  s = serie(); i = alea(0, 3);
  b.push(qNombre("Ce diagramme montre " + s.j.quoi + ". Combien pour « " + s.j.noms[i] + " » ?", s.v[i],
    "Suis le haut de la barre jusqu'aux nombres à gauche.", { fig: s.fig }));
  s = serie(); max = s.v.indexOf(Math.max.apply(null, s.v));
  b.push(qc("Quelle barre est la plus haute ?", s.j.noms[max], s.j.noms, "La plus haute barre montre le plus grand nombre.", { fig: s.fig }));
  s = serie(); min = s.v.indexOf(Math.min.apply(null, s.v));
  b.push(qc("Quelle barre est la plus petite ?", s.j.noms[min], s.j.noms, "La plus petite barre montre le plus petit nombre.", { fig: s.fig }));
  s = serie(); i = alea(0, 1); k = alea(2, 3);
  b.push(qNombre("Combien en tout pour « " + s.j.noms[i] + " » et « " + s.j.noms[k] + " » ?", s.v[i] + s.v[k],
    "Lis les deux barres, puis ajoute : " + s.v[i] + " + " + s.v[k] + ".", { fig: s.fig }));
  s = serie(); max = Math.max.apply(null, s.v); min = Math.min.apply(null, s.v);
  b.push(qNombre("Quelle est la différence entre la plus haute barre et la plus petite ?", max - min,
    "La plus haute vaut " + max + ", la plus petite vaut " + min + ".", { fig: s.fig }));
  s = serie();
  b.push(qNombre("Combien cela fait-il en tout, toutes barres réunies ?", s.v[0] + s.v[1] + s.v[2] + s.v[3],
    "Ajoute les quatre barres : " + s.v.join(" + ") + ".", { fig: s.fig }));

  function tableau(){
    var l = ["À pied", "À vélo", "En bus"], f = [alea(3, 9), alea(2, 8), alea(1, 9)], g = [alea(2, 9), alea(3, 8), alea(1, 7)];
    var h = '<table class="tab2"><tr><th></th><th>Filles</th><th>Garçons</th></tr>', r;
    for (r = 0; r < 3; r++) h += '<tr><th>' + l[r] + '</th><td>' + f[r] + '</td><td>' + g[r] + '</td></tr>';
    return { l: l, f: f, g: g, fig: h + '</table>' };
  }
  var t;
  t = tableau(); i = alea(0, 2);
  b.push(qNombre("Combien de filles viennent à l'école " + t.l[i].toLowerCase() + " ?", t.f[i],
    "Cherche la ligne « " + t.l[i] + " » et la colonne « Filles ».", { fig: t.fig }));
  t = tableau(); i = alea(0, 2);
  b.push(qNombre("Combien de garçons viennent à l'école " + t.l[i].toLowerCase() + " ?", t.g[i],
    "Cherche la ligne « " + t.l[i] + " » et la colonne « Garçons ».", { fig: t.fig }));
  t = tableau(); i = alea(0, 2);
  b.push(qNombre("Combien d'enfants en tout viennent " + t.l[i].toLowerCase() + " ?", t.f[i] + t.g[i],
    "Ajoute les filles et les garçons de la même ligne.", { fig: t.fig }));
  t = tableau();
  b.push(qNombre("Combien de filles y a-t-il en tout ?", t.f[0] + t.f[1] + t.f[2],
    "Ajoute tous les nombres de la colonne « Filles ».", { fig: t.fig }));

  b.push(qc("Dans un tableau, les cases rangées de gauche à droite forment...", "une ligne", ["une colonne", "une barre"], "La colonne, elle, se lit de haut en bas."));
  b.push(qc("Dans un diagramme en barres, que montre une barre plus haute ?", "un nombre plus grand", ["un nombre plus petit", "une couleur préférée"], "Plus la barre monte, plus le nombre est grand."));
  return b;
}

/* ---------- Enregistrement des fiches de mathématiques ---------- */
ajouterFiche({ id:"nombres", groupe:"nombres", classe:"cal", sign:"123", titre:"Les nombres jusqu'à 1 000", matiere:"Nombres et calculs",
  detail:"Centaines, dizaines, unités, lire et écrire", fab:fabNombres,
  lecon:[
    ["Pour compter beaucoup d'objets, on fait des paquets. Dix unités font une dizaine.",
      V(figs(svgBlocs(0, 0, 9)), "10 unités = " + hl("1 dizaine", "b"), figs(svgBlocs(0, 1, 0)))],
    ["Dix dizaines font une centaine. Une centaine, c'est cent.",
      V(figs(svgBlocs(0, 9, 0)), "10 dizaines = " + hl("1 centaine", "g"), figs(svgBlocs(1, 0, 0)))],
    ["Regarde ce nombre : deux centaines, trois dizaines et cinq unités. C'est deux-cent-trente-cinq.",
      V(figs(svgBlocs(2, 3, 5)), hl("2", "g") + hl("3", "b") + hl("5", "o"), "200 + 30 + 5")],
    ["La place du chiffre est très importante. À gauche les centaines, au milieu les dizaines, à droite les unités.",
      V(hl("2", "g") + " centaines", hl("3", "b") + " dizaines", hl("5", "o") + " unités")]
  ] });
ajouterFiche({ id:"comparer", groupe:"nombres", classe:"cal", sign:"<", titre:"Comparer et ranger", matiere:"Nombres et calculs",
  detail:"Plus petit, plus grand, encadrer, ordonner", fab:fabComparer,
  lecon:[
    ["Pour comparer deux nombres, on regarde d'abord les centaines. Celui qui en a le plus est le plus grand.",
      V(hl("4", "g") + "52 &nbsp; et &nbsp; " + hl("3", "g") + "87", "4 centaines, c'est plus que 3", "452 " + hl("&gt;") + " 387")],
    ["Si les centaines sont pareilles, on compare les dizaines. Puis les unités.",
      V("3" + hl("4", "b") + "8 &nbsp; et &nbsp; 3" + hl("7", "b") + "1", "4 dizaines, c'est moins que 7", "348 " + hl("&lt;") + " 371")],
    ["Le signe ressemble à une bouche de crocodile. Elle s'ouvre toujours vers le plus grand nombre.",
      V("12 " + hl("&lt;") + " 50", "80 " + hl("&gt;") + " 25", petit("la bouche s'ouvre vers le plus grand"))],
    ["Ranger dans l'ordre croissant, c'est aller du plus petit au plus grand, comme on monte un escalier.",
      V("229 &lt; 234 &lt; 300", hl("ordre croissant", "v"))]
  ] });
ajouterFiche({ id:"fractions", groupe:"nombres", classe:"cal", sign:"½", titre:"Les fractions", matiere:"Nombres et calculs",
  detail:"Demi, tiers, quart, comparer, ajouter", fab:fabFractions,
  lecon:[
    ["Voici une galette entière. On la partage en quatre parts égales.",
      V(figs(svgFraction(0, 1 + 3)), "4 parts " + hl("égales"))],
    ["Je prends une part sur les quatre. C'est un quart de la galette.",
      V(figs(svgFraction(1, 4)), frac(1, 4) + " &nbsp; " + hl("un quart"))],
    ["Le nombre du bas, le dénominateur, dit en combien de parts on a partagé. Le nombre du haut, le numérateur, dit combien de parts on prend.",
      V(figs(svgFraction(3, 4)), frac(hl("3", "o"), hl("4", "b")), petit(hl("3", "o") + " parts prises sur " + hl("4", "b")))],
    ["Attention ! Plus on partage en beaucoup de parts, plus chaque part est petite. Un huitième est plus petit qu'un demi.",
      V(figs(svgFraction(1, 2), svgFraction(1, 8)), frac(1, 2) + " &gt; " + frac(1, 8))],
    ["Quand on prend toutes les parts, on a le tout. Quatre quarts, c'est un.",
      V(figs(svgFraction(4, 4)), frac(4, 4) + " = " + hl("1", "v"))]
  ] });
ajouterFiche({ id:"posees", groupe:"nombres", classe:"cal", sign:"±", titre:"Additions et soustractions posées", matiere:"Nombres et calculs",
  detail:"Calculer en colonnes, avec ou sans retenue", fab:fabPosees,
  lecon:[
    ["Pour poser une opération, on aligne bien les chiffres. Les unités sous les unités, les dizaines sous les dizaines.",
      V(posee(245, 37, "+"), petit("unités sous unités"))],
    ["On commence toujours par la droite, par la colonne des unités.",
      V("5 + 7 = " + hl("12"), "J'écris " + hl("2", "o") + ", je retiens " + hl("1", "b"))],
    ["La retenue, c'est une dizaine en plus. On l'ajoute dans la colonne des dizaines.",
      V(hl("1", "b") + " + 4 + 3 = " + hl("8"), "245 + 37 = " + hl("282", "v"))],
    ["Pour une soustraction, s'il manque des unités, on casse une dizaine pour en faire dix unités.",
      V("52 − 17", "2 − 7 ? Impossible", "5 dizaines → 4 dizaines et " + hl("12 unités"), "= " + hl("35", "v"))]
  ] });
ajouterFiche({ id:"multiplier", groupe:"nombres", classe:"cal", sign:"×", titre:"Multiplier et partager", matiere:"Nombres et calculs",
  detail:"Tables, doubles, moitiés, pair et impair", fab:fabMultiplier,
  lecon:[
    ["Quand on ajoute plusieurs fois le même nombre, on peut écrire une multiplication.",
      V("4 + 4 + 4", "3 fois le nombre 4", hl("3 × 4") + " = 12")],
    ["On peut échanger les deux nombres. Trois fois quatre et quatre fois trois donnent le même résultat.",
      V("3 × 4 = " + hl("12"), "4 × 3 = " + hl("12"))],
    ["Partager, c'est faire des parts égales. Douze bonbons pour trois enfants : chacun en a quatre.",
      V("12 bonbons, 3 enfants", "3 × ? = 12", "chacun en a " + hl("4", "v"))],
    ["Un nombre pair se partage en deux sans reste. Il se termine par zéro, deux, quatre, six ou huit.",
      V(hl("pairs", "b") + " : 0 2 4 6 8", hl("impairs", "o") + " : 1 3 5 7 9")]
  ] });
ajouterFiche({ id:"problemes", groupe:"nombres", classe:"cal", sign:"?", titre:"Les problèmes", matiere:"Nombres et calculs",
  detail:"Choisir la bonne opération", fab:fabProblemes,
  lecon:[
    ["Pour résoudre un problème, on lit l'histoire, puis on cherche la question : que veut-on savoir ?",
      V("1. Je lis l'histoire", "2. Je cherche " + hl("la question"), "3. Je choisis l'opération")],
    ["Quand on réunit, quand on gagne, quand on reçoit : c'est une addition.",
      V("gagner, recevoir, en tout", hl("+", "v"))],
    ["Quand on perd, quand on donne, quand on cherche ce qui reste : c'est une soustraction.",
      V("perdre, donner, il reste", hl("−", "o"))],
    ["Quand il y a plusieurs paquets tous pareils : c'est une multiplication.",
      V("4 paquets de 6", hl("4 × 6", "b"))]
  ] });
ajouterFiche({ id:"longueurs", groupe:"mesures", classe:"mes", sign:"cm", titre:"Longueurs et masses", matiere:"Grandeurs et mesures",
  detail:"Centimètre, mètre, kilomètre, gramme, kilogramme", fab:fabLongueurs,
  lecon:[
    ["Pour mesurer une longueur, on pose le zéro de la règle au début du trait. On lit le nombre à l'autre bout.",
      V(figs(svgRegle(6)), "Le trait mesure " + hl("6 cm") + ".")],
    ["Le centimètre sert pour les petits objets. Le mètre pour une pièce ou une cour. Le kilomètre pour les grandes distances.",
      V(hl("cm", "o") + " un crayon", hl("m", "b") + " une cour", hl("km", "g") + " entre deux villes")],
    ["Un mètre, c'est cent centimètres. Un kilomètre, c'est mille mètres.",
      V("1 m = " + hl("100 cm"), "1 km = " + hl("1 000 m", "b"))],
    ["La masse se mesure avec une balance, en grammes ou en kilogrammes. Un kilogramme, c'est mille grammes.",
      V("1 kg = " + hl("1 000 g"), petit("un paquet de sucre pèse 1 kg"))]
  ] });
ajouterFiche({ id:"monnaie", groupe:"mesures", classe:"mes", sign:"€", titre:"La monnaie", matiere:"Grandeurs et mesures",
  detail:"Euros, centimes, écriture à virgule, rendre la monnaie", fab:fabMonnaie,
  lecon:[
    ["Voici des pièces et des billets. Ce qui compte, ce n'est pas leur nombre, c'est leur valeur.",
      V(figs(svgMonnaie([1000, 200, 100, 50])), petit("10 € + 2 € + 1 € + 50 c"))],
    ["Un euro vaut cent centimes. Deux pièces de cinquante centimes font un euro.",
      V(figs(svgMonnaie([50, 50])), "= " + hl("1 €"), "1 € = 100 centimes")],
    ["On écrit les sommes avec une virgule. Avant la virgule les euros, après la virgule les centimes.",
      V(hl("2", "b") + "," + hl("50", "o") + " €", hl("2 euros", "b") + " et " + hl("50 centimes", "o"))],
    ["Attention : deux euros et cinq centimes s'écrit deux virgule zéro cinq. Il faut toujours deux chiffres après la virgule.",
      V("2 € et 5 c = " + hl("2,05 €"), "2 € et 50 c = " + hl("2,50 €", "b"))]
  ] });
ajouterFiche({ id:"solides", groupe:"espace", classe:"geo", sign:"⬢", titre:"Les solides", matiere:"Espace et géométrie",
  detail:"Cube, pavé, pyramide, boule, cylindre, cône", fab:fabSolides,
  lecon:[
    ["Un solide est un objet en volume : on peut le tenir dans la main. Voici le cube et le pavé.",
      V(figs(svgSolide("cube"), svgSolide("pave", "var(--mes)")), "le cube &nbsp; le pavé")],
    ["Une face est une surface plate. Une arête est le trait entre deux faces. Un sommet est un coin.",
      V(figs(svgSolide("cube", "var(--cal)")), hl("6 faces") + " " + hl("12 arêtes", "b") + " " + hl("8 sommets", "v"))],
    ["Voici la pyramide, avec sa pointe, et trois solides qui peuvent rouler : la boule, le cylindre et le cône.",
      V(figs(svgSolide("pyramide", "var(--cal)"), svgSolide("boule", "var(--leaf)")), figs(svgSolide("cylindre", "var(--mes)"), svgSolide("cone")))],
    ["Cherche autour de toi : un dé est un cube, une boîte de conserve est un cylindre, un ballon est une boule.",
      V("un dé → " + hl("cube"), "une conserve → " + hl("cylindre", "b"), "un ballon → " + hl("boule", "v"))]
  ] });
ajouterFiche({ id:"reperer", groupe:"espace", classe:"geo", sign:"∟", titre:"Se repérer et tracer", matiere:"Espace et géométrie",
  detail:"Quadrillage, angle droit, alignement, instruments", fab:fabReperer,
  lecon:[
    ["Sur un quadrillage, chaque case a un nom : la lettre de sa colonne, puis le nombre de sa ligne.",
      V(figs(svgQuadrillage([{ c: 2, l: 1, s: "★" }])), "L'étoile est en " + hl("C2") + ".")],
    ["L'angle droit ressemble au coin d'une feuille. On le marque avec un petit carré, et on le vérifie avec l'équerre.",
      V(figs(svgAngle(90)), "l'" + hl("angle droit"))],
    ["Un angle plus fermé que l'angle droit est aigu. Un angle plus ouvert est obtus.",
      V(figs(svgAngle(40), svgAngle(135)), "aigu &nbsp;&nbsp; obtus")],
    ["Des points alignés sont sur une même ligne droite. On le vérifie avec la règle.",
      V(figs(svgPoints(true)), "A, B et C sont " + hl("alignés", "v") + ".")],
    ["La règle sert à tracer des traits droits, l'équerre des angles droits et le compas des cercles.",
      V("règle → traits droits", "équerre → angles droits", "compas → cercles")]
  ] });
ajouterFiche({ id:"donnees", groupe:"donnees", classe:"mes", sign:"▥", titre:"Tableaux et diagrammes", matiere:"Organisation de données",
  detail:"Lire un diagramme en barres et un tableau", fab:fabDonnees,
  lecon:[
    ["Un diagramme en barres permet de comparer des nombres d'un seul coup d'œil.",
      V(figs(svgBarres(["chat", "chien", "lapin"], [5, 7, 3])))],
    ["Pour lire une barre, on regarde jusqu'où elle monte, puis on lit le nombre sur le côté.",
      V(figs(svgBarres(["chat", "chien", "lapin"], [5, 7, 3])), "chien : " + hl("7"))],
    ["La barre la plus haute montre le plus grand nombre. La plus petite montre le plus petit.",
      V("la plus haute → le " + hl("plus"), "la plus petite → le " + hl("moins", "o"))],
    ["Dans un tableau, on croise une ligne et une colonne pour trouver la bonne case.",
      V('<table class="tab2"><tr><th></th><th>Filles</th><th>Garçons</th></tr><tr><th>À pied</th><td><b class="hl">7</b></td><td>5</td></tr><tr><th>À vélo</th><td>3</td><td>4</td></tr></table>', petit("ligne « À pied », colonne « Filles »"))]
  ] });
