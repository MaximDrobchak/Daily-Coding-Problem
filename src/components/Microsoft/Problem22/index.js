import React from "react";
import styled from "styled-components";

const Problem22 = () => (
  <div>
    <Data />
  </div>
);

const Data = () => (
  <div>
    <h3>Эта проблема задавалась Microsoft. </h3>
    <p>
      Учитывая словарь слов и строку из этих слов (без пробелов), вернуть
      первоначальный приговор в списке. Если есть более чем одна возможная
      реконструкция, возвращение любого из них. Если нет никакой возможности
      восстановления, а затем вернуть нуль.
    </p>
    <p>
      Например, если набор слов 'quick', 'brown', 'the', 'fox', and the string
      "thequickbrownfox", вы должны вернуться ['the', 'quick', 'brown', 'fox'].
    </p>
    <p>
      Учитывая набор слов 'bed', 'bath', 'bedbath', 'and', 'beyond', и строка
      "bedbathandbeyond", возвращать либо ['bed', 'bath', 'and', 'beyond] или
      ['bedbath', 'and', 'beyond'].
    </p>
  </div>
);

export default Problem22;
