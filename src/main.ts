

/*********************************/
interface Musician {
    name: string,
    instrument: string,
    play(action: string):string
}

class Guitarist implements Musician {
    name : string
    instrument: string
    constructor(
        name:string, instrument: string
    ){
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const page = new Guitarist('jimmy', 'guitar')
console.log(page.play('strums'));

class Bands {
    private dataState: string[]
    constructor(){
        this.dataState = []
    }
    public get data(): string[]{
        return this.dataState;
    }
    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el=> typeof el === 'string')){
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', "Led Zep" ]
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);

