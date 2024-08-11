import React from "react";
import { deleteCompletedTodo } from "../actions/actions";

interface PropsModal {
  setShowModal: (value: boolean) => void;
}

export const Modal = ({ setShowModal }: PropsModal) => {
  const handleDeleteTodo = () => {
    deleteCompletedTodo();
    setShowModal(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-2xl font-bold">Delete Completed Todos</h2>
        <p>Are you sure you want to delete all completed todos?</p>
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-700 transition-all m-1">
            Cancel
          </button>
          <button
            onClick={handleDeleteTodo}
            className="text-white bg-sky-500 px-3 py-1 rounded-lg hover:bg-sky-700 transition-all m-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
