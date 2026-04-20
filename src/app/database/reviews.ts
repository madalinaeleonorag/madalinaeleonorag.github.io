export interface IReview {
  company: string;
  date: Date;
  position: string;
  category: string;
  reviewer?: string;
  preview?: string;
  review: string;
}

export const STAKEHOLDER_REVIEWS: IReview[] = [
  {
    company: 'Cognizant',
    date: new Date('2024-11-14'),
    position: 'Application Manager',
    category: 'Management',
    reviewer: 'Iris Vanstraelen',
    preview: `You are my favorite developer. I don't think you can further improve... The work is excellent as well. You have taken a <strong>lot of initiative</strong>. [...] You are always thinking about finding good <strong>customer solutions</strong>, so I'm very happy with you.`,
    review: `You are my favorite developer. I don’t think you can further improve I’m not kidding, you are
      very quick in picking up new stories, you ask good questions so we as application manager can in
      fill in the blanks we haven’t thought about. The work is excellent as well. It’s a very difficult topic to
      work on; we have created a whole new application. You have taken a lot of initiative. There aren’t
      many bugs and the ones we have are quickly resolved. You are always thinking about finding good
      customer solutions, so I’m very happy with you. I can’t see any improvements that you can make.
      We are so happy with the way things are handled.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-01-28'),
    position: 'Technical Lead',
    category: 'Leadership',
    reviewer: 'Dragos-Vasile Lungu',
    preview: `She gave a <strong>huge boost</strong> to our Web app development; she came up with a very long list of improvements... The quality of the code she has been writing, and the <strong>overall work quality has been impressive</strong>.`,
    review: `She gave a huge boost to our Web app development; she came up with a very long list of
      improvements to our existing app and managed to implement a lot of those items in just a couple
      of weeks. The quality of the code she has been writing, and the overall work quality has been
      impressive. I would always want her in my team, given the opportunity.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-04-06'),
    position: 'Manager',
    category: 'Management',
    reviewer: 'Jack Taylor',
    preview: `...how quickly our production increased thanks to Madalina. Madalina clearly has a <strong>strong skillset</strong> which benefited our FE team significantly. Madalina worked hard to <strong>develop her colleagues</strong>...`,
    review: `Madalina instantly collaborated with the team and importantly understood our objectives quickly.
      The repeated feedback from the development lead was how quickly our production increased –
      thanks to Madalina. Madalina clearly has a strong skillset which benefited our FE team
      significantly. Madalina worked hard to develop her colleagues and ensured they were
      implementing best practice techniques.`,
  },
  {
    company: 'Cognizant',
    date: new Date('2024-11-15'),
    position: 'Manager',
    category: 'Management',
    reviewer: 'Etienne De Paepe',
    preview: `We appreciate: your <strong>ownership</strong>, your involvement, your <strong>E2E view</strong>... how you take up a key position after replacing the old Tech Lead...`,
    review: `Here is some feedback about your involvement in our team. Overall, we are very happy with your
      contribution to our project and your role in the team. No real learning points could be found, which
      is very good . We appreciate: your ownership, your involvement, your E2E view, testing of your
      changes, the extra tasks you picked up outside of your role: UX design, use of new Kendo table
      component, you being open for feedback and improvements, how you take initiative, your efficient
      & fast way of working, you to be a fast learner, how you take up a key position after replacing the old
      Tech Lead, you to think along with business about problems and solutions, you being a team
      player`,
  },
  {
    company: 'Cognizant',
    date: new Date('2024-11-01'),
    position: 'Process Manager',
    category: 'Management',
    reviewer: 'Kathleen Renard',
    preview: `Not only you help us with designing and developing screens for our end user, you also <strong>think with us</strong> to find the best suitable solution which is <strong>smart and user friendly</strong>.`,
    review: `I promised to send you some feedback about the work we did together. I can only sum up positive
      things about how I experienced you in your job as frontend developer and unofficial screen
      designer:
      <ul><li>Eager to learn, you pick up new aspects of your job and gather the necessary information. It
      can be an international standard or a specific functionality of a tool, information you
      gathered so we could opt for different solutions to solve a problem in the front-end design
      or development.</li>
      <li>Focused: Your focus is always 100% on the job.</li>
      <li>Looking for smart solutions: Not only you help us with designing and developing screens for
      our end user, you also think with us to find the best suitable solution which is smart and
      user friendly and even you propose solutions we did not think of ourselves that meet the
      business requirements. This is more than we would expect from a front-end developer.</li>
      <li>Drive: you have a big drive to do your job as a professional with high quality standards and
      finding solutions for the end users.</li>
      <li>Hard worker: you do not do a 9 to 5 job; you just keep on picking up tasks and help us to
      realize a large set of requirements release after release. Your focus is always to deliver as
      much as possible, even if we come up with extra requirements just before releasing.</li>
      <li>Strong communication skills: you communicate very transparently, directly and to the
      point. This makes it easy to work together and not waste a lot of time discussing as we said
      before.</li></ul>
      It was a pleasure working with you. I wish you all the best.`,
  },
  {
    company: 'IBM',
    date: new Date('2021-06-22'),
    position: 'Frontend Developer',
    category: 'Development',
    reviewer: 'Theodor Palamaru',
    preview: `Her determination to <strong>never give up</strong> and always learn and improve, is what sets her apart... I <strong>highly recommend her</strong> to anyone looking to expand their team(s).`,
    review: `She quickly managed to learn and acquire quite an extensive set of skills. Her determination to
      never give up and always learn and improve, is what sets her apart from many other developers out
      there. It's been a pleasure working with her. She is currently riding the proverbial wave, and I am
      sure she will achieve great things in the future. I highly recommend her to anyone looking to expand
      their team(s).`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-04-20'),
    position: 'Team Lead',
    category: 'Leadership',
    reviewer: 'Andrei-Ioan Popescu',
    preview: `...she managed to <strong>surpass everyone's expectations</strong>. I appreciate the fact that during refinements and clarifications, she <strong>challenges the approach</strong> and the input data.`,
    review: `From early on, she was fully independent from a tech perspective, requiring assistance only to
      understand the features she needed to implement. Even though she is a less experienced front-end
      developer than the former one, seeing her work, I can confirm that she managed to surpass
      everyone’s expectations. She communicates the blockers & issues clearly; she developed complex
      features faster and with increased quality than before. She handled cloud configuration and
      installed the applications that she developed with ease, even though this is out of her area of
      expertise. She is asking everyone for information when she needs it, she is efficiently
      communicating her concerns and thus, every story that she implemented was easily integrated
      with the backend components and the platform. Moreover, I appreciate the fact that during
      refinements and clarifications, she challenges the approach and the input data, and thus we
      managed to increase the quality of the features’ description resulting in better structured stories
      and acceptance criteria. I’m happy that I got the chance to work with her and I would definitely like
      to continue doing this in the future.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-04-20'),
    position: 'Business Analyst',
    category: 'Business/Analysis',
    reviewer: 'Kavitha Padmanabham',
    preview: `Overnight she became an <strong>expert and point of contact</strong> for front-end applications. She has delivered all her tasks at <strong>great speed</strong> and took on several topics instantly.`,
    review: `Overnight she became an expert and point of contact for front-end applications. She has delivered
      all her tasks at great speed and took on several topics instantly. The entire project is happy to have
      her onboard.`,
  },
  {
    company: 'Wooter Apparel',
    date: new Date('2021-09-24'),
    position: 'Full-Stack Developer',
    category: 'Development',
    reviewer: 'Emanuel Cepoi',
    preview: `Her ability to develop high quality products while <strong>under extreme pressure</strong> is something that I look up to... She's also able to make everyone in the team feel that they are <strong>capable of doing more</strong>.`,
    review: `For the past years I had the opportunity to work alongside Madalina on multiple personal and
      commercial projects. She was able to develop features in an extremely elegant and creative way all
      the time. Her ability to develop high quality products while under extreme pressure is something
      that I look up to, not only that she's able to stay calm and professional in difficult situations. She's
      also able to make everyone in the team feel that they are also capable of doing more than they
      expect from themselves.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-10-19'),
    position: 'Team Lead',
    category: 'Leadership',
    reviewer: 'Andrei-Ioan Popescu',
    review: `She tackled new features with ease, always on time and with the highest possible quality. She’s a
      vocal team member and she’s always deeply involved in discovering all the requirements of what
      she needs to implement. Madalina’s strong commitment to having all the details in has helped the
      team get a better understanding of the tasks. I’m confident that she can provide people with the
      support needed to get the job done.`,
  },
  {
    company: 'SS&C Technologies',
    date: new Date('2026-02-01'),
    position: 'Senior Frontend Developer',
    category: 'Development',
    reviewer: 'Tech Lead',
    review: `Madalina proved a very good knowledge of Angular and front-end technologies, which she
      successfully applied to our project. Although the complexity of the project is high, Madalina
      integrated well into the team and started delivering soon after joining the project. She proved she
      was a great team player.`,
  },
  {
    company: 'SS&C Technologies',
    date: new Date('2026-02-01'),
    position: 'Tech Lead',
    category: 'Leadership',
    reviewer: 'Tech Lead',
    review: `Madalina proved to be a highly reliable and skilled front-end developer. She can independently
      take over and deliver complex features; she constantly pays attention to details and is always
      making sure all the acceptance criteria are met. Her positive attitude and excellent communication
      skills made her a great addition to the team.`,
  },
  {
    company: 'SS&C Technologies',
    date: new Date('2026-02-01'),
    position: 'Tech Lead',
    category: 'Leadership',
    reviewer: 'Tech Lead',
    review: `Madalina is a hard-working individual, highly motivated and organized. She has very good
      technical skills and is eager to learn and try new things. From the soft skills point of view, she
      communicates very well and proved to be a great team player.`,
  },
  {
    company: 'SS&C Technologies',
    date: new Date('2026-02-01'),
    position: 'Peer/Team Member',
    category: 'Peer',
    reviewer: 'Peer',
    review: `From the short period of time I worked with her, she is very good from a technical perspective.
      Proactive, good coding style, understand quickly the logic of the code and is able to proceed with
      her tasks without a lot of help. Also communicate well with the team, bringing great energy into the
      teams she is working on, and she can quickly integrate. She knows exactly when to ask for help to
      speed up the delivery, and she is great at estimating how long something will take, which makes
      planning her task easy and smooth. Overall, it's a pleasure working with her.`,
  },
  {
    company: 'SS&C Technologies',
    date: new Date('2026-02-01'),
    position: 'Peer/Team Member',
    category: 'Peer',
    reviewer: 'Peer',
    review: `Keep the desire and courage to try new technologies and also the will to learn new stuff. Clean
      code. Good eye for requirements. Fast learner even when switching projects. She is a reliable
      partner in the projects we are working together. Gives and receives feedback. Questions when
      facing something are not clear. Reliability on solving problems and unblocking others.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-05-02'),
    position: 'Senior Manager',
    category: 'Management',
    reviewer: 'Silvana-Roberta Helal',
    review: `Feedback from both team and local technical lead is positive as Madalina started working on the
      project near stabilization phase but managed to get familiar in a short timeframe with the
      complexity of the project.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-11-07'),
    position: 'Senior Consultant',
    category: 'Business/Analysis',
    reviewer: 'Cristina-Mihaela Antohe',
    review: `She proves her great technical expertise and collaboration skills with every task that is assigned to
      her and is supporting the project teams with business and technical information for successful
      integrations.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-04-20'),
    position: 'Solution Lead',
    category: 'Leadership',
    reviewer: 'Diego Frison Aladren',
    review: `Madalina could quickly take over the tasks assigned to her and she could deliver them with a very
      good quality on the agreed time. Madalina is also a team player, and she knows when she needs to
      raise the hand when an issue appears. I suggest Madalina continue working on this way and not
      stop learning not only frontend technical things but also Cloud and DevOps tools to increase the
      value of her profile.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-11-10'),
    position: 'Project Manager / Scrum Master',
    category: 'Management',
    reviewer: 'Pavol Tomek',
    review: `Madalina is really valuable member, more of self-initiative in areas which are visibly not covered
      well on project will help her to present herself with higher seniority, she is currently operating at the
      next level.`,
  },
  {
    company: 'Deloitte Digital',
    date: new Date('2022-02-07'),
    position: 'Project Manager',
    category: 'Management',
    reviewer: 'Isabela Pecete',
    review: `During her time spent on Alpha space, Madalina has shown a lot of flexibility and maturity. Even
      though she had to change teams and industries, from banking to insurance, her experience has
      been extremely appreciating by our main stakeholders and there have been multiple requests to
      keep her on Alpha. From a technical perspective, she delivers extremely fast and at a high quality.
      For example, she managed to bring visible improvements to the web app in just a couple of weeks,
      as well as mentioning more junior team members. If given the opportunity to match her expertise
      and role desired, she has the ability to make a huge difference; she has the skills and determination
      needed.`,
  },
  {
    company: 'Vodafone',
    date: new Date('2021-11-25'),
    position: 'System Support Engineer',
    category: 'Development',
    reviewer: 'Mihaela Gales',
    review: `Madalina is a very practical person. Working on various projects with her, I was able to see how
      flexible she can be, especially with the help of her vast knowledge in the IT field. In addition to
      intelligence, I noticed that she also has leadership qualities that have been very helpful in any
      project. Attention to detail characterizes her, so it's hard not to get things going almost perfectly
      with her. She is a charismatic, dynamic person with very precise decision-making power. Nothing
      remains unresolved with Madalina!`,
  },
  {
    company: 'IBM',
    date: new Date('2021-09-13'),
    position: 'Project Manager',
    category: 'Management',
    reviewer: 'Raluca Rusu',
    review: `Madalina is always reliable and helps her team members, able to understand the requirements
      and come up with a solution. It was a joy and I always had confidence while working with her. I
      strongly recommend her to any new opportunity and challenge.`,
  },
  {
    company: 'IBM',
    date: new Date('2019-02-15'),
    position: 'Project Manager',
    category: 'Management',
    reviewer: 'Raluca Rusu',
    review: `Madalina had a very good start and path in the project, having in charge a very hard project and
      client on a team, being in front of the client for direct communication and problem solving. I am
      very satisfied with her abilities to create and maintain a good working relationship both with the
      client and her team members, to adapt quickly to change and to help any time need it.`,
  },
  {
    company: 'IBM',
    date: new Date('2021-09-02'),
    position: 'Frontend Developer',
    category: 'Development',
    reviewer: 'Madalin Tuca',
    review: `Madalina was my mentor during my internship period at IBM iX. She was friendly and open from
      the start and rapidly developed a learning plan for me. We had a great mentor-mentee relationship
      during that time, and she was always eager to show me new front-end tricks and quirks. The
      proactivity which she possesses inspired me a lot through my internship period.`,
  },
  {
    company: 'IBM',
    date: new Date('2021-08-06'),
    position: 'Project Manager',
    category: 'Management',
    reviewer: 'Alexandra-Luminita Tanef',
    review: `Appreciate your guidance and helping bring new talent to our wider iX IBM team and also constant
      strong contribution to our project delivery. Keep up the good work!`,
  },
  {
    company: 'IBM',
    date: new Date('2020-12-16'),
    position: 'People Manager',
    category: 'Management',
    reviewer: 'Sorina Radulescu',
    review: `Great job on the project Madalina, the feedback received for the project is very good. Also, I like
      your drive and attitude, and I hope you will continue to invest in your skills as you did until now, and
      more.`,
  },
];
