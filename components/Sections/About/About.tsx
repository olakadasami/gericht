import bgImage from '../../../assets/bg-about.png'
import AboutItem from './AboutItem'

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