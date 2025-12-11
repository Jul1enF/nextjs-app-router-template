'use client'

import Header from "@/components/layout/Header"
import PhoneTabBar from "@/components/layout/phone/PhoneTabBar";
import useWindowDimensions from '@/hooks/useWindowDimensions';
import HorizontalMenu from '@/components/layout/horizontal-menu/HorizontalMenu';


export default function AppLayoutWrapper({ children }) {
    const {mounted, computerDisplay } = useWindowDimensions()
   
    // Don't render if the dom hasn't been hydrated and computerDisplay setted
    if (!mounted) return null

    return (
        <>
            <Header />

            <HorizontalMenu />

            {children}

            {!computerDisplay && <PhoneTabBar />}
        </>
    )

}