import { XCopyright } from '@/components/XCopyright';
import { XHero } from '@/components/XHero';
import { XProfile } from '@/components/XProfile';
import { cookies } from 'next/headers';
import { XEmptyMemories } from './../components/XEmptyMemories';
import { XSignIn } from './../components/XSignIn';

export default function Home() {
  const isAuthenticated = cookies().has('token');

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div
        className={
          'relative flex flex-col items-start justify-between border-r border-white/10 ' +
          ' bg-[url(../assets/bg-stars.svg)] px-28 py-16'
        }
      >
        {/* Blur */}
        <div
          className={
            'absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 ' +
            ' rounded-full bg-purple-500 opacity-50 blur-xfull'
          }
        />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />

        {isAuthenticated ? <XProfile /> : <XSignIn />}
        <XHero />
        <XCopyright />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <XEmptyMemories />
      </div>
    </main>
  );
}
