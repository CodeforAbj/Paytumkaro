export default function InputField({ label, placeholder, type }) {
  return (
    <div>
      <div className="text-sm font-bold text-left py-2">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className=" w-full px-2 py-1 border rounded border-slate-300"
      />
    </div>
  );
}
