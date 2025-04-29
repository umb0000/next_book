import { ReactNode } from "react"
import Link from "next/link"


export default function GlobalLayout({ children }: {
     children: ReactNode }) {
    return (
        <div>
          <header>
            <Link href={'/'}>📚One Bite books</Link>
          </header>
            <main>
              {children}
              </main>
      
              <footer>By @nimolee </footer>
        </div>
        )
    }