import Information from '../../components/shared/dashboard/information';
import Footer from '../../components/shared/footer';
import Docs from '../../components/shared/resources/docs';

export default function Dashboard() {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <Docs />
        <Information />
        <Footer />
      </div>
    </div>
  );
}
