class Pixels {
	/**
	 * Sets up the pixels class.
	 * @param {*} dom - The dom element to append the canvas to.
	 */
	constructor (dom) {
		// Settings
		this.dom = dom;
		this.canvas;
		this.width;
		this.height;
		this.ctx;
	}

	/**
	 * Creates a canvas element and sets the width and height of the canvas.
	 * @param {int} width - The width of the canvas.
	 * @param {int} height - The height of the canvas.
	 */
	useCanvas (width = 400, height = 400) {
		this.canvas = document.createElement('canvas');

		this.canvas.width = width;
		this.canvas.height = height;

		this.ctx = this.canvas.getContext('2d');
		this.dom.appendChild(this.canvas);
	}
}