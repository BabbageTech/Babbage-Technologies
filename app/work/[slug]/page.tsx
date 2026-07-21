import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Babbage Technologies`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <section className="bg-background pt-32 lg:pt-40 pb-20">
          <div className="section-container">
            <Link href="/work" className="inline-flex items-center gap-2 text-text-tertiary hover:text-brass-hover text-sm font-mono uppercase tracking-wide mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All work
            </Link>
            <PlateLabel index={String(idx + 1).padStart(2, "0")}>
              {project.industry} · {project.year}
            </PlateLabel>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-6 max-w-3xl leading-[1.05]">
              {project.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mt-6 leading-relaxed">{project.summary}</p>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-paper-line">
              <div>
                <div className="plate-label text-text-tertiary mb-1.5">Client</div>
                <div className="text-text-primary font-display text-lg">{project.client}</div>
              </div>
              <div>
                <div className="plate-label text-text-tertiary mb-1.5">Industry</div>
                <div className="text-text-primary font-display text-lg">{project.industry}</div>
              </div>
              <div>
                <div className="plate-label text-text-tertiary mb-1.5">Stack</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.stack.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-text-tertiary border border-paper-line rounded-badge px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <SprocketRule tone="paper" className="mt-16" />
        </section>

        <section className="section-padding bg-paper-dim">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
              <div>
                <div className="plate-label text-verdigris mb-3">The problem</div>
                <p className="text-text-secondary leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <div className="plate-label text-verdigris mb-3">Our approach</div>
                <p className="text-text-secondary leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <div className="plate-label text-verdigris mb-3">The result</div>
                <p className="text-text-secondary leading-relaxed">{project.result}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32 bg-background">
          <div className="section-container">
            <div className="border-t border-paper-line pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <Link href={`/work/${next.slug}`} className="group">
                <div className="plate-label text-text-tertiary mb-2">Next in work</div>
                <div className="font-display text-2xl text-text-primary group-hover:text-brass-hover transition-colors">
                  {next.title}
                </div>
              </Link>
              <Link href="/contact">
                <Button className="bg-brass hover:bg-brass-hover text-text-paper px-7 py-5 rounded-button font-mono text-sm tracking-wide uppercase">
                  Start your project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
