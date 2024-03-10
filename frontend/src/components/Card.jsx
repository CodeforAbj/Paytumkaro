export default function Card({ children }) {
  return (
    <div className="flex flex-col justify-center">
      {/*Vertcal Aligner ^ */}
      <div className=" rounded-lg border-4 border-black border-solid bg-white w-80 text-center p-2 h-max px-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
        {children}
      </div>
    </div>
  );
}
