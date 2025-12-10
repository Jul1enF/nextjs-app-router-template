'use client'

import Header from "@/components/layout/Header"
import PhoneTabBar from "@/components/layout/phone/PhoneTabBar";
import useWindowDimensions from '@/hooks/useWindowDimensions';


export default function AppLayoutWrapper({ children }) {
    const { computerDisplay } = useWindowDimensions()

    return (
        <>
            <Header />

            {children}

            {!computerDisplay && <PhoneTabBar />}
        </>
    )

}