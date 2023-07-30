import Link from 'next/link'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <Link href="/test">test</Link>
        </li>
      </ul>
    </nav>
  )
}
