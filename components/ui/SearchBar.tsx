"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic tương tác tìm kiếm tạm thời
    alert(
      `Thông tin tìm kiếm:\n- Điểm đến: ${destination || "Bất kỳ"}\n- Ngày: ${date || "Bất kỳ"}\n- Ngân sách: ${budget || "Bất kỳ"}`,
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-3xl p-2 md:p-4 flex flex-col md:flex-row items-stretch gap-2"
    >
      {/* Destination Field */}
      <div className="flex-1 flex items-center px-6 py-2 hover:bg-surface-container-low rounded-2xl transition-colors group cursor-text">
        <Icon name="location_on" className="text-primary mr-4" />
        <div className="flex flex-col text-left w-full">
          <label className="text-xs font-bold text-outline uppercase tracking-wider mb-1 cursor-pointer">
            Điểm đến
          </label>
          <input
            type="text"
            className="bg-transparent border-none p-0 outline-none ring-0 w-full text-on-surface font-medium placeholder:text-on-surface-variant focus:ring-0"
            placeholder="Bạn muốn đi đâu tiếp theo?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </div>

      <div className="hidden md:block w-px bg-outline-variant/30 my-4" />

      {/* Dates Field */}
      <div className="flex-1 flex items-center px-6 py-2 hover:bg-surface-container-low rounded-2xl transition-colors group cursor-pointer relative">
        <Icon name="calendar_today" className="text-primary mr-4" />
        <div className="flex flex-col text-left w-full">
          <label className="text-xs font-bold text-outline uppercase tracking-wider mb-1 cursor-pointer">
            Ngày đi
          </label>
          <input
            type="date"
            className="bg-transparent border-none p-0 outline-none ring-0 w-full text-on-surface font-medium focus:ring-0"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ colorScheme: "light" }} // Fix cho text hiển thị rõ trên dark/light mode
          />
        </div>
      </div>

      <div className="hidden md:block w-px bg-outline-variant/30 my-4" />

      {/* Budget Field */}
      <div className="flex-1 flex items-center px-6 py-2 hover:bg-surface-container-low rounded-2xl transition-colors group cursor-pointer relative">
        <Icon name="payments" className="text-primary mr-4" />
        <div className="flex flex-col text-left w-full relative">
          <label className="text-xs font-bold text-outline uppercase tracking-wider mb-1 cursor-pointer">
            Ngân sách
          </label>
          <select
            className="bg-transparent border-none p-0 outline-none ring-0 w-full text-on-surface font-medium focus:ring-0 cursor-pointer appearance-none"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="" disabled hidden>
              Chọn khoảng ngân sách
            </option>
            <option value="economy">Tiết kiệm ($0 - $1,000)</option>
            <option value="standard">Tiêu chuẩn ($1,000 - $3,000)</option>
            <option value="luxury">Cao cấp ($3,000+)</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-50">
            <Icon name="expand_more" />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="rounded-2xl px-8 py-4 md:py-0 flex items-center justify-center gap-2 mt-2 md:mt-0"
      >
        <Icon name="search" />
        <span>Khám phá</span>
      </Button>
    </form>
  );
}
