// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Maria.')
// fs.appendFileSync('notes.txt', 'Baia')
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)
// const getNotes = require('./notes.js')
// console.log(getNotes)
// const validator = require('validator')
// console.log(validator.isEmail('email.com'))
// console.log(validator.isURL('https/mead.io'))

// import chalk from 'chalk';

// console.log(chalk.green('Success'));
// console.log(chalk.blue.bgRed.bold("Maria")) //bold só funciona com cor
// console.log(chalk.blue("Success"))

// const command = process.argv[2]


// if (command === "add") {
    //     console.log("Adding note!")
    // } else if (command === "remove") {
        //     console.log("Removing note!")
        // }
        
const yargs = require("yargs")
// console.log(process.argv)
yargs.command({
    command: "add", 
    describe: "Add a new note", 
    builder: {
        title: { 
            describe:"Note title", 
            demandOption: true, 
            type:"string"
        },
        body: {
            describe:"Note body",
            demandOption: true, 
            type:"string"
        }}, 
    handler: (argv) => {
        console.log(`Title: ${argv.title}, Body: ${argv.body}`)
    }})

yargs.command({
    command: "remove", 
    describe: "Remove a note", 
    handler: () => {
        console.log("Removind the note!")
    }})

yargs.command({
    command: "list", 
    describe: "List a note", 
    handler: () => {
        console.log("Listing the note!")
    }})

yargs.command({
    command: "read", 
    describe: "Read a new note", 
    handler: () => {
        console.log("Reading the note!")
    }})
// console.log(yargs.argv)
yargs.parse()