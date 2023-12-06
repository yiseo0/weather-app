"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  const onClick = () => {
    console.log("홈으로 이동");
    router.push("/");
  };
  return <button onClick={onClick}>홈으로 이동</button>;
}
