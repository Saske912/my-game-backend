import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PlanetCardProps {
	name: string
	resources: {
		metal: number
		crystal: number
		deuterium: number
	}
}

export function PlanetCard({ name, resources }: PlanetCardProps) {
	return (
		<Card className="w-full max-w-sm bg-slate-800 text-white">
			<CardHeader>
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div className="flex justify-between">
						<span>Металл:</span>
						<span>{resources.metal}</span>
					</div>
					<Progress value={resources.metal / 100} className="h-2 bg-slate-700" />
					<div className="flex justify-between">
						<span>Кристалл:</span>
						<span>{resources.crystal}</span>
					</div>
					<Progress value={resources.crystal / 100} className="h-2 bg-slate-700" />
					<div className="flex justify-between">
						<span>Дейтерий:</span>
						<span>{resources.deuterium}</span>
					</div>
					<Progress value={resources.deuterium / 100} className="h-2 bg-slate-700" />
				</div>
			</CardContent>
		</Card>
	)
}

