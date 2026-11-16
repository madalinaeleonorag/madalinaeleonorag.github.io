// Content for the Waffic case study (/projects/waffic), bachelor's thesis, 2018.
// Source of truth: the Waffic repository (Vue 2 + Firebase). Screenshots are in public/assets/waffic/.
// Admin screens that show real users' names and emails are left out on purpose.

import { CaseStudy } from '../interfaces/case-study';

export const WAFFIC: CaseStudy = {
  title: 'Waffic',
  eyebrow: "Bachelor's thesis · Economic Informatics · 2018",
  slogan: 'Weather and traffic for the road ahead, on one screen.',
  tagline: 'Vue.js · Firebase · Google Maps · AccuWeather',
  links: [
    { label: 'Live demo', url: 'https://waffic1997.web.app/' },
    { label: 'Source code', url: 'https://github.com/madalinaeleonorag/Waffic' },
  ],
  hero: {
    image: 'waffic/map.webp',
    alt: 'Waffic map: a driving route from Bucharest to Brașov, with the weather at the start and at the destination in the top bar',
    caption: 'The route and the weather at both ends of the trip',
  },
  techStack: ['Vue 2', 'Vuex', 'Vue Router', 'Vuetify', 'Firebase', 'Google Maps API', 'AccuWeather API', 'Google Charts'],

  // Product tab
  summary: [
    'Waffic (weather + traffic) is the web application I built for my bachelor’s thesis in Economic Informatics at the Romanian-American University. Before a drive, a user picks a destination and sees the driving route on a map, with the current weather at the start and at the destination. Every search is kept as a travel history.',
    'It also has a business side. Companies can buy a collaboration plan that puts their location on the map and alerts drivers who pass nearby. Administrators answer contact messages and follow usage through statistics and reports.',
  ],
  idea: {
    intro: 'Bring traffic and weather information into one interface, so drivers can avoid delays caused by not knowing the weather at their destination.',
    points: [
      'The weather where you start says little about the weather where you arrive, hours later.',
      'Checking a navigation app and a weather app in turn, during the trip, is slow and distracting.',
      'Local businesses along a route had no simple way to reach drivers passing by.',
    ],
  },
  roles: [
    {
      title: 'Visitor',
      text: 'Anyone who opens the site.',
      can: ['See the collaboration plans', 'Read the tutorial', 'Send a contact message', 'Create an account'],
    },
    {
      title: 'Driver',
      text: 'A signed-in user.',
      can: ['Plan a trip with route and weather', 'Keep, star and delete past trips', 'Edit personal details', 'Buy a collaboration plan for a business'],
    },
    {
      title: 'Administrator',
      text: 'A user marked as admin in the database.',
      can: ['Answer and archive contact messages', 'Follow statistics and reports', 'Search users, collaborations and destinations'],
    },
  ],
  featureGroups: [
    {
      title: 'Route and weather on one screen',
      text: 'Type a destination in the top bar. The map draws the driving route from where you are, and the top bar shows the weather at both ends.',
      shots: [{ image: 'waffic/map.webp', alt: 'Map with a driving route from Bucharest to Brașov, company pins, and weather for both cities', caption: 'Route, pins and weather' }],
      features: [
        { title: 'Destination search', text: 'Google Places autocomplete in the top bar.' },
        { title: 'Driving route from your location', text: 'The browser’s location is the start; Google Directions draws the route.' },
        { title: 'Weather at both ends', text: 'Current conditions from AccuWeather, with an icon and temperature for the start and the destination.' },
        { title: 'Kept up to date', text: 'Route and weather refresh every 10 minutes while the map is open.' },
      ],
    },
    {
      title: 'Travel history',
      text: 'Every trip searched is saved, so frequent routes are one tap away.',
      shots: [{ image: 'waffic/travel-history.webp', alt: 'Travel history table with start, destination, date, delete and favourite star for each trip', caption: 'Travel history with favourites' }],
      features: [
        { title: 'Saved automatically', text: 'Start city, destination and date for each search.' },
        { title: 'Favourites', text: 'Star the trips you repeat; delete the ones you do not need.' },
      ],
    },
    {
      title: 'Collaborations for businesses',
      text: 'Companies buy a plan and appear on every driver’s map.',
      shots: [{ image: 'waffic/collaborations.webp', alt: 'Five collaboration plans from 7 days for 5 RON to 365 days for 75 RON, with a warning that a new plan replaces the active one', caption: 'Collaboration plans' }],
      features: [
        { title: 'Five plans', text: 'From 7 days for 5 RON to a year for 75 RON. A new plan replaces the active one, and the page says so before you buy.' },
        { title: 'Company pins', text: 'Each active company is a marker on the map, with its name on click.' },
        { title: 'Nearby alert', text: 'When a driver is within about 500 m of a company, Waffic shows its name and description.' },
      ],
    },
    {
      title: 'Administration',
      text: 'A separate menu section for administrators, visible only to them.',
      shots: [
        { image: 'waffic/admin-account.webp', alt: 'Side menu with Administration: messages, statistics and reports, search', caption: 'Admin menu' },
        { image: 'waffic/statistics.webp', alt: 'Statistics: pie charts for users with and without collaborations and history, top localities, plans and ages, an age histogram and all searched destinations', caption: 'Statistics and reports' },
      ],
      features: [
        { title: 'Messages', text: 'Contact messages in a table; mark as answered or delete.' },
        { title: 'Statistics and reports', text: 'Users with and without collaborations or trips, age distribution, top localities, plans and destinations, drawn with Google Charts.' },
        { title: 'Search', text: 'Find users by name, collaborations by date range, and how often each destination was searched.' },
      ],
    },
    {
      title: 'Accounts and consent',
      text: 'Email and password accounts, with the essentials around them.',
      shots: [{ image: 'waffic/signup.webp', alt: 'Sign-up dialog: email, name, surname, locality, birth date, password and confirmation', caption: 'Sign-up' }],
      features: [
        { title: 'Sign-up and password reset', text: 'Firebase Authentication, with a reset email for forgotten passwords.' },
        { title: 'GDPR consent', text: 'A consent dialog after sign-in until the user accepts.' },
        { title: 'Tutorial', text: 'A help page that explains every screen, in Romanian like the rest of the interface.' },
      ],
    },
  ],
  gallery: [
    { image: 'waffic/homepage.webp', alt: 'Home page with the Waffic logo and buttons to sign in or create an account', caption: 'Home' },
    { image: 'waffic/signup.webp', alt: 'Sign-up dialog', caption: 'Sign-up' },
    { image: 'waffic/map.webp', alt: 'Map with route and weather', caption: 'Map' },
    { image: 'waffic/travel-history.webp', alt: 'Travel history', caption: 'Travel history' },
    { image: 'waffic/collaborations.webp', alt: 'Collaboration plans', caption: 'Collaborations' },
    { image: 'waffic/admin-account.webp', alt: 'Administrator menu', caption: 'Admin menu' },
    { image: 'waffic/statistics.webp', alt: 'Statistics charts', caption: 'Statistics' },
    { image: 'waffic/tutorial.webp', alt: 'Tutorial page in Romanian', caption: 'Tutorial' },
  ],

  // Architecture & Development tab
  architectureIntro:
    'A single-page application with no server code of its own. Vue components talk directly to Firebase (Authentication and the Realtime Database) and call Google Maps and AccuWeather from the browser. The production build is made with webpack, includes a web app manifest and a service worker, and is served from Firebase Hosting.',
  diagram: {
    label: 'Container diagram: a Vue single-page app on Firebase, calling map and weather APIs from the browser',
    actors: [
      { title: 'Driver', text: 'Plans trips, keeps a history' },
      { title: 'Business', text: 'Buys a plan to appear on the map' },
      { title: 'Administrator', text: 'Messages, statistics, search' },
    ],
    client: {
      label: 'Browser · Vue 2 single-page app',
      boxes: [
        { title: 'Vuetify views + Vue Router', text: '12 routes; a guard sends signed-out users home.' },
        { title: 'Vuex store', text: 'User, role, location, destination and weather. Firebase listeners commit here.' },
      ],
    },
    backend: {
      label: 'Firebase',
      boxes: [
        { title: 'Realtime Database', text: 'Users, trips, collaborations, plans, messages' },
        { title: 'Authentication · Hosting', text: 'Email and password; the static build' },
      ],
    },
    external: [
      { title: 'Google Maps JavaScript API', text: 'Map, Directions, Geocoder, Places' },
      { title: 'AccuWeather API', text: 'Location key, then current conditions' },
      { title: 'Google Charts', text: 'Admin statistics' },
    ],
  },
  layers: [
    { name: 'Views', text: 'One Vuetify component per screen: map, history, collaborations, statistics, search, messages.' },
    { name: 'Routing', text: 'Vue Router with an auth guard on every page that needs an account.' },
    {
      name: 'State',
      text: 'Vuex. Actions open real-time Firebase listeners and commit mutations; getters feed the views, so the map, top bar and history stay in sync.',
      highlight: true,
    },
    { name: 'Data', text: 'Firebase Realtime Database paths, read with live “value” listeners and written with set, push and update.' },
    { name: 'Integrations', text: 'Google Maps, AccuWeather (XMLHttpRequest) and Google Charts, loaded in the browser.' },
  ],
  dataModel: {
    intro: 'The Realtime Database is one JSON tree. Each user’s data sits under their Firebase user id, so a listener on one path follows exactly one user.',
    rows: [
      { name: 'UserDetails/{uid}', holds: 'Name, locality, birth date, email, phone, admin flag, GDPR consent, plans bought' },
      { name: 'userDestinationsHistory/{uid}/{id}', holds: 'Start, destination, date, favourite' },
      { name: 'Collaborations/{uid}', holds: 'Company name, description, coordinates, start date, plan. One active plan per account.' },
      { name: 'TypesOfCollaborations', holds: 'Plan name, duration in days, price, description' },
      { name: 'ContactMessages', holds: 'Email, name, message, answered flag' },
    ],
    image: { image: 'waffic/database.webp', alt: 'Firebase console tree: Collaborations, ContactMessages, TypesOfCollaborations, TypesOfPayment, UserDetails, userDestinationsHistory', caption: 'The database tree in the Firebase console' },
  },
  flows: [
    {
      title: 'Planning a trip',
      steps: [
        'On sign-in, the store opens live listeners on the user’s profile, role and consent.',
        'The browser’s location becomes the start point.',
        'The user picks a destination in the autocomplete; the store keeps it.',
        'The map watches the destination and asks Google Directions for a driving route.',
        'For each end, AccuWeather is called twice: once for a location key, then for current conditions. Icon and temperature go to the store and the top bar.',
        'The trip is saved to the user’s history, and route and weather refresh every 10 minutes.',
      ],
    },
    {
      title: 'Company pins and nearby alerts',
      steps: [
        'A business buys a plan; its details and coordinates are written to Collaborations, replacing any active plan.',
        'The map listens to Collaborations and draws one marker per company.',
        'For each company, the app estimates the distance from the driver. Under about 500 m it shows the company’s name and description.',
      ],
    },
  ],
  codeSample: {
    title: 'Live data through the store',
    intro: 'Every list in Waffic follows the same pattern: a Vuex action opens a Firebase listener once, and mutations keep the state in step with the database, including deletions made in another tab. Simplified:',
    code: `// Vuex action: keeps the trip history in sync with the database
getData({ commit }) {
  return firebase.database()
    .ref('userDestinationsHistory/' + this.state.user.uid)
    .on('value', snap => {
      const trips = snap.val() || {};
      const keys = Object.keys(trips);
      keys.forEach(key => commit('gotuserHistory', { key, ...trips[key] }));
      commit('getKeys', keys); // drops trips deleted elsewhere
    });
}`,
  },
  lookingBack: [
    {
      then: 'API keys for Google Maps and AccuWeather are in the client code and the repository.',
      today: 'Keys restricted by domain, and weather calls through a small server function that also caches results.',
    },
    {
      then: 'The route guard only checks that someone is signed in. Admin pages are hidden in the menu, not protected.',
      today: 'Roles as Firebase custom claims, checked by route guards and enforced by database security rules.',
    },
    {
      then: 'Weather is fetched over plain HTTP with nested XMLHttpRequests, and a 3-second timer waits for both answers.',
      today: 'HTTPS calls with fetch and async/await, waiting on both ends with Promise.all.',
    },
    {
      then: 'Distance to a company is a straight-line formula on latitude and longitude, which distorts with direction.',
      today: 'The Maps geometry library (or the haversine formula) for real distances in metres.',
    },
    {
      then: 'Statistics are computed in the browser by downloading every user and every trip.',
      today: 'Totals kept up to date by server functions, so the dashboard reads a few small documents.',
    },
    {
      then: 'Plain JavaScript and no automated tests.',
      today: 'TypeScript, and unit tests for the store and the trip flow.',
    },
  ],

  // Thesis tab, from the thesis defence presentation (in Romanian).
  thesis: {
    title: 'Waffic: an integrated application for following traffic and weather conditions',
    sections: [
      {
        heading: 'About the thesis',
        paragraphs: [
          'Bachelor’s thesis at the Faculty of Managerial Informatics, Romanian-American University, Bucharest, class of 2018. Supervisor: Alexandru Tăbușcă.',
          'Purpose: bring traffic and weather information into a single interface. Use: avoid delays caused by missing weather information at the destination, and by switching between specialised apps during the trip.',
        ],
      },
      {
        heading: 'Research and analysis',
        paragraphs: [
          'The thesis starts with a short history of the field and a review of the apps drivers already used. It maps the information flow of the existing system and the ways it could be improved, and includes a survey asking potential users how useful such an app would be.',
        ],
      },
      {
        heading: 'Design',
        paragraphs: [
          'The overall design defines the application’s objectives, the reports it produces, the coding system, the data and processing models and the entity-relationship diagram. It also covers the choice of technology and a plan of resources and schedule.',
          'The detailed design covers the logical and physical design of inputs and outputs, the database, the system diagram and the interface.',
        ],
      },
      {
        heading: 'Monetising web applications',
        paragraphs: [
          'A separate chapter compares freemium and premium business models across app categories, from navigation and productivity to games and social networks. In the app, revenue comes from paid collaboration plans for businesses, while drivers use it for free.',
        ],
      },
      {
        heading: 'Conclusions',
        paragraphs: [
          'Waffic shortens the time drivers spend checking information and helps them avoid delays in traffic or at the destination caused by the weather. It is easy to use for anyone who wants real-time information for a safer trip.',
        ],
      },
    ],
  },
};
