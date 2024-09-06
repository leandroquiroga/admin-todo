import { cookies } from "next/headers";

import { TabBar } from "@/components";

export const metadata = {
  title: "Cookies",
  description: "Cookies page",
};

export default function CookiesPage() {
  const tabOptiopns = [1, 2, 3, 4, 5];
  const cookiesStore = cookies();
  const currentTab = cookiesStore.get("currentTab")?.value ?? "1";

  return (
    <div className="grid grid-rows-1 sm:grid-rows-2 gap-3">
      <div className=" flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar tabOptions={tabOptiopns} currentTab={+currentTab} />
      </div>
    </div>
  );
}
