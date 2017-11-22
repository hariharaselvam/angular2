    class Display { name: string = ''; }

    class Television extends Display { }

    class HiFi { }
    
    class Describer {
    static getName (obj : any) :string
    {
        return obj.constructor.name;
    }
    }
    
     var tv = new Television();
    var radio = new HiFi();

    var tvType = Describer.getName(tv);
    var radioType = Describer.getName(radio);
    console.log(tvType, radioType );