let obj={a:'one',b:'two',c:'three'};
let keys=Object.keys(obj);
console.log(keys);                      //it will display the key in the form of array


let ob={a:'one',b:'two',c:'three'};
let values=Object.values(ob);
console.log(values);                      //it will display the values in the form of array


let o={a:'one',b:'two',c:'three'};
let entries=Object.entries(o);
console.log(entries);                      //it will display both the key and values es8 feature for object manipulation

let oj={a:'one',b:'two',c:'three'};
let entries=Object.entries(oj);

for(let entry of entries)
{
  console.log(`key:${entry[0]},values:${entry[1]}`);
}
