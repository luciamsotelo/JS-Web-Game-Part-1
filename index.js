

// let obj = document.createElement('img')
// obj.src = 'assets/green-character.gif'
// obj.style.position = 'fixed'
// obj.style.left = '100px'
// obj.style.bottom = '100px'
// document.body.append(obj)

// let obj= document.createElement('img')
// obj.src = 'assets/pine-tree.png'
// obj.style.position = 'fixed'
// obj.style.left = '450px'
// obj.style.bottom = '200px'
// document.body.append(obj)


function newImage(imageURL, left, bottom){
    let obj= document.createElement('img')
    obj.src = imageURL
    obj.style.position = 'fixed'
    obj.style.left = left + 'px'
    obj.style.bottom = bottom + 'px'
    document.body.append(obj) 
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

let obj = document.createElement('img')
obj.src = 'assets/sword.png'
obj.position = 'fixed'
obj.left = '500px'
obj.bottom = '405px'
document.body.append(obj)

obj.addEventListener('dblclick', function(){
    obj.remove()
})


function newItem(imageURL, left, bottom){
    let obj= document.createElement('img')
    obj.src = imageURL
    obj.style.position = 'fixed'
    obj.style.left = left + 'px'
    obj.style.bottom = bottom + 'px'
    document.body.append(obj) 
}

newItem('assets/sword.png', 500,405)
newItem('assets/shield.png', 165,180)
newItem('assets/staff.png', 600,100)
