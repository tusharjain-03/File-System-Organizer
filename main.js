#!/usr/bin/env node
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");

let inputArr = process.argv.slice(2);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];
let dirPath = inputArr[1];

switch(command){
    case "tree":
        treeObj.treeKey(dirPath);
        break;
    case "organize":
        organizeObj.organizeKey(dirPath);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please Input Right Command");
}