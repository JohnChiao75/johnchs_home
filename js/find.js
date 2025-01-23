var curTag = 'All';
function searchBlogs() {
	var searchText = document.getElementById('search-input').value.toLowerCase();
	var articles = document.querySelectorAll('.article');
	
	articles.forEach(function(article) {
		article.style.display = 'none';
	});
	
	articles.forEach(function(article) {
		var articleTitle = article.querySelector('h1').innerText.toLowerCase();
		var articleTag = article.querySelector('li').innerText;
		if (articleTitle.includes(searchText) && (articleTag == curTag || curTag == 'All')) {
			article.style.display = 'block';
		}
	});
}
function tagFilter(tarTag) {
	curTag = tarTag;
	searchBlogs();
}

document.getElementById('tags-dropdown').addEventListener('change', function() {
    var selectedValue = this.value; // 获取选中的值
    tagFilter(selectedValue); // 调用 tagFilter 函数并传递选中的值
});