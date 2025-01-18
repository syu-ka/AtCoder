// function copyButton(elementId) {

//     // 引数で得たIDの要素のテキストを取得
//     var element = document.getElementById(elementId);

//     // 上記要素をクリップボードにコピーする
//     navigator.clipboard.writeText(element.textContent)
// }



function submit(contest_name, copytxt2) {
    let contestNameElement = document.getElementById(contest_name);

    let txt2Element = document.getElementById(copytxt2);

    // フォームの入力内容にテキスト内容を変更.
    alert(txt2Element.textContent);
    txt2Element.textContent = "コピー内容" + contestNameElement.value;

}

function copyButton(elementId) {

    // 引数で得たIDの要素のテキストを取得
    var element = document.getElementById(elementId);

    // フォームの入力内容にテキスト内容を変更.
    // alert(contestNameElement.value);
    element.textContent = contestNameElement.value;

    // 上記要素をクリップボードにコピーする
    navigator.clipboard.writeText(element.textContent)
}