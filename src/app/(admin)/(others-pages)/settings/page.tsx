import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ApiKeysForm from "@/components/form/simulai/ApiKeysForm";
import MaliSettingsForm from "@/components/form/simulai/MailSettingsForm";
import AWSSettingsForm from "@/components/form/simulai/AWSSettingsForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Settings" />
      <div className="space-y-6">
        <ApiKeysForm />
        <MaliSettingsForm />
        <AWSSettingsForm />
      </div>
    </div>
  );
}