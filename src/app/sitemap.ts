import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://aion.ai";
	const currentDate = new Date();

	return [
		// Homepage - highest priority, frequently updated
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 1.0,
		},
		// Waitlist - high priority conversion page
		{
			url: `${baseUrl}/waitlist`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		// Product pages (future)
		// {
		// 	url: `${baseUrl}/forge`,
		// 	lastModified: currentDate,
		// 	changeFrequency: "weekly",
		// 	priority: 0.9,
		// },
		// {
		// 	url: `${baseUrl}/nexus`,
		// 	lastModified: currentDate,
		// 	changeFrequency: "weekly",
		// 	priority: 0.9,
		// },
		// Legal pages - low priority, rarely change
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date("2025-08-19"),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/tos`,
			lastModified: new Date("2025-08-19"),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/cookie`,
			lastModified: new Date("2025-08-19"),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}
