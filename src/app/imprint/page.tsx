import Markdown from "markdown-to-jsx";
import React from "react";

const Imprint = () => {
    return (
        <div className="p-8 text-gray-500 dark:text-gray-400">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Imprint - According to §5 TMG
                </h2>
            </div>

            <div>
                <p>Tadayon & Weber GbR</p>
                <p>Wilhelm-Leuschner-Str. 54</p>
                <p>76189 Karlsruhe</p>
            </div>
            <p className={"pt-4"}><b>Represented by:</b></p>
            <p>Max Weber</p>
            <p>Mahtab Tadayon</p>

            <div className={"pt-4"}><h3 className={"font-bold"}> Contact</h3>
                <p>Phone: 0049 (0) 163 6270680</p>
                <p>Mail: flutterexp@gmail.com</p>
            </div>

            <div className={"pt-4"}>
                <h3 className={"font-bold"}>Tax ID</h3>
                <p>Tax ID according to §27 a Umsatzsteuergesetz:</p>
                <p>DE332160063</p>
            </div>
        </div>
    )
}

export default Imprint;