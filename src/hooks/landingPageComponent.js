import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../api/profileAPI";

const useProfile = () => {
  return useQuery(["profile"], fetchProfile);
};

export default useProfile;
