import { Link } from "react-router-dom";
import SearchOrder from "../orders/SearchOrder";
import Username from "../users/Username";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Logo
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}
