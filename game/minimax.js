const heuristic = require('../heuristics')['naive']

const getNextMove = (board, blockers, depth) => {
    const root = new Tree(heuristic(board, blockers))
    let leaves = [root]
    while (depth >= 0) {
        newLeaves = []
        while (leaves.length > 0) {
            
        }
    }
}

class Tree {
    constructor(score) {
        this.score = score
        this.children = []
    }

    getMinChildren = () => {
        return Math.min(...this.children.map(child => child.score))
    }

    getMaxChildren = () => {
        return Math.max(...this.children.map(child => child.score))
    }

    getMaximin = () => {
        if (this.children.length == 0) {
            return this.score
        }
        else {
            return Math.max(...this.children.map(child => child.getMinimax()))
        }
    }

    getMinimax = () => {
        if (this.children.length == 0) {
            return this.score
        }
        else {
            return Math.min(...this.children.map(child => child.getMaximin()))
        }
    }
}