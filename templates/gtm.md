# Google Tag Manager recipe, AI Source Standard v1.0

**Test status: documentation checked; live installation not tested.** Broadcastwell does not run this platform in the audited reference stack. Local fixture checks do not establish platform import acceptance or a live installation. An authorized person must verify the recipe in the adopter's existing system before publishing that installation.

CC BY 4.0, Broadcastwell. Use an existing client-owned web container only. No new tracking service, cookie, script URL or external request is introduced.

1. Export the current workspace for a client-held rollback. In Admin, Import Container, select gtm-ai-source-v1.json and an existing unpublished workspace. Select Merge. Inspect the change preview: three variables, one DOM Ready trigger and one Custom HTML tag. Do not overwrite the container or alter unrelated tags.
2. Open Variables. AI Source v1 classification is Custom JavaScript and returns the received class from the pure classifier. AI Source v1 utm_source and AI Source v1 utm_medium are URL variables, Component Type Query, keys utm_source and utm_medium. No value is assigned to the visible source field.
3. Open Triggers. AI Source v1 DOM Ready uses DOM Ready. Open Tags. AI Source v1 hidden technical field is Custom HTML and fills only an existing input named ai_referrer_class. It does not create that field, submit a form or store a question. Restrict the trigger to the relevant form pages in the client's workspace if appropriate.
4. If the form needs that technical value, its developer adds an optional hidden input with name ai_referrer_class to the existing form and retains it only in the client's own system. This is separate from the two standard CRM properties. If no approved technical field exists, omit the hidden tag; the analytics definitions still work.
5. Use Preview on a client-owned test form. Check exact host, empty referrer, ChatGPT parameter, conflicting labels, lookalike host and blank source cases. Confirm ai_source stays blank until a person chooses it. Confirm Network shows no request added by the helper. Single-page or asynchronously inserted forms need the client's existing form-render event instead of assuming DOM Ready runs again. Have the administrator review and publish only the owned change.

The JSON is a portable configuration recipe, not evidence of a successful import. Record actual importer acceptance and Preview results per installation. A site without a tag manager can use the source report without this helper. Never add a Broadcastwell-hosted tracking script to a client site.

Sources read 7 October 2026: https://support.google.com/tagmanager/answer/7683362?hl=en ; https://support.google.com/tagmanager/answer/7182738?hl=en ; https://support.google.com/tagmanager/answer/6106997?hl=en-GB .
