import type { Project } from "@/types/portfolio";

export const projectsEn: Project[] = [
  {
    slug: "khotwa-e-learning-platform",
    title: "Khotwa",
    category: "PFE Internship · Web & Mobile E-learning Platform",
    status: "Internship project at MIC Consulting Group",
    featured: true,
    shortDescription: "Online learning platform bringing together courses, learning paths, assessments, virtual classrooms, and learner progress tracking.",
    role: "Full-stack design and development during an internship at MIC Consulting Group.",
    problem: "Learners and trainers need a shared space to organize courses, track progress, and manage remote assessments.",
    solution: "Khotwa brings together Learner, Trainer, and Administrator areas, structured courses, quizzes, virtual classrooms, notifications, certificates, and a mobile app with offline access.",
    stack: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL", "Next.js", "React", "TypeScript", "Flutter", "Docker", "Jitsi Meet", "Ollama", "MinIO"],
    highlights: ["Learning paths with modules, chapters, PDF and video resources, quizzes, and progress tracking.", "Dedicated learner, trainer, and administrator areas, virtual classes, and notifications.", "Mobile app with offline access and an Ollama-based learning guidance assistant."],
    challenges: ["Structuring roles and learning journeys in one coherent platform.", "Securing accounts and learning resources.", "Connecting web and mobile applications with backend services."],
    results: ["Web and mobile e-learning platform documented in the internship report.", "The project covers courses, assessments, virtual classrooms, and administration."],
    githubUrl: "https://github.com/hatim-koubri/E-learning",
    reportUrl: "/rapport/Khotwa.pdf",
    image: "/images/acceuil.png",
    coverImage: "/images/acceuil.png",
    architecture: { frontend: "Next.js and React web app with a Flutter mobile app.", backend: "Java API built with Spring Boot, Spring Security, and Spring Data JPA.", database: "MySQL for platform data and MinIO for resource storage.", authentication: "Spring Security access control for Learner, Trainer, and Administrator roles.", integrations: "Jitsi Meet for virtual classrooms, Ollama for learning guidance, and Docker for services." },
    caseStudySections: [{ title: "Context", body: "Developed at MIC Consulting Group, Khotwa centralizes training activities and supports learners throughout their learning journey." }, { title: "Features", body: "The platform combines a course catalog, structured lessons, resources, quizzes, progress tracking, virtual classrooms, notifications, and certificates." }, { title: "Architecture", body: "The project combines a Spring Boot backend, a Next.js/React web app, a Flutter mobile app, and supporting services." }],
  },
  {
    slug: "rihla-intelligent-bus-station-platform",
    title: "RIHLA",
    category: "Distributed Full-Stack Platform",
    status: "Flagship Project",
    featured: true,
    shortDescription:
      "Intelligent bus station management platform connecting passengers, drivers, transport companies, and station administrators through a centralized web system.",
    role: "Full-Stack Software Engineer responsible for platform architecture, backend services, frontend workflows, security, real-time features, and distributed systems integration.",
    problem:
      "Traditional bus station operations often rely on disconnected tools and manual processes, creating trip management issues, passenger confusion, platform assignment conflicts, limited visibility, and slow communication between actors.",
    solution:
      "Designed and built a centralized platform with role-based modules, secure APIs, reservations, payments, driver workflows, company management, station administration, OCR-based bus identification, WebSocket notifications, and distributed communication patterns.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
      "MySQL",
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "WebSocket",
      "ActiveMQ",
      "JMS",
      "RMI",
      "Resilience4j",
      "OpenCV",
      "YOLOv8",
      "Docker",
      "JUnit 5",
      "Selenium",
      "SonarQube",
    ],
    highlights: [
      "Distributed systems concepts implemented through REST APIs, Java RMI, ActiveMQ/JMS, WebSockets, and Resilience4j.",
      "OCR pipeline combines OpenCV preprocessing and YOLOv8 plate detection for bus identification and platform assignment.",
      "Security and quality practices include JWT, RBAC, BCrypt, protected APIs, JUnit 5, Selenium, SonarQube, and Postman testing.",
    ],
    challenges: [
      "Coordinating multiple actors with different responsibilities: passengers, drivers, companies, and station administrators.",
      "Combining synchronous APIs, asynchronous messaging, real-time notifications, and resilience patterns without losing architectural clarity.",
      "Designing an OCR workflow that turns image input into operational decisions such as company detection and platform assignment.",
      "Securing role-based access while keeping passenger, driver, company, and admin workflows separated.",
    ],
    results: [
      "Flagship engineering project demonstrating distributed systems, full-stack development, security, real-time communication, OCR integration, and quality practices.",
      "Repository documents the platform scope and technical architecture.",
      "No production usage, station deployment, or operational metrics are claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/gare-routiere-intelligente",
    reportUrl: "/rapport/Rihla.pdf",
    image: "/projects/rihla-intelligent-bus-station-platform.png",
    coverImage: "/projects/rihla/cover.png",
    screenshots: [
      "/projects/rihla/login.png",
      "/projects/rihla/admin-dashboard.png",
      "/projects/rihla/reservation.png",
      "/projects/rihla/ocr.png",
      "/projects/rihla/ticket-qr.png",
      "/projects/rihla/sonarcloud.png",
    ],
    architectureImage: "/projects/rihla/architecture.png",
    architecture: {
      frontend:
        "Next.js, React, TypeScript, and TailwindCSS frontend separated from the backend, covering passenger, driver, company, and station administration workflows.",
      backend:
        "Spring Boot backend with Spring Security, REST APIs, JPA/Hibernate, modular service architecture, protected APIs, and role-based logic.",
      database:
        "MySQL persistence for users, trips, reservations, companies, buses, routes, tickets, payments, messages, and station operations.",
      authentication:
        "JWT authentication, RBAC, BCrypt password encryption, protected APIs, and secure session management.",
      integrations:
        "ActiveMQ/JMS messaging, Java RMI, WebSockets, Resilience4j retry/circuit breaker/fallback patterns, Docker, OpenCV, YOLOv8, JUnit 5, Selenium, SonarQube, and Postman.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "RIHLA was designed as a large-scale intelligent bus station management platform to digitalize and automate operational activities inside a modern station.",
      },
      {
        title: "Architecture",
        body: "The project separates frontend and backend responsibilities while integrating distributed systems concepts: synchronous APIs, asynchronous messaging, real-time notifications, resilience patterns, and OCR automation.",
      },
      {
        title: "Quality",
        body: "Quality practices include layered architecture, SOLID principles, JUnit 5, Selenium, SonarQube, Postman testing, and security controls around authentication and roles.",
      },
    ],
  },
  {
    slug: "kaynbus-real-time-bus-geolocation",
    title: "KaynBus",
    category: "Intelligent Transportation System / Web & Mobile Platform",
    status: "Final Year License Project",
    featured: true,
    shortDescription:
      "Real-time bus geolocation web and mobile platform for urban mobility, combining a React web interface, PHP REST APIs, MySQL, Android GPS transmission, and Google Maps visualization.",
    role: "Full-Stack Developer & Mobile Integration",
    problem:
      "Urban bus users often lack clear visibility into bus positions, stops, lines, and route planning, while administrators need structured tools to manage transport data and operational reports.",
    solution:
      "Built a web and mobile platform where users can visualize bus positions, consult lines and stops, manage favorites, and plan trips, while administrators manage lines, buses, stops, routes, users, reports, and statistics.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "PHP 5.6",
      "MySQL",
      "XAMPP",
      "Android Java",
      "REST APIs",
      "Axios",
      "Volley",
      "Google Maps API",
      "Postman",
      "UML",
      "Scrum",
    ],
    highlights: [
      "Web, mobile, backend, and database modules separated around REST API communication and JSON payloads.",
      "Android Java mobile app sends GPS positions to the backend, while the React frontend consumes location data through Axios.",
      "Google Maps integration displays bus positions and routes, with an admin dashboard for transport entities, reports, and statistics.",
    ],
    challenges: [
      "Designing REST API communication between React, PHP, MySQL, and the Android GPS sender.",
      "Representing transport entities such as lines, stops, routes, buses, users, favorites, and reports in a relational MySQL model.",
      "Keeping real-time map updates understandable without claiming production-grade infrastructure.",
      "Testing API behavior, GPS transmission, and map rendering in a local XAMPP environment.",
    ],
    results: [
      "Final-year license project demonstrating web and mobile integration, GPS data transmission, REST APIs, Google Maps visualization, and admin dashboard workflows.",
      "Local XAMPP tests observed API responses around 400-500 ms for key data requests, map loading around 1.2-1.5 seconds, and GPS position refresh around every 5 seconds.",
      "Tested locally with 10-20 simulated users; these are local validation results, not production performance or user claims.",
      "No public GitHub repository, production deployment, or production usage metrics are claimed.",
    ],
    githubUrl: null,
    reportUrl: "/rapport/KaynBus.pdf",
    image: "/projects/kaynbus/cover.png",
    coverImage: "/projects/kaynbus/cover.png",
    screenshots: [
      "/projects/kaynbus/home.png",
      "/projects/kaynbus/login.png",
      "/projects/kaynbus/map-global.png",
      "/projects/kaynbus/bus-location.png",
      "/projects/kaynbus/admin-dashboard.png",
      "/projects/kaynbus/reports.png",
      "/projects/kaynbus/mobile-gps.png",
    ],
    architectureImage: "/projects/kaynbus/architecture.png",
    architecture: {
      frontend:
        "React.js and Tailwind CSS web platform for users and administrators, covering maps, lines, stops, favorites, trip planning, dashboards, reports, and statistics.",
      backend:
        "PHP 5.6 backend exposing REST APIs for authentication, transport entities, reports, GPS data, and client-server communication.",
      database:
        "MySQL relational model for users, lines, stops, routes, buses, favorites, reports, and GPS position data in a local XAMPP environment.",
      authentication:
        "User authentication implemented for the web platform, with access flows separated from transport management workflows.",
      integrations:
        "Android Java GPS sender using Volley, React API consumption with Axios, Google Maps API for geolocation display, Postman API validation, UML documentation, and Scrum project organization.",
    },
    caseStudySections: [
      {
        title: "Problem",
        body: "KaynBus addresses a transport visibility problem: users need bus position, route, stop, and trip information, while administrators need a structured way to manage the transport network.",
      },
      {
        title: "Context",
        body: "The project was developed as a final-year license project for a web and mobile intelligent transportation system, with local deployment through XAMPP and careful separation between clients, backend, and database.",
      },
      {
        title: "My role",
        body: "My role covered full-stack development, mobile integration, REST API communication, database modeling, Google Maps integration, Postman validation, and documentation through UML and Scrum artifacts.",
      },
      {
        title: "Architecture",
        body: "The architecture follows a hybrid modular monolith with REST API communication: React.js frontend, PHP backend, MySQL database, and Android Java mobile app sending GPS data to the backend.",
      },
      {
        title: "Web platform",
        body: "The web platform supports user flows for maps, lines, stops, favorites, and trip planning, plus administrator workflows for line, stop, route, bus, user, report, and statistics management.",
      },
      {
        title: "Mobile GPS module",
        body: "The Android Java module acts as the GPS data sender, transmitting position updates to the backend through Volley so the web interface can display updated bus locations.",
      },
      {
        title: "REST API communication",
        body: "React consumes backend data through Axios, the Android client sends JSON payloads with Volley, and Postman was used to validate API behavior during development.",
      },
      {
        title: "Admin dashboard",
        body: "The admin dashboard centralizes transport entities, operational management, reports, and statistics without claiming production deployment.",
      },
      {
        title: "Real-time map",
        body: "Google Maps API was used to render bus positions and routes, with GPS refresh observed around every 5 seconds during local testing.",
      },
      {
        title: "Testing and validation",
        body: "Validation included manual unit tests on backend logic, integration checks between React, Axios, PHP, and MySQL, Android tests on emulator and real device, Postman API tests, and a functional validation table from the project report.",
      },
      {
        title: "Limitations",
        body: "The project has no public GitHub repository yet, was deployed locally with XAMPP, has no CI/CD pipeline, and PHP 5.6 limits access to modern backend practices.",
      },
      {
        title: "Future improvements",
        body: "Next steps would include migration to a modern backend framework, cloud deployment, automated tests, CI/CD, notifications, and stronger production observability.",
      },
    ],
  },
  {
    slug: "gestionstock-commercial-stock-management",
    title: "GestionStock",
    category: "ASP.NET Core MVC",
    featured: true,
    shortDescription:
      "Commercial and stock management system for products, suppliers, invoices, stock movements, users, and role-based dashboards.",
    role: "Full-stack development, MVC architecture, authentication, persistence, and dashboard workflows.",
    problem:
      "Commercial operations need a structured way to manage products, suppliers, invoices, users, and stock movements without mixing responsibilities or exposing sensitive actions to the wrong roles.",
    solution:
      "Built an ASP.NET Core MVC application with Entity Framework Core persistence, role-based dashboards, secure authentication, invoice workflows, and stock movement tracking.",
    stack: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQLite",
      "Cookie Authentication",
      "Claims",
      "Razor Pages",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    highlights: [
      "Role-based Admin and Employee dashboards with Cookie Authentication and Claims.",
      "Product, category, supplier, invoice, and stock movement workflows modeled in MVC.",
      "Security practices include password hashing, CSRF protection, and ValidateAntiForgeryToken.",
    ],
    challenges: [
      "Keeping invoice details, product stock, and stock movements consistent across workflows.",
      "Separating Admin and Employee permissions without duplicating controller logic.",
      "Designing a maintainable MVC structure with Entity Framework Core persistence.",
    ],
    results: [
      "Demo video and UML diagram are available in the repository README.",
      "Repository documents the application structure and commercial management scope.",
      "No production usage or business metrics are claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/GestionStock_AspNetCore",
    image: "/projects/gestionstock-commercial-stock-management.png",
    coverImage: "/projects/gestionstock/cover.png",
    screenshots: [
      "/projects/gestionstock/dashboard.png",
      "/projects/gestionstock/products.png",
      "/projects/gestionstock/invoices.png",
      "/projects/gestionstock/stock-movements.png",
    ],
    architectureImage: "/projects/gestionstock/class-diagram.png",
    architecture: {
      frontend:
        "Razor views with HTML5, CSS, Bootstrap, and Tailwind CSS for role-based dashboards and management screens.",
      backend:
        "ASP.NET Core MVC controllers and services organizing products, categories, suppliers, invoices, users, and stock movements.",
      database:
        "SQLite persistence through Entity Framework Core with domain entities for commercial and stock data.",
      authentication:
        "Cookie Authentication, Claims, password hashing, role management, and CSRF protection with ValidateAntiForgeryToken.",
      integrations:
        "GitHub repository with README documentation, UML diagram, and demo video.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "GestionStock is positioned as a commercial management system where operational data, user roles, invoices, and stock flows need to stay coherent.",
      },
      {
        title: "Architecture",
        body: "The MVC approach was chosen to keep routing, business workflows, data persistence, and views separated while remaining understandable for a maintainable web application.",
      },
      {
        title: "Quality",
        body: "The project emphasizes secure authentication, CSRF protection, persistence consistency, and clear separation of responsibilities.",
      },
    ],
  },
  {
    slug: "rentfast-car-rental-management",
    title: "RentFast",
    category: "Full-stack Web App",
    featured: true,
    shortDescription:
      "Car rental management platform for vehicle fleets, reservations, user/admin accounts, availability, and administrator dashboards.",
    role: "Full-stack web development, Laravel application structure, booking workflows, and administrator dashboard design.",
    problem:
      "Vehicle rental operations require centralized management of fleet availability, reservations, users, administrators, and rental statistics.",
    solution:
      "Built a Laravel-based web platform with vehicle fleet management, online booking, availability tracking, secure authentication, and dashboard views.",
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "AJAX",
      "Git",
      "XAMPP",
    ],
    highlights: [
      "Vehicle fleet and online booking workflows managed through a responsive web interface.",
      "Availability tracking supports clearer reservation decisions without claiming production real-time infrastructure.",
      "README includes UML diagrams and a demo video for project understanding.",
    ],
    challenges: [
      "Keeping vehicle availability aligned with reservation states.",
      "Designing admin dashboard views that summarize operational rental information.",
      "Structuring user/admin account management and secure authentication.",
    ],
    results: [
      "UML diagrams and demo video are available in the repository README.",
      "The repository documents rental management scope and application workflows.",
      "No production users or rental business metrics are claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/cars_rent",
    image: "/projects/rentfast-car-rental-management.png",
    coverImage: "/projects/rentfast/cover.png",
    screenshots: [
      "/projects/rentfast/home.png",
      "/projects/rentfast/cars.png",
      "/projects/rentfast/reservation.png",
      "/projects/rentfast/admin-dashboard.png",
    ],
    architectureImage: "/projects/rentfast/class-diagram.png",
    architecture: {
      frontend:
        "Responsive HTML5, CSS, Bootstrap, JavaScript, and AJAX screens for booking, fleet browsing, and dashboard interactions.",
      backend:
        "Laravel application handling rental workflows, accounts, reservations, and administrator operations.",
      database:
        "MySQL database supporting vehicles, users, reservations, availability, and rental statistics.",
      authentication:
        "Secure authentication for user and administrator account flows.",
      integrations:
        "XAMPP local environment, Git versioning, README documentation, UML diagrams, and demo video.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "RentFast models common vehicle rental operations: fleet visibility, booking, account management, availability, and administrative monitoring.",
      },
      {
        title: "Architecture",
        body: "Laravel and MySQL were used to organize rental workflows around clear backend routes, database-backed entities, and responsive frontend screens.",
      },
      {
        title: "Quality",
        body: "The project documents its design with UML diagrams and a demo video, making workflows easier to review and discuss.",
      },
    ],
  },
  {
    slug: "restmanager-restaurant-management",
    title: "RestManager",
    category: "Java Desktop App",
    featured: true,
    shortDescription:
      "Java desktop application for restaurant operations: menu, tables, orders, kitchen workflow, payments, and sales tracking.",
    role: "Java desktop development, persistence modeling, business workflow design, and layered architecture.",
    problem:
      "Restaurant operations need reliable coordination between menus, tables, orders, payment status, kitchen workflow, and daily sales history.",
    solution:
      "Built a JavaFX desktop application with Hibernate/JPA persistence, MVC structure, DAO and service layers, and business rules for data consistency.",
    stack: [
      "Java",
      "JavaFX",
      "Hibernate JPA",
      "MySQL",
      "MVC",
      "DAO",
      "Service Layer",
      "Maven",
      "IntelliJ IDEA",
      "phpMyAdmin",
    ],
    highlights: [
      "Menu, table, order, payment, and sales workflows modeled as restaurant operations.",
      "MVC, DAO, and service layers separate interface, persistence, and business rules.",
      "Automatic total calculation and order status workflow support operational consistency.",
    ],
    challenges: [
      "Maintaining order and payment consistency across table workflows.",
      "Separating business rules from JavaFX interface code.",
      "Designing persistence with Hibernate/JPA for restaurant entities.",
    ],
    results: [
      "Demo video is available in the repository README.",
      "The project demonstrates layered Java desktop architecture with persistence.",
      "No production deployment or commercial restaurant usage is claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/Gestion-de-restaurant",
    image: "/projects/restmanager-restaurant-management.png",
    coverImage: "/projects/restmanager/cover.png",
    screenshots: [
      "/projects/restmanager/menu.png",
      "/projects/restmanager/tables.png",
      "/projects/restmanager/orders.png",
      "/projects/restmanager/payment.png",
    ],
    architectureImage: "/projects/restmanager/data-model.png",
    architecture: {
      frontend:
        "JavaFX desktop interface for menu management, tables, order states, payments, and history views.",
      backend:
        "Service layer and DAO structure separating business rules from UI interactions.",
      database:
        "MySQL persistence through Hibernate/JPA with restaurant entities and relationships.",
      authentication:
        "Authentication is not positioned as the core focus; business workflow consistency is the main concern.",
      integrations:
        "Maven project structure, IntelliJ IDEA development environment, phpMyAdmin, and README demo video.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "RestManager focuses on operational restaurant workflows where order status, table activity, payments, and sales tracking must remain consistent.",
      },
      {
        title: "Architecture",
        body: "The layered Java architecture separates UI, services, DAO persistence, and business rules to keep the desktop application maintainable.",
      },
      {
        title: "Quality",
        body: "The project highlights data consistency through business rules, automatic total calculation, and clear workflow separation.",
      },
    ],
  },
  {
    slug: "package-management-system",
    title: "Package Management System",
    category: "Java Web App",
    featured: true,
    shortDescription:
      "Parcel management system for registering packages, tracking delivery status, managing transport lists, and visualizing statistics.",
    role: "Java web development, Servlet/JSP architecture, AJAX interactions, persistence, and statistics visualization.",
    problem:
      "Parcel workflows need structured package registration, delivery status tracking, transport list management, and operational visibility.",
    solution:
      "Built a Java web application with Servlets, JSP, Hibernate persistence, AJAX status updates, and Chart.js statistics.",
    stack: [
      "Java",
      "Hibernate",
      "Servlets",
      "JSP",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "MySQL",
      "Chart.js",
    ],
    highlights: [
      "Dynamic package tracking and status updates without full page reloads using AJAX.",
      "DAO, service, and controller separation supports maintainability.",
      "README includes UML, database diagrams, and demo video.",
    ],
    challenges: [
      "Keeping package status updates clear and consistent.",
      "Separating controller, service, and DAO responsibilities in a Java web app.",
      "Presenting operational statistics with Chart.js without overcomplicating the UI.",
    ],
    results: [
      "UML, database diagrams, and demo video are available in the repository README.",
      "The project demonstrates Java web architecture and AJAX-driven interactions.",
      "No production logistics usage or delivery metrics are claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/Systeme-de-gestion-des-colis",
    image: "/projects/package-management-system.png",
    coverImage: "/projects/colis/cover.png",
    screenshots: [
      "/projects/colis/dashboard.png",
      "/projects/colis/tracking.png",
      "/projects/colis/statistics.png",
      "/projects/colis/package-list.png",
    ],
    architectureImage: "/projects/colis/database-model.png",
    architecture: {
      frontend:
        "JSP, HTML, CSS, JavaScript, AJAX, and Chart.js for package screens, updates, and statistics.",
      backend:
        "Java Servlets with controller, service, and DAO separation for package and transport workflows.",
      database:
        "MySQL persistence with Hibernate for package, transport, and status data.",
      authentication:
        "Authentication is not presented as the central feature; package status workflows and management operations are the focus.",
      integrations:
        "Chart.js statistics, AJAX updates, UML diagrams, database diagrams, and README demo video.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "The package management system models a transport flow where packages must be registered, followed, updated, and analyzed.",
      },
      {
        title: "Architecture",
        body: "Servlets, JSP, Hibernate, and DAO/service/controller separation were used to keep the Java web application structured.",
      },
      {
        title: "Quality",
        body: "The project documents its system design with UML and database diagrams and uses AJAX to improve interaction flow.",
      },
    ],
  },
  {
    slug: "complaint-management-system",
    title: "Complaint Management System",
    category: "Java Desktop App",
    featured: true,
    shortDescription:
      "Desktop application for managing student complaints with structured tracking, filtering, search, treatment comments, and statistics.",
    role: "Java desktop development, database modeling, DAO/service architecture, search/filter workflows, and statistics visualization.",
    problem:
      "Academic institutions need a structured way to register, process, filter, and analyze student complaints without losing treatment context.",
    solution:
      "Built a Java Swing desktop application with MySQL persistence, DAO/service organization, status management, search, filtering, comments, and JFreeChart statistics.",
    stack: [
      "Java",
      "Swing",
      "MySQL",
      "JDBC",
      "DAO",
      "JFreeChart",
      "JavaBeans",
    ],
    highlights: [
      "Complaint registration, processing status, comments, search, and filtering are organized in a desktop workflow.",
      "DAO/service architecture separates data access from application logic.",
      "README includes UML and architecture diagrams plus a demo video.",
    ],
    challenges: [
      "Keeping complaint processing state visible and easy to update.",
      "Supporting search and status filtering without making the interface noisy.",
      "Modeling complaint data and statistics in a maintainable Java desktop app.",
    ],
    results: [
      "UML, architecture diagrams, database modeling, and demo video are available in the README.",
      "The project demonstrates Java Swing, DAO organization, and statistical visualization.",
      "No institutional production usage or processing metrics are claimed.",
    ],
    githubUrl: "https://github.com/hatim-koubri/Gestion-des-Relamations",
    image: "/projects/complaint-management-system.png",
    coverImage: "/projects/reclamations/cover.png",
    screenshots: [
      "/projects/reclamations/dashboard.png",
      "/projects/reclamations/complaints.png",
      "/projects/reclamations/search.png",
      "/projects/reclamations/statistics.png",
    ],
    architectureImage: "/projects/reclamations/architecture.png",
    architecture: {
      frontend:
        "Java Swing interface for complaint registration, processing, search, filtering, comments, and statistics.",
      backend:
        "DAO and service organization with JavaBeans to separate data access and application behavior.",
      database:
        "MySQL database modeled for students, complaints, processing status, comments, and reporting needs.",
      authentication:
        "Authentication is not presented as the central feature; complaint tracking and processing workflows are the focus.",
      integrations:
        "JFreeChart statistics, UML diagrams, architecture diagrams, database modeling, and README demo video.",
    },
    caseStudySections: [
      {
        title: "Context",
        body: "The complaint management system focuses on academic complaint tracking where status, comments, filtering, and statistics support follow-up.",
      },
      {
        title: "Architecture",
        body: "Java Swing, MySQL, JDBC/DAO, JavaBeans, and service organization were used to keep the application structured and maintainable.",
      },
      {
        title: "Quality",
        body: "The README documents architecture and database modeling, while the application separates concerns through DAO and service layers.",
      },
    ],
  },
];



