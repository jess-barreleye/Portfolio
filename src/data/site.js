// Central place to edit navigation structure, roles, and research topics.
// Update titles/slugs here and the nav + index pages stay in sync.

export const site = {
  name: 'Jessica Eberle',
  tagline: 'Oceanographer & Science Operations',
  bio: [
    "I'm an oceanographer, marine technician, and scientific diver from Germany with a passion for turning scientific goals into well-executed field operations. Over the past decade, I've worked everywhere from molecular laboratories to world-class research vessels, supporting oceanographic projects from planning and mobilization through at-sea operations and post-cruise wrap-up.",
    'Having spent over 300 days at sea and more than 10 years working in a wide range of laboratory environments, I thrive at the intersection of science and operations. I enjoy bringing together multidisciplinary teams, building collaborative workflows, maintaining laboratory and scientific equipment, and solving problems calmly when conditions change. My goal is always the same: to ensure scientists can focus on their research by providing dependable operational support before, during, and after every expedition.',
  ],
  stats: [
    { value: '300+', label: 'Days at Sea' },
    { value: '10+', label: 'Years in Laboratories' },
  ],
  contactEmail: 'jeberle@barreleyetech.com',
};

export const researchTopics = [
  {
    slug: 'cephalopods',
    title: 'Cephalopod Research',
    blurb: 'Skin patterning and development in cuttlefish.',
    body: [
      'Elucidating the control and development of skin patterning in cuttlefish.',
      'Reiter, S., …, Eberle, J., et al. Nature 562: 361–366.',
    ],
  },
  {
    slug: 'microbiology',
    title: 'Microbiology',
    blurb: 'Marine molecular biology, eDNA/RNA extraction, and sterile lab workflows.',
    body: [
      "My work has focused heavily on marine microbiology and environmental DNA/RNA extractions, using sterile methods. I'm used to working with hazardous materials and maintaining strict contamination control — research positions across a Max Planck Institute, MBARI, and GEOMAR gave me a deep respect for what it takes to keep a multi-user lab organized, stocked, and sterile.",
      'Selected publications:',
      'Eukaryotic algal community composition of tropical environments from solar salterns to the open sea. C.A. Eckmann, J.S. Eberle, et al. Frontiers in Marine Science — Marine Molecular Biology and Ecology.',
      'Glyoxal as an alternative fixative to formaldehyde in immunostaining and super-resolution microscopy. Richter, K.N., …, Eberle, J., et al. The EMBO Journal 37(1): 139–159.',
    ],
  },
];

export const seaRoles = [
  {
    slug: 'science-coordinator',
    title: 'Science Coordinator',
    blurb: 'Expedition logistics, GIS-based site selection, and mentoring at sea.',
    body: [
      "In 2024, I coordinated operational planning and shipboard logistics for an international science team during a Schmidt Ocean Institute expedition aboard R/V Falkor (too). Working closely with scientists, marine technicians, and local experts, I supported the team's 15 scientific objectives through GIS-based site selection, expedition planning, and onboard coordination.",
      'I also developed training materials and mentored students in at-sea sampling techniques, ensuring they were well prepared to contribute safely and effectively throughout the expedition — including during the expedition that found the deepest known methane seeps in Chile.',
    ],
  },
  {
    slug: 'science-manager',
    title: 'Science Manager',
    blurb: 'Translating science goals into safe, coordinated deck operations.',
    body: [
      "Translating a science party's research goals into technical requirements to safely execute multi-instrument deployment schedules — including CTD rosettes, tow nets, and ROV dives — while syncing logistics between visiting scientists, subsea teams, and shipboard personnel.",
      'Maintaining safety parameters, technical data streams, and constructive team dynamics when environmental or mechanical factors require plans to pivot.',
    ],
  },
  {
    slug: 'marine-technician',
    title: 'Marine Technician',
    blurb: 'Technical operations, sensor integration, and telepresence support.',
    body: [
      'After coordinating the Atacama Trench expedition aboard R/V Falkor (too), I was invited to return as a contract Marine Technician. Since then, I have supported the Schmidt Ocean Institute during a three-month shipyard period and on multiple research expeditions, providing technical and operational support across a range of scientific missions.',
      'Built, calibrated, and integrated oceanographic sensors (CTD/ROV) and troubleshot subsea navigation hardware and software systems. I also support live-broadcast telepresence aboard R/V Falkor (too), monitoring subsea navigation and troubleshooting technical glitches to keep the world connected to our underwater discoveries.',
    ],
  },
  {
    slug: 'scientist',
    title: 'Scientist',
    blurb: 'Sailing as a member of the science party, sample collection, and capacity building.',
    body: [
      "Before joining ship crews as a Marine Technician and Science Coordinator, I participated in research expeditions as a member of the science party aboard MBARI's R/V Western Flyer, GEOMAR's R/V Alkor and R/V Littorina, and Schmidt Ocean Institute's R/V Falkor (too) — retrieving water samples via ROV and CTD rosette, and processing sediment samples in the wet lab.",
      "Working from the scientists' perspective gave me a first-hand understanding of the challenges they face — from tight timelines and evolving research priorities to the importance of dependable operational support and well-prepared laboratories.",
      'One of my proudest achievements was helping propose, design, and deliver the inaugural summer school in marine science and technology at the Stockton University Marine Field Station, mentoring undergraduate students aboard R/V Petrel as they developed practical field skills.',
    ],
  },
];

