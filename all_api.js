import axios from "axios";

const BASE_URL = "http://localhost:5000";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQyMDAxOTl9.F9HGhoJRlkINOhXsqxphNU_mT_oo24HvTQdGeGrZ-3Q";

const headers = {
  Authorization: "bearer " + TOKEN,
};

export const fetchAllDataFromDB = async (url, params) => {
  try {
    // const { data } = await axios.get(BASE_URL + url, {
    //   headers,
    //   params,
    // });

    const { data } = await axios.get(BASE_URL + url);

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
