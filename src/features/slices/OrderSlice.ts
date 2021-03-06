import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

// import { AsyncOrders } from "../../Data/AsyncOrders";


// CREATE AN ADAPTER 
const OrderAdapter = createEntityAdapter({});

// INITIALIZE THE STATE WITH THE ADAPTER
const initialState = OrderAdapter.getInitialState({
  status: "idle",
  btnError: false,
  orderPageStatus: false,
  orderAvailable: true,
  activeButton: "orders_AAA"
});

// CREATE ASYNC FUNCTION WITH THRUC THAT WILL FETCH DATE FROM THE API
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  // const response = await AsyncOrders();
  const response = await axios.get("https://evoteam-verasoft.github.io/data/orders.json");
  // The value we return becomes the `fulfilled` action payload
  return Array(response.data)

})

export const OrdersSlide = createSlice({
  name: 'orders',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    errorButtonAction(state, action) {
      state.btnError = action.payload
    },

    handlePageStatus(state, action) {
      state.orderPageStatus = action.payload
    },

    handleOrderAvailable(state, action) {
      state.orderAvailable = action.payload
    },
    handleActiveButton(state, action) {
      state.activeButton = action.payload
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: {
    [fetchOrders.fulfilled as any]:
      (state: any, payload: any) => {
        OrderAdapter.setAll(state, payload)
        state.status = "completed"
      },
    [fetchOrders.rejected as any]: (state: any) => {
      state.status = "rejected"
    }

  }
})

export const { errorButtonAction, handlePageStatus, handleOrderAvailable, handleActiveButton } = OrdersSlide.actions

export const {
  selectAll: SelectOrders,
} = OrderAdapter.getSelectors((state: any) => state.orders)

export default OrdersSlide.reducer