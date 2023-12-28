//your code here
let bandNames = ['The Rolling Stones', 'Arctic Monkeys', 'The Beatles', 'Queen'];

function sortBandNames(bandNames) {
	const articles = ['a','an','the'];

	function customSort(a,b) {
		const removeArticle = (name) => name.toLowerCase().replace(/^(a|an|the)\s+/i, '');

		const nameA = removeArticle(a);
		const nameB = removeArticle(b);

		if(nameA < nameB) {
			return -1;
		}else if(nameA > nameB) {
			return 1;
		}else {
			return 0;
		}
	}

	const sortedBandNames = bandNames.sort(customSort);

	const bandList = document.getElementById('band');
	sortedBandNames.forEach((band) => {
		const listItem = document.createElement('li');
		listItem.textContent = band;
		bandList.appendChild(listItem);
	});
}

sortBandNames(bandNames);

