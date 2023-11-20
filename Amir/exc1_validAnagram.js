function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    
    const lut = {}
    for (const char of str1) {
      lut[char] = ++lut[char] || 1
    }
  
    for (const char of str2) {
      if (!lut[char]) return false
      --lut[char]
    }
    return true
  }  