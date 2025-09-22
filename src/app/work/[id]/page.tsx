import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { memo } from "react";
import { clientProjects } from "~/data";

function formatUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = clientProjects.find((project) => project.id === id);
  if (!project) {
    notFound();
  }

  return {
    title: `Work / ${project.name}`,
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
            <h1 className="text-2xl font-semibold min-w-0">
              <Link prefetch href="/">
                <span className="font-semibold">Work</span>
              </Link>
              <span className="text-foreground/25 select-none"> / </span>
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
            {project.images.map((image, index) => (
              <Image
                key={index}
                priority
                loading="eager"
                src={image}
                alt={project.name}
                className="w-full h-auto border border-foreground"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
);
ClientProjectPage.displayName = "ClientProjectPage";

export default ClientProjectPage;
