import Navbar from "@components/navbar/navbar.js"
import "@style/global.css"
// app/layout.js

export const metadata = {
  title: 'Mohammad Aqsha Arianto Latif',
  description: 'Made for PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
