import { NavLink } from 'react-router-dom';
export function Header(): JSX.Element {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
