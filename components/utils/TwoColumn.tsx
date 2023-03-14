interface Props {
    Comp1: React.FC
    Comp2: React.FC
}

const TwoColumn = ({ Comp1, Comp2 }: Props) => {
    return (
        <div className="flex gap-40 items-center">
            <Comp1 />
            <Comp2 />
        </div>
    )
}

export default TwoColumn