import type { Metadata } from "next";

import {
	LegalPageShell,
	LegalSection,
	LegalSubSection,
	LegalList,
	LegalLink,
} from "@/components/modules/legalPageShell";

export const metadata: Metadata = {
	title: "Terms of Service - GPU Cloud Platform Agreement",
	description:
		"Terms of Service for aion's enterprise GPU cloud platform. Review our service agreement covering GPU compute, AI infrastructure, billing, data processing, and acceptable use policies.",
	alternates: {
		canonical: "https://aion.ai/tos",
	},
};

export default function TermsOfServicePage() {
	return (
		<LegalPageShell
			title="Terms of Service"
			effectiveDate="Last updated: August 19, 2025"
		>
			{/* 1. Acceptance of Terms */}
			<LegalSection title="1. Acceptance of Terms">
				<p>
					By accessing or using the AION services operated by AION Technologies
					Inc. (&quot;AION&quot;, &quot;we&quot;, &quot;us&quot;, or
					&quot;our&quot;), including our marketing website (aion.xyz) and GPU
					compute platform (console.aion.xyz) (collectively, the
					&quot;Services&quot;), you agree to be bound by these Terms of Service
					(&quot;Terms&quot;).
				</p>
				<p>
					If you do not agree to these Terms, you must not use our Services.
				</p>

				<LegalSubSection title="1.1 Essential Third-Party Services">
					<p>By using our Services, you acknowledge and agree that:</p>
					<p>
						<strong className="text-(--bunker-675)">
							Marketing Website (aion.xyz):
						</strong>
					</p>
					<LegalList
						items={[
							"CookieYes for GDPR-compliant consent management",
							"Google Tag Manager and Analytics 4 (with your explicit consent)",
							"Meta Pixel, LinkedIn Insight, and Twitter/X tracking (with your explicit consent)",
							"You may browse without accepting marketing cookies",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Platform (console.aion.xyz):
						</strong>
					</p>
					<LegalList
						items={[
							"PostHog for product analytics (REQUIRED – cannot opt out while using platform)",
							"Stripe for payment processing (REQUIRED for billing operations)",
							"Intercom for customer support (REQUIRED for assistance)",
							"These are essential services for cloud platform operation",
							"By using the platform, you consent to these essential data processors",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="1.2 Our Right to Modify">
					<p>
						We reserve the unilateral and absolute right to modify these Terms,
						our Privacy Policy, Cookie Policy, and any associated policies at
						any time. Modifications may be made for any reason including but not
						limited to:
					</p>
					<LegalList
						items={[
							"Evolving business requirements or strategy",
							"Regulatory compliance updates",
							"Technology or infrastructure changes",
							"Market dynamics or competitive positioning",
							"Service enhancements or restrictions",
							"Integration of new features or third-party services",
						]}
					/>
					<p>
						Notice will be provided at least 30 days in advance for material
						changes affecting your rights or obligations, via email to your
						registered address or platform notification. Continued use after
						notice constitutes acceptance of all modifications. If you disagree
						with any changes, you must discontinue use immediately.
					</p>
				</LegalSubSection>

				<LegalSubSection title="1.3 Complete Agreement and Acceptance">
					<p>
						These Terms constitute a binding legal agreement. You must accept
						them in their entirety – no partial acceptance is permitted. By
						accessing or using any part of our Services, you:
					</p>
					<LegalList
						items={[
							"Acknowledge you have read and understood these Terms completely",
							"Agree to be bound by all provisions without modification or exception",
							"Consent to our data collection and processing practices as described",
							"Accept that non-agreement requires immediate cessation of all use",
							"Understand that use of our Services is voluntary and conditioned on full acceptance",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 2. Platform Services Description */}
			<LegalSection title="2. Platform Services Description">
				<LegalSubSection title="2.1 Core GPU Compute Services">
					<p>AION provides:</p>
					<LegalList
						items={[
							"GPU Instance Provisioning: Bare-metal GPU instances with full SSH access",
							"Managed Infrastructure: Pre-configured environments for AI/ML workloads",
							"Resource Management: Project-based resource allocation and quota management",
							"API Access: Programmatic control of infrastructure",
							"Monitoring and Metrics: Real-time resource utilization tracking",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.2 Service Availability and Performance">
					<LegalList
						items={[
							"Provisioning Time: Target of <20 minutes for GPU instances",
							"Availability: Best-effort availability with no guaranteed uptime SLA in MVP",
							"Maintenance: Regular maintenance windows with advance notification",
							"Regional Availability: Subject to provider capacity and regional restrictions",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 3. Account Registration and Management */}
			<LegalSection title="3. Account Registration and Management">
				<LegalSubSection title="3.1 Account Requirements">
					<p>To use our Platform, you must:</p>
					<LegalList
						items={[
							"Provide accurate and complete registration information",
							"Be at least 18 years old (or 16 with parental consent in EU) and have legal capacity to enter contracts",
							"Maintain the security of your account credentials",
							"Comply with all applicable laws and regulations",
							"Pass our identity verification requirements",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="3.2 Organization Accounts">
					<p>For organization accounts:</p>
					<LegalList
						items={[
							"The registering party must have authority to bind the organization",
							"You are responsible for all users under your organization",
							"Project-level access controls must be properly managed",
							"Billing responsibility lies with the organization owner",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="3.3 Account Security">
					<p>You are responsible for:</p>
					<LegalList
						items={[
							"Maintaining strong, unique passwords",
							"Enabling multi-factor authentication",
							"Protecting API keys and access tokens",
							"Immediately reporting any unauthorized access",
							"All activities conducted under your account",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 4. Acceptable Use Policy */}
			<LegalSection title="4. Acceptable Use Policy">
				<LegalSubSection title="4.1 Prohibited Uses">
					<p>You may NOT use our Platform to:</p>
					<LegalList
						items={[
							"Mine cryptocurrency without explicit written permission",
							"Conduct illegal activities or violate any laws",
							"Distribute malware, viruses, or harmful code",
							"Perform unauthorized penetration testing or security scanning",
							"Violate intellectual property rights",
							"Engage in activities that harm our infrastructure or other users",
							"Resell resources without authorization",
							"Circumvent usage limits or quotas",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="4.2 Computational Restrictions">
					<p>Without prior approval, you may not:</p>
					<LegalList
						items={[
							"Run workloads that monopolize shared resources",
							"Deploy applications that violate our network policies",
							"Use resources for denial-of-service attacks",
							"Operate open proxies or anonymous VPN services",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="4.3 Content Restrictions">
					<p>You are prohibited from processing content that:</p>
					<LegalList
						items={[
							"Violates any applicable laws",
							"Infringes on intellectual property rights",
							"Contains harmful or malicious code",
							"Violates privacy rights of individuals",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 5. Billing and Payments */}
			<LegalSection title="5. Billing and Payments">
				<LegalSubSection title="5.1 Payment Processing">
					<LegalList
						items={[
							"Payment Processor: All payments are processed through Stripe",
							"By providing payment information, you authorize us to charge your payment method",
							"You consent to Stripe's terms of service and privacy policy",
							"Payment data is handled directly by Stripe and not stored on our servers",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="5.2 Pricing and Charges">
					<LegalList
						items={[
							"Hourly Billing: GPU instances are billed per hour or fraction thereof",
							"Usage Tracking: Real-time usage tracking via Platform dashboard",
							"Price Changes: We may modify pricing with 30 days notice",
							"Taxes: You are responsible for all applicable taxes",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="5.3 Billing Model Information">
					<p>
						For detailed information about our current billing models, payment
						terms, and pricing structures:
					</p>
					<LegalList
						items={[
							"Contact Support via the Intercom widget on our website",
							"Email support@aion.xyz",
							"Review documentation at docs.aion.xyz/billing",
						]}
					/>
					<p>
						Our billing practices evolve with our platform; support can provide
						current details specific to your use case.
					</p>
				</LegalSubSection>

				<LegalSubSection title="5.4 Billing Disputes">
					<LegalList
						items={[
							"Disputes must be reported within 30 days of the charge",
							"We will investigate and respond within 10 business days",
							"Refunds are at our sole discretion",
							"Continued use during dispute investigation may result in additional charges",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 6. Data and Privacy */}
			<LegalSection title="6. Data and Privacy">
				<LegalSubSection title="6.1 Privacy Policies">
					<p>Your use of our Platform is governed by:</p>
					<p>
						Our <LegalLink href="/privacy">Privacy Policy</LegalLink> – detailing
						data collection and use
					</p>
					<p>
						Our <LegalLink href="/cookie">Cookie Policy</LegalLink> – explaining
						cookie usage and tracking
					</p>
					<p>
						By using the Services, you consent to all data practices described
						in these policies.
					</p>
				</LegalSubSection>

				<LegalSubSection title="6.2 Product Analytics and Tracking">
					<p>
						We use PostHog for comprehensive product analytics, which includes:
					</p>
					<LegalList
						items={[
							"Session recording and replay",
							"User behavior tracking and heatmaps",
							"Feature usage analytics",
							"Performance monitoring",
							"Custom event tracking",
						]}
					/>
					<p>
						This tracking is essential for Platform operation and improvement.
						By using platform.aion.xyz, you consent to this data collection
						which cannot be disabled.
					</p>
				</LegalSubSection>

				<LegalSubSection title="6.3 Your Data">
					<LegalList
						items={[
							"You retain all rights to your data processed on our Platform",
							"We do not claim ownership of your content",
							"You grant us license to process your data as necessary for service delivery",
							"You are responsible for compliance with data protection laws for your data",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 7. Intellectual Property */}
			<LegalSection title="7. Intellectual Property">
				<LegalSubSection title="7.1 Platform Ownership">
					<p>All Platform components remain our exclusive property:</p>
					<LegalList
						items={[
							"Software, code, and algorithms",
							"User interfaces and designs",
							"Documentation and content",
							"Trademarks and branding",
							"APIs and integrations",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="7.2 License Grant">
					<p>
						We grant you a limited, non-exclusive, non-transferable license to:
					</p>
					<LegalList
						items={[
							"Access and use the Platform for intended purposes",
							"Use our APIs according to documentation",
							"Access documentation for Platform use",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="7.3 Feedback and Suggestions">
					<p>Any feedback you provide:</p>
					<LegalList
						items={[
							"Becomes our property without compensation",
							"May be used to improve our Platform",
							"Does not create any confidentiality obligations",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 8. Service Limitations and Disclaimers */}
			<LegalSection title="8. Service Limitations and Disclaimers">
				<LegalSubSection title="8.1 Service Disclaimers">
					<p>
						THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS
						AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
						INCLUDING:
					</p>
					<LegalList
						items={[
							"MERCHANTABILITY",
							"FITNESS FOR A PARTICULAR PURPOSE",
							"NON-INFRINGEMENT",
							"AVAILABILITY OR UPTIME",
							"ERROR-FREE OPERATION",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="8.2 Limitation of Liability">
					<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
					<LegalList
						items={[
							"We are not liable for indirect, incidental, special, or consequential damages",
							"Our total liability is limited to fees paid in the last 12 months, except where prohibited by law (including for data protection violations under GDPR)",
							"We are not responsible for data loss or corruption",
							"We are not liable for third-party actions or content",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="8.3 Service Modifications">
					<p>We reserve the right to:</p>
					<LegalList
						items={[
							"Modify or discontinue any Platform features",
							"Change service specifications",
							"Update system requirements",
							"Alter API functionality",
							"Implement new restrictions or quotas",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 9. Indemnification */}
			<LegalSection title="9. Indemnification">
				<p>You agree to indemnify and hold AION harmless from:</p>
				<LegalList
					items={[
						"Your violation of these Terms",
						"Your violation of applicable laws",
						"Your infringement of third-party rights",
						"Your use of the Platform",
						"Actions of users under your account",
						"Claims arising from your data or content",
					]}
				/>
			</LegalSection>

			{/* 10. Termination */}
			<LegalSection title="10. Termination">
				<LegalSubSection title="10.1 Termination by You">
					<p>You may terminate your account:</p>
					<LegalList
						items={[
							"Through the Platform dashboard",
							"By contacting support",
							"Termination does not relieve payment obligations",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="10.2 Termination by Us">
					<p>We may terminate or suspend your account:</p>
					<LegalList
						items={[
							"For Terms violations",
							"For non-payment",
							"For suspicious or fraudulent activity",
							"For extended inactivity",
							"At our discretion with notice",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="10.3 Effect of Termination">
					<p>Upon termination:</p>
					<LegalList
						items={[
							"Access to Platform ceases immediately",
							"Running instances are terminated",
							"Data may be deleted after 30 days",
							"Outstanding charges remain due",
							"Licenses granted terminate",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 11. Dispute Resolution */}
			<LegalSection title="11. Dispute Resolution">
				<LegalSubSection title="11.1 Governing Law">
					<p>
						These Terms are governed by the laws of Delaware, United States,
						without regard to conflict of law principles. For EU residents,
						mandatory consumer protection laws of your country of residence
						apply and cannot be overridden by this choice of law.
					</p>
				</LegalSubSection>

				<LegalSubSection title="11.2 Arbitration Agreement">
					<p>Any disputes shall be resolved through binding arbitration:</p>
					<LegalList
						items={[
							"Administered by JAMS under its Streamlined Arbitration Rules",
							"Located in Delaware, United States (unless the parties mutually agree to a different location)",
							"Individual claims only (no class actions)",
							"Limited discovery and expedited resolution",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="11.3 Exceptions">
					<p>The following are not subject to arbitration:</p>
					<LegalList
						items={[
							"Small claims court actions",
							"Injunctive relief for IP violations",
							"Claims related to unauthorized access",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 12. Export Compliance */}
			<LegalSection title="12. Export Compliance">
				<LegalSubSection title="12.1 Export Restrictions">
					<p>You represent and warrant that:</p>
					<LegalList
						items={[
							"You are not located in an embargoed country",
							"You are not on any prohibited party list",
							"You will comply with all export control laws",
							"You will not use the Platform for prohibited end uses",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="12.2 U.S. Export Laws">
					<p>
						The Platform is subject to U.S. export controls. You may not export
						or re-export our services without appropriate licenses.
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 13. Beta Features */}
			<LegalSection title="13. Beta Features">
				<LegalSubSection title="13.1 Beta Access">
					<p>Beta features are provided:</p>
					<LegalList
						items={[
							"On an invitation-only basis",
							"Without warranties or SLAs",
							"Subject to additional terms",
							"With potential for data loss",
							"Subject to discontinuation without notice",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="13.2 Beta Feedback">
					<p>Use of beta features constitutes agreement that:</p>
					<LegalList
						items={[
							"Feedback may be used without compensation",
							"Features may change substantially",
							"Data from beta use may not be preserved",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 14. Force Majeure */}
			<LegalSection title="14. Force Majeure">
				<p>We are not liable for failures due to:</p>
				<LegalList
					items={[
						"Natural disasters",
						"Wars or terrorism",
						"Labor disputes",
						"Government actions",
						"Internet or infrastructure failures",
						"Other events beyond our reasonable control",
					]}
				/>
			</LegalSection>

			{/* 15. General Provisions */}
			<LegalSection title="15. General Provisions">
				<LegalSubSection title="15.1 Entire Agreement">
					<p>
						These Terms, together with our Privacy Policy and Cookie Policy,
						constitute the entire agreement between you and AION.
					</p>
				</LegalSubSection>

				<LegalSubSection title="15.2 Severability">
					<p>
						If any provision is found invalid, the remaining provisions continue
						in full effect.
					</p>
				</LegalSubSection>

				<LegalSubSection title="15.3 No Waiver">
					<p>
						Our failure to enforce any right does not constitute a waiver of
						that right.
					</p>
				</LegalSubSection>

				<LegalSubSection title="15.4 Assignment">
					<p>
						You may not assign these Terms. We may assign our rights and
						obligations without restriction.
					</p>
				</LegalSubSection>

				<LegalSubSection title="15.5 Notices">
					<p>Legal notices should be sent to:</p>
					<p>
						Email:{" "}
						<LegalLink href="mailto:legal@aion.xyz">legal@aion.xyz</LegalLink>
						<br />
						Mail: AION Technologies Inc., 1450 Broadway, New York, NY 10018
					</p>
				</LegalSubSection>
			</LegalSection>

			{/* 16. Data Processing Agreements */}
			<LegalSection title="16. Data Processing Agreements">
				<p>For enterprise customers requiring Data Processing Agreements:</p>
				<LegalList
					items={[
						"Standard DPAs available upon request",
						"Include EU Standard Contractual Clauses (SCCs)",
						"Cover all sub-processors including PostHog, Stripe, Intercom, CookieYes",
						"Available for GDPR, CCPA, and DPDPA compliance",
						"Infrastructure providers (IaaS) have different obligations than SaaS providers under GDPR",
						"We act as processor for customer workloads, not controller of end-user data",
					]}
				/>
				<p>
					Contact{" "}
					<LegalLink href="mailto:legal@aion.xyz">legal@aion.xyz</LegalLink> to
					execute.
				</p>
			</LegalSection>

			{/* 17. Contact Information */}
			<LegalSection title="17. Contact Information">
				<p>For questions about these Terms:</p>
				<p>
					<strong className="text-(--bunker-675)">Legal Department</strong>
					<br />
					AION Technologies Inc.
					<br />
					Email:{" "}
					<LegalLink href="mailto:legal@aion.xyz">legal@aion.xyz</LegalLink>
				</p>
				<p>
					<strong className="text-(--bunker-675)">General Support</strong>
					<br />
					Email:{" "}
					<LegalLink href="mailto:support@aion.xyz">support@aion.xyz</LegalLink>
					<br />
					Platform: Support Dashboard
				</p>
				<p>
					<strong className="text-(--bunker-675)">Billing Inquiries</strong>
					<br />
					Email:{" "}
					<LegalLink href="mailto:billing@aion.xyz">billing@aion.xyz</LegalLink>
				</p>
			</LegalSection>

			{/* Version footer */}
			<div className="border-t border-(--bunker-800)/8 pt-8 font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)">
				<p>Document Version: 1.0</p>
				<p>Effective Date: August 19, 2025</p>
				<p className="pt-4">
					© 2025 AION Technologies Inc. All rights reserved.
				</p>
				<p className="pt-2">
					By using our Services, you acknowledge that you have read, understood,
					and agree to be bound by these Terms of Service, our{" "}
					<LegalLink href="/privacy">Privacy Policy</LegalLink>, and our{" "}
					<LegalLink href="/cookie">Cookie Policy</LegalLink> in their entirety.
				</p>
			</div>
		</LegalPageShell>
	);
}
