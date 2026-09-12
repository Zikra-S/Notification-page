import avatarMark from "./assets/images/avatar-mark-webber.webp";
import avatarAngela from "./assets/images/avatar-angela-gray.webp";
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp";
import avatarRizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberly from "./assets/images/avatar-kimberly-smith.webp";
import avatarNathan from "./assets/images/avatar-nathan-peterson.webp";
import avatarAnna from "./assets/images/avatar-anna-kim.webp";
import imageChess from "./assets/images/image-chess.webp";

 export type Notification = {
  id: number;
  user: string;
  avatar: string;
  msg: string;
  link?: string; 
  time: string;
  unread: boolean;
  message?: string; 
  thumbnail?: string; 
};

export const initialNotifications: Notification[] = [
  {
    id: 1,
    user: "Mark Webber",
    avatar: avatarMark,
    msg: "reacted to your recent post",
    link: "My first tournament today!",
    time: "1m ago",
    unread: true,
  },
  {
    id: 2,
    user: "Angela Gray",
    avatar: avatarAngela,
    msg: "followed you",
    time: "5m ago",
    unread: true,
  },
  {
    id: 3,
    user: "Jacob Thompson",
    avatar: avatarJacob,
    msg: "has joined your group",
    link: "Chess Club",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 4,
    user: "Rizky Hasanuddin",
    avatar: avatarRizky,
    msg: "sent you a private message",
    time: "5 days ago",
    unread: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    user: "Kimberly Smith",
    avatar: avatarKimberly,
    msg: "commented on your picture",
    time: "1 week ago",
    unread: false,
    thumbnail: imageChess,
  },
  {
    id: 6,
    user: "Nathan Peterson",
    avatar: avatarNathan,
    msg: "reacted to your recent post",
    link: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    unread: false,
  },
  {
    id: 7,
    user: "Anna Kim",
    avatar: avatarAnna,
    msg: "left the group",
    link: "Chess Club",
    time: "2 weeks ago",
    unread: false,
  },
];