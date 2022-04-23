import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class Home {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	price: string;

	@Column()
	bedrooms: string;
	
	@Column()
	bathrooms: string;

	@OneToOne(() => Profile, profile => profile.rentedHome)
	profile: Profile;
}