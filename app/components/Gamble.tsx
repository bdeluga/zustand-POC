import { historyStore, userStore } from "@/useStore";

const Gamble = () => {
  const { user, gamble } = userStore();

  const { addHistory } = historyStore();

  const play = () => {
    const balance = Math.random() > 0.15 ? -1000 : 1000;
    gamble(balance);
    addHistory(balance);
  };

  return (
    <div className="flex flex-col">
      <div className="flex text-4xl gap-4">
        <span>Twoje obecne saldo: </span>
        <span
          className={`${
            user && user?.balance > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {user?.balance} $
        </span>
      </div>

      <button
        className="border p-2 mt-4 rounded-md hover:bg-white hover:text-black"
        onClick={play}
      >
        Zagraj !
      </button>
    </div>
  );
};

export default Gamble;
<span>text</span>;
