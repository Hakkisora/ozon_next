'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useState } from "react"

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const searchParans = useSearchParams()

    const updateFiter = (value: string) => {
        const params = new URLSearchParams(searchParans)

        if (value) {
            params.set('category', value)
        } else {
            params.delete('category')
        }
        router.replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="catalog-button">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="catalog-button_burger"></span><span
                    className="catalog-button_text">Каталог</span>
            </button>
            <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
                <ul className="catalog-list">
                    <li onClick={() => updateFiter('Игровая приставка')}>Игровая приставка</li>
                    <li onClick={() => updateFiter('Периферия для ПК')}>Периферия для ПК</li>
                    <li onClick={() => updateFiter('Игры и софт')}>Игры и софт</li>
                </ul>
            </div>
        </div>
    )
}