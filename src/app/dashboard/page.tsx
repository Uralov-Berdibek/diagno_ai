import Information from '../../components/shared/dashboard/information';
import Footer from '../../components/shared/footer';
import Docs from '../../components/shared/resources/docs';

export default function Dashboard() {
  return (
    <div className='lg:pl-[21rem] pr-5'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none pl-5 md:pl-0'>
        <Docs />
        <Information />
        <Footer />
      </div>
    </div>
  );
}
