import React from "react";

interface CompeletedTodosProps {
  id: number;
  todo: string;
  dateTime: string;
  deleteTodo: (id: number) => void;
}

const CompletedTodoList = (props: CompeletedTodosProps) => {
  return (
    <li className="border-gray-400  flex flex-row">
      <div className="select-none bg-white flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium">{props.todo}</div>
          <div className="font-medium">{props.dateTime}</div>
        </div>
        <svg
            onClick={() => props.deleteTodo(props.id)}
            className="w-8 h-8 hover:bg-red-500"
            fill="red"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
      </div>
    </li>
  );
};

export default CompletedTodoList;
