import { ButtonVariant } from "../../enums/todo.enum"


export const handleGetColor = (variant: ButtonVariant | undefined) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return 'bg-blue-600 text-white hover:bg-blue-500'
    case ButtonVariant.SECONDARY:
      return 'bg-gray-600 text-white hover:bg-gray-500'
    case ButtonVariant.TERTIARY:
      return 'bg-green-600 text-white hover:bg-green-500'
    case ButtonVariant.WARNING:
      return 'bg-red-600 text-white hover:bg-red-500'
    default:
      return 'bg-blue-600 text-white hover:bg-blue-500'
  }
}