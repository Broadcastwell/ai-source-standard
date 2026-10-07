import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {classifyAiSource} from './referrer-classification.mjs';
const read=name=>fs.readFileSync(new URL(name,import.meta.url),'utf8');
const options=['ChatGPT','Claude','Perplexity','Google AI Overviews or AI Mode','Microsoft Copilot','Google search','LinkedIn','A colleague or partner','An event','Other'];
test('Properties use accepted types, exact names, descriptions and ordered values',()=>{
  const source=JSON.parse(read('hubspot-ai-source.json')),question=JSON.parse(read('hubspot-ai-question-asked.json'));
  assert.equal(source.name,'ai_source');assert.equal(source.type,'enumeration');assert.equal(source.fieldType,'select');assert.deepEqual(source.options.map(v=>v.value),options);
  assert.equal(question.name,'ai_question_asked');assert.equal(question.fieldType,'textarea');assert.equal(question.type,'string');
  assert.equal(source.groupName,'contactinformation');assert.equal(question.groupName,'contactinformation');assert.match(source.description,/Never edited by hand\./);
});
for(const [ref,source] of [['https://chatgpt.com/c/123','chatgpt'],['https://www.perplexity.ai/search/x','perplexity'],['https://claude.ai/chat/x','claude'],['https://gemini.google.com/','gemini'],['https://copilot.microsoft.com/','copilot']])test('Received host class '+source,()=>assert.equal(classifyAiSource({referrer:ref}).source_class,source));
for(const ref of ['https://chatgpt.com.evil.example/','https://notchatgpt.com/','https://chatgpt.com@evil.example/','https://evil.example@claude.ai/','ftp://claude.ai/','https://bing.com/','https://google.com/',''])test('Does not guess an AI source from '+(ref||'missing data'),()=>assert.equal(classifyAiSource({referrer:ref}).ai_candidate,false));
test('Documented parameter is separate and exact',()=>{const v=classifyAiSource({location:'https://example.com/?utm_source=chatgpt.com'});assert.equal(v.evidence,'parameter');assert.equal(v.referrer_class,'unclassified');for(const url of ['https://example.com/?utm_source=ChatGPT','https://example.com/?utm_source=chatgpt.com&utM_source=x&utm_source=bad','https://example.com/?utm_source=perplexity.ai'])assert.equal(classifyAiSource({location:url}).ai_candidate,false);});
test('Conflicting labels are not silently assigned or counted twice',()=>{const v=classifyAiSource({referrer:'https://claude.ai/',location:'https://example.com/?utm_source=chatgpt.com'});assert.equal(v.evidence,'conflict');assert.equal(v.ai_candidate,false);});
test('GTM variable agrees with the portable classifier and does not make a request',()=>{const container=JSON.parse(read('gtm-ai-source-v1.json')).containerVersion;const code=container.variable[0].parameter[0].value;for(const referrer of ['https://claude.ai/','https://chatgpt.com/','https://bing.com/','https://chatgpt.com.evil.example/',''])for(const href of ['https://example.com/','https://example.com/?utm_source=chatgpt.com']){const value=vm.runInNewContext('('+code+')()',{URL,document:{referrer},location:{href}});const expected=classifyAiSource({referrer,location:href});assert.equal(value,expected.evidence+':'+expected.source_class);}assert.equal(container.tag.length,1);assert.doesNotMatch(container.tag[0].parameter[0].value,/fetch\(|XMLHttpRequest|cookie|localStorage|sendBeacon/);});
test('Form has exact optional values with no identity field or submission endpoint',()=>{const html=read('form-fields.html');assert.deepEqual([...html.matchAll(/<option value="([^"]+)"/g)].map(m=>m[1]),options);assert.doesNotMatch(html,/\brequired\b|type="email"|action=|<script/);assert.match(html,/maxlength="2000"/);assert.match(html,/Only if an AI assistant sent you\./);});
