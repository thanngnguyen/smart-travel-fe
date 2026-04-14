"use client";

import AdminCard from "@/components/ui/AdminCard";
import CustomersFilterBar from "@/components/admin/customers/CustomersFilterBar";
import CustomersHeader from "@/components/admin/customers/CustomersHeader";
import CustomersInsightsSection from "@/components/admin/customers/CustomersInsightsSection";
import CustomersTableSection from "@/components/admin/customers/CustomersTableSection";
import { useAdminCustomersData } from "@/hooks/useAdminCustomersData";

export default function CustomersManagementPage() {
  const {
    customers,
    filteredCustomers,
    selectedCustomer,
    selectedCustomerId,
    setSelectedCustomerId,
    searchQuery,
    setSearchQuery,
    segmentFilters,
    statusFilters,
    setActiveSegmentFilter,
    setActiveStatusFilter,
    metrics,
    segmentBars,
    pagination,
    flashMessage,
    clearFlashMessage,
    toggleVipTier,
    toggleCustomerBlock,
    markRetentionFollowUp,
  } = useAdminCustomersData();

  const focusAtRiskCustomers = () => {
    setActiveSegmentFilter("all");
    setActiveStatusFilter("at-risk");

    const firstAtRiskCustomer = customers.find(
      (customer) => customer.status === "at-risk",
    );

    if (firstAtRiskCustomer) {
      setSelectedCustomerId(firstAtRiskCustomer.id);
    }
  };

  const focusBlockedCustomers = () => {
    setActiveSegmentFilter("all");
    setActiveStatusFilter("blocked");

    const firstBlockedCustomer = customers.find(
      (customer) => customer.status === "blocked",
    );

    if (firstBlockedCustomer) {
      setSelectedCustomerId(firstBlockedCustomer.id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen gap-6">
      <CustomersHeader
        onFocusAtRisk={focusAtRiskCustomers}
        onFocusBlocked={focusBlockedCustomers}
      />

      {flashMessage ? (
        <AdminCard
          padding="sm"
          className={
            flashMessage.tone === "success"
              ? "bg-green-100 text-green-800"
              : flashMessage.tone === "error"
                ? "bg-red-100 text-red-800"
                : "bg-primary/10 text-primary"
          }
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold">{flashMessage.text}</p>
            <button
              type="button"
              onClick={clearFlashMessage}
              className="text-xs font-bold uppercase tracking-wider opacity-80 hover:opacity-100"
            >
              Đóng
            </button>
          </div>
        </AdminCard>
      ) : null}

      <CustomersFilterBar
        searchQuery={searchQuery}
        segmentFilters={segmentFilters}
        statusFilters={statusFilters}
        onSearchQueryChange={setSearchQuery}
        onSegmentFilterChange={setActiveSegmentFilter}
        onStatusFilterChange={setActiveStatusFilter}
      />

      <CustomersTableSection
        rows={filteredCustomers}
        selectedCustomerId={selectedCustomer?.id ?? selectedCustomerId}
        pagination={pagination}
        onSelectCustomer={setSelectedCustomerId}
        onToggleVipTier={toggleVipTier}
        onToggleCustomerBlock={toggleCustomerBlock}
        onMarkRetentionFollowUp={markRetentionFollowUp}
      />

      <CustomersInsightsSection
        metrics={metrics}
        segmentBars={segmentBars}
        selectedCustomer={selectedCustomer}
        onToggleVipTier={toggleVipTier}
        onToggleCustomerBlock={toggleCustomerBlock}
        onMarkRetentionFollowUp={markRetentionFollowUp}
      />
    </div>
  );
}
