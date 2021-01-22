import { FiMenu } from 'react-icons/fi';
import { Link, animateScroll as scroll } from "react-scroll";

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [ sideNav, setSideNav ] = React.useState({ width: 0 });

    const openNav = () => setSideNav({ width: 250 });

    const closeNav = () => setSideNav({ width: 0 });

    return (
        <nav>
            <div className={styles.container}>
                {/* <div className={styles.logo}>Afzal Ali</div> */}

                <div className={styles.center}>
                    <ul className={styles.ul}>
                        <li>
                            <Link 
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={10}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="designProjects"
                                spy={true}
                                smooth={true}
                                offset={10}
                                duration={400}
                            >
                                Design
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.menuBar} onClick={openNav}>
                    <FiMenu size={30} />
                </div>

                <div className={styles.sidenav} style={sideNav}>
                    <a className={styles.closebtn} onClick={closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;