class Pixels {
	/**
	 * Sets up the pixels class.
	 * @param {HTMLElement} dom - The dom element to append the canvas to.
	 */
	constructor (dom) {
		this.dom = dom;
		this.canvas;
		this.width;
		this.height;
		this.ctx;
	}

	run() {
		if (this._preload) this._preload();
		if (this._setup) this._setup();
	}

	preload (cb) {
		this._preload = cb;
	}

	setup (cb) {
		this._setup = cb;
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

	/**
	 * Sets the background color of the canvas.
	 * @param {string} color - The color to set the background to.
	 */
	setBackground (color = '#000000ff') {
		if (this.canvas) this.canvas.style.backgroundColor = color;
		else console.error(new Error('No canvas found.'));
	}
}