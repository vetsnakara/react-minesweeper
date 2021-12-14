let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Permission = "admin" | "user" | "manager";

type Permissions = [Permission, Permission];

type PermissionWithoutAdmin = Exclude<Permission, "admin">;

const permWithoutAdmin: PermissionWithoutAdmin = "user";

interface DepartmentsForPermission {
    depName: string;
    lvl: number;
}

const DepsForPerms: Record<Permission, DepartmentsForPermission> = {
    admin: {
        depName: "Security",
        lvl: 10,
    },
    user: {
        depName: "Sales",
        lvl: 5,
    },
    manager: {
        depName: "Sales",
        lvl: 6,
    },
};

const perm: Permissions = ["admin", "user"];

type BasicUser<A = boolean, P = string[]> = {
    name: string;
    surname: string;
    age: number;
    isAdmin: A;
    permissions?: P;
};

type BasicUserReadonly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;
type BasicUserReadonlyRequrid = Readonly<Required<BasicUser>>;

type BasisUserWithoutPermissions = Omit<BasicUser, "permissions">;

type AdvancedUser = {
    account: number;
};

type FullUser<A = boolean, P = Permissions> = BasicUser<A, P> & AdvancedUser;

interface UserWithPermissions extends BasicUser {
    permissions: string[];
}

const fullUser: FullUser<boolean, Permissions> = {
    name: "Name",
    surname: "Surename",
    age: 12,
    account: 1,
    isAdmin: true,
    permissions: ["admin", "user"],
};

const user: BasicUser<number> = {
    name: "Kostya",
    surname: "Arak",
    age: 40,
    isAdmin: 1,
};

const userWithPermissions: BasicUser = {
    name: "Kostya",
    surname: "Arak",
    age: 40,
    isAdmin: true,
    permissions: ["one", "two"],
};
type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => {
    return a * b;
};

const add: MathFunc = (a, b) => {
    return a + b;
};

const usersArray: BasicUser<number>[] = [user, user, user];

function getFirst<T>(items: T[]): T {
    return items[0];
}

const firstUser = getFirst<BasicUser<number>>(usersArray);

type BasicFunction = () => FullUser[];
type GetFirstReturnType = ReturnType<BasicFunction>;

const basicFunction: BasicFunction = () => [fullUser];

const result: GetFirstReturnType = basicFunction();

firstUser.name = "Hello";

const logFunction = (data: unknown): never => {
    const data2: unknown = data;
    console.log(data);
    console.log(data2);

    throw new Error("Bad!");

    // while (true) {
    //     console.log("Hi");
    // }
};

export {};
