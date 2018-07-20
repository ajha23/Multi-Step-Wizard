export class FormData {
    senderAddress:Address=new Address();
    receiverAddress:Address=new Address();
    weight: number = 0;
    shippingoption: string ='';
    rate: number=0;
    clear() {
        this.senderAddress=new Address();
        this.receiverAddress=new Address();
        this.weight = 0;
        this.shippingoption = '';
        this.rate=0;
    }
}


export class Address {
    name: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

