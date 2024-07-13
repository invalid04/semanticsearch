'use client'

import { Loader2, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRef, useTransition, useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [isSearching, startTransition] = useTransition()
    const router = useRouter()

    const [query, setQuery] = useState<string>('')

    const search = () => {
        startTransition(() => {
            router.push(`/search?query=${query}`)
        })
    }

    return ( 
        <div className='relative w-full h-14 flex flex-col bg-white'>
            <div className='h-14 relative z-10 rounded-md'>
                <Input 
                    disabled={isSearching}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Escape") {
                            inputRef?.current?.blur()
                        }
                        if (e.key === "Enter") {
                            search()
                        }
                    }}
                    ref={inputRef} 
                    className='absolute inset-0 h-full' />
                <Button
                    disabled={isSearching}
                    size='sm'
                    onClick={search}
                    className='absolute right-0 inset-y-0 h-full rounded-l-none'
                >
                    {isSearching 
                        ? <Loader2 className='h-6 w-6 animate-spin' />
                        : <Search className='h-6 w-6' />
                    }
                </Button>
            </div>
        </div>
    )
}

export default SearchBar