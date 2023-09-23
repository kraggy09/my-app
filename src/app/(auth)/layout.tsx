export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>This is Auth Layout</h1>
      {children}
    </section>
  );
}
