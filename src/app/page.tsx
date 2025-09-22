import assert from "assert";
import Link from "next/link";
import { memo } from "react";
import { ImageCard } from "~/components/image-card";
import { ClientProject, clientProjects } from "~/data";

export const dynamic = "force-dynamic";

export const ClientProjectCard = memo<{ project: ClientProject }>(
  ({ project }) => {
    const [firstImage] = project.images;
    assert(firstImage, `missing first image for project ${project.name}`);

    return (
      <Link prefetch href={`/work/${project.id}`} className="group">
        <ImageCard
          src={firstImage}
          alt={project.name}
          priority
          loading="eager"
          unoptimized
          draggable={false}
          className="w-full aspect-[1440/900] border border-foreground select-none"
        />
      </Link>
    );
  }
);
ClientProjectCard.displayName = "ClientProjectCard";

const HomePage = memo(async () => {
  return (
    <main>
      <div className="w-full max-w-2xl mr-auto px-4 pt-8 pb-8 flex flex-col gap-8">
        <h1 className="text-2xl font-semibold lowercase">Work</h1>
        <div className="grid grid-cols-1 gap-4">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
});
HomePage.displayName = "HomePage";

export default HomePage;
