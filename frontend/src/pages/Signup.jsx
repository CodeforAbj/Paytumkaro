import Card from "../components/Card";
import { Heading } from "../components/Heading";
import InputField from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import { BlackButton } from "../components/BlackButton";
import { BottomWarning } from "../components/BottomWarning";
import ProjectTitle from "../components/ProjectTitle";
import BaseBackground from "../components/BaseBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [upiId, setupiId] = useState("");
  const [mobno, setMobno] = useState("");

  const navigate = useNavigate();

  return (
    <BaseBackground>
      <ProjectTitle />
      <Card>
        <Heading label={"Signup"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        {showError && <div className=" text-red-500">{errorMsg}</div>}

        <div className="flex">
          <div className="border-r-2 pr-4 mr-4">
            <InputField
              type={"text"}
              label={"Username"}
              placeholder="JonDoe123/example@one.com"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputField
              type={"Password"}
              label={"Password"}
              placeholder={"Password@1234"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputField
              label={"UPI id"}
              placeholder="example@two"
              type="text"
              onChange={(e) => {
                setupiId(e.target.value);
              }}
            />
          </div>

          <div>
            <InputField
              label={"Firstname"}
              placeholder="Jon"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <InputField
              label={"Lastname"}
              placeholder="Doe"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <InputField
              label={"Email"}
              placeholder="example@one.com"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputField
              label={"Phone no."}
              placeholder="0123456789"
              type="tel"
              onChange={(e) => {
                setMobno(e.target.value);
              }}
            />
          </div>
        </div>
        {/*Later enforce it to number only for Phone no and other validation*/}
        <BlackButton
          label="Sign up"
          onClick={async () => {
            const requestData = {
              username: username,
              password: password,
              firstName: firstName,
              lastName: lastName,
              upiId: upiId,
              mobNo: mobno,
              email: email,
            };

            const jsonData = JSON.stringify(requestData);

            try {
              const response = await axios.post(
                "http://localhost:9000/app/v1/user/signup",
                jsonData
              );
              if (response.status === 200) {
                console.log("Success");
              } else {
                setErrorMsg(response.message);
                setShowError(true);
              }
            } catch (error) {
              // Handle error
              console.error("Error occurred:", error);
              setErrorMsg("An error occurred while processing your request.");
              setShowError(true);
            }
          }}
        ></BlackButton>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        ></BottomWarning>
      </Card>
    </BaseBackground>
  );
}
