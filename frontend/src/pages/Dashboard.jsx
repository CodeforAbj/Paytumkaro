import BaseBackground from "../components/BaseBackground";
import QRCode from "react-qr-code";
import InputField from "../components/InputField";
import UserList from "../components/UserList";
import { BlackButton } from "../components/BlackButton";
import SideBarUnit from "../components/SideBarUnit";
import {
  MdQrCode,
  MdMailOutline,
  MdPhoneAndroid,
  MdCurrencyRupee,
} from "react-icons/md";

export default function Dashboard() {
  const userFirstname = "Bhola";
  return (
    <BaseBackground>
      {/*Vertcal Aligner ^ */}
      <div className=" w-11/12 h-11/12 rounded-lg border-4 border-black border-solid bg-white text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
        {/*// ---- Name and logo and logout link ---- //*/}
        <div
          id="headerbar"
          className=" w-full bg-black  text-white font-bold text-2xl flex justify-between pt-2 pb-2 pl-4 pr-4"
        >
          <span className="">Hello {userFirstname} ! </span>
          {/* // -------------- logo title ------------- // */}
          <span>
            <span className=" text-2xl mb-5 font-extrabold">
              Pay
              <span className=" text-yellow-300 bg-black">tum</span>
              Karo
            </span>
          </span>
          <span>
            <button>Logout</button>
          </span>
        </div>

        <div id="container" className="flex justify-start p-2 pl-4 pr-4 ">
          {/* // ====================================================== //
             // ============== Aside User details panel ============== //
            // ====================================================== // */}
          <div
            id="asideProfile"
            className=" w-fit h-max flex flex-col text-lg font-semibold m-2 border-slate-500 border-r-2 pr-2"
          >
            <div id="NameTitle" className="flex justify-start">
              <div className=" rounded-full h-12 w-12 bg-yellow-300 flex justify-center items-center m-3">
                AS {/* initials of user */}
              </div>
              <div className="m-3 ml-1">
                <div className=" font-semibold text-base">FirstName</div>
                <div className=" font-semibold text-base">LastName</div>
              </div>
            </div>
            <SideBarUnit
              icon={<MdCurrencyRupee />}
              label="Balance"
              value={"12,302.00"}
            />
            <div className="flex justify-center">
              <QRCode
                title="Upi QR"
                value={"Google is dumb"}
                bgColor={"#FFFFFF"}
                fgColor={"#000000"}
                size={150}
              />
            </div>
            <SideBarUnit
              icon={<MdQrCode />}
              label="Upi Id"
              value={"Blablabla@bla.bla"}
            />
            <SideBarUnit
              icon={<MdMailOutline />}
              label="Email"
              value={"abracadabra@bla.bla"}
            />
            <SideBarUnit
              icon={<MdPhoneAndroid />}
              label="Phone no."
              value={"+912342390875"}
            />{" "}
            <div>
              <BlackButton label={"Change Details"} />
            </div>
          </div>
          {/* // ====================================================== //
         // ====================== User List ===================== //
        // ====================================================== // */}

          <div id="usersList" className="m-2 w-full">
            <InputField label={"Users"} placeholder="Search..." type="text" />
            <UserList></UserList>
          </div>
        </div>
      </div>
    </BaseBackground>
  );
}
