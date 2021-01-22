import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>Afzal Ali</span>
                    <span className={styles.headingPrimarySub}>Software Developer</span>
                </h1>

                {/* <a className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>Discover our tours</a> */}
            </div>
        </header>
    );
};

export default Header;