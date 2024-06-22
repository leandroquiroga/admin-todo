import React from "react";
import { ItemProps } from "../interfaces";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

export const TodoItem = ({ item }: ItemProps) => {
  return (
    <div className={item?.done ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div
          className={`
          flex p-2 rounded-ms cursor-pointer
          horver:bg-opacity-60
        `}>
          {item?.done ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div>{item?.description}</div>
      </div>
    </div>
  );
};
