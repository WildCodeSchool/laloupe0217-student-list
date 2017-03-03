# Projet Fil Rouge - Student List

Le but ce se projet est de pouvoir experimenter progressivement les notions decouverte lors de ta formation à la Wild Code School.

## Comment faire ?

1. Faire un fork de ce repo en cliquant sur le bouton `Fork` en haut à gauche de cette page.
2. Cloner votre repo sur votre machine en utilisant `git clone [adresse de votre repo]`
3. Faire une nouvelle branche (depuis `master`) pour chaque étape en utilisant la commande `git checkout -b [nom de la branch]` Attention! ne jamais coder directement dans master.
4. Réaliser le travail demander à chaque étapes en commitant reguliérement.
5. Une fois que vous êtes satisfait de votre travail merger votre branche dans `master`

## Etapes

### Etapes 1 - 27 février - VanillaJS

1. Sur une branche autre que master, modifier ses informations dans `students.json`, puis pusher sa branche et faire une pullrequest sur le repo originale.
2. Aller verifier est merger les pullRequest des autres éléves.
3. Une fois que le fichier `students.json` est complété par tous les éléves mettre à jour son fork par rapport au repo original.
4. Lancer un server http en local en une commande de le terminal:

  - Dans le dossier courant de votre projet lancer la commande suivante

  ```
  python -m SimpleHTTPServer
  ```
  - Dans votre navigateur se rendre sur l'url `http://localhost:8000/` pour voir le rendu de votre projet
5. Ecrire dans le fichier `Student.js` un script qui permet d'afficher dans `index.html` la liste des éléves de `students.json`. La liste devra être ordonné par ordre alphabétique et retourner toutes les informations de chaques élèves.
6. Utiliser Bootstrap (ou autres framework CSS) pour rendre le tout plus sexy.

### Etapes 2 - Date à définir - Github API

*Consignes à venir* 
