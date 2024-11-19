'use client'

import { HEADER_ITEMS } from '../constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header: React.FC = () => {
    const path: string = usePathname()

    return (
        <div className="flex space-x-6">
            {HEADER_ITEMS.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={`${
                        path === item.path ? 'text-accent' : 'text-black'
                    } text-xl font-bold`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
