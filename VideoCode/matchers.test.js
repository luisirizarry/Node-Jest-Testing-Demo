describe('test matchers', function(){
  test('compare toBe and toEqual', function(){
    const nums = [1, 2, 3, 4, 5];
    const copy = [...nums];

    expect(nums).toEqual(copy);
    // Not the same object, different references
    // expect(nums).toBe(copy);
    // Not the same object, different references, so true
    expect(nums).not.toBe(copy);
  })

  test('playing with toContain', function(){
    const nums = [1, 2, 3, 4, 5];
    expect(nums).toContain(3);
    expect(nums).not.toContain(6);
  })

  test('playing with numeric matchers', function(){
    const num = 3.14;
    expect(num).toBeGreaterThan(3);
    expect(num).toBeLessThan(4);
    expect(num).toBeCloseTo(3.1, 1);
  })

  test('playing with any', function(){
    const randNum = Math.random() * 6;
    expect(randNum).toEqual(expect.any(Number))
    expect("HUHUHUH").toEqual(expect.any(String))
  })

  test('playing with not', function(){
    const numLives = 9;
    expect(numLives).not.toEqual(6)
    expect(numLives).not.toBe(String)
  })
})