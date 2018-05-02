describe('isDegreeSequence', () => {
  it('should be a function', () => {
    expect(isDegreeSequence).toEqual(jasmine.any(Function));
  });

  it('should return false when argument is not an array', () => {
    expect(isDegreeSequence()).toBe(false);
  });

  it('should return false when argument empty', () => {
    expect(isDegreeSequence([])).toBe(false);
  });

});