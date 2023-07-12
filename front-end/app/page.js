"use client";
import Image from "next/image";
import styles from "./page.module.css";

import QrScanner from "./components/QrScanner";
import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
export default function Home() {
  return (
    <div>
      <QrScanner />
    </div>
  );
}
