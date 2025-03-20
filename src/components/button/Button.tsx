import { ComponentProps } from "react"

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant?: TVariant;
}

function Button({children, variant, style, ...rest} : TButton) {
  return (
    <button {...rest} style={{...style,cursor: "pointer", padding: "4px 8px", borderRadius: "5px" , ...checkVariant(variant)}}>{children}</button>
  )
}

export default Button

function checkVariant(variant?: TVariant){
    switch (variant) {
        case 'primary':
            return {backgroundColor: "#002bff9c" , color: "white"}
            
        case 'secondary':
            return {backgroundColor: "gray" , color: "white"}
            
        case 'danger':
            return {backgroundColor: "red" , color: "white"}
            
        case 'warning':
            return {backgroundColor: "yellow" , color: "black"}
            
        case 'success':
            return {backgroundColor: "green" , color: "white"}
            default:
                return {}     
    }
}