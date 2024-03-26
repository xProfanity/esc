"use client"

import { useSearchParams } from "next/navigation"

const NameContainer = () => {
    const searchParams = useSearchParams()

    const user = searchParams.get("user")

    return (
        <p>Hello <span className="capitalize">{user?.replaceAll('_', ' ')}</span></p>
    )
}

export default NameContainer