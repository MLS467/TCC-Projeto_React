import { useContext } from "react";
import { CrudContext } from "../Context/crud/crud";

const useCrud = () => {
  const context = useContext(CrudContext);

  if (!context) {
    throw new Error("useCrud must be used within a CrudProvider");
  }

  return context;
};

export default useCrud;
