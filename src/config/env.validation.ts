import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, validateSync } from 'class-validator';

enum Environment {
    Development = 'development',
    Production = 'production',
    Test = 'test',
    Provision = 'provision',
}

class EnvironmentVariables {
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsNumber()
    @Min(0)
    @Max(65535)
    @IsOptional()
    PORT: number = 3000;

    @IsString()
    @IsNotEmpty()
    DB_HOST: string;

    @IsString()
    @IsNotEmpty()
    DB_NAME: string;

    @IsString()
    @IsNotEmpty()
    DB_USER: string;

    @IsString()
    @IsNotEmpty()
    DB_PASSWORD: string;

    @IsNumber()
    @Min(0)
    @Max(65535)
    @IsOptional()
    DB_PORT: number = 5432;

    @IsNumber()
    @Min(1)
    @IsOptional()
    DB_CONNECTION: number;

    @IsNumber()
    @Min(1)
    @IsOptional()
    DB_CONNECTION_MIN: number;

    @IsString()
    @IsOptional()
    DB_REPLICA_HOST: string;

    @IsNumber()
    @Min(1)
    SCHEDULER_DB_POOL_MAX: number;

    @IsNumber()
    @Min(1)
    SCHEDULER_DB_POOL_MIN: number;
}

export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
        skipMissingProperties: false,
    });

    // if (errors.length > 0) {
    //     throw new Error(errors.toString());
    // }

    return validatedConfig;
}
