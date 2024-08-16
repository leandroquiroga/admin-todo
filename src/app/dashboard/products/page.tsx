import { ProductCard } from "@/components";

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
      <ProductCard />
    </div>
  );
}
