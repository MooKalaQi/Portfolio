import Link from "next/link";

// Only visible if both forwards in the layout fail.
export default function ForwardPage() {
  return (
    <p>
      <Link href="/fa">فارسی</Link> · <Link href="/en">English</Link>
    </p>
  );
}
