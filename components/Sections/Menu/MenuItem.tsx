import React from 'react'

interface Props {
    title: string
    tags: string[]
    price: number
}

const MenuItem: React.FC<Props> = ({ title, tags, price }) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {tags?.map(item => (
                    <span
                        key={item}
                        className='border border-r'
                    >
                        {item}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default MenuItem