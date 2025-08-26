# React + Vite

# ✅ Application de Checklist en React

Ce projet est une petite application React permettant :
- d’ajouter des tâches,
- d’afficher la liste des tâches,
- de marquer une tâche comme terminée (avec case à cocher et raye la tache quand elle est effectuée).

---

## ⚙️ Installation et configuration de Node.js

1. Télécharger et installer **Node.js** depuis le site officiel : [https://nodejs.org].  

   - Lance l’installateur téléchargé.

   - Coche "Add to PATH" (ajouter à la variable d’environnement).

   - Termine l’installation avec les options par défaut.

- vérifier la version sur vscode : 

   > Vérifier l’installation dans le terminal:

   **pour node:**
   ```bash
   node -v

 => pour le projet la version node : 
    **node.js v22.15.0**

   **pour npm :**
- vérifier la version sur vscode : 
    ```bash
   npm -v

=> pour le projet :
    **npm v10.9.2**


Node.js est livré avec npm (gestionnaire de paquets), qui servira à installer les dépendances.

npm sert à avoir les lignes de commandes et toutes les dépendances que l'on aura besoin pour le projet

### Créer un projet REACT et vite

2.  **<ins>Commande pour créer un dossier vite + react (sitevite nom du dossier):</ins>**

  documentation vite : https://vite.dev/guide/

 - 1- Commencer par créer un dossier à l'endroit ou vous voulez votre application(Documents)
 - 2- Ouvrir VScode
 - 3- taper dans le terminal:

    ```bash
    npm create vite@latest + nom_du_site  -- --template react

=>npm create pour créer un nouveau dossier 
=>vite@latest pour la derniere version de vite

**Vite** : est un outil  de développement qui sert à automatiser le lancement du serveur à chaque changement dans un fichier ou un dossier pour éviter de relancer le serveur à chaque fois.

=> nom_du_site que l'on remplace par son propre projet 
=> -- --template react :pour les options de react,dit à Vite d’utiliser le modèle React.

   - 4- une fois le dossier créer,faire:
  ```bash
   cd monprojet
```
=> pour se mettre dans le bon dossier.

   - 5- lancer npm install pour qu'il intalle les dépendances
   ```bash
   npm install
   ```

   - 6- ensuite,il faut lancer le serveur pour voir l'application
   ```bash
   npm run dev
   ```

   -7- pour terminer,il suffit d'ouvrir le serveur en suivant le lien suivant:

    Local:   http://localhost:5173/


### Difficultées rencontrées et solutions adoptées
3. Difficultées rencontrées

   - manque de connaissances REACT
   - nouveau langage
   - création des composants et leur insertion dans le projet

4.  Solutions adoptées

   - documentation react : https://fr.react.dev/
   - aide de chatGPT 
   - parti d'un exemple de dossier déjà fait

### Auteur   

Marina STOLLESTEINER










