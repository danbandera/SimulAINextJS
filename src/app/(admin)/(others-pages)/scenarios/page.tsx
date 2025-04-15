import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import ScenariosTable from "@/components/tables/ScenariosTable";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Scenarios" />
      <div className="space-y-6">
          <ScenariosTable />
      </div>
    </div>
  );
}