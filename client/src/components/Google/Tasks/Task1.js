import React from 'react';
import { AnswerFunction } from '../../Elements';
const Task1 = () => (
	<div>
		<p>
			Учитывая список чисел и число k , возвращать два числа из
			списка добавить до k .<br />
			Например, с учетом <code>[10, 15, 3, 7]</code> , и k из 17
			, возвращает истину , так как 10 + 7 является 17 .
		</p>
		<AnswerFunction />
	</div>
);

export default Task1;
