import { Language } from "./types";
import euImage from "./assets/img/eu.png";
import estagiarioImage from "./assets/img/estagiario.jfif";
import exercitoImage from "./assets/img/exercito.jpg";
import liderImplantacaoImage from "./assets/img/lider_implantacao.png";
import logoEbImage from "./assets/img/logo_eb.png";
import logoMemocashImage from "./assets/img/logo_memocash.png";
import seniorImage from "./assets/img/senior.jpg";

import projKanban from "./assets/img/proj_kanban.png";
// import projEda from "assets/img/proj-eda.png";
import projConversao from "./assets/img/proj_conversao_arquivos.png";

export const DICTIONARY = {
    [Language.BR]: {
        nav: [
            { id: "home", label: "Início" },
            { id: "skills", label: "Habilidades" },
            { id: "projects", label: "Projetos" },
            { id: "career", label: "Trajetória" },
            { id: "contact", label: "Contato" },
        ],
        hero: {
            title: "ENGENHEIRO DE SOFTWARE",
            description: "LUCAS SANTOS",
            image: euImage,
        },
        skills: {
            title: "TECNOLOGIAS & FERRAMENTAS",
            list: [
                {
                    name: "C#",
                    icon: "csharp/csharp-original.svg",
                    color: "#239120",
                },
                {
                    name: ".NET",
                    icon: "dot-net/dot-net-original.svg",
                    color: "#a80fe4",
                },
                {
                    name: "JAVA",
                    icon: "java/java-original.svg",
                    color: "#ED8B00",
                },
                {
                    name: "Spring Boot",
                    icon: "spring/spring-original.svg",
                    color: "#6DB33F",
                },
                {
                    name: "Python",
                    icon: "python/python-original.svg",
                    color: "#3776AB",
                },
                {
                    name: "JavaScript",
                    icon: "javascript/javascript-original.svg",
                    color: "#F7DF1E",
                },
                {
                    name: "TypeScript",
                    icon: "typescript/typescript-original.svg",
                    color: "#3178C6",
                },
                {
                    name: "SQL",
                    icon: "mysql/mysql-original.svg",
                    color: "#4479A1",
                },
                {
                    name: "C++",
                    icon: "cplusplus/cplusplus-original.svg",
                    color: "#00599C",
                },
                {
                    name: "React",
                    icon: "react/react-original.svg",
                    color: "#61DAFB",
                },
                {
                    name: "Tailwind",
                    icon: "tailwindcss/tailwindcss-original.svg",
                    color: "#06B6D4",
                },
                {
                    name: "GitHub",
                    icon: "github/github-original.svg",
                    color: "#181717",
                },
                {
                    name: "Node.js",
                    icon: "nodejs/nodejs-original.svg",
                    color: "#339933",
                },
                {
                    name: "Docker",
                    icon: "docker/docker-original.svg",
                    color: "#2496ED",
                },
                {
                    name: "API Rest",
                    icon: "fastapi/fastapi-original.svg",
                    color: "#000000",
                },
                {
                    name: "xUnit",
                    icon: "dot-net/dot-net-plain.svg",
                    color: "#512BD4",
                },
            ],
            methodologies: {
                title: "Arquitetura e Métodologias",
                items: [
                    "SCRUM",
                    "POO",
                    "SOLID",
                    "Arquitetura Limpa",
                    "Engenharia de Prompt",
                    "Diagramação UML",
                ],
            },
        },
        projects: {
            title: "PROJETOS EM DESTAQUE",
            action: "Acessar projeto",
            repoAction: "Acessar repositório Git",
            list: [
                {
                    title: "API de Conversão de Arquivos para JSON",
                    description:
                        "API RESTful desenvolvida em C# (.NET 10.0) para conversão rápida e eficiente de diversos formatos (PDF, Excel, CSV, Word, XML, Log, PPTX) para JSON.",
                    image: projConversao,
                    tech: [
                        {
                            name: "C#",
                            icon: "csharp/csharp-original.svg",
                            color: "#239120",
                        },
                        {
                            name: ".NET",
                            icon: "dot-net/dot-net-original.svg",
                            color: "#a80fe4",
                        },
                        {
                            name: "API Rest",
                            icon: "fastapi/fastapi-original.svg",
                            color: "#000000",
                        },
                        {
                            name: "xUnit",
                            icon: "dot-net/dot-net-plain.svg",
                            color: "#a80fe4",
                        },
                    ],
                    link: "https://conversao-arquivos-luscabr2.vercel.app/",
                    repo: "https://github.com/luscaBr2/ApiConversaoArquivos",
                },
                {
                    title: "AI-Powered EDA Assistant",
                    description:
                        "Assistente de Análise Exploratória de Dados integrado com LLM, capaz de gerar e executar consultas SQL automaticamente em SQLite a partir de linguagem natural.",
                    image: null,
                    tech: [
                        {
                            name: "Python",
                            icon: "python/python-original.svg",
                            color: "#3776AB",
                        },
                        {
                            name: "SQL",
                            icon: "mysql/mysql-original.svg",
                            color: "#4479A1",
                        },
                        {
                            name: "SQLite",
                            icon: "sqlite/sqlite-original.svg",
                            color: "#003B57",
                        },
                    ],
                    repo: "https://github.com/luscaBr2/ai-powered-eda-assistant",
                },
                {
                    title: "Fluxo de trabalho Kanban",
                    description:
                        "Aplicação Full Stack monorepo que simula o fluxo de trabalho do Pipefy, com API REST em Node.js/TypeScript e frontend em React com Drag & Drop.",
                    image: projKanban,
                    tech: [
                        {
                            name: "Node.js",
                            icon: "nodejs/nodejs-original.svg",
                            color: "#339933",
                        },
                        {
                            name: "TypeScript",
                            icon: "typescript/typescript-original.svg",
                            color: "#3178C6",
                        },
                        {
                            name: "React",
                            icon: "react/react-original.svg",
                            color: "#61DAFB",
                        },
                    ],
                    link: "https://simple-kanban-workflow-frontend.vercel.app",
                    repo: "https://github.com/luscaBr2/simple-kanban-workflow",
                },
            ],
        },
        career: {
            title: "TRAJETÓRIA PROFISSIONAL",
            list: [
                {
                    year: "01/2025 - Presente",
                    title: "Líder Setor de Implantações",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: liderImplantacaoImage,
                    description:
                        "Responsável pelo setor de implantações, treinamento e acolhimento de novos clientes, ainda suporte técnico sênior e QA/Tester.",
                    type: "work",
                },
                {
                    year: "02/2024 - 01/2025",
                    title: "Suporte Técnico Sênior",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: seniorImage,
                    description:
                        "HelpDesk direto com usuários sobre equipamentos, rede e software via acesso remoto. Análise técnica de logs e consultas SQL para identificação de falhas sistêmicas e reporte ao setor de desenvolvimento usando relatórios elaborados e didáticos.",
                    type: "work",
                },
                {
                    year: "03/2023 - 01/2024",
                    title: "Soldado da Arma de Comunicações",
                    company: "Exército Brasileiro",
                    companyLogo: logoEbImage,
                    image: exercitoImage,
                    description:
                        "Responsável pela infraestrutura de rede e hardware de todo o batalhão, administrando servidores Linux, implementando protocolos de segurança militar e proteção de dados sensíveis.",
                    type: "work",
                },
                {
                    year: "06/2021 - 03/2023",
                    title: "Estagiário de suporte técnico",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: estagiarioImage,
                    description: "Primeiros passos no mundo da tecnologia.",
                    type: "work",
                },
            ],
        },
        contact: {
            title: "VAMOS TRABALHAR JUNTOS",
            form: {
                email: "Seu Email",
                subject: "Assunto",
                message: "Sua Mensagem",
                submit: "Enviar Mensagem",
            },
            socials: {
                linkedin: "Conecte-se profissionalmente",
                whatsapp: "Para mensagens rápidas",
            },
        },
    },
    [Language.EN]: {
        nav: [
            { id: "home", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "career", label: "Career" },
            { id: "contact", label: "Contact" },
        ],
        hero: {
            title: "SOFTWARE ENGINEER",
            description: "LUCAS SANTOS",
            image: euImage,
        },
        skills: {
            title: "TECH & TOOLS",
            list: [
                {
                    name: "C#",
                    icon: "csharp/csharp-original.svg",
                    color: "#239120",
                },
                {
                    name: ".NET",
                    icon: "dot-net/dot-net-original.svg",
                    color: "#512BD4",
                },
                {
                    name: "JAVA",
                    icon: "java/java-original.svg",
                    color: "#ED8B00",
                },
                {
                    name: "Spring Boot",
                    icon: "spring/spring-original.svg",
                    color: "#6DB33F",
                },
                {
                    name: "Python",
                    icon: "python/python-original.svg",
                    color: "#3776AB",
                },
                {
                    name: "JavaScript",
                    icon: "javascript/javascript-original.svg",
                    color: "#F7DF1E",
                },
                {
                    name: "TypeScript",
                    icon: "typescript/typescript-original.svg",
                    color: "#3178C6",
                },
                {
                    name: "SQL",
                    icon: "mysql/mysql-original.svg",
                    color: "#4479A1",
                },
                {
                    name: "C++",
                    icon: "cplusplus/cplusplus-original.svg",
                    color: "#00599C",
                },
                {
                    name: "React",
                    icon: "react/react-original.svg",
                    color: "#61DAFB",
                },
                {
                    name: "Tailwind",
                    icon: "tailwindcss/tailwindcss-original.svg",
                    color: "#06B6D4",
                },
                {
                    name: "GitHub",
                    icon: "github/github-original.svg",
                    color: "#181717",
                },
                {
                    name: "Node.js",
                    icon: "nodejs/nodejs-original.svg",
                    color: "#339933",
                },
                {
                    name: "Docker",
                    icon: "docker/docker-original.svg",
                    color: "#2496ED",
                },
                {
                    name: "REST API",
                    icon: "fastapi/fastapi-original.svg",
                    color: "#000000",
                },
                {
                    name: "xUnit",
                    icon: "dot-net/dot-net-plain.svg",
                    color: "#a80fe4",
                },
            ],
            methodologies: {
                title: "Architecture & Methodologies",
                items: [
                    "SCRUM",
                    "OOP",
                    "SOLID",
                    "Clean Architecture",
                    "Prompt Engineering",
                    "UML Diagramming",
                ],
            },
        },
        projects: {
            title: "FEATURED PROJECTS",
            action: "View Demo",
            repoAction: "View Git Repository",
            list: [
                {
                    title: "File Conversion API to JSON",
                    description:
                        "RESTful API developed in C# (.NET 10.0) for fast and efficient conversion of various file formats (PDF, Excel, CSV, Word, XML, Log, PPTX) to JSON.",
                    image: null,
                    tech: [
                        {
                            name: "C#",
                            icon: "csharp/csharp-original.svg",
                            color: "#239120",
                        },
                        {
                            name: ".NET",
                            icon: "dot-net/dot-net-original.svg",
                            color: "#512BD4",
                        },
                        {
                            name: "REST API",
                            icon: "fastapi/fastapi-original.svg",
                            color: "#000000",
                        },
                        {
                            name: "xUnit",
                            icon: "dot-net/dot-net-plain.svg",
                            color: "#a80fe4",
                        },
                    ],
                    link: "https://conversao-arquivos-luscabr2.vercel.app/",
                    repo: "https://github.com/luscaBr2/ApiConversaoArquivos",
                },
                {
                    title: "AI-Powered EDA Assistant",
                    description:
                        "Exploratory Data Analysis Assistant integrated with LLM, capable of automatically generating and executing SQL queries in SQLite from natural language.",
                    tech: [
                        {
                            name: "Python",
                            icon: "python/python-original.svg",
                            color: "#3776AB",
                        },
                        {
                            name: "SQL",
                            icon: "mysql/mysql-original.svg",
                            color: "#4479A1",
                        },
                        {
                            name: "SQLite",
                            icon: "sqlite/sqlite-original.svg",
                            color: "#003B57",
                        },
                    ],
                    repo: "https://github.com/luscaBr2/ai-powered-eda-assistant",
                },
                {
                    title: "Kanban Workflow",
                    description:
                        "Full Stack monorepo application simulating Pipefy's workflow, featuring a Node.js/TypeScript REST API and a dynamic React front-end with Drag & Drop.",
                    tech: [
                        {
                            name: "Node.js",
                            icon: "nodejs/nodejs-original.svg",
                            color: "#339933",
                        },
                        {
                            name: "TypeScript",
                            icon: "typescript/typescript-original.svg",
                            color: "#3178C6",
                        },
                        {
                            name: "React",
                            icon: "react/react-original.svg",
                            color: "#61DAFB",
                        },
                    ],
                    link: "https://simple-kanban-workflow-frontend.vercel.app",
                    repo: "https://github.com/luscaBr2/simple-kanban-workflow",
                },
            ],
        },
        career: {
            title: "CAREER PATH",
            list: [
                {
                    year: "01/2025 - Present",
                    title: "Lead Deployment Specialist",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
                    description:
                        "Responsible for the implementation area, training and onboarding of new customers, as well as senior technical support and QA/Testing.",
                    type: "work",
                },
                {
                    year: "02/2024 - 01/2025",
                    title: "Senior Technical Support",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
                    description:
                        "Direct HelpDesk with users regarding hardware, network, and software via remote access. Technical log analysis and SQL queries for system-level troubleshooting and drafting thorough, didactic reports for the development team.",
                    type: "work",
                },
                {
                    year: "03/2023 - 01/2024",
                    title: "Communications Soldier",
                    company: "Brazilian Army",
                    companyLogo: logoEbImage,
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
                    description:
                        "Responsible for network infrastructure and hardware throughout the battalion, managing Linux servers, and implementing military security protocols and sensitive data protection.",
                    type: "work",
                },
                {
                    year: "06/2021 - 03/2023",
                    title: "Technical Support Intern",
                    company: "Memocash Soluções",
                    companyLogo: logoMemocashImage,
                    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
                    description: "First steps in the technology world.",
                    type: "work",
                },
            ],
        },
        contact: {
            title: "LET'S WORK TOGETHER",
            form: {
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message",
            },
            socials: {
                linkedin: "Connect professionally",
                whatsapp: "For quick replies",
            },
        },
    },
};
