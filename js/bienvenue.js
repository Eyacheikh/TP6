
/* Exercice 1 a
✓  affiche dans la console Bonjour depuis un fichier externe ! ;
✓  affiche l’alerte Bienvenue au Club Informatique !.

console.log("Bonjour depuis un fichier externe !");
alert("Bienvenue au Club Informatique !");
*/
/* Exercice1 b
✓  demander le prénom avec prompt et le ranger dans la constante prenom ;
 l’afficher dans la console, précédé de Prénom saisi : ;
✓  demander avec confirm « Voulez-vous vous inscrire à un atelier ? »,
 ranger la réponse dans inscription et l’afficher dans la console, 
 précédée de Réponse de confirm : ;
✓  terminer par l’alerte « À bientôt Ali ! », 
construite par concaténation avec le prénom saisi
*/
const prenom=prompt("Donnez le prénom");
console.log("Prénom saisi :",prenom);
const inscription=confirm("Voulez-vous vous inscrire à un atelier ?");
console.log(inscription);
alert("A bientôt "+prenom+"!");