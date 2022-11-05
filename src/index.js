import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Lodash from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const search = document.querySelector('#search-box')
const list = document.querySelector('#country-list')
const info = document.querySelector('#country-info')

search.addEventListener('input', Lodash(searchQuery, DEBOUNCE_DELAY));

function searchQuery() {
	console.log(search.value);
}