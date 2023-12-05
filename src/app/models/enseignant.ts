export class Enseignant {
    public id: number;
    private nom: string;
    private prenom: string;
    private titularisation: string;

    constructor(id: number, nom: string, prenom: string, titularisation: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.titularisation = titularisation;
    }

    public getNom(): string{
        return this.nom;
    }
    public setNom(): string {
        this.nom = nom
    }   
}
