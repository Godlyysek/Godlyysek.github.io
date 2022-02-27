// a new and improved version of this program is being created. This one is not working but it gives an idea to how it works

let size = 15; // size of the array

const stepLinear = 10; // constants of costs of steps
const stepDiagonal = 14;


class Node {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.parent;
        this.object;
        this.fCost;
        this.gCost;
        this.hCost;
        this.isWall = false;
    }

}


let startNode;
let endNode;

let objectArray = new Array(); // array of specific element objects

let nodes = new Array(); // array of the same coordinate objects but this time with Nodes

let table = document.getElementById('game'); // import table element

function createTable() { // create 2 size*size arrays, into which we put all the elements and all the objects ( separately )
    for (let i = 0; i < size; i++) {
        let _row = [];
        let row = document.createElement('tr');
        let _nodes = new Array();
        for (let a = 0; a < size; a++) {
            let n = new Node(i, a);
            _nodes.push(n);

            let obj = document.createElement('td');
            obj.setAttribute('class', 'square temp');
            obj.setAttribute('id', `${i},${a}`);
            // obj.innerHTML = `${i},${a}`;
            obj.setAttribute('onclick', 'elementClicked(this.id)');
            n.object = obj;
            row.appendChild(obj);
            _row.push(obj);
        }
        objectArray.push(_row);
        nodes.push(_nodes);
        table.appendChild(row);
    }
}

function assignCost() { // calculate gCost and hCost based on distance from start and end Nodes

    for (let row = 0; row < nodes.length; row++) {
        for (let col = 0; col < nodes[row].length; col++) {
            nodes[row][col].gCost = calculateDistance(nodes[row][col], startNode);
            nodes[row][col].hCost = calculateDistance(nodes[row][col], endNode);
        }
    }
}

let clickedStart = false; // temporary variables
let clickedEnd = false;
let isRunning = false;

function elementClicked(id) {

    if (!clickedStart) { // do this if start node hasn't been selected yet
        // select an object as a start node
        let _t = document.getElementById(id);

        for (let row = 0; row < nodes.length; row++) {
            for (let col = 0; col < nodes[row].length; col++) {
                nodes[row][col].object.classList.remove('temp');
                nodes[row][col].object.classList.add('after');
            }
        }

        for (let row = 0; row < nodes.length; row++) {
            for (let col = 0; col < nodes[row].length; col++) {

                if (nodes[row][col].object == _t) {
                    startNode = nodes[row][col];
                    startNode.object.style.backgroundColor = 'rgb(67, 255, 34)';
                    clickedStart = true;
                    return
                }
            }
        }



    } else if (!clickedEnd) { // or do this if it has, but the end node hasn't
        // select an object as an end node
        let _t = document.getElementById(id);

        if (!(_t == startNode.object)) {

            for (let row = 0; row < nodes.length; row++) {
                for (let col = 0; col < nodes[row].length; col++) {
                    nodes[row][col].object.classList.remove('after');
                    nodes[row][col].object.classList.add('a');
                }
            }


            for (let row = 0; row < nodes.length; row++) {
                for (let col = 0; col < nodes[row].length; col++) {

                    if (nodes[row][col].object == _t) {
                        endNode = nodes[row][col];
                        endNode.object.style.backgroundColor = 'rgb(255, 0, 0)';
                        clickedEnd = true;
                        return
                    }
                }
            }
        }
    } else if (!isRunning) { // else do this if both have been selected but game hasn't been started yet
        // select an object to be a wall
        let _t = document.getElementById(id);

        for (let row = 0; row < nodes.length; row++) {
            for (let col = 0; col < nodes[row].length; col++) {

                if (nodes[row][col].object == _t) {
                    nodes[row][col].object.style.backgroundColor = 'grey';
                    nodes[row][col].isWall = true;
                }
            }
        }

    }

}

createTable(); // initialize the element array on screen

let tempNode = new Node(null, null); // node to be used to get the smallest fCost node
tempNode.fCost = Infinity;


