interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputText = ({ value, onChange, onClick, onEnter, placeholder }: InputProps) => {
  return <input onKeyDown={onEnter} type="text" placeholder={placeholder} value={value} onChange={onChange} onClick={onClick} className='rounded-sm outline outline-1 outline-offset-2 block w-auto min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-400 focus:text-gray-600 sm:text-sm/6' />
};

export default InputText