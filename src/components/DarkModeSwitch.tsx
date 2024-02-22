'use client'

import {useEffect, useState} from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
	const [mounted, setMounted] = useState(false)

	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleToggle = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div>
			{mounted &&
				(
					resolvedTheme === 'dark' ?
						<MdLightMode onClick={handleToggle} className="text-xl cursor-pointer hover:text-amber-500" /> :
						<MdDarkMode onClick={handleToggle} className="text-xl cursor-pointer hover:text-amber-500" />
				)
			}
		</div>
	)
}
