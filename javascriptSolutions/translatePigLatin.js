function translatePigLatin(str) {
  const consonants = /^[bcdfghjklmnpqrstvwxyz]/gi;
  const vowels = /[aeiou]/gi;
  const captureConsonants = /(^[bcdfghjklmnpqrstvwxyz]+)(.+$)/gi;

  if (!vowels.test(str)) {
    return str.concat("ay");
  }

  if (consonants.test(str)) {
    return str.replace(captureConsonants, '$2$1ay');
  }
  
  return str.concat("way");
}
