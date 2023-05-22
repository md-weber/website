// components/Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './Breadcrumb.module.css'; // Import your CSS Module

interface BreadcrumbItem {
    name: string;
    href: string;
}

const Breadcrumb: React.FC = () => {
    const router = useRouter();

    // Generates breadcrumb structure from current path
    const generateBreadcrumb = (): BreadcrumbItem[] => {
        const pathnames = router.pathname.split('/').filter(x => x);
        return [
            {name: 'Home', href: '/'},
            ...pathnames.map((value, index) => {
                const previousPaths = pathnames.slice(0, index).join('/');
                const name = value.replace("_", "").replaceAll("-", " ")
                return {
                    name: name.charAt(0).toUpperCase() + name.slice(1),
                    href: `/${previousPaths}/${value}`
                };
            })
        ];
    };

    const breadcrumb = generateBreadcrumb();

    return (
        <nav className={styles.breadcrumb}>
            {breadcrumb.map((b, i) => {
                const isLast = i === breadcrumb.length - 1;

                return (
                    <span key={b.href}>
                        {isLast ? (
                            b.name
                        ) : (
                            <Link href={b.href}>{b.name}</Link>
                        )}
                        {!isLast && <span className={styles.separator}> / </span>}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
