import Image from 'next/image'
import bgImage from '../../assets/bg-about.png'
import spoon from '../../assets/spoon.png'
import Button from '../Button/Button'

const About = () => {
    const style = {
        backgroundImage: `url(${bgImage})}`
    }
    const aboutItems = [
        {
            heading: "About Us",
            right: true,
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
        },
        {
            heading: "Our History",
            paragraph: "Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        },
    ]
    return (
        <section style={style} className='bg-cover flex gap-40 px-32 py-32'>
            {aboutItems.map(item => (
                <AboutItem
                    key={item.heading}
                    heading={item.heading}
                    paragraph={item.paragraph}
                    right={item.right}
                />
            ))}
        </section>
    )
}

export default About

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