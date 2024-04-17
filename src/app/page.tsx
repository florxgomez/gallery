import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// we want to make this page dynamic because we want to make sure every time there's a change in our db, the page's content is updated
export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className=" flex w-48 flex-col">
          <img src={image.url} alt="mock image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

// sever component
export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Please sign in above in order to proceed
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
