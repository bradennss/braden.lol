import Link from "next/link";
import { memo } from "react";
import { MediaDisplay } from "~/components/media-display";
import { ClientProject, clientProjects } from "~/data";

export const ClientProjectCard = memo<{ project: ClientProject }>(
  ({ project }) => {
    const [firstMedia] = project.media;

    return (
      <Link prefetch href={`/work/${project.id}`} className="group">
        <MediaDisplay
          type={firstMedia.type}
          src={firstMedia.src}
          alt={firstMedia.alt ?? project.name}
        />
      </Link>
    );
  }
);
ClientProjectCard.displayName = "ClientProjectCard";

const HomePage = memo(async () => {
  return (
    <main className="w-full max-w-2xl mx-auto px-4 pt-8 pb-8 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold lowercase">Work</h1>
      <div className="grid grid-cols-1 gap-4">
        {clientProjects.map((project) => (
          <ClientProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
});
HomePage.displayName = "HomePage";

export default HomePage;
