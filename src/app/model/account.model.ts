
export class AccountModel {
    id: string = '';
    ntid: string = '';
    email: string = '';
    active: boolean = true;
    createdAt!: Date;
    modifiedAt!: Date;
    activeTime!: Date;
    detail: any;
}