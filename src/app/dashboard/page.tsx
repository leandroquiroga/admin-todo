import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("api/auth/signin");
  }

  const { email, image, name } = session.user!;

  return (
    <div>
      <div className="grid gap-6 grid-cols-1">
        <>
          <WidgetItem email={email!} image={image!} name={name!} />
          <div>{JSON.stringify(session.user)}</div>
        </>
      </div>
    </div>
  );
}
