# Haspa 2027 – Trainings-App

Marathon-Aufbau 02.11.2026 – 25.04.2027 (Ziel 3:30). Läuft komplett im Browser, keine Server, keine Accounts.

## Auf GitHub Pages veröffentlichen
1. Neues Repository anlegen, z. B. `haspa27` (public; bei privaten Repos braucht Pages ein bezahltes Konto).
2. **Add file › Upload files** – alle Dateien dieses Ordners hochladen, **Commit changes**.
3. **Settings › Pages** – Source: *Deploy from a branch*, Branch: `main`, Ordner: `/ (root)`, **Save**.
4. Nach 1–2 Minuten läuft die App unter `https://<dein-name>.github.io/haspa27/`.

## Aufs Handy
- **iPhone:** Link in Safari öffnen › Teilen › *Zum Home-Bildschirm*.
- **Android:** Link in Chrome öffnen › Menü › *App installieren*.

## GitHub-Sync einrichten
1. Neues **privates** Repo `haspa27-data` anlegen (leer lassen).
2. github.com › Settings › Developer settings › Personal access tokens › **Fine-grained tokens › Generate new token**
   - Expiration: z. B. 31.05.2027
   - Repository access: *Only select repositories* › `haspa27-data`
   - Permissions › Repository › **Contents: Read and write** (sonst nichts)
3. In der App: **Import › GitHub-Sync** – GitHub-Name, Repo und Token eintragen › *Verbinden*.
4. Auf jedem weiteren Gerät denselben Schritt wiederholen. Die Geräte führen ihre Daten automatisch zusammen.

Der Token bleibt nur im Browser des Geräts. Die App verweigert öffentliche Repos.

## Daten
Ohne Sync liegt alles nur lokal auf dem Gerät – dann **Import › Backup exportieren** regelmäßig nutzen.

## Updates
`index.html` ersetzen und in `sw.js` die Version (`haspa27-v1` → `v2`) erhöhen.
