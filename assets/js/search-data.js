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
        },{id: "nav-teaching-experiences",
          title: "Teaching Experiences",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-my-first-preprint-krasnoselskii-mann-iterations-inertia-perturbations-and-approximation-is-available-on-arxiv",
          title: '📝 My first preprint “Krasnoselskii-Mann Iterations: Inertia, Perturbations and Approximation” is available on...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-giving-an-poster-presentation-and-taking-part-in-the-spring-school-at-the-nopta-2024-in-april-see-you-in-antwerpen-belgium",
          title: '🗣️ I will be giving an poster presentation and taking part in the...',
          description: "",
          section: "News",},{id: "news-️-i-am-happy-to-share-i-will-be-spending-6-months-at-electricité-de-france-r-amp-amp-d-as-a-research-intern-from-april-to-september-2024-working-on-global-optimization-techniques-and-their-applications-in-the-energy-sector",
          title: '☢️ I am happy to share I will be spending 6 months at...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-giving-an-oral-talk-at-the-europt-2024-in-june-see-you-in-lund-sweden",
          title: '🗣️ I will be giving an oral talk at the EUROPT 2024 in...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-presenting-our-work-on-global-optimization-at-the-pgmo-days-2024-in-november-see-you-in-paris-france",
          title: '🗣️ I will be presenting our work on global optimization at the PGMO...',
          description: "",
          section: "News",},{id: "news-my-latest-paper-global-optimization-through-high-resolution-sampling-is-available-as-a-preprint-on-arxiv",
          title: '📝 My latest paper “Global Optimization through High-Resolution Sampling” is available as a...',
          description: "",
          section: "News",},{id: "news-our-paper-krasnoselskii-mann-iterations-inertia-perturbations-and-approximation-has-been-accepted-for-publication-in-journal-of-optimization-theory-and-applications-and-is-available-here",
          title: '📝 Our paper “Krasnoselskii–Mann Iterations: Inertia, Perturbations and Approximation” has been accepted for...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-participating-in-the-benelux-meeting-on-systems-and-control-2025-in-march-see-you-in-egmond-aan-zee-netherlands",
          title: '🗣️ I will be participating in the Benelux Meeting on Systems and Control...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-participating-and-giving-a-talk-in-the-europt-2025-in-end-june-start-july-see-you-in-southampton-united-kingdom",
          title: '🗣️ I will be participating and giving a talk in the EUROPT 2025...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-announce-my-latest-preprint-new-tight-bounds-for-sgd-without-variance-assumption-a-computer-aided-lyapunov-analysis-is-available-on-arxiv",
          title: '📝 I am happy to announce my latest preprint “New Tight Bounds for...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-giving-a-talk-at-the-journées-franco-chiliennes-pour-l-optimisation-in-july-see-you-in-rouen-france",
          title: '🗣️ I will be giving a talk at the Journées Franco-Chiliennes pour l’Optimisation...',
          description: "",
          section: "News",},{id: "news-️-i-will-be-presenting-at-the-pgmo-days-2025-in-november-see-you-in-paris-france",
          title: '🗣️ I will be presenting at the PGMO Days 2025 in November. See...',
          description: "",
          section: "News",},{id: "news-our-paper-global-optimization-algorithm-through-high-resolution-sampling-has-been-accepted-for-publication-in-transactions-on-machine-learning-research-and-is-available-here",
          title: '📝 Our paper “Global Optimization Algorithm through High-Resolution Sampling” has been accepted for...',
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
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=58871469400", "_blank");
        },
      },];
