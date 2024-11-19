import { ReactNode, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
interface Prop {
    children: ReactNode
    title: string
}

export const Accordion: React.FC<Prop> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }
    return (
        <div className="border-b pb-4">
            <div
                className="flex gap-2 items-center cursor-pointer p-3"
                onClick={handleOpen}
            >
                <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
                {title}
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {children}
            </div>
        </div>
    )
}
