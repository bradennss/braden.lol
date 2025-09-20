import { memo } from "react";
import { Prose } from "~/components/prose";

export const dynamic = "force-dynamic";

const HomePage = memo(async () => {
  return (
    <main>
      <Prose className="w-full max-w-2xl mr-auto px-4 pt-4 pb-16">
        <h2>Title</h2>
        <p>Subtitle</p>
      </Prose>
    </main>
  );
});
HomePage.displayName = "HomePage";

export default HomePage;
