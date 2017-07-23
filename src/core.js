import { List, Map } from 'immutable';

export function setEntries (state, entries) {
	return state.set ('entries', List (entries));
}

export function getWinners (vote) {
	if (!vote) return []
	const [a, b] = vote.get ('pair');
	const aV = vote.getIn (['tally', a], 0);
	const bV = vote.getIn (['tally', b], 0);
	if (aV > bV)
		return a;
	else if (bV > aV)
		return b;
	else	
		return [a,b];
}

export function next (state) {
	const entries = state.get ('entries').concat (getWinners (state.get('vote')));
	
	if (entries.size > 1)
		return state.merge ({
			vote: Map ({
				pair: entries.take (2)}
				),
				entries: entries.skip (2)
		});
	else
		return Map({
			winner: entries.get (0)
		})
}

export function vote (state, entry) {
	return state.updateIn (['vote','tally', entry], 0, tally => tally + 1);
}