import Link from "next/link";
import { IconType } from "react-icons";

interface MenuItemProps {
	href: string;
	title: string;
	Icon: IconType
}

export default function MenuItem({ href, title, Icon }: MenuItemProps) {
	return (
		<Link href={href} className="hover:text-amber-500">
			<Icon className="text-2xl sm:hidden" />
			<p className="uppercase hidden sm:inline text-sm">{title}</p>
		</Link>
	)
}
