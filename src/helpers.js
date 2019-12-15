export function ratioToPercentage(ratio) {
	return (ratio * 100).toFixed(2) + "%";
}

export const tierValueOrder = {
	null: { 0: -1 },
	cloud: { 2: 0, 3: 1, 4: 2 },
	crystal: { 2: 0, 4: 2 },
	desert: { 2: 0, 4: 2 },
	electric: { 2: 0, 3: 1, 4: 2 },
	glacial: { 2: 0, 4: 1, 6: 2 },
	inferno: { 3: 0, 6: 1, 9: 2 },
	light: { 3: 0, 6: 1, 9: 2 },
	mountain: { 2: 2 },
	ocean: { 2: 0, 4: 1, 6: 2 },
	poison: { 3: 2 },
	shadow: { 2: 0, 4: 2 },
	steel: { 2: 0, 3: 1, 4: 2 },
	woodland: { 3: 2 },
	alchemist: { 1: 2 },
	assassin: { 3: 0, 6: 2 },
	avatar: { 1: 2 },
	berserker: { 3: 0, 6: 2 },
	blademaster: { 2: 0, 4: 1, 6: 2 },
	druid: { 2: 2 },
	mage: { 3: 0, 6: 2 },
	mystic: { 2: 0, 4: 2 },
	predator: { 3: 2 },
	ranger: { 2: 0, 4: 1, 6: 2 },
	summoner: { 3: 0, 6: 2 },
	warden: { 2: 0, 4: 1, 6: 2 }
};
