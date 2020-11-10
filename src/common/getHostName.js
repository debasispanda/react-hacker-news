/**
 * Get hostname of the url
 * @param {string} url
 */
function getHostName(url) {
  if (url) {
    return new URL(url).hostname;
  }
  return "";
}

export default getHostName;
