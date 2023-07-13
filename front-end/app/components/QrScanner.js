"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

// This function is used to calculate the width and height of the QR code scanner

const qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
  const minEdgePercentage = 0.7; // chnage only this.
  const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
  const qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
  return {
    width: qrboxSize,
    height: qrboxSize,
  };
};

export default function QrScanner() {
  const router = useRouter();
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      //Use this property to limit the region of the viewfinder you want to use for scanning.

      qrbox: qrboxFunction,
      rememberLastUsedCamera: true,
      //frame per second, the speed of scanning, HIGH speed will effect performence

      fps: 5,
    });
    scanner.render(
      (res) => {
        router.push(`/med/${res}`);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className={styles.scanner_container}>
      <div id="reader" className={styles.scanner}></div>
    </div>
  );
}
