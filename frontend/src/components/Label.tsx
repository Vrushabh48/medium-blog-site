interface LabelProps {
    label: string;
  }
  
  export const Label = ({ label }: LabelProps) => {
    return (
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    );
  };
  