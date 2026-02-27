import { homeFaq } from "@/data/home";

const siteUrl = "https://aion.ai";

// Organization Schema - Enhanced with more details
const organizationSchema = {
	"@type": "Organization",
	"@id": `${siteUrl}/#organization`,
	name: "aion Technologies Inc.",
	alternateName: ["aion", "AION", "aion AI"],
	url: siteUrl,
	logo: {
		"@type": "ImageObject",
		url: `${siteUrl}/aion_logo.svg`,
		width: 512,
		height: 512,
	},
	image: `${siteUrl}/hero.jpg`,
	description:
		"aion is an AI infrastructure research lab addressing the critical gap where 88% of enterprises experiment with AI but only 7% reach production scale. We provide enterprise-grade GPU cloud with 20,000+ GPUs, 99.99% uptime, and forward-deployed AI engineers to accelerate AI deployment.",
	slogan: "Making AI accessible for all",
	foundingDate: "2024",
	founders: [
		{
			"@type": "Person",
			name: "Jayden Watson",
			jobTitle: "CEO and Founder",
			description:
				"Self-taught coder, algorithmic trader, and crypto-native founder with over a decade building at the frontier of AI, blockchain, and systems design.",
		},
		{
			"@type": "Person",
			name: "Christian Angermayer",
			jobTitle: "Co-Founder",
			description:
				"Serial entrepreneur, investor and executive film producer. Founder of Apeiron Investment Group and atai Life Sciences, co-founder of blockchain startup Plasma.",
		},
	],
	numberOfEmployees: {
		"@type": "QuantitativeValue",
		minValue: 10,
		maxValue: 50,
	},
	address: {
		"@type": "PostalAddress",
		streetAddress: "1450 Broadway",
		addressLocality: "New York",
		addressRegion: "NY",
		postalCode: "10018",
		addressCountry: "US",
	},
	contactPoint: [
		{
			"@type": "ContactPoint",
			contactType: "sales",
			email: "sales@aion.ai",
			availableLanguage: ["English"],
		},
		{
			"@type": "ContactPoint",
			contactType: "customer support",
			email: "support@aion.xyz",
			availableLanguage: ["English"],
		},
	],
	sameAs: [
		"https://twitter.com/aion",
		"https://linkedin.com/company/aion",
		"https://github.com/aion",
	],
	knowsAbout: [
		"Artificial Intelligence",
		"GPU Computing",
		"Machine Learning Infrastructure",
		"Deep Learning",
		"LLM Training",
		"LLM Inference",
		"AI Inference",
		"Model Fine-tuning",
		"Model Quantization",
		"Kubernetes",
		"Cloud Computing",
		"Enterprise AI",
		"NVIDIA H100",
		"NVIDIA A100",
		"Bare-metal GPU",
		"Hybrid Cloud",
		"MLOps",
		"AI Agents",
		"Generative AI",
		"Computer Vision",
		"Multimodal AI",
		"RAG Systems",
		"Transformer Models",
		"Diffusion Models",
	],
	areaServed: {
		"@type": "Place",
		name: "Worldwide",
	},
};

// WebSite Schema with search action
const webSiteSchema = {
	"@type": "WebSite",
	"@id": `${siteUrl}/#website`,
	url: siteUrl,
	name: "aion",
	description:
		"The AI Infrastructure Research Lab - Enterprise GPU cloud with 20,000+ GPUs, 99.99% uptime, and forward-deployed AI engineers",
	publisher: {
		"@id": `${siteUrl}/#organization`,
	},
	inLanguage: "en-US",
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: `${siteUrl}/search?q={search_term_string}`,
		},
		"query-input": "required name=search_term_string",
	},
};

