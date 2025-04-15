"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
import DatePicker from '@/components/form/date-picker';
import TextArea from '../input/TextArea';
import Button from '@/components/ui/button/Button';
import FileInput from '../input/FileInput';
export default function ScenariosForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <ComponentCard title="New Scenario">
      <div className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter scenario name"/>
        </div>
        <div>
          <Label>Context</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
            placeholder="Enter scenario context"
          />
        </div>
        <div>
          <Label>Assign User</Label>
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
          <Label>Aspects to evaluate</Label>
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
          <Label>Upload file</Label>
          <FileInput onChange={handleFileChange} className="custom-class" />
        </div>
        <div>
          <Button>Create Scenario</Button>
        </div>
      </div>
    </ComponentCard>
  );
}
