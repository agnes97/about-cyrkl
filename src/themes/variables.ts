interface deviceProps {
	mobile: string
	ipad: string
	desktop: string
}

export const device: deviceProps = {
	mobile: `(max-width: 44em)`,
	ipad: `(min-width: 45em)`,
	desktop: `(min-width: 77em)`,
}

export const colorPalette: { [key: string]: string } = {
	backgroundPrimaryColor: 'hsl(0, 0%, 100%)',
	textPrimaryColor: 'hsl(0, 0%, 0%)',
	accentPrimaryColor: 'hsl(145, 86%, 34%)',
}
