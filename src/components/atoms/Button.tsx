import { ButtonVariant } from "../../enums/todo.enum";
import { handleGetColor } from "../utils/colors";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
}


const Button = ({ label, disabled, icon, onClick, variant }: ButtonProps) => {
  return (
    <button className={`rounded-md bg-blue-600 text-white p-2 font-semibold transition disabled:!opacity-[0.5] disabled:!cursor-not-allowed ${handleGetColor(variant)}`} disabled={disabled} onClick={onClick}>{icon}{label}</button>
  )
}

export default Button