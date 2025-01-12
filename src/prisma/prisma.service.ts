// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy {
	constructor() {
		super();
	}

	async onModuleInit() {
		await this.$connect(); // Устанавливаем соединение с базой данных при запуске модуля
	}

	async onModuleDestroy() {
		await this.$disconnect(); // Закрываем соединение при завершении работы модуля
	}

	// Дополнительный метод для очистки базы данных (например, для тестов)
	async clearDatabase() {
		if (process.env.NODE_ENV === 'test') {
			const tablenames = await this.$queryRaw<
				Array<{ tablename: string }>
			>`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

			const tables = tablenames
				.map(({ tablename }) => `"public"."${tablename}"`)
				.join(', ');

			if (tables) {
				await this.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
			}
		}
	}
}
