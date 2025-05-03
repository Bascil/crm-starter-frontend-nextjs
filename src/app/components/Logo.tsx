import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3B82F6" />
          <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#2563EB" />
        </svg>
      </div>
      <span className="text-xl font-bold text-gray-900">CRM Pro</span>
    </Link>
  );
}
