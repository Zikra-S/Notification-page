import { useState } from "react";

const initialNotifications = [
  { id: 1, user: "Mark", msg: "reacted to your post", unread: true },
  { id: 2, user: "Angela", msg: "followed you", unread: true },
  { id: 3, user: "Jacob", msg: "commented on your photo", unread: false },
  { id: 4, user: "Rizky Hasanuddin", msg: "sent you a private message", type: "message", time: "5 days ago", unread: false, message: "Hello, thanks for setting up the Chess Club!" },
  { id: 5, user: "Kimberly Smith", msg: "commented on your picture", type: "picture", time: "1 week ago", unread: false },
  { id: 6, user: "Nathan Peterson", msg: "reacted to your recent post", type: "reaction", time: "2 weeks ago", unread: false },
];

export default function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  function markOneAsRead(id) {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  }

  function markAllAsRead() {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  }

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div>
      <ul>
      <h2>Notifications ({unreadCount})</h2>
      <button onClick={markAllAsRead}>Mark all as read</button>
        {notifications.map((n) => (
          <li key={n.id} onClick={() => markOneAsRead(n.id)}>
            <strong>{n.user}</strong> {n.msg} — {n.unread ? " unread" : " read"}
          </li>
        ))}
      </ul>
    </div>
  );
}