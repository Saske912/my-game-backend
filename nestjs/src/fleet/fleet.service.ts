// src/fleet/fleet.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FleetService {
	constructor(private readonly prisma: PrismaService) { }

	getFleets() {
		return this.prisma.fleet.findMany();
	}

	createFleet(data: { name: string; planetId: number; userId: number }) {
		return this.prisma.fleet.create({ data });
	}
}
