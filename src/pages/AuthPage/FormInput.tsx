import { ReactNode } from "react";

interface FormInputProps {
  icon: ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  icon,
  type,
  placeholder,
  value,
  onChange,
}: FormInputProps) => (
  <div className="relative">
    {icon}
    <input
      type={type}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default FormInput;
