import Card from "../components/Card";
import { Heading } from "../components/Heading";
import InputField from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import { BlackButton } from "../components/BlackButton";
import { BottomWarning } from "../components/BottomWarning";
import ProjectTitle from "../components/ProjectTitle";

export default function Signup() {
  return (
    <div className="bg-yellow-300 h-screen flex flex-col items-center justify-center">
      <ProjectTitle />
      <Card>
        <Heading label={"Signup"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputField label={"Firstname"} placeholder="Jon" type="text" />
        <InputField label={"Lastname"} placeholder="Doe" type="text" />
        <InputField
          label={"Email"}
          placeholder="example@one.com"
          type="email"
        />
        <InputField label={"Phone no."} placeholder="0123456789" type="tel" />
        <InputField label={"UPI id"} placeholder="example@two" type="text" />
        {/*Later enforce it to number only*/}
        <BlackButton label="Sign up"></BlackButton>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        ></BottomWarning>
      </Card>
    </div>
  );
}
