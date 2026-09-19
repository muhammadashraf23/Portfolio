import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Business Operations Dashboard",
    slug: "choco-north",
    description:
      "A private factory operations dashboard for recording Orders, Expenses, tracking inventory, managing customer order history, and generating financial reports.",
    overview:
      "A comprehensive business operations management dashboard built with Next.js, Firebase Authentication, and Cloud Firestore. It enables efficient tracking of orders, expenses, and inventory while providing real-time financial reporting and automated backups.",
    challenge:
      "The factory needed a unified, robust system to manage orders, track product inventory, and monitor expenses securely without relying on informal or scattered communication.",
    solution:
      "I built a role-based dashboard with advanced order parsing, inventory tracking, customer history management, and automated daily Google Sheets backups.",
    outcome:
      "The dashboard streamlined factory operations by enforcing structured data, providing real-time inventory updates, and delivering clear, actionable financial reports.",
    technologies: ["Next.js", "Firebase", "TypeScript", "TailwindCSS"],
    liveDemo: "",
    github: "",
    image: "/images/projects/media/choco-north/desktop-01-dashboard.png",
    highlights: ["Order and Expense Tracking", "Real-time Inventory", "Automated Backups"],
    gallery: [
      {
        title: "Executive Operations Dashboard",
        caption: "Real-time summary of sales, daily orders, gross profit, and factory performance metrics.",
        src: "/images/projects/media/choco-north/desktop-01-dashboard.png",
      },
      {
        title: "Inventory & Stock Management",
        caption: "Real-time stock level monitoring, raw material inventory, and automated SKU tracking.",
        src: "/images/projects/media/choco-north/desktop-02-inventory.png",
      },
      {
        title: "Order Intake & Processing",
        caption: "Streamlined order creation workflow with instant price calculation and itemized dispatching.",
        src: "/images/projects/media/choco-north/desktop-03-order-entry.png",
      },
      {
        title: "Customer Directory & Order History",
        caption: "Client account management with purchase frequency, contact records, and outstanding balances.",
        src: "/images/projects/media/choco-north/desktop-04-customers.png",
      },
      {
        title: "Factory Expense Tracker",
        caption: "Categorized tracking of production costs, overhead, raw material purchases, and transport.",
        src: "/images/projects/media/choco-north/desktop-05-expenses.png",
      },
      {
        title: "Financial & Ledger Analytics",
        caption: "Automated revenue analytics, expense-to-sales ratios, and downloadable operational reports.",
        src: "/images/projects/media/choco-north/desktop-06-reports.png",
      },
      {
        title: "Order Management & Status Workflow",
        caption: "Full lifecycle editing interface supporting order amendments, cancellations, and status transitions.",
        src: "/images/projects/media/choco-north/desktop-07-edit-order.png",
      },
    ],
  },
  {
    title: "Baltistan Baking Store",
    slug: "baltistan-baking-store",
    description:
      "A high-performance modern e-commerce platform for baking supplies and artisanal ingredients, deployed serverless on Cloudflare Workers with edge database persistence.",
    overview:
      "A comprehensive, production-grade e-commerce application crafted for Baltistan Baking Store. Deployed at the edge using Cloudflare Workers and Next.js, it offers instant page loads, dynamic multi-category product filtering, search, cart management, and a friction-free checkout flow.",
    challenge:
      "The client required an ultra-fast, modern web presence capable of handling hundreds of baking products, category hierarchies, and responsive shopping experiences with low latency across Pakistan and globally.",
    solution:
      "Engineered an edge-first architecture combining Next.js 15, OpenNext, and Cloudflare Workers, backed by Drizzle ORM for lightning-fast database queries. Designed a warm, premium culinary UI with custom hero banners and dynamic cart interactions.",
    outcome:
      "Delivered a sub-second e-commerce storefront with 65+ curated baking products, seamless mobile responsiveness, and zero-cold-start edge hosting.",
    technologies: ["Next.js 15", "TypeScript", "Cloudflare Workers", "Drizzle ORM", "TailwindCSS"],
    liveDemo: "https://baltistan-baking-store.muhammadashraf2921323.workers.dev/",
    github: "",
    image: "/images/projects/baking-store.png",
    highlights: ["Edge Deployment on Cloudflare Workers", "Sub-second Page Speeds", "Dynamic Search & Category Filtering", "Mobile-First Shopping Flow"],
    gallery: [
      {
        title: "Storefront & Featured Products",
        caption: "Hero section featuring artisanal cheeses, quick delivery assurances, and direct category discovery.",
        src: "/images/projects/media/baltistan-baking-store/desktop-01-hero.png",
      },
      {
        title: "Product Catalog & Filtering",
        caption: "Fast real-time search, sorting options, and dynamic category switching across 65+ catalog items.",
        src: "/images/projects/media/baltistan-baking-store/desktop-02-catalog.png",
      },
      {
        title: "Product Detail & Specifications",
        caption: "High-resolution product presentations with detailed descriptions, pricing, and instant add-to-cart.",
        src: "/images/projects/media/baltistan-baking-store/desktop-03-product-detail.png",
      },
      {
        title: "Cart & Subtotal Breakdown",
        caption: "Interactive slide-over cart with live quantity updates, price calculations, and checkout triggers.",
        src: "/images/projects/media/baltistan-baking-store/desktop-04-cart.png",
      },
      {
        title: "Frictionless Checkout Flow",
        caption: "Step-by-step checkout with address validation, order breakdown, and delivery scheduling.",
        src: "/images/projects/media/baltistan-baking-store/desktop-05-checkout.png",
      },
      {
        title: "Mobile Storefront Experience",
        caption: "Touch-optimized mobile home with category carousels, responsive search, and sticky navigation.",
        src: "/images/projects/media/baltistan-baking-store/mobile-01-home.png",
      },
      {
        title: "Mobile Catalog Navigation",
        caption: "Fluid mobile product browsing with intuitive category pills and quick item preview.",
        src: "/images/projects/media/baltistan-baking-store/mobile-02-catalog.png",
      },
      {
        title: "Mobile Order Placement",
        caption: "Single-column mobile checkout designed for one-handed operation and fast completion.",
        src: "/images/projects/media/baltistan-baking-store/mobile-03-checkout.png",
      },
    ],
  },
  {
    title: "Logic30 - Algorithmic Training Platform",
    slug: "logic30",
    description:
      "A structured 30-day algorithmic problem-solving platform featuring in-browser Monaco code execution, real-time skill radars, and interactive learning roadmaps.",
    overview:
      "Logic30 is an intensive coding preparation platform designed to help software engineers master data structures and algorithms systematically over 30 days. It features an interactive in-browser coding environment, real-time analytics, and visual competency tracking.",
    challenge:
      "Self-paced technical interview prep often suffers from inconsistent practice, lack of targeted feedback, and overwhelming problem lists without clear progression.",
    solution:
      "Engineered a structured curriculum with an integrated Monaco code editor, dynamic test runner, visual skill radar charts, and daily streak gamification to keep developers engaged.",
    outcome:
      "Built a production-grade developer platform with sub-second code evaluation, comprehensive analytics across algorithmic topics, and an engaging roadmap UI.",
    technologies: ["Next.js 16", "TypeScript", "TailwindCSS", "Monaco Editor", "Prisma", "Recharts"],
    liveDemo: "",
    github: "",
    image: "/images/projects/media/logic30/01_dashboard_desktop.png",
    highlights: [
      "In-Browser Monaco Code Editor",
      "Multi-Topic Skill Growth Radar",
      "30-Day Structured Curriculum Roadmap",
      "Real-Time Test Runner & Analytics",
    ],
    gallery: [
      {
        title: "Developer Dashboard & Daily Streak",
        caption: "Interactive hub displaying daily streaks, curriculum completion percentage, and active problem queues.",
        src: "/images/projects/media/logic30/01_dashboard_desktop.png",
      },
      {
        title: "Interactive Code Workspace",
        caption: "Full-featured Monaco editor with syntax highlighting, custom test cases, and real-time execution feedback.",
        src: "/images/projects/media/logic30/02_problem_workspace_desktop.png",
      },
      {
        title: "Comprehensive Performance Analytics",
        caption: "Detailed analytics tracking problem solve times, accuracy rates, and topic difficulty distribution.",
        src: "/images/projects/media/logic30/03_analytics_overview_desktop.png",
      },
      {
        title: "Skill Competency Radar",
        caption: "Visual polygon radar illustrating strengths across Arrays, Trees, Dynamic Programming, and Graphs.",
        src: "/images/projects/media/logic30/04_skill_radar_desktop.png",
      },
      {
        title: "30-Day Curriculum Roadmap",
        caption: "Step-by-step modular syllabus breaking complex algorithms into manageable daily milestones.",
        src: "/images/projects/media/logic30/05_curriculum_roadmap_desktop.png",
      },
      {
        title: "Platform Landing Experience",
        caption: "Modern conversion-focused landing page showcasing platform capabilities, features, and curriculum.",
        src: "/images/projects/media/logic30/06_landing_page_desktop.png",
      },
    ],
  },
  {
    title: "Zoomaro",
    slug: "zoomaro",
    description:
      "A cutting-edge video sharing and communication platform similar to Loom. Enables users to record, share, and collaborate on videos with seamless processing and cloud integration.",
    overview:
      "A collaborative video platform inspired by Loom, focused on fast recording, sharing, and simple team communication workflows.",
    challenge:
      "The product needed to support smooth video recording and sharing while keeping the experience intuitive for everyday users.",
    solution:
      "I structured the product around streamlined video capture, cloud-ready media handling, and a reduced-friction sharing pipeline.",
    outcome:
      "The platform delivers a modern video communication experience that can be expanded into a more complete collaboration tool over time.",
    technologies: ["Next.js", "Node.js", "WebRTC", "Cloudinary"],
    liveDemo: "",
    github: "",
    image: "/images/projects/zoomaro.png",
    highlights: ["Video sharing workflow", "Cloud media handling", "Collaboration-friendly UI"],
  },
  {
    title: "Uni-Chat",
    slug: "uni-chat",
    description:
      "A comprehensive real-time communication suite featuring encrypted chatting, HD video calls, and distributed cloud storage. Built as an advanced DCN project focusing on network protocols.",
    overview:
      "A real-time communication project that explores secure messaging, live video, and distributed data storage in a connected experience.",
    challenge:
      "The system needed to balance real-time performance with a strong focus on network reliability and secure communication flows.",
    solution:
      "I implemented a multi-feature chat experience with live media interaction, peer-based communication, and a data layer designed for modern distributed needs.",
    outcome:
      "The project showcases a strong foundation for scalable real-time systems and modern communication architecture.",
    technologies: ["React", "Node.js", "Socket.io", "PeerJS", "MongoDB"],
    liveDemo: "",
    github: "",
    image: "/images/projects/uni-chat.png",
    highlights: ["Real-time chat", "Video calling", "Distributed storage"],
  },
  {
    title: "Attendance Management System",
    slug: "attendance-management-system",
    description:
      "A professional full-stack attendance tracking solution designed for scalability. Implements sophisticated authentication and real-time data visualization.",
    overview:
      "A professional attendance management system designed for administrators who need clear visibility and dependable access controls.",
    challenge:
      "The project had to support secure staff management and flexible tracking without compromising on clarity or performance.",
    solution:
      "I built a dashboard-based workflow with authentication, role-aware access, and a clean presentation of attendance data.",
    outcome:
      "The platform offers a reliable backbone for routine attendance operations with room for future analytics and integrations.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "",
    github: "https://github.com/MuhammadAshraf23/attendence-app",
    image: "/images/projects/attendance.PNG",
    highlights: ["Role-based access", "Attendance analytics", "Scalable admin workflows"],
  },
];
