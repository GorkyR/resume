import { ContainerProperties } from "./container.props";

export default function TableLayout({ className, style, children }: ContainerProperties) {
	return <table className={className} style={style}><tbody>{children}</tbody></table>
}