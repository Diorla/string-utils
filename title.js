//@ts-check
/**
 * @param {string} text - It will transform the text e.g. "TEXT" or "text" will become "Text"
 */
const title = (text) =>
  text.slice(0, 1).toUpperCase() + text.slice(1).toLocaleLowerCase();

module.exports = title;
