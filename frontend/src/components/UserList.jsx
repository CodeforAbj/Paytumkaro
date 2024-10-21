import { useState } from "react";
import { BlackButton } from "./BlackButton";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  let bulkRequestconfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:9000/app/v1/user/bulk",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNGUzNDZlZmFhNjRkNDg3ZDNkMTgiLCJpYXQiOjE3MTAwNjMzMTZ9.cfq3h07Dqc8rYJ8mwZlz10eMdMG9xG21X4US15ZK3Eo",
    },
  };

  axios
    .request(bulkRequestconfig)
    .then((response) => {
      setUsers(response.data.users);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div className=" overflow-y-scroll h-1/2 mt-3">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {
  return (
    <div className="flex justify-between ">
      <div className="flex">
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center items-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <BlackButton label={"Send Money"} />
      </div>
    </div>
  );
}
