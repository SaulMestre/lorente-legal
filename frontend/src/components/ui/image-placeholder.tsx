export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div aria-label={label} role="img" className="flex aspect-[4/5] min-h-64 items-center justify-center rounded-2xl border border-dashed border-moss/40 bg-sand/60 p-6 text-center text-sm text-moss">
      Espacio reservado para fotografía
    </div>
  );
}
