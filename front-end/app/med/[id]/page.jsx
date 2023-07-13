"use client";

import { getMedById } from "@/api/getMedById";
import { useEffect, useState } from "react";

export default function Med({ params }) {
  const [result, setResult] = useState();
  const [err, setErr] = useState();
  //We set fetching to false when we finish fetching
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      //If details exist then we couldn't fetch data successfully
      const { data, detail } = await getMedById(params.id);
      if (data) setResult(data);
      else setErr(detail);
      setFetching(false);
    };
    fetch();
  }, []);
  return (
    <div>
      {fetching ? (
        <div>Loading...</div>
      ) : !result ? (
        <div>{err}</div>
      ) : (
        <div>
          <p>{result?.title}</p>
          <p>{result?.content}</p>
        </div>
      )}
    </div>
  );
}
