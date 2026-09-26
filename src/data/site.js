// Central place to edit navigation structure, roles, and research topics.
// Update titles/slugs here and the nav + index pages stay in sync.

export const site = {
  name: 'Jessica Eberle',
  tagline: 'Oceanographer — Supporting Science at Sea',
};

export const researchTopics = [
  {
    slug: 'cephalopods',
    title: 'Cephalopod Research',
    blurb: 'Studies on cephalopod biology and behavior.',
    body: [
      'TODO: describe your cephalopod research — questions you investigate, species studied, and methods used.',
      'TODO: link any publications, posters, or conference talks related to this work.',
    ],
  },
  {
    slug: 'microbiology',
    title: 'Microbiology',
    blurb: 'Marine microbial ecology and lab work.',
    body: [
      'TODO: describe your microbiology research — topics, techniques, and collaborators.',
      'TODO: link any publications or projects related to this work.',
    ],
  },
];

export const seaRoles = [
  {
    slug: 'science-coordinator',
    title: 'Science Coordinator',
    blurb: 'Coordinating science parties and cruise logistics.',
    body: [
      'TODO: describe your responsibilities as Science Coordinator — cruises, programs, and teams you supported.',
    ],
  },
  {
    slug: 'science-manager',
    title: 'Science Manager',
    blurb: 'Managing shipboard science operations and equipment.',
    body: [
      'TODO: describe your responsibilities as Science Manager — vessels, equipment, and operations you managed.',
    ],
  },
  {
    slug: 'marine-technician',
    title: 'Marine Technician',
    blurb: 'Operating and maintaining shipboard scientific systems.',
    body: [
      'TODO: describe your responsibilities as a Marine Technician — systems maintained, cruises supported.',
    ],
  },
  {
    slug: 'scientist',
    title: 'Scientist',
    blurb: 'Conducting research and sample collection at sea.',
    body: [
      'TODO: describe your work as a scientist at sea — expeditions, sample collection, and findings.',
    ],
  },
];

export const dataVizProjects = [
  {
    slug: 'map-visualization',
    title: 'Map Visualization',
    blurb: 'Interactive maps of cruise tracks and sampling stations.',
    body: [
      'TODO: describe this project — what data it visualizes and the tools used to build it.',
    ],
    repoUrl: 'https://github.com/your-username/map-visualization',
  },
  {
    slug: 'sealog-guide',
    title: 'SeaLog ID Quick Guide',
    blurb: 'A quick-reference guide for SeaLog event IDs.',
    body: [
      'TODO: describe this project — what it does and how it helps at-sea data logging.',
    ],
    repoUrl: 'https://github.com/your-username/sealog-id-guide',
  },
];
