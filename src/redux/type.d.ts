export interface ItemAttr {
  id: number;
  item_no: string;
  description: string;
  rate: number;
  qty: number;
  amount: number;
}

export interface ItemArray {
  all_items: ItemAttr[];
  particular_item: ItemAttr;
  isUploading: bool;
  uploadError: string;
}
