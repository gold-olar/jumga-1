import { toast } from "react-toastify";
import { currencyMap } from "./constants";

/**
 * Function to toast API response messages
 * @param {response object} response
 */
export const notifyUser = (response) => {
  response.status
    ? toast.success(response.message ? response.message : "Success")
    : toast.error(response.message);
};

export const getCurrency = (country) => {
  return currencyMap[country];
};
