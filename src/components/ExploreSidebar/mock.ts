export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    field: [
      {
        name: 'under-$50',
        label: 'Under $50'
      },
      {
        name: 'under-$100',
        label: 'Under $100'
      },
      {
        name: 'under-$150',
        label: 'Under $150'
      },
      {
        name: 'under-$200',
        label: 'Under $200'
      },
      {
        name: 'free',
        label: 'Free'
      },
      {
        name: 'discounted',
        label: 'Dicounted'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort-by',
    type: 'radio',
    field: [
      {
        name: 'high-to-low',
        label: 'High to low'
      },
      {
        name: 'low-to-high',
        label: 'Low to high'
      }
    ]
  },
  {
    title: 'System',
    name: 'system',
    type: 'checkbox',
    field: [
      {
        name: 'windows',
        label: 'Windows'
      },
      {
        name: 'linux',
        label: 'Linux'
      },
      {
        name: 'mac',
        label: 'MAC'
      }
    ]
  },
  {
    title: 'Genre',
    name: 'genre',
    type: 'checkbox',
    field: [
      {
        name: 'action',
        label: 'Action'
      },
      {
        name: 'adventure',
        label: 'Adventure'
      },
      {
        name: 'fps',
        label: 'FPS'
      },
      {
        name: 'mmorpg',
        label: 'MMORPG'
      },
      {
        name: 'rpg',
        label: 'RPG'
      },
      {
        name: 'shooters',
        label: 'Shooters'
      },
      {
        name: 'simulation',
        label: 'Simulation'
      }
    ]
  }
]
