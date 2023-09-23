export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>This is dashboard Layout</h1>
      {children}
    </section>
  );
}
