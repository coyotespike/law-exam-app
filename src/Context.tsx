import React, { ReactChild, ReactChildren } from "react";

// import { useQuery } from 'react-apollo';
// import GET_USER from "./getUser.graphql";

const cardInfo = [
  { category: "TF", prompt: "Learned Hand" },
  {
    category: "MultipleChoice",
    prompt: "which one is right",
    options: ["yes", "no", "maybe"],
  },
  { category: "OpenAnswer", prompt: "meaning of life" },
];

const RootContext = React.createContext({});

interface ContextProps {
  children: ReactChild | ReactChildren;
}

const Context = ({ children }: ContextProps) => {
  // const { loading, data } = useQuery(GET_USER);
  // const user = loading || !data.authUser ? null : data.user;
  return (
    <RootContext.Provider value={cardInfo}>{children}</RootContext.Provider>
  );
};

export const Consumer = RootContext.Consumer;
export default Context;
