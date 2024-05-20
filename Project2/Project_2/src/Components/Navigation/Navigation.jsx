import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className = {`${styles.navigation} container`}>
        <div className = "logo">
            <img src="Images\asd.jpeg" alt = "OIP" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button type = "button">Login</button>
    </nav>
  );
};

export default Navigation