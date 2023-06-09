import { IUSER } from "../../types";
import axios from "./api";

export const FetchDictionary = async () => {
  return await axios
    .get("/define")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

export const UploadDictionary = async (
  data: IUSER,
  id: string,
  walletid: string
) => {
  await axios
    .post(`/define/${id}/${walletid}`, data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};
