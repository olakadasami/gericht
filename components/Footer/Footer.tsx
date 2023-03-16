import Image from 'next/image'
import Link from 'next/link'
import spoon from '../../assets/spoon.png'
import { socialMediaData } from './socialMediaData'

const Footer = () => {
    return (
        <footer className=" px-40 py-20">
            <div className="flex gap-8 justify-between">
                <div className="text-center ">
                    <h2 className="text-3xl font-comorant text-color-accent-2">
                        Contact Us
                    </h2>
                    <p>
                        9 W 53rd St, New York, NY 10019, USA
                    </p>
                    <div>
                        <span>+1 212-344-1230</span>
                        <span>+1 212-555-1230</span>
                    </div>
                </div>
                <div className="text-center ">
                    <h2 className="text-5xl font-comorant font-bold text-color-accent">
                        GERICHT
                    </h2>
                    <p>
                        &quot;The best way to find yourself is to lose yourself in the service of others.”
                    </p>
                    <div className='flex justify-center items-center'>
                        <div className='w-10 h-[9px] relative'>
                            <Image
                                src={spoon}
                                fill
                                alt={'spoon'}
                            />
                        </div>
                    </div>
                    <div>
                        {socialMediaData?.map(item => (
                            <Link href={item.href} key={item.name}>
                                <Image fill src={item.imageUrl} alt={item.name} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-comorant text-color-accent-2">
                        Working Hours
                    </h2>
                    <div className=''>
                        <p>Monday - Friday:</p>
                        <p>08:00am - 12:00am</p>
                    </div>
                    <div>
                        <p>Saturday - Sunday:</p>
                        <p>07:00am - 11:00pm</p>
                    </div>
                </div>
            </div>
            <p className="text-center">
                2021 Gerícht. All Rights reserved.
            </p>
        </footer>
    )
}

export default Footer