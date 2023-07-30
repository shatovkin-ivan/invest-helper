import Link from 'next/link'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrap}>
          <Link href="/" className={styles.header__logo}>
            InvestHelper
          </Link>
        </div>
      </div>
    </header>
  )
}
