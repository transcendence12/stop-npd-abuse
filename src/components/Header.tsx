import { checkUser } from "@/lib/checkUser";
import { Nav } from "./Nav";

export const Header = async () => {
  const user = await checkUser();
  return (
    <header className="shadow-xl">
      <Nav />
    </header>
  );
};
