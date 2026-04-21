import { NextResponse } from "next/server"
import { affiliateLinks, bettingSites, horizontalBanners } from "../../../data/mock-data"

// Serverless redirect entry point used by every affiliate CTA/card/banner.
// URL pattern:  /go/<slug>  →  302  →  target URL
//
// Resolution order:
//   1) affiliateLinks[slug] — a REAL tracker URL (must contain a path / hash,
//      e.g. "https://qualityboost.top/xvX8GhxY"). Placeholder values such as
//      "https://qualityboost.top/" (no hash) are skipped — otherwise QB would
//      redirect to its own root / default campaign (often a PWA of another
//      project). This is exactly the issue you hit on localhost.
//   2) bettingSites[slug].link   — direct product domain (fallback)
//   3) horizontalBanners[slug].link — direct product domain (fallback)

export const dynamic = "force-dynamic"

function isRealTrackerUrl(url: string): boolean {
  try {
    const u = new URL(url.trim())
    // Real tracker URL has a hash/path beyond "/" (e.g. /xvX8GhxY).
    // Reject bare domains like "https://qualityboost.top/" (placeholder).
    const hasPath = u.pathname.replace(/\/+$/, "").length > 0
    const hasQuery = u.search.length > 0
    return hasPath || hasQuery
  } catch {
    return false
  }
}

function resolveTarget(slug: string): string | null {
  const tracker = affiliateLinks[slug]
  if (tracker && isRealTrackerUrl(tracker)) return tracker.trim()

  const site = bettingSites.find((s) => s.slug === slug)
  if (site?.link) return site.link.trim()

  const banner = horizontalBanners.find((b) => b.slug === slug)
  if (banner?.link) return banner.link.trim()

  return null
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const target = resolveTarget(slug)

  if (!target) {
    return new NextResponse("Unknown affiliate slug", { status: 404 })
  }

  return NextResponse.redirect(target, { status: 302 })
}
