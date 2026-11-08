'use strict';

function existingPrUrl(json) {
  if (!json || !json.url) return '';
  return String(json.url);
}

module.exports = { existingPrUrl };
