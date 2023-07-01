"use client";

import { use } from "bcrypt/promises";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
