import Link from "next/link";
import { AiFillHome } from 'react-icons/ai';
import { BsFill1CircleFill } from 'react-icons/bs'

import MenuItem from "@/components/MenuItem";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function Header() {
	return (
		<div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
			<div className="flex gap-4">
				<MenuItem title="Home" href="/" Icon={AiFillHome} />
				<MenuItem title="About" href="/about" Icon={BsFill1CircleFill} />
			</div>

			<div className="flex items-center gap-4">
				<DarkModeSwitch />

				<Link href="/" className="flex gap-1 items-center">
					<span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
					<span className="text-xl hidden sm:inline">Clone</span>
				</Link>
			</div>
		</div>
	)
}
