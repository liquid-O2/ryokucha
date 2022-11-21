import Head from './head';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
