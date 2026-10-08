# AI Source Standard v1

Published release v1.0: [DOI 10.5281/zenodo.23225776](https://doi.org/10.5281/zenodo.23225776). [Release source and templates](https://github.com/Broadcastwell/ai-source-standard/tree/v1.0).

An open specification for recording AI-assisted buyers in existing forms, CRM and analytics. Version 1.0, 7 October 2026. CC BY 4.0, attribution to Broadcastwell. Adopt it without asking.

Read [STANDARD.md](STANDARD.md) for the exact optional source choices, CRM property names, analytics rules, evidence labels and privacy controls. The [templates](templates/README.md) contain HubSpot property definitions, Salesforce steps, GA4 rules, a Tag Manager configuration and an HTML fieldset.

A self-reported answer stays separate from a browser referrer class. Google AI Overviews and AI Mode clicks cannot be separated from ordinary Google search by browser referrer. No revenue is modelled. Raw buyer questions stay in the company's own intake and CRM; only reviewed, de-identified questions enter a report.

The templates configure systems the adopter already runs. They add no hosted Broadcastwell tracker, new account or paid service. Read each recipe's verification record before applying it. Documentation checks and local fixture tests are distinct from live import acceptance and installation.

GA4, Google Tag Manager and Salesforce: **documentation checked; live installation not tested.** The HubSpot guide records verified configuration and live form delivery, including verified restorable removal of the single test contact; human referral verification is separate.

[Broadcastwell's own dated record](https://app.broadcastwell.com/proof/broadcastwell) follows the same missing-source rules. Read its installation state and source limitations alongside the figures; it is not a claim that every part of the standard has been verified.

## Validation

Use Node.js 24 or later to run the included fixture checks:

    node --test templates/template-checks.test.mjs

The checks cover exact options, strict hostname boundaries, ambiguous Bing exclusion, parameter provenance, hostile URLs, privacy fields and portable configuration structure. A person verifies real referral clicks and the receiving CRM after installation.

## Version changes

Keep the option list and reporting definitions unchanged within a release. Publish a version note and migration instructions for a change to values, scope or privacy rules. Never rewrite historical figures. The citation file identifies this specification; a release DOI is added only after the deposit exists.

Maintained by Broadcastwell LLC. Public contact: hello@broadcastwell.com.
