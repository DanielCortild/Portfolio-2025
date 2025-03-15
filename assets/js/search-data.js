// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-am-happy-to-share-i-will-be-spending-6-months-at-electricité-de-france-r-amp-amp-d-researching-on-global-optimization-techniques-and-their-application-in-the-energy-sector",
          title: 'I am happy to share I will be spending 6 months at Electricité...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-our-work-on-global-optimization-at-the-pgmo-days-2024-in-november-see-you-there",
          title: 'I will be presenting our work on global optimization at the PGMO Days...',
          description: "",
          section: "News",},{id: "news-our-latest-paper-global-optimization-through-high-resolution-sampling-is-available-as-a-preprint-on-arxiv",
          title: 'Our latest paper “Global Optimization through High-Resolution Sampling” is available as a preprint...',
          description: "",
          section: "News",},{id: "news-our-paper-krasnoselskii-mann-iterations-inertia-perturbations-and-approximation-has-been-accepted-for-publication-in-journal-of-optimization-theory-and-applications-and-is-available-here",
          title: 'Our paper “Krasnoselskii–Mann Iterations: Inertia, Perturbations and Approximation” has been accepted for publication...',
          description: "",
          section: "News",},{id: "news-i-will-be-participating-in-the-benelux-meeting-on-systems-and-control-2025-in-march",
          title: 'I will be participating in the Benelux Meeting on Systems and Control 2025...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64.%63%6F%72%74%69%6C%64@%72%75%67.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DanielCortild", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-cortild", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3278-1716", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eKYnuOwAAAAJ", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Daniel-Cortild-2/", "_blank");
        },
      },];
