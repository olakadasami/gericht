import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import bgImage from "../../assets/hero.png"
import ImageWrapper from "../utils/ImageWrapper"

const Hero = () => {
    return (
        <header className="flex gap-20 px-40 py-20">
            <div className="w-1/2">
                <Heading
                    heading="The Key To Fine Dining"
                    subHeading="Chase the new Flavour"
                    big
                />
                <p className="mb-8">
                    Sit tellus lobortis sed senectus vivamus molestie.
                    Condimentum volutpat morbi facilisis quam scelerisque sapien. Et,
                    penatibus aliquam amet tellus
                </p>
                <div>
                    <Button
                        href={'/'}
                        title={'Explore Menu'}
                    />
                </div>
            </div>
            <div className=" w-1/2">
                <ImageWrapper imageUrl={bgImage} alt="hero Image" />
            </div>
        </header>
    )
}

export default Hero