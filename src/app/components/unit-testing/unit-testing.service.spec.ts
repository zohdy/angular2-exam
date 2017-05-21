import {UnitTestingService} from './unit-testing.service';


describe('Unit Service Tests', () => {
    let service: UnitTestingService = new UnitTestingService();

    it('Should return a list of the first 3 items', () => {
        let items = service.getItems(3);

        expect(items).toEqual(['item 1', 'item 2', 'item 3']);
    });

   it('Should get all items available', () => {
        let items = service.getItems(1000);

        expect(items).toEqual(['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7' +
                      'item 8', 'item 9', 'item 10']);
    });
});
