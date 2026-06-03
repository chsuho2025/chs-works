export function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="table-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
