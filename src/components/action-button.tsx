export function ActionButton({ label }: { label: string }) {
  return (
    <button
      className={
        'relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0d2626] to-[#2b5959]'
      }
    >
      <div className={'absolute inset-0 rounded-lg'}>
        <div
          className={
            'absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]'
          }
        />
        <div
          className={
            'absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'
          }
        />
        <div className={'absolute inset-0 rounded-lg'} />
      </div>
      <span>{label}</span>
    </button>
  );
}
