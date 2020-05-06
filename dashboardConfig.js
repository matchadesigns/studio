export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5e70e7dd42ef2b13c67c3ca2",
                  title: "Sanity Studio",
                  name: "matcha-studio",
                  apiId: "ed36c81c-b6df-4bb5-a77d-c4c8d5414345",
                },
                {
                  buildHookId: "5e70e7dd844c7ac9fb9f7005",
                  title: "Portfolio Website",
                  name: "matcha-web",
                  apiId: "224d6898-4a5e-43f4-8708-d73dd6ff43f0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/matchadesigns/matcha",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://matchadesigns.com",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["project"] },
      layout: { width: "medium" },
    },
  ],
};
