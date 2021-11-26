import Link from "next/Link";
import Image from "next/Image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninja-logo.png" alt="" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a> About</a>
      </Link>
      <Link href="/ninjas">
        <a> Ninjas</a>
      </Link>
    </nav>
  );
};

export default Navbar;
