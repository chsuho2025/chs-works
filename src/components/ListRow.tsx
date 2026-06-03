export function ListRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="list-row">
      <strong>{title}</strong>
      <p>{body}</p>
    </div>
  );
}
