const textarea = document.querySelector('.textarea')
const markdown = document.querySelector('.markdown')
textarea.addEventListener('keyup', function(e) {
	markdown.innerHTML = marked(e.target.value)
})
