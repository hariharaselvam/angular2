class User {
    private name: string;
    protected email: string;
    public age: number;

    constructor(name: string, email: string, age: number ){
        this.name = name;
        this.email = email;
        this.age = age ;

        console.log("User created: " + this.name);
    }

    private register(){ console.log("User reg: " + this.name);}
    protected payFees(){console.log("User paid: " + this.name);}
}

let raj = new User("Raj", "raj@gmail.com", 23) ;
console.log(raj.age);


class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number ){
        super(name, email, age);
        this.id = id ;
    }

    payFees(){super.payFees();}
}

let varun = new Member( 2, "Varun", "varun@gmail.com", 24) ;
varun.payFees();