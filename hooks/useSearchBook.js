import React, { useState, useEffect } from 'react';
import { books } from '../constants';

export default function useSearchBook(search) {
	const [searchResult, setSearchResult] = useState();
	const [subtitle, setSubTitle] = useState();
	const [dat, setDat] = useState();

	const result = () => {
		setSubTitle();
		if (search.length > 0) {
			fetch(`${books.link}${search}${books.api}`)
				.then(response => response.json())
				.then(data => {
					if (data.totalItems > 0) {
						setDat(() => data.items[0]);
						setSearchResult(() => data.items[0].volumeInfo.title);
						setSubTitle(data.items[0].volumeInfo.subtitle);
					} else {
						setSearchResult(() => 'no items found');
					}
				});
		}
	};

	useEffect(() => {
		result();
	}, [search]);

	return { searchResult, subtitle, dat };
}
