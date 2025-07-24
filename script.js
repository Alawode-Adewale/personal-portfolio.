const translations = {
  en: {
    title: "Personal Portfolio",
    welcome: "Welcome",
    projects: "Projects",
    contact: "Contact",
    welcomeHeading: "Hello, I'm a Web Developer",
    welcomeText: "I build accessible, responsive, and multilingual websites.",
    project1Title: "Tribute Page",
    project2Title: "Survey Form",
    contactText: "You can find me here:"
  },
  fr: {
    title: "Portfolio Personnel",
    welcome: "Bienvenue",
    projects: "Projets",
    contact: "Contact",
    welcomeHeading: "Bonjour, je suis développeur Web",
    welcomeText: "Je crée des sites accessibles, réactifs et multilingues.",
    project1Title: "Page d’Hommage",
    project2Title: "Formulaire d’Enquête",
    contactText: "Vous pouvez me trouver ici :"
  },
  es: {
    title: "Portafolio Personal",
    welcome: "Bienvenida",
    projects: "Proyectos",
    contact: "Contacto",
    welcomeHeading: "Hola, soy desarrollador web",
    welcomeText: "Construyo sitios accesibles, receptivos y multilingües.",
    project1Title: "Página de Tributo",
    project2Title: "Formulario de Encuesta",
    contactText: "Puedes encontrarme aquí:"
  },
  ar: {
    title: "ملف شخصي",
    welcome: "الترحيب",
    projects: "المشاريع",
    contact: "اتصال",
    welcomeHeading: "مرحبًا، أنا مطور ويب",
    welcomeText: "أقوم ببناء مواقع متعددة اللغات وسهلة الوصول.",
    project1Title: "صفحة التكريم",
    project2Title: "نموذج الاستبيان",
    contactText: "يمكنك أن تجدني هنا:"
  }
};

const languageSelect = document.getElementById("language");

languageSelect.addEventListener("change", () => {
  const selectedLang = languageSelect.value;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[selectedLang][key]) {
      el.textContent = translations[selectedLang][key];
    }
  });
});
