'use client'

import { HEADER_ITEMS } from '../constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header: React.FC = () => {
    const path: string = usePathname()

    return (
        <div className="fixed top-0 p-5 flex space-x-4">
            {HEADER_ITEMS.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={`${
                        path === item.path
                            ? 'text-red-400 font-bold'
                            : 'text-black'
                    }`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
