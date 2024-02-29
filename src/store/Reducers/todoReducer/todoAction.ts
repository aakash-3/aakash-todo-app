import { modeType } from "types/todoTypes";
import { CHANGE_MODE } from "./toConstant";

const changeMode = (payload: modeType) => {
  return {
    type: CHANGE_MODE,
    payload,
  };
};

export { changeMode };
