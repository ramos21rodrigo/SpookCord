#!/usr/bin/env node

import chalk from "chalk"
import inquier from "inquirer"

let word
let board
let numberOfLines = 20
let emptyBoard

async function createBoard() {
	for (let i = 0; i < numberOfLines; i++)
		emptyBoard += " ".repeat(numberOfLines) + '\n'
}

async function boardGenerator() {
	
	let a = [chalk.red("nigga"),
		chalk.red("gfdgdfg"),
		chalk.red("nrqwrq"),]
	
	console.log("aa" + emptyBoard[4]  + "bb")
}

async function getWord() {
	const answer = await inquier.prompt({
		name: "word",
		type: "input",
		message: ">"
	})
	word = answer.word
}

await createBoard()
await boardGenerator()
await console.log(emptyBoard)
await getWord()