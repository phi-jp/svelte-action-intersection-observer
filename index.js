
let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		let target = entry.target;
		target.__intersectionObserverCallback(entry);
	})
});

export function intersectionObserver(node, callback) {
	node.__intersectionObserverCallback = callback;
	observer.observe(node);
	
	return {
		destroy() {
			observer.unobserve(node);
		}
	}
};