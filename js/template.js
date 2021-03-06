export const conrtyTemplate = (
	number = 0,
	web_pages = "http://www.academy.sumy.ua/",
	name = "Ukrainian Academy of Banking",
	country = "Ukraine",
	alpha_two_code = "UA"
) =>
	`
<tr>
    <td>${number + 1}</td>
    <td>${web_pages}</td>
    <td>${name}</td>
    <td>${country}</td>
    <td>${alpha_two_code}</td>
    <td><input id='${number}' type="checkbox" class='checkBox' /></td>
</tr>
`;

export const delaultTemplate = () => `<tr>
<th>№</th>
<th>Ссылка на сайт университета</th>
<th>Название университета</th>
<th>Страна</th>
<th>Код страны</th>
<th>Сохранить в мой список</th>
</tr>`;
