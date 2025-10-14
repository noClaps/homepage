type Project = {
  name: string;
  link?: string;
  source: string;
};

interface Directory {
  projects: Record<string, Project>;
  "side-projects": Record<string, Project>;
  "archived-projects": Record<string, Project>;
  contact: Record<string, { name: string; link: string; linkName: string }>;
}

export const directory: Directory = {
  contact: {
    email: {
      name: "Email",
      link: "mailto:contact@zerolimits.dev",
      linkName: "contact@zerolimits.dev",
    },
    github: {
      name: "GitHub",
      link: "https://github.com/noClaps",
      linkName: "noClaps",
    },
    gitlab: {
      name: "GitLab",
      link: "https://gitlab.com/noClaps",
      linkName: "noClaps",
    },
    tangled: {
      name: "Tangled",
      link: "https://tangled.org/@zerolimits.dev",
      linkName: "@zerolimits.dev",
    },
  },
  projects: {
    gallery: {
      name: "Aperturic Focus",
      link: "https://gallery.zerolimits.dev",
      source: "https://github.com/noClaps/gallery",
    },
    camphouse: {
      name: "Camphouse",
      link: "https://camphouse.org",
      source: "https://gitlab.com/camphouse",
    },
    nc: {
      name: "NC",
      link: "https://nclang.org",
      source: "https://github.com/noClaps/nc",
    },
    blog: {
      name: "The Blog of Random",
      link: "https://blog.zerolimits.dev",
      source: "https://github.com/noClaps/blog",
    },
    homepage: {
      name: "ZeroLimits.dev",
      link: "https://zerolimits.dev",
      source: "https://github.com/noClaps/homepage",
    },
    znak: {
      name: "Znak",
      source: "https://tangled.org/@zerolimits.dev/znak",
    },
  },
  "side-projects": {
    applause: {
      name: "Applause",
      source: "https://tangled.org/@zerolimits.dev/applause",
    },
    catbot: {
      name: "CatBot",
      link: "https://discord.com/oauth2/authorize?client_id=1271901024910839959",
      source: "https://github.com/noClaps/catbot",
    },
    life: {
      name: "Conway's Game of Life",
      link: "https://life.zerolimits.dev",
      source: "https://github.com/noClaps/game-of-life",
    },
    dot: {
      name: "dot",
      source: "https://github.com/noClaps/dot",
    },
    nbody: {
      name: "N-body Simulation",
      link: "https://nbody.zerolimits.dev",
      source: "https://github.com/noClaps/nbody",
    },
    news: {
      name: "News",
      link: "https://news.zerolimits.dev",
      source: "https://github.com/noClaps/news",
    },
  },
  "archived-projects": {
    color: {
      name: "color",
      source: "https://github.com/noClaps/color",
    },
    "discuit-docs": {
      name: "Discuit API Documentation",
      link: "https://docs.discuit.net",
      source: "https://github.com/discuitnet/docs",
    },
    highlight: {
      name: "Highlight",
      source: "https://github.com/noClaps/highlight",
    },
    lsdeps: {
      name: "lsdeps",
      source: "https://github.com/noClaps/lsdeps",
    },
    pkg: {
      name: "pkg",
      source: "https://github.com/pkg-mngr/pkg",
    },
    qcsim: {
      name: "QCSim",
      source: "https://github.com/qcsim/qcsim",
    },
  },
};
