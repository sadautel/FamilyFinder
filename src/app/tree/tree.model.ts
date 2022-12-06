export class Tree {
    public id: string;
    public firstName: string;
    public lastName: string;
    public birthDate: string;
    public deathDate: string;
    public imageUrl: string;

    constructor(id: string, firstName: string, lastName: string, birthDate: string, deathDate: string, imageUrl: string ){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.deathDate = deathDate
        this.imageUrl = imageUrl;

    }

}