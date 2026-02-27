export const homeNav = {
	left: [
		{ label: "Forge", href: "/forge", hasDropdown: true },
		{ label: "Nexus", href: "/nexus", hasDropdown: true },
		{ label: "Foundry", href: "/foundry", hasDropdown: true },
		{ label: "Resources", href: "/resources", hasDropdown: true },
		{ label: "Company", href: "/company", hasDropdown: true },
		{ label: "Research", href: "/research", hasDropdown: true },
	],
	cta: "Join Waitlist",
	ctaBadge: "2",
};

export const homeHero = {
	stats: [{ label: "20,000 GPU available" }, { label: "99.99% uptime" }],
	heading: "The AI Infrastructure Research Lab",
	subheading: "Making AI accessible for all",
};

export const homeIntroStrip = {
	copy: `We design, build, and deploy the systems
that turn research into enterprise-grade AI. 

From models to infrastructure, we close
the gap between pilot and production.`,
};

export const homeProblemStrip = {
	eyebrow: "Let’s Rant a LIL",
	title: "The problem with AI",
	subtitle: "AI adoption is broken. We're fixing it.",
	description:
		"The technology is ready. The demand is real. Yet most enterprises, developers, and consumers are still on the outside looking in. aion exists to change that.",
	stat: `88% of enterprises experiment
with AI, yet only 7% reach 
production scale.`,
};

export const homeForge = {
	header: {
		eyebrow: "aion forge",
		title: "The integrated AI stack",
		subtitle: "Build the best models, not wrestle infrastucture",
		description:
			"Forge is the most reliable, optimized AI cloud—unlocking AI infrastructure at scale with no wait times.\n\nDeploy high-performance GPUs in minutes with no vendor lock-ins, zero complexity, and complete price & performance transparency.",
	},
	ctas: ["Learn More", "Join Waitlist", "Learn More"],
	deckTitle: "Curated App Marketplace with Kubernetes",
	deckLabels: [
		"AI NATIVE - KUBERNETES",
		"INSTALL APPS...",
		"ENTERPRISE GRADE SECURITY",
		"DEPLOY",
		"GPU Instances with 99.9% Uptime",
	],
	dashboardTitle: "Deploy AI infrastructure",
	dashboardStep: "1/4",
	featureCards: [
		{
			title: "Deploy AI infrastructure",
			description:
				"Across bare-metal or Kubernetes with one developer experience and maximize performance across GPU workloads",
		},
		{
			title: "Control costs transparently",
			description:
				"With usage-based pricing, zero hidden fees, and no vendor lock-in across any infrastructure",
		},
		{
			title: "Orchestrate across hybrid cloud",
			description:
				"With unified control plane for private, public, and on-premises deployments",
		},
		{
			title: "Run production workloads",
			description:
				"With automatic scaling, multi-tenancy, and enterprise security (RBAC, audit logging) from day one",
		},
	],
};

export const homeNexus = {
	stackLabels: [
		"Performance Benchmarking and Model Evaluation",
		"FORWARD DEPLOYED ENGINEERS",
		"EMBEDDED RESEARCHERS",
		"Fine-tuning and Optimization Pipeline",
		"YOUR ENTERPRISE",
		"BUILDING MODEL...",
		"MAKING OPTIMISATIONS...",
	],
	header: {
		eyebrow: "aion nexus",
		title: "Your forward deployed AI Team",
		subtitle: "We build, optimize, and serve AI models and agents — at scale.",
		description:
			"Nexus is your full-stack enterprise AI product suite, backed by embedded forward-deployed engineers and researchers. We build, fine-tune, and deploy custom models and agents—operationalizing AI systems built for production.",
	},
	ctas: ["Learn More", "Book a Call", "Learn More"],
	featureCards: [
		{
			title: "Deploy AI infrastructure",
			description:
				"Across bare-metal or Kubernetes with one developer experience and maximize performance across GPU workloads",
		},
		{
			title: "Control costs transparently",
			description:
				"With usage-based pricing, zero hidden fees, and no vendor lock-in across any infrastructure",
		},
		{
			title: "Orchestrate across hybrid cloud",
			description:
				"With unified control plane for private, public, and on-premises deployments",
		},
		{
			title: "Run production workloads",
			description:
				"With automatic scaling, multi-tenancy, and enterprise security (RBAC, audit logging) from day one",
		},
	],
};

