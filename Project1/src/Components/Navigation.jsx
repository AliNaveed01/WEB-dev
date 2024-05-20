const Navigation = () => {
    return(
        <nav className = "container">
        <div className="logo">
          <img src="public\Imgs\logo.jpeg" alt="logo" />
        </div>
        <ul>
          <li href = "#"> Menu </li>
          <li href = "#"> Location</li>
          <li href = "#"> About </li>
          <li href = "#"> Contact Us </li>
        </ul>
        <button type="button">Login</button>
      </nav>
    );
};
export default Navigation