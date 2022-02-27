//

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isWall;
        this.parent;
        this.object;
        this.isStart;
        this.isEnd;

        this.gCost = Infinity;
        this.hCost;
        this.fCost;
    }
}

let size = 15;

const stepLinear = 10;
const stepDiagonal = 14;

let nodeArray = new Array();

let table = document.getElementById('game');


function createArea() {

    for (let row = 0; row < size; row++) {

        let tempRowNodeArr = new Array();
        let tempRowObjectArr = document.createElement('tr');

        for (let col = 0; col < size; col++) {
            let tempNode = new Node(row, col);
            let tempObject = document.createElement('td');
            tempObject.setAttribute('id', `${row},${col}`);
            tempObject.setAttribute('class', 'square');
            tempObject.setAttribute('onclick', 'clickNode(this.id)');
            tempRowObjectArr.appendChild(tempObject);
            tempNode.object = tempObject;

            if (row == 0 || row == (size - 1) || col == 0 || col == (size - 1)) {
                tempObject.classList.add('wall');
                tempNode.isWall = true;
            }
            tempRowNodeArr.push(tempNode);
        }
        nodeArray.push(tempRowNodeArr);

        table.appendChild(tempRowObjectArr);
    }
}
createArea();

let wasStartSelected = false;
let wasEndSelected = false;
let wasGameStarted = false;

let startNode;
let endNode;

function clickNode(id) {

    let clicked = document.getElementById(id);

    if (!wasStartSelected) {
        for (let i = 0; i < nodeArray.length; i++) {
            for (let j = 0; j < nodeArray[i].length; j++) {
                if (clicked == nodeArray[i][j].object) {
                    nodeArray[i][j].isStart = true;
                    startNode = nodeArray[i][j];
                    nodeArray[i][j].object.classList.add('start-square');
                }
            }

        }
        wasStartSelected = true;
        return;
    } else if (!wasEndSelected) {
        for (let i = 0; i < nodeArray.length; i++) {
            for (let j = 0; j < nodeArray[i].length; j++) {
                if (clicked == nodeArray[i][j].object) {
                    nodeArray[i][j].isEnd = true;
                    endNode = nodeArray[i][j];
                    nodeArray[i][j].object.classList.add('end-square');
                }
            }

        }
        wasEndSelected = true;
        return;
    } else if (!wasGameStarted) {
        for (let i = 0; i < nodeArray.length; i++) {
            for (let j = 0; j < nodeArray[i].length; j++) {
                if (clicked == nodeArray[i][j].object) {
                    if (clicked != endNode.object && clicked != startNode.object) {
                        nodeArray[i][j].isWall = true;
                        nodeArray[i][j].object.classList.add('wall');
                    }
                }
            }

        }
    }


}

function calculateDistance(currentNode, targetNode) {
    let xDiff = Math.abs(currentNode.x - targetNode.x);
    let yDiff = Math.abs(currentNode.y - targetNode.y);

    let rem = Math.abs(xDiff - yDiff);

    return stepDiagonal * Math.min(xDiff, yDiff) + stepLinear * rem;
}

let tempNode = new Node(null, null);
tempNode.fCost = Infinity;

function calculateSmallestCost(list) {
    let smallest = tempNode;
    list.forEach(node => {

        // node.hCost = calculateDistance(node, endNode);
        // node.gCost = calculateDistance(node, startNode);
        // node.fCost = node.gCost + node.hCost;

        if (node.fCost < smallest.fCost) {
            console.log(`${node.fCost} < ${smallest.fCost}`);
            smallest = node;
        }
    });
    console.log(smallest.fCost);
    if (smallest != startNode || smallest != endNode) {
        smallest.object.style.backgroundColor = 'yellow';
    }

    return smallest;
}


function startGame() {
    wasGameStarted = true;

    let open = new Array();
    let closed = new Array();
    open.push(startNode);

    startNode.gCost = 0;
    startNode.hCost = calculateDistance(startNode, endNode);
    startNode.fCost = startNode.gCost + startNode.hCost;

    let temp = 5;
    while (open.length > 0) {
        console.log(open);
        currentNode = calculateSmallestCost(open);
        currentNode.object.innerHTML = `${currentNode.fCost}`;
        open.splice(open.indexOf(currentNode));
        closed.push(currentNode);

        if (currentNode == endNode) {
            console.log('found end node.');
            tracePath();
            break;
        }


        let neighbours = getNeighbours(currentNode);

        neighbours.forEach(node => {
            node.hCost = calculateDistance(node, endNode);
            node.gCost = calculateDistance(node, startNode);
            node.fCost = node.gCost + node.hCost;
            node.parent = currentNode;

            let newCost = currentNode.gCost + calculateDistance(currentNode, node);
            if (newCost < node.gCost) {
                node.gCost = newCost;
                node.parent = currentNode;
            }



            if (!open.includes(node) && !closed.includes(node)) {
                open.push(node);
            }



        });
        temp--;
    }
}

function tracePath() {
    let currentNode = endNode;
    let timer = 100;
    while (timer > 0) {
        console.log(currentNode.parent);
        if (currentNode != endNode && currentNode != startNode) {
            currentNode.object.style.backgroundColor = 'aqua';
        }
        currentNode = currentNode.parent;
        timer--;
    }
}

function getNeighbours(node) {
    let array = new Array();

    if (node.x - 1 > 0) {
        if (!(nodeArray[node.x - 1][node.y].isWall)) {
            array.push(nodeArray[node.x - 1][node.y]);
        }
        if (node.y - 1 > 0) {
            if (!(nodeArray[node.x - 1][node.y - 1].isWall)) {
                array.push(nodeArray[node.x - 1][node.y - 1]);
            }
        }
        if (node.y + 1 < size) {
            if (!(nodeArray[node.x - 1][node.y + 1].isWall)) {
                array.push(nodeArray[node.x - 1][node.y + 1]);
            }
        }
    }
    if (node.x + 1 < size) {
        if (!(nodeArray[node.x + 1][node.y].isWall)) {
            array.push(nodeArray[node.x + 1][node.y]);
        }
        if (node.y + 1 < size) {
            if (!(nodeArray[node.x + 1][node.y + 1].isWall)) {
                array.push(nodeArray[node.x + 1][node.y + 1]);
            }

        }
        if (node.y - 1 > 0) {
            if (!(nodeArray[node.x + 1][node.y - 1].isWall)) {
                array.push(nodeArray[node.x + 1][node.y - 1]);
            }
        }
    }
    if (node.y - 1 > 0) {
        if (!(nodeArray[node.x][node.y - 1].isWall)) {
            array.push(nodeArray[node.x][node.y - 1]);
        }
    }
    if (node.y + 1 < size) {
        if (!(nodeArray[node.x][node.y + 1].isWall)) {
            array.push(nodeArray[node.x][node.y + 1]);
        }
    }

    return array;
}






let nodes = new Array();



































// function selectNode(oldClassName, newClassName) {

//     if (!wasStartSelected) {
//         for (let row = 0; row < nodeArray.length; row++) {

//             for (let col = 0; col < nodeArray[row].length; col++) {
//                 let n = nodeArray[row][col];
//                 if (n.isWall) {
//                     continue;
//                 } else {
//                     if (oldClassName != null) {
//                         n.object.classList.remove(oldClassName);
//                     }
//                     n.object.classList.add(newClassName);
//                 }
//             }
//         }
//     }
// }