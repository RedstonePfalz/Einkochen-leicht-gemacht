# Einkochen leicht gemacht - DE

[![Made for Android](https://img.shields.io/badge/Made%20for%20Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)]()
[![Play Store](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=de.redstonepfalz.einkochen&utm_source=elg-web-github&utm_campaign=github)
[![WebApp](https://img.shields.io/badge/WebApp-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://redstonepfalz.github.io/einkochen-leicht-gemacht)
[![Cordova](https://img.shields.io/badge/Cordova-35434F?style=for-the-badge&logo=apache-cordova&logoColor=E8E8E8)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![Material Design 2](https://img.shields.io/badge/material%20design%202-757575?style=for-the-badge&logo=material%20design&logoColor=white)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![Made with Webstorm](https://img.shields.io/badge/Made%20with%20WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white)]()

## Inhaltsverzeichnis
1. [Beschreibung](#Beschreibung)
2. [Kompilieren](#Kompilieren)
3. [To Do](#To-Do)
4. [Beitragen](#Beitragen)
5. [Credits](#Credits)
6. [Lizenz](#Lizenz)

## Beschreibung
Die App "Einkochen leicht gemacht" beinhaltet Einkochzeiten, Einkochtemperaturen und Einkochtipps, die helfen, Obst, Gemüse und Fleisch einzukochen.<br>
#### Beinhaltete Obstsorten:
- Äpfel weich/hart
- Apfelmus
- Aprikosen
- Birnen weich/hart
- Brombeeren
- Erdbeeren
- Himbeeren
- Johannisbeeren
- Kirschen
- Mirabellen
- Pfirsiche
- Pflaumen
- Preiselbeeren
- Renekloden
- Rhabarber
- Stachelbeeren

#### Beinhaltete Gemüsesorten:
- Blumenkohl
- Erbsen
- Gewürzgurken
- Grüne Bohnen
- Karotten
- Kohlrabi
- Kürbis
- Pilze
- Rosenkohl
- Rote Beete
- Rotkohl
- Sellerie
- Spargel
- Tomaten

#### Beinhaltete Fleischsorten:
- Braten am Stück
- Fleischbrühe
- Gulasch
- Hackfleisch
- Wild, Geflügel
- Würste


## Kompilieren
#### Vorraussetzungen:
- NodeJS v18.18.0 oder neuer
- Java JDK 11 (mit neueren Versionen nicht getestet, Pfad zum JDK muss ich in der Systemvariable JAVA_HOME befinden)
- Gradle 7.6 oder neuer, aber nicht Gradle 8, der Gradle-bin-Ordner muss sich in PATH befinden
- Android Studio
- Git

#### Schritt 1: Android-SDK installieren
1. Android-Studio->Tools->SDK Manager
2. Erstelle einen leeren Ordner und trage seinen Pfad in "Android SDK Location" ein<br>
![image](https://github.com/RedstonePfalz/Einkochen-leicht-gemacht/assets/55254344/71639717-66b1-4297-9063-685a47ab276a)
3. Setze unter SDK-Platforms das Häkchen bei Android API 34 und Android 13.0 (Tiramisu)<br>
![image](https://github.com/RedstonePfalz/Einkochen-leicht-gemacht/assets/55254344/ea0338be-4037-4fc2-9ebb-e08cddd97fae)
4. Klicke auf Apply
5. Erstelle eine Systemvariable ANDROID_HOME mit dem Pfad, den Du in "Android SDK Location" eingegeben hast
![image](https://github.com/RedstonePfalz/Einkochen-leicht-gemacht/assets/55254344/65d99b01-ada3-471f-afc3-825037482b2a)

#### Schritt 2: Apache Cordova installieren
1. Führe folgenden Befehl aus:
   ```console
   npm install -g cordova
   ```
3. Teste, ob Cordova erfolgreich installiert wurde, in dem Du den Befehl `cordova` ausführst. Wird dir Hilfe zu Cordova angezeigt, wurde Cordova richtig installiert.

#### Schritt 3: Abhängigkeiten installieren
1. Klone das Repository in einen leeren Ordner:
   ```console
   git clone https://github.com/RedstonePfalz/Einkochen-leicht-gemacht.git
   ```
3. Installiere alle Abhängigkeiten:
   ```console
   npm i
   ```

#### Schritt 3: Kompilieren
1. Baue die JavaScript-Dateien mit webpack:
   ```console
   npx webpack --config webpack.config.js
   ```
2. Füge Cordova die Android-Plattform hinzu:
   ```console
   cordova platform add android
   ```
3. Kompiliere die App mit Cordova
   ```console
   cordova build android --release --packageType=apk
   ```
4. Die APK-Datei befindet sich nach erfolgreichem Kompilieren unter `platforms/android/app/build/outputs/apk/release`


## To Do
- Timer hinzufügen
- weiteres Obst und Gemüse hinzufügen
- weitere Sprachen


## Beitragen
Wenn Du dieses Repository forkst und Commits durchführen willst, achte bitte darauf, den [ConventionalCommit-Standard](https://www.conventionalcommits.org/) zu nutzen.


## Credits
- [Apache Cordova](https://cordova.apache.org/)
- [Material Web](https://material-web.dev/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)

## Lizenz
Einkochen leicht gemacht ist unter der Apache 2.0 Lizenz freigegeben


<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
Google Play und das Google Play-Logo sind Marken von Google LLC.
