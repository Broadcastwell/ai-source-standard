// AI Source Standard v1.0. CC BY 4.0, Broadcastwell. Local classification only.
export function classifyAiSource(input = {}) {
  const hosts = {
    'chatgpt.com': 'chatgpt',
    'chat.openai.com': 'chatgpt',
    'claude.ai': 'claude',
    'perplexity.ai': 'perplexity',
    'gemini.google.com': 'gemini',
    'copilot.microsoft.com': 'copilot'
  };
  let referrerClass = 'unclassified';
  let parameterClass = 'unclassified';
  let host = '';
  try {
    const ref = new URL(input.referrer || '');
    if (['http:', 'https:'].includes(ref.protocol) && !ref.username && !ref.password) {
      host = ref.hostname.toLowerCase().replace(/\.$/, '');
      for (const [domain, label] of Object.entries(hosts)) {
        if (host === domain || host.endsWith('.' + domain)) referrerClass = label;
      }
    }
  } catch {}
  try {
    const page = new URL(input.location || '');
    if (['http:', 'https:'].includes(page.protocol) && !page.username && !page.password) {
      const labels = page.searchParams.getAll('utm_source');
      if (labels.length === 1 && labels[0] === 'chatgpt.com') parameterClass = 'chatgpt';
    }
  } catch {}
  const conflict = referrerClass !== 'unclassified' && parameterClass !== 'unclassified' && referrerClass !== parameterClass;
  const source = conflict ? 'conflicting_labels' : referrerClass !== 'unclassified' ? referrerClass : parameterClass;
  return {
    standard_version: '1.0',
    referrer_class: referrerClass,
    parameter_class: parameterClass,
    source_class: source,
    evidence: conflict ? 'conflict' : referrerClass !== 'unclassified' ? 'referrer' : parameterClass !== 'unclassified' ? 'parameter' : 'none',
    ai_candidate: source !== 'unclassified' && !conflict,
    ambiguous_bing: host === 'bing.com' || host.endsWith('.bing.com')
  };
}
