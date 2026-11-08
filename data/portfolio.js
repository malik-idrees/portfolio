// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the site.
//
// Screenshots work in this order for each project:
//   1. A saved file listed in data/screenshots.json (created by: npm run screenshots)
//   2. A live full-page screenshot of the project's url (loaded automatically)
//   3. The placeholder in /public/projects/<slug>.svg if both of the above fail
//
// To use your own image for a project instead, add  image: "/projects/my-file.png"
// Tall screenshots scroll top-to-bottom on hover automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Idrees Majid",
  firstName: "Idrees",
  title: "GoHighLevel Automation Expert & Full-Stack MERN Developer",
  location: "Multan, Pakistan",
  email: "mhprincemalik@gmail.com",
  phone: "+92 306 6956251",
  whatsapp: "https://wa.me/923066956251",
  intro:
    "I build web platforms on the MERN stack and connect them to CRMs, payments and internal tools with GoHighLevel, n8n, Make.com and Zapier, so the systems a business runs on actually talk to each other.",
  education: "Government College University Faisalabad (GCUF)",
};

export const stats = [
  { value: "18+", label: "Sites & funnels shipped" },
  { value: "2+", label: "Years in GHL & automation" },
  { value: "MERN", label: "Full-stack builds" },
];

export const skills = [
  { group: "CRM & Automation", items: ["GoHighLevel (GHL)", "n8n", "Make.com", "Zapier"] },
  { group: "Full-Stack (MERN)", items: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { group: "Frontend", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Tools", items: ["Stripe", "Webhooks", "Git/GitHub", "Postman", "Vercel"] },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Uniworth",
    period: "Present",
    points: ["Building and maintaining web platforms and automated business workflows."],
  },
  {
    role: "GoHighLevel Developer",
    company: "Naxon Solutions",
    period: "1 Year",
    points: ["Built and managed GoHighLevel accounts, pipelines and automations for client campaigns."],
  },
  {
    role: "GoHighLevel Developer",
    company: "Xort Logix",
    period: "6 Months",
    points: ["Set up and configured GoHighLevel accounts, funnels and workflows for client projects."],
  },
];

export const featuredProjects = [
  {
    title: "MEDCollab",
    subtitle: "Clinician-Brand Marketplace Platform",
    url: "https://medcollab.io",
    slug: "medcollab",
    image: "/projects/medcollab-dashboard.jpg",
    description:
      "A curated marketplace connecting licensed clinicians with health brands for paid content partnerships. The platform brokers every deal: rate negotiation, markup, payment and introduction.",
    highlights: [
      "Trust-first flow: clinician pay hidden from brands, identity hidden until payment",
      "Brand, clinician and admin dashboards in one Next.js app",
      "Stripe retainers with trial month, Supabase auth + RLS, GHL CRM sync",
      "Referral system paying clinicians 10% of referred fees monthly",
    ],
    tags: ["Next.js", "Supabase", "Stripe", "GoHighLevel"],
  },
  {
    title: "PSI Guys",
    subtitle: "Instant Quote & Booking Tool",
    url: "https://psiguystx.com",
    slug: "psi-guys",
    image: "/projects/psi-guys-quote-tool.jpg",
    description:
      "An instant quote calculator with live pricing based on service selection and home size, plus an online booking flow.",
    highlights: [
      "Live pricing engine driven by service and home size",
      "Booking flow integrated with GoHighLevel",
      "Automated lead capture and follow-up",
    ],
    tags: ["React", "Calculator", "GoHighLevel", "Automation"],
  },
];

// Automation work (internal systems, so "url" is optional; leave it out and the card won't link anywhere)
export const automations = [
  {
    title: "GoHighLevel Workflow Automations",
    subtitle: "Lead, Nurture & Membership Systems",
    slug: "ghl-automation-workflows",
    image: "/projects/ghl-automation-workflows.jpg",
    description:
      "GoHighLevel workflows that capture leads, follow up in minutes and keep nurturing until a booking or sale happens, plus full membership onboarding and renewal flows.",
    highlights: [
      "Speed-to-lead: form triggers, condition branching, opportunity + tag updates and instant team alerts",
      "Multi-day SMS and email nurture for leads who haven't booked yet",
      "Membership flows: free month, founding list, Skool members, paid upgrades and renewals",
      "Lead magnet delivery for guides and eBooks, with live enrollment tracking",
    ],
    tags: ["GoHighLevel", "Workflows", "SMS & Email", "Pipelines", "Skool"],
  },
];

export const websites = [
  { title: "AOS Credit Academy", url: "https://aoscreditacademy.com/home", slug: "aos-credit-academy", tag: "Education" },
  { title: "National Disability Benefit (SSDI)", url: "https://nationaldisabilitybenefit.com/ssdi", slug: "national-disability-benefit", tag: "Lead Gen" },
  { title: "Nupoxy Pools", url: "https://nupoxypools.ca/home", slug: "nupoxy-pools", tag: "Home Services" },
  { title: "RestorKC", url: "https://restorkc.com/", slug: "restorkc", tag: "Restoration" },
  { title: "Loftbox", url: "https://loftbox.co.uk/", slug: "loftbox", tag: "Home Improvement" },
  { title: "Horse Energy Solutions", url: "https://www.horseenergysolutions.com", slug: "horse-energy-solutions", tag: "Energy" },
  { title: "New Beginning Credit Repair", url: "https://freeaudit.newbeginningcreditrepair.org/", slug: "new-beginning-credit-repair", tag: "Free Audit Funnel" },
];

export const funnels = [
  { title: "Funnel Build 1", url: "https://app.gohighlevel.com/v2/preview/MVL1Cv1uJx2WiqWHSaQf", slug: "funnel-1" },
  { title: "Funnel Build 2", url: "https://app.gohighlevel.com/v2/preview/dh2ZmtkUDE1KRemKP12f", slug: "funnel-2" },
  { title: "Funnel Build 3", url: "https://app.gohighlevel.com/v2/preview/xIWarVUz2ums0WbTfNgw", slug: "funnel-3" },
  { title: "Funnel Build 4", url: "https://app.gohighlevel.com/v2/preview/nhFoYZ9NiBH0ubzZBjXs", slug: "funnel-4" },
  { title: "Funnel Build 5", url: "https://app.gohighlevel.com/v2/preview/7hIKgTJFFHKntGxrxPvd", slug: "funnel-5" },
  { title: "Funnel Build 6", url: "https://app.gohighlevel.com/v2/preview/TjG9KmwRZnC9FjClx37l", slug: "funnel-6" },
  { title: "Funnel Build 7", url: "https://app.gohighlevel.com/v2/preview/R9LajdoQXozKIfnMK1mf", slug: "funnel-7" },
  { title: "Funnel Build 8", url: "https://api.automationbooster.com/preview/WacZkSxMPDTJSykMoKSC", slug: "funnel-8" },
  { title: "Funnel Build 9", url: "https://sites.leadconnectorhq.com/preview/ywKqPvJH1gmw0fvqAb5w", slug: "funnel-9" },
];
