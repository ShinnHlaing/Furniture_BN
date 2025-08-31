// const links = {
//   x: "https://twitter.com/sample",
//   github: "https://github.com/sample/furniture",
//   githubAccount: "https://github.com/sample",
//   discord: "https://discord.com/users/sample",
// };

export const siteConfig = {
  name: "Furniture Shop",
  description: "A Furniture Shopp build with react router.",
  mainNav: [
    {
      title: "Products",
      card: [
        {
          title: "Wooden",
          href: "/products?categories=1",
          description: "comfortable with Wooden furniture.",
        },
        {
          title: "Bamboo",
          href: "/products?categories=2",
          description: "Build your own Bamboo furniture.",
        },
        {
          title: "Metal",
          href: "/products?categories=3",
          description: "Buy our latest metal furniture.",
        },
      ],
      menu: [
        {
          title: "Services",
          href: "services",
        },
        {
          title: "Blog",
          href: "blogs",
        },
        {
          title: "About Us",
          href: "about",
        },
      ],
    },
  ],
};
