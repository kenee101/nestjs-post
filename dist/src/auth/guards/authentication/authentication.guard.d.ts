import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { Reflector } from '@nestjs/core';
export declare class AuthenticationGuard implements CanActivate {
    private readonly reflector;
    private readonly accessTokenGuard;
    private static readonly defaultAuthType;
    private readonly authTypeGuardMap;
    constructor(reflector: Reflector, accessTokenGuard: AccessTokenGuard);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
