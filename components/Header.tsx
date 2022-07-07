import Link from 'next/link';


const Header = () => {
  let links = [{name:"~/projects", url:"/projects"}, {name:"~/blog", url:"/blog"}, {name:"~/timeline", url:"/timeline"}];

  return (
    <div className="fixed z-10 flex min-w-full items-center justify-between py-4 px-4 backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-filter sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <div className="navbar flex items-center space-x-3 text-xs sm:space-x-8 sm:text-lg">
          <Link href="/" passHref>
            <a className="text-4xl text-emerald-500 hover:text-teal-800 tilium">lino.</a>
          </Link>
          <div className="flex">
            {
              links.map(({name, url})=>(
                <p key={name} className="pl-4 text-emerald-500 hover:text-teal-800"><Link href={url}>{name}</Link></p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header