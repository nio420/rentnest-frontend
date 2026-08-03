import { getMe } from "@/services/auth/getMe";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const user = await getMe();

  return <NavbarClient user={user} />;
};

export default Navbar;