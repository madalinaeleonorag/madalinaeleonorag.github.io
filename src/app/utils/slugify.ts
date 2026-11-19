/** 'SS&C Technologies' → 'ssandc-technologies'. Used for the role pages, /work-experience/<slug>. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
