const mockUrls = [
  "https://utfs.io/f/45e48797-c5d5-4a6f-afd9-b5b0161809a7-1xf4e9.JPG",
  "https://utfs.io/f/4c1b1854-f7a1-4ec7-9232-f0a105de80a0-63jlzi.jpeg",
  "https://utfs.io/f/13de7535-f496-4769-bea1-4a77083df37a-1fqont.jpeg",
  "https://utfs.io/f/8e141e42-fd8b-444f-8e9f-eef7ede8638e-1xf4d6.JPG",
  "https://utfs.io/f/5c4bd7cf-69fa-463a-978d-6742a7808116-pi1muk.jpeg",
  "https://utfs.io/f/3a096c0f-eb66-4ab7-b175-57f9e2bb67bd-1gtqtb.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="mock image" />
          </div>
        ))}
      </div>
    </main>
  );
}
