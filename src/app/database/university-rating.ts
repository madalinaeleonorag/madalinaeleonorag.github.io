// Content for the UniversityRating case study (/projects/university-rating), master's thesis, 2020.
// Source of truth: the UniversityRating repository (Angular 8 + Firestore). Published as "UniView".
// Screenshots are in public/assets/university-rating/; a real reviewer's name is blurred in university.webp.

import { CaseStudy } from '../interfaces/case-study';

export const UNIVERSITY_RATING: CaseStudy = {
  title: 'UniversityRating',
  eyebrow: "Master's thesis · Economic Informatics · 2020",
  slogan: 'Compare Romanian universities and study programmes, with reviews checked by AI before they go live.',
  tagline: 'Angular · Firestore · Azure Text Analytics · Google Maps',
  links: [
    { label: 'Source code', url: 'https://github.com/madalinaeleonorag/UniversityRating' },
  ],
  hero: {
    image: 'university-rating/search.webp',
    alt: 'UniView search: filters for study level, name, description, location, facilities, rating and institution type, above cards for seven universities',
    caption: 'Search with filters, ratings and favourites',
  },
  techStack: ['Angular 8', 'TypeScript', 'RxJS', 'Angular Material', 'Cloud Firestore', 'Azure Text Analytics', 'Google Maps API', 'Google Charts'],

  // Product tab
  summary: [
    'UniversityRating, published as UniView, is the web application I built for my master’s thesis in Economic Informatics at the Romanian-American University. Future students search universities, faculties and bachelor’s, master’s and doctoral programmes, and see each one’s courses, facilities, location and reviews.',
    'Content comes from two sides. Universities manage their own pages through representative accounts that an administrator verifies. Students leave star ratings and comments, and every comment goes through sentiment analysis in Azure Text Analytics: neutral and positive comments are published at once, negative ones wait for an administrator.',
  ],
  idea: {
    intro: 'Bring information about universities into one place, kept up to date by a representative of each institution, with reviews filtered so they do not mislead future students.',
    points: [
      'Future students had to search each university’s website without guidance, and those websites gave no authorised person a way to keep information current.',
      'Opinions about universities lived on social networks and forums, with no control, which created confusion.',
      'Of the three similar platforms compared (UniApply, Optiuni.ro and Study in Romania), none let students write reviews or give ratings.',
    ],
  },
  roles: [
    {
      title: 'Student',
      text: 'Anyone looking for a university; an account is needed to review.',
      can: ['Search and filter at every study level', 'Save favourites', 'Rate and comment on universities and faculties'],
    },
    {
      title: 'University representative',
      text: 'A student account upgraded after an administrator approves a request.',
      can: ['Ask to add or claim a university', 'Edit the university page in place', 'Add faculties, programmes and courses'],
    },
    {
      title: 'Administrator',
      text: 'Keeps the content trustworthy.',
      can: ['Approve or decline representative requests, with a reason', 'Approve or decline flagged reviews', 'Follow statistics and reports'],
    },
  ],
  featureGroups: [
    {
      title: 'Search and compare',
      text: 'One search for every level of study, with the filters a future student actually uses.',
      shots: [
        { image: 'university-rating/search.webp', alt: 'Search results: seven university cards with ratings, review counts and favourite hearts', caption: 'Search and filters' },
        { image: 'university-rating/university.webp', alt: 'University page: description, faculties, vision, values, strategic programmes, facilities, contact with map, and reviews', caption: 'University page' },
      ],
      features: [
        { title: 'Five levels', text: 'Universities, faculties, and bachelor’s, master’s and doctoral programmes.' },
        { title: 'Filters', text: 'Name, description, location, facilities and public or private, sorted by rating.' },
        { title: 'Favourites', text: 'A heart on every card, kept per level on the student’s profile.' },
        { title: 'University pages', text: 'Mission, vision, values, strategic programmes, 15 kinds of facilities, contact details and a map.' },
      ],
    },
    {
      title: 'Faculties, programmes and courses',
      text: 'The detail a student needs to choose a programme, not only a university.',
      shots: [
        { image: 'university-rating/faculty.webp', alt: 'Faculty page with tabs for bachelor’s, master’s and doctoral programmes; a programme shows years, semesters, skills, careers and courses', caption: 'Faculty and programmes' },
        { image: 'university-rating/course.webp', alt: 'Course details: credits, evaluation, hours, semester and objectives', caption: 'Course details' },
      ],
      features: [
        { title: 'Programmes by level', text: 'Bachelor’s, master’s and doctoral tabs on each faculty page.' },
        { title: 'Programme details', text: 'Years, semesters, general skills, career paths and the list of courses.' },
        { title: 'Course details', text: 'Credits, evaluation, hours, semester and objectives.' },
      ],
    },
    {
      title: 'Reviews with AI moderation',
      text: 'Students rate and comment; a sentiment check decides what goes live at once.',
      shots: [],
      features: [
        { title: 'Stars and comments', text: 'For universities and faculties.' },
        { title: 'Sentiment check', text: 'Each comment is analysed by Azure Text Analytics before it is saved.' },
        { title: 'Negative comments wait', text: 'They are held for an administrator, and the author sees a note that the review is being checked.' },
        { title: 'Declined reviews do not count', text: 'They are hidden and left out of the rating.' },
      ],
    },
    {
      title: 'Verified university accounts',
      text: 'Universities keep their own pages up to date, after an administrator checks who is asking.',
      shots: [
        { image: 'university-rating/user-details.webp', alt: 'Profile page showing an approved request and a button to view and edit the university', caption: 'Approved request on the profile' },
        { image: 'university-rating/university-edit.webp', alt: 'University page in edit mode: type, name, website, description, faculties table, vision, values, facilities and contact', caption: 'Editing a university in place' },
      ],
      features: [
        { title: 'Request', text: 'Name, type, description, contact, location, facilities, logo and photos.' },
        { title: 'Approval', text: 'The administrator approves, which creates the university page and links it to the account, or declines with a reason the user sees.' },
        { title: 'Edit in place', text: 'Representatives edit the same pages students see, section by section.' },
      ],
    },
    {
      title: 'Administration and reports',
      text: 'An overview of users and content, and queues for what needs a decision.',
      shots: [
        { image: 'university-rating/piecharts.webp', alt: 'Dashboard of pie charts: education level, university types, users by sex, consent, request statuses, faculties, photos and programmes per university', caption: 'Statistics' },
        { image: 'university-rating/raports.webp', alt: 'Reports table of bachelor’s programmes with courses, years, semesters, skills and faculty', caption: 'Reports' },
      ],
      features: [
        { title: 'Statistics', text: 'About twenty charts on users, institutions, programmes, facilities and requests.' },
        { title: 'Reports', text: 'Tables for universities, faculties, programmes and users.' },
        { title: 'Queues', text: 'Representative requests and flagged reviews, each split into pending, approved and declined.' },
      ],
    },
    {
      title: 'Others',
      text: '',
      shots: [],
      features: [
        { title: 'Romanian and English', text: 'Interface text through translation files.' },
        { title: 'Legal pages and consent', text: 'Terms, privacy policy, copyright and GDPR consent on the profile.' },
        { title: 'Directions', text: 'A route on the map from the student to the university.' },
      ],
    },
  ],
  gallery: [
    { image: 'university-rating/homepage.webp', alt: 'Home page: Discover the universities in Romania, with search, review and claim explained', caption: 'Home' },
    { image: 'university-rating/search.webp', alt: 'Search results', caption: 'Search' },
    { image: 'university-rating/university.webp', alt: 'University page', caption: 'University' },
    { image: 'university-rating/faculty.webp', alt: 'Faculty page', caption: 'Faculty' },
    { image: 'university-rating/course.webp', alt: 'Course details', caption: 'Course' },
    { image: 'university-rating/user-details.webp', alt: 'Profile with request status', caption: 'Profile' },
    { image: 'university-rating/university-edit.webp', alt: 'University in edit mode', caption: 'Edit mode' },
    { image: 'university-rating/requests.webp', alt: 'A pending representative request with approve and decline buttons', caption: 'Requests queue' },
    { image: 'university-rating/piecharts.webp', alt: 'Pie chart statistics', caption: 'Statistics' },
    { image: 'university-rating/barcharts.webp', alt: 'Bar chart statistics: user ages, facilities usage, class and school levels, locations', caption: 'More statistics' },
    { image: 'university-rating/raports.webp', alt: 'Reports table', caption: 'Reports' },
  ],

  // Architecture & Development tab
  architectureIntro:
    'An Angular single-page application on Firebase, with no server code of its own. Pages read and write Cloud Firestore through AngularFire, sign users in with Firebase Authentication, store logos and photos in Firebase Storage, and call Azure Text Analytics and Google Maps from the browser.',
  diagram: {
    label: 'Container diagram: an Angular single-page app on Firebase, with Azure AI for review moderation',
    actors: [
      { title: 'Student', text: 'Searches, saves, reviews' },
      { title: 'Representative', text: 'Edits a verified university' },
      { title: 'Administrator', text: 'Approves requests and reviews' },
    ],
    client: {
      label: 'Browser · Angular 8 single-page app',
      boxes: [
        { title: 'Pages + Material components', text: '13 routes; 20 shared components, most of them switching between view and edit mode.' },
        { title: 'Services (RxJS)', text: 'Data, auth, dashboard and text analysis services returning Observables.' },
      ],
    },
    backend: {
      label: 'Firebase',
      boxes: [
        { title: 'Cloud Firestore', text: 'Universities, faculties, programmes, courses, reviews, requests, users' },
        { title: 'Auth · Storage · Hosting', text: 'Accounts; logos and photos; the static build' },
      ],
    },
    external: [
      { title: 'Azure Text Analytics', text: 'Sentiment of each review comment' },
      { title: 'Google Maps API', text: 'Maps, places, geocoding, directions' },
      { title: 'Google Charts', text: 'Admin statistics' },
    ],
  },
  layers: [
    { name: 'Pages', text: 'Search, university and faculty details, favourites, profile, requests, review queue, dashboard, legal pages.' },
    { name: 'Components', text: 'Reusable “editable” blocks (lists, chips, facilities, star rating, comments) that show content to students and edit it for representatives.' },
    {
      name: 'Services',
      text: 'All data access and outside calls. Pages subscribe to Firestore collections as Observables, so changes from another user appear without a reload.',
      highlight: true,
    },
    { name: 'Models', text: 'Typed classes for every document (University, Faculty, Review, Request, User), with safe defaults for missing fields.' },
    { name: 'Integrations', text: 'AngularFire, the Azure Text Analytics SDK, Google Maps (AGM) and Google Charts.' },
  ],
  dataModel: {
    intro: 'Firestore collections follow the hierarchy a student browses: university, faculty, programme, course. Reviews and requests point to them by id.',
    rows: [
      { name: 'University', holds: 'Name, type, description, mission, vision, values, strategic programmes, facilities, contact, location, logo, photos, rating' },
      { name: 'Faculties', holds: 'Name, description, location, logo, study guide, university id, ids of its programmes' },
      { name: 'Bachelors · Masters · Doctorals', holds: 'Name, years, semesters, general skills, career paths, courses, faculty id' },
      { name: 'Courses', holds: 'Name, credits, evaluation, hours, semester, objectives, study level' },
      { name: 'Reviews', holds: 'Stars, comment, date, status (approved, pending, declined), author, university or faculty id' },
      { name: 'Requests', holds: 'University details from the representative, status, administrator’s answer, author' },
      { name: 'Users', holds: 'Profile, role, consent, favourites per level, request and university ids' },
    ],
    image: { image: 'university-rating/database.webp', alt: 'Entity-relationship diagram in Romanian: user, request, university, review, faculty, bachelor’s, master’s and doctoral programmes, course', caption: 'Entity-relationship diagram from the thesis' },
  },
  flows: [
    {
      title: 'Publishing a review',
      steps: [
        'A signed-in student picks a number of stars and writes a comment.',
        'The comment is sent to Azure Text Analytics for sentiment analysis.',
        'Positive, neutral or mixed: the review is saved as approved and appears at once.',
        'Negative: it is saved as pending and the student sees that an administrator will check it.',
        'The administrator approves or declines it in the review queue. Declined reviews are hidden and left out of the rating.',
      ],
    },
    {
      title: 'Becoming a university representative',
      steps: [
        'A student account sends a request with the university’s details, logo, photos, facilities and location. It is saved as pending and linked to the profile.',
        'An administrator reviews it in the requests queue.',
        'Approve: the university page is created from the request, and the account is linked to it and becomes a representative.',
        'Decline: the request is closed with a reason, shown on the user’s profile.',
        'The representative then edits the page and adds faculties, programmes and courses.',
      ],
    },
  ],
  codeSample: {
    title: 'Moderation in a few lines',
    intro: 'The decision is a single rule on the sentiment label Azure returns. Everything that is not clearly negative is trusted; the rest waits for a person.',
    code: `addComment() {
  this.review.comment = this.commentText;
  this.azureService.sentimentAnalysis(this.review.comment).then((res) => {
    const data = new TextAnalyticData(res[0]);
    if (data.sentiment !== 'negative') {
      this.review.status = 'approved';
    } else {
      this.review.status = 'pending';
      this.negativeSentimentWarning = true;
    }
    this.firebaseService.addComment(this.review);
  });
}`,
  },
  lookingBack: [
    {
      then: 'Firestore security rules allow anyone to read and write every document.',
      today: 'Rules per collection: only the author creates a review, only an administrator changes its status, only the linked representative edits a university.',
    },
    {
      then: 'The sentiment check runs in the browser, with the Azure key in the client bundle, so a modified client could mark its own review as approved.',
      today: 'A server function triggered by each new review calls Azure and sets the status, with the key kept on the server.',
    },
    {
      then: 'Roles are checked only in the interface: admin links are hidden, but the routes are open.',
      today: 'Roles as Firebase custom claims, enforced by route guards and security rules.',
    },
    {
      then: 'Statistics load whole collections into the browser.',
      today: 'Counters kept up to date by server functions, read as a few small documents.',
    },
    {
      then: 'One data service of about 800 lines serves every page, and the generated tests were never filled in.',
      today: 'A service per feature, and tests for the moderation and approval flows first.',
    },
  ],

  // Thesis tab, from the dissertation (in Romanian).
  thesis: {
    title: 'University Rating: an application for listing information about universities and reviewing them',
    sections: [
      {
        heading: 'About the dissertation',
        paragraphs: [
          'Master’s dissertation at the Faculty of Managerial Informatics, Romanian-American University, Bucharest, 2020. Supervisor: Alexandru Tăbușcă.',
          'It analyses the existing systems and what users need, then designs and builds the application: finding the gaps in existing apps, defining inputs and outputs, choosing the technology, planning the work, choosing a way to monetise, and assessing how useful and efficient the result is.',
        ],
      },
      {
        heading: 'Existing platforms',
        paragraphs: [
          'Three similar platforms were compared. UniApply lets students apply to programmes across Europe but gives only short information about institutions. Optiuni.ro filters universities and compares programmes, in Romanian and English, and links to online admission. Study in Romania presents the Romanian universities’ offer.',
          'None of them let students write reviews or give ratings, and UniApply and Optiuni.ro gave universities no way to manage their own information. Those two gaps define UniversityRating.',
        ],
      },
      {
        heading: 'Technology choices',
        paragraphs: [
          'A web application, because most people look things up on their phone and a web app works on phones and computers regardless of the operating system.',
          'Angular 8 for a single-page application, and Cloud Firestore as a document database: JSON-like collections with less denormalisation, offline support on the device, and real-time updates. Firebase hosting for fast delivery of a graphics-heavy app, reliability and SSL.',
        ],
      },
      {
        heading: 'Data, reports and interface',
        paragraphs: [
          'Nine entities (users, universities, faculties, bachelor’s, master’s and doctoral programmes, courses, requests and reviews), each specified field by field, with an entity-relationship diagram.',
          'Fourteen reports, from the lists of universities, faculties and programmes to statistics on users’ ages and education, facility usage and university locations.',
          'The interface uses shades of classic blue, named colour of the year at the time, in a modern style aimed at young users, with the main colour easy to replace later.',
        ],
      },
      {
        heading: 'Planning and monetisation',
        paragraphs: [
          'The plan estimates a team of a project manager, a senior database developer, a senior web developer and a junior web developer: about 1,100 hours and roughly 52,800 lei.',
          'The monetisation chapter finds that in-app advertising was still the largest source of app revenue, and compares its forms: banners, interstitials, native ads, partnerships between apps and rewarded ads.',
        ],
      },
      {
        heading: 'Conclusions',
        paragraphs: [
          'The application shortens the time needed to find accurate, current information about universities and helps future students choose a university or programme. It needs only a browser and an internet connection, and no special training.',
        ],
      },
    ],
  },
};
