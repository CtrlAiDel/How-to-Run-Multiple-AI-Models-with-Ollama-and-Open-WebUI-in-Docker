# Guide Complet pour l'Installation d'Ollama, Open Web-UI et Docker Desktop

Pour garantir une expérience fluide lors de la configuration de WSL, du déploiement de Docker et de l'utilisation d'Ollama pour la génération et l'analyse d'images par IA, il est essentiel de disposer d'un PC puissant. Des ressources système adéquates sont cruciales pour le bon fonctionnement et les performances optimales de ces tâches. Nous conseillons aux utilisateurs de vérifier que leurs systèmes sont bien équipés pour gérer ces processus efficacement avant de procéder aux étapes suivantes.

---

### **Activation de WSL et Configuration de Docker**

1. **Activer Windows Subsystem for Linux (WSL)** :
   - Ouvrez PowerShell en tant qu'Administrateur (`Win + S`, recherchez PowerShell, clic droit pour exécuter en tant qu'administrateur).
   - Exécutez : `wsl --install`.
   - Redémarrez votre ordinateur si nécessaire.

2. **Installer Docker Desktop** :
   - Téléchargez et installez Docker Desktop à partir du lien suivant : [Docker Desktop](https://www.docker.com/products/docker-desktop/).

3. **Vérifier Docker Desktop** :
   - Assurez-vous que Docker Desktop fonctionne correctement sur votre système.

---

### **Déploiement d'Ollama et d'Open Web-UI**

1. **Lancer PowerShell** :
   - Accédez en appuyant sur `Win + R`, en tapant `powershell`, puis en appuyant sur Entrée.

2. **Déployer Open Web-UI** :
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

3. **Démarrer Ollama** :
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

4. **Pause d'Initialisation** :
   - Accordez un court instant pour que les conteneurs Docker se mettent en place avant de continuer.

5. **Téléchargement et Exécution des LLM avec Ollama** :
   - Accédez à [Ollama Library](https://ollama.com/library) et choisissez le LLM désiré (ex. : llama2).
   - Cliquez sur "ollama run.." situé dans le coin supérieur droit pour copier la commande fournie.
   - Ouvrez cmd.exe et tapez "ubuntu" pour accéder à l'environnement Ubuntu.
   - Collez la commande copiée dans le terminal et exécutez-la pour télécharger le LLM.

---

### **Accéder et Utiliser Open Web-UI**

0. **Accès Local** :
   - Pour un accès local, naviguez vers `http://localhost:3000` dans votre navigateur web.

1. **Accès LLM en Ligne via le Port Forwarding** :
   - Ouvrez à la fois le port 3000 et le port 11434 en TCP pour l'UI et l'API respectivement.
   - Pour un accès à distance ou externe, utilisez `http://Votre IP:3000` après avoir ouvert les ports.

2. **Navigation dans Open Web-UI** :
   - Suivez les explications de l'étape 0 ou 1 selon votre méthode d'accès préférée.

3. **Découverte des Fichiers de Modèle** :
   - Pour initier l'analyse IA ou la création de contenu, allez dans le menu de gauche, choisissez "Modelfiles" et cliquez sur "Discover a Modelfile".
   - Visitez le lien des modèles locaux : [Models link in local](http://localhost:3000/modelfiles/).
   - Accédez à Open Web-UI à [Open Web-UI](https://openwebui.com/) pour télécharger de nouveaux modèles IA.
   - Sélectionnez un modèle désiré dans le menu déroulant en haut de la page principale, tel que "llava".
   - Téléchargez des images ou saisissez des commandes pour que l'IA analyse ou génère du contenu.

4. **Considération Importante pour le Partage de Votre Lien** :
   - Soyez prudent lorsque vous partagez votre lien, car cela expose votre adresse IP, ce qui pourrait poser des risques de sécurité. Un accès excessif par plusieurs utilisateurs peut surcharger les ressources de votre système, entraînant des problèmes de performance.

---

### **Fichiers Batch pour la Gestion des Modèles IA**

1. **Z - start.bat**  
   [Voir ou Télécharger](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20start.bat)  
   *Démarre l'environnement des modèles IA.*

2. **Z - close.bat**  
   [Voir ou Télécharger](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20close.bat)  
   *Éteint l'environnement des modèles IA.*

3. **Z - UpdatePullContainer.bat**  
   [Voir ou Télécharger](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UpdatePullContainer.bat)  
   *Télécharge les dernières mises à jour du conteneur Docker.*

4. **Z - UpdatePullLLM.bat**  
   [Voir ou Télécharger](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UpdatePullLLM.bat)  
   *Met à jour les modèles de langage IA installés. Supprime aussi les images dupliquées parfois inutilement*

5. **Z - UnloadEveryLLMtoemptyVRAM.bat**  
   [Voir ou Télécharger](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UnloadEveryLLMtoemptyVRAM.bat)  
   *Décharge tous les modèles de langage pour libérer de la VRAM.*

---

### **Réinstallation Manuelle d'Ollama et d'Open Web-UI**

Cette section peut ne pas être nécessaire avec les fichiers batch que vous pouvez télécharger.

- **Installation de l'Interface Ollama UI** :
   Ouvrez PowerShell et exécutez la commande pour configurer le conteneur d'Ollama Open Web-UI :
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

- **Installation d'Ollama** :
   Dans la même session PowerShell, déployez le conteneur Ollama avec :
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

---

### **Localiser les Fichiers de Modèle Ollama Localement**

- **Accéder aux Fichiers de Modèle** : Appuyez sur `Win + R`, tapez `\\wsl$\docker-desktop-data\data\docker\volumes`, puis appuyez sur Entrée pour ouvrir l'emplacement dans l'Explorateur de fichiers où les volumes Docker, y compris ceux pour Ollama, sont stockés.

---

### **Configuration Avancée pour Stable Diffusion**

Pour ceux qui souhaitent approfondir avec Stable Diffusion pour la génération d'images IA, notez que cela nécessite une configuration PC encore plus puissante. Les exigences en matière de calcul sont significativement plus élevées, nécessitant un processeur haute performance, une RAM ample et un GPU robuste. Un minimum de 12 Go de VRAM sur le GPU est recommandé.

Pour un guide complet sur la configuration de Stable Diffusion, référez-vous à ce lien : [YouTube Guide](https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D).

---

### **Omost Tool pour la Génération d'Images**

La vidéo présente "Omost", un nouvel outil qui combine des modèles de langage de grande taille et la génération d'images pour créer des images réalistes. Il génère des invites détaillées pour chaque sous-section de l'image en fonction de l'invite initiale, rendant le processus plus rapide. L'outil est facile à installer, fonctionne via une application Gradio ou localement avec une carte Nvidia, et offre des paramètres personnalisables. Les problèmes d'utilisation de la mémoire peuvent être atténués en activant le mode haute VRAM et en apportant de légères modifications au code. [YouTube Guide](https://www.youtube.com/watch?v=RKxrXkVpPoE).

---

### **Ressources et Crédits**

- **Documentation de l'API Ollama** : [Ollama API Documentation](https://github.com/ollama/oll

ama/blob/main/docs/api.md).
- **Documentation de l'Interface Utilisateur Open Web** : [Open WebUI Documentation](https://github.com/open-webui/open-webui).
- **Créateurs de Tutoriels** : We-Llama de CtrlAIdel, avec l'assistance de Subie (Développeur).
- **Chaîne YouTube de l'Auteur** : [CtrlAI Del](https://www.youtube.com/@ctrl_ai_del).
- **GitHub du Développeur** : [Subie1](https://github.com/Subie1).

---

Ce guide vise à consolider toutes les étapes nécessaires pour configurer efficacement **WSL, Docker, Ollama et Open Web-UI**, et naviguer dans diverses fonctionnalités. Il souligne l'importance d'un environnement informatique puissant pour une expérience fluide et productive dans l'exploitation des modèles IA pour la génération et l'analyse d'images.

**-We-Llama aka CtrlAiDel**

---

## Historique des Étoiles

[![Star History Chart](https://api.star-history.com/svg?repos=CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&type=Date)](https://star-history.com/#CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&Date)
