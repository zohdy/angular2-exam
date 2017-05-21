import { CapitalizePipe } from './capitalized.pipe';

describe('Pipe (Capitalize) Tests', () => {

    let capitalizePipe: CapitalizePipe;

    beforeEach(() => {
        capitalizePipe = new CapitalizePipe();
    });

    it('Should capitalize 1st word in a string', () => {
        let result = capitalizePipe.transform('capitalizeMe');

        expect(result).toEqual('CapitalizeMe');
    });
});
