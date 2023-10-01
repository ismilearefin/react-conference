

export default function CardLoading() {
  return (
    <div class="animate-pulse flex space-x-4 border bg-slate-300 m-8 p-8 rounded-lg">
    <div class="rounded-lg bg-slate-700 min-h-[140px] w-[140px]"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  )
}
