const PROJECTS = {
  archive: {
    title: "Archive",
    quote:
      "“Every finished piece is a door left open — somewhere new to wander.”",
    section1: {
      title: "Behance",
      body: "Links to my behance — a living archive of experiments, client collaborations, and personal explorations across product, illustration, and spatial design.",
    },
    image: "images/archive.png",
    section2: {
      title: "Collection",
      quote:
        "“Styles come and go. Good design is a language, not a style.”—Massimo Vignelli",
    },
    closingQuote:
      "“Minimalism is about creating complete harmony — not about making simple.”—Naoto Fukasawa",
    link: "https://www.behance.net/",
    linkLabel: "View on Behance",
  },
  daru: {
    title: "Daru",
    quote:
      "“Keep what matters close — even when life moves fast.”",
    section1: {
      title: "Digital keychain",
      body: "Daru is a digital keychain that reminds you of your goals. A small, intimate object on your phone — always there to nudge you back toward what you set out to do.",
    },
    image: "images/daru.png",
    section2: {
      title: "Intention",
      quote:
        "“Design is not just what it looks like — design is how it works.”—Steve Jobs",
    },
    closingQuote:
      "“The details are not the details. They make the design.”—Charles Eames",
  },
  bilou: {
    title: "bilou",
    quote:
      "“Collect hats. Gain powers. Discover who you become along the way.”",
    section1: {
      title: "Story-driven game",
      body: "A story driven game built with Unity. Collect hats and receive new superpowers as the narrative unfolds — playful mechanics wrapped in a hand-crafted world.",
    },
    image: "images/bilou.png",
    media: {
      tall: "images/bilou.png",
    },
    section2: {
      title: "World",
      quote:
        "“Games are the most elevated form of investigation.”—Marshall McLuhan",
    },
    closingQuote:
      "“Play is the highest form of research.”—Albert Einstein",
  },
  talq: {
    title: "Talq+",
    quote:
      "“Communication should be accessible to everyone — without compromise.”",
    section1: {
      title: "Speech therapy",
      body: "An accessibility board for speech therapy — designed to support therapists and patients with clear, tactile, and inclusive interactions that make practice feel human.",
    },
    image: "images/talq.png",
    section2: {
      title: "Access",
      quote:
        "“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”—Tim Berners-Lee",
    },
    closingQuote:
      "“Accessibility is not a feature. Accessibility is a social trend.”—Sir Tim Berners-Lee",
  },
  home: {
    title: "home",
    quote:
      "“Brazilian roots, digital worlds — memory made spatial.”",
    section1: {
      title: "AR Experience",
      body: "A Brazilian AR Experience created with Swift. Assets drawn with Procreate and composed in Reality Composer — blending illustration, culture, and spatial storytelling.",
    },
    image: "images/home.png",
    media: {
      landscape: "images/home.png",
    },
    section2: {
      title: "Space",
      quote:
        "“The best way to predict the future is to invent it.”—Alan Kay",
    },
    closingQuote:
      "“Reality is merely an illusion, albeit a very persistent one.”—Albert Einstein",
  },
  numo: {
    title: "Numo",
    quote:
      "“Learning to count should feel like opening a storybook.”",
    section1: {
      title: "Kids & stories",
      body: "A game for kids learning how to count through stories — playful characters, gentle pacing, and narrative moments that turn numbers into something to love.",
    },
    image: "images/numo.png",
    media: {
      tall: "images/numo.png",
    },
    section2: {
      title: "Play",
      quote:
        "“Children learn as they play. Most importantly, in play children learn how to learn.”—O. Fred Donaldson",
    },
    closingQuote:
      "“Tell me and I forget. Teach me and I remember. Involve me and I learn.”—Benjamin Franklin",
  },
};

function setMedia(el, src) {
  if (!el) return;
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    el.appendChild(img);
  }
}

function renderProject(id) {
  const project = PROJECTS[id];
  if (!project) {
    document.getElementById("project-title").textContent = "Project not found";
    return;
  }

  document.title = `${project.title} — Isadora Brendler`;

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-quote").textContent = project.quote;
  document.getElementById("section1-title").textContent = project.section1.title;
  document.getElementById("section1-body").textContent = project.section1.body;
  document.getElementById("section2-title").textContent = project.section2.title;
  document.getElementById("section2-quote").textContent = project.section2.quote;
  document.getElementById("project-closing").textContent = project.closingQuote;

  setMedia(document.getElementById("split-image"), project.image);

  const videoEl = document.getElementById("project-video");
  if (project.media?.video) {
    setMedia(videoEl, project.media.video);
    videoEl.classList.add("project-template__video--has-media");
  }

  setMedia(document.getElementById("grid-small"), project.media?.small || null);
  setMedia(document.getElementById("grid-landscape"), project.media?.landscape || null);
  setMedia(document.getElementById("grid-tall"), project.media?.tall || null);

  if (project.link) {
    const link = document.getElementById("project-link");
    link.href = project.link;
    link.textContent = project.linkLabel || "View project";
    link.hidden = false;
  }
}

const projectId = new URLSearchParams(location.search).get("id");
renderProject(projectId);
