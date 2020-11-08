export function loadImgs(imgs) {
	const promises = imgs.map((img) => {
		return new Promise((resolve) => {
			const imgTag = new Image(); // Create new img element
			imgTag.src = img;
			imgTag.addEventListener("load", resolve);
		});
	});

	return Promise.all(promises);