"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import QrScanner from "./components/QrScanner";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
export default function Home() {
  const [showScanner, setShowScanner] = useState(false);
  return (
    <div>
      <button onClick={() => setShowScanner(true)}> Scan </button>
        {showScanner ? <QrScanner /> : <div></div>}{" "}
    </div>
  );
}
