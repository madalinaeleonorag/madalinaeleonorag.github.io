export type Language = 'en' | 'ro';

// Copy of DoseSync/src/app/legal/legal-documents.ts (privacy policy and terms), published for Google Play
// (madalinaeleonorag.github.io/projects/dosesync/privacy and /terms). Keep both copies the same.
// Drafted for review: have them checked by a lawyer before the Google Play release.

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export type LegalDocumentId = 'privacy' | 'terms';

export const LEGAL_UPDATED = '2026-11-04';
export const SOURCE_URL = 'https://github.com/madalinaeleonorag/DoseSync';
export const COPYRIGHT = '© 2026 Mădălina-Eleonora Gheorghe';
const CONTACT = 'madalinaeleonora.gheorghe@gmail.com';

const privacyEn: LegalDocument = {
  title: 'Privacy policy',
  intro:
    'DoseSync is built so that your health information stays on your phone. This policy explains what the app handles, where it is kept, what can leave your phone and what rights you have.',
  sections: [
    {
      heading: 'Who is responsible',
      paragraphs: [
        `DoseSync is made by Mădălina-Eleonora Gheorghe, an individual developer based in Romania. For anything about privacy, write to ${CONTACT}.`,
      ],
    },
    {
      heading: 'The short version',
      paragraphs: [
        'There is no account and no sign-up. DoseSync has no servers, no analytics, no advertising and no tracking. Your information is not sold or shared with anyone.',
        'The developer cannot see what you enter in the app.',
      ],
    },
    {
      heading: 'What the app keeps on your phone',
      paragraphs: [
        'Medications and how to take them; the doses you take, skip or miss, with the reasons you choose; stock counts; menstrual cycle dates if you use them; appointments; and your settings.',
        'Much of this is health information, a special category of personal data under Article 9 of the GDPR. You create it, it stays on your device, and it is used only to show your plan, remind you and keep your history.',
        'If you set a PIN, only a scrambled form of it (a salted PBKDF2 hash) is stored, never the PIN itself.',
      ],
    },
    {
      heading: 'How it is protected',
      paragraphs: [
        'Your information is stored in an encrypted database (SQLCipher). The key is kept by Android in the phone’s secure hardware (Android Keystore).',
        'DoseSync is excluded from Android’s cloud backup and from phone-to-phone transfer, so your health information is not copied to Google’s servers.',
        'You can add a PIN or fingerprint lock, and hide medication names in notifications for when others can see your screen.',
      ],
    },
    {
      heading: 'When information leaves your phone',
      paragraphs: [
        'Only when you choose to:',
        'Backup file. "Export backup" creates a file with all your DoseSync information and lets you choose where to save or send it. The file is not encrypted, so keep it somewhere safe.',
        'Feedback and contact. If you write to the developer from the About screen, your own email app sends the message. The developer then receives your email address and what you wrote, uses them only to reply and to improve DoseSync, and deletes them within two years, or sooner if you ask. The legal bases are answering your request (Article 6(1)(b) GDPR) and the legitimate interest of improving the app (Article 6(1)(f)). Please do not include health details you want to keep private; if you do, they are used only to answer you.',
        'Links. The About screen links to Google Play, LinkedIn and the developer’s website. They open outside DoseSync and their own privacy policies apply. The website counts visits with GoatCounter, without cookies and without collecting personal data.',
      ],
    },
    {
      heading: 'Permissions on your phone',
      paragraphs: [
        'Notifications: to remind you about doses, low stock and appointments.',
        'Alarms and reminders (exact alarms): so reminders arrive on time.',
        'Fingerprint or face: only if you turn on the lock. Android checks it; DoseSync never receives your fingerprint or face data.',
        'Run at startup: so reminders are planned again after the phone restarts.',
        'Internet: Android lists it because the app framework (Capacitor) declares it. DoseSync does not connect to the internet and does not send your information anywhere.',
      ],
    },
    {
      heading: 'Google Play',
      paragraphs: ['When you download DoseSync from Google Play, Google processes information about the download under its own privacy policy. The developer only sees anonymous totals from Google, such as the number of installs.'],
    },
    {
      heading: 'Children',
      paragraphs: ['DoseSync is meant for adults. Children under 16 should use it together with a parent or guardian.'],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Everything in the app is in your hands: you can see and change it at any time, export it with "Export backup", and delete it by deleting items, or all of it by uninstalling DoseSync or clearing its data in Android settings. Deleted information cannot be recovered without a backup.',
        `For information the developer holds (feedback emails), you have the right to access, correct, delete, restrict, object to processing and receive a copy, and to withdraw consent at any time. Write to ${CONTACT}; you will get an answer within one month.`,
        'You can also complain to the Romanian data protection authority, ANSPDCP (www.dataprotection.ro), or to the authority in the EU country where you live.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: ['If this policy changes, the new version will appear in the app and on the developer’s website with a new date. Important changes will be shown in the app before they apply.'],
    },
  ],
};

