interface ButtonProp {
    text: string
    styles?: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button: React.FC<ButtonProp> = ({ text, styles, onClick }) => {
    return (
        <div
            className={`${styles} cursor-pointer text-center`}
            onClick={onClick}
        >
            {text}
        </div>
    )
}
