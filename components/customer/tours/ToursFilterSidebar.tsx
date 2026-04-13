import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import { ToursDifficultyOption } from "@/types/customer-tours";

interface ToursFilterSidebarProps {
  isOpen: boolean;
  difficulties: ToursDifficultyOption[];
  onClose: () => void;
}

export default function ToursFilterSidebar({
  isOpen,
  difficulties,
  onClose,
}: ToursFilterSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:block w-80 h-[calc(100vh-6rem)] lg:sticky lg:top-28 overflow-y-auto bg-surface-container-lowest lg:bg-transparent lg:pl-8 px-6 py-6 shadow-[20px_0_40px_rgba(0,0,0,0.1)] lg:shadow-none no-scrollbar`}
    >
      <div className="flex justify-between items-center lg:hidden mb-8">
        <h3 className="font-extrabold text-xl tracking-tight text-on-surface">
          Bộ lọc
        </h3>
        <IconButton icon="close" variant="subtle" size="sm" onClick={onClose} />
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-extrabold text-lg mb-6 hidden lg:block tracking-tight text-on-surface">
            Tinh chỉnh lựa chọn
          </h3>
          <div className="space-y-6">
            <div className="group">
              <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">
                Điểm đến / Từ khóa
              </label>
              <div className="relative">
                <Icon
                  name="location_on"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-sm transition-colors group-focus-within:text-primary"
                />
                <input
                  type="text"
                  placeholder="VD: Alps, Thiền..."
                  className="w-full pl-10 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant/60 font-medium text-on-surface"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-4 block">
                Khoảng giá ($)
              </label>
              <div className="px-2 pt-2">
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  defaultValue="5000"
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-wider text-outline">
                  <span>$500</span>
                  <span>$10,000</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3 block">
                Thời lượng
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all shadow-sm">
                  1-5 ngày
                </button>
                <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                  6-10 ngày
                </button>
                <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                  11-15 ngày
                </button>
                <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                  15+ ngày
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3 block">
                Mức độ trải nghiệm
              </label>
              <div className="space-y-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/40">
                {difficulties.map((difficulty) => (
                  <label
                    key={difficulty.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        defaultChecked={difficulty.isActive}
                        className="w-5 h-5 rounded-md border-2 border-outline-variant/60 text-primary focus:ring-primary focus:ring-offset-2 cursor-pointer accent-primary appearance-none checked:bg-primary checked:border-transparent transition-all peer"
                      />
                      <Icon
                        name="check"
                        className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                      />
                    </div>
                    <span className="text-sm font-bold text-outline group-hover:text-on-surface peer-checked:text-on-surface transition-colors">
                      {difficulty.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-linear-to-br from-primary to-secondary text-white relative overflow-hidden mt-8 shadow-[0_20px_40px_rgba(40,90,185,0.2)]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-primary-fixed-dim/80">
              <Icon name="auto_awesome" filled className="text-sm" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Vận hành bởi AI
              </span>
            </div>
            <h4 className="font-black mb-2 text-xl tracking-tight">
              Cần lịch trình cá nhân hóa?
            </h4>
            <p className="text-sm text-white/90 mb-5 leading-relaxed font-medium">
              Hãy để trợ lý AI xây dựng lịch trình tối ưu theo đúng sở thích của
              bạn.
            </p>
            <button className="w-full py-3 bg-white text-primary rounded-xl text-sm font-bold hover:bg-surface-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Hỏi trợ lý <Icon name="arrow_forward" className="text-sm" />
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 transform -rotate-12 mix-blend-overlay">
            <Icon name="smart_toy" filled className="text-9xl" />
          </div>
        </div>
      </div>
    </aside>
  );
}