// SoftwareApplication Schema for Forge - Enhanced with statistics
const forgeSchema = {
	"@type": "SoftwareApplication",
	"@id": `${siteUrl}/#forge`,
	name: "aion Forge",
	alternateName: "Forge",
	applicationCategory: "DeveloperApplication",
	applicationSubCategory: "Cloud Computing Platform",
	operatingSystem: "Cloud-based",
	description:
		"The integrated AI stack for deploying high-performance GPU infrastructure. Forge provides self-service access to 20,000+ enterprise GPUs with provisioning in under 20 minutes, 99.99% uptime SLA, and transparent hourly pricing with no vendor lock-in.",
	featureList: [
		"20,000+ enterprise-grade GPUs including NVIDIA H100 and A100",
		"GPU instance provisioning in under 20 minutes",
		"99.99% uptime SLA guarantee",
		"Kubernetes-native deployment with one developer experience",
		"Bare-metal and managed cloud options",
		"Usage-based transparent hourly pricing",
		"Zero vendor lock-in across any infrastructure",
		"Enterprise-grade security with RBAC and audit logging",
		"Automatic scaling and multi-tenancy from day one",
		"Hybrid cloud orchestration across private, public, and on-premises",
		"Pre-configured AI/ML environments for LLM training and inference",
		"Support for distributed multi-GPU training",
		"Real-time and batch inference optimization",
		"Model quantization and optimization tools",
		"Curated app marketplace with Kubernetes integration",
		"SSH access to bare-metal GPU instances",
	],
	offers: {
		"@type": "Offer",
		availability: "https://schema.org/InStock",
		priceCurrency: "USD",
		price: "0",
		priceSpecification: {
			"@type": "UnitPriceSpecification",
			priceCurrency: "USD",
			unitText: "hour",
			description:
				"Usage-based hourly pricing with no upfront fees, no long-term commitments, and no hidden costs",
		},
	},
	provider: {
		"@id": `${siteUrl}/#organization`,
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		ratingCount: "127",
		bestRating: "5",
		worstRating: "1",
	},
};

// Service Schema for Nexus - Forward-deployed engineers
const nexusSchema = {
	"@type": "Service",
	"@id": `${siteUrl}/#nexus`,
	name: "aion Nexus",
	alternateName: "Nexus",
	serviceType: "Enterprise AI Consulting and Development",
	description:
		"Your forward-deployed AI team. Nexus provides full-stack enterprise AI solutions backed by embedded forward-deployed engineers and researchers. We build, fine-tune, and deploy custom models and agents—operationalizing AI systems built for production.",
	provider: {
		"@id": `${siteUrl}/#organization`,
	},
	areaServed: {
		"@type": "Place",
		name: "United States, United Kingdom, India",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Nexus Enterprise Services",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Forward-Deployed Engineers",
					description:
						"Embedded engineers who work directly with your team to architect optimal training and inference pipelines, optimize models for performance and cost, and accelerate time-to-production.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Custom Model Development",
					description:
						"Build, fine-tune, and deploy custom AI models and agents tailored for your enterprise needs with performance benchmarking and optimization.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "AI Infrastructure Integration",
					description:
						"Integrate aion's GPU infrastructure into your existing tech stack with seamless hybrid cloud deployment.",
				},
			},
		],
	},
};

// Product Schema for GPU Infrastructure
const productSchema = {
	"@type": "Product",
	"@id": `${siteUrl}/#gpu-infrastructure`,
	name: "aion GPU Infrastructure",
	description:
		"Enterprise-grade GPU compute infrastructure providing access to 20,000+ high-performance GPUs including NVIDIA H100 and A100 with 99.99% uptime guarantee.",
	brand: {
		"@id": `${siteUrl}/#organization`,
	},
	category: "Cloud Computing Infrastructure",
	offers: {
		"@type": "AggregateOffer",
		priceCurrency: "USD",
		lowPrice: "0",
		offerCount: "5",
		availability: "https://schema.org/InStock",
		description:
			"Multiple GPU configurations available with hourly billing and no minimum commitment",
	},
	additionalProperty: [
		{
			"@type": "PropertyValue",
			name: "Total GPUs Available",
			value: "20,000+",
		},
		{
			"@type": "PropertyValue",
			name: "Uptime SLA",
			value: "99.99%",
		},
		{
			"@type": "PropertyValue",
			name: "Provisioning Time",
			value: "Under 20 minutes",
		},
		{
			"@type": "PropertyValue",
			name: "GPU Types",
			value: "NVIDIA H100, NVIDIA A100, NVIDIA L40S, RTX 4090",
		},
		{
			"@type": "PropertyValue",
			name: "Supported Workloads",
			value:
				"LLM Training, Model Fine-tuning, AI Inference, Computer Vision, Generative AI, Diffusion Models",
		},
		{
			"@type": "PropertyValue",
			name: "Deployment Options",
			value: "Kubernetes, Bare-metal, Hybrid Cloud, On-premises",
		},
		{
			"@type": "PropertyValue",
			name: "Pricing Model",
			value: "Transparent hourly billing, no long-term contracts",
		},
	],
};

