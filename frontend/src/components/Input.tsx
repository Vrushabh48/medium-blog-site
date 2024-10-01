interface InputProps {
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop type
}

export const Input = ({ placeholder, type, value, onChange }: InputProps) => {
    return (
        <input
            type={type}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={placeholder}
            value={value}
            onChange={onChange} // Attach the onChange handler
        />
    );
};
