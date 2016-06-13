import chai from 'chai';

import { helloWorld } from './app';

const expect = chai.expect;

describe('hellowWorld', () => {
	it('says "hello world"', () => {
		expect(helloWorld()).to.equal('hello world');
	});
});