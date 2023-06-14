import Image from 'next/image';

const LinkList = () => {
    return (
        <div className="mx-auto max-w-screen-sm text-center lg:pb-16 pb-8 flex flex-col">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Link
                List</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 flex-grow">
                The link list is currently under development, checkout the mainpage or try again later.
            </p>
            <Image className={"m-auto"} src={"/images/dash_worker.png"} alt={"Dash Worker to show development"}
                   width={400} height={400}/>
        </div>
    )
}

export default LinkList;