const privacyRo: LegalDocument = {
  title: 'Politica de confidențialitate',
  intro:
    'DoseSync este construit astfel încât informațiile tale de sănătate să rămână pe telefon. Această politică explică ce gestionează aplicația, unde sunt păstrate datele, ce poate pleca de pe telefon și ce drepturi ai.',
  sections: [
    {
      heading: 'Cine este responsabil',
      paragraphs: [
        `DoseSync este creat de Mădălina-Eleonora Gheorghe, dezvoltator independent din România. Pentru orice întrebare despre confidențialitate, scrie la ${CONTACT}.`,
      ],
    },
    {
      heading: 'Pe scurt',
      paragraphs: [
        'Nu există cont și nici înregistrare. DoseSync nu are servere, nu folosește statistici, reclame sau urmărire. Informațiile tale nu sunt vândute și nu sunt împărtășite cu nimeni.',
        'Dezvoltatorul nu poate vedea ce introduci în aplicație.',
      ],
    },
    {
      heading: 'Ce păstrează aplicația pe telefon',
      paragraphs: [
        'Medicamentele și modul de administrare; dozele luate, sărite sau ratate, cu motivele alese de tine; cantitățile din sertar; datele ciclului menstrual, dacă le folosești; programările; și setările tale.',
        'Multe dintre acestea sunt date privind sănătatea, o categorie specială de date cu caracter personal conform articolului 9 din GDPR. Tu le creezi, ele rămân pe dispozitiv și sunt folosite doar pentru a-ți arăta planul, a-ți aminti și a păstra istoricul.',
        'Dacă setezi un PIN, se păstrează doar o formă codificată a lui (hash PBKDF2 cu sare), niciodată PIN-ul însuși.',
      ],
    },
    {
      heading: 'Cum sunt protejate',
      paragraphs: [
        'Informațiile tale sunt păstrate într-o bază de date criptată (SQLCipher). Cheia este păstrată de Android în hardware-ul securizat al telefonului (Android Keystore).',
        'DoseSync este exclus din copiile de siguranță Android în cloud și din transferul între telefoane, așa că datele tale de sănătate nu sunt copiate pe serverele Google.',
        'Poți adăuga blocare cu PIN sau amprentă și poți ascunde numele medicamentelor din notificări, pentru când alții îți pot vedea ecranul.',
      ],
    },
    {
      heading: 'Când pleacă informații de pe telefon',
      paragraphs: [
        'Doar când alegi tu:',
        'Fișierul de copie. „Exportă copia” creează un fișier cu toate informațiile din DoseSync și te lasă să alegi unde îl salvezi sau cui îl trimiți. Fișierul nu este criptat, așa că păstrează-l într-un loc sigur.',
        'Păreri și contact. Dacă îi scrii dezvoltatorului din ecranul Despre, mesajul este trimis de propria ta aplicație de e-mail. Dezvoltatorul primește adresa ta de e-mail și ce ai scris, le folosește doar pentru a-ți răspunde și a îmbunătăți DoseSync și le șterge în cel mult doi ani sau mai devreme, dacă ceri. Temeiurile legale sunt răspunsul la solicitarea ta (articolul 6 alineatul (1) litera (b) din GDPR) și interesul legitim de a îmbunătăți aplicația (articolul 6 alineatul (1) litera (f)). Te rog să nu incluzi detalii de sănătate pe care vrei să le păstrezi private; dacă o faci, sunt folosite doar pentru a-ți răspunde.',
        'Linkuri. Ecranul Despre conține linkuri către Google Play, LinkedIn și site-ul dezvoltatorului. Acestea se deschid în afara DoseSync și se aplică propriile lor politici de confidențialitate. Site-ul numără vizitele cu GoatCounter, fără cookie-uri și fără a colecta date personale.',
      ],
    },
    {
      heading: 'Permisiunile de pe telefon',
      paragraphs: [
        'Notificări: pentru mementouri despre doze, stoc scăzut și programări.',
        'Alarme și mementouri (alarme exacte): ca mementourile să sosească la timp.',
        'Amprentă sau față: doar dacă activezi blocarea. Android face verificarea; DoseSync nu primește niciodată datele amprentei sau ale feței.',
        'Pornire la deschiderea telefonului: ca mementourile să fie replanificate după repornire.',
        'Internet: Android o afișează pentru că platforma aplicației (Capacitor) o declară. DoseSync nu se conectează la internet și nu trimite informațiile tale nicăieri.',
      ],
    },
    {
      heading: 'Google Play',
      paragraphs: ['Când descarci DoseSync din Google Play, Google prelucrează informații despre descărcare conform propriei politici de confidențialitate. Dezvoltatorul vede de la Google doar totaluri anonime, cum ar fi numărul de instalări.'],
    },
    {
      heading: 'Copii',
      paragraphs: ['DoseSync este destinat adulților. Copiii sub 16 ani ar trebui să îl folosească împreună cu un părinte sau tutore.'],
    },
    {
      heading: 'Drepturile tale',
      paragraphs: [
        'Tot ce este în aplicație este în mâinile tale: poți vedea și modifica oricând, poți exporta cu „Exportă copia” și poți șterge elemente sau totul, dezinstalând DoseSync sau ștergând datele aplicației din setările Android. Informațiile șterse nu pot fi recuperate fără o copie.',
        `Pentru informațiile pe care le deține dezvoltatorul (e-mailurile cu păreri), ai dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate, precum și dreptul de a-ți retrage oricând consimțământul. Scrie la ${CONTACT}; vei primi răspuns în cel mult o lună.`,
        'Poți depune și o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, ANSPDCP (www.dataprotection.ro), sau la autoritatea din țara UE în care locuiești.',
      ],
    },
    {
      heading: 'Modificări ale acestei politici',
      paragraphs: ['Dacă politica se schimbă, noua versiune va apărea în aplicație și pe site-ul dezvoltatorului, cu o dată nouă. Modificările importante vor fi afișate în aplicație înainte să se aplice.'],
    },
  ],
};

