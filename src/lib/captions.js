// Derives a human-readable caption from an asset file path/name.
export function toCaption(path) {
  const filename = path.split('/').pop() ?? '';
  const name = filename.replace(/\.[^./]+$/, '').replace(/[-_]+/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}
