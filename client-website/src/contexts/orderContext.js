import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchOrder } from "../util/operations/order";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDER_SUCCESSFULLY":
      return { order: action.payload };
    case "UPDATE_ORDER_DATA":
      return { order: { ...state.order, ...action.payload } };
    default:
      return state;
  }
};

const fetchOrderDetails = (dispatch) => async (orderID) => {
  const { status, data, message } = await fetchOrder(orderID);

  !status && notifyUser({ status, message });

  data && (await dispatch({ type: "FETCH_ORDER_SUCCESSFULLY", payload: data }));
};

const updateOrderdata = (dispatch) => async (data) => {
  await dispatch({ type: "UPDATE_ORDER_DATA", payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchOrderDetails,
    updateOrderdata,
  },
  {
    order: {},
  }
);
