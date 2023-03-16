interface Props {
    comp1: React.FC
    comp2: JSX.Element
}

const TwoColumn = ({ comp1: Component1, comp2: Component2 }: Props) => {
    return (
        <div className="flex gap-40 items-center">
            <div className="w-1/2">
                <Component1 />
            </div>
            <div className="w-1/2">
                {Component2}
            </div>
        </div>
    )
}

export default TwoColumn