export const homeBuildingBlocks = {
	header: {
		eyebrow: "Fullstack AI",
		title: "Building blocks of AI Infrastructure",
		subtitle:
			"The gap isn’t technology — it’s integration, execution and speed",
		description:
			"Unlike standard uptime guarantees, our start-window SLO ensures that if your booked compute doesn't begin within its target window, you'll receive credits.",
	},
	cards: [
		{
			title: "Accessible Compute",
			description: "Enterprise-grade AI infrastructure, available to everyone.",
		},
		{
			title: "Abstracted Infrastructure",
			description:
				"Deploy and scale without ever managing the complexity beneath.",
		},
		{
			title: "Adaptive Workloads",
			description: "AI that flexes to your demands, not the other way around.",
		},
		{
			title: "Accelerated Research",
			description:
				"From idea to deployment, faster - with Forward Deployed Engineers and Researchers embedded in your team.",
		},
	],
	timeline: [
		{
			marker: "/1",
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien odio, ornare ut nibh sit amet, interdum lacinia mi. Quisque ipsum mi, pellentesque quis rutrum sed, ultrices in magna.",
		},
		{
			marker: "/2",
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien odio, ornare ut nibh sit amet, interdum lacinia mi. Quisque ipsum mi, pellentesque quis rutrum sed, ultrices in magna.",
		},
		{
			marker: "/3",
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien odio, ornare ut nibh sit amet, interdum lacinia mi. Quisque ipsum mi, pellentesque quis rutrum sed, ultrices in magna.",
		},
	],
};

export const homeCareers = {
	header: {
		eyebrow: "Careers",
		title: "Our open positions",
		subtitle: "Come hangout with us",
	},
	cta: "View All Open Positions",
	openings: [
		{
			title: "Product Designer",
			engagement: "Freelance, Part-time, Full-time",
			location: "US, UK, India — Hybrid",
			icon: "bezier" as const,
		},
		{
			title: "Senior Backend Engineer",
			engagement: "Contract, Full-time",
			location: "US, UK, India — Onsite",
			icon: "data" as const,
		},
		{
			title: "Senior Backend Engineer",
			engagement: "Contract, Full-time",
			location: "US, UK, India — Onsite",
			icon: "data" as const,
		},
		{
			title: "Senior Backend Engineer",
			engagement: "Contract, Full-time",
			location: "US, UK, India — Onsite",
			icon: "data" as const,
		},
		{
			title: "Lead ML Engineer",
			engagement: "Contract, Full-time",
			location: "India — Hybrid",
			icon: "shapes" as const,
		},
		{
			title: "Lead ML Engineer",
			engagement: "Contract, Full-time",
			location: "India — Hybrid",
			icon: "shapes" as const,
		},
		{
			title: "Lead ML Engineer",
			engagement: "Contract, Full-time",
			location: "India — Hybrid",
			icon: "shapes" as const,
		},
		{
			title: "Lead ML Engineer",
			engagement: "Contract, Full-time",
			location: "India — Hybrid",
			icon: "shapes" as const,
		},
	],
};

export const homeResources = {
	header: {
		eyebrow: "Resources",
		title: "Our blogs and news",
		subtitle: "Let’s spill the tea",
	},
	cta: "View All Resources",
	lead: {
		readTime: "35min read",
		category: "Economics of AI",
		excerpt:
			"Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens. Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens...Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP.",
		cta: "Read More",
	},
	cards: [
		{
			readTime: "5min read",
			category: "Economics of AI",
			excerpt:
				"Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens...",
			cta: "Read More",
		},
		{
			readTime: "12min read",
			category: "Benchmark",
			excerpt:
				"Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens...",
			cta: "Read More",
		},
		{
			readTime: "35min read",
			category: "Economics of AI",
			excerpt:
				"Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens...",
			cta: "Read More",
		},
		{
			readTime: "9min read",
			category: "Economics of AI",
			excerpt:
				"Achieve peak LLM training performance with Llama-3 8B, enhanced by FSDP and Torch Compile. Experience tokens...",
			cta: "Read More",
		},
	],
};

