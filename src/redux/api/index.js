const axios = require('axios');

export const getMovie = params => {
	const URL = 'http://localhost:3001/movie-list/' + params.payload.currentPage;
	return axios.get(URL).then(response => {
		let searchResult;
		if (params && params.payload && params.payload.searchValue){
			searchResult = response.data.page.content_items.content.filter(item => item.name.toLowerCase().includes(params.payload.searchValue));
		} else {
			searchResult = response.data.page.content_items.content;
		} 
		return searchResult;
	});
};
