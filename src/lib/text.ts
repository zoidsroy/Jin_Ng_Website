/**
 * Descriptions live in YAML frontmatter rather than a Markdown body (so one
 * work stays one file in both languages), which means Astro's Markdown
 * pipeline never sees them. These helpers cover the only formatting the
 * content actually uses: blank-line paragraphs and *emphasis*.
 */

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => ESCAPES[char] ?? char);
}

/** Split a block of text on blank lines. */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

/**
 * Escape a paragraph, then turn `*emphasis*` into `<em>`. Safe to pass to
 * `set:html` because escaping happens before any tag is introduced.
 */
export function inlineFormat(text: string): string {
  return escapeHtml(text).replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
}
