export interface HandleAuthProp {
    email: string
    password: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    handleAuth: (event: React.FormEvent) => void
}
