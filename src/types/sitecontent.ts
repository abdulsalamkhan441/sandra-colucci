import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Sandra Colucci - RE/MAX West Realty Inc.
 * Listings: 1 real + 6 demo (demo entries are marked // DEMO)
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "SC",
    name: "Sandra Colucci",
    title: "Sales Representative",
    heroImage: "/3.jpg",
    heroImageAlt: "West Toronto Real Estate",
  },
  hero: {
    eyebrow: "RE/MAX West Realty Inc. · Etobicoke, North York, Toronto & New Tecumseth",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Sandra Colucci.",
    subheading:
      "Dedicated residential real estate sales representative serving Etobicoke, North York, Toronto, and New Tecumseth since 2012. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$60M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "14+", suffix: " Yrs", label: "of experience (Since 2012)" },
    { icon: Users, value: "95%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "9+", suffix: " Cities", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Sandra Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Sandra?",
  headingMain: "The Sandra ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Etobicoke, North York, Toronto, and New Tecumseth with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:6472699276",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Etobicoke, North York, Toronto, New Tecumseth, and surrounding communities across the GTA.",
    },
    {
      icon: ShieldCheck,
      title: "RECO & RE/MAX Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Real Estate Professional",
      description:
        "Expert strategic guidance tailored to residential sales, client relocation, leasing, and freehold properties.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Sandra",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Sandra Colucci",
  role: "Sales Representative | RE/MAX West Realty Inc.",
  bio: "Serving Etobicoke, North York, Toronto, and New Tecumseth, Sandra Colucci brings dependable market knowledge and a caring, professional approach to every client. From residential sales and leasing to client relocation and freehold properties, Sandra guides each move with integrity, clear communication, and attention to detail.",
  image: "/user1.jpg",
  specialties: [
    "Residential Sales",
    "Client Relocation Services",
    "Residential Leasing",
    "Residential Freehold Properties",
    "Free Comparative Market Assessments",
    "Etobicoke, North York, Toronto & New Tecumseth",
  ],
  recentClosings: [
    { address: "Residential Sales & Freehold Homes", neighbourhood: "Etobicoke & North York", price: "Guidance" },
    { address: "Relocation & Leasing Services", neighbourhood: "Toronto & New Tecumseth", price: "Expertise" },
    { address: "Free Property Evaluation", neighbourhood: "West Toronto", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "95% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 1 real, 6 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "Etobicoke Detached Bungalow",
    subtitle: "Charming bungalow on a deep lot with a renovated kitchen and a separate lower-level entrance.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,400 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202604001",  // DEMO
  },
  {
    id: "2",
    number: "02/07",
    title: "North York Condo Suite",
    subtitle: "Sun-filled condo steps to the subway with an open layout, private balcony, and underground parking.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "950 sq ft", beds: "2 Beds", baths: "2 Baths" },
    mls: "MLS® 202604002",  // DEMO
  },
  {
    id: "3",
    number: "03/07",
    title: "Rexdale Family Townhome",
    subtitle: "Well-maintained townhome near schools and transit with a finished basement and private parking.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,600 sq ft", beds: "3 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202604003",  // DEMO
  },
  {
    id: "4",
    number: "04/07",
    title: "Yorkdale-Glen Park Family Residence, Toronto",
    subtitle: "Detached multi-level bungalow on Playfair Ave with strong lot dimensions close to subway line and Yorkdale Shopping Centre.",
    image: "/listing1.jpg",
    price: "$3,000+ / Monthly",
    category: "residential",
    status: "Active",
    specs: { size: "1,100+ sq ft", beds: "2+1 Beds", baths: "2 Baths" },
    mls: "MLS® W13022317",
  },
  {
    id: "5",
    number: "05/07",
    title: "Humber Valley Executive Home",
    subtitle: "Refined custom home in a prestigious ravine setting with soaring ceilings and premium finishes.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,800 sq ft", beds: "5 Beds", baths: "4.5 Baths" },
    mls: "MLS® 202604005",  // DEMO
  },
  {
    id: "6",
    number: "06/07",
    title: "New Tecumseth Country Residence",
    subtitle: "Peaceful property with scenic views and generous grounds, just outside the city.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,500 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202604006",  // DEMO
  },
  {
    id: "7",
    number: "07/07",
    title: "Weston Investment Duplex",
    subtitle: "Solid duplex in an established neighbourhood offering reliable rental income and transit access.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,200 sq ft", beds: "5 Beds", baths: "3 Baths" },
    mls: "MLS® 202604007",  // DEMO
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "Toronto Clients",
    body: "From Etobicoke homes to North York residences, receive personal guidance for the move ahead.",
  },
  areaBadge: "West Toronto & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Professional",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["RE/MAX", "95% Satisfaction"],
      handle: "Sandra Colucci | RE/MAX",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Etobicoke, North York, Toronto, and New Tecumseth.",
      name: "Sandra Colucci",
      role: "Sales Representative",
      initials: "SC",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 2012",
      quote: "14+ years of professional real estate experience serving over 9 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Sandra Colucci",
      role: "Sales Representative | RE/MAX West Realty Inc.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Sandra brings local market knowledge, thorough communication, and personalized care to clients across West Toronto.",
      rating: 5,
    },
    badge: { reviewCount: "95%", ratingLabel: "Client Satisfaction", clientsCount: "9+ Cities" },
    split: {
      date: "West Toronto & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "West Toronto Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the RE/MAX network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$60M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Sandra Colucci at RE/MAX West Realty Inc. for expert real estate services across Etobicoke, North York, Toronto, and New Tecumseth.",
  bulletPoints: [
    "Over 14 years of dedicated experience serving clients since 2012",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 9+ cities including Etobicoke, North York, Toronto, New Tecumseth",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Sandra (647) 269-9276",
  secondaryCtaLink: "tel:6472699276",
  agentName: "Sandra Colucci",
  agentTitle: "Sales Representative",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Sandra's Approach",
  subtitle: "West Toronto",
  stats: [
    { label: "Satisfaction", value: "95%" },
    { label: "Experience", value: "14+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "RE/MAX West Realty Inc.",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "14+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "95%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by Sandra Colucci.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (647) 555-0199",
    address: "e.g. 123 Main Street, Etobicoke",
  },
  contactDetails: {
    phone: { label: "Direct: (647) 269-9276", href: "tel:6472699276" },
  // TODO: placeholder email, replace with the real one
    email: { label: "sandra-colucci@example.com", href: "mailto:sandra-colucci@example.com" },
    location: "RE/MAX West Realty Inc., 96 Rexdale Blvd, Toronto, ON M9W 1N7",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "RE/MAX West Realty Inc. - Sandra Colucci",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Sandra Colucci", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "RECO Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Etobicoke, North York & Toronto, ON",
    phonePrimary: { label: "Direct: (647) 269-9276", href: "tel:6472699276" },
    phoneSecondary: { label: "Office: (416) 745-2300", href: "tel:4167452300" },
    contactLink: { label: "Email: sandra-colucci@example.com", href: "mailto:sandra-colucci@example.com" },
  },
  brandBar: {
    brandName: "SANDRA COLUCCI",
    badgeText: "RE/MAX West Realty Inc.",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Sandra Colucci - RE/MAX West Realty Inc..",
    copyrightRights: "All rights reserved.",
  },
};