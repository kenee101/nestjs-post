import { SignInProvider } from './sign-in.provider';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    private readonly refreshTokensProvider;
    constructor(usersService: UsersService, signInProvider: SignInProvider, refreshTokensProvider: RefreshTokensProvider);
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
