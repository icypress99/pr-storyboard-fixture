'use strict';
const { storyHeader } = require('../src/ui/header');
const { heatChip } = require('../src/ui/heat');
const { resolveBase } = require('../src/api/base');
const { draftBody } = require('../src/api/draft');
const { existingPrUrl } = require('../src/api/pr');

if (!storyHeader('demo').includes('demo')) process.exit(1);
if (heatChip(3, 1) !== '+3 / -1') process.exit(1);
if (resolveBase('main') !== 'main') process.exit(1);
if (!draftBody([{ title: 'a' }]).includes('a')) process.exit(1);
if (existingPrUrl({ url: 'https://example.test/pr/1' }) !== 'https://example.test/pr/1') process.exit(1);
console.log('smoke ok');
