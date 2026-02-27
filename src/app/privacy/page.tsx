import type { Metadata } from "next";

import {
	LegalPageShell,
	LegalSection,
	LegalSubSection,
	LegalList,
	LegalLink,
} from "@/components/modules/legalPageShell";

export const metadata: Metadata = {
	title: "Privacy Policy - Data Protection & GDPR Compliance",
	description:
		"Learn how aion Technologies Inc. protects your data. Our privacy policy covers GDPR, CCPA, and DPDPA compliance for our GPU cloud platform. We are committed to transparent data practices.",
	alternates: {
		canonical: "https://aion.ai/privacy",
	},
};

export default function PrivacyPolicyPage() {
	return (
		<LegalPageShell
			title="Privacy Policy"
			effectiveDate="Effective Date: August 19, 2025"
		>
			{/* 1. Introduction */}
			<LegalSection title="1. Introduction">
				<p>
					This Privacy Policy describes how AION Technologies Inc. ("AION,"
					"we," "us," or "our") collects, uses, discloses, and protects
					information obtained from users of our GPU compute platform and
					related services.
				</p>

				<LegalSubSection title="1.1 Scope of This Policy">
					<p>This Privacy Policy applies to:</p>
					<LegalList
						items={[
							"Marketing Website (aion.xyz): Discovery and information",
							"Platform (console.aion.xyz): GPU compute services",
							"Pre-signup Browsing: Anonymous GPU catalog access",
							"Authenticated Services: Full platform functionality",
							"Support and Documentation: docs.aion.xyz, status.aion.xyz, api.aion.xyz",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="1.2 Our Commitment">
					<p>
						We are committed to protecting your privacy while delivering
						high-performance GPU infrastructure services. This Policy explains
						our data practices and your rights regarding personal information in
						the context of cloud computing and AI infrastructure management.
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 2. Information We Collect */}
			<LegalSection title="2. Information We Collect by User Journey">
				<LegalSubSection title="2.1 Marketing Website Visitors (aion.xyz)">
					<p>
						<strong className="text-(--bunker-675)">With Consent Only:</strong>
					</p>
					<LegalList
						items={[
							"Google Analytics 4 data (page views, session duration)",
							"Marketing pixel data (Meta, LinkedIn campaigns)",
							"UTM parameters (source, medium, campaign, term, content) for attribution tracking",
							"No personal data collected without explicit consent",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.2 Platform Browsers (Pre-Signup)">
					<p>
						<strong className="text-(--bunker-675)">
							Anonymous Catalog Access:
						</strong>
					</p>
					<LegalList
						items={[
							"GPU availability viewing patterns",
							"Pricing calculator usage",
							"Region and SKU preferences",
							"No identity or personal data collection",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.3 Waitlisted Users">
					<p>
						<strong className="text-(--bunker-675)">Upon Signup:</strong>
					</p>
					<LegalList
						items={[
							"Email address (required for waitlist)",
							"Company name (optional)",
							"Workload intent and use case",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Enrichment via Folk CRM:
						</strong>
					</p>
					<LegalList
						items={[
							"Firmographic data (company size, industry)",
							"Technographic signals (current stack)",
							"Not shared with marketing pixels or third parties",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.4 Active Platform Users">
					<p>
						<strong className="text-(--bunker-675)">
							Account Information:
						</strong>
					</p>
					<LegalList
						items={[
							"Name, email address, password (encrypted)",
							"Organization details, tax ID, billing address",
							"Verification documents for KYC compliance",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Full Platform Telemetry:
						</strong>
					</p>
					<LegalList
						items={[
							"PostHog session recordings and analytics",
							"Resource usage metrics and patterns",
							"API call logs and patterns",
							"Stripe billing and payment data",
							"Intercom support interactions",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.5 Platform Usage Information">
					<p>
						Through your use of our GPU compute platform, we collect:
					</p>
					<LegalList
						items={[
							"Resource Usage: GPU hours, compute cycles, storage consumption",
							"Instance Data: Configuration settings, deployment regions, instance types",
							"Project Information: Project names, descriptions, resource allocations",
							"SSH Keys: Public keys for secure instance access",
							"Firewall Rules: Security configurations for your resources",
							"API Usage: Endpoint calls, request patterns, rate limits",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.6 Payment and Billing Information">
					<p>For billing purposes, we collect:</p>
					<LegalList
						items={[
							"Payment Method: Credit card details (processed by Stripe)",
							"Billing History: Invoices, payment records, usage statements",
							"Credit Information: Credit limits, payment terms",
							"Tax Information: VAT numbers, tax exemption certificates",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.7 Technical and Performance Data">
					<p>We automatically collect:</p>
					<LegalList
						items={[
							"Infrastructure Metrics: Resource performance, availability, latency",
							"Error Logs: System errors, failed provisioning attempts",
							"Security Events: Login attempts, access patterns, anomaly detection",
							"Platform Performance: Response times, throughput, reliability metrics",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.8 Support and Communication Data">
					<p>When you interact with our support team:</p>
					<LegalList
						items={[
							"Support Tickets: Issue descriptions, correspondence, resolutions",
							"Feedback: Feature requests, bug reports, suggestions",
							"Training Materials: Usage of documentation, tutorials accessed",
							"Community Participation: Forum posts, knowledge base contributions",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 3. How We Use Your Information */}
			<LegalSection title="3. How We Use Your Information">
				<LegalSubSection title="3.1 Service Delivery and Operations">
					<p>We use your information to:</p>
					<LegalList
						items={[
							"Provision Resources: Deploy and manage GPU instances",
							"Manage Access: Authenticate users and enforce permissions",
							"Process Billing: Calculate usage, generate invoices, process payments",
							"Provide Support: Resolve technical issues, answer questions",
							"Maintain Infrastructure: Ensure platform availability and performance",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="3.2 Platform Enhancement">
					<p>Your data helps us:</p>
					<LegalList
						items={[
							"Optimize Performance: Improve provisioning times and resource allocation",
							"Develop Features: Build new capabilities based on usage patterns",
							"Enhance Security: Detect and prevent unauthorized access",
							"Improve Reliability: Identify and resolve infrastructure issues",
							"Customize Experience: Tailor the platform to your workflow",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="3.3 Communications">
					<p>We communicate with you about:</p>
					<LegalList
						items={[
							"Service Updates: Maintenance windows, new features, changes",
							"Security Alerts: Suspicious activity, required actions",
							"Billing Notifications: Invoices, payment reminders, usage alerts",
							"Product Announcements: New GPU types, regions, capabilities",
							"Educational Content: Best practices, optimization tips (opt-in)",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="3.4 Legal and Compliance">
					<p>We process data to:</p>
					<LegalList
						items={[
							"Meet Legal Obligations: Comply with laws and regulations",
							"Enforce Terms: Ensure compliance with our Terms of Service",
							"Prevent Abuse: Detect and prevent fraudulent or harmful activities",
							"Respond to Legal Requests: Handle subpoenas, court orders",
							"Protect Rights: Defend our legal interests and intellectual property",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 4. Cookie and Tracking Technologies */}
			<LegalSection title="4. Cookie and Tracking Technologies">
				<p>
					We use various tracking technologies as detailed in our{" "}
					<LegalLink href="/cookie">Cookie Policy</LegalLink>. Key distinctions:
				</p>
				<LegalList
					items={[
						"Marketing Site (aion.xyz): Optional analytics cookies with explicit consent via CookieYes",
						"Platform (console.aion.xyz): Essential cookies plus PostHog analytics (required for service delivery)",
						"Legal Basis: Consent for marketing cookies, legitimate interest for platform operations",
						"Control Options: Full control on marketing site, limited options on platform due to operational requirements",
					]}
				/>
				<p>
					For complete details about cookie types, purposes, and management
					options, please see our{" "}
					<LegalLink href="/cookie">Cookie Policy</LegalLink>.
				</p>
			</LegalSection>

			{/* 5. Legal Basis for Processing */}
			<LegalSection title="5. Legal Basis for Processing">
				<p>We process your personal information based on:</p>

				<LegalSubSection title="5.1 Contract Performance">
					<LegalList
						items={[
							"Providing GPU compute services",
							"Processing payments and billing",
							"Managing your account and projects",
							"Delivering customer support",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="5.2 Legitimate Interests">
					<LegalList
						items={[
							"Platform Analytics: PostHog tracking necessary for performance of our contract with you",
							"Infrastructure Monitoring: Essential for cloud platform operation",
							"Security: Threat detection and fraud prevention",
							"Service Improvements: Performance optimization based on usage patterns",
						]}
					/>
					<p>
						Note: We cannot use legitimate interest for marketing cookies –
						those require consent.
					</p>
				</LegalSubSection>

				<LegalSubSection title="5.3 Legal Obligations">
					<LegalList
						items={[
							"Compliance with data protection laws",
							"Tax and financial reporting requirements",
							"Responding to legal processes",
							"Export control and sanctions compliance",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="5.4 Consent">
					<LegalList
						items={[
							"Marketing communications to prospects",
							"Optional analytics and tracking",
							"Beta feature participation",
							"Research and development activities",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 6. Data Sharing and Third Parties */}
			<LegalSection title="6. Data Sharing and Third Parties">
				<LegalSubSection title="6.1 Our Data Sharing Principles">
					<p>
						We do not sell, rent, or trade your personal information. We share
						data only when necessary for service delivery or legal compliance.
					</p>
				</LegalSubSection>

				<LegalSubSection title="6.2 Service Providers">
					<p>We share data with providers who help us operate:</p>
					<LegalList
						items={[
							"Infrastructure Partners: GPU providers, data centers",
							"Payment Processor: Stripe for all billing operations",
							"Analytics: PostHog for platform analytics (essential service)",
							"Support: Intercom for customer service",
							"CRM: Folk for lead enrichment and segmentation",
							"Marketing Analytics: Google Analytics, Meta, LinkedIn, Twitter/X (consent-based)",
							"Security Services: DDoS protection, threat detection",
							"Consent Management Platform: CookieYes – Google-certified CMP for GDPR compliance",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="6.3 Legal and Regulatory Sharing">
					<p>We may share information when required:</p>
					<LegalList
						items={[
							"Legal Compliance: To comply with laws and regulations",
							"Legal Process: In response to subpoenas, warrants, court orders",
							"Emergency Situations: To protect safety and prevent harm",
							"Rights Protection: To protect our rights and property",
							"Breach Notification: To Indian Data Protection Board for all breaches regardless of risk level",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="6.4 Data Processing Agreements">
					<p>We maintain GDPR-compliant DPAs with all sub-processors:</p>
					<LegalList
						items={[
							"PostHog: DPA available at posthog.com/dpa",
							"Stripe: Incorporated in Services Agreement",
							"Intercom: Standard DPA with EU SCCs",
							"Folk CRM: GDPR-compliant processor agreement",
							"CookieYes: DPA available at cookieyes.com/dpa",
						]}
					/>
					<p>
						Enterprise customers may request copies by contacting{" "}
						<LegalLink href="mailto:privacy@aion.xyz">
							privacy@aion.xyz
						</LegalLink>
						.
					</p>
				</LegalSubSection>

				<LegalSubSection title="6.5 Business Transfers">
					<p>In the event of a merger, acquisition, or sale:</p>
					<LegalList
						items={[
							"Your information may be transferred to the successor entity",
							"We will notify you before any transfer occurs",
							"The successor will be bound by this Privacy Policy",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 7. Data Security Measures */}
			<LegalSection title="7. Data Security Measures">
				<LegalSubSection title="7.1 Technical Safeguards">
					<p>We implement industry-standard security measures:</p>
					<LegalList
						items={[
							"Encryption: AES-256 encryption at rest, TLS 1.3 in transit",
							"Access Controls: Role-based access, multi-factor authentication",
							"Network Security: Firewalls, intrusion detection, DDoS protection",
							"Infrastructure Security: Isolated environments, secure key management",
							"Monitoring: 24/7 security monitoring and incident response",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="7.2 Organizational Measures">
					<p>Our security program includes:</p>
					<LegalList
						items={[
							"Security Policies: Comprehensive data protection procedures",
							"Employee Training: Regular security awareness training",
							"Access Restrictions: Limited access on need-to-know basis",
							"Vendor Management: Security assessments of service providers",
							"Incident Response: Established breach notification procedures (within 72 hours to authorities per GDPR, without undue delay to users)",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="7.3 Your Security Responsibilities">
					<p>You play a crucial role in security:</p>
					<LegalList
						items={[
							"Maintaining strong, unique passwords",
							"Enabling multi-factor authentication",
							"Protecting API keys and credentials",
							"Reporting suspicious activities promptly",
							"Following security best practices",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 8. Data Retention */}
			<LegalSection title="8. Data Retention">
				<LegalSubSection title="8.1 Retention Periods">
					<p>We retain data based on:</p>
					<LegalList
						items={[
							"Active Accounts: Throughout your subscription period",
							"Billing Records: 7 years for tax and accounting purposes",
							"Consent Records: 2 years from consent date",
							"Usage Logs: 90 days for operational data",
							"Security Logs: 1 year for incident investigation",
							"Support Records: 3 years after ticket closure",
							"Deleted Projects: 30 days recovery period",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="8.2 Data Deletion">
					<p>Upon account termination:</p>
					<LegalList
						items={[
							"Instance data is immediately terminated",
							"Account data is retained for 90 days for recovery",
							"Billing records are retained per legal requirements",
							"You may request immediate deletion (subject to legal obligations)",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 9. Your Privacy Rights */}
			<LegalSection title="9. Your Privacy Rights">
				<LegalSubSection title="9.1 Rights You May Exercise">
					<p>Depending on your location, you have rights to:</p>
					<LegalList
						items={[
							"Access: Request a copy of your personal data",
							"Correction: Update inaccurate information",
							"Deletion: Request removal of your data",
							"Portability: Receive data in machine-readable format",
							"Restriction: Limit how we process your data",
							"Objection: Opt-out of certain processing",
							"Withdraw Consent: Revoke previously given consent",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="9.2 How to Exercise Rights">
					<p>To exercise your rights:</p>
					<LegalList
						items={[
							"Dashboard: Access and update most information",
							"Email: privacy@aion.xyz",
							"API: Programmatic data export available",
							"Support: File a privacy request ticket",
						]}
					/>
					<p>
						We respond to requests within 30 days, or 45 days for complex
						requests with notice.
					</p>
				</LegalSubSection>

				<LegalSubSection title="9.3 California Privacy Rights (CCPA)">
					<p>California residents have additional rights:</p>
					<LegalList
						items={[
							"Right to know categories and sources of data collected",
							"Right to know business purposes for collection",
							"Right to non-discrimination for exercising rights",
							"Right to opt-out of data sales (we don't sell data)",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="9.4 European Privacy Rights (GDPR)">
					<p>EU/EEA residents have enhanced rights:</p>
					<LegalList
						items={[
							"Explicit consent requirements for processing",
							"Right to lodge complaints with supervisory authorities",
							"Right to object to automated decision-making",
							"Enhanced data portability rights",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="9.5 Indian Privacy Rights (DPDPA)">
					<p>
						Indian residents have rights under the Digital Personal Data
						Protection Act:
					</p>
					<LegalList
						items={[
							"Right to access personal data in structured format",
							"Right to correction and erasure of personal data",
							"Right to grievance redressal",
							"Right to nominate a digital nominee",
							"Consent withdrawal at any time (may affect service availability)",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 10. International Data Transfers */}
			<LegalSection title="10. International Data Transfers">
				<LegalSubSection title="10.1 Global Infrastructure">
					<p>Your data may be processed in:</p>
					<LegalList
						items={[
							"United States (primary processing)",
							"European Union (regional deployments)",
							"Your selected GPU deployment regions",
							"Support centers globally",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="10.2 Transfer Safeguards">
					<p>We ensure appropriate protection through:</p>
					<LegalList
						items={[
							"Standard Contractual Clauses: EU-approved mechanisms",
							"Data Processing Agreements: With all sub-processors",
							"Security Measures: Consistent global security standards",
							"Access Controls: Regional data isolation where required",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 11. Children's Privacy */}
			<LegalSection title="11. Children's Privacy">
				<p>
					Our platform is not intended for users under 18 (or under 16 in the EU
					without parental consent). We do not knowingly collect data from minors
					below these ages. If we discover such data collection, we will promptly
					delete it.
				</p>
			</LegalSection>

			{/* 12. AI and Automated Processing */}
			<LegalSection title="12. AI and Automated Processing">
				<LegalSubSection title="12.1 Automated Systems">
					<p>We use automated systems for:</p>
					<LegalList
						items={[
							"Resource Allocation: Optimizing GPU assignments",
							"Fraud Detection: Identifying suspicious activities",
							"Performance Optimization: Workload distribution",
							"Anomaly Detection: Security threat identification",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="12.2 Human Oversight">
					<p>
						You can request human review of automated decisions that
						significantly affect you, such as account suspension or credit limit
						determinations.
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 13. Policy Updates */}
			<LegalSection title="13. Policy Updates">
				<LegalSubSection title="13.1 Change Notifications">
					<p>We will notify you of material changes via:</p>
					<LegalList
						items={[
							"Email to your registered address",
							"Platform dashboard notifications",
							"30-day advance notice for significant changes",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="13.2 Continued Use">
					<p>
						Continued platform use after changes constitutes acceptance of the
						updated policy.
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 14. Contact Information */}
			<LegalSection title="14. Contact Information">
				<LegalSubSection title="14.1 Privacy Inquiries">
					<p>For privacy-related questions:</p>
					<p>
						<strong className="text-(--bunker-675)">Privacy Team</strong>
						<br />
						AION Technologies Inc.
						<br />
						Email:{" "}
						<LegalLink href="mailto:privacy@aion.xyz">
							privacy@aion.xyz
						</LegalLink>
						<br />
						Response Time: Within 48 hours
					</p>
					<p>
						<strong className="text-(--bunker-675)">
							Data Protection Officer
						</strong>
						<br />
						Email:{" "}
						<LegalLink href="mailto:dpo@aion.xyz">dpo@aion.xyz</LegalLink>
					</p>
				</LegalSubSection>

				<LegalSubSection title="14.2 Regulatory Contacts">
					<p>
						<strong className="text-(--bunker-675)">Headquarters</strong>
						<br />
						AION Technologies Inc.
						<br />
						1450 Broadway
						<br />
						New York, NY 10018
						<br />
						United States
					</p>
					<p>
						<strong className="text-(--bunker-675)">EU Representative</strong>
						<br />
						To be appointed. For EU data protection matters, contact{" "}
						<LegalLink href="mailto:dpo@aion.xyz">dpo@aion.xyz</LegalLink>
					</p>
					<p className="text-(length:--text-sm-14px) text-(--bunker-325)">
						Note: As an infrastructure provider (IaaS), we are not required to
						appoint a DPO under Article 37 GDPR as our core activities do not
						involve large-scale systematic monitoring of data subjects. We
						maintain a dedicated privacy team for all data protection matters.
					</p>
					<p>
						<strong className="text-(--bunker-675)">
							Data Protection Officer for India
						</strong>
						<br />
						To be appointed when required under DPDPA. Contact{" "}
						<LegalLink href="mailto:privacy@aion.xyz">
							privacy@aion.xyz
						</LegalLink>
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 15. Complaint Resolution */}
			<LegalSection title="15. Complaint Resolution">
				<LegalSubSection title="15.1 Internal Process">
					<p>To file a privacy complaint:</p>
					<LegalList
						items={[
							"Contact privacy@aion.xyz",
							"Receive acknowledgment within 48 hours",
							"Investigation completed within 30 days",
							"Escalation to DPO if unsatisfied",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="15.2 Regulatory Authorities">
					<p>You may lodge complaints with:</p>
					<LegalList
						items={[
							"Your local data protection authority",
							"California Privacy Protection Agency (CPPA)",
							"European Data Protection Supervisor",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 16. Additional Resources */}
			<LegalSection title="16. Additional Resources">
				<LegalSubSection title="16.1 Related Policies">
					<p>
						<LegalLink href="/cookie">Cookie Policy</LegalLink> – Detailed
						cookie information
					</p>
					<p>
						<LegalLink href="/tos">Terms of Service</LegalLink> – Platform
						usage terms
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* Version footer */}
			<div className="border-t border-(--bunker-800)/8 pt-8 font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)">
				<p>Document Version: 1.0</p>
				<p>Last Review: August 19, 2025</p>
				<p className="pt-4">
					© 2025 AION Technologies Inc. All rights reserved.
				</p>
				<p className="pt-2">
					This Privacy Policy supersedes all previous versions and constitutes
					our commitment to protecting your privacy while delivering world-class
					GPU infrastructure services.
				</p>
			</div>
		</LegalPageShell>
	);
}
