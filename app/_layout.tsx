import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </>
  );
}