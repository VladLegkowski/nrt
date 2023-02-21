const mocks = [
  {
    name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
    contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
    version: 1,
    apdex: 56,
    host: [
      '9a450527-cdd9.kareem.info',
      'e0419f48-6a5a.craig.info',
      '128406fc-0d3f.tiana.biz',
      '2b4cfcf7-81d5.kelli.org',
    ],
  },
  {
    name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
    contributors: [
      'Ramon Harris DDS',
      'Summer Dicki',
      'Triston Sipes',
      'Fae Lind',
      'Carole Emard',
    ],
    version: 6,
    apdex: 57,
    host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
  },
  {
    name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
    contributors: ['Miss Moises Walter', 'Caroline Murazik'],
    version: 2,
    apdex: 61,
    host: [
      'e7bf58af-f0be.dallas.biz',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
    ],
  },
];
const applicationsByHost = {
  '9a450527-cdd9.kareem.info': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  'e0419f48-6a5a.craig.info': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  '128406fc-0d3f.tiana.biz': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '2b4cfcf7-81d5.kelli.org': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '7e6272f7-098e.dakota.biz': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  'e7bf58af-f0be.dallas.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  'b0b655c5-928a.nadia.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  '95b346a0-17f4.abbigail.name': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
};
const mostSatisfyingApps = {
  '9a450527-cdd9.kareem.info': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  'e0419f48-6a5a.craig.info': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '128406fc-0d3f.tiana.biz': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '2b4cfcf7-81d5.kelli.org': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '7e6272f7-098e.dakota.biz': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  'e7bf58af-f0be.dallas.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  'b0b655c5-928a.nadia.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  '95b346a0-17f4.abbigail.name': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
};
const topAppsByHost = [
  {
    name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
    contributors: [
      'Ramon Harris DDS',
      'Summer Dicki',
      'Triston Sipes',
      'Fae Lind',
      'Carole Emard',
    ],
    version: 6,
    apdex: 57,
    host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
  },
];
const applicationAdd = {
  name: 'I_AM_A_TEST_APP',
  contributors: ['Bella Price'],
  version: 1,
  apdex: 100,
  host: [
    '128406fc-0d3f.tiana.biz',
    'e0419f48-6a5a.craig.info',
    'b0b655c5-928a.nadia.biz',
    'e7bf58af-f0be.dallas.biz',
  ],
};
const applicationRemove = mocks[0];
const addAppToHost = {
  '9a450527-cdd9.kareem.info': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  'e0419f48-6a5a.craig.info': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
    {
      name: 'I_AM_A_TEST_APP',
      contributors: ['Bella Price'],
      version: 1,
      apdex: 100,
      host: [
        '128406fc-0d3f.tiana.biz',
        'e0419f48-6a5a.craig.info',
        'b0b655c5-928a.nadia.biz',
        'e7bf58af-f0be.dallas.biz',
      ],
    },
  ],
  '128406fc-0d3f.tiana.biz': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
    {
      name: 'I_AM_A_TEST_APP',
      contributors: ['Bella Price'],
      version: 1,
      apdex: 100,
      host: [
        '128406fc-0d3f.tiana.biz',
        'e0419f48-6a5a.craig.info',
        'b0b655c5-928a.nadia.biz',
        'e7bf58af-f0be.dallas.biz',
      ],
    },
  ],
  '2b4cfcf7-81d5.kelli.org': [
    {
      name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
      contributors: ['Kyleigh Langworth', 'Frieda Witting', 'Darien Connelly'],
      version: 1,
      apdex: 56,
      host: [
        '9a450527-cdd9.kareem.info',
        'e0419f48-6a5a.craig.info',
        '128406fc-0d3f.tiana.biz',
        '2b4cfcf7-81d5.kelli.org',
      ],
    },
  ],
  '7e6272f7-098e.dakota.biz': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  'e7bf58af-f0be.dallas.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
    {
      name: 'I_AM_A_TEST_APP',
      contributors: ['Bella Price'],
      version: 1,
      apdex: 100,
      host: [
        '128406fc-0d3f.tiana.biz',
        'e0419f48-6a5a.craig.info',
        'b0b655c5-928a.nadia.biz',
        'e7bf58af-f0be.dallas.biz',
      ],
    },
  ],
  'b0b655c5-928a.nadia.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
    {
      name: 'I_AM_A_TEST_APP',
      contributors: ['Bella Price'],
      version: 1,
      apdex: 100,
      host: [
        '128406fc-0d3f.tiana.biz',
        'e0419f48-6a5a.craig.info',
        'b0b655c5-928a.nadia.biz',
        'e7bf58af-f0be.dallas.biz',
      ],
    },
  ],
  '95b346a0-17f4.abbigail.name': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
};
const removeAppToHost = {
  '9a450527-cdd9.kareem.info': [],
  'e0419f48-6a5a.craig.info': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  '128406fc-0d3f.tiana.biz': [],
  '2b4cfcf7-81d5.kelli.org': [],
  '7e6272f7-098e.dakota.biz': [
    {
      name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
      contributors: [
        'Ramon Harris DDS',
        'Summer Dicki',
        'Triston Sipes',
        'Fae Lind',
        'Carole Emard',
      ],
      version: 6,
      apdex: 57,
      host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
    },
  ],
  'e7bf58af-f0be.dallas.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  'b0b655c5-928a.nadia.biz': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
  '95b346a0-17f4.abbigail.name': [
    {
      name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
      contributors: ['Miss Moises Walter', 'Caroline Murazik'],
      version: 2,
      apdex: 61,
      host: [
        'e7bf58af-f0be.dallas.biz',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
      ],
    },
  ],
};
export {
  mocks,
  applicationsByHost,
  mostSatisfyingApps,
  topAppsByHost,
  applicationAdd,
  applicationRemove,
  addAppToHost,
  removeAppToHost,
};
