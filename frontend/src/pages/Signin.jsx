import { BlackButton } from "../components/BlackButton";
import { BottomWarning } from "../components/BottomWarning";
import Card from "../components/Card";
import { Heading } from "../components/Heading";
import InputField from "../components/InputField";
import ProjectTitle from "../components/ProjectTitle";
import { SubHeading } from "../components/SubHeading";

export default function Signin() {
  return (
    <div className=" bg-yellow-300 h-screen flex flex-col items-center justify-center">
      <ProjectTitle />
      <Card>
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputField
          type={"text"}
          label={"Username or Email"}
          placeholder="JonDoe123/example@one.com"
        />
        <InputField
          type={"Password"}
          label={"Password"}
          placeholder={"Password@1234"}
        />
        <BlackButton label={"Sign in "} />
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
        />
      </Card>
    </div>
  );
}
