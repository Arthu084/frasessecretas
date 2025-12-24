import { FunnelIcon } from '@/components/icons/funnel-icon';

export function AppHeader() {
  return (
    <header className="py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center gap-3">
        <FunnelIcon className="w-7 h-7 text-primary" />
        <h1 className="text-xl font-bold text-foreground tracking-wider font-headline">
          FunnelFlow AI
        </h1>
      </div>
    </header>
  );
}
