import { expect } from 'chai';
import { List } from 'immutable';

describe ('immutability', () => {
	describe ('A List', () => {
 
		function addMovie (currentState, newValue) {
			return currentState.push (newValue);
		};

		it ('is  immutable', () => {
			let state = List.of ('One','Two','Three');
			state = state.insert (0,'a');

			console.log (state)
			expect (state).to.equal (List.of (
				'One','Two','Three','a'
			));
		});
	});
});