import axios from "./api";

export const FetchDictionary = async () => {
  await axios
    .get("/define")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};
