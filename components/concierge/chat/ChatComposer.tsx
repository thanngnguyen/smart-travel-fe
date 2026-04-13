import Icon from "@/components/ui/Icon";
import { FormEvent } from "react";

interface ChatComposerProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}

export default function ChatComposer({
  input,
  onInputChange,
  onSubmit,
}: ChatComposerProps) {
  return (
    <div className="mt-6 pt-6 border-t border-outline-variant/10">
      <form onSubmit={onSubmit} className="relative">
        <input
          className="w-full bg-white border-0 ring-1 ring-outline-variant/30 rounded-3xl py-5 pl-6 pr-28 text-on-surface focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all font-medium placeholder:text-slate-400 outline-none"
          placeholder="Hỏi bất cứ điều gì về chuyến đi của bạn..."
          type="text"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <button
            type="button"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors outline-none cursor-pointer"
          >
            <Icon name="mic" />
          </button>
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-3 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all outline-none cursor-pointer"
          >
            <Icon name="send" />
          </button>
        </div>
      </form>
      <div className="mt-4 flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
        <span className="flex items-center gap-1">
          <Icon name="check_circle" className="text-[12px]" /> Đối tác đã xác
          minh
        </span>
        <span className="flex items-center gap-1">
          <Icon name="security" className="text-[12px]" /> Đặt chỗ an toàn & bảo
          mật
        </span>
      </div>
    </div>
  );
}
