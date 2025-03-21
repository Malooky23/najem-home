import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function ContactLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 bg-background">
        {children}
      </main>
    </div>
  );
}
