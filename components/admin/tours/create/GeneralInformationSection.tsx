export default function GeneralInformationSection() {
  return (
    <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-6">
      <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
        <span className="material-symbols-outlined text-primary">info</span>
        <h3 className="text-lg font-bold text-on-surface">Thông tin chung</h3>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-outline uppercase tracking-wider">
            Tiêu đề tour
          </label>
          <input
            className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
            placeholder="ví dụ: Kỳ nghỉ cao cấp bờ biển Amalfi"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-outline uppercase tracking-wider">
            Mô tả ngắn
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
            placeholder="Tóm tắt trải nghiệm trong 2 câu..."
            rows={3}
          ></textarea>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">
              Giá cơ bản ($)
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
              placeholder="2,499"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">
              Thời lượng (ngày)
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
              placeholder="7"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">
              Sức chứa tối đa
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
              placeholder="12"
              type="number"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
