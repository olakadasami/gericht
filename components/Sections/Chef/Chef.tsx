import Heading from '@/components/Heading/Heading'
import ImageWrapper from '@/components/utils/ImageWrapper'
import chefImage from '../../../assets/chef1.png'

const Chef = () => {
    return (
        <section className='h-screen flex gap-20 px-40 py-20'>
            <div className='w-2/5'>
                <ImageWrapper
                    imageUrl={chefImage}
                    alt="chef's Image"
                />
            </div>
            <div className='w-3/5 flex flex-col gap-5'>
                <Heading
                    heading='What we believe in'
                    subHeading="Chef's Word"
                />
                <p className='italic'>
                    &quot; Lorem ipsum sit tellus lobortis sed senectus vivamus molestie.
                    Condimentum volutpat morbi facilisis quam scelerisque sapien. Et,
                    penatibus aliquam amet tellus lobortis sed senectus vivamus molestie.
                    Condimentum volutpat morbi facilisis quam scelerisque sapien. Et,
                    penatibus aliquam amet tellus.
                </p>
                <p >
                    <span className='font-comorant text-2xl text-color-accent block mb-2'>
                        Kevin Luo
                    </span>
                    <span className='text-sm'>
                        Chef & Founder
                    </span>
                </p>
                <p className='font-sacramento text-5xl italic'>
                    Kevin Luo
                </p>
            </div>
        </section>
    )
}

export default Chef