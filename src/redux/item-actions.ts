import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import { ItemAttr } from "./type";
import itemService from "./itemService";
import { RootState } from "./store";

export const itemActions = itemSlice.actions;

export const fetchItems = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    try {
      if (getState().item.all_items.length === 0) {
        const response: ItemAttr[] = await itemService.getAllItems();
        dispatch(itemActions.setItems(response));
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
};

export const uploadFile = (
  file: File
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response = await itemService.uploadFile(file);
      dispatch(itemActions.uploadFileSuccess(response));
    } catch (error: unknown) {
      const errorMessage = String(error);
      dispatch(itemActions.uploadFileFailure(errorMessage));
    }
  };
};

export const fetchParticularItem = (
  itemId: number
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: ItemAttr = await itemService.getParticularItem(itemId);
    dispatch(itemActions.setParticularItem(response));
  };
};
