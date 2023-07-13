import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
export default function QrScanner() {
  const router = useRouter();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      //Use this property to limit the region of the viewfinder you want to use for scanning.
      qrbox: {
        width: 500,
        height: 500,
      },
      //frame per second, the speed of scanning HIGH speed will effect performence
      fps: 2,
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
