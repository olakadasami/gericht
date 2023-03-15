import Image, { StaticImageData } from 'next/image'

const ImageWrapper = ({ imageUrl, alt }: { imageUrl: StaticImageData, alt: string }) => {
    return (
        <div
            className="relative w-full h-full z-[10]
            before:absolute before:h-2/3 before:w-2/3 before:top-[-3%] before:right-[-3%] before:bg-color-accent 
            after:absolute after:h-2/3 after:w-2/3 after:bottom-[-3%] after:z-[-1] after:left-[-3%] after:bg-color-accent"
        >
            <Image src={imageUrl} fill alt={alt} />
        </div>
    )
}

export default ImageWrapper