import NavBarLinks from "./NavBarLinks"
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="flex justify-between p-4">
      <Link href='/' className="ml-4">Shain Wah</Link>
      <NavBarLinks />
    </div>
  )
}
export default NavBar