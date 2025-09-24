import Link from "next/link";
import { memo } from "react";
import { ClientProject, clientProjects } from "~/data";
import { ImageCard, VideoCard } from "./client";

export const ClientProjectCard = memo<{ project: ClientProject }>(
  ({ project }) => {
    const [firstVideo] = project.videos;
    const [firstImage] = project.images;

    return (
      <Link prefetch href={`/work/${project.id}`} className="group">
        {firstVideo ? (
          <VideoCard src={firstVideo} />
        ) : firstImage ? (
          <ImageCard src={firstImage} alt={project.name} />
        ) : null}
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
