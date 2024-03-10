export default function SideBarUnit({ icon, label, value }) {
  return (
    <>
      <div className="flex items-center space-x-4  border-b-2 border-stone-500 mt-2 mb-2">
        {/* Icon */}
        <div className="text-4xl text-yellow-300">
          {icon} {/* Assuming icon is a React component */}
        </div>
        {/* Label and Subline */}
        <div className=" text-left">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-sm text-gray-500">{value}</div>
        </div>
      </div>
    </>
  );
}
