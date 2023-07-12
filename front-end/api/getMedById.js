import fetch from "node-fetch";

export const getMedById = (id) => {
  console.log(id);
  fetch(`http://localhost:8000/v1/api/med?medId=${id}`, { method: "GET" })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
