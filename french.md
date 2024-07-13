## Guide complet pour l'installation d'Ollama, de l'interface web Open-AI et de Docker Desktop

Pour garantir une expérience fluide lors de la configuration de WSL, du déploiement de Docker et de l'utilisation d'Ollama pour la génération et l'analyse d'images basées sur l'IA, il est essentiel de travailler sur un PC puissant. Des ressources système adéquates sont cruciales pour le bon fonctionnement et les performances optimales de ces tâches. Nous conseillons aux utilisateurs de vérifier que leurs systèmes sont bien équipés pour gérer efficacement ces processus avant de suivre les étapes suivantes.

### **Activation de WSL et configuration de Docker**

1. **Activer le sous-système Windows pour Linux (WSL)**:
   - Ouvrir PowerShell en tant qu'administrateur (`Win + S`, rechercher PowerShell, clic droit pour exécuter en tant qu'administrateur).
   - Exécuter : `wsl --install`.
   - Redémarrer votre ordinateur si nécessaire.

2. **Installer Docker Desktop**:
   - Télécharger et installer Docker Desktop à partir du lien suivant : [Docker Desktop](https://www.docker.com/products/docker-desktop/).

3. **Vérifier Docker Desktop**:
   - S'assurer que Docker Desktop fonctionne correctement sur votre système.


### **Déploiement d'Ollama et de l'interface web Open**

1. **Lancer PowerShell**:
   - Accéder en appuyant sur `Win + R`, en tapant `powershell` et en appuyant sur Entrée.

2. **Déployer l'interface web Open**:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

3. **Démarrer Ollama**:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

4. **Pause d'initialisation**:
   - Accorder une courte période pour la configuration des conteneurs Docker avant de continuer.

5. **Téléchargement et exécution des LLMs avec Ollama**:
   - Accéder à https://ollama.com/library et choisir le LLM désiré (par exemple, llama2).
   - Cliquer sur "ollama run.." situé dans le coin supérieur droit pour copier la commande fournie.
   - Ouvrir cmd.exe et entrer "ubuntu" pour accéder à l'environnement Ubuntu.
   - Coller la commande copiée dans le terminal et l'exécuter pour télécharger le LLM.
   - Le LLM téléchargé permet l'exécution de modèles d'IA, car il est essentiel à leur fonctionnement.

### **Accès et utilisation de l'interface web Open**

0. **Accès local**:
   - Pour un accès local, naviguer vers `http://localhost:3000` dans votre navigateur web.

1. **Accès LLM en ligne via le renvoi de port**:
   - Ouvrir les ports 3000 et 11434 en TCP pour l'interface utilisateur (UI) et l'API respectivement.
   - Pour un accès distant ou externe, tel que sur un appareil mobile ou depuis un autre emplacement, utiliser `http://"Votre IP":3000` après avoir ouvert les ports comme décrit.

2. **Navigation dans l'interface web Open (anciennement appelée Ollama UI)**:
   - En suivant l'explication à partir de l'étape 0 ou 1 en fonction de votre choix d'accès local, en ligne ou les deux (comme moi).

3. **Découverte des fichiers de modèle**:
   - Pour initier une analyse d'IA ou une création de contenu, aller dans le menu latéral gauche, choisir "Modelfiles", puis cliquer sur "Discover a Modelfile" pour continuer. Voici le lien vers les : [Modèles en local](http://localhost:3000/modelfiles/). 
   - En bas du dernier lien, vous pouvez accéder à : [Interface web Open, alias Ollama Interface web Open](https://openwebui.com/). Et à partir de là, vous pouvez télécharger de nouveaux modèles d'IA pour beaucoup de divertissements !
   - Ensuite, sélectionner un modèle désiré dans le menu déroulant en haut de la page principale, tel que "llava".
   - Télécharger des images ou saisir des commandes d'entrée pour que l'IA analyse ou génère du contenu.

4. **Considération importante pour le partage de votre lien**:
   - Bien que vous puissiez partager ce lien avec d'autres pour y accéder, soyez conscient que cela expose votre adresse IP directe, ce qui pourrait poser des risques de sécurité. De plus, comme le service s'exécute sur votre machine, un accès excessif par plusieurs utilisateurs peut solliciter vos ressources système, entraînant potentiellement des problèmes de performances ou des ralentissements.




### Étapes de mise à jour d'Ollama et de l'interface web Open

1. **Veiller à ce que les images essentielles soient conservées**:
   - Ouvrir Docker Desktop et accéder à l'onglet **Images** pour voir vos images Docker.
   - Important : ne supprimez pas les images essentielles suivantes car elles sont nécessaires pour la mise à jour :
     - `ghcr.io/open-webui/open-webui`
     - `ollama/ollama`

2. **Mise à jour manuelle des images via Docker Desktop**:
   - Pour mettre à jour vos images vers la dernière version, les tirer manuellement depuis l'interface Docker Desktop.
   - Trouver l'image `ollama/ollama`, cliquer sur le menu à trois points à côté et sélectionner **Pull** pour mettre à jour l'image.
   - Répéter pour l'image `ghcr.io/open-webui/open-webui:main`, si elle est répertoriée.
   - Remarque : la mise à jour des images de cette manière peut créer des images en double, que nous aborderons ensuite.

3. **Comment réinstaller Ollama et Open Web-UI**

Lors de la gestion des conteneurs Docker, en particulier pour des configurations complexes comme Ollama et Open Web-UI, il est crucial de maintenir votre environnement à jour sans causer de conflits. Ce guide vous guide à travers les étapes de suppression sécurisée de vos conteneurs existants pour

 les mettre à jour ou les réinstaller via PowerShell, en vous assurant de toujours exécuter les versions les plus récentes.

### **Préparation : Suppression des conteneurs existants**

Avant de mettre à jour les images Docker pour Ollama et Open Web-UI, il est important de d'abord supprimer les conteneurs existants pour éviter tout conflit. Suivez ces étapes :

- **Identifier les conteneurs** : Ouvrir PowerShell et lister tous les conteneurs en cours d'exécution avec la commande :
   ```powershell
   docker ps
   ```
   ou pour tous les conteneurs (y compris ceux arrêtés) :
   ```powershell
   docker container ls -a
   ```

- **Arrêter les conteneurs** : Arrêter les conteneurs Ollama et Open Web-UI en exécutant :
   ```powershell
   docker stop <container_id_or_name>
   ```
   Remplacer `<container_id_or_name>` par les identifiants ou noms réels des conteneurs que vous souhaitez arrêter.

- **Supprimer les conteneurs** : Une fois arrêtés, supprimer les conteneurs en exécutant :
   ```powershell
   docker rm <container_id_or_name>
   ```
   Assurez-vous de remplacer `<container_id_or_name>` par les identifiants corrects des conteneurs Ollama et Open Web-UI.

### **Mise à jour des images Docker**

Après avoir supprimé les conteneurs en toute sécurité, vous pouvez procéder à la mise à jour de vos images Docker :

- **Tirer les images les plus récentes** : Mettre à jour vers les dernières versions d'Ollama et de l'interface web Open en tirant les images :
   ```powershell
   docker pull ollama/ollama
   docker pull ghcr.io/open-webui/open-webui:main
   ```

- **Supprimer les images inutilisées** : Après la mise à jour, supprimer les images en double ou inutilisées, en particulier celles étiquetées comme `<none>`, pour libérer de l'espace.

### **Réinstallation d'Ollama et de l'interface web Open**

Avec les anciens conteneurs supprimés et les images mises à jour, vous êtes maintenant prêt à réinstaller :

- **Installation de l'interface web Open** :
   Ouvrez PowerShell et exécutez la commande pour configurer le conteneur de l'interface web Open Web-UI d'Ollama :
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

- **Installation d'Ollama** :
   Dans la même session PowerShell, déployez le conteneur Ollama avec :
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```
   

### Localisation des fichiers de modèle d'Ollama en local, si vous devez les supprimer

- **Accès aux fichiers de modèle** : Appuyez sur `Win + R`, tapez `\\wsl$\docker-desktop-data\data\docker\volumes`, et appuyez sur Entrée pour ouvrir l'emplacement dans l'Explorateur de fichiers où les volumes Docker, y compris ceux d'Ollama, sont stockés.

Ce guide simplifie la gestion des ressources Docker pour l'application Ollama, détaillant le processus pour effacer, configurer et accéder aux composants essentiels, avec des instructions claires pour utiliser l'interface Docker Desktop et PowerShell pour les commandes manuelles.

### **Configuration avancée pour Stable Diffusion**

Pour ceux qui souhaitent approfondir avec Stable Diffusion pour la génération d'images basées sur l'IA, notez que cela nécessite une configuration PC encore plus puissante. Les exigences en calcul sont nettement plus élevées, nécessitant un CPU haute performance, une RAM suffisante et un GPU robuste. Un minimum de 12 Go de VRAM sur le GPU est recommandé.

Pour un guide complet sur la configuration de Stable Diffusion, référez-vous à ceci : [Guide YouTube](https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D).

### **Outil Omost pour la Génération d'Images**

La vidéo présente "Omost", un nouvel outil qui combine de grands modèles de langage et la génération d'images pour créer des images réalistes. Il génère des instructions détaillées pour chaque sous-section de l'image en fonction de l'instruction initiale, ce qui accélère le processus. L'outil est facile à installer, fonctionne via une application Gradio ou localement avec une carte Nvidia, et offre des paramètres personnalisables. Les problèmes liés à l'utilisation de la mémoire peuvent être atténués en activant le mode VRAM élevé et en effectuant de légères ajustements de code. [Guide YouTube](https://www.youtube.com/watch?v=RKxrXkVpPoE)

### **Mise à jour de tous les LLM en une seule commande**

Cette commande permet aux utilisateurs de mettre à jour tous les grands modèles de langage (LLM) et les modèles associés sur leur appareil. En l'exécutant, vous pouvez vous assurer que vos modèles sont à jour avec les dernières versions, offrant ainsi des performances améliorées et de nouvelles fonctionnalités. Elle simplifie le processus, facilitant ainsi la maintenance et l'amélioration de vos capacités en IA.

```
ollama list | awk -F: 'NR>1 && !/reviewer/ {system("ollama pull "$1)}'
```

### **Ressources et crédits**

- **Documentation de l'API Ollama** : [Documentation de l'API Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md).
- **Documentation de l'interface web Open** : [Documentation de l'interface web Open](https://github.com/open-webui/open-webui).
- **Créateurs du tutoriel** : WeConnected de CtrlAIdel, avec l'aide de Subie (Développeur).
- **Chaîne YouTube du rédacteur** : [CtrlAI Del](https://www.youtube.com/@ctrl_ai_del).
- **GitHub du développeur** : [Subie1](https://github.com/Subie1).

Ce guide vise à consolider toutes les étapes nécessaires pour configurer efficacement **WSL, Docker, Ollama et l'interface web Open**, et naviguer dans diverses fonctionnalités. Il souligne l'importance d'un environnement informatique puissant pour une expérience fluide et productive dans l'utilisation de modèles d'IA pour la génération et l'analyse d'images.


**-WeConnected alias CtrlAiDel**


## L'Histoire des Étoiles

[![Star History Chart](https://api.star-history.com/svg?repos=CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&type=Date)](https://star-history.com/#CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&Date)
