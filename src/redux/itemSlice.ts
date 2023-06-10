import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemArray, ItemAttr } from "./type";

const initialItemState: ItemArray = {
  all_items: [],
  particular_item: {
    id: 0,
    item_no: "",
    description: "",
    rate: 0,
    qty: 0,
    amount: 0,
  },
  isUploading: false,
  uploadError: "",
};

const itemSlice = createSlice({
  name: "Item",
  initialState: initialItemState,
  reducers: {
    setItems(state, action: PayloadAction<ItemAttr[]>) {
      state.all_items = action.payload;
    },
    setParticularItem(state, action: PayloadAction<ItemAttr>) {
      state.particular_item = action.payload;
    },
    // New reducer to handle upload success
    uploadFileSuccess(state) {
      state.isUploading = false;
      state.uploadError = "";
    },
    // New reducer to handle upload failure
    uploadFileFailure(state, action: PayloadAction<string>) {
      state.isUploading = false;
      state.uploadError = action.payload;
    },
  },
});

export default itemSlice;
