import Image from 'next/image'

const ImageWrapper = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div className="relative w-1/2 border">
            <Image src={imageUrl} fill alt="" />
        </div>
    )
}

export default ImageWrapper