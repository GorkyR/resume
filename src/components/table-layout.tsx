import { CSSProperties } from "react"

type Child = undefined | null | boolean | number | string | JSX.Element
type ContainerProperties = {
	className?: string
	style?: CSSProperties
	children?: Child | Child[]
}
export default function TableLayout({ className, style, children }: ContainerProperties) {
	return <table className={className} style={style}><tbody>{children}</tbody></table>
}