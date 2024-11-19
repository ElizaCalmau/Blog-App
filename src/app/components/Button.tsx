import { ROUTES } from '../constants/constants'

interface ButtonProp {
    text: string
    color: string
    size: string
    padding: string
    width: string
    position?: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button: React.FC<ButtonProp> = ({
    text,
    color,
    size,
    padding,
    width,
    position,
    onClick,
}) => {
    return (
        <div
            className={`${color} ${size} ${width} ${padding} ${position} rounded-3xl text-center cursor-pointer`}
            onClick={onClick}
        >
            {text}
        </div>
    )
}
