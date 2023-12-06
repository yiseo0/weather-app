"use client";

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const onClick = async () => {
    const res = await fetch("/api/revalidate?tag=" + tag, { method: "POST" });
    const result = await res.json();
    console.log(result);
  };

  return <button onClick={onClick}>캐시 비우기</button>;
}
