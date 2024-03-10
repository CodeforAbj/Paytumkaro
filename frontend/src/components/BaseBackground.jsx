export default function BaseBackground({ children }) {
  return (
    <div className="bg-yellow-300 h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
