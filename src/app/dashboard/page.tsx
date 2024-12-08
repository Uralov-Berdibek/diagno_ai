import MainSection from '../../components/shared/dashboard/main';
import SendMessages from '../../components/shared/dashboard/send-messages';
import Response from '../../components/shared/dashboard/response';

export default function Dashboard() {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <MainSection />
        <SendMessages />
        <Response
          requestType='sound'
          requestContent='https://example.com/voice-message.ogg'
          response='Your voice message has been transcribed successfully.'
        />
      </div>
    </div>
  );
}
