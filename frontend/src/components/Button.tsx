interface ButtonProps {
    btnname: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Typing the onClick handler
  }
  
  export const Button = ({ btnname, onClick }: ButtonProps) => {
    return (
      <button
        type="button" // Changed to 'button' to prevent default form submission unless you specifically want 'submit'
        onClick={onClick} // Attach the onClick handler here
        className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition"
      >
        {btnname}
      </button>
    );
  };
  