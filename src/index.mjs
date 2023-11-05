import "./styles.css";

const onclickAdd = () => {
  // テキストボックス値取得、のち初期化
  const input = document.getElementById('input-form').value;
  document.getElementById('input-form').value = '';
  
  // div生成
  const div = document.createElement('div');
  div.className = 'list-row';

  // li生成
  const li = document.createElement('li');
  li.innerText = input;
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    // 要素を新規作成
    const newLi = document.createElement('li');
    newLi.innerText = completeButton.parentNode.firstChild.innerText;
    const newDiv = document.createElement('div');
    newDiv.className = 'list-row';
    const returnButton = document.createElement('button');
    returnButton.innerText = '戻す';
    returnButton.addEventListener('click', () => {
      deleteFromList(returnButton, document.getElementById('completed-ul'))
      const newLi2 = document.createElement('li');
    newLi2.innerText = returnButton.parentNode.firstChild.innerText;
    const newDiv2 = document.createElement('div');
    newDiv2.className = 'list-row';
    //追加
    newDiv2.appendChild(newLi2);
    newDiv2.appendChild(completeButton);
    newDiv2.appendChild(deleteButton);
    document.getElementById('incompleted-ul').appendChild(newDiv2);


    });
    //追加
    newDiv.appendChild(newLi);
    newDiv.appendChild(returnButton);
    document.getElementById('completed-ul').appendChild(newDiv);
    // 未完了リストから削除する
    deleteFromList(deleteButton, document.getElementById('incompleted-ul'));

  })
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => deleteFromList(deleteButton, document.getElementById('incompleted-ul')));
  
  // liをdivの子要素として格納
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // divをulの子要素として格納
  document.getElementById('incompleted-ul').appendChild(div);
}
document
  .getElementById('add-button')
  .addEventListener("click", () => onclickAdd());

// 引数で指定されたボタン要素が属するTODOを未完了リストから削除
const deleteFromList = (button, ul) => {
  const deleteTargetRow = button.parentNode;
    ul.removeChild(deleteTargetRow);
}