import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Abinash Kalikote",
  description:
    "Learn .NET with Abinash kalikote's expert mentoring course. Master .NET Core, C#, and modern software development practices.",
  /* prettier-ignore */
  head: [
    ["link", {
      rel: "icon",
      type: "image/svg+xml",
      href: "/abinash-kalikote.jpg",
    }],
    ["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", {
      name: "description",
      content:
        "Join Abinash Kalikote's .NET mentoring course to master C#, .NET Core, and essential software development skills.",
    }],
    ["meta", {
      name: "keywords",
      content:
        ".NET mentoring course, Abinash Kalikote, .NET Core, C#, software development, mentoring",
    }],
    ["meta", { name: "author", content: "Abinash Kalikote" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", {
      property: "og:title",
      content: "Abinash Kalikote - .NET Mentoring Course & Software Development",
    }],
    ["meta", {
      property: "og:description",
      content:
        "Step up your skills with Abinash Kalikote's .NET Mentoring Course. Learn industry-standard practices in .NET, C#, and full-stack development.",
    }],
    ["meta", {
      property: "og:image",
      content: "https://laxmanbishwokarma.com.np/dotnet-mentoring-course.png",
    }], // Use an engaging course banner here
    ["meta", { property: "og:url", content: "https://laxmanbishwokarma.com.np/" }],
    ["meta", {
      property: "og:site_name",
      content: "Abinash Kalikote - .NET Mentoring",
    }],
    ["meta", { name: "twitter:card", content: "/abinash-kalikote.png" }],
    ["meta", {
      name: "twitter:title",
      content: "Learn .NET with Abinash Kalikote",
    }],
    ["meta", {
      name: "twitter:description",
      content:
        "Master .NET Core, C#, and full-stack development with Abinash Kalikote's mentoring course.",
    }],
    ["meta", {
      name: "twitter:image",
      content: "https://laxmanbishwokarma.com.np/dotnet-mentoring-course.png",
    }],
    ["link", { rel: "canonical", href: "https://laxmanbishwokarma.com.np/" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/courses" }, // Highlight your .NET Mentoring Course here
      { text: "About", link: "/about" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/abinashkalikote",
        ariaLabel: "GitHub Profile",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/abinash-kalikote-b16167241/",
        ariaLabel: "LinkedIn Profile",
      },
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes("github-projects"),
      },
    },
  },
  vite: { plugins: [] },
  cleanUrls: true,
});
