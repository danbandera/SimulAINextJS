import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UsersForm from "@/components/form/simulai/UsersForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};
//edit user page
export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="New User" />
      <div className="space-y-6">
        <UsersForm />
      </div>
    </div>
  );
}
