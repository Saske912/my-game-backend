// src/planet/planet.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planets')
export class PlanetController {
	constructor(private readonly planetService: PlanetService) { }

	@Get(":userId")
	getPlanets(@Param("userId") userId: number) {
		return this.planetService.getPlanets(userId);
	}

	@Post('create')
	createPlanet(@Body() body: { name: string; userId: number }) {
		return this.planetService.createPlanet(body);
	}
}
