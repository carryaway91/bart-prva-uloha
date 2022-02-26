const removeCodeBeforeSlash = (phoneNr: string): string => {
  phoneNr = phoneNr.substring(phoneNr.indexOf("/") + 1, phoneNr.length);
  return phoneNr;
};

exports.phoneNrsAreEqual = (userNr: string, dbNr: string): boolean => {
  if (userNr === "" || dbNr === "") {
    return false;
  }
  let userNrsTrimmed = userNr.trim();
  let dbNrsTrimmed = dbNr.trim();

  //odstrani predvolbu, ktora je pred slashom
  userNrsTrimmed = removeCodeBeforeSlash(userNrsTrimmed);
  dbNrsTrimmed = removeCodeBeforeSlash(dbNrsTrimmed);

  const regex = /-|[()|_|.|+| ]/g;

  let userResultNr = userNrsTrimmed.replace(regex, "");
  let dbResultNr = dbNrsTrimmed.replace(regex, "");

  /* odstrani 00 z medzinarodnych predvolieb */
  if (dbResultNr.startsWith("00")) {
    dbResultNr = dbResultNr.slice(2, dbResultNr.length);
  }
  /* odstrani 0 na zaciatku(pretoze 0 sa na zaciatku v cislach s predvolbou nenachadza) */
  if (dbResultNr.startsWith("0")) {
    dbResultNr = dbResultNr.slice(1, dbResultNr.length);
  }

  if (userResultNr.includes(dbResultNr)) {
    return true;
  }

  return false;
};
