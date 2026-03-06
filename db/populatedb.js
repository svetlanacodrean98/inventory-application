#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
drop table if exists drinks;

create table if not exists drinks (
    id integer primary key generated always as identity,
    name varchar (255)
);

insert into drinks (name)
    values ('Coffee'), ('Matcha Tea'), ('Black Chai'), 
    ('Milky Oolong Tea'), ('Thai Tea'), ('Mate Tea');

drop table if exists snacks;

create table if not exists snacks (
    id integer primary key generated always as identity,
    name varchar (255)
);

insert into snacks (name)
    values ('Beef Jerky'), ('Protein Bar'), ('Sriracha Coated Cashwes'), 
    ('Wasabi Coated Peanuts'), ('Sunflower Seeds');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgreqsl://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/my_shop`
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();