'use strict';

function heatChip(additions, deletions) {
  return `+${additions} / -${deletions}`;
}

module.exports = { heatChip };
