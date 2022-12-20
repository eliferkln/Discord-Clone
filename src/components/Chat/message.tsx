import React from "react";
import { Message as Msg } from "../../interface/message";
import { routes_ } from "../../routes";
import { FaRegUserCircle } from "react-icons/fa";
export default function Message({ msg }: { msg: Msg }) {
  return (
    <div className="flex hover:bg-gray-700 h-16 items-center">
      <FaRegUserCircle className="h-10 w-10 rounded-full mx-2 text-white" />
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-xl text-gray-300">{msg.author.name}</span>
          <span className="text-xs mx-2 text-gray-400">
            {new Date(msg.created_at * 1000).toLocaleTimeString()}
          </span>
        </div>
        <span className="text-gray-300">{msg.content}</span>
      </div>
    </div>
  );
}
