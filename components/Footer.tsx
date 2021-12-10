import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Ah yes, my favorite. Footers.
      </p>
      <p>
        Check out my <a href="https://github.com/lino-levan">Github</a>
      </p>
    </footer>
  )
}

export default Footer