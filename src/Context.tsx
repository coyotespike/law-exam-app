import React, { ReactChild, ReactChildren, ReactNode } from "react";

// import { useQuery } from 'react-apollo';
// import GET_USER from "./getUser.graphql";

type cardInfoType = { category: string; prompt: string; options?: string[] };
const cardInfo = [
  { category: "TF", prompt: "Learned Hand" },
  {
    category: "MultipleChoice",
    prompt: "which one is right",
    options: ["yes", "no", "maybe"],
  },
  { category: "OpenAnswer", prompt: "meaning of life" },
] as cardInfoType[];

export const RootContext = React.createContext(cardInfo);

interface ContextProps {
  children: ReactChild | ReactChildren | ReactNode;
}

const Context = ({ children }: ContextProps) => {
  // const { loading, data } = useQuery(GET_USER);
  // const user = loading || !data.authUser ? null : data.user;
  return (
    // <RootContext.Provider value={{ questions: cardInfo }}>
    <RootContext.Provider value={cardInfo}>{children}</RootContext.Provider>
  );
};

export default Context;
