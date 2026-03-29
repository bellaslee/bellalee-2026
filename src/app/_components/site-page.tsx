import { ReactNode } from 'react';
import { FloatingDoodlesLayer } from './floating-doodles-layer';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';

type SitePageProps = {
  children: ReactNode;
  footerClassName?: string;
  navClassName?: string;
};

export function SitePage({
  children,
  footerClassName = '',
  navClassName = 'mb-12',
}: SitePageProps) {
  return (
    <div className="site-shell relative min-h-screen overflow-hidden">
      <FloatingDoodlesLayer />
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <SiteNav className={navClassName} />
        {children}
        <SiteFooter className={footerClassName} />
      </main>
    </div>
  );
}
