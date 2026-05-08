import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@/app/global.css"

export const metadata = {
  title: 'LevelARA Group',
  description: '',
  icons: {
    icon: "/img/LevelARA-Group-Favicon-2.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}