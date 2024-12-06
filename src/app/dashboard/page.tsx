import MainSection from '../../components/shared/dashboard/main';

export default async function Dashboard({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <MainSection />
      </div>
    </div>
  );
}