export const teachingMentoring = [
  {
    slug: 'summer-school',
    navTitle: 'Summer School',
    title: 'From Surface to Seafloor: An Introduction to Marine Technology and Science at Sea',
    blurb: "Proposing, designing, and delivering Stockton University's inaugural marine science and technology summer school.",
    body: [
      'One of my proudest achievements was helping propose, design, and deliver the inaugural summer school in marine science and technology at the Stockton University Marine Field Station.',
      'The project began with a proposal I co-authored to secure the funding and resources needed to launch the program. Following its approval, I worked with the Marine Field Station staff to develop an interdisciplinary Ocean STEAM curriculum that combined classroom learning with hands-on field experience.',
      'Aboard R/V Petrel, we mentored undergraduate students as they developed practical field skills, integrated marine technology with biological and geological sampling, and learned to work safely and confidently in a shipboard environment. Watching students apply classroom concepts to real-world at-sea operations — and grow in confidence throughout the course — was one of the most rewarding parts of the experience.',
    ],
  },
  {
    slug: 'peerside',
    navTitle: 'Peerside',
    title: 'Peerside',
    blurb: 'Mentoring students entering ocean STEAM fields.',
    body: [
      'In 2025, I joined the Peerside program as a mentor, working to help broaden access and equity for students entering the fields of ocean Science, Technology, Engineering, Arts, and Mathematics (Ocean STEAM).',
    ],
  },
];

export const dataVizProjects = [
  {
    slug: 'gis-site-selection',
    title: 'GIS Site Selection',
    blurb: 'Identifying ROV dive sites and sampling permit areas.',
    body: [
      'To meet the science objectives of a research expedition, I applied GIS analysis to identify potential methane seep Regions of Interest for ROV dive sites, shared with local collaborators and experts.',
      'I also produced maps — such as the Chilean EEZ near Antofagasta — for local authorities to support sampling permit applications.',
    ],
    image: 'chilean-eez-map-antofagasta.jpg',
  },
  {
    slug: 'digital-twins',
    title: '3D Digital Twins',
    blurb: 'Structural models of deep-sea environments from subsea imagery.',
    body: [
      'Using subsea imagery, I build detailed 3D structural models of fragile deep-sea environments for tracking ecological growth over time.',
    ],
    link: { url: 'https://sketchfab.com/mbari', label: 'View models on Sketchfab' },
  },
  {
    slug: 'data-analysis',
    title: 'Data Analysis',
    blurb: 'Quality control and statistical workflows in R.',
    image: 'coral-assembly-3500m-monterey-bay.png',
    body: [
      'For research projects, I analyzed environmental datasets by conducting initial quality control, developing R workflows, exploring various analytical methods, and using statistical tests to interpret the data.',
    ],
  },
  {
    slug: 'ecological-analysis',
    title: 'Ecological Analysis',
    blurb: 'Clustering eDNA samples by community composition.',
    image: 'edna-hierarchical-clustering-analysis.png',
    body: [
      'Hierarchical analysis of eDNA samples, clustered for similarity in community composition, to help interpret ecological patterns across sampling sites.',
    ],
  },
  {
    slug: 'map-visualization',
    title: 'Map Visualization',
    blurb: 'Interactive maps of cruise tracks and sampling stations.',
    body: [
      'TODO: describe this project — what data it visualizes and the tools used to build it.',
    ],
    link: { url: 'https://github.com/your-username/map-visualization', label: 'View on GitHub' },
  },
  {
    slug: 'sealog-guide',
    title: 'SeaLog ID Quick Guide',
    blurb: 'A quick-reference guide for SeaLog event IDs.',
    body: [
      'TODO: describe this project — what it does and how it helps at-sea data logging.',
    ],
    link: { url: 'https://github.com/your-username/sealog-id-guide', label: 'View on GitHub' },
  },
];

export const hobbies = [
  {
    title: 'Sailing',
    blurb: 'Together with my partner, I lived and sailed aboard a 42-foot cruising sailboat, completely managing our own floating ecosystem — from mechanical repairs and weather routing to managing supply logistics in remote areas.',
  },
  {
    title: '(Scientific) Diving',
    blurb: "I'm a European Scientific Diver and Rescue Diver, and also enjoy diving recreationally. My passion for exploring and protecting underwater ecosystems is what originally drove me to study Oceanography.",
  },
  {
    title: 'Community Impact',
    blurb: 'I joined nonprofits in Mexico (ECOBAC / Proyecto Manta), working side-by-side with local community members to monitor and protect whale and manta ray populations in Bahía Banderas.',
  },
  {
    title: 'Volunteer Naturalist',
    blurb: 'I volunteer at the Fitzgerald Marine Reserve in Half Moon Bay, California, sharing my passion for marine ecosystems with visitors from around the world.',
  },
];
