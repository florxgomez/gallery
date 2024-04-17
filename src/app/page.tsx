import { db } from "~/server/db";

// we want to make this page dynamic because we want to make sure every time there's a change in our db, the page's content is updated
export const dynamic = "force-dynamic";

// sever component
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className=" flex w-48 flex-col">
            <img src={image.url} alt="mock image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
