export default function stringToUrl(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}
