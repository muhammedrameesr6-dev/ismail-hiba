import React, { useState, useEffect } from "react";
import { WEDDING_DATA } from "../config/weddingData";

export function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(WEDDING_DATA.wishesStorageKey);
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch {
        setWishes(WEDDING_DATA.initialWishes);
      }
    } else {
      setWishes(WEDDING_DATA.initialWishes);
      localStorage.setItem(
        WEDDING_DATA.wishesStorageKey,
        JSON.stringify(WEDDING_DATA.initialWishes)
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    setIsSubmitting(true);
    let updated;
    if (editingId) {
      updated = wishes.map((item) =>
        item.id === editingId
          ? { ...item, guest_name: guestName.trim(), message: message.trim() }
          : item
      );
      setEditingId(null);
    } else {
      const newWish = {
        id: "wish_" + Date.now(),
        guest_name: guestName.trim(),
        message: message.trim(),
      };
      updated = [newWish, ...wishes];
    }

    setWishes(updated);
    localStorage.setItem(
      WEDDING_DATA.wishesStorageKey,
      JSON.stringify(updated)
    );
    setGuestName("");
    setMessage("");
    setIsSubmitting(false);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this wish?")) {
      const updated = wishes.filter((item) => item.id !== id);
      setWishes(updated);
      localStorage.setItem(
        WEDDING_DATA.wishesStorageKey,
        JSON.stringify(updated)
      );
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setGuestName(item.guest_name);
    setMessage(item.message);
  };

  const handleCancel = () => {
    setEditingId(null);
    setGuestName("");
    setMessage("");
  };

  return (
    <div className="mx-auto w-full max-w-md px-2">
      <form
        onSubmit={handleSubmit}
        className="space-y-3.5 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/80 p-5 shadow-2xl"
      >
        <input
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          maxLength={60}
          placeholder="Your name"
          required
          className="w-full border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          placeholder={`Write your wishes & du'a for ${WEDDING_DATA.coupleTitle}`}
          required
          className="w-full resize-none border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
        />
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#fdfbf7] transition hover:bg-[#072920] disabled:opacity-60 shadow-md cursor-pointer"
          >
            {editingId ? "UPDATE WISH" : "SEND WISH"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-full border border-[#dfba73]/50 px-4 text-xs tracking-widest text-[#dfba73] cursor-pointer"
            >
              CANCEL
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 space-y-3.5">
        {wishes.map((item) => (
          <div
            key={item.id}
            className="emerald-card rounded-sm p-4 text-[#fdfbf7] shadow-lg text-left"
          >
            <p className="whitespace-pre-wrap text-base sm:text-lg leading-relaxed font-serif text-[#fdfbf7]/90">
              {item.message}
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-[#dfba73]/20 pt-2">
              <span className="font-['Cinzel'] text-xs tracking-[0.2em] text-[#dfba73] font-medium">
                — {item.guest_name}
              </span>
              <div className="flex gap-3 text-xs tracking-widest text-[#dfba73]/80">
                <button
                  type="button"
                  onClick={() => handleEdit(item)}
                  className="hover:underline cursor-pointer"
                >
                  EDIT
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="hover:underline cursor-pointer"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
