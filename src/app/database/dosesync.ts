// Content for the DoseSync case study page.
// To replace a placeholder, put the image in public/assets/dosesync/ and set `image`
// (for example `image: 'dosesync/today.webp'`). Empty `image` renders a placeholder box.

export interface CaseStudyImage {
  image: string;
  alt: string;
  caption: string;
}

export const DOSESYNC = {
  title: 'DoseSync',
  slogan: "Medication scheduling for treatment plans that don't fit a simple daily reminder.",
  tagline: 'Offline-first · Privacy-first · Android (iOS later)',
  status: 'MVP 0 and MVP 1 features running on my Android phone',
  techStack: ['Angular 21', 'Signals', 'Ionic', 'Capacitor', 'TypeScript', 'SQLCipher', 'Vitest'],
  githubUrl: 'https://github.com/madalinaeleonorag/DoseSync',

  // Screenshots use made-up demo medications, never real health data.
  hero: {
    image: 'dosesync/today.webp',
    alt: 'DoseSync Today view: 5 of 6 doses done, the next dose with Taken and Skip buttons, and an upcoming appointment',
    caption: 'Today: the next dose first, then upcoming appointments',
  } as CaseStudyImage,

  // "The App" tab: written for people who might use DoseSync, not for recruiters
  app: {
    headline: 'Your medication plan, the way your doctor actually wrote it.',
    intro:
      'Most reminder apps assume one pill, every day, at the same time. DoseSync handles the rest: pills only on certain days of the month, a supplement only in winter, a 10-day course that follows your cycle, or a medicine you take only when you need it. It reminds you on time, keeps count of what is left, and keeps a clear record for your doctor.',
    availability: 'In development · Android beta coming soon',
    betaUrl: 'mailto:madalinaeleonora.gheorghe@gmail.com?subject=DoseSync%20beta',

    goodFit: [
      'You take several medicines or supplements on different schedules.',
      'Some of them follow the calendar: days 1 to 15 of the month, or October to March.',
      'Some treatments follow your menstrual cycle.',
      'You take some medicines only when needed and want a safe daily limit.',
      'You want your health data to stay on your phone, with no account.',
      'You are tired of subscriptions for basic features.',
    ],
    notYet: [
      'You need an iPhone app (Android comes first).',
      'You want to track symptoms, mood or sleep. DoseSync only records what you took.',
      'You need a family member to see your doses remotely (planned for later).',
    ],

    steps: [
      { title: 'Add your medicine', text: 'Name, dose, how many you have, and when to take it, in plain words.' },
      { title: 'Get a reminder', text: 'Your phone reminds you at the right time, even when the app is closed.' },
      { title: 'Tap Taken', text: 'DoseSync logs the time and updates how many are left. Made a mistake? Undo it.' },
    ],

    // "What it does", grouped so each category can show its own screenshots. The last group has no screenshots.
    featureGroups: [
      {
        title: 'Your day at a glance',
        text: 'Open the app and see what to take now. One tap records it; skipping asks why, so you and your doctor know.',
        shots: [
          { image: 'dosesync/today.webp', alt: "Today view: 5 of 6 doses done, the next dose with Taken and Skip, and an appointment in two days", caption: "Today: the next dose first" },
          { image: 'dosesync/reasons.webp', alt: "A list asking why a dose is skipped: doctor’s advice, side effects, feeling unwell, ran out, away from home, other", caption: "Skipping asks for a reason" },
        ],
        features: [
          { title: 'Today at a glance', text: 'Doses grouped by morning, lunch, evening and night. The next one is always at the top.', ready: true },
          { title: 'Taken, or skipped with a reason', text: 'Record a dose in one tap, or say why you skipped it. Undo is always there for five seconds.', ready: true },
          { title: 'Taken earlier…', text: 'Forgot to tap? Record the dose at the time you actually took it.', ready: true },
          { title: 'Reminders that work from the notification', text: 'Taken, Snooze and Skip right from the reminder, with names hidden on the lock screen if you like.', ready: true },
        ],
      },
      {
        title: 'Schedules that fit real treatment plans',
        text: 'Most apps assume one pill a day. DoseSync follows the plan your doctor actually wrote.',
        shots: [
          { image: 'dosesync/editor-when.webp', alt: "Medication editor: every day at 08:00, 14:00 and 23:00, counted as missed after 4 hours, with start and end dates", caption: "Several times a day, with a course length" },
          { image: 'dosesync/calendar.webp', alt: "Month calendar with dose dots, the next period estimate in pink and an appointment marker", caption: "Calendar with a cycle estimate" },
        ],
        features: [
          { title: 'Flexible schedules', text: 'Every day, chosen weekdays, days of the month, every few hours, seasonal, once, or only when needed.', ready: true },
          { title: 'Courses that follow your cycle', text: 'Mark day 1 of your period and a 10-day course starts from it. The next start is estimated, never assumed.', ready: true },
          { title: 'Pause without losing history', text: 'Stop a treatment for a while and resume it later. Past records stay as they were.', ready: true },
          { title: 'Safe as-needed doses', text: 'A daily maximum and a minimum gap, with a clear warning before you log one too many.', ready: true },
        ],
      },
      {
        title: 'Stock and refills',
        text: 'Know what is in the drawer before it runs out.',
        shots: [{ image: 'dosesync/drawer.webp', alt: "Medication drawer with stock counts, low-stock badges and the date each one runs out", caption: "Drawer: counts and “runs out around”" }],
        features: [
          { title: 'Stock that counts itself', text: 'Every dose you take is subtracted, and undo puts it back.', ready: true },
          { title: 'Runs out around…', text: 'An estimated date for each medication, including courses that follow your cycle.', ready: true },
          { title: 'Low-stock reminder', text: 'A notification when a count reaches the level you chose.', ready: true },
        ],
      },
      {
        title: 'Trips and appointments',
        text: 'Life does not stop for a treatment plan, so DoseSync plans around it.',
        shots: [
          { image: 'dosesync/trip.webp', alt: "Trip planner with Flying ticked twice and a packing list checked against the drawer", caption: "Plan a trip, including flights" },
          { image: 'dosesync/appointment-form.webp', alt: "Appointment form with title, date, time, place and notes", caption: "Appointments with reminders" },
        ],
        features: [
          { title: 'Plan a trip', text: 'How much of each medication to pack, and whether you have enough. Tick “flying” and the medication you take for flights is packed too.', ready: true },
          { title: 'Appointments', text: 'Doctor visits and tests on Today and in the calendar, with reminders the evening before and two hours before.', ready: true },
          { title: 'Time zones', text: 'Abroad, keep taking doses at home time or move them to local time.', ready: true },
        ],
      },
      {
        title: 'A record for you and your doctor',
        text: 'Facts instead of memory, without tracking anything else.',
        shots: [{ image: 'dosesync/history.webp', alt: "History with 93% taken over 7 days, counted from first use, and a bar per medication", caption: "History and adherence" }],
        features: [
          { title: 'History', text: 'Taken, skipped and missed over 7 or 30 days, per medication and day by day.', ready: true },
          { title: 'Record for your doctor', text: 'A one-page PDF of what you took and skipped.', ready: false },
        ],
      },
      {
        title: 'Comfortable for everyone',
        text: 'Large, clear and calm, whether you love modern apps or prefer words on every button.',
        shots: [
          { image: 'dosesync/simple.webp', alt: "Today in the simple layout: larger text and labelled tabs at the bottom", caption: "Simple layout with larger text" },
          { image: 'dosesync/dark.webp', alt: "Today in the dark Burgundy theme", caption: "Dark mode" },
          { image: 'dosesync/tour.webp', alt: "Welcome tour slide: choose light or dark and the text size", caption: "A short welcome tour" },
        ],
        features: [
          { title: 'Your look, your size', text: 'Five color themes or your own color, light and dark, text that follows your phone, and larger buttons.', ready: true },
          { title: 'Simple layout', text: 'Tabs with words at the bottom and words on the main buttons, for anyone who prefers them to icons.', ready: true },
          { title: 'Romanian and English', text: 'The whole app, including reminders.', ready: true },
          { title: 'Welcome tour', text: 'A one-minute introduction on first launch: language, colors, layout and where everything is.', ready: true },
        ],
      },
      {
        title: 'Private and secure',
        text: 'Health information belongs to you, so it never leaves your phone unless you send it.',
        shots: [
          { image: 'dosesync/lock.webp', alt: "Lock screen with a large number pad and a link for a forgotten PIN", caption: "Optional PIN lock" },
          { image: 'dosesync/security.webp', alt: "Settings: encrypted on this phone, PIN lock, fingerprint, and how to get back in after forgetting the PIN", caption: "Encryption and lock settings" },
        ],
        features: [
          { title: 'Encrypted on your phone', text: 'An encrypted database, left out of cloud backups. No account, no ads, no tracking.', ready: true },
          { title: 'PIN and fingerprint lock', text: 'Optional. Forgot the PIN? The phone’s own screen lock lets you back in.', ready: true },
          { title: 'Backups you control', text: 'Save everything to a file, protected with a password if you like, and restore it on a new phone.', ready: true },
        ],
      },
      {
        title: 'Others',
        text: '',
        shots: [],
        features: [
          { title: 'About and honest feedback', text: 'Why the app exists, and a one-tap way to send a review, good or bad.', ready: true },
          { title: 'Color and shape for each medication', text: 'Recognise each one at a glance, next to its name.', ready: true },
          { title: 'Home-screen widgets', text: 'Next dose and cycle estimate without opening the app.', ready: false },
          { title: 'Interaction and timing warnings', text: 'A gentle warning when two medications should not be taken close together.', ready: false },
        ],
      },
    ],

    // Shown under the title. Set live to true once the app is published.
    playStore: {
      url: 'https://play.google.com/store/apps/details?id=com.dosesync.app',
      live: false,
    },

    privacy: [
      'No account and no sign-up.',
      'Your data stays on your phone, encrypted. Nothing is sent to a server.',
      'An optional PIN or fingerprint keeps others out of the app.',
      'No ads, no tracking, no selling of data.',
      'Back up and restore your data yourself, whenever you want.',
    ],

    faq: [
      { q: 'Is it free?', a: 'Yes. Core features will stay free, with no limit on the number of medicines.' },
      { q: 'Do I need an account?', a: 'No. Open the app and start adding your medicines.' },
      { q: 'Will it tell me what dose to take?', a: 'No. DoseSync follows the plan you enter from your prescription. It does not give medical advice or change your treatment.' },
      { q: 'What if I change phones?', a: 'Export your data to a file in Settings and restore it on the new phone. DoseSync is left out of Android backups on purpose, so your health data never goes to the cloud.' },
      { q: 'What if I forget my PIN?', a: 'Open DoseSync with the PIN, pattern or password you use to unlock your phone, then choose a new PIN. On a phone without a screen lock, you answer which of your medicines you take.' },
      { q: 'How can I try it?', a: 'A closed beta on Google Play is coming. Write to me and I will add you to the tester list.' },
    ],
  },

  // Product tab
  summary: [
    'DoseSync is a free, privacy-first app for planning and logging medication and supplements. It started as a personal need: no app I tried could represent my own regimen without paywalls, item limits or rigid scheduling.',
    'Its core is a schedule rule engine that can express what other apps handle badly: specific days of the month, seasonal windows, fixed-length courses, schedules anchored to a menstrual cycle, and as-needed (PRN) doses with safety limits.',
  ],

  problems: [
    'No way to pick specific days of the month for a medication.',
    'No way to anchor a course to a biological event such as a menstrual cycle.',
    'Plans that change often (one pill now, two next week) are awkward to model.',
    'Multiple profiles, caregiver sharing, PDF reports and refill alerts sit behind subscriptions.',
    'Free apps often monetize through data partnerships or interruptive ads.',
  ],

  users: [
    {
      title: 'People with complex regimens',
      text: 'Asymmetric plans mixing daily, monthly, seasonal, cycle-based and on-demand doses. My own regimen is the reference test suite.',
    },
    {
      title: 'Long-term patients and the people who support them',
      text: 'A factual log of what was taken, when, and what was skipped gives patient and doctor a shared, objective basis for conversation. DoseSync records adherence, not symptoms.',
    },
  ],

  regimen: [
    { medication: 'Medication 1', pattern: 'Daily, morning', blocks: 'Daily recurrence, named time slot' },
    { medication: 'Medication 2', pattern: 'Days 1 to 15 of every month', blocks: 'Day-of-month range' },
    { medication: 'Medication 3', pattern: 'On demand, at night', blocks: 'PRN' },
    {
      medication: 'Medication 4',
      pattern: 'Daily at lunch with food, October to March',
      blocks: 'Daily recurrence, yearly window, instruction text',
    },
    {
      medication: 'Medication 5',
      pattern: '10 days per month, tied to the menstrual cycle',
      blocks: 'Cycle anchor with offset, course length',
    },
    {
      medication: 'Medications 6 and 7',
      pattern: 'On demand, triggered by events (long flights, immobility)',
      blocks: 'PRN with context label and daily maximum',
    },
    { medication: 'Medication 8', pattern: '3 months, 3 times a day', blocks: 'Course length, multiple times per day' },
  ],

  market: [
    {
      type: 'Feature-rich health ecosystems',
      strengths: 'Detailed reports, stock tracking, symptom logging, caregiver sharing.',
      gap: 'Dense interfaces; scheduling limited to fixed intervals, no calendar days, no cycle-based treatments.',
    },
    {
      type: 'Apps with subscription tiers',
      strengths: 'Interaction checks, caregiver alerts, polished interfaces.',
      gap: 'Profiles, sharing, refill alerts and reports are paid; medication databases often limited to one region.',
    },
    {
      type: 'Minimalist, privacy-first utilities',
      strengths: 'No account, local data, actionable notifications, PRN safeguards.',
      gap: 'Limited support for irregular, event-based or cycle-based treatments.',
    },
  ],

  principles: [
    { title: 'Predictable and calm', text: 'Large buttons, one clear next action, instructions shown next to the dose.' },
    { title: "The user's data belongs to the user", text: 'Local-only in the first release. No account, no tracking, no selling of data.' },
    { title: 'Safety before convenience', text: 'PRN limits, tolerance windows and clear missed-dose handling.' },
    { title: 'Small and focused', text: 'A medication execution tool, not a health record or a social network.' },
  ],

  antiFeatures: [
    'No social or community features (risk of medical misinformation).',
    'No AI medical chatbot: information must be structured, sourced and unambiguous.',
    'No lifestyle micro-tracking; Health Connect and Apple Health already cover it.',
    'No paywall on core features and no limit on the number of medications.',
    'No full health record; that belongs in a separate app.',
  ],

  screens: [
    { image: 'dosesync/calendar.webp', alt: "Month calendar with dose dots, predicted period days and an appointment marker", caption: "Calendar with cycle estimate and appointments" },
    { image: 'dosesync/editor.webp', alt: "Medication editor with name, strength, dose, instructions and color", caption: "Medication editor" },
    { image: 'dosesync/drawer.webp', alt: "Medication drawer with stock counts, low-stock badges and runs-out dates", caption: "Drawer: stock and “runs out around”" },
    { image: 'dosesync/history.webp', alt: "History with 93% taken over 7 days and a bar per medication", caption: "History and adherence" },
    { image: 'dosesync/trip.webp', alt: "Trip planner with Flying ticked twice and a packing list with stock checks", caption: "Trip planner with situations" },
    { image: 'dosesync/dark.webp', alt: "Today view in the dark Burgundy theme", caption: "Dark mode" },
    { image: 'dosesync/simple.webp', alt: "Today view in the simple layout with labelled tabs and larger text", caption: "Simple layout, larger text" },
  ] as CaseStudyImage[],

  // "More screens" carousel at the end of The App tab.
  gallery: [
    { image: 'dosesync/today.webp', alt: "Today view with the next dose and an upcoming appointment", caption: "Today" },
    { image: 'dosesync/appointments.webp', alt: "Today view scrolled to the appointments section", caption: "Appointments on Today" },
    { image: 'dosesync/editor.webp', alt: "Medication editor: name, strength, dose and color", caption: "Adding a medication" },
    { image: 'dosesync/settings.webp', alt: "Settings: layout, light or dark, text size and color themes", caption: "Appearance settings" },
    { image: 'dosesync/about.webp', alt: "About screen: why the app exists and how to send an honest review", caption: "About and feedback" },
    { image: 'dosesync/reasons.webp', alt: "Skip reasons list", caption: "Why a dose was skipped" },
    { image: 'dosesync/calendar.webp', alt: "Month calendar with cycle estimate", caption: "Calendar" },
    { image: 'dosesync/drawer.webp', alt: "Medication drawer", caption: "Drawer" },
    { image: 'dosesync/history.webp', alt: "History and adherence", caption: "History" },
    { image: 'dosesync/trip.webp', alt: "Trip planner", caption: "Trip planner" },
    { image: 'dosesync/dark.webp', alt: "Dark mode", caption: "Dark mode" },
    { image: 'dosesync/lock.webp', alt: "Lock screen", caption: "Lock screen" },
  ] as CaseStudyImage[],

  roadmap: [
    {
      phase: 'MVP 0',
      title: 'Works for me',
      status: 'Done',
      items: [
        'Rule engine: daily, weekdays, day-of-month, interval, seasonal, cycle and PRN',
        'Today view, calendar and medication drawer',
        'Native reminders with Taken, Snooze and Skip actions',
        'Stock counter with low-stock notification; undo restores stock',
        'Taken, skipped and missed states; PRN daily maximum and minimum gap',
        'Encrypted storage (SQLCipher) and JSON backup',
        'Romanian and English from the first screen',
      ],
    },
    {
      phase: 'MVP 1',
      title: 'Google Play release',
      status: 'In progress',
      items: [
        'Cycle tracking with next-start estimate',
        'Tolerance windows and missed-dose handling',
        'Pause without altering history; retroactive logging',
        'Time zone handling when traveling',
        'Depletion estimate and daily adherence timeline',
        'Optional PIN or biometric lock',
        'Color and shape per medication; themes, light and dark mode, text size and a simple layout',
        'Closed test on Google Play',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'For the doctor',
      status: 'Later',
      items: [
        'One-page PDF record',
        'Audit trail when a regimen changes',
        'Travel pack quantity calculator (done early, with situations such as flying)',
        'Home-screen widgets',
        'Optional cloud backup and caregiver sharing, after a privacy review',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Official information',
      status: 'Later',
      items: [
        'Medication lookup from the EMA product information API',
        'Prescriptions and pharmacies (simple appointments were done early)',
        'Food and medication warnings from leaflet text, with source shown',
      ],
    },
  ],

  // Architecture & development tab
  architectureIntro:
    'A hybrid app: an Angular single-page application inside a native shell provided by Capacitor. Business logic lives in plain TypeScript and works without a network. Anything that needs the operating system goes through Capacitor plugins. The first release has no server.',

  layers: [
    { name: 'Presentation', text: 'Angular standalone components with Ionic UI components. Today view, forms, timeline.' },
    { name: 'State', text: 'Angular Signals, so the Today view updates consistently.' },
    {
      name: 'Domain',
      text: 'Rule engine, dose lifecycle, stock and history. Plain TypeScript with no Angular or Capacitor imports, unit tested alone.',
      highlight: true,
    },
    { name: 'Integration', text: 'Capacitor plugins: local notifications, encrypted SQLite, biometrics, preferences.' },
    { name: 'Native OS', text: 'Android SDK and iOS SDK.' },
  ],

  regimenModel: `interface Regimen {
  id: string;
  medicationId: string;
  recurrence?: Recurrence;        // absent = PRN only
  activeWindow?: ActiveWindow;    // date range, or yearly window (Oct to Mar)
  course?: { length: number; unit: 'day' | 'week' | 'month' };
  anchor?: { type: 'cycleStart' | 'fixedDate' | 'firstDose'; offsetDays: number };
  times: DoseTime[];              // clock time or named slot
  prn?: { maxPerDay?: number; minGapHours?: number; contexts?: string[] };
  tolerance: { onTimeMinutes: number; lateMinutes: number };
  pauses: { from: string; to?: string }[];
  instructions?: string;          // for example: with food
}

type Recurrence =
  | { kind: 'daily' }
  | { kind: 'everyNDays'; n: number }
  | { kind: 'weekdays'; days: number[] }
  | { kind: 'dayOfMonthRange'; from: number; to: number };`,

  engineFunctions: [
    {
      name: 'dosesForDate(regimen, date, context)',
      text: 'Pure and deterministic: returns the doses due on one day. Powers the Today view and the unit tests; the reference regimen above is the first test suite.',
    },
    {
      name: 'projectDoses(regimens, from, days)',
      text: 'Produces the next 14 to 30 days of doses. The notification scheduler uses it, because reminders must be planned ahead.',
    },
  ],

  replanEvents: [
    'A regimen is added, edited, paused or resumed',
    'A cycle start is logged or the estimate changes',
    'Time zone or system clock changes',
    'The device restarts or the app is updated',
  ],

  lifecycle: ['Scheduled', 'Taken', 'Skipped', 'Missed'],

  notifications: [
    'Scheduled through the OS alarm mechanism, so reminders fire when the app is closed.',
    'Android 13+ needs runtime notification permission; Android 12+ restricts exact alarms.',
    'Some manufacturers suppress alarms to save battery, so onboarding includes an exemption guide.',
    'Reminders do not survive a reboot or time zone change on their own, so the app re-plans on boot, launch and time zone change.',
    'Actions are idempotent: tapping Taken twice records one dose and decrements stock once.',
    'Users can hide medication names on the lock screen.',
  ],

  privacy: [
    { title: 'No server', text: 'No account, no analytics. Medication data never leaves the device.' },
    { title: 'Encrypted storage', text: 'SQLCipher database with its key in the Android Keystore. Loaded into Signals at startup and written through. The move from the old storage reads the data back before deleting the original.' },
    { title: 'User-owned backup', text: 'JSON export and import; Android cloud backup and device transfer excluded.' },
    { title: 'App lock', text: 'Optional PIN stored only as a salted PBKDF2 hash, with fingerprint or face unlock and a growing wait after wrong tries. A forgotten PIN is recovered with the phone’s own screen lock, so older users are never locked out of their data.' },
    { title: 'GDPR-ready path', text: 'Health data is a special category (Art. 9); cloud features need consent and a security review.' },
  ],

  currentState: [
    {
      label: 'Built',
      text: 'A pure TypeScript rule engine tested against the reference regimen; Signals state; taken, skipped and missed doses; PRN safety checks; native reminders with Taken, Snooze and Skip actions; encrypted SQLite storage; PIN and biometric lock; pause, retroactive logging, supply estimate, adherence history, trip planner with per-trip situations, appointments with reminders; time zones; Romanian and English; light and dark themes with fixed status colors, contrast-tested, and text that scales with the phone. 106 unit tests.',
    },
    { label: 'Not yet', text: 'The model is still one flat Medication rather than separate Regimens, and there is no PDF record yet. Next: the Google Play closed test.' },
  ],

  release: [
    'Build the Android App Bundle with Android Studio and Capacitor.',
    'Complete the Play Console data safety form and publish a privacy policy.',
    'Closed test with at least 12 testers for 14 continuous days, run as structured user acceptance testing.',
  ],

  betaGoals: [
    'Validate the interface with people of different digital skill levels, screen sizes and Android versions.',
    'Stress-test notifications on devices with aggressive battery management.',
    'Collect feedback on the rule builder before production.',
  ],

  risks: [
    { risk: 'Notifications fail on some devices', plan: 'Varied beta hardware, battery onboarding, reschedule on boot' },
    {
      risk: 'Rule builder too complex for non-technical users',
      plan: 'Plain-language summary of each rule ("Every day from October to March at lunch, with food")',
    },
    { risk: 'Recruiting 12 active testers', plan: 'Recruit early; plan for dropouts' },
    { risk: 'Scope creep', plan: 'Anti-feature list; MVP 0 and MVP 1 split' },
    { risk: 'Medical-information liability', plan: 'Official sources only, no advice, clear disclaimers' },
  ],
};
