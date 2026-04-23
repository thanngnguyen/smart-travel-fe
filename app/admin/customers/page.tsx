"use client";

import CustomerFlashMessageBanner from "@/components/admin/customers/CustomerFlashMessageBanner";
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
        <CustomerFlashMessageBanner
          message={flashMessage}
          onClose={clearFlashMessage}
        />
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
