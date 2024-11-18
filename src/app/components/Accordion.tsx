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
        <div>
            <div className="flex gap-2 items-center">
                <IoIosArrowDown onClick={handleOpen} />
                {title}
            </div>
            {isOpen && children}
        </div>
    )
}