export const homeFaq = {
	header: {
		eyebrow: "Ask Us Anything",
		title: "Frequently Asked Questions",
		subtitle: "We've got answers for you",
	},
	rows: [
		// Compute
		{
			group: "Compute",
			question: "How does aion make compute accessible?",
			answer:
				"AION aggregates underutilized, enterprise-grade GPU infrastructure into a unified platform. This gives you on-demand access to high-performance machines without long procurement cycles or complex cloud setup. The complexity of managing hardware is abstracted away and you get transparent, plug-and-play compute with no vendor lock-in, so your team can focus on building AI applications instead of wrangling servers.",
		},
		{
			group: "Compute",
			question: "How long do I have to wait to start accessing the machines?",
			answer:
				"Most customers can begin accessing compute within hours, not weeks or months. aion pre-qualifies and provisions capacity ahead of demand, enabling rapid onboarding compared to traditional hyperscaler procurement cycles or custom on-prem deployments.",
		},
		// AI Inference
		{
			group: "Inference",
			question: "What is AI inference, and why is it challenging for production?",
			answer:
				"AI inference is the process of running a trained model to generate predictions or outputs from new data. Examples include answering a user query with an LLM, generating an image from a prompt, or classifying an input in real time. Inference is where models deliver actual business value to end users, but unfortunately, it can be expensive, operationally complex, and inefficient at scale. Many teams overpay for general-purpose cloud GPUs, struggle with unpredictable latency, or lack the expertise to optimize models for production.",
		},
		{
			group: "Inference",
			question: "What is the difference between AI inference and training?",
			answer:
				"Training is the process of building a model by learning parameters from large datasets. It is highly compute-intensive but typically performed intermittently during initial model development or periodic retraining. Inference is the process of running a trained model to generate outputs from new inputs. It operates continuously in production and often accounts for the majority of long-term AI infrastructure costs. For most production AI systems, inference (not training) is the dominant cost and operational challenge. aion supports both batch and real-time inference, with infrastructure optimized for predictable performance, high utilization, and cost control.",
		},
		{
			group: "Inference",
			question: "How does aion make inference affordable?",
			answer:
				"aion cuts inference costs through multiple optimizations: targeted hardware that selects purpose-built GPU instances rather than overpriced servers; high utilization by scheduling and batching workloads to keep GPUs busy; software optimizations like model quantization and better memory management; and pay-as-you-go pricing so you only pay for the compute you actually use. Together, these measures let customers achieve a much lower cost per inference compared to traditional cloud setups.",
		},
		{
			group: "Inference",
			question: "What models does aion provide?",
			answer:
				"aion supports a broad set of leading open-source and commercial-grade models, including state-of-the-art language, vision, and multimodal architectures. Models are continuously benchmarked and ranked through aion's serverless inference leaderboard, helping customers choose the best model for quality, latency, and cost.",
		},
		// Products
		{
			group: "Products",
			question: "What is the difference between aion Forge and aion Nexus?",
			answer:
				"aion Forge is self-service and designed for builders: training, fine-tuning, and deploying models with flexible, instant access to compute. aion Nexus focuses on custom Enterprise AI solutions tailored for your business. We leverage the power of aion Forge plus embed our world-class Forward-Deployed Engineers to transform your products and business.",
		},
		{
			group: "Products",
			question: "How is aion different from other Neocloud providers?",
			answer:
				"Most providers advertise only $/GPU-hr with opaque pricing and surprise invoices. They omit precision tier, region, interconnect or commitment details. CFOs cannot compare apples-to-apples and worry about billing shocks. aion offers transparent, predictable pricing with no hidden fees.",
		},
		{
			group: "Products",
			question: "How will aion's Forward-Deployed Engineers help my business?",
			answer:
				"aion's Forward-Deployed Engineers (FDEs) work directly with your team to: architect optimal training and inference pipelines, optimize models for performance and cost, integrate aion into your existing stack, and accelerate time-to-production. They function as an extension of your engineering team, reducing risk and speeding execution.",
		},
		{
			group: "Products",
			question: "How much do Forward-Deployed Engineers cost?",
			answer:
				"Forward-Deployed Engineers are offered as a premium engagement, with pricing dependent on scope, duration, and technical complexity. This flexible model ensures customers only pay for the level of hands-on support they need, without committing to long-term consulting contracts.",
		},
		// Pricing
		{
			group: "Pricing",
			question: "What is aion's pricing model?",
			answer:
				"Aion uses a transparent, hourly, usage-based pricing model. There are no up-front fees, licenses, or long-term commitments—you pay only for the compute resources you actively use per hour. By charging per hour, aion makes AI infrastructure costs predictable, controllable, and proportional to real workload demand.",
		},
		{
			group: "Pricing",
			question: "Do I need to sign a long-term contract to use aion's services?",
			answer:
				"No, aion does not require any long-term commitments or exclusive contracts from its customers. The platform is available on-demand, and you are free to start or stop using it at any time without penalties. There is no vendor lock-in—you retain full flexibility to integrate aion into your stack on your own terms and to adjust your usage.",
		},
		{
			group: "Pricing",
			question: "Who is aion?",
			answer:
				"CEO and Founder Jayden Watson is a self-taught coder, algorithmic trader, and crypto-native founder who has spent over a decade building at the frontier of AI, blockchain, and systems design. Co-Founder Christian Angermayer is a serial entrepreneur, investor and executive film producer. He is the founder of the private investment firm Apeiron Investment Group and the biotechnology company atai Life Sciences, and a co-founder of the blockchain startup Plasma. The Executive team at aion are also serial founders and bring decades of experience leading technology companies like Google, Amazon, and more.",
		},
	],
};

export const homeCta = {
	header: {
		eyebrow: "Get Started",
		title: "On-demand infrastructure.\nOne platform.\nNo friction.",
	},
	body: "We simplify the cloud through our all-in-one AI platform—bringing data, training, and deployment together in one seamless workspace. ",
	buttons: ["Join Waitlist", "Book a Call"],
	footerLabel: "Get Started",
};

export const homeFooter = {
	title: "Stop waiting, Start building.",
	cta: "Join Waitlist",
	social: ["◉", "𝕏", "◎", "◌"],
	groups: [
		{
			title: "Resources",
			links: ["Docs", "Waitlist", "Inference Tracker"],
		},
		{
			title: "Solutions",
			links: ["Robotics & AV", "Vision-first Gen AI", "Spatial & 3D"],
		},
		{
			title: "Misc",
			links: [
				"engineering.aion",
				"community.aion",
				"store.aion",
				"events.aion",
				"gallery.aion",
			],
		},
	],
	legal: "© 2025 aion Technologies Inc., All Rights Reserved",
	policyLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};
