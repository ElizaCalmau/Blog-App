interface ButtonProp {
    text: string
    styles: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
    type?: string
}

export const Button: React.FC<ButtonProp> = ({
    text,
    styles,
    onClick,
    type,
}) => {
    return (
        <div
            className={`${styles} text-center cursor-pointer`}
            onClick={onClick}
        >
            {text}
        </div>
    )
}
