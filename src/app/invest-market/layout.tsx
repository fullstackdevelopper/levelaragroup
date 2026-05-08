import StoreHeader from "@/components/StoreHeader"
import StoreFooter from "@/components/StoreFooter"
export const metadata = {
    title: 'LevelARA Invest-Market',
    description: '',
    icons: {
        icon: "/img/LevelARA Invest-Market Fav.svg",
    },
}
export default function StoreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <StoreHeader />

            <main>
                {children}
            </main>

            <StoreFooter />
        </>
    )
}