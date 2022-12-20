import { useMemo } from "react";
import { Channel } from "../../interface/channel";
import { User } from "../../interface/user";
import { routes_ } from "../../routes";
import { FaRegUserCircle } from "react-icons/fa";

export default function MemberBar({ channel }: { channel: Channel }) {
  return (
    <div className="flex flex-col bg-gray-700 h-full w-1/6 self-end">
      <span className="font-bold text-gray-400 text-sm mx-6 my-2">
        MEMBERS—{channel.recipients.length}
      </span>
      {channel.recipients.map((user) => (
        <Member user={user} />
      ))}
    </div>
  );
}

function Member({ user }: { user: User }) {
  return (
    <div className="flex items-center mx-6 my-2 hover:bg-gray-600 rounded p-1 hover:cursor-pointer">
      <FaRegUserCircle className="h-10 w-10 rounded-full mx-2 text-white" />
      <span className="text-white text-lg">{user.name}</span>
    </div>
  );
}
