interface Prop {
    text: string
    color: string
    size: string
    padding: string
    width: string
    position?: string
}

export const Button: React.FC<Prop> = ({
    text,
    color,
    size,
    padding,
    width,
    position,
}) => {
    return (
        <div
            className={`${color} ${size} ${width} ${padding} ${position} rounded-3xl text-center cursor-pointer`}
        >
            {text}
        </div>
    )
}
