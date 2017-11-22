interface House {
    bedrooms: number;
    bathrooms: number;
}
interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}
let  myVilla: House = {
    bedrooms: 3,
    bathrooms: 3,
 //   butlers: 1
};

 let  mansion1: Mansion = <Mansion>myVilla;   //  convert House to Mansion
 console.log("mansion1: ",  mansion1);