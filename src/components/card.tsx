import Image, { StaticImageData } from 'next/image'

export interface CardProps{
    image: StaticImageData,
    title: string,
    description: string,
    readMore: boolean,
    readMoreButtonText?: string;
}

export default function Card (prop: CardProps){
    return (
        <div key={prop.title}>
            <div className={"text-center shadow-lg p-10 rounded-xl my-10"}>
                <Image src={prop.image} alt="Training for teams" width={250} height={180} className={"mx-auto"}/>
                <h3 className={"text-lg font-medium pt-8 pb-2"}>{prop.title}</h3>
                <p className={"py-2 lg:flex-grow"}>{prop.description}</p>
                {prop.readMore && <button className={"bg-teal-500 rounded-md p-1 px-3 mt-2"}>{prop.readMoreButtonText}</button>}
            </div>
        </div>
    )
}