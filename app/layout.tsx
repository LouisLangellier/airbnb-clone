import { Nunito } from "next/font/google";


import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        {/* Reactiver le clientonly si jamais y'a un truc qui marche pas */}
        {/* <ClientOnly>  */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
