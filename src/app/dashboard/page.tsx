export default async function Dashboard({ params }: { params: Promise<{ slug: string }> }) {
  return <h1 className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>Dashboard</h1>;
}
