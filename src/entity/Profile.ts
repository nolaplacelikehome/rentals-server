import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";
import { Home } from "./Home";

@Entity()
export class Profile {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userName: string;

	@OneToOne(() => User, user => user.profile)
	user: User; 

	@OneToOne(() => Home, home => home.profile)
	rentedHome: Home;
} 