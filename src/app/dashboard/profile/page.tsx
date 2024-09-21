"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("api/auth/signin");
  }
  return (
    <div className="flex flex-col">
      <h1>Hello {session?.user?.name}</h1>
      <p>This is your profile page</p>
      <span>Email: {session?.user?.email}</span>
      <span>Roles: {session?.user?.role?.join(", ")}</span>

      <Image
        src={
          session?.user?.image! ||
          "https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
        }
        alt={session?.user?.name!}
        width={100}
        height={100}
      />
    </div>
  );
}
