export interface Project {
  id: string;
  title: string;
  companyName: string;
  description: string;
  image: string;
  tier: 'basic' | 'standard' | 'premium' | 'premium-plus' | 'pro' | 'enterprise';
  categories: string[];
  priceUGX: number;
  priceUSD: number;
  liveLink?: string;
  techStack: string[];
  features: string[];
  problems: {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  }[];
  isMainProject?: boolean;
  isPopular?: boolean; 
}

export const projectsData: Project[] = [
  // BUSINESS WEBSITES
  {
    id: 'business-basic-1',
    title: 'Startup Business Website',
    companyName: 'TechVenture Co.',
    description:
      'A professional website for startups with service overview, team showcase, and lead capture forms.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['business-websites'],
    priceUGX: 4000000,
    priceUSD: 1100,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    features: [
      'Clean homepage design',
      'Service descriptions',
      'Team member profiles',
      'Contact form',
      'Blog section',
      'Mobile responsive',
    ],
    problems: [
      // 'No professional online presence',
      // 'Difficulty attracting new clients',
      // 'Lost leads due to poor inquiry handling',
      // 'Low search engine visibility',
    ],
    isMainProject: true,
  },
  {
    id: 'business-standard-1',
    title: 'Corporate Business Website',
    companyName: 'Global Solutions Inc.',
    description:
      'An enterprise website with portfolio showcasing, client testimonials, and lead management system.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e5649fea?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['business-websites'],
    priceUGX: 11000000,
    priceUSD: 3000,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    features: [
      'Project portfolio gallery',
      'Client testimonials section',
      'Lead management dashboard',
      'Email automation',
      'SEO optimization',
      'Analytics tracking',
    ],
    problems: [
      // 'Cannot showcase past projects effectively',
      // 'Difficulty managing client inquiries',
      // 'No lead scoring system',
      // 'Limited customer insights',
    ],
    isMainProject: true,
  },
  {
    id: 'business-premium-1',
    title: 'Enterprise Business Platform',
    companyName: 'Fortune 500 Consulting',
    description:
      'A comprehensive business platform with CRM, project management, client portal, and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6df?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['business-websites'],
    priceUGX: 24000000,
    priceUSD: 6500,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'Full CRM system',
      'Project management tools',
      'Client portal',
      'Automated reporting',
      'Business intelligence',
      'API integrations',
    ],
    problems: [
      // 'Difficulty managing relationships at scale',
      // 'No project visibility for clients',
      // 'Manual reporting is time-consuming',
      // 'Cannot integrate with existing tools',
    ],
    isMainProject: true,
  },

  // CHARITY WEBSITES
  {
    id: 'charity-basic-1',
    title: 'Basic Charity Website',
    companyName: 'Hope Foundation',
    description:
      'A basic charity website is built to establish credibility and create a strong online presence.',
    image: '/basic-charity-website-image.png',
    tier: 'basic',
    categories: ['charity-websites'],
    priceUGX: 1500000,
    priceUSD: 422,
    liveLink: 'https://basic-charity-website.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Clear presentation of the charity’s mission, vision, and values.',
      'Showcase the Core Values.',
      'Eye-catching hero section with key message or image.',
      'Showcase the leadership of the organsation.',
      'Contact information',
      'How to Donate instructions.',
      'Mobile responsive design',
      'Basic SEO'
    ],
    problems: [
           {
    problemTitle: 'The Trust Problem',
    problemDescription:
      'Donors don’t give to organizations they can’t verify. Without an official website, trust drops immediately.',
    solutionTitle: 'Confidence',
    solutionDescription:
      'This website builds confidence by showing Mission, Vision, Core Values, Photos and more.',
  },
  {
    problemTitle: 'The Legitimacy Problem',
    problemDescription:
      'When people hear about a charity, the first thing they do is search online. If nothing appears, they question whether it is real.',
    solutionTitle: 'Proof of Existence',
    solutionDescription:
      'This website proves the organization exists and is properly structured.',
  },
  {
    problemTitle: 'The Visibility Problem',
    problemDescription:
      'Without a website, the charity is invisible on Google and only depends on social media or word of mouth.',
    solutionTitle: 'Searchability',
    solutionDescription:
      'This website makes the charity searchable and discoverable online.',
  },
  {
    problemTitle: 'Lack of Professionalism',
    problemDescription:
      'Serious partners and companies expect an official website. Without one, the charity appears informal or temporary.',
    solutionTitle: 'Professional Positioning',
    solutionDescription:
      'This website positions the charity as serious and credible.',
  },
  {
    problemTitle: 'Information Scattering',
    problemDescription:
      'Information spread across WhatsApp, Facebook, and conversations creates confusion.',
    solutionTitle: 'Centralized Information',
    solutionDescription:
      'This website centralizes all official information in one trusted place.',
  },
  {
    problemTitle: 'The Partnership Barrier',
    problemDescription:
      'Many NGOs and corporates research organizations before partnering. No website becomes an automatic red flag.',
    solutionTitle: 'Partnership Readiness',
    solutionDescription:
      'This website removes that barrier and builds confidence for partnerships.',
  },
      
    ],
    isMainProject: true,
  },
  {
    id: 'charity-basic-2',
    title: 'Standard Charity Website',
    companyName: 'Beacon',
    description:
      'A professional website for a clean water charity with donation tracking, impact stories, and volunteer sign-up forms.',
    image: '/standard-charity-website-image.png',
    tier: 'basic',
    categories: ['charity-websites'],
    priceUGX: 3000000,
    priceUSD: 844,
    liveLink: 'https://standard-charity-website-fw7w.vercel.app/',
    techStack: ['React', 'Tailwind CSS', 'Firebase'],
    features: [
      'Mission statement and vision pages',
      'Donation system integration',
      'Impact stories section',
      'Volunteer registration',
      'Newsletter signup',
      'Mobile responsive design',
    ],
    problems: [
      // 'Limited reach to donors',
      // 'Difficulty accepting online donations',
      // 'No volunteer management system',
      // 'Poor search engine visibility',
    ],
  },
  {
    id: 'charity-basic-3',
    title: 'Premium Charity Website',
    companyName: 'Bright Minds Institute',
    description:
      'A simple yet impactful website for an education charity with scholarship information and donation options.',
    image: 'https://images.unsplash.com/photo-1427504494785-cddc3be3b337?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['charity-websites'],
    priceUGX: 5000000,
    priceUSD: 1350,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    features: [
      'Scholarship program information',
      'Student success stories',
      'Donation portal',
      'Contact and inquiry forms',
      'Photo gallery',
      'Mobile optimized',
    ],
    problems: [
      // 'Lack of online presence',
      // 'Difficulty reaching donors',
      // 'No secure donation system',
      // 'Limited communication channels',
    ],
  },

  {
    id: 'charity-standard-1',
    title: 'Standard Charity Website',
    companyName: 'Beacon',
    description:
      'A standard charity website is designed for full control and professional online management.',
    image: '/standard-charity-website-image.png',
    tier: 'standard',
    categories: ['charity-websites'],
    priceUGX: 3000000,
    priceUSD: 844,
    liveLink: 'https://standard-charity-website-fw7w.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Mongo db', 'Prisma', 'Auth', 'Resend'],
    features: [
      'All features of basic',
      'Secure User Dashboard',
      'Content Management System (CMS)',
      'Volunteer Application Form',
      'Contact Form',
      'Donation Information Management',
      'Blog / News Section',
      'Photo & Media Gallery',
      'Location Map Integration',
      'Social Media Integration',
      'Fully Responsive Design',
      'Events Management System',
      'Advanced SEO',

    ],
    problems: [

       {
    problemTitle: 'The Transparency Problem',
    problemDescription:
      'Donors and partners need proof of activity. Without updates or blogs: people doubt the charity’s work, funding and partnerships are lost.',
    solutionTitle: 'Credibility & Accountability',
    solutionDescription:
      'This website enables posting events, project updates, and galleries, building credibility and trust, showing accountability.',
  },
  {
    problemTitle: 'Volunteer & Contact Management Loss',
    problemDescription:
      'Without proper forms, volunteer applications and donor inquiries get lost in WhatsApp, email, or social media messages.',
    solutionTitle: 'Organized Data Capture',
    solutionDescription:
      'This website includes volunteer and contact forms, capturing data in an organized way and improving response time.',
  },
  {
    problemTitle: 'Perception of Inactivity',
    problemDescription:
      'Even active charities look small or unprofessional online if their site is static or outdated, partnerships hesitate, donations drop.',
    solutionTitle: 'Dynamic Online Presence',
    solutionDescription:
      'Dynamic content via dashboard updates keeps the charity looking active, organized, and credible.',
  },
  {
    problemTitle: 'Limited management and control over the website',
    problemDescription:
      'Every small update like adding a photo, changing donation numbers, or posting an event requires a developer, which delays updates and costs money.',
    solutionTitle: 'Full Content Control',
    solutionDescription:
      'A standard website’s dashboard gives the charity full control to update content instantly.',
  },
  {
    problemTitle: 'Growth Limitation',
    problemDescription:
      'A basic website can’t scale with campaigns, multiple events, or growing outreach, limiting expansion and opportunities for volunteers and donors.',
    solutionTitle: 'Scalable Website',
    solutionDescription:
      'A standard website supports ongoing growth with scalable, manageable content.',
  },
  {
    problemTitle: 'Difficulty tracking campaign performance',
    problemDescription:
      'Charities cannot track which campaigns are effective or measure impact easily.',
    solutionTitle: 'Analytics Dashboard',
    solutionDescription:
      'This website provides reporting tools to track campaign performance efficiently.',
  },
  {
    problemTitle: 'Complex volunteer management',
    problemDescription:
      'Managing volunteers manually is error-prone and hard to scale.',
    solutionTitle: 'Volunteer Management',
    solutionDescription:
      'Dashboard tools allow organized volunteer scheduling and tracking.',
  },
  {
    problemTitle: 'No impact visibility',
    problemDescription:
      'Donors and staff cannot see the measurable impact of charity efforts.',
    solutionTitle: 'Impact Reporting',
    solutionDescription:
      'The platform provides clear visualizations of ongoing projects and achievements.',
  },   
     
    ],
    isMainProject: true,
    isPopular: true,
  },
  {
    id: 'charity-standard-2',
    title: 'Healthcare Charity Platform',
    companyName: 'Wellness for All',
    description:
      'A comprehensive charity platform with campaign management, volunteer scheduling, donation tracking, and medical initiative tracking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['charity-websites'],
    priceUGX: 12000000,
    priceUSD: 3250,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Stripe'],
    features: [
      'Campaign management dashboard',
      'Volunteer scheduling system',
      'Recurring donation setup',
      'Impact reporting dashboard',
      'Email marketing automation',
      'Team collaboration tools',
      'Multilingual content',
    ],
    problems: [
      // 'Difficulty tracking campaign performance',
      // 'Complex volunteer management',
      // 'Limited donor engagement tools',
      // 'No impact visibility',
    ],
  },
  {
    id: 'charity-standard-3',
    title: 'Animal Rescue Charity Platform',
    companyName: 'Paws & Hearts Rescue',
    description:
      'A specialized platform for animal rescue organizations with adoption tracking, volunteer management, and donor recognition.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19db992cb74?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['charity-websites'],
    priceUGX: 12000000,
    priceUSD: 3250,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    features: [
      'Animal listing and adoption management',
      'Volunteer scheduling',
      'Donor dashboard',
      'Event management',
      'Email campaigns',
      'Report generation',
      'Multi-language support',
    ],
    problems: [
      // 'Manual adoption tracking',
      // 'Volunteer coordination challenges',
      // 'Limited donor engagement',
      // 'Difficulty managing fundraising',
    ],
  },

  {
    id: 'charity-premium-1',
    title: 'Premium Charity Website',
    companyName: 'Elevate Foundation',
    description: 'A premium charity website is built to turn support into instant funding through either local or international payment gateways.',
    image: '/premium-charity-website-image.png',
    tier: 'premium',
    categories: ['charity-websites'],
    priceUGX: 6000000,
    priceUSD: 1691,
    liveLink: 'https://premium-charity-website-sp96.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase', 'Prisma', 'Auth', 'Resend', 'Flutterwave', 'Pay Pal'],
    features: [
      'All features in standard',
      'Choose either local or international payment integration',
      'Automated Donation Confirmation',
      'Donation Tracking System',
      'Strong security measures to detect Fraud',
      'Fundraising Progress Bar',
      'Downloadable Donation Receipts',
      'Clear financial summary & statements periodically',
      'Newsletter Subscription Integration',
    ],
    problems: [
      {
    problemTitle: 'The “Interested But Didn’t Donate” Problem',
    problemDescription:
      'Someone visits the website, they feel touched, they want to donate. They find phone, bank number or instructions, feel lazy going through them, and either postpone or leave the website.',
    solutionTitle: 'Direct & Easy Donations',
    solutionDescription:
      'This website provides a clear and direct way to donate, capturing donations when emotions are high.',
  },
  {
    problemTitle: 'The Manual Payment Chaos Problem',
    problemDescription:
      'Donations come through mobile money screenshots, bank transfers, WhatsApp confirmations, creating tracking confusion, missed payments, human errors, and no proper records.',
    solutionTitle: 'Automated Payment Tracking',
    solutionDescription:
      'This website automates transaction tracking, organizes donation records, verifies payment status, and keeps everything structured and clean.',
  },
  {
    problemTitle: 'The Professionalism Gap Problem',
    problemDescription:
      'Manual instructions like "Send to this number and confirm" feel informal. Serious donors think: “Why don’t they have a secure payment system?” reducing trust.',
    solutionTitle: 'Secure & Professional Checkout',
    solutionDescription:
      'This website offers a secure gateway, professional checkout page, and structured confirmation, making it look modern and credible.',
  },
  {
    problemTitle: 'The Lost Impulse Funding Problem',
    problemDescription:
      'Online donors expect instant transactions. If donation is complicated, they close the page, forget, or change their mind, and impulse giving disappears.',
    solutionTitle: 'Fast & Mobile-Friendly Donations',
    solutionDescription:
      'The website has a fast checkout, mobile-friendly donation page, and simple amount selection, reducing friction and increasing completed donations.',
  },
  {
    problemTitle: 'The Transparency & Reporting Problem',
    problemDescription:
      'No automated donation data makes it hard to calculate totals, show progress, or generate reports. Donors love transparency; without it, trust weakens.',
    solutionTitle: 'Live Reporting & Transparency',
    solutionDescription:
      'This website provides live fundraising totals, campaign tracking, and clear progress display, increasing donor confidence.',
  },
  {
    problemTitle: 'The Scaling Problem',
    problemDescription:
      'A charity can only accept offline donations and manual transfers, limiting growth. They cannot run online campaigns, emergency fundraising drives, or target-based digital campaigns.',
    solutionTitle: 'Online Campaign Scalability',
    solutionDescription:
      'This website enables online fundraising campaigns, target-based donations, and campaign performance tracking, allowing digital growth.',
  },
  {
    problemTitle: 'The Time Wastage Problem',
    problemDescription:
      'Staff must confirm payments manually, respond to donation inquiries, and record transactions manually, wasting time and productivity.',
    solutionTitle: 'Automated Workflows',
    solutionDescription:
      'This website automates confirmations, organizes the dashboard, and reduces manual workload, saving operational time.',
  },
],

    isMainProject: true,
  },
  {
    id: 'charity-premium-2',
    title: 'Global Humanitarian Platform',
    companyName: 'Unity Against Hunger',
    description:
      'An enterprise charity platform with AI donor profiling, multi-project management, advanced analytics, and mobile app.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['charity-websites'],
    priceUGX: 25000000,
    priceUSD: 6800,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS', 'AI/ML'],
    features: [
      'AI donor segmentation and targeting',
      'Multi-project portfolio management',
      'Real-time impact tracking',
      'Mobile app for iOS and Android',
      'Advanced CRM capabilities',
      'Predictive fundraising analytics',
      'API integrations',
      'Blockchain verification',
    ],
    problems: [
      // 'Scaling fundraising efforts globally',
      // 'Complex multi-project operations',
      // 'Limited donor insights',
      // 'Manual reporting processes',
      // 'Transparency concerns',
    ],
  },
  {
    id: 'charity-premium-3',
    title: 'Social Impact Enterprise Suite',
    companyName: 'Change Makers Alliance',
    description:
      'A comprehensive platform for social enterprises with advanced donation management, beneficiary tracking, and social impact measurement.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['charity-websites'],
    priceUGX: 25000000,
    priceUSD: 6800,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'Beneficiary management system',
      'Impact measurement framework',
      'Advanced donor analytics',
      'Mobile app for field teams',
      'Automated compliance reporting',
      'Third-party integrations',
      'Multi-currency support',
      'AI-powered insights',
    ],
    problems: [
      // 'Measuring social impact accurately',
      // 'Managing beneficiary data at scale',
      // 'Complex reporting requirements',
      // 'Limited field team tools',
      // 'Donor transparency demands',
    ],
  },
  {
  id: 'charity-premium-plus-1',
  title: 'Premium + Charity Website',
  companyName: 'Heart Bridge',
  description: 'A premium + charity website is built to turn support into instant funding through both local & international payment gateways.',
  image: '/premium-plus-charity-website-image.png',
  tier: 'premium-plus',
  categories: ['charity-websites'],
  priceUGX: 9000000,
  priceUSD: 2543,
  liveLink: 'https://premium-plus-charity-website.vercel.app/',
   techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase','Twilio', 'Prisma', 'Auth', 'Resend', 'Flutterwave', 'Pay Pal','Stripe','Pesa Pal'],
  features: [
    'Global compliance automation',
    'AI fraud detection',
    'Blockchain donation verification',
    'Donor NFTs & digital recognition',
    'Real-time public transparency dashboard',
    'Multi-country tax compliance',
  ],
  problems: [
    // 'Global trust issues',
    // 'Regulatory compliance complexity',
    // 'Large-scale donor transparency',
  ],
  isMainProject: true,
},
{
  id: 'charity-pro-1',
  title: 'Pro Multi-Charity Website & System',
  companyName: 'Charity Hub',
  description:
    'A unified platform for managing up to 5 independent charity organizations under one system.',
  image: '/pro-multi-charity-website-image.png',
  tier: 'pro',
  categories: ['charity-websites'],
  priceUGX: 25000000,
  priceUSD: 7035,
  liveLink: 'https://pro-multi-charity-website.vercel.app/',
  techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL','Twilio', 'Prisma', 'Auth', 'Resend', 'Flutterwave', 'Pay Pal','Stripe','Pesa Pal','AWS'],
  features: [
    'Manage up to 5 charity organizations',
    'Separate dashboards per charity',
    'Unified donor management',
    'Centralized reporting',
    'Local + international payments',
    'Role-based access control',
  ],
  problems: [
    // 'Managing multiple charities separately',
    // 'Duplicate systems and costs',
    // 'Lack of centralized oversight',
  ],
  isMainProject: true,
},
{
  id: 'charity-enterprise-1',
  title: 'Enterprise Multi-Charity Website & System',
  companyName: 'Charity Sphere',
  description:
    'An enterprise-grade ecosystem for managing unlimited charity organizations globally.',
  image: '/enterprise-multi-charity-website-image.png',
  tier: 'enterprise',
  categories: ['charity-websites'],
  priceUGX: 50000000,
  priceUSD: 14070,
  liveLink: 'https://enterprise-multi-charity-website.vercel.app/',
  techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL','Twilio', 'Prisma', 'Auth', 'Resend', 'Flutterwave', 'Pay Pal','Stripe','Pesa Pal','AWS','AI/ML'],
  features: [
    'Unlimited charity organizations',
    'Global compliance automation',
    'Advanced analytics & AI insights',
    'Multi-country payment support',
    'Custom integrations',
    'Dedicated infrastructure',
  ],
  problems: [
    // 'Scaling charity operations globally',
    // 'Complex governance requirements',
    // 'High compliance overhead',
  ],
  isMainProject: true,
},



  // ECOMMERCE WEBSITES
  {
    id: 'ecommerce-basic-1',
    title: 'Basic E-commerce Store',
    companyName: 'Shop & Co',
    description:
      'A simple e-commerce website with product catalog, shopping cart, and basic payment integration.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['ecommerce-websites'],
    priceUGX: 6000000,
    priceUSD: 1600,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Stripe'],
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Order confirmation emails',
      'Customer reviews',
      'Mobile responsive',
    ],
    problems: [
      // 'Limited online sales channels',
      // 'Manual order processing',
      // 'No customer insights',
      // 'Low conversion rates',
    ],
    isMainProject: true,
  },
  {
    id: 'ecommerce-basic-2',
    title: 'Fashion Boutique Store',
    companyName: 'Trend Boutique',
    description:
      'A stylish e-commerce website for fashion brands with product filters, size guides, and customer reviews.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['ecommerce-websites'],
    priceUGX: 6000000,
    priceUSD: 1600,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Stripe'],
    features: [
      'Product catalog with filters',
      'Size and color options',
      'Shopping cart',
      'Secure payment',
      'Customer reviews',
      'Mobile responsive',
    ],
    problems: [
      // 'Limited online sales channels',
      // 'Manual order processing',
      // 'No customer insights',
      // 'Low conversion rates',
    ],
  },
  {
    id: 'ecommerce-basic-3',
    title: 'Handmade Crafts Marketplace',
    companyName: 'Artisan Hub',
    description:
      'An e-commerce platform for handmade products with artist profiles, product listings, and secure transactions.',
    image: 'https://images.unsplash.com/photo-1515562141207-6811bcb33ce7?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['ecommerce-websites'],
    priceUGX: 6000000,
    priceUSD: 1600,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Stripe'],
    features: [
      'Product catalog',
      'Artist profiles',
      'Shopping cart',
      'Secure checkout',
      'Order tracking',
      'Mobile responsive',
    ],
    problems: [
      // 'Limited online sales channels',
      // 'Manual order processing',
      // 'No customer insights',
      // 'Low conversion rates',
    ],
  },

  {
    id: 'ecommerce-standard-1',
    title: 'Standard E-commerce Platform',
    companyName: 'MultiStore Solutions',
    description:
      'A comprehensive e-commerce platform with inventory management, customer analytics, and multi-vendor support.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e5649fea?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['ecommerce-websites'],
    priceUGX: 14000000,
    priceUSD: 3800,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Stripe'],
    features: [
      'Advanced product management',
      'Inventory tracking',
      'Customer analytics dashboard',
      'Email marketing automation',
      'Abandoned cart recovery',
      'Multi-vendor support',
      'Advanced SEO optimization',
    ],
    problems: [
      // 'Inventory management challenges',
      // 'Limited customer insights',
      // 'Manual marketing campaigns',
      // 'Scaling difficulties',
    ],
    isMainProject: true,
  },
  {
    id: 'ecommerce-standard-2',
    title: 'B2B Wholesale Platform',
    companyName: 'BizConnect Markets',
    description:
      'A B2B wholesale platform with bulk ordering, custom pricing, and vendor management tools.',
    image: 'https://images.unsplash.com/photo-1553531889-e6cf91d03143?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['ecommerce-websites'],
    priceUGX: 14000000,
    priceUSD: 3800,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Stripe'],
    features: [
      'Bulk ordering system',
      'Custom pricing tiers',
      'Vendor management',
      'Order management dashboard',
      'Email automation',
      'Reporting tools',
      'API integrations',
    ],
    problems: [
      // 'Inventory management challenges',
      // 'Limited customer insights',
      // 'Manual marketing campaigns',
      // 'Scaling difficulties',
    ],
  },
  {
    id: 'ecommerce-standard-3',
    title: 'Digital Products Store',
    companyName: 'Digital Assets Inc',
    description:
      'An e-commerce platform for digital products with secure delivery, license management, and affiliate programs.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['ecommerce-websites'],
    priceUGX: 14000000,
    priceUSD: 3800,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Stripe'],
    features: [
      'Digital product delivery',
      'License key management',
      'Affiliate program',
      'Customer dashboard',
      'Email notifications',
      'Download tracking',
      'Reporting tools',
    ],
    problems: [
      // 'Inventory management challenges',
      // 'Limited customer insights',
      // 'Manual marketing campaigns',
      // 'Scaling difficulties',
    ],
  },

  {
    id: 'ecommerce-premium-1',
    title: 'Premium E-commerce Suite',
    companyName: 'Enterprise Commerce Pro',
    description:
      'An enterprise e-commerce platform with AI recommendations, advanced analytics, omnichannel support, and headless CMS.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6df?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['ecommerce-websites'],
    priceUGX: 28000000,
    priceUSD: 7600,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'AI-powered product recommendations',
      'Advanced customer segmentation',
      'Omnichannel support',
      'Headless CMS integration',
      'Real-time inventory sync',
      'Advanced BI dashboard',
      'Personalization engine',
      'API ecosystem',
    ],
    problems: [
      // 'Difficulty personalizing at scale',
      // 'Complex multi-channel operations',
      // 'Limited customer insights',
      // 'Manual content management',
      // 'Inventory complexities',
    ],
    isMainProject: true,
  },
  {
    id: 'ecommerce-premium-2',
    title: 'Global Marketplace Platform',
    companyName: 'WorldTrade Commerce',
    description:
      'A global marketplace platform with multi-currency, multi-language, and seller management tools.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['ecommerce-websites'],
    priceUGX: 28000000,
    priceUSD: 7600,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'Multi-currency support',
      'Multi-language support',
      'Seller management tools',
      'Commission management',
      'Dispute resolution system',
      'Advanced analytics',
      'Real-time notifications',
      'Integrated payment processing',
    ],
    problems: [
      // 'Difficulty personalizing at scale',
      // 'Complex multi-channel operations',
      // 'Limited customer insights',
      // 'Manual content management',
      // 'Inventory complexities',
    ],
  },
  {
    id: 'ecommerce-premium-3',
    title: 'Subscription Commerce Platform',
    companyName: 'RecurringRevenue Labs',
    description:
      'A subscription-based e-commerce platform with flexible billing, subscription analytics, and churn prediction.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e5649fea?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['ecommerce-websites'],
    priceUGX: 28000000,
    priceUSD: 7600,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'Flexible billing models',
      'Subscription lifecycle management',
      'Churn prediction AI',
      'Customer lifetime value analytics',
      'Dunning management',
      'Retention automation',
      'Advanced reporting',
      'API ecosystem',
    ],
    problems: [
      // 'Difficulty personalizing at scale',
      // 'Complex multi-channel operations',
      // 'Limited customer insights',
      // 'Manual content management',
      // 'Inventory complexities',
    ],
  },

  // HOTEL WEBSITES
  {
    id: 'hotel-basic-1',
    title: 'Basic Hotel Website',
    companyName: 'Comfort Inn Hotels',
    description:
      'A professional hotel website with room showcase, online booking, and guest testimonials.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['hotel-websites'],
    priceUGX: 4500000,
    priceUSD: 1200,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    features: [
      'Room showcase',
      'Online booking system',
      'Guest testimonials',
      'Amenities listing',
      'Photo gallery',
      'Mobile responsive',
    ],
    problems: [
      // 'Low online visibility',
      // 'Manual booking handling',
      // 'Limited guest engagement',
      // 'Poor reservation management',
    ],
    isMainProject: true,
  },
  {
    id: 'hotel-basic-2',
    title: 'Budget Hotel Website',
    companyName: 'Budget Stays Co.',
    description:
      'A professional website for budget hotels with easy booking, room showcase, and guest reviews.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['hotel-websites'],
    priceUGX: 4500000,
    priceUSD: 1200,
    liveLink: 'https://example.com',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Room showcase',
      'Simple booking system',
      'Guest testimonials',
      'Contact information',
      'Amenities listing',
      'Mobile responsive',
    ],
    problems: [
      // 'Low online visibility',
      // 'Manual booking handling',
      // 'Limited guest engagement',
      // 'Poor reservation management',
    ],
  },
  {
    id: 'hotel-basic-3',
    title: 'Boutique Hotel Website',
    companyName: 'Luxury Boutique Retreats',
    description:
      'An elegant website for boutique hotels featuring room gallery, booking, and special packages.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
    tier: 'basic',
    categories: ['hotel-websites'],
    priceUGX: 4500000,
    priceUSD: 1200,
    liveLink: 'https://example.com',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    features: [
      'Beautiful room gallery',
      'Package booking',
      'Special offers',
      'Guest reviews section',
      'Event space showcase',
      'Mobile optimized',
    ],
    problems: [
      // 'Limited online bookings',
      // 'Difficulty showcasing uniqueness',
      // 'Manual reservation handling',
      // 'Low search visibility',
    ],
  },

  {
    id: 'hotel-standard-1',
    title: 'Standard Hotel Website',
    companyName: 'Premier Hotels Group',
    description:
      'A comprehensive hotel platform with advanced booking, guest management, and performance analytics.',
    image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['hotel-websites'],
    priceUGX: 10000000,
    priceUSD: 2700,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript'],
    features: [
      'Advanced booking system',
      'Guest communication tools',
      'Payment processing',
      'Performance dashboard',
      'Email notification system',
      'Availability management',
      'Guest feedback system',
    ],
    problems: [
      // 'Manual payment handling',
      // 'Limited guest insights',
      // 'Inefficient communications',
      // 'No availability management',
    ],
    isMainProject: true,
  },
  {
    id: 'hotel-standard-2',
    title: 'Resort Management Platform',
    companyName: 'Paradise Resorts Ltd',
    description:
      'A comprehensive resort platform with advanced booking, guest management, activity scheduling, and performance analytics.',
    image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['hotel-websites'],
    priceUGX: 10000000,
    priceUSD: 2700,
    liveLink: 'https://example.com',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Activity booking system',
      'Guest communication tools',
      'Payment processing',
      'Performance dashboard',
      'Email notification system',
      'Availability management',
      'Guest feedback system',
    ],
    problems: [
      // 'Complex activity management',
      // 'Manual payment handling',
      // 'Limited guest insights',
      // 'Inefficient communications',
    ],
  },
  {
    id: 'hotel-standard-3',
    title: 'Business Hotel Platform',
    companyName: 'Corporate Stays International',
    description:
      'A professional booking platform for business hotels with meeting room management and corporate rates.',
    image: 'https://images.unsplash.com/photo-1578683078519-130601a50ca5?w=500&h=300&fit=crop',
    tier: 'standard',
    categories: ['hotel-websites'],
    priceUGX: 10000000,
    priceUSD: 2700,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Meeting room booking',
      'Corporate rates management',
      'Group booking system',
      'Payment integration',
      'Email confirmations',
      'Guest portal',
      'Reporting dashboard',
    ],
    problems: [
      // 'Managing group bookings manually',
      // 'Complex rate structures',
      // 'Difficulty processing payments',
      // 'Limited visibility on bookings',
    ],
  },

  {
    id: 'hotel-premium-1',
    title: 'Premium Hotel Website',
    companyName: 'Luxury Collection Hotels',
    description:
      'An enterprise luxury hotel platform with concierge AI, personalized experiences, loyalty programs, and multi-property management.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['hotel-websites'],
    priceUGX: 22000000,
    priceUSD: 6000,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'AI concierge service',
      'Personalized guest profiles',
      'VIP loyalty program',
      'Multi-property dashboard',
      'Advanced analytics',
      'Mobile app',
      'Integration with travel platforms',
      'Real-time reporting',
    ],
    problems: [
      // 'Limited personalization at scale',
      // 'Complex multi-property operations',
      // 'Difficulty in guest retention',
      // 'Manual concierge services',
      // 'Limited integration capabilities',
    ],
    isMainProject: true,
  },
  {
    id: 'hotel-premium-2',
    title: 'Luxury Hotel Suite',
    companyName: 'Five Star Resorts Group',
    description:
      'An enterprise luxury hotel platform with concierge AI, personalized experiences, loyalty programs, and multi-property management.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['hotel-websites'],
    priceUGX: 22000000,
    priceUSD: 6000,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'AI concierge service',
      'Personalized guest profiles',
      'VIP loyalty program',
      'Multi-property dashboard',
      'Advanced analytics',
      'Mobile app',
      'Integration with travel platforms',
      'Real-time reporting',
    ],
    problems: [
      // 'Limited personalization at scale',
      // 'Complex multi-property operations',
      // 'Difficulty in guest retention',
      // 'Manual concierge services',
      // 'Limited integration capabilities',
    ],
  },
  {
    id: 'hotel-premium-3',
    title: 'Global Hospitality Management Platform',
    companyName: 'Global Hospitality Corp',
    description:
      'A comprehensive enterprise platform for hospitality groups with predictive analytics, revenue optimization, and global operations management.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
    tier: 'premium',
    categories: ['hotel-websites'],
    priceUGX: 22000000,
    priceUSD: 6000,
    liveLink: 'https://example.com',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'AI/ML'],
    features: [
      'Revenue optimization AI',
      'Global property management',
      'Predictive maintenance',
      'Guest behavior analytics',
      'Automated housekeeping scheduling',
      'Multi-currency support',
      'Advanced BI dashboard',
      'API ecosystem',
    ],
    problems: [
      // 'Maximizing revenue globally',
      // 'Complex operations management',
      // 'Predictive maintenance needs',
      // 'Limited guest insights across properties',
      // 'Difficulty scaling operations',
    ],
  },
];
