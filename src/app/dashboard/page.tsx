import Information from '../../components/shared/dashboard/information';
import MainSection from '../../components/shared/dashboard/main';

export default function Dashboard() {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <MainSection />
        <Information />
      </div>
    </div>
  );
}
