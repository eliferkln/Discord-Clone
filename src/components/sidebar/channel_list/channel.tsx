import React from "react";
import { Channel as ChannelOBJ } from "../../../interface/channel";
import { Link } from "react-router-dom";
import { routes_ } from "../../../routes";
import { FaRegUserCircle } from "react-icons/fa";

export default function Channel({ channel }: { channel: ChannelOBJ }) {
  return (
    <Link to={`/channels/about/${channel.id}`}>
      <div className="flex h-12 rounded min-w-11/12 items-center hover:cursor-pointer hover:bg-gray-600">
        <FaRegUserCircle className="h-10 w-10 rounded-full mx-2 text-white" />
        {channel.type === 1 ? (
          <p className="text-gray-400">{channel.recipients[0].name}</p>
        ) : (
          <div className="flex flex-col justify-around">
            <span className="text-gray-400">{channel.name}</span>
            <span className="text-gray-400 text-xs">
              {channel.recipients.length} Members
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
