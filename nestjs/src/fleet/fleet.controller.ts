// src/fleet/fleet.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { FleetService } from './fleet.service';

@Controller('fleets')
export class FleetController {
	constructor(private readonly fleetService: FleetService) { }

	@Get()
	getFleets() {
		return this.fleetService.getFleets();
	}

	@Post('create')
	createFleet(@Body() body: { name: string; planetId: number; userId: number }) {
		return this.fleetService.createFleet(body);
	}
}
