// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
	) { }

	async register(data: { username: string; email: string; password: string }) {
		const hashedPassword = await bcrypt.hash(data.password, 10);
		return this.prisma.user.create({
			data: { ...data, password: hashedPassword },
		});
	}

	async login(data: { email: string; password: string }) {
		const user = await this.prisma.user.findUnique({ where: { email: data.email } });
		if (!user || !(await bcrypt.compare(data.password, user.password))) {
			throw new Error('Invalid credentials');
		}
		const token = this.jwtService.sign({ id: user.id, email: user.email });
		return { token };
	}
}
