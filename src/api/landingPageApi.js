import axiosInstance from "./axiosInstance";

export const fetchProfile = async () => {
  const response = await axiosInstance.get("/profile");
  return response.data;
};
