export interface Project {
  id: string;
  title: string;
  companyName: string;
  description: string;
  image: string;
  tier: 'basic' | 'standard' | 'premium';
  categories: string[];
  priceUGX: number;
  majorPurpose: string;
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
  tools: {
     id: string;
     name: string;
     image: string;
      priceUSD: number;
  }[];
  projectOtherData?: {
    technicalRequirements: string[];
    duration: string;
    paymentTerms: string[];
    clientRequirementDays: string;
    projectPausePolicy: string;
    clientRequirements: string[];
  };
  isMainProject?: boolean;
  isPopular?: boolean; 
}

export const projectsData: Project[] = [

  // CHARITY WEBSITES
  {
    id: 'charity-basic-1',
    title: 'Category I',
    companyName: 'Hope Crest Foundation',
    description:
      'To support children and communities by providing education, healthcare, and basic needs.',
    image: '/basic-charity-website-thumbnail.png',
    tier: 'basic',
    categories: ['charity-websites'],
    priceUGX: 1500000,
    priceUSD: 411,
    majorPurpose: 'Starter Trust',
    liveLink: 'https://hopecrestfoundation1.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Clear presentation of mission, vision, and core values',
      'Compelling hero section with impactful message and call-to-action',
      'About Us page highlighting the organization’s story and purpose',
      'Leadership or team showcase to build trust and credibility',
      'Donation information page with simple giving instructions',
      'Programs or initiatives overview section',
      'Contact page with form, email, phone, and location details',
      'Fully mobile-responsive design',
      'Basic SEO setup'
    ],
    problems: [
       {
    problemTitle: 'Your charity organisation is not on Google.',
    problemDescription:
      'When someone searches for your charity organisation on Google, it is not there. A potential donor then thinks you are not serious, you might be fake or a scam to steal money for other people.',
    solutionTitle: 'Your charity organisation can be found on Google when someone searches for it.',
    solutionDescription:
      'After building for you this website, someone can search for your charity organisation on Google and he can find it. Here a potential donor can know that your charity organisation is serious and realistic.',
  },
           {
    problemTitle: 'People do not trust our charity organisation.',
    problemDescription:
      'People find it very difficult to trust your charity organisation. Donors don’t give to organizations they can’t verify. Without an official website, trust drops immediately and you end up loosing people who could have suppoted your charity organisation.',
    solutionTitle: 'After building for you this website, people can easily trust your charity organisation.',
    solutionDescription:
      'People can easily verify that your charity organisation exists. Your website will even show your Mission, Vision, Core Values, Photos and more. This enables them to trust you easily.',
  },
  {
    problemTitle: 'Information about your charity organisation is scattered in many places.',
    problemDescription:
      'Information spread across WhatsApp, Facebook, Instagram books and creates confusion especially when explaining to potential donor.',
    solutionTitle: 'After building for you this website, all the information about your charity organisation will be put in one place.',
    solutionDescription:
      'This website centralizes all official information in one trusted place where anyone interested in getting to know your charity organisation can easily access it, read and trust you.',
  },
  {
    problemTitle: 'It is difficult for your charity organisation to partner with other organisations',
    problemDescription:
      'Many NGOs and corporates research organizations before partnering. Having no website becomes an automatic red flag and it becomes really hard for them to partner with your charity organisation.',
    solutionTitle: 'After this website is built for you, it becomes easy for your charity organisation to partner with others.',
    solutionDescription:
      'This website removes that barrier and builds confidence for possible future partnerships.',
  },   
    ],
    tools: [
  {
    id: 'vercel',
    name: 'Vercel',
    image: '/vercel.png',
    priceUSD: 76,
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    image: '/google-workspace.png',
    priceUSD: 50,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    image: '/cloudfare.png',
    priceUSD: 22,
  },
  {
    id: 'zoho',
    name: 'Zoho',
    image: '/zoho.png',
    priceUSD: 48,
  },
  
 
  
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    image: '/github-copilot.png',
    priceUSD: 17,
  },
  
],

    projectOtherData: {
    technicalRequirements: [
      'Domain & Hosting – UGX 100,000',
      'V0 Deployment – UGX 100,000'
    ],

    duration: '1 Week',

    paymentTerms: [
      'Full Payment – UGX 1,500,000 (Withdraw charges: UGX 17,000)',
      'Half Payment – UGX 750,000 (Withdraw charges: UGX 13,000)'
    ],

    clientRequirementDays: '3 Days',

    projectPausePolicy:
      'If the project is paused for more than 14 days due to missing content or approvals, a reactivation fee of UGX 100,000 will apply before work resumes, as the project will need to be rescheduled.',

    clientRequirements: [
      'Logo of the charity organisation',
      'Colors you want in the website',
      'Font style you want in the website',
      'Full Name of the charity organisation',
      'Email of the charity organisation',
      '2 Contact numbers of the charity organisation',
      'Location of the charity organisation ie P.O Box Number, Town, City/District',
      '2 Phone numbers which will receive the donations',
      'The Bank account information of the account which will receive the donations ie Bank Name, Account Holder Name, Account Number, Branch location of the Bank.',
      'Your Story ie when the charity organsation was made.',
      'Your Mission as a charity organisation',
      'Your Vision as a charity organisation',
      '1 powerful & strong image of people in the charity organisation doing the charity work (This will be the welcome photo of the charity website)',
      'I need the full names of 3 main members of the charity organisation. Also their main profile picture each, and the role they play in the charity organisation.',
      'Number of children / people the charity organisation is helping.',
      'Number of communities served.',
      'Number of funds raised',
      'Number of active volunteers'
      
    ],
  },

    isMainProject: true,
  },

  {
    id: 'charity-standard-1',
    title: 'Category II',
    companyName: 'Benevora Initiative',
    description:
      'To empower lives and inspire change in our communities.',
    image: '/standard-charity-website-thumbnail.png',
    tier: 'standard',
    categories: ['charity-websites'],
    priceUGX: 4000000,
    majorPurpose: 'Growing Trust',
    priceUSD: 1096,
    liveLink: 'https://benevorainitiative.vercel.app',
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
        tools: [
  {
    id: 'vercel',
    name: 'Vercel',
    image: '/vercel.png',
    priceUSD: 76,
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    image: '/google-workspace.png',
    priceUSD: 50,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    image: '/cloudfare.png',
    priceUSD: 22,
  },
  {
    id: 'zoho',
    name: 'Zoho',
    image: '/zoho.png',
    priceUSD: 48,
  },
   
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    image: '/github-copilot.png',
    priceUSD: 17,
  },
  
],

    problems: [

       {
    problemTitle: 'Lack of Proof of Activity',
    problemDescription:
      'Donors and partners need proof of activity. Without fresh updates or blogs: people doubt the charity’s work, funding and partnerships are lost.',
    solutionTitle: 'Showing Proof of Activity',
    solutionDescription:
      'This website enables posting events, project updates and galleries which shows that a charity organsation is active.',
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
    problemTitle: 'Limited management and control over the website',
    problemDescription:
      'Every small update like adding a photo, changing donation numbers, or posting an event requires a developer, which delays updates and costs money.',
    solutionTitle: 'Full Content Control',
    solutionDescription:
      'A standard website’s dashboard gives the charity full control to update content instantly onto the charity website',
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
    id: 'charity-premium-1',
    title: 'Category III',
    companyName: '  Watoto',
    description:
      'To bring hope and healing to vulnerable children, women, and families in Uganda.',
    image: '/premium-charity-website-thumbnail.png',
    tier: 'premium',
    categories: ['charity-websites'],
    priceUGX: 10000000,
    majorPurpose: 'Maximum Trust',
    priceUSD: 2728,
    liveLink: 'https://www.watoto.com',
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
        tools: [
  {
    id: 'vercel',
    name: 'Vercel',
    image: '/vercel.png',
    priceUSD: 76,
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    image: '/google-workspace.png',
    priceUSD: 50,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    image: '/cloudfare.png',
    priceUSD: 22,
  },
  {
    id: 'zoho',
    name: 'Zoho',
    image: '/zoho.png',
    priceUSD: 48,
  },
   
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    image: '/github-copilot.png',
    priceUSD: 17,
  },
  
],

    problems: [

       {
    problemTitle: 'Lack of Proof of Activity',
    problemDescription:
      'Donors and partners need proof of activity. Without fresh updates or blogs: people doubt the charity’s work, funding and partnerships are lost.',
    solutionTitle: 'Showing Proof of Activity',
    solutionDescription:
      'This website enables posting events, project updates and galleries which shows that a charity organsation is active.',
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
    problemTitle: 'Limited management and control over the website',
    problemDescription:
      'Every small update like adding a photo, changing donation numbers, or posting an event requires a developer, which delays updates and costs money.',
    solutionTitle: 'Full Content Control',
    solutionDescription:
      'A standard website’s dashboard gives the charity full control to update content instantly onto the charity website',
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

]
 
 




 