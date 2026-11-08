'use strict';

function draftBody(frames) {
  return (frames || []).map((f, i) => `### ${i + 1}. ${f.title || 'untitled'}`).join('\n');
}

module.exports = { draftBody };
