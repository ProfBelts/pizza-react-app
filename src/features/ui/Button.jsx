/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base = `inline-block rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800
    transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 
    focus:ring-offset-2 disabled:cursor-not-allowed text-sm`;

  const styles = {
    primary: base + `px-4 py-3 md:px-6 md:py-4`,
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: `inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400
        transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-400 
        focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 `,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
