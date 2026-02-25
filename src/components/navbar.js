import Link from "next/link";

export default function Navbar(){
        return (
                <div className="flex w-full h-15 items-center justify-evenly p-10">
                <Link href="/"> Notice board app</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/post">Post</Link>

                </div>
                )
}

