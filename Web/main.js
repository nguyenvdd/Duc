const createBtn = document.querySelector('.create')
const list = document.querySelector('.list-group')
const block = document.querySelector('.block')
const addItemBtn = document.querySelector('#addItem')
const itemBlock = document.querySelector('.block .item')
const listItem = document.querySelector('.list_item')

const array =[] ;
createBtn.addEventListener('click', function(){
    block.style.display = `block` ;
})

addItemBtn.onclick = function () {
    listItem.innerHTML = listItem.innerHTML +
    `
    <tr>
        <td>${document.querySelector('.name').value} </td>
        <td>${document.querySelector('.time').value} </td>
        <td>
            <input type="checkbox">
        </td>
        `
        block.style.display = `none` ;
    }
