import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { FetchDictionary, UploadDictionary } from "../utils";
import { IUSER } from "../types";

const Home = () => {
  const { data } = useQuery({
    queryFn: FetchDictionary,
    queryKey: ["Dictionary"],
  });

  // const id = "";
  // const walletid = "";

  // const { mutate, isLoading } = useMutation({
  //   mutationKey: ["Upload-Dictionary"],
  //   mutationFn: (data: IUSER) => UploadDictionary(data, id, walletid),
  // });

  // const onsubmit = () =>{
  //   mutate({

  //   })
  // }

  return <div>Home</div>;
};

export default Home;
