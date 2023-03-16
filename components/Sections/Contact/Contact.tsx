import Heading from '@/components/Heading/Heading'
import ImageWrapper from '@/components/utils/ImageWrapper'
import contactImage from '../../../assets/contact-img.png'

const Contact = () => {
    return (
        <section className='h-screen flex gap-20 px-40 py-20'>
            <div className='w-1/2'>
                <Heading
                    heading='Find Us'
                    subHeading='Contact'
                />
                <p>
                    Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                </p>
                <h2 className='font-comorant text-3xl text-color-accent'>Opening Hours</h2>
                <p className="jkj">
                    <span className='block'>Mon - Fri: 10:00 am - 02:00 am</span>
                    <span className='block'>Sat - Sun: 10:00 am - 03:00 am</span>
                </p>
            </div>
            <div className='w-1/2'>
                <ImageWrapper
                    imageUrl={contactImage}
                    alt='contact-section image'
                />
            </div>
        </section>
    )
}

export default Contact