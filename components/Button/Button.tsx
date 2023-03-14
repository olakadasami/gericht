import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

interface Props {
    href: Url
    title: String
}
const Button = ({ href, title }: Props) => {
    return (
        <Link className='bg-color-accent text-primary-dark inline-flex items-center justify-center py-2 px-8' href={href}>
            {title}
        </Link>
    )
}

export default Button