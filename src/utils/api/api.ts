import axios from "axios";

const instance = axios.create({
  url: "https://mashape-community-urban-dictionary.p.rapidapi.com",
  params: { term: "wat" },
  headers: {
    "X-RapidAPI-Key": "4703983767msh3d692305932f8e9p1de330jsne734854522f5",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
});

export default instance;
