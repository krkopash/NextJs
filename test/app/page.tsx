import Image from "next/image";
import { revalidatePath } from "next/cache";
import { getCurrentUser, updateUser } from "./db";
import { AvatarUploader } from "@/components/avatar-uploader";

export default async function Home() {
  const user = await getCurrentUser();

  async function saveAvatar(url: string) {
    "use server";
    await updateUser({ avatar: url });
    revalidatePath("/");
  }

  return (
    <main className="p-24 flex flex-col justify-center items-center">
      <h1 className="my-12">Welcome back, {user.name}</h1>
      <div className="flex flex-col items-center space-y-4">
        {user.avatar ? (
          <Image src={user.avatar} width={300} height={300}  className="rounded-full" alt="Your avatar"/>
        ) : (
          <div className="w-72 h-72 rounded-full" />
        )}
        <div className="flex items-center justify-center">
          <AvatarUploader onUploadSuccess={saveAvatar} />
        </div>
      </div>
    </main>
  );
}
