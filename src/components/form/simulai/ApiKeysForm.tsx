"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
import DatePicker from '@/components/form/date-picker';
import Button from '@/components/ui/button/Button';

export default function ApiKeysForm() {
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
    <ComponentCard title="AI API Keys">
      <div className="space-y-6">
        <div>
          <Label>OpenAI API Key</Label>
          <Input type="text"  placeholder="sk-proj-..." />
        </div>
        <div>
          <Label>Mistral API Key</Label>
          <Input type="text" placeholder="a1a2a..." />
        </div>
        <div>
          <Label>Llama API Key</Label>
          <Input type="text" placeholder="llx..." />
        </div>
      <div>
        <Button>Save Settings</Button>
      </div>
      </div>
    </ComponentCard>
  );
}
