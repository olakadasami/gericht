import spoon from '../../assets/spoon.png'
import Image from 'next/image'

interface Props {
    heading: string
    subHeading: string
    center?: boolean
    big?: boolean
}
const Heading = ({ heading, subHeading, center, big }: Props) => {
    return (
        <div className={`flex flex-col font-comorant capitalize ${center ? 'items-center justify-center' : ''}`}>
            <h2 className='mb-2 text-color-white text-xl'>{subHeading}</h2>
            <div className='w-10 h-[9px] relative'>
                <Image
                    src={spoon}
                    fill
                    alt={heading}
                />
            </div>
            <h1 className={`${big ? "text-[90px]" : 'text-[64px]'} text-color-accent`}>
                {heading}
            </h1>
        </div>
    )
}

export default Heading