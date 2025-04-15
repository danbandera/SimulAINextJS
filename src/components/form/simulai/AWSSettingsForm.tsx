"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
import DatePicker from '@/components/form/date-picker';
import Button from '@/components/ui/button/Button';

export default function AWSSettingsForm() {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { value: "admin", label: "Admin" },
    { value: "company", label: "Company" },
    { value: "user", label: "User" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <ComponentCard title="AWS Settings">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>AWS Access Key</Label>
          <Input type="text" placeholder="AKIAIOS..." />
        </div>
        <div>
          <Label>AWS Secret Key</Label>
          <Input type="text" placeholder="Awoeua..." />
        </div>
        <div>
          <Label>AWS Region</Label>
          <Input type="text" placeholder="us-east-1" />
        </div>
        <div>
          <Label>AWS Bucket Name</Label>
          <Input type="text" placeholder="my-bucket" />
        </div>
        <div>
          <Label>AWS Bucket URL</Label>
          <Input type="text" placeholder="https://s3.amazonaws.com/my-bucket" />
        </div>
        <div className="md:col-span-2">
          <Button>Save Settings</Button>
        </div>
      </div>
    </ComponentCard>
  );
}
