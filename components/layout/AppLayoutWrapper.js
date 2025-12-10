'use client'

import Header from "@/components/layout/Header"


export default function AppLayoutWrapper({ children }) {
    return (
        <>
            <Header />

            {children}
        </>
    )

}