import {Domain} from "../../domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";
import {GenericMapper} from "../../../mapper/generic.mapper";

export class User implements Domain {
    private readonly _name: Name;
    private readonly _surname: Surname;

    public constructor(name: Name, surname: Surname) {
        this._name = name;
        this._surname = surname;
    }

    public get name(): string {
        return this._name.name;
    }

    public get surname(): string {
        return this._surname.surname;
    }

    public toDTO(): Hashmap  {
        return GenericMapper.toHashmap(this);
    }

    public whoAmI(): String {
        return this.name + " " + this.surname;
    }
}
