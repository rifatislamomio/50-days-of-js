//Write a function to remove array element based on object property?

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    var filteredArray = [];

    for(data of array)
    {
        if(data.field!==filterField)
        {
            filteredArray.push(data)
        }
    }
    return filteredArray
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
