import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
      <div className='min-h-screen flex items-center justify-center p-4'>
          <div className='w-full max-w-md bg-card p-8 rounded-lg shadow-sm'>
              {t('title')}
          </div>
          <h1 style={{fontWeight: 'bold'}}>salma dasdadad safsafas dkfdjsaokfsa </h1>
      </div>
  );
}
