import { createContext, useState } from "react";

const UserContext = createContext({
    name: null
});

export default UserContext;