// HowTo Schema for getting started
const howToSchema = {
	"@type": "HowTo",
	"@id": `${siteUrl}/#how-to-get-started`,
	name: "How to Get Started with aion GPU Cloud",
	description:
		"Deploy AI infrastructure in minutes with aion's enterprise GPU cloud platform.",
	totalTime: "PT20M",
	estimatedCost: {
		"@type": "MonetaryAmount",
		currency: "USD",
		value: "0",
	},
	step: [
		{
			"@type": "HowToStep",
			name: "Join the Waitlist",
			text: "Sign up for early access at aion.ai/waitlist to get priority access to the platform.",
			url: `${siteUrl}/waitlist`,
			position: 1,
		},
		{
			"@type": "HowToStep",
			name: "Configure Your Infrastructure",
			text: "Select GPU type, quantity, and region. Choose between bare-metal or Kubernetes deployment options.",
			position: 2,
		},
		{
			"@type": "HowToStep",
			name: "Deploy in Minutes",
			text: "Launch GPU instances in under 20 minutes with pre-configured AI/ML environments and start building.",
			position: 3,
		},
		{
			"@type": "HowToStep",
			name: "Scale Production Workloads",
			text: "Scale automatically with multi-tenancy, enterprise security (RBAC, audit logging), and hybrid cloud orchestration.",
			position: 4,
		},
	],
};

// FAQPage Schema - transforms homeFaq data with enhanced formatting
const faqPageSchema = {
	"@type": "FAQPage",
	"@id": `${siteUrl}/#faq`,
	mainEntity: homeFaq.rows.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

// WebPage Schema with speakable for voice/AI search - Enhanced
const webPageSchema = {
	"@type": "WebPage",
	"@id": `${siteUrl}/#webpage`,
	url: siteUrl,
	name: "aion | AI Infrastructure Research Lab - Enterprise GPU Cloud",
	description:
		"Deploy AI infrastructure at scale with 20,000+ GPUs and 99.99% uptime. 88% of enterprises experiment with AI but only 7% reach production—aion closes that gap with enterprise-grade GPU cloud, transparent pricing, and forward-deployed AI engineers.",
	isPartOf: {
		"@id": `${siteUrl}/#website`,
	},
	about: {
		"@id": `${siteUrl}/#organization`,
	},
	mainEntity: {
		"@id": `${siteUrl}/#forge`,
	},
	mentions: [
		{
			"@type": "Thing",
			name: "GPU Computing",
		},
		{
			"@type": "Thing",
			name: "Artificial Intelligence",
		},
		{
			"@type": "Thing",
			name: "Machine Learning",
		},
		{
			"@type": "Thing",
			name: "Kubernetes",
		},
		{
			"@type": "Thing",
			name: "Cloud Infrastructure",
		},
	],
	datePublished: "2024-01-01",
	dateModified: new Date().toISOString().split("T")[0],
	inLanguage: "en-US",
	speakable: {
		"@type": "SpeakableSpecification",
		cssSelector: [
			"h1",
			"[class*='hero'] p",
			"[class*='intro'] p",
			".faq-answer",
			"main h2",
			"main h3",
		],
	},
	significantLinks: [
		`${siteUrl}/waitlist`,
		`${siteUrl}/privacy`,
		`${siteUrl}/tos`,
	],
};

// BreadcrumbList for homepage
const breadcrumbSchema = {
	"@type": "BreadcrumbList",
	"@id": `${siteUrl}/#breadcrumb`,
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: siteUrl,
		},
	],
};

// Combined Schema Graph with all schemas
const jsonLdSchema = {
	"@context": "https://schema.org",
	"@graph": [
		organizationSchema,
		webSiteSchema,
		webPageSchema,
		breadcrumbSchema,
		forgeSchema,
		nexusSchema,
		productSchema,
		howToSchema,
		faqPageSchema,
	],
};

export function JsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(jsonLdSchema),
			}}
		/>
	);
}

// Export individual schemas for use on specific pages
export function OrganizationJsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					...organizationSchema,
				}),
			}}
		/>
	);
}

export function FaqJsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					...faqPageSchema,
				}),
			}}
		/>
	);
}

export function ForgeJsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					...forgeSchema,
				}),
			}}
		/>
	);
}

export function NexusJsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					...nexusSchema,
				}),
			}}
		/>
	);
}
