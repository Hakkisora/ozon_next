'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
    const [searchString, updateSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const updateFiter = (value: string) => {
        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }
        router.replace(`${pathname}?${params.toString()}`)
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const searchParam = params.get('search')

        if (searchParam) {
            updateSearch(searchParam)
        } else {
            updateSearch('')
        }
    }, [])

    return (
        <div className="search">
            <div className="search-wrapper">
                <input
                    className="search-wrapper_input"
                    type="text"
                    value={searchString}
                    onChange={(event) => {
                        updateSearch(event.target.value)
                    }}
                />
            </div>
            <div className="search-btn">
                <button onClick={() => updateFiter(searchString)}></button>
            </div>
        </div>
    )
}