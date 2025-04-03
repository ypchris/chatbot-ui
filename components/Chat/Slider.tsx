import { FC, useContext, useState } from 'react';


import HomeContext from '@/pages/api/home/home.context';

interface Props {
  label: string;
  description: string;
  initialValue: number;
  onChange: (temperature: number) => void;
  min: number;
  max: number;
  step: number;
  precise?: number;
  footer?: React.ReactNode;
}

export const Slider: FC<Props> = ({
  label,
  initialValue,
  description,
  min,
  max,
  step,
  precise = 1,
  footer,
  onChange,
}) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {label}
      </label>
      <span className="text-[12px] text-black/50 dark:text-white/50 text-sm">
        {description}
      </span>
      <span className="mt-2 mb-1 text-center text-neutral-900 dark:text-neutral-100">
        {value.toFixed(precise)}
      </span>
      <input
        className="cursor-pointer"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      {footer}
    </div>
  );
};
