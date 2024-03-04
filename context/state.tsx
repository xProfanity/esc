"use client"

export const initialBaseState = {
    darkmode: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("darkmode") as string) as boolean || !true,
    drawerOpen: false,
}