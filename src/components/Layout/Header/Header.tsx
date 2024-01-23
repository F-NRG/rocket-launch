'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

type Props = {
  navItems: Array<{ name: string; path: string }>;
};

const Navigation: FC<Props> = ({ navItems }) => {
  const pathname = usePathname();
  const linkClass = 'p-1 border border-grey-200 rounded-md hover:bg-gray-300 text-white';

  return (
    <header>
      <nav className="flex justify-center gap-3 bg-gray-800 p-5">
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            className={pathname === navItem.path ? linkClass + ' bg-gray-100 text-gray-800' : linkClass}
            href={navItem.path}
          >
            {navItem.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
