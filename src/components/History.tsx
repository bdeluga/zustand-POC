"use client";
import { historyStore } from "@/app/useStore";

const History = () => {
  const { history } = historyStore();

  return (
    <div className="flex flex-col h-96 overflow-y-auto mb-10 text-center">
      {history.length > 0
        ? history.map((el) => (
            <button
              className={`border p-2 rounded-md my-2 font-mono ${
                el.value < 0 ? "text-red-600" : "text-green-600"
              }`}
              key={el.id}
            >
              {el.value}
            </button>
          ))
        : "Brak historii"}
    </div>
  );
};

export default History;
