/**
 * =========================================================================
 * NATHAN BIRHANE - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Edit this file to update your personal details, work experience,
 * education, projects, skills, and contact information.
 * Any change made here will instantly reflect across the entire website.
 */

const PORTFOLIO_DATA = {
  // ==========================================
  // 1. PERSONAL INFORMATION & BRANDING
  // ==========================================
  personal: {
    fullName: "Nathan Birhane",
    firstName: "Nathan",
    lastName: "Birhane",
    mainTitle: "Material Engineer",
    subtitle: "Construction Materials Quality Control | Concrete Technology | Quality Assurance",
    location: "Ethiopia",
    
    // Editable contact details placeholders
    email: "nathankasahun@gmail.com", 
    phone: "+251938772320",                   
    linkedIn: "https://www.linkedin.com/in/nathan-birhane29/",
    
    // Status badge displayed on hero section
    availabilityStatus: "Available for Material Engineering & QC Opportunities",
    
    // Profile photo
    profilePhoto: "assets/images/image.png", 
    heroBackground: "assets/images/hero-engineer.jpg",

    // Centralized image paths — update these to change images site-wide
    images: {
      profile: "assets/images/image.png",
      profileFallback: "assets/images/avatar-placeholder.svg",
      projects: {
        fulwaha: "assets/images/High-rise-building.png",
        batchingPlant: "assets/images/Ready-mix-Concrete.png",
        boleHQ: "assets/images/Bole-Headquarter.png"
      },
      projectFallbacks: {
        fulwaha: "assets/images/High-rise-building.png",
        batchingPlant: "assets/images/Ready-mix-Concrete.png",
        boleHQ: "assets/images/Bole-Headquarter.png"
      }
    },
    
    // CV / Resume File Path — official PDF, do not generate from JS data
    cvPath: "assets/docs/Nathan_Birhane_CV.pdf",
    cvFilename: "Nathan_Birhane_CV.pdf"
  },

  // ==========================================
  // 2. PROFESSIONAL SUMMARY
  // ==========================================
  summary: {
    leadText: "Construction Technology and Management graduate with over 3 years of experience in construction and materials engineering, specializing in site coordination, material engineering, and laboratory testing.",
    fullBio: "Construction Technology and Management graduate with over 3 years of experience in construction and materials engineering. Experienced in site coordination, material engineering, and laboratory testing. Strong skills in organizing site activities, material selection, quality control, and team coordination. A dedicated, fast learner with good communication skills and hands-on experience in construction projects. Proficient in Microsoft Word, Excel, BOQ preparation, and mix design. Fluent in Amharic, English, and Tigrigna.",
    coreCompetencies: [
      {
        title: "Materials Laboratory Testing",
        desc: "Comprehensive testing of aggregates, sand, cement, concrete specimens, and asphalt in accordance with ASTM and international standards.",
        icon: "flask-conical"
      },
      {
        title: "Concrete Quality Control & Batching",
        desc: "Monitoring batching plant operations, mix proportions, water-cement ratios, slump tests, and compressive strength development.",
        icon: "boxes"
      },
      {
        title: "Site Supervision & QA/QC",
        desc: "Field inspection of fresh concrete placement, formwork compliance, rebar clearances, curing verification, and quality logs.",
        icon: "hard-hat"
      },
      {
        title: "Compliance & Technical Reporting",
        desc: "Preparing detailed daily test logs, non-conformance records, aggregate sieve grading curves, and technical documentation.",
        icon: "file-check"
      }
    ]
  },

  // ==========================================
  // 3. EDUCATION
  // ==========================================
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) in COTM",
      degreeNote: "Construction Technology and Management",
      institution: "Adigrat University",
      location: "Ethiopia",
      graduationYear: "Nov. 2013 – July 2019",
      status: "Completed",
      highlights: [
        "Construction materials testing methodologies & standard protocols",
        "Concrete technology, mix proportioning, and quality control",
        "Construction technology and site management (COTM) principles",
        "Soil mechanics, foundation engineering, and structural analysis",
        "Project scheduling, quantity surveying, and cost estimation",
        "Surveying, construction drawing interpretation, and project planning",
        "Academic construction projects: design, cost estimation, and technical reporting"
      ]
    }
  ],

  // ==========================================
  // 4. WORK EXPERIENCE
  // ==========================================
  experience: [
    {
      id: "exp-bole",
      organization: "JDAW Engineering Plc.",
      period: "May 2024 – Present",
      isCurrent: true,
      positions: [
        "Senior Laboratory Technician",
        "Material Engineer"
      ],
      location: "Addis Ababa, Ethiopia",
      category: "Aviation Infrastructure & Quality Control",
      responsibilities: [
        "Material testing and laboratory procedures for structural compliance.",
        "Concrete and aggregate testing including compressive strength and slump.",
        "Mix design preparation and verification.",
        "Material property analysis and specification compliance.",
        "Build and organize site activities to enable effective client communication.",
        "Developing and advising recommendations for quality improvements.",
        "Training and awareness teaching for site personnel."
      ],
      keyHighlights: "Senior Laboratory Technician and Material Engineer maintaining rigorous specification compliance for high-load infrastructure."
    },
    {
      id: "exp-kapadushia",
      organization: "Cappadocia Real Estate SC.",
      projectName: "Fulwaha 2B+G+15 Building Project",
      period: "March 2023 – Dec. 2024",
      isCurrent: false,
      positions: [
        "Site Engineer",
        "Material Engineer"
      ],
      location: "Ethiopia",
      category: "High-Rise Commercial & Residential Construction",
      responsibilities: [
        "Material checking and quality verification on site.",
        "Quantity take-off and take-off sheet preparation.",
        "Rebar quantity calculation and verification.",
        "Measurement of completed works.",
        "Coordinate with project management, material suppliers, and specialized site teams.",
        "Prepare daily activity reports, progress records, and technical documentation."
      ],
      keyHighlights: "Supervised high-rise structural pours with strict quality control in slump and compressive strength."
    },
    {
      id: "exp-national-premix",
      organization: "National Premix Construction PLC",
      department: "Concrete Batching Plant",
      period: "January 2023 – January 2024",
      isCurrent: false,
      positions: [
        "Laboratory Technician",
        "Material Engineer",
        "Site Coordinator"
      ],
      location: "Ethiopia",
      category: "Ready-Mix Concrete Production",
      responsibilities: [
        "Conduct construction materials and concrete laboratory tests (compressive strength, slump, air content).",
        "Monitor concrete production quality and batching plant operations to maintain specified water-cement ratios.",
        "Inspect incoming construction materials (coarse aggregates, sand, cement, admixtures) for specification compliance.",
        "Support quality assurance and testing procedures following industrial standards.",
        "Coordinate material testing schedules and quality control activities between the laboratory and batching lines."
      ],
      keyHighlights: "Coordinated continuous quality control across high-volume daily ready-mix concrete batches."
    }
  ],

  // ==========================================
  // 5. PROJECTS
  // ==========================================
  projects: [
    {
      id: "proj-fulwaha",
      title: "Fulwaha 2B+G+15 Building Project",
      company: "Cappadocia Real Estate SC.",
      roles: ["Site Engineer", "Material Engineer"],
      category: "High-Rise Building",
      image: "assets/images/High rise building.png",
      summary: "Major multi-story building development (2 Basements + Ground + 15 Floors) requiring rigorous material quality assurance, structural concrete monitoring, and cross-functional site coordination.",
      scope: "Substructure and superstructure execution, ready-mix concrete delivery oversight, reinforcement placement inspection, and pour checklists.",
      technicalDuties: [
        "Construction progress monitoring and site workflow coordination",
        "Materials quality control and sampling protocols",
        "Concrete quality monitoring during casting of columns, shear walls, and slabs",
        "Coordination between project management, suppliers, and site teams",
        "Daily technical reporting, documentation, and compliance log maintenance"
      ],
      testingFocus: ["Concrete Slump", "7 & 28-day Compressive Strength", "Rebar Clearances", "Aggregate Delivery Checks"],
      tags: ["High-Rise Construction", "Site Supervision", "Concrete QA/QC", "Technical Reporting"]
    },
    {
      id: "proj-batching-plant",
      title: "Concrete Batching Plant Quality Control",
      company: "National Premix Construction PLC",
      roles: ["Laboratory Technician", "Material Engineer", "Site Coordinator"],
      category: "Ready-Mix Concrete",
      image: "assets/images/Ready-mix-Concrete.png",
      summary: "High-output ready-mix concrete batching plant operations delivering diverse commercial concrete grades with strict continuous quality verification and aggregate grading compliance.",
      scope: "Continuous production monitoring, silo material verification, automated batch proportioning checks, moisture compensation adjustments, and laboratory testing.",
      technicalDuties: [
        "Daily laboratory testing of raw aggregates and hardened concrete specimens",
        "Raw material inspection (silt content, sieve analysis, moisture content)",
        "Concrete production monitoring and batching consistency verification",
        "Quality assurance system execution and specimen curing management",
        "Coordination of dispatch schedules aligned with testing verification"
      ],
      testingFocus: ["Sieve Analysis", "Silt Content", "Specific Gravity", "Water Absorption", "Compressive Strength (Cubes/Cylinders)", "Slump Retention"],
      tags: ["Ready-Mix Concrete", "Batching Plant", "Laboratory Testing", "Quality Assurance"]
    },
    {
      id: "proj-bole-hq",
      title: "Materials Engineering at JDAW Engineering Plc.",
      company: "JDAW Engineering Plc.",
      roles: ["Material Engineer"],
      category: "Infrastructure & Aviation",
      image: "assets/images/Bole Headquarter.png",
      summary: "High-precision materials quality control and technical inspection program for airport infrastructure facilities, focusing on durability and strict compliance.",
      scope: "Inspection of construction materials, aggregate quality oversight, concrete conformity assessment, and material testing report compilation.",
      technicalDuties: [
        "Construction materials inspection and incoming material sign-off",
        "Conducting and coordinating field and laboratory test schedules",
        "Concrete and aggregate quality monitoring with compliance reviews against standards",
        "Comprehensive technical reporting and material testing documentation",
        "Active quality assurance coordination and corrective action resolution"
      ],
      testingFocus: ["Material Compliance Verification", "Concrete Conformity", "Aggregate Durability", "Laboratory Audit & Reporting"],
      tags: ["Infrastructure", "Material Testing", "Quality Control", "Technical Reporting"]
    }
  ],

  // ==========================================
  // 6. TECHNICAL SKILLS
  // ==========================================
  technicalSkills: [
    {
      category: "Materials Testing",
      icon: "flask-conical",
      skills: [
        "Construction materials testing",
        "Aggregate grading and sieve analysis",
        "Sand silt content testing",
        "Specific gravity and water absorption tests",
        "Asphalt Marshall mix design",
        "Material property analysis"
      ]
    },
    {
      category: "Concrete Technology",
      icon: "boxes",
      skills: [
        "Concrete quality control",
        "Concrete mix design and batching plant operations",
        "Concrete slump and compressive strength testing",
        "Mix design preparation and verification"
      ]
    },
    {
      category: "Quality Control",
      icon: "shield-check",
      skills: [
        "Material quality control and compliance checking",
        "Technical reporting and documentation",
        "Safety and work procedure adherence",
        "Quantity take-off and BOQ basics"
      ]
    },
    {
      category: "Site Engineering",
      icon: "hard-hat",
      skills: [
        "Construction site supervision",
        "Rebar quantity calculation and verification",
        "Measurement of completed works",
        "Site activity coordination"
      ]
    }
  ],

  // ==========================================
  // 7. SOFTWARE SKILLS (Dedicated Separate Section)
  // Clean skill cards with editable proficiency levels.
  // No arbitrary percentages!
  // ==========================================
  softwareSkills: [
    {
      name: "AutoCAD",
      proficiencyLevel: "Technical Drafting & Plan Interpretation", 
      category: "Computer-Aided Design (CAD)",
      icon: "drafting-compass",
      description: "Proficient in reviewing civil engineering blueprints, structural layouts, reinforcement detailing, architectural drawings, and dimensional verification on site.",
      useCases: ["Structural drawing review", "Site layout verification", "Reinforcement detailing check"]
    },
    {
      name: "Microsoft Office Suite",
      proficiencyLevel: "Engineering Data Analysis & Technical Reporting", 
      category: "Engineering Productivity & Documentation",
      icon: "file-spreadsheet",
      subTools: [
        {
          tool: "Microsoft Excel",
          role: "Concrete compressive strength statistical analysis, aggregate gradation curves, silt calculation sheets, and mix design proportioning."
        },
        {
          tool: "Microsoft Word",
          role: "Formal material inspection reports, non-conformance records, site logs, and technical procedures."
        },
        {
          tool: "Microsoft PowerPoint",
          role: "Quality assurance presentations, team briefings, and site technical progress decks."
        }
      ]
    }
  ],

  // ==========================================
  // 8. CERTIFICATIONS AND TRAINING
  // Clean placeholders for additional certificates
  // ==========================================
  certifications: [
    {
      title: "Construction Materials Quality Assurance & Laboratory Procedures",
      issuer: "Professional Practice & Practical Site Training",           
      description: "Hands-on training in standard test methods for aggregates, cement, and fresh/hardened concrete following ASTM and Ethiopian standards."
    },    
       
  ],

  // ==========================================
  // 9. ACHIEVEMENTS & PROFESSIONAL HIGHLIGHTS
  // Grounded in provided experience, no invented stats
  // ==========================================
  achievements: [
    {
      title: "Batching Plant Quality Consistency",
      category: "Concrete Production",
      icon: "check-circle",
      description: "Monitored continuous ready-mix production quality at National Premix Construction PLC, maintaining strict compliance with required slump, water-cement ratio, and strength criteria."
    },
    {
      title: "High-Rise Quality Supervision (2B+G+15)",
      category: "Site Engineering",
      icon: "building-2",
      description: "Supervised material quality and concrete pours on the Fulwaha building project for Kapadushia Real Estate, ensuring proper testing and smooth coordination with project managers."
    },
    {
      title: "Aviation Infrastructure Quality Auditing",
      category: "Quality Assurance",
      icon: "shield-check",
      description: "Conducted systematic material testing, reviews, and quality documentation at Bole Airport Headquarters to uphold high engineering integrity."
    },
    
  ],

  // ==========================================
  // 10. TESTING STANDARDS APPLIED
  // ==========================================
  testingStandards: [
    { code: "ASTM C39 / C31", name: "Compressive Strength of Cylindrical Concrete" },
    { code: "ASTM C143", name: "Slump of Hydraulic-Cement Concrete" },
    { code: "ASTM C136", name: "Sieve Analysis of Fine and Coarse Aggregates" },
    { code: "ASTM C127 / C128", name: "Relative Density (Specific Gravity) & Absorption" },
    { code: "ASTM C117", name: "Materials Finer than 75-µm (No. 200) Sieve / Silt" },
    { code: "ASTM D6926 / D6927", name: "Marshall Mix Design & Stability for Asphalt" }
  ]
};

// Export to window for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
