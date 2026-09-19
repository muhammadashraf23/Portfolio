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

  const mediaBase = `/images/projects/media/${project.slug}`;

  return (
    <div className="min-h-screen bg-background text-[#0a0a0a]">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 py-16 sm:px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-[#0a0a0a]"
        >
          <span aria-hidden>←</span>
          <span>Back to portfolio</span>
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Project case study
              </p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                {project.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm font-semibold text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveDemo && project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#0a0a0a] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Visit Live Demo
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
                  >
                    View Source
                  </a>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Challenge</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{project.challenge}</p>
          </div>
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Solution</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{project.solution}</p>
          </div>
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Outcome</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{project.outcome}</p>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Project media
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Visuals and walkthroughs</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-zinc-600">
              This space is ready for screenshots, GIFs, or short demo videos. Upload them into the project media folders when you are ready.
            </p>
          </div>

          <div className="mt-8 grid gap-8">
            {project.gallery && project.gallery.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2">
                {project.gallery.map((item, idx) => {
                  const isMobile = item.src.includes("mobile");
                  return (
                    <div
                      key={idx}
                      className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-50/50 p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg ${
                        isMobile ? "sm:col-span-1" : "sm:col-span-2 lg:col-span-1"
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] border border-zinc-200/80 bg-zinc-100">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className={`object-cover ${isMobile ? "object-top" : "object-top"} transition-transform duration-500 group-hover:scale-[1.02]`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="px-2 pt-4 pb-1">
                        <h4 className="text-base font-bold text-zinc-900">{item.title}</h4>
                        {item.caption && (
                          <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {project.video ? (
              <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-black">
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
            ) : !project.gallery || project.gallery.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-10 text-center">
                <svg className="mb-4 h-10 w-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-zinc-700">Visual Media</h3>
                <p className="mt-2 text-sm text-zinc-500">Screenshots and walkthroughs coming soon</p>
              </div>
            ) : null}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
