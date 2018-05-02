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

  describe('when argument is not a degree sequence', () => {
    it('should return false', () => {
      expect(isDegreeSequence([1])).toBe(false);
      expect(isDegreeSequence([1, 2, 3])).toBe(false);
      expect(isDegreeSequence([1, 1, 1])).toBe(false);
      expect(isDegreeSequence([5, 1, 2, 3, 1, 3])).toBe(false);
    })
  });

  describe('when argument is a degree sequence', () => {
    it('should return false', () => {
      expect(isDegreeSequence([0])).toBe(true);
      expect(isDegreeSequence([2, 2, 2, 2])).toBe(true);
      expect(isDegreeSequence([5, 5, 5, 5, 5, 5])).toBe(true);
    })
  });
});