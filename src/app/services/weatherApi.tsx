import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1";

const fetchDataWithAxios = async () => {
  const { data } = await axios.get(baseUrl + "/people");
  console.log(data);
//   return data;  
};

// const fetchDataWithKy = async () => {
//   const data = await ky.get(baseUrl + "/people").json();
//   console.log(data);
// };

// const fetchData = async () => {
//   const res = await fetch(baseUrl + "/people");
//   const data = await res.json();
//   console.log(data);
// };

