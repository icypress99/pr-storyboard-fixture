'use strict';

function resolveBase(ref) {
  if (!ref) throw new Error('null base ref');
  return String(ref);
}

module.exports = { resolveBase };