function startGame() {

    let open = new Array(); // open array stores objects that are open to searching
    let closed = new Array(); // closed contains all the searched nodes

    open.push(startNode); // push start node as the first node

    startNode.gCost = 0;
    startNode.hCost = calculateDistance(startNode, endNode);
    startNode.fCost = startNode.hCost + startNode.gCost; // calculate costs


    function getSmallestCost() { // function to return the object in the array with the smallest fCost
        tempNode.fCost = Infinity;
        for (let i = 0; i < open.length; i++) {
            if (open[i].fCost < tempNode.fCost) {
                tempNode = open[i];
            }
        }
        return tempNode;
    }

    function calculateCosts(n) { // function to calculate gCost, hCost and then fCost and set the objects values to it

        let gc = calculateDistance(n, startNode);
        let hc = calculateDistance(n, endNode);
        n.gCost = gc;
        n.hCost = hc;
        n.fCost = gc + hc;

    }


    while (open.length > 0) { // while loop until it either finds the end node or runs out of nodes to search (in which case there is no path)
        let currentNode = getSmallestCost();
        currentNode.object.innerHTML = `${currentNode.fCost}`;
        currentNode.object.style.backgroundColor = 'yellow';

        if (currentNode == endNode) {
            console.log('found');
            break;
        }

        open.splice(open.indexOf(currentNode)); // remove current node from the open array
        closed.push(currentNode); // and add it to the closed one

        let neighbours = getNeighbours(currentNode); // get all valid neighbours of currentNode

        neighbours.forEach(element => { // for every neighbour calculate its cost and if the path from its parent is longer than from currentNode,
            //                             set the currentNode as its parent and recalculate gCost with the currentNode's gCost
            if (closed.includes(element) || element.isWall) {} else {

                calculateCosts(element);
                element.object.innerHTML = `${element.fCost}`;
                element.parent = currentNode;
                let newCost = currentNode.gCost + calculateDistance(currentNode, element);
                console.log('NEW NODE');
                console.log(currentNode);
                console.log(element);
                console.log(`current:${currentNode.gCost}, new:${newCost}`);

                if (newCost < element.gCost) {
                    console.log('a');
                    element.parent = currentNode;
                    element.gCost = newCost;
                    element.hCost = calculateDistance(element, endNode);
                    element.fCost = element.hCost + element.gCost;
                }
                if (!(open.includes(element))) {
                    open.push(element); // if the neighbour is not in the open list, add it
                }
            }
        });
    }

    findPath();
    startNode.object.style.backgroundColor = 'rgb(67, 255, 34)';
    endNode.object.style.backgroundColor = 'red';

    function findPath() { // trace every parent's parent starting from endNode to startNode
        let node = endNode;
        while (node != startNode) {
            node.object.style.backgroundColor = 'aqua';
            node = node.parent;
        }
    }
}


function calculateDistance(currNode, targetNode) {

    let xDiff = Math.abs(currNode.x - targetNode.x);
    let yDiff = Math.abs(currNode.y - targetNode.y);

    let rem = Math.abs(xDiff - yDiff);
    // currNode.object.innerHTML = `${stepDiagonal * Math.min(xDiff, yDiff) + stepLinear * rem}`
    return stepDiagonal * Math.min(xDiff, yDiff) + stepLinear * rem;
}


function getNeighbours(currN) {
    // checking every possible neighbour and returning an array with valid ones

    let arr = new Array();

    if (currN.x - 1 >= 0) {

        arr.push(nodes[currN.x - 1][currN.y]);
        // console.log(currN);
        // console.log(nodes[currN.x - 1][currN.y]);
        if (currN.y - 1 >= 0) {
            arr.push(nodes[currN.x - 1][currN.y - 1]);
        }
        if (currN.y + 1 <= size) {
            arr.push(nodes[currN.x - 1][currN.y + 1]);
        }
    }

    if (currN.x + 1 <= size) {
        arr.push(nodes[currN.x + 1][currN.y]);
        if (currN.y - 1 >= 0) {
            arr.push(nodes[currN.x + 1][currN.y - 1]);
        }
        if (currN.y + 1 <= size) {
            arr.push(nodes[currN.x + 1][currN.y + 1]);
        }
    }
    if (currN.y - 1 >= 0) {
        arr.push(nodes[currN.x][currN.y - 1]);
    }
    if (currN.y + 1 <= size) {
        arr.push(nodes[currN.x][currN.y + 1]);
    }
    return arr;
}

// function getNode(n) {

//     for (let row = 0; row < objectArray.length; row++) {
//         for (let col = 0; col < objectArray[row].length; col++) {
//             if (row == n.x && col == n.y) {
//                 return
//             }


//         }

//     }


// }

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('sleep');
            resolve()
        }, duration * 1000)
    })
}