import { WidgetItemProps } from "@/utils/features/components/interfaces";
import Image from "next/image";

export const WidgetItem = (props: WidgetItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-black text-center">Hola {props.name}</h1>
      <Image
        className="rounded-full my-4"
        src={
          props.image ||
          "https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
        }
        alt={"Profile Image"}
        width={200}
        height={200}
      />
      <span className="text-xl">User: {props.email}</span>
    </div>
  );
};
