import React from 'react';
import { ScrollTextIcon, FileTextIcon, FolderIcon } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
const data = [{
  title: 'Blog',
  icon: <ScrollTextIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
  href: 'https://www.hitiksha.com/blog'
}, {
  title: 'Resume',
  icon: <FileTextIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
  href: 'https://www.hitiksha.com/resume'
}, {
  title: 'Projects',
  icon: <FolderIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
  href: 'https://www.hitiksha.com/projects'
}];
export function AppleStyleDock() {
  return <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => <DockItem key={idx} className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer" onClick={() => window.location.href = item.href}>
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>)}
      </Dock>
    </div>;
}