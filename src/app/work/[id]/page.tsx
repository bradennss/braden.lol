import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { memo } from "react";
import { clientProjects } from "~/data";
import { ImageCard, VideoCard } from "./client";

function formatUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = clientProjects.find((project) => project.id === id);
  if (!project) {
    notFound();
  }

  return {
    title: `braden.lol / work / ${project.name.toLowerCase()}`,
    openGraph: {
      videos: project.videos.map((video) => ({ url: video })),
      images: project.images.map((image) => ({ url: image })),
    },
  };
}

const ClientProjectPage = memo<{ params: Promise<{ id: string }> }>(
  async ({ params }) => {
    const { id } = await params;
    const project = clientProjects.find((project) => project.id === id);
    if (!project) {
      notFound();
    }

    return (
      <main>
        <div className="w-full max-w-2xl mr-auto px-4 pt-8 pb-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold lowercase">
              <Link prefetch href="/">
                <span className="font-semibold">Work</span>
              </Link>
              <span className="text-foreground/25 font-normal"> / </span>
              <span>{project.name}</span>
            </h1>
            {project.url && (
              <Link
                href={project.url}
                target={`client-project-${project.id}`}
                className="underline"
              >
                {formatUrl(project.url)}
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {project.videos.map((video, index) => (
              <VideoCard key={index} src={video} />
            ))}
            {project.images.map((image, index) => (
              <ImageCard key={index} src={image} alt={project.name} />
            ))}
          </div>
        </div>
      </main>
    );
  }
);
ClientProjectPage.displayName = "ClientProjectPage";

export default ClientProjectPage;
