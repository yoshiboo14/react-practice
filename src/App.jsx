import React, { useEffect, useState } from "react";
import { ColofulMessage } from "./conponents/colorfulMessage";

const App = () => {
  // １つ目にnumというstateの変数名、２つ目にsetNumというstateを更新するための関数名を記述
  // 0は変数numの初期値
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    //クリックされたときに変数numに反映したい値を（）に入れる
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    //現在の変数faceShowFlagに入っているもの（true,false）を逆にする処理を実行している
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //左側がfalseの場合に右側の処理を行ってくれる
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line　react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {/* &&の左側がtrueの場合に右側を返すという意味 */}
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
