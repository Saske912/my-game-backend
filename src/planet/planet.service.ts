// src/planet/planet.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanetService {
	constructor(private readonly prisma: PrismaService) { }

	getPlanets() {
		return this.prisma.planet.findMany();
	}

	createPlanet(data: { name: string; userId: number }) {
		return this.prisma.planet.create({ data });
	}
}
