export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "陽明交大資財營",
	description: "陽明交大資財營",
	navItems: [
		{
			label: "營隊介紹",
			href: "/",
		},
    {
      label: "課程活動",
      href: "/docs",
    },
    {
      label: "營隊照片",
      href: "/pricing",
    },
    {
      label: "學員回饋",
      href: "/blog",
    },
    {
      label: "報名資訊",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],

};
