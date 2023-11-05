'use client';

import { NavLink } from '@/lib/data';
import { clsxm } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

function NavLink({ hash, name }: NavLink) {
  return (
    <motion.li
      className='h-3/4 flex items-center justify-center relative'
      key={hash}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        className={clsxm(
          'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300'
          // {
          //   "text-gray-950 dark:text-gray-200":
          //     activeSection === name,
          // }
        )}
        href={hash}
        onClick={() => {
          // setActiveSection(name);
          // setTimeOfLastClick(Date.now());
        }}
      >
        {name}

        {/* {name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )} */}
      </Link>
    </motion.li>
  );
}

export default NavLink;
