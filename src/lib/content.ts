import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { z } from "zod";

/**
 * Filesystem-backed editorial content loader.
 *
 * Each entity type lives under content/<type>/<slug>.mdx with YAML
 * frontmatter for structured fields and Markdown body for prose.
 *
 * Loaded at build time during static prerender; never bundled into
 * the client. Validation via zod fails the build on bad content.
 */

const CONTENT_ROOT = join(process.cwd(), "content");

function readContentFiles(directory: string): { slug: string; raw: string }[] {
  const dir = join(CONTENT_ROOT, directory);
  if (!existsSync(dir)) return [];
  const files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return files.map((file) => ({
    slug: file.replace(/\.(mdx?|md)$/, ""),
    raw: readFileSync(join(dir, file), "utf8"),
  }));
}

// ─── Insight Article ────────────────────────────────────────────────

const insightFrontmatter = z.object({
  tag: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  readTime: z.string(),
  author: z.string(),
  authorRole: z.string(),
});

export interface InsightArticle extends z.infer<typeof insightFrontmatter> {
  slug: string;
  bodyHtml: string;
}

function parseInsight(slug: string, raw: string): InsightArticle {
  const { data, content } = matter(raw);
  const parsed = insightFrontmatter.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in content/insights/${slug}.mdx: ${parsed.error.message}`,
    );
  }
  return {
    slug,
    ...parsed.data,
    bodyHtml: marked.parse(content, { async: false }) as string,
  };
}

let cachedInsights: InsightArticle[] | null = null;

export function getAllInsights(): InsightArticle[] {
  if (cachedInsights) return cachedInsights;
  const files = readContentFiles("insights");
  cachedInsights = files
    .map(({ slug, raw }) => parseInsight(slug, raw))
    .sort((a, b) => b.date.localeCompare(a.date));
  return cachedInsights;
}

export function getInsight(slug: string): InsightArticle | undefined {
  return getAllInsights().find((a) => a.slug === slug);
}

export function getInsightSlugs(): string[] {
  return getAllInsights().map((a) => a.slug);
}
