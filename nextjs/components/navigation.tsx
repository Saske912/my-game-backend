import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
	return (
		<nav className="bg-slate-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-white">
					OGame Clone
				</Link>
				<div className="space-x-4">
					<Button variant="ghost" asChild>
						<Link href="/research">Исследования</Link>
					</Button>
					<Button variant="ghost" asChild>
						<Link href="/fleet">Флот</Link>
					</Button>
					<Button variant="ghost" asChild>
						<Link href="/events">События</Link>
					</Button>
				</div>
			</div>
		</nav>
	)
}
