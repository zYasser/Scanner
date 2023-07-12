import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QrScanner() {
  const router = useRouter();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 500,
        height: 500,
      },
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
    <div>
      div
      <div id="reader"></div>
    </div>
  );
}
