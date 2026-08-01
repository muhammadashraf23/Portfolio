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

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-dashed border-zinc-300 bg-zinc-50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Images</h3>
                <span className="text-sm text-zinc-500">Folder ready</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Add hero shots, UI mockups, or before/after visuals to <span className="font-semibold">/public/images/projects/media/{project.slug}</span>.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-dashed border-zinc-300 bg-zinc-50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Videos</h3>
                <span className="text-sm text-zinc-500">Folder ready</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Add walkthroughs or product clips to <span className="font-semibold">/public/videos/projects</span> and link them from this page later.
              </p>
            </div>
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
