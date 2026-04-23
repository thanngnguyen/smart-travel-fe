import React from "react";
import FilterTabs from "@/components/ui/FilterTabs";
import GuideTaskCard from "./GuideTaskCard";
import { GuideDepartureTask } from "@/types/guide-portal";
import { GuideTaskFilter } from "@/hooks/useGuidePortalData";
import Icon from "@/components/ui/Icon";

interface FilterTab {
  id: string;
  label: string;
  count: number;
}

interface GuideTaskListProps {
  tasks: GuideDepartureTask[];
  filterTabs: FilterTab[];
  activeFilter: GuideTaskFilter;
  selectedTaskId: string;
  onFilterChange: (filter: GuideTaskFilter) => void;
  onSelectTask: (taskId: string) => void;
}

export default function GuideTaskList({
  tasks,
  filterTabs,
  activeFilter,
  selectedTaskId,
  onFilterChange,
  onSelectTask,
}: GuideTaskListProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Filter tabs */}
      <div className="px-1 pb-4 overflow-x-auto shrink-0">
        <FilterTabs
          tabs={filterTabs}
          activeId={activeFilter}
          onTabChange={(id) => onFilterChange(id as GuideTaskFilter)}
          className="w-max"
        />
      </div>

      {/* Task list */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 -mr-1 scrollbar-thin">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="p-4 rounded-2xl bg-surface-container-low mb-4">
              <Icon name="search_off" className="text-3xl text-outline" />
            </div>
            <p className="text-sm font-bold text-on-surface-variant">
              Không tìm thấy nhiệm vụ nào
            </p>
            <p className="text-xs text-outline mt-1">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <GuideTaskCard
              key={task.id}
              task={task}
              isSelected={task.id === selectedTaskId}
              onSelect={onSelectTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
