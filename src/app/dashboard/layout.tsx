export default function DashboardLayout({
  children,
  analytics,
  table1,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  table1: React.ReactNode;
}) {
  return (
    <section>
      {analytics}
      <h1>This is dashboard Layout</h1>
      {children}
      {table1}
    </section>
  );
}
