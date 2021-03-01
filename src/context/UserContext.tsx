import { createContext } from "react";

const UserContext = createContext([
  {
    name: "Austin",
    email: "austin.vuong00@gmail.com"
  },
  () => {}
]);

export default UserContext;
