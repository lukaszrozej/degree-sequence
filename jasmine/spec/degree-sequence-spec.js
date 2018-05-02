describe('isDegreeSequence', () => {
  it('should be a function', () => {
    expect(isDegreeSequence).toEqual(jasmine.any(Function));
  });

  describe('when argument is not an array', () => {
    it('should return false', () => {
      expect(isDegreeSequence()).toBe(false);
    })
  });

  describe('when argument is empty', () => {
    it('should return false', () => {
      expect(isDegreeSequence([])).toBe(false);
    })
  });

});