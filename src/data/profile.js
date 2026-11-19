// Profile facts, languages, skills and social links. Shared by the classic sidebar and the Twilight pages.
// Born May 31, 1996. The age is worked out from today's date so it never goes stale.
const BIRTH = { year: 1996, month: 4, day: 31 }; // month is 0-based (4 = May)

export const getAge = (now = new Date()) => {
    let age = now.getFullYear() - BIRTH.year;
    const hadBirthday =
        now.getMonth() > BIRTH.month || (now.getMonth() === BIRTH.month && now.getDate() >= BIRTH.day);
    return hadBirthday ? age : age - 1;
};

export const PROFILE = [
    { label: "Residence:", value: "Canada" },
    { label: "City:", value: "Toronto" },
    { label: "Age:", value: String(getAge()) },
];

export const LANGUAGES = ["English", "Hindi"];

// `bar` is the drawn width (%), `label` is the text shown next to it.
// NOTE: the last entry has always drawn an 80% bar with a "90 %" label.
export const SKILLS = [
    { name: "Python, FastAPI, pytest", bar: 90, label: "90 %" },
    { name: "TypeScript, Javascript (ES6)", bar: 80, label: "80 %" },
    { name: "Machine Learning, Data Science", bar: 75, label: "75 %" },
    { name: "Data Structures and Algorithms", bar: 70, label: "70 %" },
    { name: "Java, Spring Boot, Spring MVC", bar: 90, label: "90 %" },
    { name: "Vue 2+, Angular 20+, React.js, Node.js", bar: 80, label: "80 %" },
    { name: "SQL, NoSQL, ORM, ODM", bar: 80, label: "90 %" },
    { name: "Agentic AI, Agentic SDLC", bar: 80, label: "80 %" },
    { name: "RAG, Agentic RAG, Vector Search", bar: 80, label: "80 %" },
    { name: "Automated AI Pipelines", bar: 75, label: "75 %" },
    { name: "Evals & Performance Metrics", bar: 75, label: "75 %" },
];

export const KNOWLEDGE = [
    "Bootstrap, Materialize, Sass, Less",
    "Jest, Jasmine Testing",
    "Gulp, Webpack, Grunt",
    "Git, GitLab CI/CD",
    "Data Engineering, Analysis & Modeling",
    "Machine Learning, MLOps & AI Engineering",
    "LLM Apps, Agent Frameworks, Prompt Engineering",
];

export const SOCIAL = [
    { href: "https://www.linkedin.com/in/arnav-k-7359b3170/", icon: "fab fa-linkedin-in" },
    { href: "https://github.com/arnavk2319?tab=repositories", icon: "fab fa-github" },
    { href: "mailto:arnav.kaushal800@gmail.com", icon: "fa fa-envelope" },
];
