// Prime Link Logistics Company - Site Data
// All content stored locally in the frontend
// Contact details are placeholder/demo values

export const companyInfo = {
    name: 'Prime Link Logistics Company',
    shortName: 'Prime Link Logistics Company',
    tagline: 'Moving Value. Delivering Trust.',

    email: 'mailto:info@primelinklogistics.com',
    phone: 'tel:+254755316580',

    whatsapp: 'https://wa.me/254755316580',

    location: 'Nairobi, Kenya',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nairobi%2C%20Kenya',

    officeHours: 'Monday – Friday: 08:00 – 18:00 EAT',
    year: 2026,

    serviceRegions: [
      'Africa',
      'Middle East',
      'Europe',
      'Asia',
      'North America',
    ],
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gold', path: '/gold' },
  { name: 'Logistics', path: '/logistics' },
  { name: 'Contact', path: '/contact' },
]

export const services = [
  {
    id: 'gold-sourcing',
    title: 'Gold Sourcing',
    description: 'Connecting buyers with suitable gold supply opportunities while emphasizing documentation and responsible business practices.',
    icon: 'Gem',
    capabilities: [
      'Supplier vetting and due diligence',
      'Documentation coordination',
      'Quality assessment support',
      'Responsible sourcing practices',
    ],
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80',
  },
  {
    id: 'gold-supply',
    title: 'Gold Supply',
    description: 'Structured coordination between suppliers and buyers to ensure smooth transactions and reliable delivery.',
    icon: 'CircleDot',
    capabilities: [
      'End-to-end supply coordination',
      'Buyer-supplier matching',
      'Contract facilitation',
      'Delivery scheduling',
    ],
    image: 'https://images.unsplash.com/photo-1523293188086-b15e4af18e6b?w=800&q=80',
  },
  {
    id: 'gold-trading',
    title: 'Gold Trading',
    description: 'Professional coordination for commodity transactions with transparency and precision.',
    icon: 'TrendingUp',
    capabilities: [
      'Market analysis support',
      'Transaction coordination',
      'Documentation management',
      'Compliance guidance',
    ],
    image: 'https://images.unsplash.com/photo-1565378435245-2528d587e524?w=800&q=80',
  },
  {
    id: 'secure-logistics',
    title: 'Secure Logistics',
    description: 'Specialized transportation coordination for high-value goods with maximum security protocols.',
    icon: 'Shield',
    capabilities: [
      'High-value cargo handling',
      'Secure transport protocols',
      'Insurance coordination',
      'Chain of custody management',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    id: 'international-freight',
    title: 'International Freight',
    description: 'Air, sea, and land freight coordination for global cargo movement.',
    icon: 'Plane',
    capabilities: [
      'Air freight coordination',
      'Sea freight management',
      'Land transport solutions',
      'Multi-modal logistics',
    ],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Solutions',
    description: 'Planning and coordination across multiple logistics stages for seamless operations.',
    icon: 'Network',
    capabilities: [
      'End-to-end planning',
      'Vendor management',
      'Inventory coordination',
      'Performance tracking',
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
  },
]

export const stats = [
  { value: '10+', label: 'Markets Served', suffix: '' },
  { value: '24/7', label: 'Operational Support', suffix: '' },
  { value: 'Global', label: 'Logistics Network', suffix: '' },
  { value: 'Trusted', label: 'Business Relationships', suffix: '' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Source',
    description: 'We identify and evaluate reliable suppliers and logistics partners to establish a strong foundation for every operation.',
  },
  {
    number: '02',
    title: 'Verify',
    description: 'Rigorous documentation checks, quality assessments, and compliance verification ensure every transaction meets standards.',
  },
  {
    number: '03',
    title: 'Transport',
    description: 'Secure, tracked, and insured transportation across air, sea, and land with full chain-of-custody protocols.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Final delivery with complete documentation handover, ensuring transparency and accountability at every endpoint.',
  },
]

export const logisticsWorkflow = [
  { title: 'Request', description: 'Initial inquiry and requirements gathering' },
  { title: 'Planning', description: 'Route optimization and resource allocation' },
  { title: 'Documentation', description: 'Customs, permits, and compliance paperwork' },
  { title: 'Transportation', description: 'Execution of freight and logistics operations' },
  { title: 'Tracking', description: 'Real-time monitoring and status updates' },
  { title: 'Delivery', description: 'Final handover and confirmation' },
]

export const transportModes = [
  {
    title: 'Air Freight',
    description: 'Fast, secure air cargo coordination for time-sensitive and high-value shipments.',
    icon: 'Plane',
  },
  {
    title: 'Sea Freight',
    description: 'Cost-effective ocean freight solutions for bulk cargo and long-haul international routes.',
    icon: 'Ship',
  },
  {
    title: 'Road Freight',
    description: 'Flexible overland transport with secure handling for regional and cross-border deliveries.',
    icon: 'Truck',
  },
  {
    title: 'Warehousing',
    description: 'Secure storage facilities with inventory management and distribution coordination.',
    icon: 'Warehouse',
  },
  {
    title: 'Secure Cargo Handling',
    description: 'Specialized protocols for high-value goods including gold, precious metals, and sensitive materials.',
    icon: 'Lock',
  },
]

export const coreValues = [
  { title: 'Integrity', description: 'We conduct every transaction with honesty, transparency, and ethical standards.' },
  { title: 'Security', description: 'Protecting your assets through rigorous protocols and trusted partnerships.' },
  { title: 'Precision', description: 'Meticulous attention to detail in planning, execution, and documentation.' },
  { title: 'Transparency', description: 'Clear communication and open processes at every stage of engagement.' },
  { title: 'Partnership', description: 'Building long-term relationships based on mutual trust and shared success.' },
  { title: 'Excellence', description: 'Continuously improving our services to exceed expectations.' },
]

export const whyChooseUs = [
  { title: 'Secure Handling', description: 'Advanced security protocols for high-value cargo and sensitive materials.' },
  { title: 'Reliable Coordination', description: 'Dedicated teams ensuring smooth operations across all touchpoints.' },
  { title: 'Transparent Communication', description: 'Regular updates and clear reporting throughout the supply chain.' },
  { title: 'Global Reach', description: 'Network spanning multiple continents with local expertise.' },
  { title: 'Professional Operations', description: 'Industry-standard processes with meticulous documentation.' },
  { title: 'Long-Term Partnerships', description: 'Commitment to building lasting business relationships.' },
]

export const faqs = [
  {
    question: 'How does your gold sourcing process work?',
    answer: 'We connect buyers with verified suppliers through a structured vetting process. This includes documentation review, quality assessment support, and coordination of responsible sourcing practices. Each connection is managed with transparency and due diligence.',
  },
  {
    question: 'How do you coordinate transportation?',
    answer: 'Our logistics team plans routes, selects appropriate transport modes, manages documentation, and monitors shipments in real-time. We coordinate with trusted carriers and maintain full chain-of-custody protocols for high-value goods.',
  },
  {
    question: 'What documentation is required?',
    answer: 'Documentation requirements vary by transaction type and destination. Typically this includes commercial invoices, certificates of origin, quality reports, customs declarations, and transport insurance. We guide clients through every requirement.',
  },
  {
    question: 'Do you work with international buyers?',
    answer: 'Yes, we coordinate with buyers and suppliers across multiple regions including Africa, the Middle East, Europe, Asia, and North America. Our network enables cross-border transactions with proper compliance and documentation.',
  },
  {
    question: 'How can I start a conversation?',
    answer: 'Simply reach out through our contact form, email, or phone. Our team will schedule an initial consultation to understand your requirements and discuss how we can support your gold supply or logistics needs.',
  },
]

export const serviceRegions = [
  { name: 'Africa', description: 'Strategic sourcing and logistics coordination across the continent.' },
  { name: 'Middle East', description: 'Gateway connections for trade and secure transport routes.' },
  { name: 'Europe', description: 'Regulatory compliance and distribution network coordination.' },
  { name: 'Asia', description: 'Manufacturing and trading hub connections with efficient logistics.' },
  { name: 'North America', description: 'Market access and freight coordination across the region.' },
]

export const contactServices = [
  'Gold Sourcing',
  'Gold Supply',
  'Gold Trading',
  'Logistics',
  'Freight',
  'Other',
]

export const footerLinks = {
  company: [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gold', path: '/gold' },
    { name: 'Logistics', path: '/logistics' },
  ],
  services: [
    { name: 'Gold Sourcing', path: '/services' },
    { name: 'Gold Supply', path: '/services' },
    { name: 'Secure Logistics', path: '/logistics' },
    { name: 'International Freight', path: '/logistics' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
  ],
}

export const socialLinks = [
  { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
  { name: 'X', icon: 'Twitter', url: '#' },
  { name: 'Facebook', icon: 'Facebook', url: 'https://web.facebook.com/goldengate.precious' },
  { name: 'Instagram', icon: 'Instagram', url: '#' },
  {name:'whatsapp', icon:'MessageCircle', url:'https://wa.me/254755316580'}
]
