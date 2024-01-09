import NavBarLinks from "./NavBarLinks"
import Link from "next/link";


const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <Link href='/' className="">Shain Wah</Link>
      <NavBarLinks />
    </nav>
  )
}
export default NavBar