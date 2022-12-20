import { Channel } from "./interface/channel";
import { Message } from "./interface/message";
import { User } from "./interface/user";

const users: User[] = [
  {
    id: "738be0a4-9b48-43f3-aaf9-205fc3b98a20",
    name: "Hanife",
    discriminator: "5220",
    avatar: "",
  },
  {
    id: "1b6c576a-3d89-46f2-9b3a-51ce91326241",
    name: "Elif",
    discriminator: "0002",
    avatar: "",
  },
  {
    id: "a814d5f4-f50e-4167-bc08-e3481efee16e",
    name: "Eda",
    discriminator: "0003",
    avatar: "",
  },
];

const currentUser: User = users[0];

const channels: Channel[] = [
  {
    id: "4db5167b-a661-4f3f-83e2-b9e85319339d",
    type: 1,
    recipients: [users[1]],
    createdAt: Date.now(),
  },
  {
    id: "8a54e4bc-5f0b-4edf-b63a-5065d61b7d60",
    type: 1,
    recipients: [users[2]],
    createdAt: Date.now(),
  },
  {
    id: "53700885-51de-40dd-8e59-7e0fd343ce53",
    type: 2,
    name: "General",
    icon: "",
    createdAt: Date.now(),
    recipients: [...users],
  },
];

const messages: Message[] = [
  {
    id: "1",
    content: "Selam",
    author: users[0],
    channel_id: "4db5167b-a661-4f3f-83e2-b9e85319339d",
    created_at: Date.now() - 1000,
    edited_at: Date.now() - 1000,
  },
  {
    id: "2",
    content: "Merhaba",
    author: users[1],
    channel_id: "4db5167b-a661-4f3f-83e2-b9e85319339d",
    created_at: Date.now() - 900,
    edited_at: Date.now() - 900,
  },
  {
    id: "3",
    content: "Selam",
    author: users[0],
    channel_id: "8a54e4bc-5f0b-4edf-b63a-5065d61b7d60",
    created_at: Date.now() - 1000,
    edited_at: Date.now() - 1000,
  },
  {
    id: "4",
    content: "Selam",
    author: users[2],
    channel_id: "8a54e4bc-5f0b-4edf-b63a-5065d61b7d60",
    created_at: Date.now() - 900,
    edited_at: Date.now() - 900,
  },
  {
    id: "5",
    content: "Merhaba",
    author: users[0],
    channel_id: "53700885-51de-40dd-8e59-7e0fd343ce53",
    created_at: Date.now() - 1000,
    edited_at: Date.now() - 1000,
  },
  {
    id: "6",
    content: "Heyy",
    author: users[1],
    channel_id: "53700885-51de-40dd-8e59-7se0fd343ce53",
    created_at: Date.now() - 900,
    edited_at: Date.now() - 900,
  },
  {
    id: "7",
    content: "Nasılsınız",
    author: users[2],
    channel_id: "53700885-51de-40dd-8e59-7e0fd343ce53",
    created_at: Date.now() - 800,
    edited_at: Date.now() - 800,
  },
];
export { currentUser, users, channels, messages };
