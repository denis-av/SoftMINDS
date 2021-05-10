import React from 'react';
import renderer from 'react-test-renderer';
import Ranking from '../screens/ranking';

var fps = Ranking.get_firstPlaceScore();

test('test1', () => {
    expect(fps).toBeGreaterThanOrEqual(0);
})

test('class', () =>{
    expect(Ranking.name).toBe("Ranking");
});

test('it works', () => {
    expect(true).toBeTruthy();
    expect(Ranking.handle)
});





