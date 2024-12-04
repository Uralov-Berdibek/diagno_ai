import { DocumentationIcon, PlusIcon } from '../../components/icons/icons';
import { Button } from '../../components/ui/button';

export default async function Dashboard({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className='lg:pl-[19.5rem]'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <div className='w-full flex justify-between'>
          <Button className='group bg-white dark:bg-slate-900 flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400 py-10 px-12'>
            <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10'>
              <DocumentationIcon />
            </div>
            on Submit
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
