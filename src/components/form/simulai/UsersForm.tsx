"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
import DatePicker from '@/components/form/date-picker';
import Button from '@/components/ui/button/Button';

export default function UsersForm() {
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
    <ComponentCard title="New User">
      <div className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input type="text"  placeholder="Enter user's name" />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Select Role</Label>
          <div className="relative">
            <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
             <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon/>
            </span>
          </div>
        </div>
      <div>
        <Button>Create User</Button>
      </div>
      </div>
    </ComponentCard>
  );
}
