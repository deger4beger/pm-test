import s from "./cross.module.scss"
import React from "react"

interface Props {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
	className?: any
}

const CrossBtn: React.FC<Props> = ({
	onClick,
	className
}) => <span className={`${s.wrapper} ${className}`} onClick={onClick}/>

export default CrossBtn