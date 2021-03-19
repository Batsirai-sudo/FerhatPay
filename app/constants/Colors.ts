const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const white = {
	whiteOp1: 'rgba(255,255,255,0.1)',
	whiteOp2: 'rgba(255,255,255,0.2)',
	whiteOp3: 'rgba(255,255,255,0.3)',
	whiteOp4: 'rgba(255,255,255,0.4)',
	whiteOp5: 'rgba(255,255,255,0.5)',
	whiteOp6: 'rgba(255,255,255,0.6)',
	whiteOp7: 'rgba(255,255,255,0.7)',
	whiteOp8: 'rgba(255,255,255,0.8)',
	whiteOp9: 'rgba(255,255,255,0.9)',
	whiteOp10: 'rgba(255,255,255,1)',
};

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
		white,
		gray1: '#f2f2f2', // gray5
		gray2: '#E9E9E9', // gray4
		gray3: '#BDBDBD', // gray2
		gray4: '#80879A', // second
		gray5: '#1D2338', // black
		gray6: '#F6F8FB', // gray6
		gray7: '#3A3B3C', // gray4 dark
		gray8: '#242526', // gray2 dark
		gray9: '#B0B3B8', // gray2 dark
		gray10: '#18191A', // gray2 dark
		gray11: '#E1E3E8', // gray5 dark
		black: '#000000',
		blue: '#0B69FF',
		cyan: '#56CCF2',
		aqua: '#00B8D4',
		green: '#2BBD69',
		orange: '#F2994A', // Orange
		darkOrange: '#FF5200', // orange
		yellow: '#FDC309',
		red: '#DA291C',
		navy: '#005082',
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
	},
};
