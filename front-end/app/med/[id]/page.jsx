"use client";

import { getMedById } from "@/api/getMedById";
import { useEffect, useState } from "react";

export default function Med({ params }) {
  const [med, setMed] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await getMedById(params.id);
      setMed(res);
    };
    fetch();
  }, []);
  return <p>{console.log(med)}</p>;
}
