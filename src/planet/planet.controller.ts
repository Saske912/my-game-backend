// src/planet/planet.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planets')
export class PlanetController {
	constructor(private readonly planetService: PlanetService) { }

	@Get()
	getPlanets() {
		return this.planetService.getPlanets();
	}

	@Post('create')
	createPlanet(@Body() body: { name: string; userId: number }) {
		return this.planetService.createPlanet(body);
	}
}
