import Link from "next/link";

export default function NavbarItem() {
  return (
    <div>
      <Link
        href={`/?genre='param'`}
      >
        title
      </Link>
    </div>
  )
}
