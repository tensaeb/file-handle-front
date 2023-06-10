import api from "./api";

export default {
  async getAllItems() {
    const response = await api().get("/");
    console.log("response: ", response);
    return response.data;
  },
  async getParticularItem(itemId: number) {
    const response = await api().get(`/${itemId}`);
    return response.data;
  },
  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api().post("/", formData);
    return response.data;
  },
};
