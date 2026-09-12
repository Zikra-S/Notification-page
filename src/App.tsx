import { useState } from "react";
import { initialNotifications } from "./data";

export default function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  function markOneAsRead(id: number) {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  }

  function markAllAsRead() {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  }

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="min-h-screen bg-[hsl(210,60%,98%)] flex items-start sm:items-center justify-center p-0 sm:p-6">
      <div className="bg-white w-full sm:max-w-[600px] sm:rounded-2xl p-5 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg sm:text-xl font-extrabold text-[hsl(224,21%,14%)]">Notifications</h1>
            <span className="bg-[hsl(219,85%,26%)] text-white text-sm font-extrabold w-6 h-6 flex items-center justify-center rounded-md">
              {unreadCount}
            </span>
          </div>
          <button onClick={markAllAsRead} className="text-sm font-medium text-[hsl(219,12%,42%)] hover:text-[hsl(219,85%,26%)] transition-colors">
            Mark all as read
          </button>
        </div>

        <ul className="flex flex-col gap-0.5">
          {notifications.map((n) => (
            <li
              key={n.id}
              onClick={() => markOneAsRead(n.id)}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer ${n.unread ? "bg-[hsl(210,60%,98%)]" : "bg-white"}`}>
              <img src={n.avatar} alt={n.user} className="w-10 h-10 rounded-full flex-shrink-0 mt-0.5" />

              <div className="flex-1 min-w-0">
                <p className="text-[15px] leading-snug">
                  <span className="font-extrabold text-[hsl(224,21%,14%)]">{n.user}</span> <span className="text-[hsl(219,12%,42%)]">{n.msg}</span>{" "}
                  {n.link && <span className="font-extrabold text-[hsl(219,85%,26%)] hover:opacity-80 cursor-pointer">{n.link}</span>}
                  {n.unread && <span className="inline-block w-2 h-2 rounded-full bg-[hsl(1,90%,64%)] ml-2 align-middle" />}
                </p>
                <span className="text-sm text-[hsl(219,14%,63%)]">{n.time}</span>

                {n.message && (
                  <div className="mt-3 text-sm text-[hsl(219,12%,42%)] border border-[hsl(205,33%,90%)] rounded-lg p-3 leading-relaxed hover:bg-[hsl(210,60%,98%)] cursor-pointer">
                    {n.message}
                  </div>
                )}
              </div>

              {n.thumbnail && <img src={n.thumbnail} alt="" className="w-10 h-10 rounded-lg flex-shrink-0 mt-0.5" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
