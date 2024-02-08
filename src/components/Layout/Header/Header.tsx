'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  navItems: Array<{ name: string; path: string }>;
};

const Navigation: FC<Props> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex justify-center gap-3 bg-gray-800 p-5">
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            className={twMerge('rounded-md border p-1 text-white hover:bg-gray-300 hover:text-gray-800', pathname === navItem.path && 'bg-blue-700')}
            href={navItem.path}
          >
            {navItem.name.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
