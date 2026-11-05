import Link from "next/link";
import { Section } from "@/components/layout/Section";
export function Research() {
  return <Section id="research" eyebrow="02 / Research direction" title="When should we trust an intelligent system?" intro="My interests connect agent memory, authorization and empirical evaluation. Building useful systems raises questions about what they remember, what they can do and how we measure their limits.">
    <div className="research-grid"><article><p className="eyebrow">Security & persistent memory</p><h3>Remembering is not authorization.</h3><p>MemoryFence studies how derived memories can survive source deletion when recorded ancestry is incomplete. It measures retrieval exposure separately from tool effects in controlled synthetic scenarios.</p><Link className="text-link" href="/projects/memoryfence/">Explore the bounded study ↗</Link></article><article><p className="eyebrow">Evaluation & model complexity</p><h3>Baselines deserve a fair test.</h3><p>MarketPulse compares forecasting procedures across chronological folds. The investigation makes null results, data provenance and retrospective limitations part of the result.</p><Link className="text-link" href="/projects/marketpulse/">Explore the empirical study ↗</Link></article></div>
  </Section>;
}
