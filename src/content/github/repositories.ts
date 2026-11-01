import type { Locale } from "@/lib/constants/locales";
import type { GitHubRepository } from "@/types/portfolio";

const repositories = {
  fr: [
    {
      name: "gare-routiere-intelligente",
      description:
        "Plateforme intelligente de gare routière avec Spring Boot, Next.js, JWT/RBAC, WebSockets, ActiveMQ/JMS, RMI, Resilience4j, OCR OpenCV/YOLOv8 et Docker.",
      technologies: ["Spring Boot", "Next.js", "ActiveMQ", "YOLOv8", "Docker"],
      url: "https://github.com/hatim-koubri/gare-routiere-intelligente",
      category: "Distributed Full-Stack Platform",
    },
    {
      name: "KaynBus",
      description:
        "Plateforme web et mobile de geolocalisation de bus en temps reel avec React, PHP REST APIs, MySQL, Android Java, Google Maps, Axios, Volley et Postman.",
      technologies: ["React.js", "PHP 5.6", "MySQL", "Android Java", "Google Maps"],
      url: null,
      category: "Intelligent Transportation System",
    },
    {
      name: "GestionStock_AspNetCore",
      description:
        "Système ASP.NET Core MVC pour gérer produits, fournisseurs, factures, mouvements de stock, rôles et authentification sécurisée.",
      technologies: ["C#", "ASP.NET Core MVC", "EF Core", "SQLite", "Claims"],
      url: "https://github.com/hatim-koubri/GestionStock_AspNetCore",
      category: "ASP.NET Core MVC",
    },
    {
      name: "cars_rent",
      description:
        "Plateforme Laravel de location de voitures avec gestion de flotte, réservations, disponibilité, comptes et dashboard admin.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "AJAX"],
      url: "https://github.com/hatim-koubri/cars_rent",
      category: "Full-stack Web App",
    },
    {
      name: "Gestion-de-restaurant",
      description:
        "Application JavaFX pour opérations restaurant : menus, tables, commandes, paiements, historique et persistance Hibernate/JPA.",
      technologies: ["Java", "JavaFX", "Hibernate JPA", "MySQL", "MVC"],
      url: "https://github.com/hatim-koubri/Gestion-de-restaurant",
      category: "Java Desktop App",
    },
    {
      name: "Systeme-de-gestion-des-colis",
      description:
        "Application web Java Servlet/JSP pour enregistrer les colis, suivre les statuts, gérer les transports et afficher des statistiques.",
      technologies: ["Java", "Servlets", "JSP", "Hibernate", "Chart.js"],
      url: "https://github.com/hatim-koubri/Systeme-de-gestion-des-colis",
      category: "Java Web App",
    },
    {
      name: "Gestion-des-Relamations",
      description:
        "Application Java Swing de gestion des réclamations étudiantes avec recherche, filtrage, statuts, commentaires et statistiques.",
      technologies: ["Java", "Swing", "MySQL", "DAO", "JFreeChart"],
      url: "https://github.com/hatim-koubri/Gestion-des-Relamations",
      category: "Java Desktop App",
    },
  ],
  en: [
    {
      name: "gare-routiere-intelligente",
      description:
        "Intelligent bus station platform with Spring Boot, Next.js, JWT/RBAC, WebSockets, ActiveMQ/JMS, RMI, Resilience4j, OpenCV/YOLOv8 OCR, and Docker.",
      technologies: ["Spring Boot", "Next.js", "ActiveMQ", "YOLOv8", "Docker"],
      url: "https://github.com/hatim-koubri/gare-routiere-intelligente",
      category: "Distributed Full-Stack Platform",
    },
    {
      name: "KaynBus",
      description:
        "Real-time bus geolocation web and mobile platform with React, PHP REST APIs, MySQL, Android Java, Google Maps, Axios, Volley, and Postman.",
      technologies: ["React.js", "PHP 5.6", "MySQL", "Android Java", "Google Maps"],
      url: null,
      category: "Intelligent Transportation System",
    },
    {
      name: "GestionStock_AspNetCore",
      description:
        "ASP.NET Core MVC system for products, suppliers, invoices, stock movements, roles, and secure authentication.",
      technologies: ["C#", "ASP.NET Core MVC", "EF Core", "SQLite", "Claims"],
      url: "https://github.com/hatim-koubri/GestionStock_AspNetCore",
      category: "ASP.NET Core MVC",
    },
    {
      name: "cars_rent",
      description:
        "Laravel car rental platform with fleet management, reservations, availability, accounts, and admin dashboard.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "AJAX"],
      url: "https://github.com/hatim-koubri/cars_rent",
      category: "Full-stack Web App",
    },
    {
      name: "Gestion-de-restaurant",
      description:
        "JavaFX application for restaurant operations: menus, tables, orders, payments, history, and Hibernate/JPA persistence.",
      technologies: ["Java", "JavaFX", "Hibernate JPA", "MySQL", "MVC"],
      url: "https://github.com/hatim-koubri/Gestion-de-restaurant",
      category: "Java Desktop App",
    },
    {
      name: "Systeme-de-gestion-des-colis",
      description:
        "Java Servlet/JSP web app for package registration, delivery status tracking, transport management, and statistics.",
      technologies: ["Java", "Servlets", "JSP", "Hibernate", "Chart.js"],
      url: "https://github.com/hatim-koubri/Systeme-de-gestion-des-colis",
      category: "Java Web App",
    },
    {
      name: "Gestion-des-Relamations",
      description:
        "Java Swing complaint management app with search, filtering, status updates, treatment comments, and statistics.",
      technologies: ["Java", "Swing", "MySQL", "DAO", "JFreeChart"],
      url: "https://github.com/hatim-koubri/Gestion-des-Relamations",
      category: "Java Desktop App",
    },
  ],
} as const satisfies Record<Locale, GitHubRepository[]>;

export function getGitHubRepositories(locale: Locale) {
  return repositories[locale];
}
