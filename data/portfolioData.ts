
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  hero: {
    name: "Pham Quang Vu",
    role: "Senior Mobile Engineer | Flutter Specialist",
    description: "Architecting high-performance iOS and Android applications. Focused on building scalable, beautiful, and user-centric mobile solutions with Flutter and the Firebase ecosystem.",
    techStack: [
      { name: "Flutter", icon: "flutter_dash" },
      { name: "Firebase", icon: "local_fire_department" },
      { name: "Code", icon: "code" },
      { name: "Android", icon: "android" }
    ]
  },
  about: {
    title: "Hi, I'm Pham Quang Vu. I build world-class mobile experiences.",
    subtitle: "I am a dedicated Senior Mobile Developer with over 3 years of experience specializing in Flutter. I pride myself on bridging the gap between complex backend systems and smooth, intuitive user interfaces.",
    description: "My journey in tech is driven by a passion for clean architecture and performant code. I don't just build apps; I create digital products that solve real problems.",
    features: [
      { title: "Clean Architecture", desc: "Expert in BLoC, Riverpod, and SOLID principles for long-term maintainability.", icon: "architecture", color: "blue" },
      { title: "Performance Expert", desc: "Passionate about 60fps animations and optimizing app startup times.", icon: "speed", color: "purple" },
      { title: "Multi-Platform", desc: "Mastering a single codebase for high-fidelity iOS, Android, and Web apps.", icon: "devices", color: "indigo" }
    ],
    stats: [
      { label: "Years Exp", value: "3+" },
      { label: "Projects", value: "20+" }
    ]
  },
  skills: {
    categories: [
      {
        title: "Mobile Development",
        description: "Expert proficiency in building pixel-perfect, responsive UIs with Flutter & Dart. Focus on smooth animations and platform-specific adaptations.",
        icon: "smartphone",
        tags: ["Flutter 3.x", "Dart", "Material 3", "Cupertino"]
      },
      {
        title: "Backend & Cloud",
        description: "Robust backend solutions using Java Spring Boot and AWS ecosystem (Amplify, EC2, S3, CloudFront, MediaConvert).",
        icon: "cloud_sync",
        tags: ["Spring Boot", "AWS Amplify", "Firebase", "PostgreSQL"]
      },
      {
        title: "State Management",
        description: "Designing scalable application architectures. Proficient in multiple state management solutions depending on project complexity.",
        icon: "layers",
        tags: ["Bloc / Cubit", "Riverpod", "Provider", "GetX"]
      },
      {
        title: "DevOps & Workflow",
        description: "Automating build, test, and deployment processes to ensure code quality and rapid delivery.",
        icon: "rocket_launch",
        tags: ["GitHub Actions", "CI/CD", "Codemagic", "Fastlane"]
      }
    ],
    proficiencies: [
      { label: "Flutter & Dart", percentage: 95, icon: "verified" },
      { label: "AWS & Cloud", percentage: 85, icon: "cloud_queue" },
      { label: "Architecture", percentage: 90, icon: "architecture" },
      { label: "Spring Boot", percentage: 80, icon: "terminal" }
    ],
    techAndLibraries: [
      "Flutter", "Dart", "Spring Boot", "Amplify", "EC2", "S3", "CloudFront", "MediaConvert",
      "Firebase Auth", "Firestore", "Cloud Functions", "REST API", "WebSockets", "Bloc",
      "Riverpod", "Provider", "GitHub Actions", "CI/CD"
    ]
  },
  projects: [
    {
      id: "p4",
      title: "Social Network for Elderly",
      description: "Comprehensive social network tailored for elderly users with chat, video call, and feed features.",
      role: "Senior Fullstack Dev",
      date: "Current",
      teamSize: 2,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Ktor", "AWS S3", "WebRTC", "Firebase", "Riverpod"],
      responsibilities: [
        'Develop features for chat, commenting, posting and liking',
        'Integrate real-time communication (WebRTC / WebSockets)',
        'Implement backend services with Ktor and AWS S3 for file storage',
        'Implement In-App Purchase and Subscription flows (Play Billing / StoreKit)',
        'Integrate health platforms (Google Fit, HealthKit, Health Connect) for activity/safety features',
        'Handle permissions, data sync, privacy and secure health data transfer',
        'Setup CI/CD and deployment pipelines'
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      id: "p5",
      title: "Dating Application",
      description: "Dating app with a 'Love Count' feature, memory storage and real-time chat.",
      role: "Mobile Lead",
      date: "11/2023",
      teamSize: 1,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "SQLite", "Fastlane", "FCM"],
      responsibilities: [
        'Implement mobile UI/UX and local storage with SQLite',
        'Set up Fastlane for automated deployment',
        'Develop chat and persistence features'
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      id: "p6",
      title: "Japanese Learning App",
      description: "A comprehensive app to learn Japanese: video lessons, course purchases, quizzes, flashcards (SRS), and offline downloads.",
      role: "Lead Mobile Developer",
      date: "2024",
      teamSize: 3,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Firebase", "In-App Purchase", "SQLite", "Video Player"],
      responsibilities: [
        'Design and implement video lesson player with offline download support',
        'Implement in-app purchases and subscription flows (Play Billing / StoreKit)',
        'Build quiz and test engine with progress tracking and analytics',
        'Create SRS flashcards and spaced repetition algorithm',
        'Implement local database sync (SQLite) and cloud backup (Firebase)',
        'Provide UI/UX optimized for learning (progress, streaks, reminders)',
        'Support course management (lessons, sections, downloadable assets) and localization'
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      id: "p7",
      title: "Retail Store System",
      description: "Multi-platform retail management system (Web Admin + POS App) for store chains.",
      role: "Team Lead",
      date: "2022",
      teamSize: 5,
      category: "Web",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      tags: ["Spring Boot", "Angular", "Flutter", "Docker", "MySQL"],
      responsibilities: [
        'Lead development of backend and frontend features',
        'Coordinate deployment and Dockerization',
        'Integrate payment and membership features'
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      id: "p8",
      title: "Resort Booking App",
      description: "Luxury resort booking app with elegant UI and interactive maps.",
      role: "Mobile Developer",
      date: "Current",
      teamSize: 2,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      tags: ["SwiftUI", "iOS Native", "MapKit", "Firebase"],
      responsibilities: [
        'Implement UI/UX and map interactions',
        'Collaborate on booking flow and reservation management'
      ],
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      id: "p1",
      title: "Ride-Sharing App",
      description: "A complete ride-hailing solution featuring real-time driver tracking, route optimization, and secure in-app payments.",
      longDescription: "This comprehensive ride-sharing platform was built to handle high-concurrency requests and provide a seamless real-time experience for both drivers and passengers. It utilizes a microservices-inspired architecture on the frontend to manage complex states such as ride bidding, live location updates via WebSockets, and dynamic pricing algorithms.",
      challenges: [
        "Implementing sub-second latency for live driver tracking on Google Maps.",
        "Ensuring state consistency during network handovers (3G to 4G/WiFi).",
        "Integrating multi-gateway payment systems with robust error handling and rollbacks."
      ],
      category: "Mobile",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp5ibtA9RMt-KEXx_UIbSNCTnnwAWQCmLbe9Qs6JwYW7CwBIEnsORKpqsWeeOcCw2BnjTaxoPQqP_qIs32GarV6uwn88gcWjZcxcUFBYHNdkFkiL_T-PvHDligdr6Ggh0msbxWrlbXejsf2AtdJodX4aEipKA-4__FE_1rAEBZ1qtBDJNirnVrwNtm3prYrG5nV75IqVXd_OFsi0AfqNFHntAt1dgIChGcCb4DA6RYCVmZt2mocgENW46SV3yH7CvUR-36z9rWDks",
      tags: ["Flutter", "Google Maps", "Stripe"],
      demoUrl: "#",
      sourceUrl: "#"
    }
  ],
  experiences: [
    {
      role: "Mobile Developer",
      company: "hopee Solutions",
      location: "HCM",
      period: "09/2022 - Current",
      description: "Senior Flutter Engineer",
      current: true,
      tags: ["Flutter", "Senior", "Mobile Engineering", "Architecture"],
      icon: "domain"
    },
    {
      role: "Intern Developer",
      company: "Tien Phong",
      location: "HCM",
      period: "2022",
      description: "Flutter Internship at Tech Company.",
      tags: ["Flutter", "Mobile", "Internship"],
      icon: "smartphone"
    },
    {
      role: "Education: FPT Polytechnic HCM",
      company: "FPT Polytechnic",
      location: "HCM",
      period: "09/2019 - 09/2022",
      description: "Major: Business Information Technology\nGPA: 8.4/10",
      tags: ["BIT", "FPT Polytechnic", "Education"],
      icon: "school"
    }
  ],
  contact: {
    email: "vu.pq06@gmail.com",
    github: "https://github.com/iamLuCat",
    phone: "+84338953981",
    linkedin: "https://www.linkedin.com/in/vupq06/"
  }
};
