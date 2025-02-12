import SiteHeader from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { LogoTicker } from '@/components/logo-ticker';
import SiteFooter from '@/components/site-footer';
import { CallToAction } from '@/components/call-to-action';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className='w-[1440px] max-w-[100%] mx-auto'>
      <SiteHeader />
      <HeroSection />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <SiteFooter />
    </div>
  );
}
