"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

interface TabsProps {
  currentTab?: number;
  tabOptions?: number[];
}

const RANGETAB = [1, 2, 3, 4, 5];

export const TabBar = ({
  tabOptions = RANGETAB,
  currentTab = 1,
}: TabsProps) => {
  // Esta funcion valida que el currentTab sea un numero valido ya que puede ser manipulado desde las cookies,
  // en caso de que se manipule se asigna el valor 1 por default y de esta manera nuestro tab siempre va a ser selecciodo
  const findAcceptTab = (num: number) =>
    RANGETAB.find((tab) => tab === num) ?? 1;

  const currentNumberTab = findAcceptTab(currentTab);
  const [selected, setSelected] = useState(currentNumberTab);

  const onTabSelect = (tab: number) => {
    setSelected(tab);
    // Seteamos las cookies del lado del cliente
    setCookie("currentTab", tab.toString());
  };

  return (
    <div
      className={`flex ${
        "flex-rows-" + tabOptions.length
      } items-center justify-center`}>
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            onChange={() => {}}
            type="radio"
            id={tab.toString()}
            checked={tab === selected}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelect(tab)}
            className="transition-all block cursor-pointer select-none w-16 rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
