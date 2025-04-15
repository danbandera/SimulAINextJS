"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
import DatePicker from '@/components/form/date-picker';
import Button from '@/components/ui/button/Button';

export default function MaliSettingsForm() {
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
    <ComponentCard title="Mail Settings">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Mail Username</Label>
          <Input type="text" placeholder="user@example.com" />
        </div>
        <div>
          <Label>Mail Password</Label>
          <Input type="text" placeholder="password" />
        </div>
        <div>
          <Label>Mail Host</Label>
          <Input type="text" placeholder="smtp.gmail.com" />
        </div>
        <div>
          <Label>Mail Port</Label>
          <Input type="text" placeholder="465" />
        </div>
        <div>
          <Label>Mail From</Label>
          <Input type="text" placeholder="user@example.com" />
        </div>
        <div>
          <Label>Mail From Name</Label>
          <Input type="text" placeholder="John Doe" />
        </div>
        <div className="md:col-span-2">
          <Button>Save Settings</Button>
        </div>
      </div>
    </ComponentCard>
  );
}
