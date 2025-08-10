import Link from "next/link";

export default function LogoLink() {
  return (
    <Link href="/" className="text-xl font-bold text-blue-600">
      <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
    </Link>
  );
}
