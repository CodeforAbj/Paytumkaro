export function BlackButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" w-full text-white font-semibold bg-black hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4"
    >
      {label}
    </button>
  );
}
