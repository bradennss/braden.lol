import { memo } from "react";

const NotFoundPage = memo(async () => {
  return (
    <main>
      <div className="w-full max-w-2xl mr-auto px-4 pt-8 pb-8 flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Not found</h1>
      </div>
    </main>
  );
});
NotFoundPage.displayName = "NotFoundPage";

export default NotFoundPage;
