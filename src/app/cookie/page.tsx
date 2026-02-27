import type { Metadata } from "next";

import {
	LegalPageShell,
	LegalSection,
	LegalSubSection,
	LegalList,
	LegalTable,
	LegalLink,
} from "@/components/modules/legalPageShell";

export const metadata: Metadata = {
	title: "Cookie Policy | aion",
	description:
		"How AION Technologies Inc. uses cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
	return (
		<LegalPageShell
			title="Cookie Policy"
			effectiveDate="Effective Date: August 19, 2025"
		>
			{/* 1. Introduction */}
			<LegalSection title="1. Introduction">
				<p>
					This Cookie Policy explains how AION Technologies Inc. ("AION," "we,"
					"us," or "our") uses cookies and similar tracking technologies on our
					marketing website (aion.xyz) and GPU compute platform
					(console.aion.xyz). This policy provides detailed information about
					the types of cookies we use, their purposes, and your choices
					regarding their use.
				</p>

				<LegalSubSection title="1.1 Scope">
					<p>This Cookie Policy applies to:</p>
					<LegalList
						items={[
							"Marketing Website (aion.xyz): Informational and discovery content",
							"Platform (console.aion.xyz): GPU compute services and management",
							"Subdomains: docs.aion.xyz, api.aion.xyz, status.aion.xyz",
						]}
					/>
					<p>
						Each property has distinct cookie requirements as detailed below.
					</p>
				</LegalSubSection>

				<LegalSubSection title="1.2 What Are Cookies?">
					<p>
						Cookies are small text files placed on your device when you visit
						our platform. They serve essential purposes for our GPU
						infrastructure services:
					</p>
					<LegalList
						items={[
							"Authentication: Maintaining secure session state while you manage GPU instances",
							"Performance: Optimizing platform response times and resource allocation displays",
							"Analytics: Understanding how users interact with our compute management features",
							"Security: Protecting your account and infrastructure from unauthorized access",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 2. Cookie Usage by Property */}
			<LegalSection title="2. Cookie Usage by Property">
				<LegalSubSection title="2.1 Marketing Website (aion.xyz)">
					<p>
						<strong className="text-(--bunker-675)">
							Consent-Based Tracking via CookieYes
						</strong>
					</p>
					<p>
						All non-essential cookies on our marketing website require your
						explicit prior consent per GDPR and DPDPA requirements:
					</p>
					<LegalList
						items={[
							"Google Tag Manager (GTM container)",
							"Google Analytics 4 (_ga, _gid for user identification)",
							"Meta Pixel (_fbp, _fbc for ad targeting)",
							"LinkedIn Insight (li_sugr, bcookie for B2B analytics)",
							"Twitter/X Universal Website Tag (twclid for conversion tracking)",
							"All tracking scripts are blocked until you provide consent",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.2 Platform – Pre-Authentication (console.aion.xyz)">
					<p>
						<strong className="text-(--bunker-675)">
							Minimal Essential Cookies Only
						</strong>
					</p>
					<p>Anonymous browsing of our GPU catalog uses only:</p>
					<LegalList
						items={[
							"Session identifier for catalog browsing",
							"Region preference (anonymous, no personal data)",
							"No tracking or analytics until waitlist signup",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="2.3 Platform – Post-Authentication">
					<p>
						<strong className="text-(--bunker-675)">
							Essential Service Cookies (No Consent Required)
						</strong>
					</p>
					<p>Authenticated platform usage requires:</p>
					<LegalList
						items={[
							"Authentication tokens (JWT for secure access)",
							"CSRF protection tokens",
							"Project context maintenance",
							"PostHog tracking (ph_* cookies – essential for cloud platform operation)",
						]}
					/>
					<p>PostHog analytics cannot be disabled as they are essential for:</p>
					<LegalList
						items={[
							"Infrastructure monitoring and optimization",
							"Security threat detection",
							"Service delivery improvements",
							"Platform reliability",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 3. How We Use Cookies */}
			<LegalSection title="3. How We Use Cookies">
				<LegalSubSection title="3.1 Purpose Categories">
					<p>
						<strong className="text-(--bunker-675)">
							Essential Platform Operations
						</strong>
					</p>
					<LegalList
						items={[
							"Maintaining your authenticated session",
							"Preserving project context during navigation",
							"Storing temporary form data during instance configuration",
							"Managing API authentication tokens",
							"Enabling real-time resource monitoring",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							User Experience Enhancement
						</strong>
					</p>
					<LegalList
						items={[
							"Remembering your preferred GPU instance types",
							"Storing dashboard layout preferences",
							"Maintaining filter and sort preferences in resource lists",
							"Preserving notification settings",
							"Optimizing content delivery based on your region",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Marketing Analytics (consent required on aion.xyz)
						</strong>
					</p>
					<LegalList
						items={[
							"Campaign effectiveness measurement",
							"Content engagement tracking",
							"Visitor journey mapping",
							"Conversion attribution",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Platform Analytics (PostHog – essential for console.aion.xyz)
						</strong>
					</p>
					<LegalList
						items={[
							"Required for infrastructure monitoring",
							"Service delivery optimization",
							"Security threat detection",
							"Feature adoption tracking",
							"Cannot be disabled while using Platform",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 4. Cookie Categories and Types */}
			<LegalSection title="4. Cookie Categories and Types">
				<LegalSubSection title="4.1 Strictly Necessary Cookies">
					<p>
						These cookies are essential for platform operation and cannot be
						disabled.
					</p>
					<LegalTable
						headers={["Cookie Name", "Purpose", "Duration"]}
						rows={[
							[
								"aion_session",
								"Maintains your authenticated session",
								"24 hours",
							],
							[
								"csrf_token",
								"Protects against cross-site request forgery",
								"Per session",
							],
							[
								"project_id",
								"Maintains current project context",
								"Until logout",
							],
							[
								"auth_token",
								"API authentication for platform operations",
								"7 days",
							],
							[
								"consent_preference",
								"Stores your cookie consent choices",
								"2 years",
							],
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="4.2 Functional Cookies">
					<p>
						These enhance your platform experience but are not strictly
						necessary.
					</p>
					<LegalTable
						headers={["Cookie Name", "Purpose", "Duration"]}
						rows={[
							[
								"dashboard_layout",
								"Preserves your dashboard customization",
								"1 year",
							],
							[
								"preferred_region",
								"Remembers your default deployment region",
								"6 months",
							],
							[
								"instance_filters",
								"Maintains your GPU instance filter preferences",
								"30 days",
							],
							[
								"theme_preference",
								"Stores light/dark mode selection",
								"1 year",
							],
							["language", "Maintains your language preference", "1 year"],
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="4.3 Performance and Analytics Cookies">
					<p>
						<strong className="text-(--bunker-675)">
							Marketing Website Analytics (Consent Required)
						</strong>
					</p>
					<LegalTable
						headers={["Cookie Name", "Purpose", "Duration", "Domain"]}
						rows={[
							[
								"_ga",
								"Google Analytics user identifier",
								"2 years",
								"aion.xyz",
							],
							[
								"_gid",
								"Google Analytics session tracking",
								"24 hours",
								"aion.xyz",
							],
							["_fbp", "Meta Pixel user tracking", "90 days", "aion.xyz"],
							[
								"li_sugr",
								"LinkedIn conversion tracking",
								"90 days",
								"aion.xyz",
							],
							[
								"twclid",
								"Twitter/X conversion tracking",
								"30 days",
								"aion.xyz",
							],
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Platform Analytics (Essential – No Opt-out)
						</strong>
					</p>
					<LegalTable
						headers={["Cookie Name", "Purpose", "Duration", "Domain"]}
						rows={[
							[
								"ph_*",
								"PostHog session and user tracking",
								"1 year",
								"console.aion.xyz",
							],
							[
								"posthog",
								"PostHog feature flags and experiments",
								"1 year",
								"console.aion.xyz",
							],
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 5. Data Collection Through Cookies */}
			<LegalSection title="5. Data Collection Through Cookies">
				<LegalSubSection title="5.1 Information Collected">
					<p>
						Depending on your consent choices, we may collect:
					</p>
					<p>
						<strong className="text-(--bunker-675)">
							Platform Interaction Data:
						</strong>
					</p>
					<LegalList
						items={[
							"General usage patterns and feature adoption",
							"Performance and error metrics",
							"Resource utilization trends",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Marketing Website Data (with consent):
						</strong>
					</p>
					<LegalList
						items={[
							"Page views and navigation paths",
							"Traffic sources and campaign effectiveness",
							"User engagement metrics",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							URL Parameter Tracking:
						</strong>
					</p>
					<LegalList
						items={[
							"UTM parameters collected in URLs (no cookies required)",
							"Parameters: utm_source, utm_medium, utm_campaign, utm_term, utm_content",
							"Stored server-side for attribution analysis",
							"Not considered personal data unless linked to identifiable user",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 6. Third-Party Services */}
			<LegalSection title="6. Third-Party Services">
				<LegalSubSection title="6.1 Infrastructure Providers">
					<p>
						Our platform integrates with infrastructure providers who may set
						their own cookies:
					</p>
					<p>
						<strong className="text-(--bunker-675)">
							Cloud Provider Interfaces
						</strong>
					</p>
					<LegalList
						items={[
							"Used when accessing provider-specific features",
							"Required for cross-provider resource management",
							"Subject to provider privacy policies",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">Payment Processing</strong>
					</p>
					<LegalList
						items={[
							"Stripe cookies for payment processing",
							"Required only during billing operations",
							"Governed by Stripe's privacy policy",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="6.2 Essential Platform Services">
					<p>
						<strong className="text-(--bunker-675)">
							PostHog (console.aion.xyz only)
						</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Necessary for performance of contract to which the data subject is party",
							"Purpose: Platform optimization, security, and reliability",
							"Data Processing Agreement available at posthog.com/dpa",
							"Cannot be disabled while using the Platform",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Stripe (console.aion.xyz only)
						</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Contract performance",
							"Purpose: Payment processing and billing",
							"Separate DPA and terms apply",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Intercom (support across all properties)
						</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Legitimate Interest for customer support",
							"Purpose: Customer service and technical assistance",
						]}
					/>
				</LegalSubSection>

				<LegalSubSection title="6.3 Marketing Analytics Services (aion.xyz only)">
					<p>
						<strong className="text-(--bunker-675)">Google Analytics 4</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Consent via CookieYes",
							"Google Consent Mode v2 implemented",
							"Modeled conversions for non-consented users",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">Meta Pixel</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Consent via CookieYes",
							"Purpose: Ad targeting and campaign measurement",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							LinkedIn Insight Tag
						</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Consent via CookieYes",
							"Purpose: B2B audience analytics",
						]}
					/>
					<p>
						<strong className="text-(--bunker-675)">
							Twitter/X Conversion Tracking
						</strong>
					</p>
					<LegalList
						items={[
							"Legal Basis: Consent via CookieYes",
							"Purpose: Campaign measurement and conversion tracking",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 7. Legal Basis for Cookie Usage */}
			<LegalSection title="7. Legal Basis for Cookie Usage">
				<LegalSubSection title="7.1 Marketing Website (aion.xyz)">
					<LegalList
						items={[
							"Consent Required: All non-essential cookies are blocked until you provide explicit consent",
							"ePrivacy Directive Compliance: We obtain prior consent before setting any tracking cookies",
							"Regional Detection: GDPR consent mode for EU visitors, CCPA opt-out mode for California residents",
							"DPDPA Compliance: For Indian residents, general consent for all cookie purposes per DPDPA requirements",
							"Consent Management: Handled via CookieYes consent management platform",
						]}
					/>
				</LegalSubSection>
				<LegalSubSection title="7.2 Platform Services (console.aion.xyz)">
					<LegalList
						items={[
							"Essential Cookies: No consent required for authentication and security cookies",
							"PostHog Analytics: Necessary for performance of our contract with you for cloud service operation",
							"Disclosure Provided: Clear notice given, but opt-out not available while using Platform",
							"Service Requirement: Analytics are essential for platform security and reliability",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 8. Managing Your Cookie Preferences */}
			<LegalSection title="8. Managing Your Cookie Preferences">
				<LegalSubSection title="8.1 Marketing Website Controls">
					<p>On aion.xyz, you can:</p>
					<LegalList
						items={[
							"Accept All: Enable all analytics and marketing cookies",
							"Reject All: Use only essential cookies for basic functionality",
							"Customize: Select specific cookie categories via CookieYes",
							"Change Anytime: Update preferences via the cookie settings link in footer",
						]}
					/>
				</LegalSubSection>
				<LegalSubSection title="8.2 Platform Cookie Management">
					<p>On platform.aion.xyz:</p>
					<LegalList
						items={[
							"Pre-Authentication: Minimal essential cookies only, no consent needed",
							"Post-Authentication: PostHog and essential cookies are mandatory for service",
							"No Opt-Out: Platform analytics cannot be disabled while maintaining access",
							"Alternative: Use API-only access to minimize cookie usage",
						]}
					/>
				</LegalSubSection>
				<LegalSubSection title="8.3 Browser Controls">
					<p>Manage cookies in your browser:</p>
					<LegalList
						items={[
							"Google Chrome: chrome://settings/cookies",
							"Safari: Preferences > Privacy > Manage Website Data",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 9. Cookie Security */}
			<LegalSection title="9. Cookie Security">
				<LegalSubSection title="9.1 Security Measures">
					<p>All cookies are protected through:</p>
					<LegalList
						items={[
							"HTTPS-only transmission",
							"HttpOnly flags on sensitive cookies",
							"SameSite attributes to prevent CSRF",
							"Regular security audits",
							"Encryption of sensitive cookie data",
						]}
					/>
				</LegalSubSection>
				<LegalSubSection title="9.2 Session Management">
					<p>For platform security:</p>
					<LegalList
						items={[
							"Sessions expire after 24 hours of inactivity",
							"Concurrent session limits are enforced",
							"Suspicious activity triggers re-authentication",
							"Cookies are invalidated on password changes",
						]}
					/>
				</LegalSubSection>
			</LegalSection>

			{/* 10. Updates to This Policy */}
			<LegalSection title="10. Updates to This Policy">
				<p>We may update this Cookie Policy to reflect:</p>
				<LegalList
					items={[
						"New platform features",
						"Security enhancements",
						"Regulatory requirements",
						"User feedback",
					]}
				/>
				<p>
					Updates are effective upon posting. Material changes will trigger:
				</p>
				<LegalList
					items={[
						"Dashboard notifications",
						"Consent renewal requests",
						"Email notifications to account holders",
					]}
				/>
			</LegalSection>

			{/* 11. Contact Information */}
			<LegalSection title="11. Contact Information">
				<p>For cookie-related inquiries:</p>
				<p>
					<strong className="text-(--bunker-675)">Privacy Team</strong>
					<br />
					AION Technologies Inc.
					<br />
					Email:{" "}
					<LegalLink href="mailto:privacy@aion.xyz">privacy@aion.xyz</LegalLink>
					<br />
					Response time: Within 48 hours
				</p>
				<p>
					<strong className="text-(--bunker-675)">
						Data Protection Officer
					</strong>
					<br />
					Email:{" "}
					<LegalLink href="mailto:dpo@aion.xyz">dpo@aion.xyz</LegalLink>
				</p>
			</LegalSection>

			{/* 12. Limitation of Liability */}
			<LegalSection title="12. Limitation of Liability">
				<p>
					Our liability for any breach of this Cookie Policy is limited to the
					extent permitted by applicable law. We are not liable for any indirect
					or consequential damages arising from cookie usage, except where such
					limitation is prohibited by law.
				</p>
			</LegalSection>

			{/* Version footer */}
			<div className="border-t border-(--bunker-800)/8 pt-8 font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)">
				<p>Document Version: 1.0</p>
				<p>Last Review: August 19, 2025</p>
				<p className="pt-4">
					© 2025 AION Technologies Inc. All rights reserved.
				</p>
				<p className="pt-2">
					This Cookie Policy is part of our privacy framework. Please also
					review our{" "}
					<LegalLink href="/privacy">Privacy Policy</LegalLink> and{" "}
					<LegalLink href="/tos">Terms of Service</LegalLink>.
				</p>
			</div>
		</LegalPageShell>
	);
}
