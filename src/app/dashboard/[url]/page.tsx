export default function Page({ params }: { params: { url: string } }) {
  return <div>My Post: {params.url}</div>;
}
