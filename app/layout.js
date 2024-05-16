import { Inter } from "next/font/google";
import Link from "next/link";
import "normalize.css";
import "./globals.css";
import Image from "next/image";
import kittyBidder from '@/public/Kitty_Bidder.png';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

function NavLogo(){
    return(
        <Image
            src={kittyBidder}
            width={125}
            height={125}
            alt="Kitty Bidder Logo"
        />
    )
}

    return (
        <html lang="en">
            <body className={inter.className}>
                <nav>
                   <NavLogo/>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/listings">Listings</Link>
                        </li>
                        <li>
                            <Link href="/listings/new">Sell</Link>
                        </li>
                    </ul>
                </nav>

                {children}
            </body>
        </html>
    );
}
