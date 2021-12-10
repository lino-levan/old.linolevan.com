import Link from 'next/link';
import styles from '../styles/Header.module.scss'

interface IHeader {
  links: {
    name: string,
    url: string
  }[];
}

const Header = ({links}:IHeader) => {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.logo}>lino.</a>
      </Link>
      <div className={styles.links}>
        {
          links.map(({name, url})=>(
            <Link href={url} key={name}>{name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Header

export const DefaultHeader = () => {
  return <Header links={[{name:"Pintform", url:"https://pintform.com"}, {name:"Elemental", url:"/elemental"}, {name:"Browser OS", url:"/browseros"}, {name:"Smaller Projects", url:"/smaller"}]}/>
}
