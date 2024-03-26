module.exports = [
  {
    id: 1,
    title: "Company",
    menuList: [
      { name: "About Us", routerPath: "/about" },
      // { name: "Careers", routerPath: "/" },
      // { name: "Blog", routerPath: "/" },
      // { name: "Press", routerPath: "/" },
      // { name: "Gift Cards", routerPath: "/" },
    ],
  },
  {
    id: 2,
    title: "Support",
    menuList: [
      { name: "Contact", routerPath: "/contact" },
      { name: "Legal Notice", routerPath: "/terms" },
      { name: "Privacy Policy", routerPath: "/terms" },
      { name: "Terms and Conditions", routerPath: "/terms" },
      // { name: "Sitemap", routerPath: "/" },
    ],
  },
  {
    id: 3,
    title: "Other Services",
    menuList: [
      // { name: "Car hire", routerPath: "/" },
      { name: "Activity Finder", routerPath: "./activity-list" },
      { name: "Tour List", routerPath: "./tour-list" },
      { name: "Golf List", routerPath: "/golf-list" },
      // { name: "Cruise Ticket", routerPath: "/" },
      // { name: "Holiday Rental", routerPath: "/" },
      // { name: "Travel Agents", routerPath: "/" },
    ],
  },
];
