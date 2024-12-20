import "./style.css";

function Header() {
  return (
    <nav className="header #1de9b6 teal accent-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Ract Movies 2
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
