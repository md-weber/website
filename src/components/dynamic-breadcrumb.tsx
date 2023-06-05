import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Breadcrumb} from "flowbite-react";

export const DynamicBreadcrumb: React.FC = () => {
    const pathnames = usePathname().split('/').filter(x => x);

    if (pathnames.length == 0) return null;
    const capitalize = (s: string) => {
        const parts = s.split('-');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };

    return (
        <Breadcrumb>
            <Link href="/" passHref>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            {pathnames.map((value, index) => {
                const linkTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                if (isLast) {
                    return <Breadcrumb.Item key={linkTo}>{capitalize(value)}</Breadcrumb.Item>
                } else {
                    return (
                        <Link href={linkTo} passHref key={linkTo}
                              className={"font-medium text-blue-600 dark:text-blue-500 hover:underline"}>
                            <Breadcrumb.Item>{capitalize(value)}</Breadcrumb.Item>
                        </Link>
                    )
                }
            })}
        </Breadcrumb>
    );
};

export default DynamicBreadcrumb;