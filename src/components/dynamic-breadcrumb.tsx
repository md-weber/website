'use client'

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {BiCaretRight} from "react-icons/bi";
import MetaBreadcrumb from "@/components/meta/meta-breadcrumb";

export const DynamicBreadcrumb: React.FC = () => {
    const pathnames = usePathname().split('/').filter(x => x);

    if (pathnames.length == 0) return null;
    const capitalize = (s: string) => {
        const parts = s.split('-');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };

    return (
        <MetaBreadcrumb pathnames={pathnames}>
            <div className={"flex"}>
            <span className={"flex items-center"}>
                <Link href="/" passHref>
                    Home
                </Link>
            </span>
                {pathnames.map((value, index) => {
                    const linkTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    if (isLast) {
                        return (<div key={linkTo} className={"flex items-center"}>
                            <div>
                                <BiCaretRight className={"mx-2"}/>
                            </div>
                            <span>{capitalize(value)}</span>
                        </div>)
                    } else {
                        return (
                            <span key={linkTo} className={"flex items-center"}>
                            <div>
                            <BiCaretRight className={"mx-2"}/>
                        </div>
                            <Link href={linkTo} passHref key={linkTo}>
                                {capitalize(value)}
                            </Link>
                        </span>
                        )
                    }
                })}
            </div>
        </MetaBreadcrumb>
    );
};

export default DynamicBreadcrumb;
