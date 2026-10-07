# AI Source Standard v1.0 templates

7 October 2026. CC BY 4.0, attribution to Broadcastwell. Read STANDARD.md before applying. These are configuration recipes for the client's existing systems, not a hosted tracking script. They create no account, credential, cookie or network collector. Keep raw questions inside the client's own form intake and CRM.

## Files

1. `hubspot-ai-source.json` and `hubspot-ai-question-asked.json`: one API request body per property for POST /crm/v3/properties/contacts. They are not a file for an invented HubSpot import screen. The UI recipe is in hubspot.md. Existing fields must be inspected before creating anything.
2. `hubspot-properties.csv`: field specification table, including descriptions and ordered options. A documentation table, not contact data.
3. `salesforce.md`: field table, generated Web-to-Lead mapping and optional Flow outline. Organization-specific IDs are intentionally not supplied.
4. `ga4.md`: exact channel rule, source segments and exploration. Preserve existing channel groups.
5. `referrer-classification.mjs`: pure local classifier, used by the generated GTM custom variable. It neither reads nor stores visitor data on its own.
6. `gtm-ai-source-v1.json`: container configuration for merging into an existing unpublished web-container workspace. Includes a DOM Ready trigger, classification variable, URL parameter variables and a hidden-field tag. The tag only fills an already-present ai_referrer_class input. It does not change the self-reported fields, set cookies or send network requests.
7. `form-fields.html`: fieldset to place in the client's existing form, with optional question and helper text. The form's existing submit handler and CRM mapping remain responsible for delivery.
8. `privacy.txt`: the supplied sentence.

## Verification record

Documentation review completed 7 October 2026. Classifier and form fixtures are tested locally. Import acceptance and live installation must be recorded separately for each actual platform. GA4, Google Tag Manager and Salesforce: documentation checked; live installation not tested. Broadcastwell's audited stack uses Framer analytics and HubSpot, with no GA4, Tag Manager or Salesforce test environment. HubSpot properties and the separately approved three-field intake form were published and verified on 7 October 2026. The own-site controlled submission then reached both the existing notification and the two exact CRM properties. The same single synthetic contact was removed using restorable deletion at 23:29 UTC; the UI and independent CRM search confirmed zero active matches. The existing Framer analytics classification and the three human referral clicks are separate, unverified checks. No new platform account or container may be created for a test.

For GTM, use Admin, Import Container, Choose container file, select an existing workspace, and choose Merge. Inspect Preview and Confirm before importing. Never choose Overwrite. Inspect every resulting variable and tag, run Preview on an owned test form, and have the client's authorized administrator publish. The export's zero IDs are portable metadata, not live resource identifiers. If the importer rejects the recipe, use the documented manual variable/tag steps and record the exact error. Do not call a parsed file an accepted import.

Primary documentation, read 7 October 2026: https://support.google.com/tagmanager/answer/6106997?hl=en-GB and https://developers.google.com/tag-platform/tag-manager/api/reference/rest.
