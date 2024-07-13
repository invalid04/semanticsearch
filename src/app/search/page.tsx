import { redirect } from "next/navigation"

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = ({ searchParams }: PageProps) => {

    const query = searchParams.query

    if (Array.isArray(query) || !query) {
        return redirect('/')
    }

    

    return (
        <p>Search</p>
    )
}

export default Page