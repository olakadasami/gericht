import Link from "next/link"
import { navItems } from "./navItems"

const Navbar = () => {

    return (
        <nav className="w-full flex px-20 text-color-white py-8 items-center justify-between">
            <div className="comorant font-bold w-fit text-3xl">
                GERICHT
            </div>
            <div className="w-2/3 flex items-center justify-between">
                <ul className="flex gap-3 items-center">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4 items-center">
                    <p>Login/Registration</p>
                    <p>|</p>
                    <p>Book Table</p>
                </div>

            </div>
        </nav>
    )
}

export default Navbar