const termsEn: LegalDocument = {
  title: 'Terms of use',
  intro: 'These terms apply when you install or use DoseSync. Please read them; if you do not agree, do not use the app.',
  sections: [
    {
      heading: 'Not medical advice',
      paragraphs: [
        'DoseSync is a personal organiser for the plan you enter. It does not diagnose, treat or prevent any condition, and it does not recommend medications, doses or changes to your treatment.',
        'Estimates such as the next period, when a medication runs out or what to pack for a trip are calculations from your own entries and may be wrong. Always follow your doctor’s and pharmacist’s instructions, and the leaflet of each medication.',
        'In an emergency, call 112 or your local emergency number.',
      ],
    },
    {
      heading: 'Your responsibilities',
      paragraphs: [
        'Check that what you enter matches your prescription, and keep it up to date when your treatment changes.',
        'Keep notifications allowed for DoseSync, and make regular backups with "Export backup".',
        'Keep your phone, your PIN and your backup files safe.',
      ],
    },
    {
      heading: 'Reminders can be late or missing',
      paragraphs: [
        'Reminders depend on Android. Battery saving, phone settings, a switched-off or restarted phone, or a change of time zone can delay or stop them. Do not rely on DoseSync alone for medications where a missed or late dose could be dangerous.',
      ],
    },
    {
      heading: 'Price and account',
      paragraphs: ['DoseSync is free to use and does not need an account. Core features will not be put behind a payment.'],
    },
    {
      heading: 'Your information',
      paragraphs: [
        'Your information stays on your phone, as explained in the privacy policy. If you uninstall the app, clear its data or lose your phone without a backup, the information cannot be recovered by anyone, including the developer.',
      ],
    },
    {
      heading: 'Copyright and open-source components',
      paragraphs: [
        `${COPYRIGHT}. DoseSync is free software: its source code is published under the GNU General Public License, version 3 or (at your option) any later version (GPL-3.0-or-later). You may use, study, share and change it under that license; anything built on it must stay under the same license.`,
        'The DoseSync name and logo are not covered by that license and may not be used for other apps without permission.',
        'DoseSync includes open-source components, each used under its own license. The list and license texts are in the app under Settings → Privacy and terms → Open-source licenses.',
      ],
    },
    {
      heading: 'No warranty',
      paragraphs: [
        'DoseSync is provided "as is", without warranties of any kind, to the extent the law allows. The developer works to keep it accurate and reliable but cannot promise that it will always work without errors.',
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'To the extent the law allows, the developer is not liable for missed or wrong doses, lost information or other damage resulting from using DoseSync or from not being able to use it.',
        'Nothing in these terms limits liability that cannot be limited by law, such as liability for intent or gross negligence, for harm to life or health caused by negligence, or your rights as a consumer.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'The app and these terms may change. The current version is always available in the app and on the developer’s website, with its date. Important changes will be shown in the app before they apply. You can stop using DoseSync at any time by uninstalling it.',
      ],
    },
    {
      heading: 'Applicable law',
      paragraphs: [
        'These terms are governed by Romanian law. If you are a consumer living in another EU country, you keep the protection of the mandatory laws of that country.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about these terms: ${CONTACT}.`],
    },
  ],
};

const termsRo: LegalDocument = {
  title: 'Termeni de utilizare',
  intro: 'Acești termeni se aplică atunci când instalezi sau folosești DoseSync. Te rog să îi citești; dacă nu ești de acord, nu folosi aplicația.',
  sections: [
    {
      heading: 'Nu este sfat medical',
      paragraphs: [
        'DoseSync este un organizator personal pentru planul pe care îl introduci. Nu diagnostichează, nu tratează și nu previne nicio afecțiune și nu recomandă medicamente, doze sau modificări ale tratamentului.',
        'Estimările, precum următoarea menstruație, când se termină un medicament sau ce să iei într-o călătorie, sunt calcule făcute din propriile tale date și pot fi greșite. Urmează mereu indicațiile medicului și ale farmacistului și prospectul fiecărui medicament.',
        'În caz de urgență, sună la 112.',
      ],
    },
    {
      heading: 'Responsabilitățile tale',
      paragraphs: [
        'Verifică dacă ce introduci corespunde rețetei și actualizează datele când tratamentul se schimbă.',
        'Păstrează notificările permise pentru DoseSync și fă regulat copii cu „Exportă copia”.',
        'Păstrează în siguranță telefonul, PIN-ul și fișierele de copie.',
      ],
    },
    {
      heading: 'Mementourile pot întârzia sau lipsi',
      paragraphs: [
        'Mementourile depind de Android. Economisirea bateriei, setările telefonului, un telefon oprit sau repornit ori schimbarea fusului orar le pot întârzia sau opri. Nu te baza doar pe DoseSync pentru medicamentele la care o doză ratată sau întârziată poate fi periculoasă.',
      ],
    },
    {
      heading: 'Preț și cont',
      paragraphs: ['DoseSync este gratuit și nu necesită cont. Funcțiile de bază nu vor deveni contra cost.'],
    },
    {
      heading: 'Informațiile tale',
      paragraphs: [
        'Informațiile tale rămân pe telefon, așa cum explică politica de confidențialitate. Dacă dezinstalezi aplicația, îi ștergi datele sau pierzi telefonul fără o copie, informațiile nu mai pot fi recuperate de nimeni, nici de dezvoltator.',
      ],
    },
    {
      heading: 'Drepturi de autor și componente open-source',
      paragraphs: [
        `${COPYRIGHT}. DoseSync este software liber: codul sursă este publicat sub Licența Publică Generală GNU, versiunea 3 sau (la alegerea ta) orice versiune ulterioară (GPL-3.0-or-later). Îl poți folosi, studia, distribui și modifica în condițiile acestei licențe; orice lucrare construită pe baza lui trebuie să rămână sub aceeași licență.`,
        'Numele și logoul DoseSync nu sunt acoperite de această licență și nu pot fi folosite pentru alte aplicații fără permisiune.',
        'DoseSync include componente open-source, fiecare folosită conform propriei licențe. Lista și textele licențelor se află în aplicație, la Setări → Confidențialitate și termeni → Licențe open-source.',
      ],
    },
    {
      heading: 'Fără garanții',
      paragraphs: [
        'DoseSync este oferit „ca atare”, fără garanții de niciun fel, în măsura permisă de lege. Dezvoltatorul se străduiește să îl păstreze corect și fiabil, dar nu poate promite că va funcționa mereu fără erori.',
      ],
    },
    {
      heading: 'Limitarea răspunderii',
      paragraphs: [
        'În măsura permisă de lege, dezvoltatorul nu răspunde pentru doze ratate sau greșite, informații pierdute sau alte prejudicii rezultate din folosirea DoseSync ori din imposibilitatea de a-l folosi.',
        'Nimic din acești termeni nu limitează răspunderea care nu poate fi limitată prin lege, cum ar fi răspunderea pentru intenție sau culpă gravă, pentru vătămarea vieții sau sănătății din culpă ori drepturile tale de consumator.',
      ],
    },
    {
      heading: 'Modificări',
      paragraphs: [
        'Aplicația și acești termeni se pot schimba. Versiunea actuală este mereu disponibilă în aplicație și pe site-ul dezvoltatorului, cu data ei. Modificările importante vor fi afișate în aplicație înainte să se aplice. Poți înceta oricând să folosești DoseSync, dezinstalându-l.',
      ],
    },
    {
      heading: 'Legea aplicabilă',
      paragraphs: [
        'Acești termeni sunt guvernați de legea română. Dacă ești consumator și locuiești în altă țară din UE, îți păstrezi protecția oferită de legile obligatorii din acea țară.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Întrebări despre acești termeni: ${CONTACT}.`],
    },
  ],
};

export const LEGAL_DOCUMENTS: Record<LegalDocumentId, Record<Language, LegalDocument>> = {
  privacy: { en: privacyEn, ro: privacyRo },
  terms: { en: termsEn, ro: termsRo },
};

