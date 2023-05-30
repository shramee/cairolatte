import * as Realm from "realm-web";

export interface FuncDoc {
    _id: string;
    name: string;
    desc: string;
    repo: string;
    path: string;
    code: string;
}

export type FuncsCollection =
    globalThis.Realm.Services.MongoDB.MongoDBCollection<FuncDoc>;
