"use client"

export const initialBaseState = {
    darkmode: JSON.parse(localStorage.getItem("darkmode") as string) as boolean || true as boolean,
    drawerOpen: false,
}