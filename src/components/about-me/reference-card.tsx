import Image from "next/image";
import Link from "next/link";


const ReferenceCard = (props: {
    referenceText: string;
    name: string;
    company: string;
    position: string;
    avatarURL: string;
}) => {
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <Image className="w-24 h-24 rounded-full mx-auto" src={props.avatarURL} alt={`Profile Image of ${props.name}`} width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        {props.referenceText}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {props.name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {`${props.position}, `}{props.company}
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}
export default ReferenceCard;