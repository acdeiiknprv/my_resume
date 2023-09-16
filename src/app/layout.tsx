type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {/* Potentially add a header, footer, or other shared UI components here */}
      {children}
    </>
  );
}