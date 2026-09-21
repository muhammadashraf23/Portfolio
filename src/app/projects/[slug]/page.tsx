import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 lg:px-12">

        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-zinc-900"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Portfolio
        </Link>

        {/* Hero */}
        <section className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
              Case Study
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-500">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="glass-pill px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveDemo && project.liveDemo !== "#" && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-colors hover:border-zinc-500 hover:text-zinc-900"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-100 shadow-[0_24px_64px_rgba(0,0,0,0.10)]">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
        </section>

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <section className="grid gap-6 sm:grid-cols-3">
          {[
            { num: "01", label: "Challenge", body: project.challenge },
            { num: "02", label: "Solution", body: project.solution },
            { num: "03", label: "Outcome", body: project.outcome },
          ].map(({ num, label, body }) => (
            <div key={label} className="glass-card group rounded-2xl p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-zinc-400">
                {num}
              </p>
              <h2 className="mt-2 text-xl font-black text-zinc-900">{label}</h2>
              <div className="mt-3 h-px w-8 bg-zinc-300 transition-all duration-300 group-hover:w-16 group-hover:bg-zinc-500" />
              <p className="mt-4 text-sm leading-7 text-zinc-500">{body}</p>
            </div>
          ))}
        </section>

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
            Project Media
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-900">
            Visuals and Walkthroughs
          </h2>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((item, idx) => {
                const isMobile = item.src.includes("mobile");
                return (
                  <div
                    key={idx}
                    className={`group overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] ${
                      isMobile ? "sm:col-span-1" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-sm font-bold text-zinc-900">{item.title}</h4>
                      {item.caption && (
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {project.video && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-900">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {!project.gallery?.length && !project.video && (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-16 text-center">
              <svg className="mb-4 h-10 w-10 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-semibold text-zinc-400">Screenshots coming soon</h3>
            </div>
          )}
        </section>

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <section className="pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
            Key Highlights
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.highlights.map((item) => (
              <span
                key={item}
                className="glass-pill px-4 py-2 text-sm font-semibold text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}