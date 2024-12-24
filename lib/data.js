// Import or define images for each category
const categoryImages = {
  tech: [
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  sports: [
    'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  health: [
    'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  education: [
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  business: [
    'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3183185/pexels-photo-3183185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    '/images/business/biz5.jpg'
  ]
};

// Helper function to get category-specific images
const getCategoryImage = (category, index) => {
  const images = categoryImages[category];
  return images[index % images.length]; // Cycle through the images if more blogs than images
};

// Categories array
export const categories = [
  { slug: 'tech', name: 'Tech & Telecom', icon: '💻' },
  { slug: 'sports', name: 'Sports', icon: '⚽' },
  { slug: 'health', name: 'Health', icon: '🏥' },
  { slug: 'education', name: 'Education', icon: '📚' },
  { slug: 'business', name: 'Business', icon: '💼' }
];

// Generate 24 blog posts per category
export const blogs = [
  // Tech blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `The Future of Technology ${i + 1}`,
    description: 'Exploring how artificial intelligence and new technologies are shaping our future.',
    category: 'tech',
    image: getCategoryImage('tech', i),
    date: '2024-03-20',
    author: 'John Doe',
    readTime: '5 min read',
    content: 'Technology is transforming our world in unprecedented ways...'
  })),
  // Sports blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 25,
    title: `Sports Highlights ${i + 1}`,
    description: 'Latest updates and analysis from the world of sports.',
    category: 'sports',
    image: getCategoryImage('sports', i),
    date: '2024-03-19',
    author: 'Jane Smith',
    readTime: '4 min read',
    content: 'The world of sports continues to evolve and amaze...'
  })),
  // Health blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 49,
    title: `Health & Wellness ${i + 1}`,
    description: 'Tips and insights for maintaining a healthy lifestyle.',
    category: 'health',
    image: getCategoryImage('health', i),
    date: '2024-03-18',
    author: 'Dr. Sarah Johnson',
    readTime: '6 min read',
    content: 'Maintaining good health is crucial in today\'s fast-paced world...'
  })),
  // Education blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 73,
    title: `Education Insights ${i + 1}`,
    description: 'Exploring modern educational methods and technologies.',
    category: 'education',
    image: getCategoryImage('education', i),
    date: '2024-03-17',
    author: 'Prof. Michael Brown',
    readTime: '7 min read',
    content: 'Education continues to evolve with new technologies and methodologies...'
  })),
  // Business blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 97,
    title: `Business Trends ${i + 1}`,
    description: 'Analysis of current business trends and market insights.',
    category: 'business',
    image: getCategoryImage('business', i),
    date: '2024-03-16',
    author: 'Emma Wilson',
    readTime: '5 min read',
    content: 'The business landscape is constantly changing with new opportunities...'
  }))
];
