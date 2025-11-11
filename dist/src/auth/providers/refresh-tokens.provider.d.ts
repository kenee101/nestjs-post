import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { UsersService } from 'src/users/providers/users.service';
import { GenerateTokensProvider } from './generate-tokens.provider';
export declare class RefreshTokensProvider {
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly usersService;
    private readonly generateTokensProvider;
    constructor(jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, usersService: UsersService, generateTokensProvider: GenerateTokensProvider);
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
