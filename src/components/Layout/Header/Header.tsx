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
      <nav className="bg-primary flex gap-3 rounded-lg p-5">
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            className={twMerge(
              'text:primary hover:bg-secondary focus:bg-secondary rounded-md px-4 py-2  hover:text-gray-800',
              pathname === navItem.path && 'bg-tertiary'
            )}
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
