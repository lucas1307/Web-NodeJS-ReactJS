import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    Nome: string;
 
    @Column()
    RA: string;
 
    @Column({
        default: false
    })
    Matriculado: boolean;
 
    @Column({
        type: "date",
        nullable: true
    })
    Nascimento: Date;
 
    @Column()
    Idade: number;
    
    @Column()
    Endereço: string
}
