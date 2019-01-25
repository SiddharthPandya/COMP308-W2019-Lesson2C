module objects {

    export class Student extends Person {
        //private instance variables
        private _studentID: string;

        //public properties
        get studentID(): string {
            return this._studentID;
        }

        set studentID(newID: string) {
            this._studentID = newID;
        }

        //constructor
        constructor(age: number, name: string, StudentID: string) {
            super(age, name);

            this.studentID = StudentID;
        }

        //private methods

        //public methods
        public studies(): void {
            console.log(`%c ${this.name} is studying and has a student ID ${this.studentID}`, "font-size: 10px; color: red;");
        }
    }
}