import { SignedIn, SignedOut } from "@clerk/nextjs";
import UploadImages from "./_components/upload-images";
import Images from "./_components/images";

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Please sign in above in order to proceed
        </div>
      </SignedOut>
      <SignedIn>
        <UploadImages />
        <Images />
      </SignedIn>
    </main>
  );
}
