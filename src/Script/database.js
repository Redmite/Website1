let database = [];

export function saveData(data) {
database.push(data);
return database;
}

export function getData() {
return database;
}