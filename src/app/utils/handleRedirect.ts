import { redirect } from 'next/navigation'
import { ROUTES } from '../constants/constants'
export const handleRedirect = (route: ROUTES) => {
    redirect(route)
}
