'use strict';

/** Story header label for the fixture app shell. */
function storyHeader(branch) {
  return `Storyboard · ${branch || 'unknown'}`;
}

module.exports = { storyHeader };
