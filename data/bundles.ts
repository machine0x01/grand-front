export interface Course {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Bundle {
  id: string;
  title: string;
  description: string;
  courses: Course[];
  price: string;
  originalPrice?: string;
  discount?: string;
  popular?: boolean;
  features: string[];
  limitedTime?: boolean;
  studentsEnrolled?: number;
  successRate?: string;
  averageRating?: number;
  totalReviews?: number;
  guarantee?: string;
  bonus?: string[];
  savings?: string;
}

export const courses: Course[] = [
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    description: 'Master visual communication and design principles'
  },
  {
    id: 'motion-graphic',
    name: 'Motion Graphic',
    icon: '🎬',
    color: 'from-purple-500 to-pink-500',
    description: 'Create stunning animated graphics and visual effects'
  },
  {
    id: 'moho-animation',
    name: 'Moho Animation',
    icon: '🎭',
    color: 'from-green-500 to-emerald-500',
    description: 'Professional 2D character animation and rigging'
  },
  {
    id: 'blender',
    name: 'Blender',
    icon: '🎯',
    color: 'from-orange-500 to-red-500',
    description: '3D modeling, animation, and visual effects'
  }
];

export const bundles: Bundle[] = [
  {
    id: 'bundle-1',
    title: 'Design Duo',
    description: 'Perfect for beginners who want to master visual design and motion graphics',
    courses: [courses[0], courses[1]], // Graphic Design + Motion Graphic
    price: '$199',
    originalPrice: '$299',
    discount: '33%',
    limitedTime: true,
    studentsEnrolled: 1247,
    successRate: '94%',
    averageRating: 4.8,
    totalReviews: 156,
    guarantee: '30-day money-back guarantee',
    savings: '$100',
    bonus: ['Free design templates pack', 'Exclusive Discord community access'],
    features: [
      'Complete design fundamentals',
      'Motion graphics mastery',
      'Portfolio building projects',
      'Lifetime access',
      'Community support'
    ]
  },
  {
    id: 'bundle-2',
    title: 'Animation Pro',
    description: 'Comprehensive package for aspiring animators and motion designers',
    courses: [courses[0], courses[1], courses[2]], // Graphic Design + Motion Graphic + Moho Animation
    price: '$399',
    originalPrice: '$599',
    discount: '33%',
    popular: true,
    limitedTime: true,
    studentsEnrolled: 892,
    successRate: '96%',
    averageRating: 4.9,
    totalReviews: 203,
    guarantee: '30-day money-back guarantee',
    savings: '$200',
    bonus: ['Premium animation assets library', '1-on-1 portfolio review session', 'Industry networking events'],
    features: [
      'All Design Duo features',
      '2D character animation',
      'Professional rigging techniques',
      'Industry-standard workflows',
      'Advanced portfolio projects',
      '1-on-1 mentorship sessions'
    ]
  },
  {
    id: 'bundle-3',
    title: 'Complete Creator',
    description: 'The ultimate package for becoming a full-stack visual creator',
    courses: courses, // All 4 courses
    price: '$599',
    originalPrice: '$999',
    discount: '40%',
    limitedTime: true,
    studentsEnrolled: 634,
    successRate: '98%',
    averageRating: 4.9,
    totalReviews: 127,
    guarantee: '30-day money-back guarantee',
    savings: '$400',
    bonus: ['Complete asset library ($500 value)', 'Personal career coaching session', 'Industry certification', 'Job placement assistance'],
    features: [
      'All Animation Pro features',
      '3D modeling and animation',
      'Visual effects mastery',
      'Complete project pipeline',
      'Industry certification',
      'Job placement assistance',
      'Exclusive masterclasses'
    ]
  }
];
