import { Link } from "react-router-dom";
import SearchOrder from "../orders/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Logo</Link>

      <SearchOrder />
      <p>Joseph</p>
    </header>
  );
}
