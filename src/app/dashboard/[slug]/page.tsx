import MainPage from '../../../components/shared/main';
export default async function Dashboard({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <h1>
      <MainPage />
    </h1>
  );
}
