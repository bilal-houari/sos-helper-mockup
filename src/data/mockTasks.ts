export interface Task {
  id: string;
  title: string;
  category: 'Qualified' | 'General';
  domain: string;
  location: string;
  budget: number;
  postedAt: string;
  description: string;
}

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Emergency Pipe Repair',
    category: 'Qualified',
    domain: 'Plumbing',
    location: 'Downtown, Casablanca',
    budget: 450,
    postedAt: '2 hours ago',
    description: 'Busted pipe in the kitchen, water is leaking everywhere. Need immediate intervention.'
  },
  {
    id: '2',
    title: 'IKEA Furniture Assembly (3 items)',
    category: 'General',
    domain: 'Assembly',
    location: 'Maarif, Casablanca',
    budget: 150,
    postedAt: '5 hours ago',
    description: 'Need help assembling a bed, a desk, and a bookshelf. All tools provided.'
  },
  {
    id: '3',
    title: 'Garden Cleanup and Mowing',
    category: 'General',
    domain: 'Gardening',
    location: 'Bouskoura',
    budget: 300,
    postedAt: '1 day ago',
    description: 'Large garden needs weeding and lawn mowing. Debris removal required.'
  },
  {
    id: '4',
    title: 'Electrical Panel Troubleshooting',
    category: 'Qualified',
    domain: 'Electrical',
    location: 'Anfa, Casablanca',
    budget: 600,
    postedAt: '30 mins ago',
    description: 'Main breaker keeps tripping. Need a certified electrician to diagnose.'
  },
  {
    id: '5',
    title: 'Moving Assistance (Apartment to Storage)',
    category: 'General',
    domain: 'Moving',
    location: 'Ain Sebaa',
    budget: 800,
    postedAt: '2 days ago',
    description: 'Need 2 people with muscle to move heavy boxes and a small sofa into a storage unit.'
  },
  {
    id: '6',
    title: 'Window Cleaning - 2nd Floor',
    category: 'General',
    domain: 'Cleaning',
    location: 'Gauthier',
    budget: 200,
    postedAt: '4 hours ago',
    description: 'Professional window cleaning for 6 large windows. Ladder required.'
  },
  {
    id: '7',
    title: 'Air Conditioner Maintenance',
    category: 'Qualified',
    domain: 'HVAC',
    location: 'Palmier',
    budget: 350,
    postedAt: '6 hours ago',
    description: 'AC unit is making a rattling noise and cooling is inefficient. Needs cleaning and refill.'
  },
  {
    id: '8',
    title: 'Heavy Sofa Delivery Help',
    category: 'General',
    domain: 'Logistics',
    location: 'Bernoussi',
    budget: 100,
    postedAt: '1 hour ago',
    description: 'Need help carrying a 3-seater sofa from the delivery truck to the 4th floor (no elevator).'
  },
  {
    id: '9',
    title: 'Pet Sitting - Weekend',
    category: 'General',
    domain: 'Pet Care',
    location: 'Hay Riad, Rabat',
    budget: 400,
    postedAt: '1 day ago',
    description: 'Looking for someone to walk and feed two friendly Golden Retrievers over the weekend.'
  },
  {
    id: '10',
    title: 'Emergency Locksmith Needed',
    category: 'Qualified',
    domain: 'Security',
    location: 'Anfa',
    budget: 500,
    postedAt: '15 mins ago',
    description: 'Locked out of the apartment. Need professional help to open the door without damage.'
  },
  {
    id: '11',
    title: 'Lawn Irrigation System Repair',
    category: 'Qualified',
    domain: 'Gardening',
    location: 'Dar Bouazza',
    budget: 700,
    postedAt: '3 days ago',
    description: 'Automatic sprinkler system has two broken heads and a leak in the main line.'
  },
  {
    id: '12',
    title: 'Kitchen Backsplash Tiling',
    category: 'Qualified',
    domain: 'Renovation',
    location: 'Oasis',
    budget: 1200,
    postedAt: '12 hours ago',
    description: 'Need to install subway tiles for a small kitchen backsplash (approx. 3 sqm). Tiles provided.'
  },
  {
    id: '13',
    title: 'Grocery Shopping & Delivery',
    category: 'General',
    domain: 'Errands',
    location: 'Casablanca Finance City',
    budget: 80,
    postedAt: '45 mins ago',
    description: 'Need a short list of items from Marjane. Approx 15 items, delivery to the lobby.'
  },
  {
    id: '14',
    title: 'TV Wall Mount Installation',
    category: 'General',
    domain: 'Assembly',
    location: 'Belvedere',
    budget: 120,
    postedAt: '7 hours ago',
    description: 'Mounting a 55-inch TV on a brick wall. Bracket and tools provided.'
  },
  {
    id: '15',
    title: 'Fence Painting (15 meters)',
    category: 'General',
    domain: 'Maintenance',
    location: 'Mohammedia',
    budget: 600,
    postedAt: '2 days ago',
    description: 'Need to apply two coats of wood protector to a backyard fence. Paint provided, bring brushes.'
  }
];
