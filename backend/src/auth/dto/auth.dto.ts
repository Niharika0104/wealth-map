import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  region: string;

  @IsString()
  phone_number?: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class MfaVerifyDto {
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class ChangeRoleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  role: string;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  currentPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  newPassword: string;
}

export class SetupMfaDto {
  @IsNotEmpty()
  @IsString()
  method: string;
}

export class VerifyMfaSetupDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  secret: string;
}
