export class Tree {
    public id: string;
    public _id: string;

    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public birthDate: string,
        public birthPlace: string,
        public deathDate: string,
        public deathPlace: string,
        public motherFirstName: string,
        public motherLastName: string,
        public fatherFirstName: string,
        public fatherLastName: string,
        public imageUrl: string
    ){

       
    }

}