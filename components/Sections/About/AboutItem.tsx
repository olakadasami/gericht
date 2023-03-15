import Button from "@/components/Button/Button"
import Image from "next/image"
import spoon from '../../../assets/spoon.png'

interface Props {
    heading: string
    paragraph: string
    right?: boolean
}

const AboutItem = ({ heading, paragraph, right }: Props) => {
    return (
        <div className={`${right ? 'items-end' : 'items-start'} flex flex-col`}>
            <h2 className='text-color-accent text-3xl comorant'>{heading}</h2>
            <div className='w-10 h-[9px] relative'>
                <Image
                    src={spoon}
                    fill
                    alt={heading}
                />
            </div>
            <p className={`${right ? 'text-right' : ''} my-4`}>
                {paragraph}
            </p>
            <div>
                <Button
                    href={'/'}
                    title={'Know More'}
                />
            </div>
        </div>
    )
}
export default AboutItem