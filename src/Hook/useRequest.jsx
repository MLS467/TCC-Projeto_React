import { useContext } from "react";
import { ChildRequestContext } from "../Context/Service/ChildRequestContext";

const useRequest = () => {
  const context = useContext(ChildRequestContext);

  return context;
};

export default useRequest;
