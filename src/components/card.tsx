import Image, {StaticImageData} from 'next/image'

export interface CardProps {
    image: StaticImageData,
    title: string,
    description: string,
    readMore: boolean,
    readMoreButtonText?: string;
}

export default function Card(prop: CardProps) {
    return (
        <div key={prop.title} className={"lg:inline-flex lg:justify-evenly"}>
            <div className={"text-center shadow-lg pb-10 rounded-xl my-10 lg:flex lg:flex-col bg-gray-100 dark:bg-gray-900"}>
                <Image src={prop.image} alt="Training for teams"
                       style={{objectFit: "cover"}} className={"rounded-t-xl h-40 lg:h-40 object-fill"}/>
                <div className={"mx-10 flex flex-col h-full"}>
                <h3 className={"text-lg font-medium pt-8 pb-2 dark:text-white"}>{prop.title}</h3>
                <p className={"py-2 lg:flex-grow dark:text-gray-200 flex-grow"}>{prop.description}</p>
                {prop.readMore &&
                    <button
                        className={"bg-teal-500 rounded-md p-1 px-3 mt-2 lg:w-70 lg:mx-auto dark:bg-teal-50 "}>{prop.readMoreButtonText}</button>}
                </div>
            </div>
        </div>
    )
}