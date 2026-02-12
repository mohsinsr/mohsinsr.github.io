const translations = {
  "nav.home": { en: "Home", de: "Startseite" },
  "nav.blog": { en: "Blog", de: "Blog" },
  "nav.projects": { en: "Projects", de: "Projekte" },
  "nav.about": { en: "About", de: "Über" },
  "nav.resume": { en: "Résumé", de: "Lebenslauf" },
  "header.bio": {
    en: "From algorithms to user interfaces, discovering the world of ones and zeros",
    de: "Von Algorithmen zu Benutzeroberflächen – die Welt der Einsen und Nullen entdecken"
  },
  "about.intro": {
    en: "For me, development is about more than just writing code. It's about creating products and systems that solve real problems and genuinely improve people's lives. I'm driven by curiosity, but also by the desire to create something that lasts, whether it's a feature, an experience, or an entire product. I believe the best work comes from honest collaboration, a shared vision, and a commitment to continuous improvement.",
    de: "Für mich geht es bei der Entwicklung um mehr als nur das Schreiben von Code. Es geht darum, Produkte und Systeme zu schaffen, die echte Probleme lösen und das Leben der Menschen wirklich verbessern. Ich werde von Neugier angetrieben, aber auch von dem Wunsch, etwas Beständiges zu schaffen – sei es eine Funktion, ein Erlebnis oder ein ganzes Produkt. Ich glaube, dass die beste Arbeit aus ehrlicher Zusammenarbeit, einer gemeinsamen Vision und dem Engagement für kontinuierliche Verbesserung entsteht."
  },
  "about.skills_title": {
    en: "Skills, Stacks & Stuff I Don't Google Anymore",
    de: "Skills, Stacks & Dinge, die ich nicht mehr googeln muss"
  },
  "about.projects_title": {
    en: "Projects (Yes, I actually worked on these)",
    de: "Projekte (Ja, daran habe ich wirklich gearbeitet)"
  },
  "skill.frontend": { en: "Frontend Development:", de: "Frontend-Entwicklung:" },
  "skill.ui": { en: "UI Libraries:", de: "UI-Bibliotheken:" },
  "skill.testing": { en: "Frontend Testing:", de: "Frontend-Testing:" },
  "skill.languages": { en: "Programming Languages:", de: "Programmiersprachen:" },
  "skill.devops": { en: "DevOps & CI/CD:", de: "DevOps & CI/CD:" },
  "skill.pm": { en: "Project Management:", de: "Projektmanagement:" },
  "skill.methods": { en: "Methodologies:", de: "Methoden:" },
  "skill.vc": { en: "Version Control:", de: "Versionskontrolle:" },
  "skill.cloud": { en: "Cloud Platforms:", de: "Cloud-Plattformen:" },
  "blog.empty": { en: "Nothing published yet!", de: "Noch nichts veröffentlicht!" },
  "tags.title": { en: "Tags", de: "Schlagwörter" },
  "post.related": { en: "Related Posts", de: "Ähnliche Beiträge" },
  "post.min": { en: "min", de: "Min." },
  "post.mins": { en: "mins", de: "Min." },
  "404.title": { en: "Uh oh!", de: "Oh nein!" },
  "404.link": { en: "Take me home!", de: "Bring mich zurück!" },
  "share.tweet": { en: "Tweet", de: "Twittern" },
  "share.share": { en: "Share", de: "Teilen" }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  localStorage.setItem("lang", lang);

  var btn = document.querySelector(".lang-btn");
  if (btn) {
    btn.textContent = lang === "en" ? "DE" : "EN";
  }
}

function toggleLanguage() {
  var current = localStorage.getItem("lang") || "en";
  var newLang = current === "en" ? "de" : "en";
  setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", function() {
  var lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
});
