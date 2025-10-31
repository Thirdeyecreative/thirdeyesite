const workData = [
  {
    id: "1",
    herosection: {
      tags: ["IOT", "Diagnostics", "Data Logging"],
      title: "IoT Data Logger for EV Autos Scalable Battery Insights",
      footerimage: "/assets/Artboard 1.png",
    },
    ExecutiveSummary:
      "We developed and deployed a scalable IoT Data Logging System for a leading battery manufacturer in the EV auto space. The system captures real-time, time-series data such as location, voltage, current, and temperature from thousands of EV autos across India. This data is pushed to our cloud platform, which generates actionable diagnostic reports to identify performance issues—especially in response to range complaints. The platform has become a critical diagnostic tool and is now deployed across thousands of vehicles.",
    ClientBackground: {
      type: "1",
      leftImage: "/assets/ClientBackground-right-top-icon.webp",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Driving Battery Intelligence",
        description:
          "Our client is a leading EV battery manufacturer serving electric auto-rickshaws and other light commercial vehicles. Faced with rising range complaints and performance concerns, they needed a scalable IoT solution to remotely monitor and diagnose battery health in real time across their growing fleet.",
        footerContent: [
          {
            title: "EV & Battery Tech",
            description: "Industry",
          },
          {
            title: "2024",
            description: "Year of Implementation",
          },
          {
            title: "6 Months",
            description: "Time to Completion",
          },
          {
            title: "Mesha Energy",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Battery insights, <span>Simplified</span>",
      description:
        "Real-time diagnostics to tackle EV range concerns, fleet-wide",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-icon.png",
        title: "Redefining Battery Issue Resolution",
        description:
          "Range complaints in EV autos were difficult to validate without standardized field diagnostics. The absence of real-time battery insights slowed root cause analysis and delayed resolution. With a rapidly growing fleet, the client needed a scalable system to monitor performance across thousands of vehicles.",
        rightsideData: [
          {
            id: "1",
            title:
              "Lack of field diagnostics made it difficult to validate customer-reported battery range issues",
          },
          {
            id: "2",
            title:
              "Absence of live battery performance data hindered proactive monitoring and quick response",
          },
          {
            id: "3",
            title:
              "Diagnosing issues was time-consuming without direct access to on-ground performance metrics",
          },
          {
            id: "4",
            title:
              "Existing systems couldn’t support diagnostics and monitoring across a rapidly expanding fleet",
          },
          {
            id: "5",
            title:
              "Engineers lacked tools for efficient diagnostics, leading to delays and potential errors",
          },
        ],
      },
    },
    objectives: {
      title: " Powering <span>Smarter Diagnostics</span> ",
      description: "Building real-time, scalable EV battery insights",
      realTimeDiagnostics: {
        icon: "/assets/div.YourPlayground_icon__ITdeD.png",
        title: "Comprehensive Data Capture",
        description:
          "Collect time-series data from EV batteries, including metrics like location, voltage, current, and temperature for in-depth analysis",
        rightsideimage: "/assets/objectives-realTimeDiagnostics-icons.png",
      },
      upsConnectivity: {
        title: "Faster Issue Validation",
        description:
          "Enable quick and accurate validation of range-related complaints using real operational data.",
        image: "/assets/objectives-upsConnectivity-image.png",
      },
      smartReports: {
        title: "Visual Diagnostic Reporting",
        description:
          "Generate clear, visual reports to simplify battery performance analysis and fault detection.",
        image: "/assets/objectives-smartReports-image.png",
      },
      cloudSync: {
        title: "Real-Time Cloud Sync",
        icon: "/assets/div.YourPlayground_icon__ITdeD-real-time.png",
        description:
          "Continuously push battery data to a centralized cloud platform for instant access and monitoring.Gain real-time insights and make data-driven decisions with ease.",
      },
      unifiedProcess: {
        title: "Scalable System Design",
        icon: "/assets/div.YourPlayground_icon__ITdeD-system-design.png",
        description:
          "Create an architecture capable of supporting diagnostics across thousands of EVs seamlessly",
      },
    },
    Solution: {
      layout: "1",
      title: "Smarter EV <span>Diagnostics</span>",
      description:
        "Real-time data and cloud tools to manage vehicles",
      offlineFunctionality: {
        title: "Secure Cloud Sync",
        description:
          "Transmit data reliably and with low latency to a centralized cloud system using MQTT for smooth, scalable integration",
        image: "/assets/tsSolution-offlineFunctionality-image.png",
        buttonImage: "/assets/mesha-lot-button-image.png",
      },
      realTimeDiagnostics: {
        title: "Real-Time Data Capture",
        description:
          "Collects key parameters such as voltage, current, GPS location, temperature and (SOC) from EV batteries for accurate diagnostics",
        image: "/assets/Solution-realTimeDiagnostics-image.png",
      },
      seamlessBluetoothIntegration: {
        title: "Graphical Diagnostics",
        description:
          "Use a web-based portal featuring visual charts and graphs to enable quick fault detection and simplify analysis for field engineers",
        image: "/assets/Solution-seamlessBluetoothIntegration-image.png",
      },
      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built with custom IoT hardware, MQTT firmware, TimescaleDB backend, React frontend and scalable cloud on AWS/GCP",
        image: "/assets/technologyBackbone-xplorean-ai.png",
      },
      technicianCommandCenter: {
        title: "Complaint Validation",
        description:
          "Leverage historical time-series data to investigate and validate range-related complaints with evidence-based insights",
        image: "/assets/Solution-technicianCommandCenter-image.png",
      },
      cloudPoweredAnalytics: {
        title: "Scalable Infrastructure",
        description:
          "A backend architecture designed to handle data ingestion and processing across thousands of vehicles without performance degradation.",
        image: "/assets/Solution-cloudPoweredAnalytics-image.png",
      },
      automatedReporting: {
        title: "Remote Accessibility",
        description:
          "Enable stakeholders to access diagnostics and insights from anywhere, facilitating timely decision-making and remote support",
        image: "/assets/Solution-automatedReporting-image.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Precision</span> EV Solutions",
      description:
        "Adaptive tech that tracks and analyzes insights",
      challenges: {
        title: "What we were up against",
        points: [
          "Streaming and processing data from thousands of moving EVs was resource-intensive and hard to manage",
          "Vehicle location data needed to be both precise and fast to support diagnostics and analysis",
          "Operators needed clear, actionable insights without reading complex data",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Used a time-series database and scalable cloud architecture to handle large volumes of real-time data",
          "Applied GPS filtering and edge-side processing to improve accuracy and reduce latency",
          "Designed clean, visual reports with key metrics and alerts, enabling quick understanding and decision-making",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Innovation</span> in Action ",
      description:
        "Faster fault detection, measurable fleet-wide impact",
      metrics: [
        {
          value: "~60%",
          description:
            "reduction in manual inspection and root cause analysis effort",
        },
        {
          value: "~3x Faster",
          description:
            "identification of battery faults using graph-based insights",
        },
        {
          value: "<5 minutes",
          description:
            "to validate range complaints using real-time & historical data",
        },
        {
          value: "Thousands",
          description: "of vehicles connected & monitored with scalability",
        },
        {
          value: "Higher",
          description: " product quality through actionable data",
        },
        {
          value: ">50%",
          description: "improvement in service response time",
        },
        {
          value: "Centralized",
          description:
            "visibility across fleet operations enabled proactive maintenance",
        },
        {
          value: "Real-time",
          description: "access to field performance data for faster decisions",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/Artboard 2.jpg",
      },
      {
        type: "single",
        image: "/assets/Artboard 3.jpg",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-3.png",
      },
      {
        type: "single",
        image: "/assets/Artboard 4.jpg",
      },
      {
        type: "multiple",
        images: ["/assets/Artboard 5.jpg", "/assets/work-gallery-image-6.png"],
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-7.png",
      },
      {
        type: "single",
        image: "/assets/Artboard 6.jpg",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://www.youtube.com/watch?v=DwYJ4fqS4kw",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
  {
    id: "2",
    herosection: {
      tags: ["AI", "Travel", "Assistant"],
      title: "Xplorion AI – Crafting Seamless, AI-Powered Travel Itineraries",
      footerimage: "/assets/xplorean-main.png",
    },
    ExecutiveSummary:
      "We partnered with Xplorion AI to design and develop a smart travel planning application that reimagines how itineraries are created. By leveraging real-time data from Google—reviews, photos, open hours, and directions—we built an intuitive system that delivers hyper-personalized, day-wise travel plans tailored to each user’s preferences. Our goal was to eliminate the complexity of trip planning and replace it with a seamless, AI-driven experience that feels effortless, insightful, and globally scalable.",
    ClientBackground: {
      type: "4",
      leftImage: "/assets/Xplorion AI client-backgournd-let-image-1.webp",
      leftImage2: "/assets/Xplorion AI client-backgournd-let-image-2.webp",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Personalizing Exploration Through AI",
        description:
          "Xplorion AI is a travel-tech startup built for modern explorers who value speed, flexibility, and personalization. The vision: eliminate planning hassles by delivering real-time, AI-powered itineraries tailored to each traveler’s interests and location.",
        footerContent: [
          {
            title: "Travel & AI",
            description: "Industry",
          },
          {
            title: "2024",
            description: "Year of Implementation",
          },
          {
            title: "8 Months",
            description: "Time to Completion",
          },
          {
            title: "Xplorion AI",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Travel <span>Simplified</span>",
      description:
        "All your plans, personalized and updated in real time",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-icon-2.png",
        title: "Reimagining Travel Planning",
        description:
          "Modern travelers often face a fragmented, time-consuming planning experience. With endless tabs, scattered data, and generic recommendations, building a meaningful, personalized itinerary becomes a challenge. Xplorion set out to solve this by creating a smarter way to explore — one that’s fast, personal, and powered by real-time data.",
        rightsideData: [
          {
            id: "1",
            title:
              "Travelers spent hours manually researching destinations and planning each day",
          },
          {
            id: "2",
            title:
              "Itineraries lacked personalization and often missed offbeat or relevant spots",
          },
          {
            id: "3",
            title:
              "Live data like timings, reviews, and directions were scattered across platforms",
          },
          {
            id: "4",
            title:
              "No single tool offered a dynamic, all-in-one planning experience",
          },
          {
            id: "5",
            title:
              "There was no AI-powered solution to align plans with real-time user preferences",
          },
        ],
      },
    },
    objectives: {
      title: "Behind the <span>Journey</span> ",
      description:
        "AI-powered travel—personal, seamless,full of surprises",
      realTimeDiagnostics: {
        icon: "/assets/objectives-realTimeDiagnostics-image-2.png",
        title: "Automate Itinerary Creation",
        description:
          "Design a mobile experience that intelligently builds day-wise travel plans based on user preferences, travel dates, and interests.",
        rightsideimage: "/assets/Xplorion App ss  objectives.png",
      },
      upsConnectivity: {
        title: "Enable Dynamic Updates",
        description:
          "Ensure the app can adapt to changes in timing, availability, and other variables without requiring manual user intervention.",
        image: "/assets/Dynamic updates - objectives.png",
      },
      smartReports: {
        title: "Integrate Real-Time Context ",
        description:
          "Fetch and display live data like open hours, reviews, photos, and directions using Google integrations to ensure relevance and accuracy.",
        image: "/assets/xplorean-objectives-realtime-content.webp",
      },
      cloudSync: {
        title: "Simplify Trip Planning",
        icon: "/assets/objectives-cloudSync-icon-2.png",
        description:
          "Reduce planning complexity by offering an intuitive, all-in-one interface that replaces multiple browser tabs and note-taking.Keep your workflow organized and distraction-free from start to finish.",
      },
      unifiedProcess: {
        title: "Design Meets Function",
        icon: "/assets/objectives-unifiedProcess-icon-2.png",
        description:
          "Craft a visually engaging interface that’s as easy to use as it is delightful, blending personalization with smooth usability.",
      },
    },
    Solution: {
      layout: "2",
      title: "<span>AI Powered</span> Travel",
      description:
        "Effortless, real-time itineraries shaped",
      offlineFunctionality: {
        title: "AI-Based Interest Detection",
        description:
          "Learns what you love through intuitive onboarding, tailoring every trip to your unique interests.",
        image: "/assets/xplorean-solution-image-1.png",
        buttonImage: "/assets/tsSolution-offlineFunctionality-button.png",
      },
      realTimeDiagnostics: {
        title: "Live Data Integration",
        description:
          "Pulls real-time data — like reviews, timings, and images, via Google APIs for context-aware recommendations.",
        image: "/assets/xplorean-solution-image-2.png",
      },

      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase,  Node.js and more.",
        image: "/assets/Tech stack - in xplorean ai.png",
      },

      seamlessBluetoothIntegration: {
        title: "Mapped to Move",
        description:
          "Visualize your entire journey at a glance—each stop marked, ordered, and clickable for quick access to rich place details.",
        image: "/assets/technologyBackbone-xplorean-ai-2.png",
      },

      technicianCommandCenter: {
        title: "Dynamic Itinerary Builder",
        description:
          "Creates optimized, day-wise plans based on your selected locations, pace, and priorities.",
        image: "/assets/xplorean ai -       technicianCommandCenter.png",
      },
      cloudPoweredAnalytics: {
        title: "Multi-Day Planning",
        description:
          "Plan trips across multiple days with structured timelines, grouped stops & seamless navigation.",
        image: "/assets/xplorean ai - cloudPoweredAnalytics.png",
      },
      automatedReporting: {
        title: "Directions & Map Integration",
        description:
          "Offers navigation & live previews, making it easy to get around without switching apps.",
        image: "/assets/xplorean ai - automatedReporting.png",
      },

      SaveandEditPlans: {
        title: "Save & Edit Plans",
        description:
          "Easily bookmark, customize, or reshuffle your itinerary on the go—flexible travel made simple.",
        image: "/assets/xplorean ai - SaveandEditPlans.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Smarter Travel</span> <br /> Simplified",
      description:
        "Smart, adaptive design that makes planning effortless",
      challenges: {
        title: "What we were up against",
        points: [
          "Delivering personalization without compromising on practical logistics like location proximity and opening hours",
          "Avoiding repetitive or generic suggestions in recommendations",
          "Handling API rate limits and maintaining access to live data at scale",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Built a time-aware itinerary engine that smartly aligns user preferences with real-world constraints like travel time and slot availability",
          "Introduced interest clustering and weighted preference scoring to deliver unique, personalized travel experiences",
          "Integrated smart caching and request prioritization to ensure consistent data flow and optimal performance during key user actions",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Impact </span> that <br />  Travels Far",
      description: "Smart itineraries, worldwide impact",
      metrics: [
        {
          value: "~90%",
          description: "of users planned trips without relying on other tools",
        },
        {
          value: "40+ Countries",
          description:
            "where users have planned trips using Xplorion and counting",
        },
        {
          value: "Highly Rated",
          description:
            "consistent user praise for personalization, flow & usability",
        },
        {
          value: "~80%",
          description:
            "reduction in average time spent planning trips manually",
        },
        {
          value: "Global-Ready",
          description: "infrastructure designed for worldwide use",
        },
        {
          value: "~30%",
          description:
            "increase in user retention from personalized travel experiences",
        },
        {
          value: "<10 secs",
          description:
            "average time taken to generate an optimized day-wise itinerary",
        },
        {
          value: "1-Tap Sharing",
          description:
            "Share full itineraries instantly with friends and co-travelers",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/xplorean-13.jpg",
      },
      {
        type: "multiple",
        images: ["/assets/xplorean-11.jpg", "/assets/xplorean-14.jpg"],
      },
      {
        type: "multiple",
        images: ["/assets/xplorean-15.jpg", "/assets/xplorean-20.png"],
      },

      {
        type: "single",
        image: "/assets/xplorean-7.jpg",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
  {
    id: "3",
    herosection: {
      tags: ["IOT", "Diagnostics", "Data Logging"],
      title: "STEP – Gamified NEET PG Prep for India’s Next-Gen Doctors",
      footerimage: "/assets/step-gha-main.png",
    },
    ExecutiveSummary:
      "We built GHA Step, a Flutter-based mobile application designed to help medical students prepare for the NEET PG entrance exam through short, structured, and engaging learning experiences. The app features both free and paid video content, organized into byte-sized steps, with each step reinforced through pre-course and post-course MCQ tests. Additionally, it includes a unique real-time Player vs Player quiz mode, turning exam prep into a fun, competitive experience.",
    ClientBackground: {
      type: "2",
      leftImage: "/assets/stepgha-client-backgournd-let-image-1.png",
      leftImage2: "/assets/stepgha-client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Gamifying NEET PG Prep for the Next-Gen Medico",
        description:
          "GHA STEP is a next-gen edtech solution built for ambitious medical students preparing for the NEET PG exam. The vision: break down complex prep into byte-sized, gamified learning experiences that keep students motivated, competitive, and exam-ready.",
        footerContent: [
          {
            title: "EdTech",
            description: "Industry",
          },
          {
            title: "2025",
            description: "Year of Implementation",
          },
          {
            title: "6 Months",
            description: "Time to Completion",
          },
          {
            title: "GHA STEP",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "NEET PG <span>Made Engaging</span>",
      description:
        "Bite-sized, gamified learning that keeps medicos exam-ready",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-icon-3.png",
        title: "Reimagining NEET PG Preparation",
        description:
          "For thousands of medical aspirants, NEET PG prep is often overwhelming — long hours of passive video watching, unstructured content, and no real way to test skills competitively in real time. STEP set out to break this monotony with a fresh approach: short, focused lessons and a gamified experience that keeps students motivated, sharp, and ahead of the curve.",
        rightsideData: [
          {
            id: "1",
            title:
              "Traditional NEET PG prep can feel endless and exhausting, making it hard for students to stay focused",
          },
          {
            id: "2",
            title:
              "Students struggle to tackle the vast syllabus without clear, bite-sized learning steps",
          },
          {
            id: "3",
            title:
              "Passive video watching alone fails to keep learners fully engaged and motivated",
          },
          {
            id: "4",
            title:
              "No single tool offered a dynamic, all-in-one planning experience",
          },
          {
            id: "5",
            title:
              "Students often lack clear, real-time feedback to track progress and identify weak areas effectively",
          },
        ],
      },
    },
    objectives: {
      title: "<span>Learning,</span> Gamified",
      description:
        "Focused, engaging, motivating study sessions",
      realTimeDiagnostics: {
        icon: "/assets/objectives-realTimeDiagnostics-image-3.png",
        title: "Break Down the Syllabus",
        description:
          "Transform the vast NEET PG syllabus into short, easy-to-consume steps.",
        rightsideimage: "/assets/stepgha-objectives.png",
      },
      upsConnectivity: {
        title: "Flexible Learning Options",
        description:
          "Blend free and paid video content to fit different study needs and budgets.",
        image: "/assets/stepgha-Dynamic-updates-objectives.png",
      },
      smartReports: {
        title: "Test at Every Step",
        description:
          "Integrate pre- and post-course MCQs to reinforce learning and track progress.",
        image: "/assets/stepgha-objectives-realtime-content.png",
      },
      cloudSync: {
        title: "Cross-Platform Ready",
        icon: "/assets/objectives-cloudSync-icon-3.png",
        description:
          "Deliver a seamless experience on Android and iOS with a single Flutter codebase.Build faster, maintain easier, and launch high-performance apps with a native feel.",
      },
      unifiedProcess: {
        title: "Gamify Learning",
        icon: "/assets/objectives-unifiedProcess-icon-3.png",
        description:
          "Build a real-time Player vs Player quiz mode to boost competition and retention.",
      },
    },
    Solution: {
      layout: "2",
      title: "<span>Gamified</span> NEET PG",
      description:
        "Focused, bite-sized learning made clear and engaging",
      offlineFunctionality: {
        title: "Byte-Sized Steps",
        description:
          "Breaks the syllabus into short, topic-specific modules for easier mastery.",
        image: "/assets/stepgha-solution-image-1.png",
        buttonImage: "/assets/tsSolution-offlineFunctionality-button.png",
      },
      realTimeDiagnostics: {
        title: "PvP Quiz Battles",
        description:
          "Real-time Player vs Player quizzes that make prep feel like a game.",
        image: "/assets/stepgha-solution-image-2.png",
      },

      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase,  Node.js and more.",
        image: "/assets/Tech stack - in stepgha.png",
      },

      seamlessBluetoothIntegration: {
        title: "Free & Premium Content",
        description:
          "Structured video paths covering core and advanced topics flexibly.",
        image: "/assets/technologyBackbone-stepgha-2.png",
      },

      technicianCommandCenter: {
        title: "Pre/Post Tests",
        description:
          "MCQ-based tests bookend each topic to reinforce learning outcomes.",
        image: "/assets/stepgha-technicianCommandCenter.png",
      },
      cloudPoweredAnalytics: {
        title: "Leaderboards",
        description:
          "Daily, weekly, and all-time rankings to boost healthy competition.",
        image: "/assets/stepgha-cloudPoweredAnalytics.png",
      },
      automatedReporting: {
        title: "Progress Tracker",
        description:
          "Personal dashboards to monitor performance trends and gaps.",
        image: "/assets/stepgha-automatedReporting.png",
      },

      SaveandEditPlans: {
        title: "19-Subject Notes",
        description:
          "Easily bookmark, customize, or reshuffle your itinerary on the go—flexible travel made simple.",
        image: "/assets/stepgha-SaveandEditPlans.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Prep,</span> Smarter ",
      description:
        "Engaging, real-time learning tools",
      challenges: {
        title: "What we were up against",
        points: [
          "Keeping live quizzes synced between players without lag or unfair delays.",
          "Ensuring students stay engaged with short learning content that could otherwise feel too light.",
          "Securing premium video content while delivering it seamlessly to paying users.",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Engineered a WebSocket-based quiz engine with sub-second latency for smooth, real-time gameplay.",
          "Added micro-goals, achievement badges, and instant feedback loops to keep learners motivated.",
          "Encrypted video streaming with dynamic access controls tied directly to each subscription.",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Learning</span> that Delivers",
      description: "Smarter prep, higher engagement",
      metrics: [
        {
          value: "+50%",
          description:
            "Gamified quizzes and micro-goals boosted total study time",
        },
        {
          value: "65% Up",
          description: "Byte-sized steps lifted course completion rates by 65%",
        },
        {
          value: "Viral PvP",
          description:
            "Real-time quiz mode became the app’s most shared feature",
        },
        {
          value: "10+ Cities",
          description:
            "Rapid adoption in medical colleges across multiple cities",
        },
        {
          value: "4.8⭐ Rated",
          description: "Students loved the app’s usability and learning impact",
        },
        {
          value: "40% Faster",
          description: "Pre/post MCQs sped up topic revision by 40%",
        },
        {
          value: "Better Recall",
          description:
            "Micro-learning improved retention & boosted test scores",
        },
        {
          value: "Cross-Platform",
          description: "One Flutter build, same smooth experience everywhere",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/step-gha-2.jpg",
      },
      {
        type: "multiple",
        images: ["/assets/step-gha-8.png", "/assets/step-gha-10.png"],
      },
      {
        type: "multiple",
        images: ["/assets/step-gha-9.png", "/assets/step-gha-44.jpg"],
      },
      {
        type: "single",
        image: "/assets/step-gha-12.png",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
  {
    id: "4",
    herosection: {
      tags: ["Finops", "Reporting", "Reconciliation"],
      title: "Streamlining Cash Flow Oversight for Shell India Markets",
      footerimage:
        "/assets/Streamlining Cash Flow Oversight for Shell India Markets.png",
    },
    ExecutiveSummary:
      "Shell India Markets required a robust, centralized platform to seamlessly monitor and manage cash collections across hundreds of fuel retail outlets. We built a secure, PAN-India web application that empowers teams with real-time input, tracking, reconciliation, and comprehensive reporting. Today, this solution stands as a mission-critical backbone for Shell’s nationwide cash operations.",
    ClientBackground: {
      type: "3",
      leftImage: "/assets/stepgha-client-backgournd-let-image-1.png",
      leftImage2: "/assets/stepgha-client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/shellindia-right-top-icon.png",
        title: "Empowering Retail Cash Intelligence",
        description:
          "Shell India Markets needed a centralized solution to monitor and manage cash collections across hundreds of fuel outlets. Our secure web app now powers real-time tracking, reconciliation, and reporting for their PAN-India operations.",
        footerContent: [
          {
            title: "Fuel & Energy Retail",
            description: "Industry",
          },
          {
            title: "2024",
            description: "Year of Implementation",
          },
          {
            title: "4 Months",
            description: "Time to Completion",
          },
          {
            title: "Shell India Pvt. Ltd.",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Cash Flow <span>Connected</span>",
      description: "Real-time visibility and streamlined collections",
      contentSection: {
        icon: "/assets/shellindia-contentSection-icon-3.png",
        title: "Fixing the Gaps in Cash Flow Oversight",
        description:
          "Shell’s decentralized cash collection process made it challenging to gain real-time visibility and maintain consistency across hundreds of retail sites — resulting in avoidable delays and inefficiencies in daily operations.",
        rightsideData: [
          {
            id: "1",
            title:
              "The cash collection process was fragmented across multiple retail sites with no unified system",
          },
          {
            id: "2",
            title:
              "Headquarters lacked real-time visibility into daily cash deposits and site-level performance",
          },
          {
            id: "3",
            title:
              "Reconciling deposits with bank slips was inconsistent and time-consuming",
          },
          {
            id: "4",
            title:
              "Lack of central oversight caused data gaps and reporting issues",
          },
          {
            id: "5",
            title:
              "Operational inefficiencies caused delays in tracking and verifying cash flow",
          },
        ],
      },
    },
    objectives: {
      type: "3",
      title: "<span>Clearer</span> Collections",
      description:
        "Centralized, real-time cash flow tracking",
      allSubDatas: [
        [
          {
            icon: "/assets/shellindia-realTimeDiagnostics-image-3.png",
            title: "Cloud Sync",
            description:
              "Unify and standardize the entire cash collection process for hundreds of fuel retail sites nationwide through one secure web application. By consolidating data entry, monitoring, and reporting in a single system, Shell gains clear oversight of daily cash flow, minimizes operational fragmentation, and ensures that every transaction is visible and traceable in real time.",
            rightsideimage: "",
          },
          {
            title: "Automated MIS Reporting",
            icon: "/assets/shellindia-cloudSync-icon-3.png",
            description:
              "Generate precise, Management Information System (MIS) reports automatically, removing the need for repetitive manual data compilation which ensures that key stakeholders, have instant access to verified cash collection data, trends, and insights.",
          },
        ],
        [
          {
            icon: "/assets/shellindia-upsConnectivity-image-3.png",
            title: "Real-Time Data Entry",
            description:
              "Empower cash collection agents with an easy-to-use interface to enter daily cash figures instantly from any location—improving transparency and minimizing manual delays.",
            image: "",
          },
          {
            title: "Seamless Reconciliation",
            icon: "/assets/shellindia-unifiedProcess-icon-3.png",
            description:
              "Ensure that every recorded cash collection aligns perfectly with its corresponding physical bank deposit slip through an automated reconciliation process. This minimizes manual cross-checking, reduces human error, and deters fraudulent reporting. By streamlining the matching of daily entries with actual deposits, Shell can maintain cleaner books, strengthen trust across teams, and uphold complete financial accountability at every site.",
          },
        ],
        [
          {
            icon: "/assets/shellindia-smartReports-image-3.png",
            title: "Daily Site Tracking",
            description:
              "Equip Shell’s management teams with powerful daily tracking tools to monitor cash collection performance at each retail site in real time. This granular visibility helps identify unusual patterns, spot potential discrepancies early, and address them before they escalate. With clear, site-wise insights, decision-makers can compare trends, optimize operations, and maintain steady, healthy cash flow across the entire network.",
            image: "",
          },

          {
            title: "User Access & Roles",
            icon: "/assets/shellindia-userAccessAndRole-icon-3.png",
            description:
              "Maintain accountability and data integrity with robust multi-level user permissions and access controls.",
          },
        ],
      ],
      realTimeDiagnostics: {
        icon: "/assets/shellindia-realTimeDiagnostics-image-3.png",
        title: "Cloud Sync",
        description:
          "Unify and standardize the entire cash collection process for hundreds of fuel retail sites nationwide through one secure web application. By consolidating data entry, monitoring, and reporting in a single system, Shell gains clear oversight of daily cash flow, minimizes operational fragmentation, and ensures that every transaction is visible and traceable in real time.",
        rightsideimage: "",
      },
      upsConnectivity: {
        icon: "/assets/shellindia-upsConnectivity-image-3.png",
        title: "Real-Time Data Entry",
        description:
          "Empower cash collection agents with an easy-to-use interface to enter daily cash figures instantly from any location—improving transparency and minimizing manual delays.",
        image: "",
      },
      smartReports: {
        icon: "/assets/shellindia-smartReports-image-3.png",
        title: "Daily Site Tracking",
        description:
          "Equip Shell’s management teams with powerful daily tracking tools to monitor cash collection performance at each retail site in real time. This granular visibility helps identify unusual patterns, spot potential discrepancies early, and address them before they escalate. With clear, site-wise insights, decision-makers can compare trends, optimize operations, and maintain steady, healthy cash flow across the entire network.",
        image: "",
      },
      cloudSync: {
        title: "Automated MIS Reporting",
        icon: "/assets/shellindia-cloudSync-icon-3.png",
        description:
          "Generate precise, Management Information System (MIS) reports automatically, removing the need for repetitive manual data compilation which ensures that key stakeholders, have instant access to verified cash collection data, trends, and insights.",
      },
      unifiedProcess: {
        title: "Seamless Reconciliation",
        icon: "/assets/shellindia-unifiedProcess-icon-3.png",
        description:
          "Ensure that every recorded cash collection aligns perfectly with its corresponding physical bank deposit slip through an automated reconciliation process. This minimizes manual cross-checking, reduces human error, and deters fraudulent reporting. By streamlining the matching of daily entries with actual deposits, Shell can maintain cleaner books, strengthen trust across teams, and uphold complete financial accountability at every site.",
      },
      userAccessAndRole: {
        title: "User Access & Roles",
        icon: "/assets/shellindia-userAccessAndRole-icon-3.png",
        description:
          "Maintain accountability and data integrity with robust multi-level user permissions and access controls.",
      },
    },
    Solution: {
      layout: "3",
      title:
        'Collections <span class="saparate-controall-section-updated">Simplified</span>',
      description:
        "Seamless, real-time tracking across sites",

      allSubDatas: [
        {
          icon: "/assets/shellindia-offlineFunctionality-icon-3.png",
          title: "Cash Entry Interface",
          description:
            "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
          image: "",
          buttonImage: "",
        },
        {
          title: "Technology Backbone",
          description:
            "Built using a powerful tech stack including HTML CSS JS, PHP, PostgreSQL Managed DB and more.",
          image: "/assets/Tech stack - in stepgha.png",
        },
        {
          icon: "/assets/shellindia-technologyBackbone-icon-3.png",
          title: "Headquarters Dashboard",
          description:
            "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
          image: "",
        },
        {
          icon: "/assets/shellindia-seamlessBluetoothIntegration-icon-3.png",
          title: "Reconciliation Module",
          description:
            "Automatically matches site cash entries with physical bank deposit slips, ensuring accuracy and reducing manual checks.",
          image: "",
        },
        {
          icon: "/assets/shellindia-technicianCommandCenter-icon-3.png",
          title: "Performance Metrics",
          description:
            "Monitors site-wise collection trends, compares historical data, and highlights underperforming locations",
          image: "",
        },
        {
          icon: "/assets/shellindia-cloudPoweredAnalytics-icon-3.png",
          title: "Automated MIS Reports",
          description:
            "Delivers daily, weekly, and monthly collection summaries directly to relevant departments, saving time and effort.",
          image: "",
        },
      ],
      offlineFunctionality: {
        icon: "/assets/shellindia-offlineFunctionality-icon-3.png",
        title: "Cash Entry Interface",
        description:
          "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
        image: "",
        buttonImage: "",
      },
      realTimeDiagnostics: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including HTML CSS JS, PHP, PostgreSQL Managed DB and more.",
        image: "/assets/stepgha-solution-image-2.png",
      },

      technologyBackbone: {
        icon: "/assets/shellindia-technologyBackbone-icon-3.png",
        title: "Headquarters Dashboard",
        description:
          "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
        image: "",
      },

      seamlessBluetoothIntegration: {
        icon: "/assets/shellindia-seamlessBluetoothIntegration-icon-3.png",
        title: "Reconciliation Module",
        description:
          "Automatically matches site cash entries with physical bank deposit slips, ensuring accuracy and reducing manual checks.",
        image: "",
      },

      technicianCommandCenter: {
        icon: "/assets/shellindia-technicianCommandCenter-icon-3.png",
        title: "Performance Metrics",
        description:
          "Monitors site-wise collection trends, compares historical data, and highlights underperforming locations",
        image: "",
      },
      cloudPoweredAnalytics: {
        icon: "/assets/shellindia-cloudPoweredAnalytics-icon-3.png",
        title: "Automated MIS Reports",
        description:
          "Delivers daily, weekly, and monthly collection summaries directly to relevant departments, saving time and effort.",
        image: "",
      },
    },

    ChallengesandResolutions: {
      title: "Scale. <span>Accuracy.</span> Speed",
      description: "Intelligent solutions that grow fast & perform",
      challenges: {
        title: "What we were up against",
        points: [
          "Maintaining consistent data from hundreds of decentralized agents",
          "Matching physical deposit slips with daily digital entries accurately",
          "Keeping the system fast and responsive as usage scaled nationwide",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Deployed smart validation rules, automated sync, and retry logic to prevent errors and data gaps",
          "Built a robust cross-check system that flags mismatches instantly for quick resolution",
          "Optimized database performance, used modular coding, and fine-tuned queries for seamless scalability",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Impact</span> at <span>Scale</span>",
      description:
        "Real-time insights. Faster operations. Total oversight",
      metrics: [
        {
          value: "~100%",
          description:
            "real-time visibility into site-wise daily cash collections",
        },
        {
          value: "~2x Faster",
          description:
            "reconciliation cycle — cut from 2 days to just a few hours",
        },
        {
          value: "~90%",
          description: "reduction in manual MIS reporting time for HQ teams",
        },
        {
          value: "~500+ Sites",
          description: "covered across India with centralized cash monitoring",
        },
        {
          value: "100%",
          description:
            "accountability boost with site-level performance tracking",
        },
        {
          value: "~99%",
          description: "data accuracy through automated cross-checks",
        },
        {
          value: "24/7",
          description: "access to monitor, track &  reconcile cash flow",
        },
        {
          value: "~95%",
          description: "uptime for the system with robust performance ",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/shellindia-gallery-image-1.png",
      },
      {
        type: "single",
        image: "/assets/shellindia-gallery-image-2.jpg",
      },
    ],
    testimonials: [],
  },

  {
    id: "5",
    herosection: {
      tags: ["IOT", "Diagnostics", "Data Logging"],
      title: "End-to-End Design for Mesha’s Data Management Solution",
      footerimage: "/assets/mesha-2-main.png",
    },
    ExecutiveSummary:
      "We developed a Flutter-based mobile application that connects via Bluetooth to UPS (Uninterruptible Power Supply) systems, fetching real-time parameters such as voltage, current, temperature, and battery health. This data is pushed to our cloud platform where it is analyzed and used to generate diagnostic reports. The system is used by service engineers and field technicians to instantly identify issues, leading to faster servicing and increased uptime for critical power systems.",
    ClientBackground: {
      type: "2",
      leftImage: "/assets/mesha-electric-client-backgournd-let-image-1.png",
      leftImage2: "/assets/mesha-electric-client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Powering Energy Intelligence",
        description:
          "The client is a power systems manufacturer with a large installed base of UPS units across industries. Their field teams previously relied on manual readings and inconsistent diagnostic methods, which slowed response times and impacted maintenance efficiency.",
        footerContent: [
          {
            title: "Energy Tech",
            description: "Industry",
          },
          {
            title: "2025",
            description: "Year of Implementation",
          },
          {
            title: "8 Months",
            description: "Time to Completion",
          },
          {
            title: "Mesha Energy",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Solving <span>On-Site</span> Chaos",
      description: "Streamlined diagnostics in one tool",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-mesha-electric-icon-3.png",
        title: "Transforming Field Diagnostics",
        description:
          "Mesha’s field engineers lacked a standardized tool for capturing UPS data, relying on inconsistent, manual diagnostics prone to error. Without a centralized system for reporting or tracking, visibility into fleet performance was limited. This made it difficult to access real-time insights or make proactive, data-driven decisions.",
        rightsideData: [
          {
            id: "1",
            title: "Field engineers lacked a standard tool to collect UPS data",
          },
          {
            id: "2",
            title: "Diagnostics were manual, slow, and prone to errors",
          },
          {
            id: "3",
            title: "There was no centralized system for storing reports",
          },
          {
            id: "4",
            title: "Real-time fleet performance data was unavailable",
          },
          {
            id: "5",
            title: "The team couldn’t use data effectively for decision-making",
          },
        ],
      },
    },
    objectives: {
      title: "Behind the <span>Build</span>",
      description:
        "Unified diagnostics for smarter, faster UPS insights",
      realTimeDiagnostics: {
        icon: "/assets/objectives-realTimeDiagnostics-mesha-electric-image-3.png",
        title: "Real-Time Diagnostics",
        description:
          "Access live data including voltage, current, temperature, and more. Get instant insights into the system’s performance right from the field.",
        rightsideimage: "/assets/Mesha-Data-management.png",
      },
      upsConnectivity: {
        title: "UPS Connectivity",
        description:
          "Easily pair with any UPS unit via Bluetooth using the mobile app. Collect field data wirelessly without needing extra hardware or manual setup.",
        image: "/assets/stepgha-Dynamic-updates-objectives.png",
      },
      smartReports: {
        title: "Smart Reports",
        description:
          "Generate detailed diagnostic reports in seconds. Identify issues quickly with auto-processed insights, reducing human error and saving time.",
        image: "/assets/mesha-electric-objectives-realtime-content.png",
      },
      cloudSync: {
        title: "Cloud Sync",
        icon: "/assets/objectives-cloudSync-mesha-electric-icon-3.png",
        description:
          "Automatically upload diagnostic logs to a centralized cloud. Make data accessible to teams across locations and maintain a secure digital record.",
      },
      unifiedProcess: {
        title: "Unified Process",
        icon: "/assets/objectives-unifiedProcess-mesha-electric-icon-3.png",
        description:
          "Streamline field operations with a standardized diagnostic workflow. One tool for all UPS models—ensuring consistent, reliable data collection.",
      },
    },
    Solution: {
      layout: "1",
      title: "<span>Smarter</span> UPS Operations",
      description: "Centralized tools to standardize and optimize",
      offlineFunctionality: {
        title: "Offline Functionality",
        description:
          "Ensures uninterrupted operation by storing data locally when offline and syncing to cloud once connected.",
        image: "/assets/tsSolution-offlineFunctionality-image.png",
        buttonImage: "/assets/tsSolution-offlineFunctionality-button.png",
      },
      realTimeDiagnostics: {
        title: "Real-Time Diagnostics",
        description:
          "Instantly captures and displays critical data like voltage, current, temperature, and battery cycles.",
        image: "/assets/Solution-realTimeDiagnostics-mesha-electric-image.webp",
      },
      seamlessBluetoothIntegration: {
        title: "Seamless Bluetooth Integration",
        description:
          "Automatically detects and connects to nearby UPS devices for effortless setup and communication.",
        image: "/assets/Solution-seamlessBluetoothIntegration-image.png",
      },
      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase, GCP, and more.",
        image: "/assets/technologyBackbone-xplorean-ai.png",
      },
      technicianCommandCenter: {
        title: "Technician Command Center",
        description:
          "Offers a streamlined dashboard to track device history, current status, and actionable recommendations.",
        image: "/assets/Solution-technicianCommandCenter-image.png",
      },
      cloudPoweredAnalytics: {
        title: "Cloud-Powered Analytics",
        description:
          "Securely uploads diagnostic data for centralized tracking, analytics, and performance insights.",
        image:
          "/assets/Solution-cloudPoweredAnalytics-mesha-electric-image.png",
      },
      automatedReporting: {
        title: "Automated Reporting",
        description:
          "Generates immediate, detailed reports highlighting faults, anomalies, and performance trends.",
        image: "/assets/mesha data management 2.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Simplifying</span> UPS Diagnostics",
      description:
        "Modular systems streamlining performance",
      challenges: {
        title: "What we were up against",
        points: [
          "Handling diverse UPS firmware protocols across multiple models",
          "Maintaining reliable data sync in low-connectivity environments",
          "Achieving consistent performance across Android and iOS devices",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Developed a modular parser system that dynamically adapts to varying firmware architectures and ensures seamless compatibility",
          "Engineered an offline-first architecture with intelligent retry logic to ensure uninterrupted operations and accurate data capture",
          "Implemented Flutter for a unified codebase, ensuring cross-platform UI consistency and reduced development overhead.",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Strategy</span> in Action",
      description: "Smarter diagnostics. Faster service. Real impact",
      metrics: [
        {
          value: "~50%",
          description: "reduction in issue diagnosis time during servicing",
        },
        {
          value: "100%",
          description: "of service visits now generate cloud-logged reports",
        },
        {
          value: "Significant",
          description: "drop in UPS downtime due to faster fault detection",
        },
        {
          value: "~40%",
          description:
            "increased technician efficiency through streamlined workflows",
        },
        {
          value: "Multi-region",
          description:
            "deployment with active usage by technicians across zones",
        },
        {
          value: "Real-time",
          description: "analytics enabling data-driven maintenance decisions",
        },
        {
          value: "24/7",
          description:
            "system visibility enabled through real-time data logging",
        },
        {
          value: "<5 mins",
          description: "average time to generate & sync reports to the cloud",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/mesha-2-24.jpg",
      },
      {
        type: "single",
        image: "/assets/mesha-2-21.jpg",
      },
      {
        type: "single",
        image: "/assets/mesha-2-40.png",
      },
      {
        type: "single",
        image: "/assets/mesha-2-20.jpg",
      },
      {
        type: "multiple",
        images: ["/assets/mesha-2-23.jpg", "/assets/mesha-2-41.jpg"],
      },
      {
        type: "single",
        image: "/assets/mesha-2-43.png",
      },
      {
        type: "single",
        image: "/assets/mesha-2-22.jpg",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },

  {
    id: "6",
    herosection: {
      tags: ["Finops", "Reporting", "Reconciliation"],
      title: "Retail Cloud: Streamlining Digital Payments for Shell India",
      footerimage:
        "/assets/Streamlining Cash Flow Oversight for Shell India Markets.png",
    },
    ExecutiveSummary:
      "After the success of our cash monitoring system for Shell India Markets, we designed and developed Shell Retail Cloud — a secure, web-based digital payments interface that streamlines how Shell retailers manage non-cash transactions. Our solution gives retailers across India real-time visibility of digital sales, the ability to initiate swipe hold requests, and complete control over their digital payment workflows, transforming how Shell’s retail network operates at scale.",
    ClientBackground: {
      type: "3",
      leftImage: "/assets/stepgha-client-backgournd-let-image-1.png",
      leftImage2: "/assets/stepgha-client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/shellindia-right-top-icon.png",
        title: "Powering Digital Payment Transparency",
        description:
          "Shell India Markets, a major energy leader with an expanding retail network, needed clear visibility and control over the surge in digital payments at fuel stations nationwide — ensuring every non-cash transaction stayed transparent, traceable, and efficient.",
        footerContent: [
          {
            title: "Fuel & Energy Retail",
            description: "Industry",
          },
          {
            title: "2024",
            description: "Year of Implementation",
          },
          {
            title: "6 Months",
            description: "Time to Completion",
          },
          {
            title: "Shell India Pvt. Ltd.",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Digital Payments, <span>Simplified</span>",
      description: "Real-time clarity and control for every Shell transaction",
      contentSection: {
        icon: "/assets/shellindia-2-contentSection-icon-3.png",
        title: "Untangling the Digital Knot",
        description:
          "As Shell’s digital payments expanded nationwide, disconnected systems, manual processes, and limited transparency slowed operations. We stepped in to unify, streamline, and secure every transaction, giving the team full control and real-time clarity.",
        rightsideData: [
          {
            id: "1",
            title:
              "Payment data scattered across sites hindered smooth reporting and clear audits",
          },
          {
            id: "2",
            title:
              "Cumbersome Swipe/Hold Process: Retailers handled swipe hold requests manually, leading to errors",
          },
          {
            id: "3",
            title:
              "No streamlined way to match site-level digital payments with deposits",
          },
          {
            id: "4",
            title:
              "Digital sales across sites lacked a unified monitoring system",
          },
          {
            id: "5",
            title:
              "HQ had delayed or incomplete insight into transaction flow and status",
          },
        ],
      },
    },
    objectives: {
      type: "3",
      title: "Payments, <span>Unified</span>",
      description: "Secure, effortless nationwide control",
      allSubDatas: [
        [
          {
            icon: "/assets/shellindia-2-realTimeDiagnostics-image-3.png",
            title: "Centralized Payment Control",
            description:
              "Unify and standardize the entire cash collection process for hundreds of fuel retail sites nationwide through one secure web application. By consolidating data entry, monitoring, and reporting in a single system, Shell gains clear oversight of daily cash flow, minimizes operational fragmentation, and ensures that every transaction is visible and traceable in real time.",
            rightsideimage: "",
          },
          {
            title: "Secure Swipe Hold Management",
            icon: "/assets/shellindia-2-cloudSync-icon-3.png",
            description:
              "Enable retailers to easily raise swipe hold requests with built-in checks, approvals, and notifications, ensuring funds flow is smooth and transparent.",
          },
        ],
        [
          {
            icon: "/assets/shellindia-2-upsConnectivity-image-3.png",
            title: "Detailed Audit Trails",
            description:
              "Maintain comprehensive transaction histories and reconciliation logs to simplify audits, enhance trust, and make compliance with Shell’s financial governance effortless.",
            image: "",
          },
          {
            title: "Real-Time Settlement Visibility",
            icon: "/assets/shellindia-2-unifiedProcess-icon-3.png",
            description:
              "Provide Shell’s finance teams with live dashboards showing the status of all digital payments, settlements, and discrepancies, cutting down lag in reporting and improving cash flow predictability.",
          },
        ],
        [
          {
            icon: "/assets/shellindia-2-smartReports-image-3.png",
            title: "Seamless System Integration",
            description:
              "Ensure the new digital payments interface connects smoothly with Shell’s wider financial systems, guaranteeing secure data exchange and minimizing manual handovers.",
            image: "",
          },

          {
            title: "Instant Insights",
            icon: "/assets/shellindia-2-userAccessAndRole-icon-3.png",
            description:
              "Deliver a quick-glance dashboard for site managers to view payment statuses and take action on the go.",
          },
        ],
      ],
      realTimeDiagnostics: {
        icon: "/assets/shellindia--realTimeDiagnostics-image-3.png",
        title: "Cloud Sync",
        description:
          "Unify and standardize the entire cash collection process for hundreds of fuel retail sites nationwide through one secure web application. By consolidating data entry, monitoring, and reporting in a single system, Shell gains clear oversight of daily cash flow, minimizes operational fragmentation, and ensures that every transaction is visible and traceable in real time.",
        rightsideimage: "",
      },
      upsConnectivity: {
        icon: "/assets/shellindia-upsConnectivity-image-3.png",
        title: "Real-Time Data Entry",
        description:
          "Empower cash collection agents with an easy-to-use interface to enter daily cash figures instantly from any location—improving transparency and minimizing manual delays.",
        image: "",
      },
      smartReports: {
        icon: "/assets/shellindia-smartReports-image-3.png",
        title: "Daily Site Tracking",
        description:
          "Equip Shell’s management teams with powerful daily tracking tools to monitor cash collection performance at each retail site in real time. This granular visibility helps identify unusual patterns, spot potential discrepancies early, and address them before they escalate. With clear, site-wise insights, decision-makers can compare trends, optimize operations, and maintain steady, healthy cash flow across the entire network.",
        image: "",
      },
      cloudSync: {
        title: "Automated MIS Reporting",
        icon: "/assets/shellindia-cloudSync-icon-3.png",
        description:
          "Generate precise, Management Information System (MIS) reports automatically, removing the need for repetitive manual data compilation which ensures that key stakeholders, have instant access to verified cash collection data, trends, and insights.",
      },
      unifiedProcess: {
        title: "Seamless Reconciliation",
        icon: "/assets/shellindia-unifiedProcess-icon-3.png",
        description:
          "Ensure that every recorded cash collection aligns perfectly with its corresponding physical bank deposit slip through an automated reconciliation process. This minimizes manual cross-checking, reduces human error, and deters fraudulent reporting. By streamlining the matching of daily entries with actual deposits, Shell can maintain cleaner books, strengthen trust across teams, and uphold complete financial accountability at every site.",
      },
      userAccessAndRole: {
        title: "User Access & Roles",
        icon: "/assets/shellindia-userAccessAndRole-icon-3.png",
        description:
          "Maintain accountability and data integrity with robust multi-level user permissions and access controls.",
      },
    },
    Solution: {
      layout: "3",
      title: "Digital Payments, <span>Smarter</span>",
      description: "Seamless tools to track, reconcile and report sales",

      allSubDatas: [
        {
          icon: "/assets/shellindia-2-offlineFunctionality-icon-3.png",
          title: "Swipe Hold Requests",
          description:
            "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
          image: "",
          buttonImage: "",
        },
        {
          title: "Technology Backbone",
          description:
            "Built using a powerful tech stack including Angular / React, Node.js, PostgreSQL, AWS and more.",
          image: "/assets/Tech stack - in stepgha.png",
        },
        {
          icon: "/assets/shellindia-2-technologyBackbone-icon-3.png",
          title: "Retailer Logins",
          description:
            "Dedicated logins for each retail site or operator ensure accountability and controlled access. Individual credentials keep transaction data secure and role-based, with complete activity history. Retailers manage with transparency.",
          image: "",
        },
        {
          icon: "/assets/shellindia-2-seamlessBluetoothIntegration-icon-3.png",
          title: "Transaction Dashboard",
          description:
            "A centralized dashboard displays real-time digital payment transactions across all retail sites. Managers get instant, data-driven insights.",
          image: "",
        },
        {
          icon: "/assets/shellindia-2-technicianCommandCenter-icon-3.png",
          title: "Reconciliation Module",
          description:
            "Automatically syncs transactions with bank and gateway data to ensure error-free settlements.Cuts manual checks, boosts audit readiness.",
          image: "",
        },
        {
          icon: "/assets/shellindia-2-cloudPoweredAnalytics-icon-3.png",
          title: "Automated MIS Reports",
          description:
            "Generates clear, actionable digital sales reports for finance and operations teams on demand. Faster reports, clearer cash flow.",
          image: "",
        },
      ],
      offlineFunctionality: {
        icon: "/assets/shellindia-offlineFunctionality-icon-3.png",
        title: "Cash Entry Interface",
        description:
          "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
        image: "",
        buttonImage: "",
      },
      realTimeDiagnostics: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including HTML CSS JS, PHP, PostgreSQL Managed DB and more.",
        image: "/assets/stepgha-solution-image-2.png",
      },

      technologyBackbone: {
        icon: "/assets/shellindia-technologyBackbone-icon-3.png",
        title: "Headquarters Dashboard",
        description:
          "A simple, secure input screen for agents to log daily cash collections at each site — keeping records clear and consistent. Each entry instantly updates the central database, ensuring data stays current and auditable.",
        image: "",
      },

      seamlessBluetoothIntegration: {
        icon: "/assets/shellindia-seamlessBluetoothIntegration-icon-3.png",
        title: "Reconciliation Module",
        description:
          "Automatically matches site cash entries with physical bank deposit slips, ensuring accuracy and reducing manual checks.",
        image: "",
      },

      technicianCommandCenter: {
        icon: "/assets/shellindia-technicianCommandCenter-icon-3.png",
        title: "Performance Metrics",
        description:
          "Monitors site-wise collection trends, compares historical data, and highlights underperforming locations",
        image: "",
      },
      cloudPoweredAnalytics: {
        icon: "/assets/shellindia-cloudPoweredAnalytics-icon-3.png",
        title: "Automated MIS Reports",
        description:
          "Delivers daily, weekly, and monthly collection summaries directly to relevant departments, saving time and effort.",
        image: "",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Payments,</span> made simple",
      description: "Secure, seamless and effortless every time",
      challenges: {
        title: "What we were up against",
        points: [
          "Prevent unauthorized swipe hold requests across multiple retail sites",
          "Maintain real-time updates and accuracy while integrating multiple payment gateways",
          "Design an intuitive system for a wide range of non-technical retail operators",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Deployed strict multi-level access with OTP verification for every request.",
          "Engineered a secure, robust API layer to ensure instant, accurate sync.",
          "Crafted a clean, mobile-first UI with step-by-step guidance for smooth operations.",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Clearer</span> Digital payments",
      description: "Real-time tracking and seamless nationwide rollout",
      metrics: [
        {
          value: "~100%",
          description:
            "real-time visibility into digital transactions across all sites",
        },
        {
          value: "1-Click",
          description: "swipe hold requests replaced lengthy manual processes",
        },
        {
          value: "100%",
          description: "rollout coverage across Shell fuel stations PAN India",
        },
        {
          value: "95%+",
          description:
            "improvement in reconciliation accuracy and data integrity",
        },
        {
          value: "10+ hrs saved",
          description: "weekly by finance teams on payment audits",
        },
        {
          value: "<30 Secs",
          description:
            "average time for a retailer to submit a swipe hold request",
        },
        {
          value: "0 Downtime",
          description:
            "ensured with robust backend and secure API integrations",
        },
        {
          value: "Future-Ready",
          description:
            "platform scalable to add new payment gateways & features",
        },
      ],
    },
    gallery: [],
    testimonials: [],
  },

  {
    id: "7",
    herosection: {
      tags: ["Agritech", "IoT", "Operation"],
      title: "Naren Smart Connect Farming, Automated",
      footerimage: "/assets/Naren-electric-hero-footer-image.png",
    },
    ExecutiveSummary:
      "We developed Naren Smart Connect, a Flutter-based mobile application and admin panel for controlling and monitoring GSM-enabled motor controller devices via SMS. Unlike typical IoT systems that rely on internet connectivity, this solution ensures offline resilience by using SMS communication to operate devices such as pumps and controllers in remote or rural environments. The system also includes robust message parsing, device response handling, and real-time feedback, ensuring a seamless app-like experience for users, even when offline.",
    ClientBackground: {
      type: "5",
      leftImage: "/assets/naren-electric-client-backgournd-let-image-1.png",
      leftImage2: "/assets/naren-electric-client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Reliable GSM Control for Remote Operations",
        description:
          "NAREN Electrix is a trusted hardware manufacturer providing GSM-based motor controller modules that ensure dependable remote control of motors and pumps. Designed for agriculture, rural water supply, and industrial automation, their solutions thrive even in areas with limited connectivity by prioritizing an SMS-first communication platform.",
        footerContent: [
          {
            title: "Agritech & Automation",
            description: "Industry",
          },
          {
            title: "2025",
            description: "Year of Implementation",
          },
          {
            title: "4 Months",
            description: "Time to Completion",
          },
          {
            title: "Naren Electrix",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "<span>Control,</span> That stays connected",
      description: "Reliable IoT and simple SMS tools farmers can count on",
      contentSection: {
        icon: "/assets/naren-electric-ProblemStatement-contentSection-icon-2.png",
        title: "Closing the Control Gap",
        description:
          "In poor-connectivity areas, IoT failed and manual SMS commands were confusing. Users couldn’t easily manage devices or track feedback — a simpler, smarter solution was needed.",
        rightsideData: [
          {
            id: "1",
            title: "Existing IoT systems failed in low-connectivity regions",
          },
          {
            id: "2",
            title: "Manual SMS commands were confusing and user-unfriendly",
          },
          {
            id: "3",
            title: "No centralized platform to manage devices and users",
          },
          {
            id: "4",
            title: "Tracking command status and feedback was unreliable",
          },
          {
            id: "5",
            title: "Farmers lacked an easy, efficient way to stay in control",
          },
        ],
      },
    },
    objectives: {
      title: "<span>Complexity,</span> Simplified ",
      description:
        "Offline GSM management and remote control",
      realTimeDiagnostics: {
        icon: "/assets/naren-electric-objectives-realTimeDiagnostics-image-2.png",
        title: "Intuitive SMS Control",
        description:
          "Design a user-friendly mobile app to operate GSM-enabled devices entirely through SMS commands.",
        rightsideimage: "/assets/Naren-app-objectives.png",
      },
      upsConnectivity: {
        title: "Offline-First Reliability",
        description:
          "Minimize reliance on internet connectivity by leveraging SMS-based control instead of network-heavy IoT protocols.",
        image: "/assets/Dynamic updates - objectives.png",
      },
      smartReports: {
        title: "Real-Time Status Sync",
        description:
          "Parse incoming SMS replies to instantly update device status within the app.",
        image: "/assets/naren-real-time-status-sync.png",
      },
      cloudSync: {
        title: "Cross-Device Compatibility",
        icon: "/assets/naren-electric-objectives-cloudSync-icon-2.png",
        description:
          "Ensure smooth performance across all Android devices, even with restrictive OEMs or custom OS variants.",
      },
      unifiedProcess: {
        title: "Centralized Admin Panel",
        icon: "/assets/naren-electric-objectives-unifiedProcess-icon-2.png",
        description:
          "Develop a robust backend panel to manage users, monitor devices, and streamline configurations.",
      },
    },
    Solution: {
      layout: "4",
      title: "Control, <span>Anywhere</span>",
      description: "Offline-first SMS automation that works like smart IoT",
      offlineFunctionality: {
        title: "SMS Command UI",
        description:
          "Control GSM-enabled devices with an intuitive app interface that sends secure SMS commands in the background.",
        image: "/assets/naren-electric-offlineFunctionality-image.png",
        buttonImage: "",
      },
      realTimeDiagnostics: {
        title: "Real-Time Feedback",
        description:
          "Parse incoming SMS responses and reflect live status updates instantly within the app.",
        image: "/assets/naren-electric-realTimeDiagnostics-image.png",
      },
      seamlessBluetoothIntegration: {
        title: "Device Status Sync",
        description:
          "Store and sync device history and state seamlessly whenever connectivity is restored.",
        image: "/assets/naren-electric-seamlessBluetoothIntegration-image.png",
      },
      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase,  Node.js and more.",
        image: "/assets/technologyBackbone-xplorean-ai.png",
      },
      technicianCommandCenter: {
        title: "Offline Resilience",
        description:
          "Operate reliably without internet, leveraging telecom networks for remote control anywhere, anytime.",
        image: "/assets/naren-electric-technicianCommandCenter-image.png",
      },
      cloudPoweredAnalytics: {
        title: "Admin Panel",
        description:
          "Centrally manage registered devices, assign users, push firmware updates & monitor logs.",
        image: "/assets/naren-electric-cloudPoweredAnalytics-image.png",
      },
      automatedReporting: {
        title: "Field Installer Mode",
        description:
          "A lightweight, user-friendly dashboard built for on-site technicians to quickly configure, test, and activate new devices. It streamlines installation, ensures proper connectivity, and reduces setup time in the field.",
        image: "",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Offline Control,</span> Solved",
      description: "Real-time SMS IoT management that ",
      challenges: {
        title: "What we were up against",
        points: [
          "Guaranteeing SMS delivery and response parsing across countless Android device brands and OS customizations.",
          "Creating an app experience that feels instant, even when SMS communication naturally has delays.",
          "Managing multiple SMS response formats due to variations in firmware versions across devices.",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Engineered a custom Flutter plugin with device-specific SMS rules to handle OEM quirks reliably.",
          "Designed asynchronous UI updates with smart state predictions and delayed confirmations to mimic real-time control.",
          "Developed a flexible, regex-powered SMS parser that can be remotely updated to adapt to new formats on the fly.",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "<span>Performance</span> you can trust ",
      description: "Reliable control in real-world conditions",
      metrics: [
        {
          value: "~100%",
          description: "app-like control with zero internet needed",
        },
        {
          value: ">99.5%",
          description: "command success rate even in low-signal zones",
        },
        {
          value: "~85%",
          description: "reduction in training time for field operators",
        },
        {
          value: "~5000+",
          description: "devices onboarded and actively managed",
        },
        {
          value: "~80%",
          description: "fewer manual SMS entry errors reported",
        },
        {
          value: "100%",
          description: "adoption among partner technicians and farmers",
        },
        {
          value: "~60%",
          description:
            "less downtime for operations due to instant pump control",
        },
        {
          value: "~40%",
          description: "reduction in manual troubleshooting time per site",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/Naren-IOT-17.jpg",
      },
      {
        type: "multiple",
        images: ["/assets/Naren-IOT-19.jpg", "/assets/Naren-IOT-18.jpg"],
      },
      {
        type: "multiple",
        images: ["/assets/Naren-IOT-16.jpg", "/assets/Naren-IOT-22.png"],
      },
      {
        type: "single",
        image: "/assets/Naren-IOT-7.jpg",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
];

export default workData;
