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
    github: "https://github.com/MuhammadAshraf23",
    image: "/images/projects/ledger.png",
    video: "/videos/projects/Choco-North.mp4",
    highlights: ["Order and Expense Tracking", "Real-time Inventory", "Automated Backups"],
  },
  {
    title: "Baltistan Baking Store",
    slug: "baltistan-baking-store",
    description:
      "A premium e-commerce experience built for a baking and grocery brand. Features dynamic cart management, secure checkout, and a sleek, high-conversion UI design.",
    overview:
      "A polished storefront experience for a baking and grocery brand with product discovery, cart flow, and a modern purchasing experience.",
    challenge:
      "The brand needed a storefront that felt premium, responsive, and conversion-focused while remaining simple to maintain.",
    solution:
      "I designed and built a refined e-commerce interface with cart logic, product pages, and a clean checkout experience that supports the brand story.",
    outcome:
      "The experience now presents the business in a stronger digital light with a more premium and reliable shopping experience.",
    technologies: ["Next.js", "Firebase", "Redux", "TailwindCSS"],
    liveDemo: "https://baltistanbakingstore.vercel.app/",
    github: "https://github.com/MuhammadAshraf23/Baltistan-baking-Grocery",
    image: "/images/projects/baking-store.png",
    highlights: ["Premium storefront design", "Dynamic cart experience", "Fast mobile-first UX"],
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
    github: "https://github.com/MuhammadAshraf23",
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
    github: "https://github.com/MuhammadAshraf23",
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
    liveDemo: "https://attendance-app-demo.com",
    github: "https://github.com/MuhammadAshraf23/attendence-app",
    image: "/images/projects/attendance.PNG",
    highlights: ["Role-based access", "Attendance analytics", "Scalable admin workflows"],
  },
  // {
  //   title: "Internee.pk Clone",
  //   slug: "internee-pk-clone",
  //   description:
  //     "A refined internship portal connecting students with industry opportunities. Focuses on user-centric dashboard design and seamless application workflows.",
  //   overview:
  //     "A modern internship portal experience for connecting students with opportunities in a streamlined way.",
  //   challenge:
  //     "The platform needed a polished interface that made internship discovery simple and approachable.",
  //   solution:
  //     "I focused on a practical dashboard structure and a polished user journey that kept the product lightweight but elegant.",
  //   outcome:
  //     "The experience demonstrates strong product design thinking and a smooth user path for applying to opportunities.",
  //   technologies: ["React", "MUI", "Framer Motion"],
  //   liveDemo: "https://ashraf-interneepk.netlify.app/",
  //   github: "https://github.com/MuhammadAshraf23/Internee.pk",
  //   image: "/images/projects/internee.png",
  //   highlights: ["Internship discovery", "Dashboard-first UX", "Application flow"],
  // },
  {
    title: "Modern Portfolio",
    slug: "modern-portfolio",
    description:
      "A high-performance personal portfolio featuring strategic 3D elements and immersive animations to showcase full-stack expertise and design sensibility.",
    overview:
      "A polished portfolio experience that blends storytelling, motion, and modern product design to highlight a wide range of work.",
    challenge:
      "The portfolio needed to stand out while staying performant and easy to navigate across devices.",
    solution:
      "I built a cinematic single-page experience with animated sections, thoughtful layout framing, and a clear path to each project detail.",
    outcome:
      "The portfolio now feels premium and immersive while remaining lightweight and easy to share with collaborators and recruiters.",
    technologies: ["Next.js", "Three.js", "Framer Motion", "TailwindCSS"],
    liveDemo: "https://muhammad-ashraf.vercel.app",
    github: "https://github.com/MuhammadAshraf23/Portfolio",
    image: "/images/projects/portfolio_image.png",
    highlights: ["Immersive motion", "Project-driven storytelling", "Responsive experience"],
  },
];
