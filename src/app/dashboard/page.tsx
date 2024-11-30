export default async function Dashboard({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className='lg:pl-[19.5rem]'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>Dashboard</div>
    </div>
  );
}
