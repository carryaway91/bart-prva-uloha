// svk, cze, mag, pl, au
const STATE_CODES = [
  "+421",
  "00421",
  "+420",
  "00420",
  "+36",
  "0036",
  "+48",
  "0048",
  "+380",
  "00380",
  "+43",
  "0043",
];

exports.phoneNrsAreEqual = (userNr: string, dbNr: string): boolean => {
  const userNrsTrimmed = userNr.trim();
  const dbNrsTrimmed = dbNr.trim();
  let userResultNr = userNrsTrimmed.replace(/-|[()|_|.|/| ]/g, "");
  let dbResultNr = dbNrsTrimmed.replace(/-|[()|_|.|/| ] /g, "");

  STATE_CODES.map((code) => {
    if (userResultNr.includes(code)) {
      userResultNr = userResultNr.replace(code, "");
    }
  });

  if (dbResultNr.includes(userResultNr)) {
    return true;
  }

  return false;
};
