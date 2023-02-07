import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  username: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  password: string;
}

export { LoginDTO };
