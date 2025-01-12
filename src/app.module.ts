import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PlanetService } from './planet/planet.service';
import { PlanetController } from './planet/planet.controller';
import { FleetController } from './fleet/fleet.controller';
import { FleetService } from './fleet/fleet.service';

@Module({
  imports: [],
  controllers: [AppController, PlanetController, FleetController],
  providers: [AppService, PrismaService, PlanetService, FleetService],
})
export class AppModule { }
