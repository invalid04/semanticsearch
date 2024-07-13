import { db } from "@/db"
import { redirect } from "next/navigation"

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({ searchParams }: PageProps) => {

    const query = searchParams.query

    if (Array.isArray(query) || !query) {
        return redirect('/')
    }

    let products = await db

    return (
        <p>Search</p>
    )
}

export default Page