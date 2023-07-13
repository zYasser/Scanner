import fetch from "node-fetch";

export const getMedById = (id) => {
  return fetch(`http://localhost:8000/v1/api/med?medId=${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
