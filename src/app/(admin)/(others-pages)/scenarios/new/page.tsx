import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ScenariosForm from "@/components/form/simulai/ScenariosForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="New Scenario" />
      <div className="space-y-6">
        <ScenariosForm />
      </div>
    </div>
  );
}
