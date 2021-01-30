// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let arr = [name]
    let new_arr = drivers.concat(arr)
    return new_arr
}

function prependDriver(name){
    let new_arr = [name, ...drivers]
    return new_arr
}

function removeLastDriver(){
    let new_arr = drivers.slice(0,2)
    return new_arr
}

function removeFirstDriver(){
    let new_arr = drivers.slice(1)
    return new_arr
}