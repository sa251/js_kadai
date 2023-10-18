
for (let i = 1; i <= 50; i++) {

  if (i % 4 == 0 && i % 10 == 0) {
    console.log("今" + i + "回ループしました。" + "4で割れる数です" + i);
  } else if (0 == i % 10) {
    console.log("今" + i + "回ループしました。");
  } else if (i % 4 == 0) {
    console.log("4で割れる数です" + i);
  }
  else {
    console.log(i);
  }
  if (i == 50) {
    alert("50回カウントが終わりました。");
  }
}

