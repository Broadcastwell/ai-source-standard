# GA4 recipe, AI Source Standard v1.0

**Test status: documentation checked; live installation not tested.** Broadcastwell does not run this platform in the audited reference stack. Local fixture checks do not establish platform import acceptance or a live installation. An authorized person must verify the recipe in the adopter's existing system before publishing that installation.

CC BY 4.0, Broadcastwell. Documentation checked 7 October 2026. Use the client's existing GA4 property as an invited Editor, or let its admin apply the steps.

In Admin, Data display, Channel groups, create a custom copy of the default group named AI Source Standard v1. Add a channel named AI referred. Set Source to matches regex and use the anchored expression below. Put it above Referral and other rules that could match the same source. Preserve every other channel and leave the primary channel group unchanged unless the client explicitly approves that change. Save the custom group.

```text
^(?:[a-z0-9-]+\.)*(?:chatgpt\.com|chat\.openai\.com|claude\.ai|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com)$
```

This is a candidate source rule, not proof the browser came from the named product. It includes the documented utm_source=chatgpt.com because GA4 can use that as session source. It excludes generic bing.com, google.com, lookalike suffixes and Direct. Do not include broad patterns such as .*ai.*. Do not call all Google search sessions AI sessions. GA4's own AI Assistant default channel uses its own maintained definition; do not substitute it without noting the definition difference.

In Explore, open a Free form exploration. Select the reporting period and record property timezone. Add Session source / medium as a dimension, Sessions as a metric. Add a Session segment called AI referred v1 with Session source matching the exact expression. Create one segment per named source by retaining only its host alternative. Set the row dimension and metric, apply the relevant segment and export. Keep unknown and direct traffic outside the class rather than estimating it. Count unique sessions once; never sum overlapping segments into a second total.

The report retains the segment rule, period, timezone, source dimension, total sessions base, sessions by class and export date. Without an export that distinguishes referrer from campaign labels, state session source class; referrer versus parameter not distinguishable in this export. The optional GTM helper can retain those classes separately inside the client's existing setup going forward. It does not reconstruct past missing referrers.

Verification is by a person using existing signed-in seats: click a real organic link from ChatGPT, Perplexity and Claude to the client's site, submit nothing, record the exact received referrer/parameter and time, then confirm each session after normal analytics processing. DebugView can assist a controlled consented test, but it does not replace the processed Sessions report. Do not automate an AI product, click an ad or issue a paid API request. Keep verification traffic excluded from demand counts.

Sources: https://support.google.com/analytics/answer/13051316?hl=en ; https://support.google.com/analytics/answer/9304353?hl=en ; https://support.google.com/analytics/answer/11242841?hl=en ; https://support.google.com/analytics/answer/9756891?hl=en . No GA4 property was installed or altered while authoring this recipe.
