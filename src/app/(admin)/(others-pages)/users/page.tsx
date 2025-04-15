import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import UsersTable from "@/components/tables/UsersTable";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
          <UsersTable />
      </div>
    </div>
  );
}