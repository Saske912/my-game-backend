// src/planet/planet.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanetService {
	constructor(private readonly prisma: PrismaService) { }

	async getPlanets(userId: number) {
		const planets = await this.prisma.planet.findMany({
			where: {
				userId
			},
			include: { resources: true },
		});


		const now = new Date();

		return planets.map((planet) => {
			const timeDiff = (now.getTime() - planet.lastUpdated.getTime()) / 1000; // В секундах
			const updatedResources = {
				metal: planet.resources.metal + planet.resources.metalProduction * (timeDiff / 3600),
				crystal: planet.resources.crystal + planet.resources.crystalProduction * (timeDiff / 3600),
				deuterium: planet.resources.deuterium + planet.resources.deuteriumProduction * (timeDiff / 3600),
			};

			// Обновляем `lastUpdated`, чтобы не пересчитывать ресурсы при следующем запросе.
			this.prisma.planet.update({
				where: { id: planet.id },
				data: {
					lastUpdated: now,
					resources: {
						update: {
							metal: updatedResources.metal,
							crystal: updatedResources.crystal,
							deuterium: updatedResources.deuterium,
						},
					},
				},
			});

			return { ...planet, resources: updatedResources };
		});
	}

	createPlanet(data: { name: string; userId: number }) {
		return this.prisma.planet.create({ data });
	}
}
